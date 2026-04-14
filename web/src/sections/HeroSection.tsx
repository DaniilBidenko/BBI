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
    .replace(
      "не\u00A0хаотично,\u00A0а\u00A0как ",
      "не\u00A0хаотично,\u00A0а\u00A0как\n",
    )
    .replace(
      "управляемая\u00A0и масштабируемая ",
      "управляемая\u00A0и\nмасштабируемая ",
    )
    .replace("масштабируемая система", "масштабируемая\nсистема");

  const titleLines = formattedTitle.split("\n");

  return (
    <section className="relative overflow-hidden bg-[var(--bbi-bg)] pb-14 pt-[92px] md:pb-16 md:pt-[102px]">
      <img
        src="/brand/hero-header-photo.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.14] object-cover object-[54%_28%] opacity-84"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,10,0.18)_0%,rgba(6,7,10,0.34)_52%,rgba(6,7,10,0.72)_72%,rgba(6,7,10,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,7,10,0.08)_0%,rgba(6,7,10,0.32)_46%,rgba(6,7,10,0.78)_70%,rgba(7,8,11,0.98)_88%,rgba(7,8,11,1)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(7,8,11,0)_0%,rgba(7,8,11,0.74)_70%,rgba(7,8,11,1)_100%)]" />
      <Container className="relative grid gap-6 pr-1 sm:pr-0 lg:grid-cols-[1fr] lg:items-center">
        <div className="max-w-[720px] space-y-4.5 sm:space-y-5">
          <h1 className="max-w-[700px] text-[22px] font-semibold uppercase leading-[1.04] tracking-[0.01em] text-white sm:text-[28px] sm:leading-[1] md:text-[34px] lg:text-[42px]">
            {titleLines.map((line, i) => (
              <span
                key={i}
                className={
                  line.includes("хаотично")
                    ? "block break-words sm:whitespace-nowrap"
                    : "block break-words"
                }
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="max-w-[54ch] break-words whitespace-pre-line text-[15px] leading-[1.48] text-white/80 sm:text-[16px] md:text-[18px]">
            {subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-2.5 pt-1 sm:pt-1.5">
            <Button href={ctaHref} className="px-5 py-1.5 text-[12px] tracking-[0.02em] normal-case sm:px-6 sm:py-2 sm:text-[13px]">
              {ctaLabel}
            </Button>
            {secondaryHref && (
              <Button
                href={secondaryHref}
                variant="ghost"
                className="px-5 py-1.5 text-[12px] tracking-[0.02em] normal-case sm:px-6 sm:py-2 sm:text-[13px]"
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
