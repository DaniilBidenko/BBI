"use client";

import { useState } from "react";
import type { ContactsPage } from "@/content/dictionaries/types";

const fieldBase =
  "w-full rounded-xl border border-white/10 bg-[#14151a] px-4 py-3 text-sm text-white placeholder:text-white/40 transition focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/50 focus:border-[#ff2b44]/30";

type ContactsFormProps = {
  contacts: ContactsPage;
};

export function ContactsForm({ contacts }: ContactsFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        setStatus("submitting");
        // TODO: connect to backend / CRM
        setTimeout(() => setStatus("idle"), 500);
      }}
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-white/60">
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
        <label htmlFor="company" className="block text-xs font-medium uppercase tracking-wider text-white/60">
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
        <label htmlFor="contact" className="block text-xs font-medium uppercase tracking-wider text-white/60">
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
        <label htmlFor="turnover" className="block text-xs font-medium uppercase tracking-wider text-white/50">
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
        <label htmlFor="request" className="block text-xs font-medium uppercase tracking-wider text-white/60">
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

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ff2b44] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#ff4960] focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60 focus:ring-offset-2 focus:ring-offset-[#0e0e0e] disabled:opacity-70 sm:w-auto sm:min-w-[240px]"
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
