import { Container } from "@/components/Container";
import type { HomeStep } from "@/content/dictionaries/types";

type ProcessSectionProps = {
  title: string;
  stepLabel: string;
  steps: HomeStep[];
};

export function ProcessSection({
  title,
  stepLabel,
  steps,
}: ProcessSectionProps) {
  return (
    <section id="process" className="py-16">
      <Container className="space-y-8">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" />
          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-xs font-semibold text-white/80">
                    {index + 1}
                  </span>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {stepLabel}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-white/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
