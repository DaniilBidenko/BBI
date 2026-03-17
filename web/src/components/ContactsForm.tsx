"use client";

import { useState } from "react";
import type { ContactsPage } from "@/content/dictionaries/types";

const fieldBaseDark =
  "w-full rounded-xl border border-white/10 bg-[#14151a] px-4 py-3 text-sm text-white placeholder:text-white/40 transition focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/50 focus:border-[#ff2b44]/30";

const fieldBaseLight =
  "w-full rounded-xl border border-[var(--bbi-text)]/10 bg-white px-4 py-3 text-sm text-[var(--bbi-text)] placeholder:text-[var(--bbi-muted)] transition focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/40 focus:border-[var(--bbi-red)]/30";

type ContactsFormProps = {
  contacts: ContactsPage;
  variant?: "dark" | "light";
};

export function ContactsForm({ contacts, variant = "dark" }: ContactsFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const isLight = variant === "light";
  const fieldBase = isLight ? fieldBaseLight : fieldBaseDark;
  const labelClass = isLight
    ? "block text-xs font-medium uppercase tracking-wider text-[var(--bbi-muted)]"
    : "block text-xs font-medium uppercase tracking-wider text-white/60";
  const labelClassOptional = isLight
    ? "block text-xs font-medium uppercase tracking-wider text-[var(--bbi-muted)]/80"
    : "block text-xs font-medium uppercase tracking-wider text-white/50";
  const buttonClass = isLight
    ? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--bbi-red)] px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/50 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-70 sm:w-auto sm:min-w-[240px]"
    : "inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff2b44] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#ff4960] focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60 focus:ring-offset-2 focus:ring-offset-[#0e0e0e] disabled:opacity-70 sm:w-auto sm:min-w-[240px]";

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

  if (status === "success") {
    return (
      <div className={isLight ? "rounded-xl bg-[var(--bbi-red)]/10 p-6 text-center text-[var(--bbi-text)]" : "rounded-xl bg-white/10 p-6 text-center text-white"}>
        <p className="text-sm font-medium">{successMsg}</p>
      </div>
    );
  }

  return (
    <form
      className="space-y-6"
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
          className={`${fieldBase} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className={isLight ? "text-sm text-[var(--bbi-red)]" : "text-sm text-red-300"}>
          {errorMsg}
        </p>
      )}
      <div className="pt-2">
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
      </div>
    </form>
  );
}
