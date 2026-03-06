import { Container } from "@/components/Container";
import type { WorkZone } from "@/content/dictionaries/types";

type WorkFormatSectionProps = {
  title: string;
  description: string;
  zones: WorkZone[];
};

const toneClasses: Record<WorkZone["tone"], string> = {
  green: "bg-[#26d07c]",
  yellow: "bg-[#f7b500]",
  red: "bg-[#ff2b44]",
};

export function WorkFormatSection({
  title,
  description,
  zones,
}: WorkFormatSectionProps) {
  return (
    <section className="relative py-24">
      <Container className="relative mx-auto space-y-6 lg:w-[85%]">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="text-sm text-white/70 md:text-base">{description}</p>
          <div className="space-y-4">
            {zones.map((zone) => (
              <div
                key={zone.label}
                className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${toneClasses[zone.tone]}`}
                  />
                  <div className="text-sm font-semibold">{zone.label}</div>
                </div>
                <p className="mt-3 text-sm text-white/70">{zone.description}</p>
              </div>
            ))}
          </div>
      </Container>
    </section>
  );
}
