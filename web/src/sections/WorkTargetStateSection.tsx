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
            <div className="text-sm font-semibold text-white">
              {minimumTitle}
            </div>
            <p className="mt-2 text-sm text-white/70">{minimumDescription}</p>
          </div>
          <div className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6">
            <div className="text-sm font-semibold text-white">{idealTitle}</div>
            <p className="mt-2 text-sm text-white/70">{idealDescription}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
