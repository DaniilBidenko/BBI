import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import type { WorkPillar } from "@/content/dictionaries/types";

type PillarsPageSectionProps = {
  title: string;
  description: string;
  ctaLabel: string;
  ctaDescription: string;
  detailsLabel: string;
  pillars: WorkPillar[];
  ctaHref: string;
};

export function PillarsPageSection({
  title,
  description,
  ctaLabel,
  ctaDescription,
  detailsLabel,
  pillars,
  ctaHref,
}: PillarsPageSectionProps) {
  return (
    <section className="relative pb-32 pt-24">
      <Container className="relative mx-auto space-y-12 lg:w-[85%]">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold uppercase md:text-5xl">
              {title}
            </h1>
            <p className="text-sm text-white/70 md:text-base">{description}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#1b1c21] p-6 text-sm text-white/70">
            {ctaDescription}
          </div>
        </div>
        <div className="grid gap-5">
          {pillars.map((pillar, index) => (
            <details
              key={pillar.key}
              className="bbi-card no-details group rounded-3xl border border-white/10 bg-[#1b1c21] px-6 py-5"
            >
              <summary className="flex cursor-pointer list-none items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#14151a] text-xs font-semibold text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-white md:text-lg">
                      {pillar.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#ff2b44]">
                      {pillar.groupLabel}
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{pillar.summary}</p>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/40">
                    {detailsLabel}
                  </div>
                </div>
              </summary>
              <div className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-white/70">
                {pillar.details.map((detail) => (
                  <div key={detail} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff2b44]" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
        <div className="bbi-card grid gap-6 rounded-3xl border border-white/10 bg-[#1b1c21] p-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <div className="text-sm font-semibold text-white">{ctaLabel}</div>
            <p className="mt-2 text-sm text-white/70">{ctaDescription}</p>
          </div>
          <div className="flex justify-start md:justify-end">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
