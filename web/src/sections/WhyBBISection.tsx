import { Container } from "@/components/Container";

type WhyBBIItem = { label: string; text: string };
type WhyBBICard = { label: string; intro: string; outcomeBullets: string[] };

type WhyBBISectionProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items?: WhyBBIItem[];
  topCards?: WhyBBICard[];
  wideCard?: WhyBBICard;
};

const NOT_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const BBI_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export function WhyBBISection({
  eyebrow,
  title,
  subtitle,
  items,
  topCards,
  wideCard,
}: WhyBBISectionProps) {
  const useNewLayout = topCards && topCards.length > 0 && wideCard;

  return (
    <section className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[var(--bbi-bg)]/30" />
      <Container className="relative mx-auto lg:w-[90%]">
        <header className="mb-12 text-center md:mb-14">
          {eyebrow && (
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl font-semibold leading-tight text-[var(--bbi-text)] md:text-3xl lg:text-[2rem]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-[1.8] text-[var(--bbi-muted)] md:text-base">
              {subtitle}
            </p>
          )}
        </header>

        {useNewLayout ? (
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
              {topCards.map((card) => (
                <article
                  key={card.label}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)]"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[var(--bbi-muted)]/30 transition-colors group-hover:bg-[var(--bbi-red)]/40" />
                  <div className="flex flex-1 flex-col p-6 pl-7 md:p-7 md:pl-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.1] bg-[var(--bbi-bg)]/60 text-[var(--bbi-muted)]">
                        {NOT_ICON}
                      </span>
                      <h3 className="text-lg font-semibold text-[var(--bbi-text)]">
                        {card.label}
                      </h3>
                    </div>
                    <p className="mb-5 text-[15px] leading-[1.75] text-[var(--bbi-muted)]">
                      {card.intro}
                    </p>
                    {card.outcomeBullets.length > 0 && (
                      <div className="mt-auto rounded-xl border border-black/[0.06] bg-[var(--bbi-bg)]/40 px-4 py-3">
                        <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--bbi-muted)]">
                          Что происходит в итоге
                        </span>
                        <ul className="mt-3 space-y-2">
                          {card.outcomeBullets.map((b, i) => (
                            <li key={i} className="flex gap-2.5 text-[14px] leading-snug text-[var(--bbi-text)]">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bbi-muted)]/70" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {wideCard && (
              <article className="relative overflow-hidden rounded-2xl border-2 border-[var(--bbi-red)]/25 bg-white shadow-[0_4px_24px_rgba(185,28,28,0.08),0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200 hover:border-[var(--bbi-red)]/40 hover:shadow-[0_8px_32px_rgba(185,28,28,0.12)]">
                <div className="absolute inset-y-0 left-0 w-1.5 bg-[var(--bbi-red)]" />
                <div className="relative flex flex-col gap-6 bg-gradient-to-br from-[var(--bbi-red)]/[0.03] via-transparent to-transparent p-6 pl-8 md:gap-7 md:p-8 md:pl-10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--bbi-red)]/15 text-[var(--bbi-red)]">
                      {BBI_ICON}
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--bbi-red)]">
                        Наш подход
                      </span>
                      <h3 className="mt-0.5 text-xl font-semibold text-[var(--bbi-text)] md:text-2xl">
                        {wideCard.label}
                      </h3>
                    </div>
                  </div>
                  <p className="max-w-3xl text-[15px] leading-[1.8] text-[var(--bbi-text)]/90 md:text-base">
                    {wideCard.intro}
                  </p>
                  {wideCard.outcomeBullets.length > 0 && (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {wideCard.outcomeBullets.map((b, i) => (
                        <div
                          key={i}
                          className="flex gap-3 rounded-xl border border-[var(--bbi-red)]/10 bg-white/80 px-4 py-3 shadow-sm"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--bbi-red)]/15 text-[var(--bbi-red)]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span className="text-[14px] font-medium leading-snug text-[var(--bbi-text)]">
                            {b}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            )}
          </div>
        ) : (
          items &&
          items.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-6">
              {items.map((item) => (
                <article
                  key={item.label}
                  className="bbi-card flex flex-col gap-3 rounded-2xl border border-black/[0.08] bg-white p-6 transition hover:border-[var(--bbi-red)] md:p-7"
                >
                  <h3 className="text-base font-semibold text-[var(--bbi-red)]">
                    {item.label}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-[var(--bbi-muted)]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          )
        )}
      </Container>
    </section>
  );
}
