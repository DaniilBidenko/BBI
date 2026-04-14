import { Container } from "@/components/Container";
import type { WorkPillar } from "@/content/dictionaries/types";

type WorkPillarsSectionProps = {
  title: string;
  description: string;
  detailsLabel: string;
  pillars: WorkPillar[];
};

export function WorkPillarsSection({
  title,
  description,
  detailsLabel,
  pillars,
}: WorkPillarsSectionProps) {
  return (
    <section className="relative py-24">
      <Container className="relative mx-auto w-full max-w-[min(100%,72rem)] space-y-5 px-4 sm:px-6 lg:px-8">
          <h2 className="text-[22px] font-semibold md:text-3xl">{title}</h2>
          <p className="text-sm text-white/70 md:text-base">{description}</p>
          <div className="space-y-3.5">
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
      </Container>
    </section>
  );
}
