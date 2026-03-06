import { Container } from "@/components/Container";

type WorkInfographicSectionProps = {
  title: string;
  description: string;
};

export function WorkInfographicSection({
  title,
  description,
}: WorkInfographicSectionProps) {
  return (
    <section className="relative py-24">
      <Container className="relative mx-auto space-y-8 lg:w-[85%]">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            {description}
          </p>
        </div>
        <div className="bbi-card rounded-3xl border border-white/10 bg-[#14151a] p-6">
          <img
            src="/work/infographic-6-pillars.svg"
            alt=""
            className="h-auto w-full"
          />
        </div>
      </Container>
    </section>
  );
}
