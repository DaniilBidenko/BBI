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
  return (
    <section className="relative py-14 md:py-18">
      <div className="absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[94%]">
        <div className="mx-auto w-full max-w-[1320px]">
          <article className="relative overflow-hidden rounded-[30px] border border-[color:var(--bbi-panel-border)] bg-[radial-gradient(120%_90%_at_50%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_66%),var(--bbi-panel-bg)] px-5 py-7 shadow-[0_14px_38px_rgba(0,0,0,0.48)] md:px-7 md:py-9">
            <div className="mb-7 flex flex-col items-center gap-1.5 text-center">
              <h2 className="text-[36px] font-semibold uppercase leading-none tracking-[0.01em] text-white md:text-[50px]">
                {title}
              </h2>
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[rgba(255,192,7,1)] md:text-xs">
                {eyebrow}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
              {segments.map((segment, i) => (
                <div
                  key={i}
                  className="flex min-h-[330px] min-w-0 flex-col rounded-[24px] border border-[color:var(--bbi-panel-border)] bg-[radial-gradient(120%_95%_at_45%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.024)_34%,rgba(255,255,255,0)_66%),var(--bbi-panel-bg)] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:min-h-[355px] md:px-6 md:py-7"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center self-center text-white/95 [&>svg]:h-6 [&>svg]:w-6">
                    {TARGET_ICON}
                  </div>
                  <h3 className="mb-3 text-[26px] font-semibold leading-[1.06] tracking-tight text-white md:text-[32px]">
                    {segment.title}
                  </h3>
                  <p className="mx-auto max-w-[31ch] text-[15px] leading-[1.5] text-white/74 md:text-[16px]">
                    {segment.details ?? segment.description}
                  </p>
                  {segment.metrics && (
                    <p className="mt-3 text-[14px] font-semibold text-white/68 md:text-[15px]">
                      {segment.metrics}
                    </p>
                  )}
                  <div className="mt-auto w-full pt-4">
                    <div className="mx-auto max-w-[300px] rounded-2xl border border-white/30 bg-white px-4 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.2)]">
                      <p className="text-center text-[12px] font-medium leading-[1.25] text-[#1d1d1f] md:text-[13px]">
                      «{segment.pain}»
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="mx-auto mt-5 w-full max-w-xl rounded-[24px] border border-[var(--bbi-red)]/45 bg-black/25 px-5 py-4 text-center md:px-6 md:py-5">
            <h4 className="flex items-center justify-center gap-2 text-[30px] font-semibold leading-none text-white md:text-[38px]">
              {WARNING_ICON}
              {excludeLabel}
            </h4>
            <p className="mx-auto mt-2.5 max-w-[56ch] text-[12px] leading-[1.45] text-white/74 md:text-[13px]">
              {exclude}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
