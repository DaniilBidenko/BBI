import Link from "next/link";
import { Container } from "@/components/Container";
import type { HomePillar } from "@/content/dictionaries/types";
import { ClockBackground } from "@/components/ClockBackground";

type PillarsSectionProps = {
  title: string;
  items: HomePillar[];
};

export function PillarsSection({ title, items }: PillarsSectionProps) {
  return (
    <section className="relative py-36 min-h-[100vh]">
      <ClockBackground className="pointer-events-none absolute -left-4 -top-40 -z-10 h-[520px] w-[520px] opacity-[0.22]" />
      <Container className="relative space-y-14">
        <div className="mx-auto w-full lg:w-[85%]">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        </div>
        <div className="mx-auto grid gap-10 lg:w-[85%] lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="bbi-card flex h-full min-h-[220px] flex-col gap-5 rounded-3xl border border-white/10 bg-[#1b1c21] p-8"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
              <Link
                href={item.href}
                className="mt-auto text-sm text-[#ff2b44] hover:text-[#ff4960]"
              >
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
