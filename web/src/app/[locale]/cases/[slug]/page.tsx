import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { ru } from "@/content/dictionaries/ru";
import { Container } from "@/components/Container";
import { CaseResultsInfographic } from "@/components/CaseResultsInfographic";

function CaseHeaderIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <rect x="4.5" y="9" width="3.2" height="10" rx="1.2" />
      <rect x="10.4" y="5" width="3.2" height="14" rx="1.2" />
      <rect x="16.3" y="11" width="3.2" height="8" rx="1.2" />
    </svg>
  );
}

type LocalePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    ru.cases.items.map((item) => ({ locale, slug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) return {};
  const dictionary = getDictionary(localeParam as Locale);
  const item = dictionary.cases.items.find((c) => c.slug === slug);
  if (!item) return {};
  return {
    title: item.seoTitle ?? item.company,
    description: item.metaDescription ?? item.excerpt,
    keywords: item.keywords,
  };
}

export default async function CaseDetailPage({ params }: LocalePageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { cases } = dictionary;
  const item = cases.items.find((c) => c.slug === slug);

  if (!item) {
    notFound();
  }

  const { caseDetail } = cases;

  return (
    <div className="relative">
      <section className="relative overflow-hidden pb-8 pt-20">
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 opacity-[0.05]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.22)_0%,transparent_70%)]" />
        </div>
        <Container className="relative mx-auto lg:w-[85%]">
          {item.headerImage ? (
            <div className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f1014] shadow-[0_24px_56px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[2.15/1] md:aspect-[2.35/1]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.headerImage}
                  alt=""
                  className="h-full w-full object-cover object-[center_42%]"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.35)_38%,rgba(0,0,0,0.82)_88%,#0a0a0c_100%)]"
                  aria-hidden
                />
              </div>
              <div className="flex items-start gap-4 border-t border-white/[0.06] bg-[#121318] px-5 py-5 md:gap-5 md:px-7 md:py-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ff2b44] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] md:h-14 md:w-14 md:rounded-[14px]">
                  <CaseHeaderIcon className="h-6 w-6 md:h-7 md:w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ff2b44] md:text-xs md:tracking-[0.26em]">
                    {item.industry}
                  </p>
                  <h1 className="mt-1.5 break-words text-2xl font-bold leading-[1.15] tracking-tight text-white md:text-3xl lg:text-[2.1rem]">
                    {item.h1 ?? item.company}
                  </h1>
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-8 space-y-4">
              <span className="text-xs font-medium uppercase tracking-widest text-[#ff2b44]">
                {item.industry}
              </span>
              <h1 className="break-words text-2xl font-semibold leading-tight md:text-4xl">
                {item.h1 ?? item.company}
              </h1>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <div className="mt-4 flex flex-wrap gap-2 md:mt-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#ff2b44]/25 bg-[#ff2b44]/5 px-3 py-1 text-xs font-medium text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[#ff2b44]/20 bg-gradient-to-br from-[#ff2b44]/10 via-transparent to-transparent px-6 py-5">
              <p className="text-xs font-medium uppercase tracking-widest text-[#ff2b44]/80">
                {caseDetail.result}
              </p>
              <p className="mt-2 text-xl font-bold text-[#ff2b44] md:text-2xl">
                {item.keyResult}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-10">
        <Container className="relative mx-auto space-y-6 lg:w-[85%]">
          {item.sections && item.sections.length > 0 ? (
            <>
              {item.sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <article className="bbi-card rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-6 md:p-8">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff2b44]">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-3">
                      {section.paragraphs?.map((p, i) => (
                        <p key={i} className="text-sm leading-relaxed text-white/85">
                          {p}
                        </p>
                      ))}
                      {section.bullets && section.bullets.length > 0 && (
                        <ul className="space-y-2">
                          {section.bullets.map((b, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff2b44]" />
                              <span className="text-sm leading-relaxed text-white/85">{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.paragraphsAfterBullets && section.paragraphsAfterBullets.length > 0 && (
                        <div className="space-y-2">
                          {section.paragraphsAfterBullets.map((p, i) => (
                            <p key={i} className="text-sm leading-relaxed text-white/85">
                              {p}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                  {section.insertInfographic && (
                    <div className="space-y-6">
                      <div className="grid min-w-0 gap-6 lg:grid-cols-2">
                        <div className="min-w-0">
                          <CaseResultsInfographic
                            items={item.resultNumbers}
                            forecastLabel={caseDetail.infographicForecast}
                            resultLabel={caseDetail.infographicResult}
                            title={caseDetail.infographicTitle}
                          />
                        </div>
                        <div className="min-w-0">
                          <div className="rounded-2xl border border-[#ff2b44]/15 bg-[#1b1c21] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_60px_-12px_rgba(255,43,68,0.15),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-8">
                            <div className="flex items-center gap-2.5">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff2b44]/15 text-[#ff2b44]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                              <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff2b44]">
                                {caseDetail.result}
                              </h2>
                            </div>
                            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                              {item.resultNumbers.map((r, i) => (
                                <div
                                  key={i}
                                  className="min-w-0 overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3"
                                  title={r.before}
                                >
                                  <div className="flex min-w-0 items-start justify-between gap-2">
                                    <span className="shrink-0 truncate text-xs font-medium uppercase tracking-wider text-white/40">
                                      {r.label ?? ""}
                                    </span>
                                    <span className="min-w-0 shrink truncate text-right text-sm font-bold leading-tight text-[#ff2b44]">
                                      {r.after}
                                    </span>
                                  </div>
                                  <p className="mt-1.5 line-clamp-2 overflow-hidden text-xs leading-snug text-white/45">
                                    {r.before}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:p-6">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff2b44]">
                          {caseDetail.artifacts}
                        </h2>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {item.artifacts.map((a) => (
                            <li
                              key={a}
                              className="max-w-[min(100%,18rem)] min-w-0 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80"
                            >
                              <span className="block truncate" title={a}>
                                {a}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              <article className="bbi-card rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff2b44]/20 bg-[#ff2b44]/5 text-[#ff2b44]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff2b44]">
                      {caseDetail.context}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{item.context}</p>
                  </div>
                </div>
              </article>

              <article className="bbi-card rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff2b44]/20 bg-[#ff2b44]/5 text-[#ff2b44]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff2b44]">
                      {caseDetail.problem}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{item.problem}</p>
                  </div>
                </div>
              </article>

              <article className="bbi-card rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff2b44]/20 bg-[#ff2b44]/5 text-[#ff2b44]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2V5a2 2 0 00-2-2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff2b44]">
                      {caseDetail.whatBbiDid}
                    </h2>
                    <ul className="mt-4 space-y-4">
                      {item.whatBbiDid.map((step, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#ff2b44]" />
                          <span className="text-sm leading-relaxed text-white/85">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              <div className="space-y-6">
                <div className="grid min-w-0 gap-6 lg:grid-cols-2">
                  <div className="min-w-0">
                    <CaseResultsInfographic
                      items={item.resultNumbers}
                      forecastLabel={caseDetail.infographicForecast}
                      resultLabel={caseDetail.infographicResult}
                      title={caseDetail.infographicTitle}
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="rounded-2xl border border-[#ff2b44]/15 bg-[#1b1c21] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_60px_-12px_rgba(255,43,68,0.15),inset_0_1px_0_rgba(255,255,255,0.04)] md:p-8">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff2b44]/15 text-[#ff2b44]">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff2b44]">
                          {caseDetail.result}
                        </h2>
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                        {item.resultNumbers.map((r, i) => (
                          <div
                            key={i}
                            className="min-w-0 overflow-hidden rounded-xl border border-white/[0.05] bg-white/[0.02] px-4 py-3"
                            title={r.before}
                          >
                            <div className="flex min-w-0 items-start justify-between gap-2">
                              <span className="shrink-0 truncate text-xs font-medium uppercase tracking-wider text-white/40">
                                {r.label ?? ""}
                              </span>
                              <span className="min-w-0 shrink truncate text-right text-sm font-bold leading-tight text-[#ff2b44]">
                                {r.after}
                              </span>
                            </div>
                            <p className="mt-1.5 line-clamp-2 overflow-hidden text-xs leading-snug text-white/45">
                              {r.before}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:p-6">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff2b44]">
                    {caseDetail.artifacts}
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.artifacts.map((a) => (
                      <li
                        key={a}
                        className="max-w-[min(100%,18rem)] min-w-0 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/80"
                      >
                        <span className="block truncate" title={a}>
                          {a}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <article className="bbi-card rounded-2xl border border-[#ff2b44]/10 bg-[#14151a] p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#ff2b44]/20 bg-[#ff2b44]/10 text-[#ff2b44]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff2b44]">
                      {caseDetail.bbiRole}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">{item.bbiRole}</p>
                  </div>
                </div>
              </article>
            </>
          )}
        </Container>
      </section>
    </div>
  );
}
