import { Container } from "@/components/Container";
import type { WorkStage } from "@/content/dictionaries/types";

type WorkStagesSectionProps = {
  title: string;
  description: string;
  steps: WorkStage[];
};

const stageCardClass =
  "bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6";

export function WorkStagesSection({
  title,
  description,
  steps,
}: WorkStagesSectionProps) {
  const [hero, ...rest] = steps;

  return (
    <section className="relative py-24">
      <Container className="relative mx-auto space-y-10 lg:w-[85%]">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-[55ch] text-[15px] leading-[1.65] text-white/80">
            {description}
          </p>
        </div>

        {/* Hero-start: первый этап сверху, остальные сетка 2x2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {hero && (
            <article
              key={hero.title}
              className={`${stageCardClass} lg:col-span-2`}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#14151a] text-sm font-semibold text-white">
                    01
                  </span>
                  <h3 className="text-lg font-semibold text-white md:text-xl">
                    {hero.title}
                  </h3>
                </div>
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-[#14151a] text-[#ff2b44]"
                  aria-hidden
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-[15px] leading-[1.65] text-white/85">
                {hero.description}
              </p>
            </article>
          )}
          {rest.map((step, index) => (
            <article key={step.title} className={stageCardClass}>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#14151a] text-xs font-semibold text-white/80">
                  {String(index + 2).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
