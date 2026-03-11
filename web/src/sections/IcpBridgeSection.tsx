import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";

type IcpBridgeSectionProps = {
  label: string;
  title: string;
  description: string;
  highlightPhrase?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

function highlightPhraseInText(
  text: string,
  phrase: string | undefined,
  className: string
): ReactNode {
  if (!phrase || phrase.trim() === "" || !text.includes(phrase)) {
    return text;
  }
  const parts = text.split(phrase);
  return (
    <>
      {parts[0]}
      <span className={className}>{phrase}</span>
      {parts.slice(1).join(phrase)}
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 text-[var(--bbi-red)]"
      aria-hidden
    >
      <path d="M7 17L17 7M17 7h-6M17 7v6" />
    </svg>
  );
}

export function IcpBridgeSection({
  label,
  title,
  description,
  highlightPhrase,
  ctaLabel,
  ctaHref,
}: IcpBridgeSectionProps) {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16">
      <Container className="relative mx-auto lg:w-[90%]">
        <article className="bbi-card group relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)]/40">
          <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[var(--bbi-red)]" />

          <div className="grid gap-8 p-6 pl-8 md:grid-cols-[1fr_1.3fr] md:gap-12 md:p-8 md:pl-10">
            <div className="flex flex-col justify-between">
              <div>
                <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[var(--bbi-red)]">
                  {label}
                </span>
                <h2 className="text-2xl font-semibold leading-tight text-[var(--bbi-text)] md:text-3xl">
                  {title}
                </h2>
              </div>
              <div className="mt-6 md:mt-0">
                <ArrowIcon />
              </div>
            </div>

            <div className="flex flex-col justify-center border-l-0 md:border-l md:border-black/[0.08] md:pl-10">
              <p className="text-[15px] leading-[1.8] text-[var(--bbi-muted)] md:text-base">
                {highlightPhraseInText(
                  description,
                  highlightPhrase ?? "",
                  "font-medium text-[var(--bbi-red)]"
                )}
              </p>
              <div className="mt-6 h-px w-12 bg-[var(--bbi-red)]" />
            </div>
          </div>
        </article>
        {ctaLabel && ctaHref && (
          <CtaBlock href={ctaHref} label={ctaLabel} />
        )}
      </Container>
    </section>
  );
}
