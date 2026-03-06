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
    <section id="process" className="relative py-20 md:py-24">
      <Container className="relative mx-auto space-y-12 lg:w-[90%]">
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
          <span className="text-[#ff2b44]">{title}</span>
        </h2>

        {/* Timeline: line + dots */}
        <div className="relative hidden lg:block">
          <div
            className="absolute left-0 right-0 top-5 h-[2px] rounded-full bg-gradient-to-r from-[#ff2b44]/30 via-[#ff2b44] to-[#ff2b44]/30"
            aria-hidden
          />
          <div className="relative grid grid-cols-3">
            {steps.map((_, index) => (
              <div key={index} className="flex justify-center">
                <span
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0e0e0e] text-sm font-semibold text-white ring-4 ring-[#ff2b44] shadow-[0_0_20px_rgba(255,43,68,0.35)]"
                  aria-hidden
                >
                  {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content under each point — no cards */}
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12 lg:pt-4">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Mobile: show number + label above content */}
              <div className="mb-4 flex items-center gap-3 lg:sr-only">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff2b44]/20 text-sm font-semibold text-[#ff2b44]">
                  {index + 1}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/60">
                  {stepLabel}
                </span>
              </div>
              <p className="mb-2 hidden text-xs font-medium uppercase tracking-[0.22em] text-[#ff2b44] lg:block">
                {stepLabel} {index + 1}
              </p>
              <h3 className="text-lg font-semibold leading-tight text-white md:text-xl">
                {step.title}
              </h3>
<p className="mt-3 max-w-[50ch] text-[15px] leading-[1.75] text-white/92 md:text-base">
                  {step.description}
                </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
