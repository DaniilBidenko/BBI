"use client";

import { useEffect } from "react";

type IcpSegment = { title: string; description: string; metrics?: string; pain: string };
type HomeCard = {
  title: string;
  description: string;
  linkLabel: string;
  symptoms?: string[];
  solutionHint?: string;
};

type IcpCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  card: HomeCard;
  segment?: IcpSegment;
  labels?: { scenarioLabel: string; signsLabel: string; solutionLabel: string };
};

export function IcpCardModal({ isOpen, onClose, card, segment, labels }: IcpCardModalProps) {
  const scenarioLabel = labels?.scenarioLabel ?? "Разбор сценария";
  const signsLabel = labels?.signsLabel ?? "Типичные признаки";
  const solutionLabel = labels?.solutionLabel ?? "Что можно сделать";
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal
      aria-labelledby="icp-modal-title"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative z-10 w-full max-w-lg rounded-2xl border border-[var(--bbi-text)]/[0.08] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/[0.06] px-5 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--bbi-red)]">{scenarioLabel}</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--bbi-muted)] transition hover:bg-[var(--bbi-bg)] hover:text-[var(--bbi-text)]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid gap-4 p-5 md:grid-cols-[1fr_1fr] md:gap-5 md:p-6">
          <div className="md:col-span-2">
            <h3 id="icp-modal-title" className="text-lg font-semibold leading-tight text-[var(--bbi-text)]">
              {card.title}
            </h3>
            <p className="mt-1 text-[14px] leading-[1.6] text-[var(--bbi-muted)]">
              {card.description}
            </p>
          </div>

          {card.symptoms && card.symptoms.length > 0 && (
            <div>
              <h4 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--bbi-text)]/90">
                {signsLabel}
              </h4>
              <ul className="space-y-1">
                {card.symptoms.slice(0, 3).map((s, i) => (
                  <li key={i} className="flex gap-2 text-[13px] leading-snug text-[var(--bbi-muted)]">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--bbi-red)]/60" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-3">
            {segment && (
              <div className="rounded-lg border border-[var(--bbi-red)]/10 bg-[var(--bbi-red)]/[0.03] p-3">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--bbi-red)]">{segment.title}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-[var(--bbi-text)]/90">{segment.description}</p>
                {segment.metrics && (
                  <p className="mt-1 text-[12px] font-medium tabular-nums text-[var(--bbi-text)]/80">{segment.metrics}</p>
                )}
              </div>
            )}
            {card.solutionHint && (
              <div className="rounded-lg border-l-2 border-[var(--bbi-red)] bg-[var(--bbi-bg)]/50 p-3">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--bbi-text)]">{solutionLabel}</h4>
                <p className="mt-0.5 text-[13px] leading-snug text-[var(--bbi-muted)]">{card.solutionHint}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
