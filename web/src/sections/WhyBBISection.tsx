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

/** Рукопожатие (Lucide handshake, stroke) */
const HANDSHAKE_ICON = (
  <svg
    viewBox="0 0 24 24"
    className="h-[28px] w-[28px]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="m11 17 2 2a1 1 0 1 0 3-3" />
    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
    <path d="m21 3 1 11h-2" />
    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
    <path d="M3 4h8" />
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
        <header className="mb-7 text-center md:mb-10">
          {eyebrow && (
            <span className="mb-3 inline-block text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--bbi-red)]">
              {eyebrow}
            </span>
          )}
          <h2 className="break-words text-[26px] font-semibold uppercase leading-[1.08] text-white sm:text-[32px] md:text-[42px]">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-4xl text-[12px] font-light uppercase leading-[1.35] tracking-[0.1em] text-[rgba(212,168,52,0.88)] md:text-[14px]">
              {subtitle}
            </p>
          )}
        </header>

        {useNewLayout ? (
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {topCards.map((card) => (
                <article
                  key={card.label}
                  className="bbi-cateye-red group relative flex min-h-0 flex-col overflow-hidden rounded-[22px] border border-white/11 p-4 transition-colors hover:border-white/16 md:rounded-[26px] md:p-5"
                >
                  <div className="flex h-full flex-col">
                    <div className="mb-3 flex items-center gap-2.5 md:gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--bbi-red)]/25 bg-black/25 text-[var(--bbi-red)] shadow-[inset_0_1px_0_rgba(255,75,90,0.35)] md:h-10 md:w-10">
                        {PROHIBITION_ICON}
                      </span>
                      <h3 className="break-words text-[30px] font-semibold leading-[1.08] text-white sm:text-[34px] md:text-[40px]">
                        {card.label}
                      </h3>
                    </div>
                    <p className="mb-4 text-[14px] leading-[1.55] text-white/74 md:text-[15px]">
                      {card.intro}
                    </p>
                    {card.outcomeBullets.length > 0 && (
                      <div className="bbi-cateye-red-inset mt-auto rounded-[16px] p-3 md:p-4">
                        <span className="break-words text-[17px] font-semibold leading-tight text-white sm:text-[19px] md:text-[24px]">
                          Что происходит в итоге
                        </span>
                        <ul className="mt-2.5 space-y-2">
                          {card.outcomeBullets.map((b, i) => (
                            <li key={i} className="flex gap-2 text-[12px] leading-snug text-white/72 md:text-[13px]">
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
              <article className="bbi-cateye-gold relative overflow-hidden rounded-[22px] border border-[rgba(218,175,65,0.26)] md:rounded-[26px]">
                <div className="relative p-4 md:p-6">
                  <div className="flex gap-4 md:gap-5">
                    <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] border border-[rgba(218,175,65,0.28)] bg-black/22 text-[rgba(225,180,72,0.92)] shadow-[inset_0_1px_0_rgba(218,175,65,0.28)] md:h-[52px] md:w-[52px] md:rounded-[14px]">
                      {HANDSHAKE_ICON}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(232,182,72,0.92)]">
                        Наш подход
                      </span>
                      <h3 className="mt-1 break-words text-[30px] font-semibold leading-[1.08] text-white sm:text-[34px] md:text-[42px]">
                        {wideCard.label}
                      </h3>
                      <p className="mt-3 max-w-none text-[14px] leading-[1.65] text-white/78 md:mt-4 md:text-[16px]">
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
