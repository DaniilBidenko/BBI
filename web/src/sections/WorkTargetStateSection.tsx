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
    <section className="relative py-24">
      <Container className="relative mx-auto space-y-6 lg:w-[85%]">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <div className="space-y-4">
          <div className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">
                  {minimumTitle}
                </div>
                <p className="mt-2 text-sm text-white/70">
                  {minimumDescription}
                </p>
              </div>
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-[#14151a] text-[#ff2b44]"
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">
                  {idealTitle}
                </div>
                <p className="mt-2 text-sm text-white/70">{idealDescription}</p>
              </div>
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-[#14151a] text-[#ff2b44]"
                aria-hidden
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M3 3v18h18" />
                  <path d="M6 16v-4M12 16v-8M18 16v-12" />
                  <path d="M4 12l4-4 4 2 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
