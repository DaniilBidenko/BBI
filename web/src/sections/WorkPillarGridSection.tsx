import { Container } from "@/components/Container";
import type { WorkPillar } from "@/content/dictionaries/types";

type WorkPillarGridSectionProps = {
  title: string;
  description: string;
  pillars: WorkPillar[];
  field: "result" | "broken" | "actions";
  badge: string;
};

const variantStyles = {
  result: {
    section: "relative pt-20 pb-12",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-[rgba(255,196,58,0.95)]",
    card: "group relative overflow-hidden rounded-[24px] border border-white/20 bg-[linear-gradient(180deg,rgba(42,44,50,0.9)_0%,rgba(16,18,24,0.96)_100%)] p-5 pt-12 shadow-[0_14px_34px_rgba(0,0,0,0.35)] transition hover:border-[rgba(255,196,58,0.35)]",
    cardAccent: "absolute inset-x-0 top-0 h-[44%] bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,196,58,0.18)_0%,rgba(255,196,58,0.06)_35%,rgba(255,196,58,0)_74%)]",
    label: "text-[36px] font-semibold leading-[1.05] text-white md:text-[40px]",
    text: "mt-3 text-[15px] leading-[1.52] text-white/78",
  },
  broken: {
    section: "relative py-12",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-white/95",
    card: "",
    cardAccent: "",
    label: "",
    text: "",
  },
  actions: {
    section: "relative pt-12 pb-20",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-[#ff2b44]",
    card: "",
    cardAccent: "",
    label: "",
    text: "",
  },
} as const;

export function WorkPillarGridSection({
  title,
  description,
  pillars,
  field,
  badge,
}: WorkPillarGridSectionProps) {
  const styles = variantStyles[field];

  return (
    <section className={styles.section}>
      <Container className="relative mx-auto space-y-10 lg:w-[90%]">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className={styles.headerBadge}>{badge}</div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
          <p className="max-w-3xl text-[15px] leading-[1.6] text-white/70">
            {description}
          </p>
        </div>

        {field === "result" && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar, i) => (
              <article key={`${pillar.key}-${field}`} className="group relative flex flex-col overflow-visible">
                <span
                  className="icp-card__index absolute z-20 flex items-center justify-center text-[36px] font-semibold leading-none"
                  style={{
                    color: "rgba(255,196,58,0.98)",
                    borderColor: "rgba(255,196,58,0.38)",
                    background:
                      "linear-gradient(180deg, rgba(255,196,58,0.2) 0%, rgba(78,62,19,0.42) 44%, rgba(14,13,10,0.92) 100%)",
                    width: "58px",
                    height: "58px",
                    left: "10px",
                    top: "6px",
                    fontSize: "24px",
                  }}
                >
                  {i + 1}
                </span>
                <div
                  className="icp-card relative mt-1 ml-1 !h-[228px]"
                  style={{
                    background:
                      "radial-gradient(130% 95% at 50% 0%, rgba(255,196,58,0.18) 0%, rgba(255,196,58,0.06) 34%, rgba(255,196,58,0.01) 58%, rgba(10,12,17,0.98) 100%), linear-gradient(165deg, rgba(22,25,32,0.97), rgba(8,10,15,0.99))",
                    borderColor: "rgba(255,196,58,0.22)",
                  }}
                >
                  <div className="icp-card__content">
                    <div className="icp-card__title">
                      <h3 className="line-clamp-3 max-w-[12ch] text-[23px] font-semibold leading-[1.08] text-white md:max-w-[12.5ch] md:text-[26px]">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="icp-card__body text-[14px] leading-[1.42] text-white/82">
                      <p className="line-clamp-3 max-w-[28ch]">{pillar[field]}</p>
                    </div>
                    <div className="icp-card__footer">
                      <span className="inline-flex w-fit items-center gap-1 text-[13px] leading-none text-[rgba(255,196,58,0.98)]">
                        Подробнее
                        <span className="text-[11px] leading-none">&gt;&gt;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {field === "broken" && (
          <>
            <div className="-mt-2 flex justify-center text-white/95">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                <path d="M12 3 2 21h20L12 3Zm-1 6h2v6h-2V9Zm1 10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
              </svg>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {pillars.map((pillar, i) => (
                <article key={`${pillar.key}-${field}`} className="group relative flex flex-col overflow-visible">
                  <span
                    className="icp-card__index absolute z-20 flex items-center justify-center text-[36px] font-semibold leading-none"
                    style={{
                      color: "rgba(255,255,255,0.95)",
                      borderColor: "rgba(255,255,255,0.3)",
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.16) 0%, rgba(70,70,70,0.34) 44%, rgba(10,10,12,0.9) 100%)",
                      width: "58px",
                      height: "58px",
                      left: "10px",
                      top: "6px",
                      fontSize: "24px",
                    }}
                  >
                    {i + 1}
                  </span>
                  <div
                    className="icp-card relative mt-1 ml-1 !h-[228px]"
                    style={{
                      background:
                        "radial-gradient(130% 95% at 50% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 34%, rgba(255,255,255,0) 58%, rgba(10,12,17,0.98) 100%), linear-gradient(165deg, rgba(22,25,32,0.97), rgba(8,10,15,0.99))",
                      borderColor: "rgba(255,255,255,0.22)",
                    }}
                  >
                    <div className="icp-card__content">
                      <div className="icp-card__title">
                        <h3 className="line-clamp-3 max-w-[12ch] text-[23px] font-semibold leading-[1.08] text-white md:max-w-[12.5ch] md:text-[26px]">
                          {pillar.title}
                        </h3>
                      </div>
                      <div className="icp-card__body text-[14px] leading-[1.42] text-white/82">
                        <p className="line-clamp-3 max-w-[28ch]">{pillar[field]}</p>
                      </div>
                      <div className="icp-card__footer">
                        <span className="inline-flex w-fit items-center gap-1 text-[13px] leading-none text-white/92">
                          Подробнее
                          <span className="text-[11px] leading-none">&gt;&gt;</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {field === "actions" && (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar, i) => (
              <article key={`${pillar.key}-${field}`} className="group relative flex flex-col overflow-visible">
                <span
                  className="icp-card__index absolute z-20 flex items-center justify-center text-[36px] font-semibold leading-none"
                  style={{
                    color: "rgba(255,43,68,0.98)",
                    borderColor: "rgba(255,43,68,0.38)",
                    background:
                      "linear-gradient(180deg, rgba(255,43,68,0.22) 0%, rgba(70,18,26,0.42) 44%, rgba(14,10,12,0.92) 100%)",
                    width: "58px",
                    height: "58px",
                    left: "10px",
                    top: "6px",
                    fontSize: "24px",
                  }}
                >
                  {i + 1}
                </span>
                <div
                  className="icp-card relative mt-1 ml-1 !h-[228px]"
                  style={{
                    background:
                      "radial-gradient(130% 95% at 50% 0%, rgba(255,43,68,0.18) 0%, rgba(255,43,68,0.06) 34%, rgba(255,43,68,0.01) 58%, rgba(10,12,17,0.98) 100%), linear-gradient(165deg, rgba(22,25,32,0.97), rgba(8,10,15,0.99))",
                    borderColor: "rgba(255,43,68,0.24)",
                  }}
                >
                  <div className="icp-card__content">
                    <div className="icp-card__title">
                      <h3 className="line-clamp-3 max-w-[12ch] text-[23px] font-semibold leading-[1.08] text-white md:max-w-[12.5ch] md:text-[26px]">
                        {pillar.title}
                      </h3>
                    </div>
                    <div className="icp-card__body text-[14px] leading-[1.42] text-white/82">
                      <p className="line-clamp-3 max-w-[28ch]">{pillar[field]}</p>
                    </div>
                    <div className="icp-card__footer">
                      <span className="inline-flex w-fit items-center gap-1 text-[13px] leading-none text-[rgba(255,43,68,0.98)]">
                        Подробнее
                        <span className="text-[11px] leading-none">&gt;&gt;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
