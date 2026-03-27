import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";

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
  const CARD_TONES = [
    "border-[color:var(--bbi-panel-border)] bg-[rgba(9,11,16,0.94)]",
    "border-[color:var(--bbi-panel-border)] bg-[rgba(9,11,16,0.94)]",
    "border-[color:var(--bbi-panel-border)] bg-[rgba(9,11,16,0.94)]",
    "border-[color:var(--bbi-panel-border)] bg-[rgba(9,11,16,0.94)]",
    "border-[color:var(--bbi-panel-border)] bg-[rgba(9,11,16,0.94)]",
  ] as const;

  return (
    <section className="relative py-14 md:py-16">
      <div className="absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto w-full max-w-6xl px-4 lg:px-6">
        <header className="mb-10 text-center md:mb-12">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="text-[42px] font-semibold uppercase leading-[0.98] tracking-tight text-white md:text-[50px]">
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
              {cards!.map((card, i) => (
                <article
                  key={i}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border shadow-[0_12px_36px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--bbi-red)]/28 hover:shadow-[0_16px_46px_rgba(185,28,28,0.16)] ${CARD_TONES[i % CARD_TONES.length]} ${i === 4 ? "sm:col-span-2" : ""}`}
                >
                  <div className="absolute inset-y-0 left-0 w-[3px] bg-[var(--bbi-red)]/40 transition-colors duration-300 group-hover:bg-[var(--bbi-red)]" />

                  <div className="flex flex-1 flex-col gap-5 p-6 pl-7 md:p-7 md:pl-8">
                    {/* Заголовок */}
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--bbi-red)]/15 text-[13px] font-bold tabular-nums text-[var(--bbi-red)]">
                        {i + 1}
                      </span>
                      <h3 className="pt-0.5 text-base font-semibold leading-snug text-[var(--bbi-text)] md:text-lg">
                        {card.title}
                      </h3>
                    </div>

                    {/* Что остаётся у клиента */}
                    {card.clientGets.length > 0 && (
                      <div className="rounded-xl bg-[var(--bbi-red)]/[0.05] px-5 py-4 md:px-6 md:py-4">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--bbi-red)]/90">
                          Что остаётся у клиента
                        </p>
                        <ul className="space-y-2">
                          {card.clientGets.map((item, j) => (
                            <li key={j} className="flex gap-2.5 text-[14px] leading-[1.55] text-white/82">
                              <span className="mt-0.5 shrink-0 text-[var(--bbi-red)]">
                                <CheckIcon className="h-4 w-4" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Что это значит */}
                    <div>
                      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/60">
                        Что это значит
                      </p>
                      <p className="text-[14px] leading-[1.7] text-white/78">
                        {card.whatItMeans}
                      </p>
                    </div>

                    {/* Важно */}
                    <div>
                      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-white/60">
                        Важно
                      </p>
                      <div className="rounded-lg border-l-4 border-[var(--bbi-red)]/50 bg-[var(--bbi-red)]/[0.06] py-3 pl-4 pr-4 md:pl-5">
                        <p className="text-[13px] leading-[1.6] text-white/82">
                          {card.important}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Итоговый блок — сильное закрытие, без градиента */}
            {finalAccent && (
              <div className="relative mt-10 overflow-hidden rounded-2xl border border-[rgba(255,196,58,0.32)] bg-[linear-gradient(132deg,rgba(255,196,58,0.16)_0%,rgba(255,196,58,0.08)_18%,rgba(46,38,18,0.78)_42%,rgba(13,11,7,0.97)_72%,rgba(8,9,12,0.99)_100%)] shadow-[0_14px_44px_rgba(0,0,0,0.45)] md:mt-12">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-[rgba(255,196,58,0.72)]" />
                <div className="flex flex-col gap-6 py-6 pl-9 pr-6 md:flex-row md:items-center md:justify-between md:gap-10 md:py-8 md:pl-11 md:pr-8">
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[rgba(255,196,58,0.95)]">
                      Итог
                    </p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--bbi-text)] md:text-2xl">
                      {finalAccent.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-[var(--bbi-text)]/90 md:text-base">
                      {finalAccent.text}
                    </p>
                    {cards && cards.length > 0 && (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {cards.slice(0, 5).map((card, i) => (
                          <div
                            key={`accent-pill-${i}`}
                            className="flex gap-2 rounded-[14px] border border-white/18 bg-black/26 px-3.5 py-3"
                          >
                            <span className="mt-0.5 shrink-0 text-white/55">+</span>
                            <span className="text-[13px] font-medium leading-snug text-white/82">
                              {card.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {finalAccent.ctaLabel && ctaHref && (
                    <div className="shrink-0 border-t border-[var(--bbi-text)]/[0.06] pt-6 md:border-t-0 md:border-l md:border-l-[var(--bbi-text)]/[0.08] md:pl-10 md:pt-0">
                      <CtaBlock
                        href={ctaHref}
                        label={finalAccent.ctaLabel}
                        className="[&>a]:border [&>a]:border-[rgba(255,196,58,0.6)] [&>a]:bg-[rgba(255,196,58,0.16)] [&>a]:text-[rgba(255,231,180,0.98)] [&>a]:hover:bg-[rgba(255,196,58,0.24)] [&>a]:focus-visible:outline-[rgba(255,196,58,0.6)]"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="bbi-card relative w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white">
            <div className="absolute inset-y-0 left-0 w-1 bg-[var(--bbi-red)]" />
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {items?.map((item, i) => (
                <div
                  key={i}
                  className={`group flex min-w-0 items-center justify-center gap-5 border-black/[0.06] p-5 pl-6 text-center transition-colors hover:bg-[var(--bbi-bg)]/50 ${i < 4 ? "border-b" : ""} ${i % 2 === 0 ? "sm:border-r" : ""}`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--bbi-red)] bg-white text-sm font-bold tabular-nums text-[var(--bbi-red)] transition-colors group-hover:bg-[var(--bbi-red)] group-hover:text-white">
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
