import type { ReactNode } from "react";
import { Container } from "@/components/Container";

type Pillar = { title: string; items: string[] };

// Operations: grid/flow | Marketing: funnel | Sales: chart up | Finance: currency | HR: person | Legal: shield
const PILLAR_ICONS: Record<number, ReactNode> = {
  0: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M5 5h4v4H5zM11 5h4v4h-4zM5 11h4v4H5zM11 11h4v4h-4z" />
    </svg>
  ),
  1: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4 4h12l-3 5-2 5-5 2" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M4 14l3-4 4 2 5-6" />
      <path d="M4 17h12" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M6 12V8M10 12V5M14 12v-4" />
      <path d="M5 14h10" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <circle cx="10" cy="6" r="2.5" />
      <path d="M4 18c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    </svg>
  ),
  5: (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M10 3L4 6v6l6 3 6-3V6l-6-3z" />
    </svg>
  ),
};

type WhatWeChangeSectionProps = {
  eyebrow: string;
  title: string;
  pillars: Pillar[];
};

export function WhatWeChangeSection({
  eyebrow,
  title,
  pillars,
}: WhatWeChangeSectionProps) {
  return (
    <section className="relative py-16 md:py-20">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="text-center text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
            {title}
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, pillarIndex) => {
            const Icon = PILLAR_ICONS[pillarIndex] ?? PILLAR_ICONS[0];
            return (
              <article
                key={pillar.title}
                className="bbi-card flex flex-col gap-4 rounded-2xl border border-black/[0.08] bg-white p-6 transition hover:border-[var(--bbi-red)] md:p-7"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--bbi-red)]/10 text-[var(--bbi-red)] [&>svg]:h-4 [&>svg]:w-4">
                    {Icon}
                  </span>
                  <h3 className="text-lg font-semibold text-[var(--bbi-text)]">
                    {pillar.title}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm leading-[1.7] text-[var(--bbi-muted)]">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bbi-red)]/80" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
