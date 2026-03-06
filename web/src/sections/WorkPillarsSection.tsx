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
    <section className="relative py-28">
      <Container className="relative mx-auto space-y-6 lg:w-[85%]">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="text-sm text-white/70 md:text-base">{description}</p>
          <div className="space-y-4">
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
      </Container>
    </section>
  );
}
