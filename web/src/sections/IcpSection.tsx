"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { IcpCardModal } from "@/components/IcpCardModal";
import type { HomeCard } from "@/content/dictionaries/types";

type IcpSegment = { title: string; description: string; metrics?: string; pain: string };

const CARD_ICONS = [
  <svg key="fire" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z" clipRule="evenodd" />
  </svg>,
  <svg key="scale" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
  </svg>,
  <svg key="investor" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75m15.75 0h.75.75a.75.75 0 00.75-.75v-.75m0 0V9m0 2.25v.75" />
  </svg>,
];

type IcpSectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: HomeCard[];
  segments?: IcpSegment[];
  ctaLabel?: string;
  ctaHref?: string;
  modalLabels?: { scenarioLabel: string; signsLabel: string; solutionLabel: string };
};

export function IcpSection({ eyebrow, title, subtitle, cards, segments = [], ctaLabel, ctaHref, modalLabels }: IcpSectionProps) {
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[var(--bbi-bg)]/30 to-transparent" />
      <Container className="relative mx-auto max-w-6xl lg:w-[95%]">
        <div className="mb-14 flex flex-col items-center gap-4 text-center md:mb-16">
          {eyebrow && (
            <span className="rounded-full bg-[var(--bbi-red)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--bbi-red)]">
              {eyebrow}
            </span>
          )}
          <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[var(--bbi-text)] md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-xl text-[15px] leading-[1.75] text-[var(--bbi-muted)] md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-start lg:gap-8">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--bbi-text)]/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--bbi-red)]/30 hover:shadow-[0_12px_40px_rgba(185,28,28,0.08)] ${index === 1 ? "sm:z-10 sm:shadow-[0_8px_28px_rgba(0,0,0,0.08)]" : ""}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--bbi-red)]/40 via-[var(--bbi-red)] to-[var(--bbi-red)]/40 opacity-60 transition-opacity group-hover:opacity-100" />
              <div className="flex flex-col p-6 md:p-7">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bbi-red)]/10 text-[var(--bbi-red)] transition-colors group-hover:bg-[var(--bbi-red)]/15">
                    {CARD_ICONS[index % CARD_ICONS.length]}
                  </span>
                  <span className="text-2xl font-bold tabular-nums text-[var(--bbi-text)]/15">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold leading-tight text-[var(--bbi-text)] md:text-xl">
                  {card.title}
                </h3>
                <p className="mb-4 text-[15px] leading-[1.65] text-[var(--bbi-muted)]">
                  {card.description}
                </p>
                {card.symptoms && card.symptoms.length > 0 && (
                  <ul className="mb-4 space-y-1.5 border-l-2 border-[var(--bbi-red)]/20 pl-4">
                    {card.symptoms.slice(0, 2).map((s, i) => (
                      <li key={i} className="text-[13px] leading-snug text-[var(--bbi-muted)]">
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                <button
                  type="button"
                  onClick={() => setOpenCardIndex(index)}
                  className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[var(--bbi-red)] transition hover:gap-3 hover:text-[var(--bbi-red-hover)]"
                >
                  {card.linkLabel}
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <div className="mt-8">
            <CtaBlock href={ctaHref} label={ctaLabel} />
          </div>
        )}

        {openCardIndex !== null && cards[openCardIndex] && (
          <IcpCardModal
            isOpen
            onClose={() => setOpenCardIndex(null)}
            card={cards[openCardIndex]}
            segment={segments[openCardIndex]}
            labels={modalLabels}
          />
        )}
      </Container>
    </section>
  );
}
