"use client";

import { useEffect } from "react";
import type { HomeCard } from "@/content/dictionaries/types";

type IcpSegment = { title: string; description: string; metrics?: string; pain: string };

type IcpCardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  card: HomeCard;
  segment?: IcpSegment;
  labels?: { scenarioLabel: string; signsLabel: string; solutionLabel: string };
};

function ListBlock({ items, bulletClass }: { items: string[]; bulletClass: string }) {
  return (
    <ul className="space-y-2.5">
      {items.map((s, i) => (
        <li key={i} className="flex gap-2.5 text-[13px] leading-snug text-white/85 md:text-[14px] md:leading-relaxed">
          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${bulletClass}`} aria-hidden />
          <span>{s}</span>
        </li>
      ))}
    </ul>
  );
}

export function IcpCardModal({ isOpen, onClose, card, segment, labels }: IcpCardModalProps) {
  const scenarioLabel = labels?.scenarioLabel ?? "Разбор сценария";
  const signsLabel = labels?.signsLabel ?? "Типичные признаки";
  const solutionLabel = labels?.solutionLabel ?? "Что можно сделать";

  const hasPartnership =
    (card.partnershipCriteria && card.partnershipCriteria.length > 0) ||
    (card.partnershipResults && card.partnershipResults.length > 0);
  const showSegment = segment && !hasPartnership;

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
        className="absolute inset-0 bg-black/60 backdrop-blur-lg transition-opacity duration-200"
        onClick={onClose}
        aria-hidden
      />
      <div
        className="relative z-10 flex max-h-[min(90vh,880px)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/25 bg-[linear-gradient(165deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_38%,rgba(10,12,18,0.86)_100%)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-white/20 bg-white/[0.08] px-5 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--bbi-red)]">
            {scenarioLabel}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/85 transition hover:bg-white/20 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-6 md:py-6">
          <div className="mb-6">
            {card.modalLead ? (
              <p
                id="icp-modal-title"
                className="whitespace-pre-line text-[15px] font-medium leading-[1.65] text-white md:text-[16px] md:leading-[1.7]"
              >
                {card.modalLead}
              </p>
            ) : (
              <>
                <h3 id="icp-modal-title" className="text-lg font-semibold leading-tight text-white md:text-xl">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-white/88 md:text-[15px]">{card.description}</p>
              </>
            )}
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {card.symptoms && card.symptoms.length > 0 && (
              <div className="rounded-xl border border-white/20 bg-white/[0.08] p-4 md:p-5 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
                <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">{signsLabel}</h4>
                <ListBlock items={card.symptoms} bulletClass="bg-[var(--bbi-red)]" />
              </div>
            )}

            <div className="flex min-w-0 flex-col gap-5">
              {card.partnershipCriteria && card.partnershipCriteria.length > 0 && (
                <div className="rounded-xl border border-white/20 bg-white/[0.08] p-4 shadow-[0_12px_30px_rgba(0,0,0,0.28)] md:p-5">
                  <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                    {card.partnershipCriteriaLabel ?? "Критерии партнерства"}
                  </h4>
                  <ListBlock items={card.partnershipCriteria} bulletClass="bg-white/80" />
                </div>
              )}

              {showSegment && (
                <div className="rounded-xl border border-[rgba(255,43,68,0.45)] bg-[rgba(255,43,68,0.16)] p-4 md:p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--bbi-red)]">
                    {segment.title}
                  </p>
                  <p className="mt-1.5 text-[13px] leading-snug text-white/92 md:text-[14px]">{segment.description}</p>
                  {segment.metrics && (
                    <p className="mt-2 text-[12px] font-medium tabular-nums text-white/85">{segment.metrics}</p>
                  )}
                </div>
              )}

              {card.partnershipResults && card.partnershipResults.length > 0 && (
                <div className="rounded-xl border-l-4 border-[var(--bbi-red)] bg-[rgba(255,43,68,0.16)] p-4 md:p-5">
                  <h4 className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">
                    {card.partnershipResultsLabel ?? "Результат партнерства"}
                  </h4>
                  <ListBlock items={card.partnershipResults} bulletClass="bg-[var(--bbi-red)]" />
                </div>
              )}

              {card.solutionHint && !card.partnershipResults?.length && (
                <div className="rounded-xl border border-white/20 bg-white/[0.08] p-4 md:p-5">
                  <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/85">
                    {solutionLabel}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-white/90 md:text-[14px]">{card.solutionHint}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
