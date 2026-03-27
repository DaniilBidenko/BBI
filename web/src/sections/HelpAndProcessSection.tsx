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
    <section className="relative py-14 md:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto w-full max-w-6xl px-4 lg:px-6">
        <div className="rounded-[28px] border border-[color:var(--bbi-panel-border)] bg-[radial-gradient(125%_90%_at_50%_0%,rgba(255,255,255,0.085)_0%,rgba(255,255,255,0.02)_36%,rgba(255,255,255,0)_70%),var(--bbi-panel-bg)] p-5 shadow-[0_26px_70px_rgba(0,0,0,0.55)] md:p-7">
        <header className="mb-8 text-center md:mb-10">
          {label && (
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--bbi-red)]">
              {label}
            </span>
          )}
          <h2 className="text-[34px] font-semibold uppercase leading-[0.96] tracking-tight text-white md:text-[44px]">
            {title}
          </h2>
          <div className="mx-auto mt-3 h-px w-[90px] bg-white/22" />
          {description && (
            <p className="mx-auto mt-3 max-w-3xl text-[12px] uppercase leading-[1.32] tracking-[0.16em] text-[rgba(255,192,7,1)] md:text-[13px]">
              {description}
            </p>
          )}
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {stages.map((stage, i) => (
            <article
              key={i}
              className="group relative flex min-h-[305px] flex-col overflow-hidden rounded-[26px] border border-[color:var(--bbi-panel-border)] bg-[radial-gradient(120%_92%_at_45%_0%,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.024)_34%,rgba(255,255,255,0)_66%),var(--bbi-panel-bg)] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.46)] transition-all duration-300 hover:border-white/25 md:min-h-[320px] md:p-6"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/6 text-white/85 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0">
                    {STAGE_ICONS[i % STAGE_ICONS.length]}
                  </span>
                  <div className="pt-0.5">
                    <h3 className="text-[37px] font-semibold leading-[1.05] text-white">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-[15px] leading-[1.55] text-white/78">
                  {stage.description}
                </p>

                {stage.result && (
                  <div className="mt-4 w-fit rounded-full border border-[rgba(255,43,68,0.55)] px-3 py-1.5">
                    <p className="text-[12px] font-medium leading-none text-[var(--bbi-red)]">
                      {stage.result}
                    </p>
                  </div>
                )}

                {stage.clientGets && stage.clientGets.length > 0 && (
                  <div className="mt-auto border-t border-white/16 pt-3">
                    <ul className="space-y-1.5">
                      {stage.clientGets.map((item, j) => (
                        <li key={j} className="flex gap-2 text-[13px] leading-snug text-white/68">
                          <span className="mt-0.5 shrink-0 text-[var(--bbi-red)]" aria-hidden>
                            &gt;
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {ctaLabel && ctaHref && (
          <div className="mt-8 flex justify-center">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-full bg-[var(--bbi-red)] px-6 py-2 text-[13px] font-medium text-white shadow-[0_0_28px_rgba(255,43,68,0.35)] transition hover:bg-[var(--bbi-red-hover)]"
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
