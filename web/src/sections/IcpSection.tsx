import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
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
    <section className="relative py-12 md:py-16">
      <Container className="relative mx-auto max-w-6xl lg:w-[95%]">
        <div className="mb-12 flex flex-col items-center gap-2 md:mb-14">
          {eyebrow && (
            <span className="mb-1 text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
              {eyebrow}
            </span>
          )}
          <h2 className="text-center text-3xl font-semibold text-[var(--bbi-text)] md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="max-w-2xl text-center text-[15px] leading-[1.7] text-[var(--bbi-muted)] md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="bbi-card group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 transition hover:border-[var(--bbi-red)]/25 hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] md:p-7"
            >
              <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[var(--bbi-red)]/30 transition-all group-hover:bg-[var(--bbi-red)]" />
              <div className="flex flex-col">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--bbi-red)]/10 text-base font-bold text-[var(--bbi-red)]">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold leading-tight text-[var(--bbi-text)] md:text-xl">
                    {card.title}
                  </h3>
                </div>
                <p className="mb-4 flex-1 text-[15px] leading-[1.7] text-[var(--bbi-muted)] md:text-base">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex w-fit items-center gap-2 border-t border-black/[0.06] pt-3 text-sm font-medium text-[var(--bbi-red)] transition hover:text-[var(--bbi-red-hover)]"
                >
                  {card.linkLabel}
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <div className="mt-8">
            <CtaBlock href={ctaHref} label={ctaLabel} />
          </div>
        )}
      </Container>
    </section>
  );
}
