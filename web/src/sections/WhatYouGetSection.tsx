import { Container } from "@/components/Container";

type WhatYouGetSectionProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

export function WhatYouGetSection({
  eyebrow,
  title,
  items,
}: WhatYouGetSectionProps) {
  return (
    <section className="relative py-16 md:py-20">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-10 flex flex-col items-center gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--bbi-red)]">
            {eyebrow}
          </span>
          <h2 className="text-center text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
            {title}
          </h2>
        </div>

        <div className="bbi-card relative mx-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-black/[0.08] bg-white">
          <div className="absolute inset-y-0 left-0 w-1 bg-[var(--bbi-red)]" />
          <div className="grid sm:grid-cols-2">
            {items.map((item, i) => (
              <div
                key={i}
                className={`group flex gap-5 border-black/[0.06] p-5 pl-6 transition-colors hover:bg-[var(--bbi-bg)]/50 ${i < 4 ? "border-b" : ""} ${i % 2 === 0 ? "sm:border-r" : ""}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--bbi-red)] bg-white text-sm font-bold tabular-nums text-[var(--bbi-red)] transition-colors group-hover:bg-[var(--bbi-red)] group-hover:text-white">
                  {i + 1}
                </span>
                <p className="pt-0.5 text-[15px] leading-[1.7] text-[var(--bbi-text)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
