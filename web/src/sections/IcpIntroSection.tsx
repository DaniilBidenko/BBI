import { Container } from "@/components/Container";

type Segment = { title: string; description: string; details?: string; metrics?: string; pain: string };

type IcpIntroSectionProps = {
  eyebrow: string;
  title: string;
  segments: Segment[];
  exclude: string;
  excludeLabel?: string;
};

const TARGET_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
    <circle cx="12" cy="7" r="3.3" />
    <circle cx="6.6" cy="8.9" r="2.05" />
    <circle cx="17.4" cy="8.9" r="2.05" />
    <rect x="8.6" y="10.6" width="6.8" height="9.2" rx="2.2" />
    <rect x="3.8" y="12" width="3.8" height="7.8" rx="1.8" />
    <rect x="16.4" y="12" width="3.8" height="7.8" rx="1.8" />
  </svg>
);

const WARNING_ICON = (
  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
    <path d="M12 3L22 21H2L12 3Z" fill="#FFC007" />
    <rect x="11" y="9" width="2" height="7" rx="1" fill="#111111" />
    <circle cx="12" cy="18.2" r="1.15" fill="#111111" />
  </svg>
);

export function IcpIntroSection({ eyebrow, title, segments, exclude, excludeLabel = "Не подходим" }: IcpIntroSectionProps) {
  const excludeParts = exclude
    .split("\n")
    .map((part) => part.trim())
    .filter(Boolean);
  const [excludeLead, ...excludeItems] = excludeParts;

  return (
    <section className="relative py-10 md:py-12">
      <div className="absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[94%]">
        <div className="mx-auto w-full max-w-[1320px]">
          <article className="bbi-icp-intro-shell overflow-hidden rounded-[32px] px-4 py-5 md:px-6 md:py-6">
            <div className="relative mb-7 flex flex-col items-center gap-1.5 text-center md:mb-8">
              <h2 className="break-words text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-white sm:text-[34px] md:text-[50px]">
                {title}
              </h2>
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[rgba(212,168,52,0.88)] md:text-xs">
                {eyebrow}
              </span>
            </div>

            <div className="relative grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] [grid-auto-rows:auto] md:[grid-auto-rows:1fr]">
              {segments.map((segment, i) => {
                const contentParts = (segment.details ?? segment.description)
                  .split("\n\n")
                  .map((part) => part.trim())
                  .filter(Boolean);
                const [leadParagraph, ...collapsedParagraphs] = contentParts;

                return (
                  <div
                    key={i}
                    className="bbi-icp-intro-card bbi-hover-lift flex h-full min-w-0 flex-col gap-3 overflow-hidden rounded-[24px] px-4 py-4 text-left md:px-5 md:py-5"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-white/92 [&>svg]:h-5 [&>svg]:w-5">
                      {TARGET_ICON}
                    </div>
                    <h3 className="text-balance text-[18px] font-semibold leading-[1.18] tracking-tight text-white md:text-[20px]">
                      {segment.title}
                    </h3>
                    <div className="w-full text-[13px] leading-[1.62] text-white/78 md:text-[14px]">
                      <p>{leadParagraph}</p>
                      {collapsedParagraphs.length > 0 && (
                        <details className="group mt-2">
                          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[13px] font-medium tracking-wide text-[var(--bbi-red)] transition hover:text-[var(--bbi-red-hover)] marker:hidden [&::-webkit-details-marker]:hidden">
                            Подробнее
                            <span className="text-[12px] font-semibold" aria-hidden>
                              &gt;&gt;
                            </span>
                          </summary>
                          <div className="mt-2 space-y-2.5">
                            {collapsedParagraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>
                        </details>
                      )}
                    </div>
                    {segment.metrics && (
                      <p className="text-[13px] font-semibold text-white/70 md:text-[14px]">
                        {segment.metrics}
                      </p>
                    )}
                    <div className="mt-4 w-full pt-3 md:mt-auto">
                      <div className="mb-3 h-px w-full bg-gradient-to-r from-transparent via-white/14 to-transparent" />
                      <div className="bbi-icp-intro-pill w-full rounded-2xl px-3 py-2.5">
                        <p className="text-center text-[12px] font-medium leading-snug text-[#1c1b1b]">
                          {segment.pain}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <div className="bbi-hover-lift mx-auto mt-5 w-full rounded-[24px] border border-[var(--bbi-red)]/45 bg-black/25 px-5 py-4 text-center md:px-6 md:py-5">
            <h4 className="flex items-center justify-center gap-2 text-[30px] font-semibold leading-none text-white md:text-[38px]">
              {WARNING_ICON}
              {excludeLabel}
            </h4>
            {excludeLead && <p className="mx-auto mt-2.5 text-[14px] leading-[1.45] text-white/78 md:text-[15px]">{excludeLead}</p>}
            {excludeItems.length > 0 && (
              <div className="mx-auto mt-3 max-w-[1120px] space-y-2.5 text-left">
                {excludeItems.map((item) => (
                  <p key={item} className="text-[13px] leading-[1.5] text-white/78 md:text-[14px]">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
