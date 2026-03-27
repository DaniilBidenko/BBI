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
    <section className="relative py-14 md:py-18">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <header className="mb-10 text-center md:mb-12">
          {eyebrow && (
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--bbi-red)]">
              {eyebrow}
            </span>
          )}
          <h2 className="text-[34px] font-semibold uppercase leading-[0.98] text-white md:text-[44px]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-4xl text-[13px] font-light uppercase leading-[1.16] tracking-[0.02em] text-[rgba(255,192,7,1)] md:text-[17px]">
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
                  className="group relative flex min-h-[328px] flex-col overflow-hidden rounded-[28px] border border-[rgba(255,43,68,0.24)] bg-[linear-gradient(160deg,rgba(255,43,68,0.16)_0%,rgba(36,20,26,0.78)_34%,rgba(9,11,16,0.96)_68%,rgba(7,8,11,0.98)_100%)] p-6 shadow-[0_16px_42px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[rgba(255,43,68,0.38)]"
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,43,68,0.28)] bg-[rgba(255,43,68,0.08)] text-[rgba(255,43,68,0.95)]">
                        {NOT_ICON}
                      </span>
                      <h3 className="text-[40px] font-semibold leading-[1.02] text-white">
                        {card.label}
                      </h3>
                    </div>
                    <p className="mb-5 text-[15px] leading-[1.62] text-white/78">
                      {card.intro}
                    </p>
                    {card.outcomeBullets.length > 0 && (
                      <div className="mt-auto rounded-[20px] border border-white/16 bg-black/32 px-4 py-4">
                        <span className="text-[32px] font-semibold leading-none text-white">
                          Что происходит в итоге
                        </span>
                        <ul className="mt-3 space-y-2">
                          {card.outcomeBullets.map((b, i) => (
                            <li key={i} className="flex gap-2 text-[13px] leading-snug text-white/72">
                              <span className="mt-0.5 shrink-0 text-[rgba(255,43,68,1)]" aria-hidden>
                                &gt;
                              </span>
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
              <article className="relative overflow-hidden rounded-[28px] border border-[rgba(255,192,7,0.46)] bg-[radial-gradient(130%_110%_at_25%_0%,rgba(255,192,7,0.24)_0%,rgba(255,192,7,0.08)_32%,rgba(255,255,255,0.015)_66%,rgba(7,8,11,0.98)_100%),linear-gradient(165deg,rgba(22,26,34,0.96),rgba(8,10,15,0.98))] shadow-[0_18px_50px_rgba(0,0,0,0.46)]">
                <div className="relative flex flex-col gap-5 p-6 md:gap-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(255,192,7,0.35)] bg-[rgba(255,192,7,0.12)] text-[rgba(255,192,7,1)]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                        <path d="M12 3l8 3v6c0 5.25-3.4 8.8-8 10-4.6-1.2-8-4.75-8-10V6l8-3z" />
                      </svg>
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(255,192,7,1)]">
                        Наш подход
                      </span>
                      <h3 className="mt-0.5 text-[45px] font-semibold leading-[1.02] text-white md:text-[50px]">
                        {wideCard.label}
                      </h3>
                    </div>
                  </div>
                  <p className="max-w-4xl text-[15px] leading-[1.62] text-white/82 md:text-[16px]">
                    {wideCard.intro}
                  </p>
                  {wideCard.outcomeBullets.length > 0 && (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {wideCard.outcomeBullets.map((b, i) => (
                        <div
                          key={i}
                          className="flex gap-2 rounded-[14px] border border-white/18 bg-black/26 px-3.5 py-3"
                        >
                          <span className="mt-0.5 shrink-0 text-white/55">
                            +
                          </span>
                          <span className="text-[13px] font-medium leading-snug text-white/82">
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
