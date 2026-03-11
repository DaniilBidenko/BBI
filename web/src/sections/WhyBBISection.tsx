import { Container } from "@/components/Container";

type WhyBBISectionProps = {
  eyebrow: string;
  title: string;
  items: { label: string; text: string }[];
};

export function WhyBBISection({ eyebrow, title, items }: WhyBBISectionProps) {
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
      </Container>
    </section>
  );
}
