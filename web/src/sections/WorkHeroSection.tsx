import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

type WorkHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHint: string;
  ctaHref: string;
};

export function WorkHeroSection({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHint,
  ctaHref,
}: WorkHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-24 pt-24">
      <Container className="relative mx-auto grid gap-10 lg:w-[85%] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            {eyebrow}
          </span>
          <h1 className="text-3xl font-semibold uppercase leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-sm leading-relaxed text-white/70 md:text-base">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={ctaHref}>
              <span className="px-4 py-2 text-base md:text-lg">{ctaLabel}</span>
            </Button>
            <span className="text-xs uppercase tracking-[0.25em] text-white/40">
              {ctaHint}
            </span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-[#1b1c21] p-6 text-sm text-white/70 md:text-base">
          {description}
        </div>
      </Container>
    </section>
  );
}
