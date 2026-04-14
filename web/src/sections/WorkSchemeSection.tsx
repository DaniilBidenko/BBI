import type { WorkPillar } from "@/content/dictionaries/types";
import { WorkSchemeDiagram } from "@/components/WorkSchemeDiagram";
import { Container } from "@/components/Container";

type WorkSchemeSectionProps = {
  centerLabel: string;
  pillars: WorkPillar[];
};

export function WorkSchemeSection({ centerLabel, pillars }: WorkSchemeSectionProps) {
  return (
    <section className="relative py-10 md:py-12">
      <Container className="relative mx-auto px-2 sm:px-3 lg:w-[96%]">
        <div className="bbi-work-scheme-shell bbi-hover-lift relative flex min-h-[260px] justify-center overflow-hidden p-2 sm:p-3 md:p-4">
          <WorkSchemeDiagram centerLabel={centerLabel} pillars={pillars} />
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            aria-hidden
          />
        </div>
      </Container>
    </section>
  );
}
