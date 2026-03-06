import { Container } from "@/components/Container";
import type { WorkStage } from "@/content/dictionaries/types";

type WorkStagesSectionProps = {
  title: string;
  description: string;
  steps: WorkStage[];
};

export function WorkStagesSection({
  title,
  description,
  steps,
}: WorkStagesSectionProps) {
  return (
    <section className="relative py-24">
      <Container className="relative mx-auto space-y-10 lg:w-[85%]">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            {description}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#14151a] text-xs font-semibold text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
