import { NextRequest, NextResponse } from "next/server";

const FETCH_TIMEOUT_MS = 10_000;
const MAX_ATTEMPTS = 3;
const RETRYABLE_STATUSES = new Set([408, 425, 429, 500, 502, 503, 504]);

function maskContact(contact: string) {
  const normalized = contact.trim();
  if (!normalized) return "";
  if (normalized.includes("@")) {
    const [name, domain] = normalized.split("@");
    const safeName = name.length <= 2 ? `${name[0] ?? "*"}*` : `${name.slice(0, 2)}***`;
    return `${safeName}@${domain ?? "***"}`;
  }
  return normalized.length <= 4 ? "***" : `${normalized.slice(0, 4)}***`;
}

function normalizeString(value: unknown, maxLength = 512) {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function looksLikePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 7;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * POST /api/lead
 * Принимает данные формы и создаёт лид в Bitrix24 (если настроен BITRIX24_WEBHOOK_URL).
 * Подготовлено к подключению: после получения webhook URL от заказчика добавить в .env.local.
 */
export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID();
  try {
    console.info("[api/lead] handler started", {
      requestId,
      method: request.method,
      pathname: request.nextUrl.pathname,
    });

    const body = await request.json().catch((error) => {
      console.warn("[api/lead] invalid json body", {
        requestId,
        message: error instanceof Error ? error.message : "Unknown JSON parse error",
      });
      throw new Error("INVALID_JSON");
    });
    const { name = "", company = "", contact = "", turnover = "", request: requestText = "" } = body;
    const normalizedName = normalizeString(name, 128);
    const normalizedCompany = normalizeString(company, 128);
    const normalizedContact = normalizeString(contact, 128);
    const normalizedTurnover = normalizeString(turnover, 256);
    const normalizedRequestText = normalizeString(requestText, 2_000);
    const safeContact = maskContact(normalizedContact);

    console.info("[api/lead] request received", {
      requestId,
      name: normalizedName.slice(0, 64),
      company: normalizedCompany.slice(0, 64),
      contact: safeContact,
      hasTurnover: Boolean(normalizedTurnover),
      hasRequestText: Boolean(normalizedRequestText),
    });

    if (!normalizedName && !normalizedCompany) {
      console.warn("[api/lead] validation failed: name and company are empty", { requestId });
      return NextResponse.json(
        {
          ok: false,
          error: "VALIDATION_ERROR",
          message: "Either name or company must be provided",
          requestId,
        },
        { status: 400 }
      );
    }

    if (!normalizedContact) {
      console.warn("[api/lead] validation failed: contact is empty", { requestId });
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", message: "Contact is required", requestId },
        { status: 400 }
      );
    }

    const isEmail = normalizedContact.includes("@");
    if (isEmail && !looksLikeEmail(normalizedContact)) {
      console.warn("[api/lead] validation failed: invalid email", { requestId });
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", message: "Contact email is invalid", requestId },
        { status: 400 }
      );
    }

    if (!isEmail && !looksLikePhone(normalizedContact)) {
      console.warn("[api/lead] validation failed: invalid phone", { requestId });
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", message: "Contact phone is invalid", requestId },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.BITRIX24_WEBHOOK_URL;
    if (!webhookUrl || webhookUrl.trim() === "") {
      console.warn("[api/lead] bitrix webhook not configured", { requestId });
      return NextResponse.json(
        { ok: false, error: "NOT_CONFIGURED", message: "Bitrix24 webhook not configured", requestId },
        { status: 503 }
      );
    }

    const baseUrl = webhookUrl.replace(/\/$/, "");
    if (!/^https?:\/\//i.test(baseUrl)) {
      console.error("[api/lead] invalid webhook url format", { requestId });
      return NextResponse.json(
        { ok: false, error: "NOT_CONFIGURED", message: "Bitrix24 webhook URL is invalid", requestId },
        { status: 503 }
      );
    }

    const fields: Record<string, unknown> = {
      TITLE: normalizedCompany || normalizedName || "Заявка с сайта",
      NAME: normalizedName || "—",
      COMPANY_TITLE: normalizedCompany || "",
      COMMENTS: [normalizedRequestText, normalizedTurnover ? `Оборот/команда: ${normalizedTurnover}` : ""]
        .filter(Boolean)
        .join("\n\n"),
      SOURCE_DESCRIPTION: "Сайт BBI",
    };

    if (isEmail) {
      fields.EMAIL = [{ VALUE: normalizedContact, VALUE_TYPE: "WORK" }];
    } else {
      fields.PHONE = [{ VALUE: normalizedContact, VALUE_TYPE: "WORK" }];
    }

    console.info("[api/lead] sending request to bitrix", {
      requestId,
      endpoint: `${baseUrl}/crm.lead.add.json`,
      isEmail,
    });

    let lastErrorMessage = "Unknown error";
    let res: Response | null = null;
    let data: Record<string, unknown> = {};

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

      try {
        res = await fetch(`${baseUrl}/crm.lead.add.json`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fields }),
          signal: controller.signal,
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : "Network error";
        lastErrorMessage = message;
        console.warn("[api/lead] bitrix network error", {
          requestId,
          attempt,
          message,
        });
        clearTimeout(timeoutId);
        if (attempt < MAX_ATTEMPTS) {
          await sleep(300 * 2 ** (attempt - 1));
          continue;
        }
        break;
      } finally {
        clearTimeout(timeoutId);
      }

      console.info("[api/lead] bitrix response received", {
        requestId,
        attempt,
        status: res.status,
        ok: res.ok,
      });

      const rawText = await res.text();
      try {
        data = rawText ? (JSON.parse(rawText) as Record<string, unknown>) : {};
      } catch {
        data = {};
      }

      if (res.ok && !data.error) {
        break;
      }

      const apiMessage =
        String(data.error_description ?? "") || String(data.error ?? "") || res.statusText || "Bitrix request failed";
      lastErrorMessage = apiMessage;

      if (!res.ok && RETRYABLE_STATUSES.has(res.status) && attempt < MAX_ATTEMPTS) {
        console.warn("[api/lead] retrying bitrix request", {
          requestId,
          attempt,
          status: res.status,
          message: apiMessage,
        });
        await sleep(300 * 2 ** (attempt - 1));
        continue;
      }

      break;
    }

    if (!res) {
      return NextResponse.json(
        { ok: false, error: "BITRIX_UNAVAILABLE", message: lastErrorMessage, requestId },
        { status: 502 }
      );
    }

    if (!res.ok) {
      console.warn("[api/lead] bitrix request failed", {
        requestId,
        status: res.status,
        message: String(data.error_description ?? "") || String(data.error ?? "") || res.statusText,
      });
      return NextResponse.json(
        {
          ok: false,
          error: "BITRIX_ERROR",
          message: String(data.error_description ?? "") || String(data.error ?? "") || res.statusText,
          requestId,
        },
        { status: 502 }
      );
    }

    if (data.error) {
      console.warn("[api/lead] bitrix returned api error", {
        requestId,
        message: String(data.error_description ?? "") || String(data.error ?? ""),
      });
      return NextResponse.json(
        {
          ok: false,
          error: "BITRIX_ERROR",
          message: String(data.error_description ?? "") || String(data.error ?? ""),
          requestId,
        },
        { status: 502 }
      );
    }

    const leadId = typeof data.result === "number" || typeof data.result === "string" ? data.result : null;
    if (!leadId) {
      console.error("[api/lead] bitrix success response without lead id", {
        requestId,
        response: data,
      });
      return NextResponse.json(
        { ok: false, error: "BITRIX_INVALID_RESPONSE", message: "Bitrix response has no lead id", requestId },
        { status: 502 }
      );
    }

    console.info("[api/lead] lead created", {
      requestId,
      leadId,
    });
    return NextResponse.json({ ok: true, leadId, requestId });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown error";
    if (message === "INVALID_JSON") {
      return NextResponse.json(
        { ok: false, error: "INVALID_JSON", message: "Request body must be valid JSON", requestId },
        { status: 400 }
      );
    }

    console.error("[api/lead] unhandled error", {
      requestId,
      message,
      stack: e instanceof Error ? e.stack : undefined,
    });
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR", message, requestId },
      { status: 500 }
    );
  }
}
