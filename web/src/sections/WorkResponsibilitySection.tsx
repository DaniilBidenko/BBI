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
    <section className="relative py-16 md:py-18">
      <Container className="relative mx-auto space-y-7 lg:w-[90%]">
        <h2 className="text-center text-[38px] font-semibold uppercase leading-[0.98] text-white md:text-[46px]">{title}</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="bbi-card rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_38%,rgba(10,12,17,0.82)_100%)] px-6 py-5 backdrop-blur-[1px] md:px-7 md:py-6">
            <div className="text-[34px] font-semibold leading-[1.06] text-white md:text-[38px]">{bbiTitle}</div>
            <ul className="mt-3.5 space-y-2 text-[14px] text-white/78 md:text-[15px]">
              {bbi.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-[rgba(255,43,68,0.95)]">»</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bbi-card rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_38%,rgba(10,12,17,0.82)_100%)] px-6 py-5 backdrop-blur-[1px] md:px-7 md:py-6">
            <div className="text-[34px] font-semibold leading-[1.06] text-white md:text-[38px]">
              {clientTitle}
            </div>
            <ul className="mt-3.5 space-y-2 text-[14px] text-white/78 md:text-[15px]">
              {client.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-[rgba(255,43,68,0.95)]">»</span>
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
