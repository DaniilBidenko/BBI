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
        <div className="bbi-card mx-auto max-w-3xl rounded-2xl border border-black/[0.08] bg-white p-6 md:p-8">
          <ul className="grid gap-4 sm:grid-cols-2">
            {items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[15px] leading-[1.7] text-[var(--bbi-text)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bbi-red)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
