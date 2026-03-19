import { Container } from "@/components/Container";

type Segment = { title: string; description: string; details?: string; metrics?: string; pain: string };

type IcpIntroSectionProps = {
  eyebrow: string;
  title: string;
  segments: Segment[];
  exclude: string;
  excludeLabel?: string;
};

const TARGET_ICONS = [
  // Владелец в росте — стрелка роста вверх
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>,
  // Владелец масштабируется — сетка/масштабирование
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
  </svg>,
  // Владелец готовится к инвестициям — актив, портфель
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M12 12v4" />
    <path d="M10 14h4" />
  </svg>,
];

export function IcpIntroSection({ eyebrow, title, segments, exclude, excludeLabel = "Не подходим" }: IcpIntroSectionProps) {
  return (
    <section className="relative py-20 md:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[var(--bbi-bg)]/20 to-transparent" />
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="w-full max-w-6xl">
          <div className="mb-12 flex flex-col items-center gap-3 px-5 text-center lg:px-6">
            <span className="rounded-full bg-[var(--bbi-red)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--bbi-red)]">
              {eyebrow}
            </span>
            <h2 className="text-3xl font-semibold text-[var(--bbi-text)] md:text-4xl">
              {title}
            </h2>
          </div>

          <article className="bbi-card relative overflow-hidden rounded-2xl border border-[var(--bbi-text)]/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-y-0 left-0 w-1 bg-[var(--bbi-red)]" />

          <div className="px-5 pt-5 lg:px-6 lg:pt-6">
            <div className="grid grid-cols-1 gap-5 pb-5 sm:grid-cols-3 sm:items-stretch lg:gap-6 lg:pb-6">
              {segments.map((segment, i) => (
                <div
                  key={i}
                  className="group relative flex min-w-0 flex-col rounded-xl border border-[var(--bbi-text)]/[0.06] bg-white p-5 transition-all duration-200 hover:border-[var(--bbi-red)]/25 hover:shadow-[0_4px_20px_rgba(185,28,28,0.06)] md:p-6"
                >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bbi-red)]/10 text-[var(--bbi-red)] transition-colors group-hover:bg-[var(--bbi-red)]/15 [&>svg]:h-5 [&>svg]:w-5">
                    {TARGET_ICONS[i % TARGET_ICONS.length]}
                  </div>
                  <span className="text-[11px] font-medium tabular-nums text-[var(--bbi-muted)]/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-3 text-base font-semibold leading-tight text-[var(--bbi-text)] md:text-lg">
                  {segment.title}
                </h3>
                <div className="w-full py-1">
                  <p className="text-[14px] leading-[1.65] text-[var(--bbi-muted)]">
                    {segment.details ?? segment.description}
                  </p>
                  {segment.metrics && (
                    <p className="mt-3 text-[13px] font-medium tabular-nums text-[var(--bbi-text)]/80">
                      {segment.metrics}
                    </p>
                  )}
                </div>
                <div className="mt-auto w-full rounded-r border-l-2 border-[var(--bbi-red)]/50 bg-[var(--bbi-red)]/5 py-2 pl-3">
                  <p className="text-[13px] font-medium italic leading-[1.45] text-[var(--bbi-red)]">
                    «{segment.pain}»
                  </p>
                </div>
              </div>
              ))}
            </div>

            <div className="relative mt-0 border-t-2 border-dashed border-[var(--bbi-red)]/25 pt-5 pb-5 lg:pt-6 lg:pb-6">
              <div className="absolute left-5 top-0 flex -translate-y-1/2 lg:left-6">
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[var(--bbi-red)]/80">
                  Исключения
                </span>
              </div>
              <div className="flex gap-3 rounded-xl border-2 border-[var(--bbi-red)]/15 bg-[var(--bbi-bg)]/50 p-4 md:p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-[var(--bbi-red)]/20 bg-white text-[var(--bbi-muted)] [&>svg]:h-4 [&>svg]:w-4">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--bbi-text)] md:text-base">
                    {excludeLabel}
                  </h4>
                  <p className="mt-1 text-[13px] leading-[1.65] text-[var(--bbi-muted)] md:text-[14px]">
                    {exclude}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        </div>
      </Container>
    </section>
  );
}
