import { Container } from "@/components/Container";

type WorkResponsibilitySectionProps = {
  title: string;
  description?: string;
  bbiTitle: string;
  clientTitle: string;
  bbi: string[];
  client: string[];
  bbiDetailed?: { title: string; description: string }[];
  clientDetailed?: { title: string; description: string }[];
};

export function WorkResponsibilitySection({
  title,
  description,
  bbiTitle,
  clientTitle,
  bbi,
  client,
  bbiDetailed,
  clientDetailed,
}: WorkResponsibilitySectionProps) {
  const renderDetailed = (items: { title: string; description: string }[]) => (
    <div className="mt-4 space-y-4">
      {items.map((item) => (
        <article key={item.title} className="bbi-hover-lift rounded-xl border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
          <h3 className="text-[16px] font-semibold leading-[1.25] text-white/92 md:text-[17px]">{item.title}</h3>
          <p className="mt-1.5 text-[13.5px] leading-[1.5] text-white/74 md:text-[14px]">{item.description}</p>
        </article>
      ))}
    </div>
  );

  return (
    <section className="relative py-16 md:py-18">
      <Container className="relative mx-auto space-y-7 lg:w-[90%]">
        <h2 className="break-words text-center text-[28px] font-semibold uppercase leading-[1.05] text-white sm:text-[34px] md:text-[46px]">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto max-w-5xl text-center text-[14px] leading-[1.55] text-white/75 md:text-[15px]">
            {description}
          </p>
        ) : null}
        <div className="grid gap-5 md:grid-cols-2">
          <div className="bbi-card bbi-hover-lift rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_38%,rgba(10,12,17,0.82)_100%)] px-6 py-5 backdrop-blur-[1px] md:px-7 md:py-6">
            <div className="break-words text-[24px] font-semibold leading-[1.12] text-white sm:text-[28px] md:text-[38px]">
              {bbiTitle}
            </div>
            {bbiDetailed && bbiDetailed.length > 0 ? (
              renderDetailed(bbiDetailed)
            ) : (
              <ul className="mt-3.5 space-y-2 text-[14px] text-white/78 md:text-[15px]">
                {bbi.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-[rgba(255,43,68,0.95)]">»</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="bbi-card bbi-hover-lift rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_38%,rgba(10,12,17,0.82)_100%)] px-6 py-5 backdrop-blur-[1px] md:px-7 md:py-6">
            <div className="break-words text-[24px] font-semibold leading-[1.12] text-white sm:text-[28px] md:text-[38px]">
              {clientTitle}
            </div>
            {clientDetailed && clientDetailed.length > 0 ? (
              renderDetailed(clientDetailed)
            ) : (
              <ul className="mt-3.5 space-y-2 text-[14px] text-white/78 md:text-[15px]">
                {client.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-[rgba(255,43,68,0.95)]">»</span>
                    <span className="break-words">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
