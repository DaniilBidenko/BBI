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
    <section className="relative overflow-hidden pb-16 pt-32">
      <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="max-w-3xl space-y-5">
          <span className="sr-only">{eyebrow}</span>
          <h1 className="max-w-[560px] text-3xl font-semibold uppercase leading-[1.08] tracking-[0.04em] md:max-w-[640px] md:text-5xl">
            {title}
          </h1>
          <p className="max-w-[52ch] text-base leading-[1.7] text-white/90 md:text-lg">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        </div>
        <div className="relative flex min-h-[260px] items-start justify-end md:min-h-[360px]">
          <img
            src="/brand/pattern-white.png"
            alt=""
            className="pointer-events-none absolute -right-6 -top-10 h-[210px] w-auto opacity-[0.07] mix-blend-screen"
          />
          <img
            src="/brand/hero-mechanism-traced.png"
            alt=""
            className="relative h-[280px] w-auto opacity-90 invert brightness-0 md:h-[360px]"
          />
          <div className="absolute -right-12 -top-16 h-[340px] w-[340px] rounded-full bg-[#ff2b44]/20 blur-3xl" />
        </div>
        <div id="hero-details" className="sr-only">
          {secondaryLabel}
        </div>
      </Container>
    </section>
  );
}
