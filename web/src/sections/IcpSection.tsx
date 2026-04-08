"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import { IcpCardModal } from "@/components/IcpCardModal";
import type { HomeCard } from "@/content/dictionaries/types";

type IcpSegment = { title: string; description: string; metrics?: string; pain: string };

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

        <div className="relative grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start md:gap-5 xl:grid-cols-3">
          {cards.map((card, index) => (
            <article
              key={card.href}
              className="group relative flex flex-col overflow-visible"
            >
              <span className="icp-card__index icp-card__index--recognize absolute z-20 flex items-center justify-center text-[42px] font-semibold leading-none text-white/92">
                {index + 1}
              </span>
              <div className="icp-card icp-card--recognize relative mt-2 ml-2 !h-auto">
                <div className="icp-card__content">
                  <div className="icp-card__title">
                    <h3 className="break-words text-[17px] font-medium leading-[1.14] tracking-tight text-white/90 md:text-[18px]">
                      {card.title}
                    </h3>
                  </div>

                  <div className="icp-card__body mt-2 text-[12.5px] leading-[1.5] text-white/76 md:text-[13px]">
                    <p>{card.description}</p>
                  </div>

                  <div className="icp-card__footer mt-3">
                    <button
                      type="button"
                      onClick={() => setOpenCardIndex(index)}
                      className="inline-flex w-fit cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-left font-inherit text-[13px] font-medium leading-normal tracking-wide text-[var(--bbi-red)] transition hover:text-[var(--bbi-red-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--bbi-red)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f1012]"
                    >
                      {card.linkLabel}
                      <span className="text-[12px] font-semibold text-[var(--bbi-red)]" aria-hidden>
                        &gt;&gt;
                      </span>
                    </button>
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
