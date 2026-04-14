import { Container } from "@/components/Container";
import type { WorkZone } from "@/content/dictionaries/types";

type WorkFormatSectionProps = {
  title: string;
  description: string;
  zones: WorkZone[];
};

const toneClasses: Record<WorkZone["tone"], string> = {
  green: "bg-[#26d07c]",
  yellow: "bg-[#f7b500]",
  red: "bg-[#ff2b44]",
};

const toneTextClasses: Record<WorkZone["tone"], string> = {
  green: "text-[#26d07c]",
  yellow: "text-[#f7b500]",
  red: "text-[#ff2b44]",
};

export function WorkFormatSection({
  title,
  description,
  zones,
}: WorkFormatSectionProps) {
  return (
    <section className="relative -mb-10 -mt-8 py-28 md:-mb-12 md:-mt-10 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 -top-32 -bottom-32 -z-10 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/work-format-photo.png"
          alt=""
          className="h-full w-full object-cover object-center brightness-[0.5] contrast-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.68)_38%,rgba(0,0,0,0.66)_62%,rgba(0,0,0,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,rgba(0,0,0,0.08)_28%,rgba(0,0,0,0.46)_72%,#000_100%)]" />
      </div>
      <Container className="relative mx-auto space-y-12 lg:w-[96%]">
        <div className="mx-auto max-w-5xl space-y-5 text-center">
          <h2 className="break-words text-[28px] font-semibold uppercase leading-[1.05] text-white sm:text-[34px] md:text-[40px]">
            {title}
          </h2>
          <p className="break-words text-[12px] uppercase tracking-[0.14em] text-[rgba(255,196,58,0.98)] sm:text-[14px] md:text-[20px]">
            {description}
          </p>
          </div>
          <div className="mx-auto w-full max-w-5xl space-y-12">
            {zones.map((zone) => (
              <div
                key={zone.label}
                className="bbi-card bbi-hover-lift relative min-h-[146px] rounded-[22px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_38%,rgba(10,12,17,0.78)_100%)] px-5 pb-6 pt-8 backdrop-blur-[1px] sm:px-7 sm:pb-7 sm:pt-9"
              >
                <div className="absolute -top-8 left-1/2 z-10 -translate-x-1/2 rounded-[18px] border border-white/16 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.02)_42%,rgba(14,16,22,0.92)_100%)] p-2.5 shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold text-black ${toneClasses[zone.tone]}`}
                  >
                    {zone.tone === "green" ? "✓" : zone.tone === "yellow" ? "!" : "×"}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 text-center">
                  <div className={`text-[18px] font-semibold leading-none md:text-[19px] ${toneTextClasses[zone.tone]}`} style={{ opacity: 0.86 }}>
                    {zone.label}
                  </div>
                </div>
                <p className="mt-3 break-words text-center text-[13px] text-white/72 md:text-[14px]">
                  {zone.description}
                </p>
              </div>
            ))}
          </div>
      </Container>
    </section>
  );
}
