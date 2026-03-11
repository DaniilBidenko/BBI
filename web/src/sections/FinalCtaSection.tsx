import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

type FinalCtaSectionProps = {
  title: string;
  ctaLabel: string;
  subtitle: string;
  ctaHref: string;
};

export function FinalCtaSection({
  title,
  ctaLabel,
  subtitle,
  ctaHref,
}: FinalCtaSectionProps) {
  return (
    <section className="relative py-20 md:py-28">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="bbi-card mx-auto max-w-3xl rounded-2xl border border-black/[0.08] bg-white px-8 py-14 text-center md:px-12 md:py-20">
          <h2 className="text-2xl font-semibold leading-tight text-[var(--bbi-text)] md:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.75] text-[var(--bbi-muted)] md:text-base">
            {subtitle}
          </p>
          <div className="mt-8">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
