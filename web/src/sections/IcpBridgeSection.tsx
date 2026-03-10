import { Container } from "@/components/Container";

type IcpBridgeSectionProps = {
  label: string;
  title: string;
  description: string;
};

export function IcpBridgeSection({ label, title, description }: IcpBridgeSectionProps) {
  return (
    <section className="relative overflow-hidden border-y border-black/[0.06] py-16 md:py-20">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-px bg-black/10" />

      <Container className="relative mx-auto lg:w-[90%]">
        <div className="bbi-card relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-black/[0.08] bg-white px-8 py-10 md:px-12 md:py-14">
          <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[var(--bbi-red)]" />

          <div className="pl-4">
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[var(--bbi-red)]">
              {label}
            </span>
            <h2 className="text-xl font-semibold text-[var(--bbi-text)] md:text-2xl">
              {title}
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-[var(--bbi-muted)]">
              {description}
            </p>
            <div className="mt-6 h-px w-12 bg-[var(--bbi-red)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
