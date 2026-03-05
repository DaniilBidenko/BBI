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
    <section className="relative overflow-hidden pb-28 pt-28 min-h-[100vh]">
      <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl space-y-5">
          <span className="sr-only">{eyebrow}</span>
          <h1 className="text-4xl font-semibold uppercase leading-[1.05] tracking-[0.08em] md:text-6xl">
            {title.split("\n").map((line, index) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="text-sm text-white/70 md:text-base">{subtitle}</p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        </div>
        <div className="relative flex h-[300px] items-center justify-end md:h-[420px]">
          <img
            src="/brand/pattern-white.png"
            alt=""
            className="pointer-events-none absolute -right-6 -top-10 h-[210px] w-auto opacity-[0.07] mix-blend-screen"
          />
          <img
            src="/brand/hero-mechanism.svg"
            alt=""
            className="relative h-[280px] w-auto opacity-90 md:h-[360px]"
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
