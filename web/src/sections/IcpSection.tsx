"use client";

import { Container } from "@/components/Container";
import type { HomeCard } from "@/content/dictionaries/types";

type IcpSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: HomeCard[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function IcpSection({ eyebrow, title, subtitle, cards, ctaLabel, ctaHref }: IcpSectionProps) {
  return (
    <section className="relative py-9 md:py-11">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto max-w-[1320px] lg:w-[94%]">
        <div className="relative mb-5 flex flex-col items-center gap-1.5 text-center md:mb-6">
          <h2 className="max-w-2xl break-words text-[30px] font-semibold uppercase leading-[1.05] text-white/92 sm:text-[36px] md:text-[52px]">
            {title}
          </h2>
          {eyebrow && (
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[rgba(168,142,88,0.9)] md:text-xs">
              {eyebrow}
            </span>
          )}
          {subtitle && (
            <p className="max-w-3xl text-[13px] uppercase leading-[1.3] tracking-[0.18em] text-[rgba(168,142,88,0.9)] md:text-[15px]">
              {subtitle}
            </p>
          )}
        </div>

        <div className="relative grid grid-cols-1 items-stretch gap-4 [grid-auto-rows:1fr] md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={card.href}
              className="group relative flex h-full min-h-0 flex-col overflow-visible"
            >
              <span className="icp-card__index icp-card__index--recognize absolute z-20 flex items-center justify-center text-[42px] font-semibold leading-none text-white/92 transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                {index + 1}
              </span>
              <div className="icp-card icp-card--recognize bbi-hover-lift relative mt-2 ml-2 !h-auto">
                <div className="icp-card__content">
                  <div className="icp-card__title">
                    <h3 className="break-words text-[19px] font-medium leading-[1.14] tracking-tight text-white/90 md:text-[20px]">
                      {card.title}
                    </h3>
                  </div>

                  <div className="icp-card__body mt-2 min-h-0 text-[15px] leading-[1.5] text-white/76 md:text-[15.5px]">
                    <p>{card.description}</p>
                  </div>

                  <div className="icp-card__footer mt-auto pt-3">
                    <details className="group w-full">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-1 border-0 bg-transparent p-0 text-left font-inherit text-[15px] font-medium leading-normal tracking-wide text-[var(--bbi-red)] transition hover:text-[var(--bbi-red-hover)] marker:hidden [&::-webkit-details-marker]:hidden">
                        {card.linkLabel}
                        <span className="text-[13px] font-semibold text-[var(--bbi-red)] transition-transform duration-200 group-open:rotate-90" aria-hidden>
                          &gt;&gt;
                        </span>
                      </summary>
                      {(card.modalLead || (card.symptoms && card.symptoms.length > 0)) && (
                        <div className="mt-2.5 max-h-[28vh] space-y-2 overflow-y-auto pr-1 text-[14px] leading-[1.5] text-white/72 md:max-h-[240px] md:text-[14.5px]">
                          {card.modalLead && <p>{card.modalLead}</p>}
                          {card.symptoms && card.symptoms.length > 0 && (
                            <ul className="list-disc space-y-1 pl-4">
                              {card.symptoms.slice(0, 3).map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </details>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <div className="relative mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => {
                if (ctaHref.startsWith("#")) {
                  const el = document.getElementById(ctaHref.slice(1));
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  return;
                }
                window.location.href = ctaHref;
              }}
              className="inline-flex items-center justify-center rounded-full bg-[var(--bbi-red)] px-9 py-2.5 text-[16px] font-medium text-white shadow-[0_3px_12px_rgba(0,0,0,0.28)] transition hover:bg-[var(--bbi-red-hover)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.32)]"
            >
              {ctaLabel}
            </button>
          </div>
        )}

      </Container>
    </section>
  );
}
