import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { ru } from "@/content/dictionaries/ru";
import { Container } from "@/components/Container";
import { withLocale } from "@/i18n/paths";

type LocalePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    ru.cases.items.map((item) => ({ locale, slug: item.slug }))
  );
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
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,43,68,0.6)_0%,transparent_70%)]" />
        </div>
        <Container className="relative mx-auto lg:w-[85%]">
          <Link
            href={withLocale(locale, "/cases")}
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50 transition hover:text-white"
          >
            {caseDetail.backToCases}
          </Link>
          <div className="space-y-6">
            <div>
              <span className="text-xs font-medium uppercase tracking-widest text-[#ff2b44]">
                {item.industry}
              </span>
              <h1 className="mt-1 text-2xl font-semibold uppercase leading-tight md:text-4xl">
                {item.company}
              </h1>
              <div className="mt-4 flex flex-wrap gap-2">
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

          <div className="grid gap-6 lg:grid-cols-2">
            <article className="bbi-card overflow-hidden rounded-2xl border border-[#ff2b44]/15 bg-gradient-to-br from-[#ff2b44]/5 via-[#1b1c21] to-[#1b1c21] p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#ff2b44]/20 text-[#ff2b44]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                    <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff2b44]">
                  {caseDetail.result}
                </h2>
              </div>
              <div className="mt-6 space-y-5">
                {item.resultNumbers.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-4"
                  >
                    <span className="text-sm text-white/55">{r.before}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 shrink-0 text-[#ff2b44]/70">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-base font-bold text-[#ff2b44] md:text-lg">
                      {r.after}
                    </span>
                  </div>
                ))}
              </div>
            </article>
            <article className="bbi-card rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-6 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[#ff2b44]">
                {caseDetail.artifacts}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-3">
                {item.artifacts.map((a) => (
                  <li
                    key={a}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/85"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </article>
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
        </Container>
      </section>
    </div>
  );
}
