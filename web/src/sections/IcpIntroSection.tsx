import { Container } from "@/components/Container";

type Segment = { title: string; description: string; metrics?: string; pain: string };

type IcpIntroSectionProps = {
  eyebrow: string;
  title: string;
  segments: Segment[];
  exclude: string;
  excludeLabel?: string;
};

const TARGET_ICONS = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 12v-4" />
    <path d="M12 12l4 2" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M3 17h3l2-4 3 5 4-9 2 3h4" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
    <path d="M12 2l9 4.5v7L12 18l-9-4.5v-7L12 2z" />
    <path d="M12 8v4l3 2" />
  </svg>,
];

export function IcpIntroSection({ eyebrow, title, segments, exclude, excludeLabel = "Не подходим" }: IcpIntroSectionProps) {
  return (
    <section className="relative py-20 md:py-24">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="text-center text-3xl font-semibold text-[var(--bbi-text)] md:text-4xl">
            {title}
          </h2>
        </div>

        <article className="bbi-card relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-y-0 left-0 w-1 bg-[var(--bbi-red)]" />

          <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:p-6">
            {segments.map((segment, i) => (
              <div
                key={i}
                className="group relative flex flex-col gap-3 rounded-xl border border-black/[0.04] bg-white p-5 transition-all duration-200 hover:border-[var(--bbi-red)]/20 hover:bg-[var(--bbi-bg)]/20 hover:shadow-[0_4px_16px_rgba(185,28,28,0.06)]"
              >
                <span className="absolute right-4 top-4 text-[11px] font-medium tabular-nums text-[var(--bbi-muted)]/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bbi-red)]/10 text-[var(--bbi-red)] transition-colors group-hover:bg-[var(--bbi-red)]/15 [&>svg]:h-5 [&>svg]:w-5">
                  {TARGET_ICONS[i % TARGET_ICONS.length]}
                </div>
                <h3 className="text-base font-semibold leading-tight text-[var(--bbi-text)] pr-8">
                  {segment.title}
                </h3>
                <div>
                  <p className="text-[14px] leading-[1.6] text-[var(--bbi-muted)]">
                    {segment.description}
                  </p>
                  {segment.metrics && (
                    <p className="mt-1 text-[13px] font-medium tabular-nums tracking-tight text-[var(--bbi-text)]/80">
                      {segment.metrics}
                    </p>
                  )}
                </div>
                <div className="rounded-r border-l-2 border-[var(--bbi-red)]/50 bg-[var(--bbi-red)]/5 py-1.5 pl-3">
                  <p className="text-[13px] font-medium italic leading-[1.45] text-[var(--bbi-red)]">
                    «{segment.pain}»
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative border-t-2 border-dashed border-[var(--bbi-red)]/25 px-5 py-5 md:px-6 md:py-6">
            <div className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2">
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
        </article>
      </Container>
    </section>
  );
}
