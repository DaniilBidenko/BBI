import { Container } from "@/components/Container";
import type { WorkStage } from "@/content/dictionaries/types";

type WorkStagesSectionProps = {
  title: string;
  description: string;
  steps: WorkStage[];
  readMoreLabel: string;
  whatWeDoHeading: string;
  detailsListMarker: string;
};

function splitStageDescription(text: string, marker: string) {
  const cleaned = text.trim();

  if (!cleaned.includes(marker)) {
    return { lead: cleaned, items: [] as string[] };
  }

  const [leadRaw, listRaw] = cleaned.split(marker);
  const items = listRaw
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);

  return {
    lead: leadRaw.trim(),
    items,
  };
}

export function WorkStagesSection({
  title,
  description,
  steps,
  readMoreLabel,
  whatWeDoHeading,
  detailsListMarker,
}: WorkStagesSectionProps) {
  return (
    <section className="relative py-18 md:py-20">
      <Container className="relative mx-auto lg:w-[96%]">
        <div className="relative rounded-[34px] border border-white/14 bg-[radial-gradient(120%_86%_at_50%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_70%),linear-gradient(180deg,rgba(14,16,22,0.9)_0%,rgba(8,10,14,0.94)_100%)] px-5 py-8 shadow-[0_16px_34px_rgba(0,0,0,0.35)] backdrop-blur-[1px] sm:px-7 sm:py-9 md:px-12 md:py-12">
          <div className="relative">
            <h2 className="max-w-[28ch] break-words text-[30px] font-semibold uppercase leading-[1.05] text-white sm:max-w-[32ch] sm:text-[36px] md:text-[48px]">
              {title}
            </h2>
            <p className="mt-3 max-w-[78ch] break-words text-[12px] uppercase tracking-[0.12em] text-[rgba(255,196,58,0.96)] sm:text-[13px] md:text-[16px]">
              {description}
            </p>
          </div>

          <div className="relative mt-8 grid items-start gap-4 md:mt-9 md:grid-cols-3">
            {steps.map((step, index) => {
              const { lead, items } = splitStageDescription(step.description, detailsListMarker);
              const isFinal = index === steps.length - 1;

              return (
                <article
                  key={step.title}
                  className={`bbi-work-stage-card bbi-hover-lift rounded-[24px] px-5 py-4.5 md:px-5 md:py-5 ${
                    isFinal ? "md:col-span-2 md:col-start-2" : ""
                  }`}
                >
                  <div className="flex h-full min-h-[260px] flex-col">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/6 text-[14px] font-semibold leading-none text-white/76 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                        +
                      </span>
                      <h3
                        className={`text-balance font-semibold leading-[1.13] text-white ${
                          isFinal ? "text-[18px] md:text-[19px]" : "text-[20px] md:text-[21px]"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className={`mt-3 leading-[1.55] text-white/82 ${
                        isFinal ? "text-[13px] md:text-[14px]" : "text-[14px] md:text-[15px]"
                      }`}
                    >
                      {lead}
                    </p>

                    {items.length > 0 && (
                      <details className="group mt-auto border-t border-white/10 pt-3.5">
                        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[14px] font-semibold tracking-wide text-[var(--bbi-red)] transition hover:text-[var(--bbi-red-hover)] marker:hidden [&::-webkit-details-marker]:hidden">
                          {readMoreLabel}
                          <span className="text-[12px] font-semibold transition-transform duration-200 group-open:rotate-90" aria-hidden>
                            &gt;&gt;
                          </span>
                        </summary>
                        <div className="mt-2.5 max-h-[36vh] overflow-y-auto pr-1 md:max-h-[220px]">
                          <p className="text-[12px] font-semibold uppercase tracking-[0.11em] text-white/68">
                            {whatWeDoHeading}
                          </p>
                          <ul className="mt-2 space-y-2">
                            {items.map((item) => (
                              <li key={item} className="flex gap-2.5 text-[14px] leading-[1.5] text-white/80">
                                <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/62" aria-hidden />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
