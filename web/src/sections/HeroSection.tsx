import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryLabel,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-16">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-base text-white/70 md:text-lg">{subtitle}</p>
          <div className="flex items-center gap-3">
            <Button href={ctaHref}>{ctaLabel}</Button>
            <Button variant="ghost" href="#process">
              {secondaryLabel}
            </Button>
          </div>
        </div>
        <div className="relative flex h-64 items-center justify-center rounded-3xl border border-white/10 bg-white/5 md:h-80">
          <div className="text-center text-sm text-white/50">
            Визуал: абстрактная графика «щит / рычаг / система»
          </div>
        </div>
      </Container>
    </section>
  );
}
