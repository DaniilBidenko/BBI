import { Container } from "@/components/Container";
import type { WorkPillar } from "@/content/dictionaries/types";

type WorkPillarGridSectionProps = {
  title: string;
  description: string;
  pillars: WorkPillar[];
  field: "result" | "broken" | "actions";
  badge: string;
};

export function WorkPillarGridSection({
  title,
  description,
  pillars,
  field,
  badge,
}: WorkPillarGridSectionProps) {
  return (
    <section className="relative py-24">
      <Container className="relative mx-auto space-y-10 lg:w-[85%]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-[#ff2b44]">
              {badge}
            </div>
            <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          </div>
          <p className="max-w-2xl text-sm text-white/60">{description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={`${pillar.key}-${field}`}
              className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6"
            >
              <div className="text-xs uppercase tracking-[0.25em] text-white/40">
                {pillar.title}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                {pillar[field]}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
