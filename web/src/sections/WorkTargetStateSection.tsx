import { Container } from "@/components/Container";

type WorkTargetStateSectionProps = {
  title: string;
  minimumTitle: string;
  minimumDescription: string;
  idealTitle: string;
  idealDescription: string;
};

export function WorkTargetStateSection({
  title,
  minimumTitle,
  minimumDescription,
  idealTitle,
  idealDescription,
}: WorkTargetStateSectionProps) {
  return (
    <section className="relative py-16 md:py-18">
      <Container className="relative mx-auto space-y-7 lg:w-[90%]">
        <h2 className="break-words text-center text-[28px] font-semibold uppercase leading-[1.05] text-white sm:text-[34px] md:text-[42px]">
          {title}
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="bbi-card bbi-hover-lift rounded-[28px] border border-[rgba(255,43,68,0.26)] bg-[radial-gradient(120%_92%_at_50%_0%,rgba(255,43,68,0.22)_0%,rgba(255,43,68,0.08)_36%,rgba(255,43,68,0)_72%),linear-gradient(180deg,rgba(28,14,20,0.9)_0%,rgba(10,12,16,0.94)_100%)] px-6 py-5 backdrop-blur-[1px] md:px-7 md:py-6">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(255,43,68,0.35)] bg-[rgba(255,43,68,0.18)] text-[#ff2b44]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <div className="break-words text-[22px] font-semibold leading-[1.12] text-white sm:text-[26px] md:text-[33px]">
                  {minimumTitle}
                </div>
                <p className="mt-1.5 text-[13px] leading-[1.42] text-white/82 md:text-[14px]">
                  {minimumDescription}
                </p>
              </div>
            </div>
          </div>
          <div className="bbi-card bbi-hover-lift rounded-[28px] border border-[rgba(255,43,68,0.26)] bg-[radial-gradient(120%_92%_at_50%_0%,rgba(255,43,68,0.22)_0%,rgba(255,43,68,0.08)_36%,rgba(255,43,68,0)_72%),linear-gradient(180deg,rgba(28,14,20,0.9)_0%,rgba(10,12,16,0.94)_100%)] px-6 py-5 backdrop-blur-[1px] md:px-7 md:py-6">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] border border-[rgba(255,43,68,0.35)] bg-[rgba(255,43,68,0.18)] text-[#ff2b44]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4.5 w-4.5"
                >
                  <path d="M3 3v18h18" />
                  <path d="M6 16v-4M12 16v-8M18 16v-12" />
                  <path d="M4 12l4-4 4 2 6-6" />
                </svg>
              </div>
              <div>
                <div className="break-words text-[22px] font-semibold leading-[1.12] text-white sm:text-[26px] md:text-[33px]">
                  {idealTitle}
                </div>
                <p className="mt-1.5 text-[13px] leading-[1.42] text-white/82 md:text-[14px]">{idealDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
