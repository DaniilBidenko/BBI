"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import type { ContactsPage } from "@/content/dictionaries/types";
import { defaultLocale, isLocale } from "@/i18n/config";
import { PrivacyPolicyModalLink } from "@/components/PrivacyPolicyModalLink";

const fieldBaseDark =
  "w-full rounded-[8px] border border-white/14 bg-[rgba(10,12,18,0.82)] px-6 py-3.5 text-[16px] leading-[1.45] text-white/90 placeholder:text-white/34 transition focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/40 focus:border-[#ff2b44]/40 md:rounded-[8px] md:px-7";

const fieldBaseDarkPage =
  "w-full rounded-[8px] border border-white/12 bg-[rgba(8,9,11,0.55)] px-5 py-3.5 text-[15px] leading-[1.45] text-white/90 placeholder:text-white/32 backdrop-blur-[2px] transition focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/35 focus:border-[#ff2b44]/38 md:rounded-[8px] md:px-6";

const fieldBaseLight =
  "w-full rounded-xl border border-[var(--bbi-text)]/10 bg-white px-4 py-3 text-sm text-[var(--bbi-text)] placeholder:text-[var(--bbi-muted)] transition focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/40 focus:border-[var(--bbi-red)]/30";

type ContactsFormProps = {
  contacts: ContactsPage;
  variant?: "dark" | "light";
  /** Подписи полей как на странице контактов: мелкий капс, тени под нейтральный shell */
  compactLabels?: boolean;
};

export function ContactsForm({
  contacts,
  variant = "dark",
  compactLabels = false,
}: ContactsFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const pathname = usePathname();
  const isLight = variant === "light";
  const fieldBase = isLight ? fieldBaseLight : compactLabels ? fieldBaseDarkPage : fieldBaseDark;
  const labelClass = isLight
    ? "block text-xs font-medium uppercase tracking-wider text-[var(--bbi-muted)]"
    : compactLabels
      ? "block text-xs font-medium uppercase tracking-[0.14em] text-white/88"
      : "block text-[18px] font-medium uppercase tracking-[0.02em] text-white/72";
  const labelClassOptional = isLight
    ? "block text-xs font-medium uppercase tracking-wider text-[var(--bbi-muted)]/80"
    : compactLabels
      ? "block text-xs font-medium uppercase tracking-[0.14em] text-white/72"
      : "block text-[18px] font-medium uppercase tracking-[0.02em] text-white/65";
const buttonClass = isLight
  ? "inline-flex w-full items-center justify-center gap-2 rounded-[16px] bg-[var(--bbi-red)] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/50 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-70 sm:w-auto sm:min-w-[240px] sm:rounded-full"
  : "inline-flex w-full items-center justify-center gap-2 rounded-[16px] bg-[#ff2b44] px-6 py-3.5 text-[14px] font-medium text-white transition hover:bg-[#ff4960] focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60 focus:ring-offset-2 focus:ring-offset-[#0e0e0e] disabled:opacity-70 sm:w-auto sm:min-w-[180px] sm:rounded-full";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const payload = {
      name: (form.querySelector('[name="name"]') as HTMLInputElement)?.value ?? "",
      company: (form.querySelector('[name="company"]') as HTMLInputElement)?.value ?? "",
      contact: (form.querySelector('[name="contact"]') as HTMLInputElement)?.value ?? "",
      turnover: (form.querySelector('[name="turnover"]') as HTMLInputElement)?.value ?? "",
      request: (form.querySelector('[name="request"]') as HTMLTextAreaElement)?.value ?? "",
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const successMsg = contacts.form.successMessage ?? "Заявка отправлена.";
  const errorMsg = contacts.form.errorMessage ?? "Не удалось отправить заявку.";
  const localeCandidate = (pathname?.split("/").filter(Boolean)[0] ?? "").toLowerCase();
  const locale = isLocale(localeCandidate) ? localeCandidate : defaultLocale;
  const privacyHref = `/${locale}/privacy`;
  const consentTextClass = isLight
    ? "text-xs leading-relaxed text-[var(--bbi-muted)]"
    : compactLabels
      ? "text-[12px] leading-relaxed text-white/62"
      : "text-[13px] leading-relaxed text-white/62";
  const consentBoxClass = isLight
    ? "border-[var(--bbi-text)]/20 bg-white"
    : "border-white/25 bg-[rgba(8,9,11,0.55)]";

  if (status === "success") {
    return (
      <div className={isLight ? "rounded-xl bg-[var(--bbi-red)]/10 p-6 text-center text-[var(--bbi-text)]" : "rounded-xl bg-white/10 p-6 text-center text-white"}>
        <p className="text-sm font-medium">{successMsg}</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="space-y-2">
        <label htmlFor="name" className={labelClass}>
          {contacts.form.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder={contacts.form.name}
          className={fieldBase}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className={labelClass}>
          {contacts.form.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          placeholder={contacts.form.company}
          className={fieldBase}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="contact" className={labelClass}>
          {contacts.form.contact}
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          placeholder={contacts.form.contact}
          className={fieldBase}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="turnover" className={labelClassOptional}>
          {contacts.form.turnoverTeamSize}
        </label>
        <input
          id="turnover"
          name="turnover"
          type="text"
          placeholder={contacts.form.turnoverTeamSize}
          className={fieldBase}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="request" className={labelClass}>
          {contacts.form.request}
        </label>
        <textarea
          id="request"
          name="request"
          rows={4}
          required
          placeholder={contacts.form.request}
          className={`${fieldBase} min-h-[150px] rounded-[8px] py-4 leading-[1.5] resize-y md:rounded-[8px]`}
        />
      </div>

      {status === "error" && (
        <p className={isLight ? "text-sm text-[var(--bbi-red)]" : "text-sm text-red-300"}>
          {errorMsg}
        </p>
      )}
      <div className={compactLabels ? "pt-2" : "pt-1"}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={buttonClass}
        >
          {status === "submitting" ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              {contacts.form.submit}
            </>
          ) : (
            contacts.form.submit
          )}
        </button>
        <label className="mt-3 flex max-w-3xl items-start gap-3">
          <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
            <input
              type="checkbox"
              name="consent"
              required
              className="peer absolute h-5 w-5 cursor-pointer opacity-0"
            />
            <span
              className={`h-5 w-5 rounded-[6px] border transition ${consentBoxClass} peer-checked:border-[var(--bbi-red)] peer-checked:bg-[var(--bbi-red)]/10`}
              aria-hidden="true"
            />
            <svg
              viewBox="0 0 12 10"
              className="pointer-events-none absolute h-3 w-3 text-[var(--bbi-red)] opacity-0 transition peer-checked:opacity-100"
              aria-hidden="true"
            >
              <path
                d="M1 5.5l3 3L11 1.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={consentTextClass}>
            Нажимая на кнопку "Отправить", я даю свое согласие на{" "}
            <PrivacyPolicyModalLink
              href={privacyHref}
              className="text-[var(--bbi-red)] transition hover:opacity-85"
              title="Политика конфиденциальности"
            >
              обработку моих персональных данных
            </PrivacyPolicyModalLink>
            .
          </span>
        </label>
      </div>
    </form>
  );
}
