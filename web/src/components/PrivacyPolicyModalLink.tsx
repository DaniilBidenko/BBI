"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PRIVACY_POLICY_TEXT } from "@/content/privacyPolicyText";

type PrivacyPolicyModalLinkProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
};

export function PrivacyPolicyModalLink({
  href: _href,
  children,
  className,
  title = "Политика конфиденциальности",
}: PrivacyPolicyModalLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const modal = (
    <div
      className="bbi-privacy-overlay fixed inset-0 z-[140] flex items-center justify-center p-4 backdrop-blur-[3px] md:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bbi-privacy-modal relative h-[88vh] w-[min(96vw,1060px)] overflow-hidden rounded-[22px] border border-white/18 bg-[linear-gradient(180deg,#11151d_0%,#0a0d12_100%)] shadow-[0_24px_80px_rgba(0,0,0,0.62)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/12 bg-[linear-gradient(180deg,rgba(18,22,30,0.98)_0%,rgba(12,15,21,0.98)_100%)] px-4 py-3 md:px-6 md:py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-white/86 md:text-base">{title}</p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white/40 hover:text-white"
            aria-label="Закрыть окно политики конфиденциальности"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="h-[calc(88vh-57px)] overflow-y-auto overscroll-contain px-4 py-4 md:px-6 md:py-5">
          <div className="whitespace-pre-line text-[13.5px] leading-[1.62] text-white/85 md:text-[15px] md:leading-[1.68]">
            {PRIVACY_POLICY_TEXT}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>

      {isOpen && isMounted ? createPortal(modal, document.body) : null}
    </>
  );
}
