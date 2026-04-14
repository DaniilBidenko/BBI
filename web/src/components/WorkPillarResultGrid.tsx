"use client";

import { useEffect, useId, useState } from "react";
import type { WorkPillar } from "@/content/dictionaries/types";

const detailsTextClass =
  "text-[13px] font-medium leading-snug text-[rgba(255,192,7,1)] sm:text-[14px]";

const shellClass = "icp-card icp-card--pillar-result";
const indexClass = "icp-card__index icp-card__index--pillar-result";

type WorkPillarResultGridProps = {
  pillars: WorkPillar[];
  detailsLabel: string;
  modalLabels: {
    whatWeBuild: string;
    partnerLabel: string;
    closeLabel: string;
  };
};

export function WorkPillarResultGrid({ pillars, detailsLabel, modalLabels }: WorkPillarResultGridProps) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const titleId = useId();
  const openPillar = openKey ? pillars.find((p) => p.key === openKey) : undefined;
  const expanded = openPillar?.resultExpanded;

  useEffect(() => {
    if (!openKey) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenKey(null);
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [openKey]);

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-4 [align-items:stretch] sm:grid-cols-2 sm:gap-4 md:gap-5 lg:gap-5 xl:grid-cols-3 xl:gap-5 2xl:gap-6">
        {pillars.map((pillar, i) => {
          const hasModal = Boolean(pillar.resultExpanded);
          return (
            <article key={`${pillar.key}-result`} className="group relative flex h-full min-h-0 min-w-0 flex-col overflow-visible">
              <span
                className={`${indexClass} absolute z-20 flex items-center justify-center text-[34px] font-semibold leading-none sm:text-[38px] md:text-[40px] lg:text-[42px]`}
                aria-hidden
              >
                {i + 1}
              </span>
              <div className={`${shellClass} relative mt-1 ml-1 min-w-0 sm:mt-1.5 sm:ml-1.5 md:mt-2 md:ml-2`}>
                <div className="icp-card__content">
                  <div className="icp-card__title">
                    <h3 className="break-words text-[1.0625rem] font-semibold leading-[1.14] tracking-tight text-white/90 sm:text-[1.1875rem] md:text-[1.25rem] lg:text-[1.3125rem]">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="icp-card__body mt-1.5 text-[0.875rem] leading-[1.52] text-white/78 sm:mt-2 sm:text-[0.9375rem] sm:leading-[1.48] md:text-[0.96875rem] md:leading-[1.48] lg:text-[1rem]">
                    <p className="line-clamp-[5] break-words sm:line-clamp-4 md:line-clamp-[5] xl:line-clamp-4">{pillar.result}</p>
                  </div>
                  <div className="icp-card__footer">
                    {hasModal ? (
                      <button
                        type="button"
                        onClick={() => setOpenKey(pillar.key)}
                        className={`${detailsTextClass} cursor-pointer border-0 bg-transparent p-0 text-left underline-offset-2 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgba(255,192,7,0.65)]`}
                      >
                        {`${detailsLabel} >>`}
                      </button>
                    ) : (
                      <span className={detailsTextClass}>{`${detailsLabel} >>`}</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {openKey && expanded && openPillar && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal
          aria-labelledby={titleId}
          role="dialog"
        >
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-lg transition-opacity duration-200"
            onClick={() => setOpenKey(null)}
            aria-hidden
          />
          <div
            className="relative z-10 flex max-h-[min(90vh,880px)] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/20 bg-[linear-gradient(165deg,rgba(255,192,7,0.08)_0%,rgba(255,255,255,0.04)_32%,rgba(10,12,18,0.92)_100%)] text-white shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between border-b border-white/15 bg-white/[0.06] px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[rgba(255,192,7,0.95)]">
                {detailsLabel}
              </span>
              <button
                type="button"
                onClick={() => setOpenKey(null)}
                aria-label={modalLabels.closeLabel}
                className="flex h-8 w-8 items-center justify-center rounded-full text-white/85 transition hover:bg-white/15 hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 md:px-6 md:py-6">
              <h3 id={titleId} className="text-lg font-semibold leading-tight text-white md:text-xl">
                {openPillar.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/78 md:text-[1rem]">{openPillar.result}</p>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(255,192,7,0.9)]">
                    {modalLabels.whatWeBuild}
                  </h4>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/88 md:text-[1rem]">{expanded.whatWeBuild}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(255,192,7,0.9)]">
                    {modalLabels.partnerLabel}
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {expanded.partnerOutcomes.map((line, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2.5 text-[0.875rem] leading-snug text-white/85 md:text-[0.9375rem] md:leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(255,192,7,0.95)]" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
