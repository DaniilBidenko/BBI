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
  <svg viewBox="0 0 24 24" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--bbi-red)]" aria-hidden fill="none">
    <path
      fill="currentColor"
      d="M5 19h14v-2H9.41l12.3-12.29-1.42-1.42L8 15.59V5H5v14z"
    />
  </svg>
);

const STAGE_ICONS = [
  <svg key="0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>,
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
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
          <article className="bbi-help-panel-shell overflow-hidden rounded-[32px] px-4 py-7 md:px-7 md:py-9">
            <header className="relative mb-5 flex flex-col items-center gap-2 text-center md:mb-6">
              {label && (
                <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[var(--bbi-red)] md:text-xs">
                  {label}
                </span>
              )}
              <h2 className="max-w-3xl text-[36px] font-semibold uppercase leading-none tracking-[0.01em] text-white md:text-[50px]">
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
                  className={`group relative flex min-h-[240px] flex-col overflow-hidden rounded-[24px] p-4 text-left transition-[box-shadow,border-color] md:min-h-[260px] md:p-5 ${
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
                      <div className="mt-4 w-fit rounded-full border border-[var(--bbi-red)]/45 bg-transparent px-3 py-1.5">
                        <p className="text-[11px] font-medium leading-snug text-[var(--bbi-red)] md:text-[12px]">
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
                className="inline-flex items-center justify-center rounded-full bg-[var(--bbi-red)] px-8 py-2.5 text-[14px] font-medium text-white shadow-[0_3px_12px_rgba(0,0,0,0.28)] transition hover:bg-[var(--bbi-red-hover)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.32)]"
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
