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
    <section className="relative py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto max-w-[1320px] lg:w-[94%]">
        <div className="mb-6 flex flex-col items-center gap-2 text-center md:mb-8">
          {eyebrow && (
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[rgba(255,192,7,1)] md:text-xs">
              {eyebrow}
            </span>
          )}
          <h2 className="max-w-2xl text-[40px] font-semibold uppercase leading-[0.98] text-white/92 md:text-[52px]">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-3xl text-[13px] uppercase leading-[1.3] tracking-[0.18em] text-[rgba(255,192,7,1)] md:text-[15px]">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:items-start md:gap-7">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="group relative flex flex-col overflow-visible"
            >
              <span className="icp-card__index absolute z-20 flex items-center justify-center text-[42px] font-semibold leading-none text-white/92">
                {index + 1}
              </span>
              <div className="icp-card relative mt-2 ml-2">
                <div className="icp-card__content">
                  <div className="icp-card__title">
                    <h3 className="text-[21px] font-semibold leading-[1.12] tracking-tight text-white/90 md:text-[23px]">
                      {card.title}
                    </h3>
                  </div>

                  <div className="icp-card__body mt-2 text-[13px] leading-[1.52] text-white/72">
                    <p className="line-clamp-3">{card.description}</p>
                    {card.symptoms && card.symptoms.length > 0 && (
                      <p className="mt-1.5 line-clamp-2">
                        {card.symptoms[0]}
                        {card.symptoms[1] ? <><br />{card.symptoms[1]}</> : null}
                      </p>
                    )}
                  </div>

                  <div className="icp-card__footer">
                    <button
                      type="button"
                      onClick={() => setOpenCardIndex(index)}
                      className="inline-flex w-fit items-center gap-1 text-[13px] leading-none text-[var(--bbi-red)] transition hover:text-[var(--bbi-red-hover)]"
                    >
                      Разобрать подробнее
                      <span className="text-[12px] leading-none">&gt;&gt;</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <div className="mt-8 flex justify-center">
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
              className="inline-flex items-center justify-center rounded-full bg-[var(--bbi-red)] px-9 py-2.5 text-[16px] font-medium text-white shadow-[0_0_34px_rgba(255,43,68,0.35)] transition hover:bg-[var(--bbi-red-hover)]"
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
