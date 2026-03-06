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
    <section id="process" className="relative py-24">
      <Container className="relative mx-auto space-y-10 lg:w-[85%]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#ff2b44] md:text-3xl">
            {title}
          </h2>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block" />
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.title} className="relative pt-10">
                <div className="pointer-events-none absolute left-0 top-[22px] hidden h-2 w-2 rounded-full bg-[#ff2b44] lg:block" />
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-xs font-semibold text-white/80">
                    {index + 1}
                  </span>
                  <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                    {stepLabel}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white md:text-lg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
