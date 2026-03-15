import { Container } from "@/components/Container";
import { CtaBlock } from "@/components/CtaBlock";

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
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bbi-bg)]/40 to-[var(--bbi-bg)]/80" />
      <Container className="relative mx-auto w-full max-w-6xl px-4 lg:px-6">
        <header className="mb-10 max-w-2xl md:mb-12">
          {label && (
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--bbi-red)]">
              {label}
            </span>
          )}
          <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[var(--bbi-text)] md:text-3xl">
            {title}
          </h2>
          <div className="mt-3 h-0.5 w-12 rounded-full bg-[var(--bbi-red)]/70" />
          {description && (
            <p className="mt-4 text-[15px] leading-[1.75] text-[var(--bbi-text)]/85 md:text-base">
              {description}
            </p>
          )}
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {stages.map((stage, i) => (
            <article
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--bbi-text)]/[0.08] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--bbi-red)]/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="absolute inset-y-0 left-0 w-[3px] bg-[var(--bbi-red)]/40 transition-colors duration-300 group-hover:bg-[var(--bbi-red)]" />
              <div className="flex flex-1 flex-col p-6 pl-7 md:p-7 md:pl-8">
                <div className="flex items-start gap-3 pb-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bbi-red)]/15 text-[var(--bbi-red)] transition-colors group-hover:bg-[var(--bbi-red)]/20 [&_svg]:shrink-0">
                    {STAGE_ICONS[i % STAGE_ICONS.length]}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold tabular-nums text-[var(--bbi-text)]/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-0.5 text-lg font-semibold leading-snug text-[var(--bbi-text)]">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[14px] leading-[1.7] text-[var(--bbi-text)]">
                  {stage.description}
                </p>

                {stage.result && (
                  <div className="mt-4 rounded-lg border-l-4 border-[var(--bbi-red)]/50 bg-[var(--bbi-red)]/[0.06] py-3 pl-4 pr-4">
                    <p className="text-[13px] font-medium leading-snug text-[var(--bbi-text)]">
                      {stage.result}
                    </p>
                  </div>
                )}

                {stage.clientGets && stage.clientGets.length > 0 && (
                  <div className="mt-5 border-t border-[var(--bbi-text)]/[0.08] pt-4">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-[var(--bbi-text)]/70">
                      На руки
                    </p>
                    <ul className="space-y-1.5">
                      {stage.clientGets.map((item, j) => (
                        <li key={j} className="flex gap-2.5 text-[13px] leading-snug text-[var(--bbi-text)]">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bbi-red)]/70" aria-hidden />
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
          <div className="mt-8">
            <CtaBlock href={ctaHref} label={ctaLabel} />
          </div>
        )}
      </Container>
    </section>
  );
}
