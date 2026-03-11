import { Container } from "@/components/Container";

type IcpIntroSectionProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

const TARGET_ICONS = [
  <svg key="1" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
    <path d="M10 4v4l3 3" />
    <circle cx="10" cy="10" r="6" />
  </svg>,
  <svg key="2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
    <path d="M4 14l3-4 4 2 5-6" />
    <path d="M4 17h12" />
  </svg>,
  <svg key="3" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
    <path d="M10 2l7 3.5v7L10 16l-7-3.5v-7L10 2z" />
  </svg>,
];

export function IcpIntroSection({ eyebrow, title, items }: IcpIntroSectionProps) {
  const targetItems = items.length > 1 ? items.slice(0, -1) : items;
  const excludeItem = items.length > 1 ? items[items.length - 1] : null;

  return (
    <section className="relative py-16 md:py-20">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-8 flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="text-center text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
            {title}
          </h2>
        </div>

        <div className="bbi-card group relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)]/40">
          <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[var(--bbi-red)]" />

          <div className="grid gap-6 p-6 md:grid-cols-3 md:gap-8 md:p-8 md:pl-8">
            {targetItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-black/[0.06] bg-[var(--bbi-bg)]/50 p-4 transition group-hover:border-[var(--bbi-red)]/20 md:p-5"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--bbi-red)]/10 text-[var(--bbi-red)]">
                  {TARGET_ICONS[i % TARGET_ICONS.length]}
                </span>
                <p className="text-[15px] leading-[1.7] text-[var(--bbi-text)] md:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {excludeItem && (
            <div className="border-t border-black/[0.06] bg-black/[0.02] px-6 py-4 md:px-8 md:py-5">
              <div className="flex gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[var(--bbi-red)]/40 bg-white text-[var(--bbi-red)]">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-3 w-3">
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                </span>
                <p className="text-[15px] leading-[1.7] text-[var(--bbi-muted)] md:text-base">
                  {excludeItem}
                </p>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
