import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";

type IcpBridgeSectionProps = {
  label: string;
  title: string;
  description: string;
  highlightPhrase?: string;
  items?: string[];
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

export function IcpBridgeSection({
  label,
  title,
  description,
  highlightPhrase,
  items,
  ctaLabel,
  ctaHref,
}: IcpBridgeSectionProps) {
  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-16">
      <Container className="relative mx-auto lg:w-[90%]">
        <article className="bbi-card relative w-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)]/40">
          <div className="absolute inset-y-0 left-0 w-1 rounded-l-2xl bg-[var(--bbi-red)]" />

          <div className="p-6 pl-8 md:p-8 md:pl-10">
            <div className="mb-6 md:mb-8">
              <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.25em] text-[var(--bbi-red)]">
                {label}
              </span>
              <h2 className="text-2xl font-semibold leading-tight text-[var(--bbi-text)] md:text-3xl">
                {title}
              </h2>
            </div>

            <p className="mb-8 max-w-2xl text-[15px] leading-[1.8] text-[var(--bbi-muted)] md:text-base">
              {highlightPhraseInText(
                description,
                highlightPhrase ?? "",
                "font-medium text-[var(--bbi-red)]"
              )}
            </p>

            {items && items.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 rounded-xl border border-black/[0.06] bg-[var(--bbi-bg)]/30 px-5 py-4 transition hover:border-[var(--bbi-red)]/25 hover:bg-[var(--bbi-bg)]/50"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[var(--bbi-red)]/50 bg-white text-sm font-bold text-[var(--bbi-red)]">
                      {i + 1}
                    </span>
                    <p className="pt-0.5 text-[15px] leading-[1.7] text-[var(--bbi-text)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
        {ctaLabel && ctaHref && (
          <div className="mt-8">
            <CtaBlock href={ctaHref} label={ctaLabel} />
          </div>
        )}
      </Container>
    </section>
  );
}
