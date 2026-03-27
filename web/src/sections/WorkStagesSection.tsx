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
    <section className="relative py-20">
      <Container className="relative mx-auto lg:w-[96%]">
        <div className="relative rounded-[34px] border border-white/14 bg-[radial-gradient(120%_86%_at_50%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_70%),linear-gradient(180deg,rgba(14,16,22,0.9)_0%,rgba(8,10,14,0.94)_100%)] px-10 py-10 shadow-[0_16px_34px_rgba(0,0,0,0.35)] backdrop-blur-[1px] md:px-12 md:py-12">
          <div className="relative">
            <h2 className="text-[42px] font-semibold uppercase leading-[0.98] text-white md:text-[48px]">
              {title}
            </h2>
            <p className="mt-3 text-[18px] uppercase tracking-[0.14em] text-[rgba(255,196,58,0.96)] md:text-[19px]">
              {description}
            </p>
          </div>

          <div className="relative mt-10 grid auto-rows-fr gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className={`rounded-[24px] border border-white/16 bg-[radial-gradient(130%_100%_at_16%_0%,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.05)_26%,rgba(255,255,255,0.01)_48%,rgba(10,12,17,0)_70%),linear-gradient(180deg,rgba(16,18,24,0.95)_0%,rgba(9,11,15,0.98)_100%)] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ${
                  index >= 3 ? "md:col-span-1" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/28 text-[14px] leading-none text-white/80">
                    +
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-medium leading-[1.2] text-white md:text-[19px]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-[1.4] text-white/72 md:text-[13px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
