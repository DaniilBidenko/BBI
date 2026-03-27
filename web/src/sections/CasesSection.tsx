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
    <section className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <h2 className="mb-8 text-center text-[42px] font-semibold uppercase text-white md:mb-10 md:text-[50px]">
          {title}
        </h2>

        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
          {featuredCase && (
            <Link
              href={`/${locale}/cases/${featuredCase.slug}`}
              className="group relative col-span-1 flex flex-col overflow-hidden rounded-[32px] border border-[color:var(--bbi-panel-border)] bg-[radial-gradient(120%_95%_at_45%_0%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.025)_34%,rgba(255,255,255,0)_66%),var(--bbi-panel-bg)] shadow-[0_18px_46px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-white/24 lg:col-span-4"
            >
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-2xl border border-white/28 bg-white/6 text-white/90">
                    <CaseIcon />
                  </div>
                  <div className="pt-1">
                    <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-[rgba(255,43,68,1)]">
                      {featuredCase.industry}
                    </span>
                    <h3 className="mt-1 text-[46px] font-semibold leading-[1.04] text-white md:text-[50px]">
                      {featuredCase.company}
                    </h3>
                  </div>
                </div>
                <p className="max-w-5xl text-[15px] leading-[1.48] text-white/78 md:text-[16px]">
                  {featuredCase.excerpt}
                </p>
                <div className="mt-2 flex flex-wrap gap-2.5">
                  {featuredCase.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-black/24 px-4 py-1.5 text-[13px] text-white/84"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/18 bg-black/30 text-[var(--bbi-red)]">
                    ↗
                  </span>
                  <span className="text-[14px] font-medium text-[var(--bbi-red)] transition group-hover:text-[var(--bbi-red-hover)]">
                    {readMore}
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={`/${locale}/cases`}
            className="group inline-flex items-center gap-1 rounded-full border border-white/28 bg-[linear-gradient(180deg,#f6f6f6_0%,#d8d8d8_100%)] px-5 py-2 text-[20px] font-medium text-[#1a1a1a] transition hover:brightness-105"
          >
            {casesLabel} &gt;&gt;
          </Link>
        </div>
      </Container>
    </section>
  );
}
