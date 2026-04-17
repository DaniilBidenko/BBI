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
  approachEyebrow?: string;
  comparisonTable?: {
    columnHeaders: [string, string, string, string];
    rows: [string, string, string, string][];
  };
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
  approachEyebrow = "Наш подход",
  comparisonTable,
}: WhyBBISectionProps) {
  const useNewLayout = Boolean(wideCard);
  const COMPARISON_HEADERS = comparisonTable?.columnHeaders ?? [
    "Параметр",
    "Агентство",
    "Консалтинг",
    "BBI Operating Partner",
  ];
  const COMPARISON_ROWS =
    comparisonTable?.rows ??
    ([
      ["Роль", "Исполнитель задач", "Советник", "Архитектор + интегратор + внедренец"],
      ["Глубина", "Один инструмент/канал", "Анализ и рекомендации", "Система управления целиком"],
      ["Присутствие", "Удалённо, по задаче", "Сессии и отчёты", "Внутри бизнеса до ЦКР (ценного конечного результата)"],
      ["Ответственность", "За свою зону", "За рекомендации", "За достижение ЦКР"],
      ["Результат", "Выполненная задача", "Документ/стратегия", "Работающая система"],
      ["После ухода", "Останавливается", "Остаётся документ", "Остаётся система"],
    ] as [string, string, string, string][]);

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
            {wideCard && (
              <article className="bbi-cateye-gold bbi-hover-lift relative overflow-hidden rounded-[22px] border border-[rgba(218,175,65,0.26)] md:rounded-[26px]">
                <div className="relative p-4 md:p-6">
                  <div className="flex gap-4 md:gap-5">
                    <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] border border-[rgba(218,175,65,0.28)] bg-black/22 text-[rgba(225,180,72,0.92)] shadow-[inset_0_1px_0_rgba(218,175,65,0.28)] md:h-[52px] md:w-[52px] md:rounded-[14px]">
                      {HANDSHAKE_ICON}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[rgba(232,182,72,0.92)]">
                        {approachEyebrow}
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

            <article className="bbi-hover-lift overflow-hidden rounded-[22px] border border-white/12 bg-[linear-gradient(165deg,rgba(17,18,24,0.98)_0%,rgba(10,11,16,0.99)_100%)] p-3 sm:p-4 md:p-5">
              <div className="space-y-3 md:hidden">
                {COMPARISON_ROWS.map((row) => (
                  <div
                    key={row[0]}
                    className="rounded-xl border border-white/12 bg-[linear-gradient(165deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)] p-3"
                  >
                    <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/72">
                      {row[0]}
                    </p>
                    <div className="mt-2 space-y-2.5">
                      <div className="rounded-lg border border-white/12 bg-[rgba(8,10,14,0.72)] px-3 py-2.5">
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white/54">
                          {COMPARISON_HEADERS[1]}
                        </p>
                        <p className="text-[13px] leading-[1.45] text-white/88">{row[1]}</p>
                      </div>
                      <div className="rounded-lg border border-white/12 bg-[rgba(8,10,14,0.72)] px-3 py-2.5">
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-white/54">
                          {COMPARISON_HEADERS[2]}
                        </p>
                        <p className="text-[13px] leading-[1.45] text-white/88">{row[2]}</p>
                      </div>
                      <div className="rounded-lg border border-[rgba(232,182,72,0.58)] bg-[linear-gradient(145deg,rgba(232,182,72,0.22)_0%,rgba(232,182,72,0.07)_100%)] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(245,214,140,0.24)]">
                        <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.08em] text-[rgba(245,207,120,0.9)]">
                          {COMPARISON_HEADERS[3]}
                        </p>
                        <p className="text-[13px] font-semibold leading-[1.45] text-white">{row[3]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hidden md:block">
                <div className="mb-3 grid grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,1fr))] gap-2">
                  <div className="rounded-lg border border-white/14 bg-white/[0.04] px-3 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/78">
                    {COMPARISON_HEADERS[0]}
                  </div>
                  <div className="rounded-lg border border-white/14 bg-white/[0.04] px-3 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/78">
                    {COMPARISON_HEADERS[1]}
                  </div>
                  <div className="rounded-lg border border-white/14 bg-white/[0.04] px-3 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/78">
                    {COMPARISON_HEADERS[2]}
                  </div>
                  <div className="rounded-lg border border-[rgba(232,182,72,0.58)] bg-[linear-gradient(145deg,rgba(232,182,72,0.26)_0%,rgba(232,182,72,0.08)_100%)] px-3 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-[rgba(245,207,120,0.98)] shadow-[inset_0_1px_0_rgba(245,214,140,0.28)]">
                    {COMPARISON_HEADERS[3]}
                  </div>
                </div>

                <div className="space-y-2">
                  {COMPARISON_ROWS.map((row) => (
                    <div
                      key={row[0]}
                      className="rounded-xl border border-white/12 bg-[linear-gradient(165deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)] p-2.5 sm:p-3"
                    >
                      <div className="grid gap-2 md:grid-cols-[minmax(0,1.1fr)_repeat(3,minmax(0,1fr))]">
                        <div className="hidden items-center rounded-lg border border-white/14 bg-white/[0.04] px-3 py-3 md:flex">
                          <span className="text-[14px] font-semibold leading-[1.25] text-white">{row[0]}</span>
                        </div>
                        <div className="rounded-lg border border-white/12 bg-[rgba(8,10,14,0.72)] px-3 py-3">
                          <p className="text-[13px] leading-[1.38] text-white/88 sm:text-[14px]">{row[1]}</p>
                        </div>
                        <div className="rounded-lg border border-white/12 bg-[rgba(8,10,14,0.72)] px-3 py-3">
                          <p className="text-[13px] leading-[1.38] text-white/88 sm:text-[14px]">{row[2]}</p>
                        </div>
                        <div className="rounded-lg border border-[rgba(232,182,72,0.58)] bg-[linear-gradient(145deg,rgba(232,182,72,0.22)_0%,rgba(232,182,72,0.07)_100%)] px-3 py-3 shadow-[inset_0_1px_0_rgba(245,214,140,0.24)]">
                          <p className="text-[13px] font-semibold leading-[1.38] text-white sm:text-[14px]">{row[3]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
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
