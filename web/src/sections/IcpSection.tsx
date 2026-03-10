import Link from "next/link";
import { Container } from "@/components/Container";
import type { HomeCard } from "@/content/dictionaries/types";

type IcpSectionProps = {
  eyebrow: string;
  title: string;
  cards: HomeCard[];
};

export function IcpSection({ eyebrow, title, cards }: IcpSectionProps) {
  return (
    <section className="relative py-20 md:py-24">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-12 flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="text-center text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="bbi-card group relative flex min-h-[240px] flex-col gap-5 overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-6 transition hover:border-[var(--bbi-red)] md:p-7"
            >
              <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[var(--bbi-red)]" />
              <div className="flex items-center justify-between pl-2">
                <span className="text-xs font-medium tabular-nums text-[var(--bbi-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-md border border-[var(--bbi-red)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--bbi-red)]">
                  Insight
                </span>
              </div>
              <h3 className="pl-2 text-lg font-semibold text-[var(--bbi-text)]">
                {card.title}
              </h3>
              <p className="flex-1 pl-2 text-sm leading-[1.75] text-[var(--bbi-muted)]">
                {card.description}
              </p>
              <div className="pl-2">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--bbi-red)] transition hover:text-[var(--bbi-red-hover)]"
                >
                  {card.linkLabel}
                  <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="absolute bottom-0 left-6 h-px w-8 bg-[var(--bbi-red)]" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
