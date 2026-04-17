import { Container } from "@/components/Container";
import { WorkResponsibilityCards } from "@/sections/WorkResponsibilityCards";

type WorkResponsibilitySectionProps = {
  title: string;
  description?: string;
  bbiTitle: string;
  clientTitle: string;
  bbi: string[];
  client: string[];
  bbiDetailed?: { title: string; description: string }[];
  clientDetailed?: { title: string; description: string }[];
  readMoreLabel: string;
  readLessLabel: string;
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
  readMoreLabel,
  readLessLabel,
}: WorkResponsibilitySectionProps) {
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
        <WorkResponsibilityCards
          bbiTitle={bbiTitle}
          clientTitle={clientTitle}
          bbi={bbi}
          client={client}
          bbiDetailed={bbiDetailed}
          clientDetailed={clientDetailed}
          readMoreLabel={readMoreLabel}
          readLessLabel={readLessLabel}
        />
      </Container>
    </section>
  );
}
