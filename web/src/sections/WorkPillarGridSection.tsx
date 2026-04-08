import { Container } from "@/components/Container";
import type { WorkPillar } from "@/content/dictionaries/types";

type WorkPillarGridSectionProps = {
  title: string;
  description: string;
  pillars: WorkPillar[];
  field: "result" | "broken" | "actions";
  badge: string;
  detailsLabel: string;
};

const headerStyles = {
  result: {
    section:
      "relative pt-14 pb-10 sm:pt-16 sm:pb-11 md:pt-20 md:pb-12 lg:pb-14",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-[rgba(255,192,7,0.82)]",
  },
  broken: {
    section: "relative py-10 sm:py-11 md:py-12 lg:py-14",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-white/95",
  },
  actions: {
    section:
      "relative pt-10 pb-16 sm:pt-12 sm:pb-20 md:pt-14 md:pb-20 lg:pb-24",
    headerBadge: "text-xs font-medium uppercase tracking-[0.28em] text-[rgba(255,43,68,0.82)]",
  },
} as const;

const detailsTextClass: Record<"result" | "broken" | "actions", string> = {
  result:
    "text-[13px] font-medium leading-snug text-[rgba(255,192,7,1)] sm:text-[14px]",
  broken: "text-[13px] font-medium leading-snug text-white/88 sm:text-[14px]",
  actions:
    "text-[13px] font-medium leading-snug text-[rgba(255,43,68,1)] sm:text-[14px]",
};

const shellClass: Record<"result" | "broken" | "actions", string> = {
  result: "icp-card icp-card--pillar-result",
  broken: "icp-card icp-card--pillar-broken",
  actions: "icp-card icp-card--pillar-actions",
};

const indexClass: Record<"result" | "broken" | "actions", string> = {
  result: "icp-card__index icp-card__index--pillar-result",
  broken: "icp-card__index icp-card__index--pillar-broken",
  actions: "icp-card__index icp-card__index--pillar-actions",
};

function PillarGridCard({
  pillar,
  index,
  field,
  body,
  detailsLabel,
}: {
  pillar: WorkPillar;
  index: number;
  field: "result" | "broken" | "actions";
  body: string;
  detailsLabel: string;
}) {
  return (
    <article className="group relative flex h-full min-h-0 min-w-0 flex-col overflow-visible">
      <span
        className={`${indexClass[field]} absolute z-20 flex items-center justify-center text-[34px] font-semibold leading-none sm:text-[38px] md:text-[40px] lg:text-[42px]`}
        aria-hidden
      >
        {index + 1}
      </span>
      <div
        className={`${shellClass[field]} relative mt-1 ml-1 min-w-0 sm:mt-1.5 sm:ml-1.5 md:mt-2 md:ml-2`}
      >
        <div className="icp-card__content">
          <div className="icp-card__title">
            <h3 className="break-words text-[1.0625rem] font-semibold leading-[1.14] tracking-tight text-white/90 sm:text-[1.1875rem] md:text-[1.25rem] lg:text-[1.3125rem]">
              {pillar.title}
            </h3>
          </div>
          <div className="icp-card__body mt-1.5 text-[0.875rem] leading-[1.52] text-white/78 sm:mt-2 sm:text-[0.9375rem] sm:leading-[1.48] md:text-[0.96875rem] md:leading-[1.48] lg:text-[1rem]">
            <p className="line-clamp-[5] break-words sm:line-clamp-4 md:line-clamp-[5] xl:line-clamp-4">{body}</p>
          </div>
          <div className="icp-card__footer">
            <span className={detailsTextClass[field]}>{`${detailsLabel} >>`}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

const gridClass =
  "grid w-full grid-cols-1 gap-4 [align-items:stretch] sm:grid-cols-2 sm:gap-4 md:gap-5 lg:gap-5 xl:grid-cols-3 xl:gap-5 2xl:gap-6";

export function WorkPillarGridSection({
  title,
  description,
  pillars,
  field,
  badge,
  detailsLabel,
}: WorkPillarGridSectionProps) {
  const header = headerStyles[field];

  return (
    <section className={`${header.section} overflow-x-clip`}>
      <Container className="relative mx-auto max-w-[min(100%,72rem)] space-y-8 px-4 sm:space-y-9 sm:px-6 md:space-y-10 lg:w-[min(92%,76rem)] lg:px-8 xl:w-[min(92%,78rem)] 2xl:max-w-7xl">
        <div className="flex flex-col items-center gap-2.5 px-0.5 text-center sm:gap-3 sm:px-4 md:gap-3.5">
          <div className={header.headerBadge}>{badge}</div>
          <h2 className="max-w-[22rem] text-[1.375rem] font-semibold leading-tight tracking-tight text-white sm:max-w-none sm:text-2xl md:text-3xl lg:text-[2rem] lg:leading-[1.15]">
            {title}
          </h2>
          <p className="max-w-[min(100%,40rem)] text-[0.9375rem] leading-[1.58] text-white/70 sm:max-w-2xl sm:text-[0.96875rem] md:max-w-3xl md:text-base md:leading-relaxed">
            {description}
          </p>
        </div>

        {field === "result" && (
          <div className={gridClass}>
            {pillars.map((pillar, i) => (
              <PillarGridCard
                key={`${pillar.key}-${field}`}
                pillar={pillar}
                index={i}
                field="result"
                body={pillar[field]}
                detailsLabel={detailsLabel}
              />
            ))}
          </div>
        )}

        {field === "broken" && (
          <>
            <div className="-mt-1 flex justify-center text-white/95 sm:-mt-2">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7">
                <path d="M12 3 2 21h20L12 3Zm-1 6h2v6h-2V9Zm1 10a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z" />
              </svg>
            </div>
            <div className={gridClass}>
              {pillars.map((pillar, i) => (
                <PillarGridCard
                  key={`${pillar.key}-${field}`}
                  pillar={pillar}
                  index={i}
                  field="broken"
                  body={pillar[field]}
                  detailsLabel={detailsLabel}
                />
              ))}
            </div>
          </>
        )}

        {field === "actions" && (
          <div className={gridClass}>
            {pillars.map((pillar, i) => (
              <PillarGridCard
                key={`${pillar.key}-${field}`}
                pillar={pillar}
                index={i}
                field="actions"
                body={pillar[field]}
                detailsLabel={detailsLabel}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
