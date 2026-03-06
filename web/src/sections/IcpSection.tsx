import Link from "next/link";
import { Container } from "@/components/Container";
import type { HomeCard } from "@/content/dictionaries/types";

type IcpSectionProps = {
  title: string;
  cards: HomeCard[];
};

export function IcpSection({ title, cards }: IcpSectionProps) {
  return (
    <section className="relative py-24">
      <Container className="relative space-y-12">
        <div className="mx-auto w-full text-center">
          <h2 className="text-2xl font-semibold text-[#ff2b44] md:text-3xl">
            {title}
          </h2>
        </div>
        <div className="mx-auto grid gap-10 lg:grid-cols-3 lg:items-stretch">
          {cards.map((card, index) => (
            <article
              key={card.title}
              className="bbi-card group relative flex h-full min-h-[260px] flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[#1b1c21] p-8 md:p-9"
            >
              <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#ff2b44] via-[#b61f33] to-transparent" />
              <div className="pointer-events-none absolute -right-12 -top-16 h-32 w-32 rounded-full border border-white/10 opacity-40" />
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span className="text-[#ff2b44]">Insight</span>
              </div>
              <h3 className="text-lg font-semibold text-white md:text-xl">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                {card.description}
              </p>
              <Link
                href={card.href}
                className="mt-auto text-sm text-[#ff2b44] transition hover:text-[#ff4960] md:text-base"
              >
                {card.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
