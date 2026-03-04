import Link from "next/link";
import { Container } from "@/components/Container";
import type { HomePillar } from "@/content/dictionaries/types";

type PillarsSectionProps = {
  title: string;
  items: HomePillar[];
};

export function PillarsSection({ title, items }: PillarsSectionProps) {
  return (
    <section className="py-16">
      <Container className="space-y-8">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-white/70">{item.description}</p>
              <Link
                href={item.href}
                className="mt-auto text-sm text-red-400 hover:text-red-300"
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
