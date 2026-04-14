import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";
import { MiniTilesCateye } from "@/components/MiniTilesCateye";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type WhatYouGetCard = {
  title: string;
  whatItMeans: string;
  clientGets: string[];
  important: string;
};

type WhatYouGetSectionProps = {
  eyebrow: string;
  title: string;
  subheadline?: string;
  items?: string[];
  cards?: WhatYouGetCard[];
  finalAccent?: {
    title: string;
    text: string;
    ctaLabel: string;
  };
  ctaHref?: string;
};

/** Только градиент «кошачьего глаза» меняется по карточкам; текст, галочки и бейдж — одинаковые. */
const WYG_SHELL: readonly string[] = [
  "bbi-wyg-cateye--0",
  "bbi-wyg-cateye--1",
  "bbi-wyg-cateye--2",
  "bbi-wyg-cateye--3",
  "bbi-wyg-cateye--4",
];

export function WhatYouGetSection({
  eyebrow,
  title,
  subheadline,
  items,
  cards,
  finalAccent,
  ctaHref,
}: WhatYouGetSectionProps) {
  const useNewLayout = cards && cards.length > 0;

  return (
    <section className="relative py-14 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto w-full max-w-6xl px-4 lg:px-6">
        <header className="mb-10 text-center md:mb-12">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="break-words text-[32px] font-semibold uppercase leading-[1.02] tracking-tight text-white sm:text-[40px] md:text-[50px]">
            {title}
          </h2>
          <div className="mx-auto mt-3 h-0.5 w-12 rounded-full bg-[var(--bbi-red)]/70" />
          {subheadline && (
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/78 md:text-base">
              {subheadline}
            </p>
          )}
        </header>

        {useNewLayout ? (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {cards!.map((card, i) => {
                const shellClass = WYG_SHELL[Math.min(i, WYG_SHELL.length - 1)] ?? "bbi-wyg-cateye--4";
                return (
                <article
                  key={i}
                  className={`bbi-cateye-recognize ${shellClass} group relative flex flex-col overflow-hidden rounded-2xl shadow-[0_16px_42px_rgba(0,0,0,0.34)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_52px_rgba(0,0,0,0.42)] ${i === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div className="wyg-card-accent-bar absolute inset-y-0 left-0 z-[1] w-[3px]" />

                  <div className="relative z-[2] flex flex-1 flex-col gap-5 p-6 pl-7 md:p-7 md:pl-8">
                    {/* Заголовок */}
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[rgba(255,43,68,0.12)] text-[13px] font-bold tabular-nums text-[rgba(255,43,68,0.95)]">
                        {i + 1}
                      </span>
                      <h3 className="break-words pt-0.5 text-base font-semibold leading-snug text-[var(--bbi-text)] md:text-lg">
                        {card.title}
                      </h3>
                    </div>

                    {/* Что остаётся у клиента */}
                    {card.clientGets.length > 0 && (
                      <div className="bbi-surface-cateye-inset rounded-xl px-5 py-4 md:px-6 md:py-4">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[rgba(255,43,68,0.9)]">
                          Что остаётся у клиента
                        </p>
                        <ul className="space-y-2">
                          {card.clientGets.map((item, j) => (
                            <li key={j} className="flex gap-2.5 text-[14px] leading-[1.55] text-white/82">
                              <span className="mt-0.5 shrink-0 text-[rgba(255,43,68,0.88)]">
                                <CheckIcon className="h-4 w-4" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Что это значит + Подробнее */}
                    <details className="group">
                      <summary className="inline-flex cursor-pointer list-none items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-white/60 marker:hidden [&::-webkit-details-marker]:hidden">
                        Что это значит
                        <span className="text-[12px] normal-case tracking-normal text-[var(--bbi-red)]">
                          Подробнее &gt;&gt;
                        </span>
                      </summary>
                      <div className="mt-2.5 space-y-3">
                        <p className="break-words text-[14px] leading-[1.7] text-white/78">
                          {card.whatItMeans}
                        </p>
                        <div className="rounded-lg border-l-4 border-[rgba(255,43,68,0.42)] bg-[rgba(255,43,68,0.06)] py-3 pl-4 pr-4 md:pl-5">
                          <p className="break-words text-[13px] leading-[1.6] text-white/82">
                            <span className="font-semibold text-white/88">Важно:</span>{" "}
                            {card.important}
                          </p>
                        </div>
                      </div>
                    </details>
                  </div>
                </article>
                );
              })}
            </div>

            {/* Итоговый блок: плитки как в «BBI — операционный партнёр», CTA снизу без бокового разделителя */}
            {finalAccent && (
              <div className="bbi-cateye-gold bbi-hover-lift relative mt-10 overflow-hidden rounded-2xl border border-[rgba(218,175,65,0.26)] shadow-[0_18px_46px_rgba(0,0,0,0.5)] md:mt-12">
                <div className="absolute inset-y-0 left-0 z-[1] w-1.5 bg-[rgba(232,182,72,0.55)]" />
                <div className="relative z-[2] flex flex-col gap-0 px-5 py-7 pl-8 pr-5 md:px-8 md:py-9 md:pl-11">
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[rgba(232,182,72,0.92)]">
                      Итог
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--bbi-text)] md:text-2xl">
                      {finalAccent.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-[var(--bbi-text)]/90 md:text-base">
                      {finalAccent.text}
                    </p>
                  </div>
                  {cards && cards.length > 0 && (
                    <MiniTilesCateye
                      items={cards.slice(0, 5).map((c) => c.title)}
                      rootClassName="mt-7 w-full max-w-[min(100%,58rem)] space-y-4 pb-0 md:mt-8 md:space-y-4"
                    />
                  )}
                  {finalAccent.ctaLabel && ctaHref && (
                    <div className="mt-8 flex justify-center border-t border-white/[0.09] pt-8 md:mt-10 md:pt-9">
                      <CtaBlock
                        href={ctaHref}
                        label={finalAccent.ctaLabel}
                        className="!py-0 [&>a]:shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bbi-cateye-recognize bbi-cateye-recognize--topfade relative w-full overflow-hidden rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.32)]">
            <div className="absolute inset-y-0 left-0 z-[1] w-1 bg-[var(--bbi-red)]" />
            <div className="relative z-[2] grid grid-cols-1 sm:grid-cols-2">
              {items?.map((item, i) => (
                <div
                  key={i}
                  className={`group flex min-w-0 items-center justify-center gap-5 border-white/[0.08] p-5 pl-6 text-center transition-colors hover:bg-white/[0.04] ${i < 4 ? "border-b" : ""} ${i % 2 === 0 ? "sm:border-r" : ""}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--bbi-red)] bg-white/[0.08] text-sm font-bold tabular-nums text-[var(--bbi-red)] transition-colors group-hover:bg-[var(--bbi-red)] group-hover:text-white">
                    {i + 1}
                  </span>
                  <p className="min-w-0 flex-1 pt-0.5 text-[15px] leading-[1.7] text-[var(--bbi-text)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
