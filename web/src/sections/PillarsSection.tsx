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
        <div className="mx-auto grid gap-10 lg:w-[85%] lg:grid-cols-12 lg:items-stretch">
          {items.map((item, index) => {
            const layout =
              index === 0
                ? "lg:col-span-5 lg:translate-y-4"
                : index === 1
                  ? "lg:col-span-5 lg:col-start-8 lg:translate-y-0"
                  : "lg:col-span-6 lg:col-start-4 lg:translate-y-10";

            return (
              <article
                key={item.title}
                className={`bbi-card group relative flex h-full min-h-[220px] flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-[#1b1c21] p-8 ${layout}`}
              >
                <div className="pointer-events-none absolute -right-8 top-6 h-24 w-24 rounded-full border border-white/10 opacity-60" />
                <div className="pointer-events-none absolute -left-8 -bottom-10 h-32 w-32 rounded-full border border-white/5" />
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-[#ff2b44]">Pillar</span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
                <Link
                  href={item.href}
                  className="mt-auto text-sm text-[#ff2b44] transition hover:text-[#ff4960]"
                >
                  {item.linkLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
