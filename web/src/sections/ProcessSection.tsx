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
  const loopedSteps = [...steps, ...steps];
  return (
    <section id="process" className="relative py-36 min-h-[100vh]">
      <Container className="relative mx-auto space-y-12 lg:w-[85%]">
        <div className="flex items-center justify-between">
          <img
            src="/brand/logo-wordmark.png"
            alt="Bold Brands"
            className="h-6 w-auto"
          />
          <h2 className="text-lg font-semibold text-[#ff2b44] md:text-2xl">
            {title}
          </h2>
        </div>
        <div className="relative timeline-mask timeline-hover">
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-white/10 lg:block" />
          <div className="no-scrollbar overflow-x-auto">
            <div className="timeline-track inline-flex w-max gap-8 pr-10">
              {loopedSteps.map((step, index) => (
                <div
                  key={`${step.title}-${index}`}
                  className="bbi-card relative w-[320px] flex-shrink-0 rounded-3xl border border-white/10 bg-[#1b1c21] p-8 md:w-[360px]"
                  aria-hidden={index >= steps.length}
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-neutral-900 text-xs font-semibold text-white/80">
                      {(index % steps.length) + 1}
                    </span>
                    <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {stepLabel}
                    </div>
                  </div>
                  <div className="absolute left-10 top-6 h-8 w-px bg-white/10" />
                  <h3 className="text-base font-semibold text-white md:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
