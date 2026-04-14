import { Container } from "@/components/Container";

type Stage = {
  title: string;
  description: string;
  result?: string;
  clientGets?: string[];
};

type HelpAndProcessSectionProps = {
  label?: string;
  title: string;
  description?: string;
  stages: Stage[];
  ctaLabel?: string;
  ctaHref?: string;
};

const LIST_ARROW = (
  <svg viewBox="0 0 24 24" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[rgba(232,182,72,0.92)]" aria-hidden fill="none">
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const STAGE_ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <circle cx="11" cy="11" r="6.2" />
    <path d="M20 20l-4.1-4.1" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.43 12.98c.04-.32.07-.65.07-.98s-.03-.66-.08-.98l2.11-1.65a.5.5 0 00.12-.64l-2-3.46a.5.5 0 00-.6-.22l-2.49 1c-.51-.42-1.08-.75-1.69-.98l-.38-2.65A.5.5 0 0014 2h-4a.5.5 0 00-.49.42l-.38 2.65c-.61.23-1.18.56-1.69.98l-2.49-1a.5.5 0 00-.6.22l-2 3.46a.5.5 0 00.12.64l2.1 1.65c-.04.32-.07.65-.07.98s.03.66.08.98l-2.11 1.65a.5.5 0 00-.12.64l2 3.46c.13.22.39.31.62.22l2.49-1c.51.42 1.08.75 1.69.98l.38 2.65c.05.24.25.42.49.42h4c.24 0 .44-.18.49-.42l.38-2.65c.61-.23 1.18-.56 1.69-.98l2.49 1c.23.09.49 0 .62-.22l2-3.46a.5.5 0 00-.12-.64l-2.12-1.66zM12 15.5A3.5 3.5 0 1112 8a3.5 3.5 0 010 7.5z" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>,
];

export function HelpAndProcessSection({
  label,
  title,
  description,
  stages,
  ctaLabel,
  ctaHref,
}: HelpAndProcessSectionProps) {
  return (
    <section className="relative py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[94%]">
        <div className="mx-auto w-full max-w-[1320px]">
          <article className="bbi-help-panel-shell bbi-hover-lift overflow-hidden rounded-[32px] px-4 py-7 md:px-7 md:py-9">
            <header className="relative mb-5 flex flex-col items-center gap-2 text-center md:mb-6">
              {label && (
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--bbi-red)] md:text-xs">
                  {label}
                </span>
              )}
              <h2 className="max-w-3xl break-words text-[28px] font-semibold uppercase leading-[1.05] tracking-[0.01em] text-white sm:text-[34px] md:text-[50px]">
                {title}
              </h2>
              {description && (
                <p className="mx-auto max-w-3xl text-[12px] uppercase leading-[1.35] tracking-[0.16em] text-[rgba(212,168,52,0.88)] md:text-[13px]">
                  {description}
                </p>
              )}
            </header>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-4 md:gap-5">
              {stages.map((stage, i) => {
                const topRow = Math.floor(i / 2) === 0;
                return (
                <article
                  key={i}
                  className={`bbi-hover-lift group relative flex min-h-[240px] flex-col overflow-hidden rounded-[24px] p-4 text-left transition-[box-shadow,border-color] md:min-h-[260px] md:p-5 ${
                    topRow ? "bbi-help-panel-card--top hover:border-[rgba(245,246,250,0.14)]" : "bbi-help-panel-card--bottom hover:border-[rgba(255,255,255,0.11)]"
                  }`}
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border text-white/88 [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:shrink-0 ${
                          topRow ? "bbi-help-stage-icon--top" : "bbi-help-stage-icon--bottom"
                        }`}
                      >
                        {STAGE_ICONS[i % STAGE_ICONS.length]}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-[22px] font-semibold leading-[1.08] tracking-tight text-white md:text-[26px]">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-[14px] leading-[1.55] text-white/74 md:text-[15px]">
                      {stage.description}
                    </p>

                    {stage.result && (
                      <div className="mt-4 w-fit self-start rounded-full border border-[var(--bbi-red)]/45 bg-transparent px-3 py-1.5">
                        <p className="text-[13px] font-medium leading-snug text-[var(--bbi-red)] md:text-[14px]">
                          {stage.result}
                        </p>
                      </div>
                    )}

                    {stage.clientGets && stage.clientGets.length > 0 && (
                      <div className="mt-auto pt-4">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/18 to-transparent" />
                        <ul className="mt-3 space-y-2">
                          {stage.clientGets.map((item, j) => (
                            <li key={j} className="flex gap-2.5 text-[12px] leading-snug text-white/68 md:text-[13px]">
                              {LIST_ARROW}
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
                );
              })}
            </div>
          </article>

          {ctaLabel && ctaHref && (
            <div className="mt-6 flex justify-center">
              <a
                href={ctaHref}
                className="bbi-hover-lift inline-flex items-center justify-center rounded-full bg-[var(--bbi-red)] px-9 py-3 text-[15px] font-semibold text-white shadow-[0_3px_12px_rgba(0,0,0,0.28)] transition hover:bg-[var(--bbi-red-hover)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.32)]"
              >
                {ctaLabel}
              </a>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
