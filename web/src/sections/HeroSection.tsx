import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel: string;
  secondaryHref?: string;
};

export function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: HeroSectionProps) {
  const formattedTitle = title
    .replace("Строим бизнес, ", "Строим бизнес,\n")
    .replace("который работает ", "который работает\n")
    .replace("не хаотично, ", "не хаотично,\n")
    .replace("а как управляемая ", "а как управляемая\n")
    .replace("и масштабируемая ", "и масштабируемая\n");

  return (
    <section className="relative -mt-[58px] overflow-hidden bg-[var(--bbi-bg)] pb-12 pt-[72px] md:-mt-[62px] md:pt-[82px]">
      <img
        src="/brand/hero-header-photo.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.06] object-cover object-[52%_30%] opacity-84"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,10,0.18)_0%,rgba(6,7,10,0.34)_52%,rgba(6,7,10,0.72)_72%,rgba(6,7,10,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.08)_0%,rgba(6,7,10,0.32)_46%,rgba(6,7,10,0.78)_70%,rgba(7,8,11,0.98)_88%,rgba(7,8,11,1)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(7,8,11,0)_0%,rgba(7,8,11,0.74)_70%,rgba(7,8,11,1)_100%)]" />
      <Container className="relative grid gap-7 lg:grid-cols-[1fr] lg:items-center">
        <div className="max-w-[760px] space-y-5">
          <h1 className="max-w-[700px] whitespace-pre-line text-[35px] font-semibold uppercase leading-[0.98] tracking-[0.01em] text-white md:text-[52px] lg:text-[4rem]">
            {formattedTitle}
          </h1>
          <p className="max-w-[56ch] whitespace-pre-line text-[18px] leading-[1.48] text-white/80 md:text-[21px]">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1.5">
            <Button href={ctaHref} className="px-6 py-2 text-[13px] tracking-[0.02em] normal-case">
              {ctaLabel}
            </Button>
            {secondaryHref && (
              <Button href={secondaryHref} variant="ghost" className="px-6 py-2 text-[13px] tracking-[0.02em] normal-case">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
