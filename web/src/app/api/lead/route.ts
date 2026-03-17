import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/lead
 * Принимает данные формы и создаёт лид в Bitrix24 (если настроен BITRIX24_WEBHOOK_URL).
 * Подготовлено к подключению: после получения webhook URL от заказчика добавить в .env.local.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name = "", company = "", contact = "", turnover = "", request: requestText = "" } = body;

    const webhookUrl = process.env.BITRIX24_WEBHOOK_URL;
    if (!webhookUrl || webhookUrl.trim() === "") {
      return NextResponse.json(
        { ok: false, error: "NOT_CONFIGURED", message: "Bitrix24 webhook not configured" },
        { status: 503 }
      );
    }

    const baseUrl = webhookUrl.replace(/\/$/, "");
    const isEmail = String(contact).includes("@");

    const fields: Record<string, unknown> = {
      TITLE: company || name || "Заявка с сайта",
      NAME: name || "—",
      COMPANY_TITLE: company || "",
      COMMENTS: [requestText, turnover ? `Оборот/команда: ${turnover}` : ""].filter(Boolean).join("\n\n"),
      SOURCE_DESCRIPTION: "Сайт BBI",
    };

    if (contact) {
      if (isEmail) {
        fields.EMAIL = [{ VALUE: contact.trim(), VALUE_TYPE: "WORK" }];
      } else {
        fields.PHONE = [{ VALUE: contact.trim(), VALUE_TYPE: "WORK" }];
      }
    }

    const res = await fetch(`${baseUrl}/crm.lead.add.json`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "BITRIX_ERROR", message: data.error_description || data.error || res.statusText },
        { status: 502 }
      );
    }

    if (data.error) {
      return NextResponse.json(
        { ok: false, error: "BITRIX_ERROR", message: data.error_description || data.error },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, leadId: data.result });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "SERVER_ERROR", message: e instanceof Error ? e.message : "Unknown error" },
      { status: 500 }
    );
  }
}
