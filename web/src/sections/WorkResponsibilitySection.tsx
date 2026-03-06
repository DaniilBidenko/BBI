import { Container } from "@/components/Container";

type WorkResponsibilitySectionProps = {
  title: string;
  bbiTitle: string;
  clientTitle: string;
  bbi: string[];
  client: string[];
};

export function WorkResponsibilitySection({
  title,
  bbiTitle,
  clientTitle,
  bbi,
  client,
}: WorkResponsibilitySectionProps) {
  return (
    <section className="relative py-24">
      <Container className="relative mx-auto space-y-6 lg:w-[85%]">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6">
            <div className="text-sm font-semibold text-white">{bbiTitle}</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {bbi.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff2b44]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bbi-card rounded-3xl border border-white/10 bg-[#1b1c21] p-6">
            <div className="text-sm font-semibold text-white">
              {clientTitle}
            </div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {client.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ff2b44]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
