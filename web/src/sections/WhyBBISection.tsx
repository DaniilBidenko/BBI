import { Container } from "@/components/Container";
import { MiniTilesCateye } from "@/components/MiniTilesCateye";

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

/** Как в макете: круг с диагональю «запрет» */
const PROHIBITION_ICON = (
  <svg viewBox="0 0 24 24" fill="none" className="h-[22px] w-[22px]" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 8l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/** Щит: слева пусто, справа заливка, контур целиком (увеличенный) */
const SHIELD_ICON = (
  <svg viewBox="0 0 24 24" className="h-[28px] w-[28px]" aria-hidden>
    <defs>
      <clipPath id="whyBbiShieldRightHalf">
        <rect x="12" y="0" width="12" height="24" />
      </clipPath>
    </defs>
    <path
      d="M12 3.5l7.2 2.7v5.8c0 4.2-2.7 7.9-7.2 9.4-4.5-1.5-7.2-5.2-7.2-9.4V6.2L12 3.5z"
      fill="currentColor"
      fillOpacity={0.92}
      clipPath="url(#whyBbiShieldRightHalf)"
    />
    <path
      d="M12 3.5l7.2 2.7v5.8c0 4.2-2.7 7.9-7.2 9.4-4.5-1.5-7.2-5.2-7.2-9.4V6.2L12 3.5z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const LIST_ARROW_DOWN_RIGHT = (
  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden>
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
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
    <section className="relative py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <header className="mb-6 text-center md:mb-8">
          {eyebrow && (
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--bbi-red)]">
              {eyebrow}
            </span>
          )}
          <h2 className="text-[34px] font-semibold uppercase leading-[0.98] text-white md:text-[44px]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-3 max-w-4xl text-[13px] font-light uppercase leading-[1.2] tracking-[0.12em] text-[rgba(212,168,52,0.88)] md:text-[15px]">
              {subtitle}
            </p>
          )}
        </header>

        {useNewLayout ? (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {topCards.map((card) => (
                <article
                  key={card.label}
                  className="bbi-cateye-red group relative flex min-h-0 flex-col overflow-hidden rounded-[24px] border border-white/11 p-5 transition-colors hover:border-white/16 md:rounded-[28px]"
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--bbi-red)]/25 bg-black/25 text-[var(--bbi-red)] shadow-[inset_0_1px_0_rgba(255,75,90,0.35)]">
                        {PROHIBITION_ICON}
                      </span>
                      <h3 className="text-[34px] font-semibold leading-[1.05] text-white md:text-[38px]">
                        {card.label}
                      </h3>
                    </div>
                    <p className="mb-4 text-[15px] leading-[1.5] text-white/74">
                      {card.intro}
                    </p>
                    {card.outcomeBullets.length > 0 && (
                      <div className="bbi-cateye-red-inset mt-auto rounded-[18px] p-3.5 md:p-4">
                        <span className="text-[22px] font-semibold leading-tight text-white md:text-[26px]">
                          Что происходит в итоге
                        </span>
                        <ul className="mt-3 space-y-2">
                          {card.outcomeBullets.map((b, i) => (
                            <li key={i} className="flex gap-2 text-[13px] leading-snug text-white/70">
                              <span className="text-[var(--bbi-red)]">{LIST_ARROW_DOWN_RIGHT}</span>
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
              <article className="bbi-cateye-gold relative overflow-hidden rounded-[24px] border border-[rgba(218,175,65,0.26)] md:rounded-[28px]">
                <div className="relative p-5 md:p-6">
                  <div className="flex gap-4 md:gap-5">
                    <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] border border-[rgba(218,175,65,0.28)] bg-black/22 text-[rgba(225,180,72,0.92)] shadow-[inset_0_1px_0_rgba(218,175,65,0.28)]">
                      {SHIELD_ICON}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(232,182,72,0.92)]">
                        Наш подход
                      </span>
                      <h3 className="mt-0.5 text-[34px] font-semibold leading-[1.05] text-white md:text-[40px]">
                        {wideCard.label}
                      </h3>
                      <p className="mt-3 max-w-none text-[15px] leading-[1.62] text-white/78 md:mt-4 md:text-[16px]">
                        {wideCard.intro}
                      </p>
                    </div>
                  </div>
                  {wideCard.outcomeBullets.length > 0 && (
                    <MiniTilesCateye items={wideCard.outcomeBullets} />
                  )}
                </div>
              </article>
            )}
          </div>
        ) : (
          items &&
          items.length > 0 && (
            <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
              {items.map((item) => (
                <article
                  key={item.label}
                  className="bbi-surface-cateye flex flex-col gap-2.5 rounded-2xl border border-white/10 p-5 transition-colors hover:border-white/14 md:p-5"
                >
                  <h3 className="text-base font-semibold text-[var(--bbi-red)]">
                    {item.label}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-white/72">
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
