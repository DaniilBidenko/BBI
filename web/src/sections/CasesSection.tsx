import Link from "next/link";
import { Container } from "@/components/Container";
import type { CaseStudy } from "@/content/dictionaries/types";

const READ_MORE_ARROW = (
  <svg viewBox="0 0 24 24" fill="none" className="h-[11px] w-[11px]" aria-hidden>
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function CaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)] md:h-8 md:w-8">
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
        <h2 className="mb-7 break-words text-center text-[30px] font-semibold uppercase text-white sm:text-[38px] md:mb-10 md:text-[50px]">
          {title}
        </h2>

        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
          {featuredCase && (
            <Link
              href={`/${locale}/cases/${featuredCase.slug}`}
              className="bbi-case-shell-cateye group relative col-span-1 flex flex-col overflow-hidden rounded-[26px] transition-colors hover:border-white/18 md:rounded-[30px] lg:col-span-4"
            >
              <div className="flex flex-1 flex-col gap-4 p-4 md:gap-5 md:p-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bbi-case-icon-cateye flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-xl text-white/90 md:h-[56px] md:w-[56px] md:rounded-2xl">
                    <CaseIcon />
                  </div>
                  <div className="pt-0.5 md:pt-1">
                    <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-[rgba(255,43,68,1)] md:text-[12px] md:tracking-[0.2em]">
                      {featuredCase.industry}
                    </span>
                    <h3 className="mt-1 break-words text-[28px] font-semibold leading-[1.06] text-white sm:text-[34px] md:text-[50px]">
                      {featuredCase.company}
                    </h3>
                  </div>
                </div>
                <p className="max-w-5xl break-words text-[14px] leading-[1.52] text-white/78 md:text-[16px]">
                  {featuredCase.excerpt}
                </p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {featuredCase.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/11 bg-white/[0.045] px-3 py-1 text-[12px] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:px-4 md:py-1.5 md:text-[13px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-2">
                  <span className="bbi-cateye-details bbi-cateye-details--neutral pointer-events-none inline-flex w-fit max-w-full items-center gap-2 text-[13px] font-medium leading-none text-white/86 transition group-hover:text-white/95 md:text-[14px]">
                    <span className="bbi-cateye-details__icon" aria-hidden>
                      {READ_MORE_ARROW}
                    </span>
                    {readMore}
                  </span>
                </div>
              </div>
            </Link>
          )}
        </div>

        <div className="mt-7 flex justify-center md:mt-8">
          <Link href={`/${locale}/cases`} className="bbi-cases-all-pill group">
            {casesLabel} &gt;&gt;
          </Link>
        </div>
      </Container>
    </section>
  );
}
