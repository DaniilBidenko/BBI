import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import type { HomeStep } from "@/content/dictionaries/types";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  approaches: HomeStep[];
  ctaLabel?: string;
  ctaHref?: string;
};

const ICONS: Record<number, string> = {
  0: "M4 4h5v5H4V4zm11 0h5v5h-5V4zM4 15h5v5H4v-5zm11 0h5v5h-5v-5z",
  1: "M9 2c3.9 0 7 3.1 7 7 0 1.4-.4 2.7-1.1 3.8l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 009 2zm0 2a5 5 0 100 10 5 5 0 000-10z",
  2: "M4 5h16v2H4V5zm2 5h12v2H6v-2zm-2 5h16v2H4v-2zm4 5h8v2H8v-2z",
  3: "M12 2l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9L8.4 13l.7-4L6 6.2l4-.6L12 2z",
};

export function ProcessSection({
  eyebrow,
  title,
  approaches,
  ctaLabel,
  ctaHref,
}: ProcessSectionProps) {
  return (
    <section id="process" className="relative pt-12 pb-20 md:pt-16 md:pb-24">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-6 flex flex-col items-center gap-3 md:mb-8">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="text-center text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {approaches.map((item, index) => (
            <article
              key={item.title}
              className="bbi-card group relative flex flex-col rounded-2xl border border-black/[0.08] bg-white p-6 transition-all duration-200 hover:border-[var(--bbi-red)] hover:shadow-[0_4px_20px_rgba(185,28,28,0.12)] md:p-7"
            >
              <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-black/20 transition-colors group-hover:bg-[var(--bbi-red)]" />
              <div className="mb-4 flex items-center justify-between pl-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/[0.08] text-sm font-bold text-[var(--bbi-text)] transition-colors group-hover:bg-[var(--bbi-red)] group-hover:text-white">
                  {index + 1}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-[var(--bbi-bg)] transition-colors group-hover:border-[var(--bbi-red)]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-[var(--bbi-muted)] transition-colors group-hover:text-[var(--bbi-red)]"
                  >
                    <path d={ICONS[index]} />
                  </svg>
                </div>
              </div>
              <h3 className="pl-2 text-lg font-semibold text-[var(--bbi-text)]">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 pl-2 text-sm leading-[1.75] text-[var(--bbi-muted)]">
                {item.description}
              </p>
              <div className="mt-6 h-1 w-10 rounded-full bg-black/20 pl-2 transition-all duration-200 group-hover:bg-[var(--bbi-red)]" />
            </article>
          ))}
        </div>
        {ctaLabel && ctaHref && (
          <CtaBlock href={ctaHref} label={ctaLabel} />
        )}
      </Container>
    </section>
  );
}
