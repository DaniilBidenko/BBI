import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import type { WorkPillar } from "@/content/dictionaries/types";

type PillarsPageSectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaButtonLabel?: string;
  ctaDescription: string;
  detailsLabel: string;
  pillars: WorkPillar[];
  ctaHref: string;
};

export function PillarsPageSection({
  title,
  description,
  ctaLabel,
  ctaButtonLabel,
  ctaDescription,
  detailsLabel,
  pillars,
  ctaHref,
}: PillarsPageSectionProps) {
  return (
    <section className="relative pb-32 pt-24">
      <Container className="relative mx-auto w-full max-w-[min(100%,72rem)] space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold uppercase md:text-5xl">
            {title}
          </h1>
          <p className="max-w-[60ch] text-sm text-white/70 md:text-base">
            {description}
          </p>
        </div>
        <div className="grid gap-4">
          {pillars.map((pillar, index) => (
            <details
              key={pillar.key}
              className="bbi-card bbi-hover-lift no-details group w-full rounded-3xl border border-white/10 bg-[#1b1c21] px-5 py-4.5"
            >
              <summary className="flex min-w-0 cursor-pointer list-none items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#14151a] text-xs font-semibold text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-2 min-w-0">
                  <h3 className="break-words text-base font-semibold text-white md:text-lg">{pillar.title}</h3>
                  <p className="break-words text-sm text-white/70">{pillar.summary}</p>
                  <div className="inline-flex items-center rounded-full bg-[var(--bbi-red)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                    {detailsLabel}
                  </div>
                </div>
              </summary>
              <div className="mt-3.5 space-y-2 border-t border-white/10 pt-3.5 text-sm text-white/70">
                {pillar.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2">
                    {detail.endsWith(":") ? null : (
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff2b44]" />
                    )}
                    <span className={detail.endsWith(":") ? "font-semibold text-white" : ""}>{detail}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
        <div className="bbi-card grid gap-6 rounded-3xl border border-white/10 bg-[#1b1c21] p-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <div className="text-sm font-semibold text-white">{ctaLabel}</div>
            <p className="mt-2 text-sm text-white/70">{ctaDescription}</p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Button href={ctaHref}>{ctaButtonLabel ?? ctaLabel}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
