import Link from "next/link";
import { Container } from "@/components/Container";
import type { CaseStudy } from "@/content/dictionaries/types";

function CaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[var(--bbi-red)]">
      <circle cx="6" cy="7" r="2" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="12" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M6 7v10M12 7v10M18 7v10M6 7h6M12 7h6M6 17h6M12 17h6" strokeWidth="0.8" />
    </svg>
  );
}

type CasesSectionProps = {
  title: string;
  casesLabel: string;
  readMore: string;
  cases: CaseStudy[];
  locale: string;
};

export function CasesSection({
  title,
  casesLabel,
  readMore,
  cases,
  locale,
}: CasesSectionProps) {
  const featuredCase = cases[0];

  return (
    <section className="relative py-20 md:py-24">
      <Container className="relative mx-auto lg:w-[90%]">
        <h2 className="mb-12 text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
          {title}
        </h2>

        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
          {featuredCase && (
            <Link
              href={`/${locale}/cases/${featuredCase.slug}`}
              className="bbi-card group relative col-span-1 flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)] lg:col-span-2"
            >
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--bbi-red)] bg-[var(--bbi-red)]/5">
                    <CaseIcon />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--bbi-red)]">
                    {featuredCase.industry}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--bbi-text)] md:text-xl">
                  {featuredCase.company}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--bbi-muted)] line-clamp-2">
                  {featuredCase.excerpt}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {featuredCase.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-black/10 px-2 py-0.5 text-xs text-[var(--bbi-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-[var(--bbi-red)] transition group-hover:text-[var(--bbi-red-hover)]">
                  {readMore} →
                </span>
              </div>
            </Link>
          )}
        </div>

        <div className="mt-10 border-t border-black/[0.06] pt-8">
          <Link
            href={`/${locale}/cases`}
            className="group inline-flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white/80 px-5 py-2.5 text-sm font-medium text-[var(--bbi-text)] transition-all hover:border-[var(--bbi-red)]/25 hover:bg-white hover:text-[var(--bbi-red)] hover:shadow-[0_2px_12px_rgba(185,28,28,0.06)]"
          >
            {casesLabel}
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
