import { Container } from "@/components/Container";

type PositionSectionProps = {
  title: string;
  description: string;
};

export function PositionSection({ title, description }: PositionSectionProps) {
  return (
    <section className="py-16">
      <Container>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-4 text-sm text-white/70">{description}</p>
        </div>
      </Container>
    </section>
  );
}
