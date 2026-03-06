"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/Container";
import type { HomePillar } from "@/content/dictionaries/types";
import { ClockBackground } from "@/components/ClockBackground";

type PillarsSectionProps = {
  title: string;
  items: HomePillar[];
};

export function PillarsSection({ title, items }: PillarsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="relative py-36 min-h-[100vh]">
      <ClockBackground className="pointer-events-none absolute -left-4 -top-40 -z-10 h-[520px] w-[520px] opacity-[0.22]" />
      <Container className="relative space-y-14">
        <div className="mx-auto w-full lg:w-[85%]">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        </div>
        <div className="relative mx-auto grid gap-16 lg:w-[85%] lg:grid-cols-3 lg:items-stretch lg:gap-24">
          {items.map((item, index) => {
            const isCenter = index === 2;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className={`bbi-card no-details pillars-details group relative h-full min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1c1d23] via-[#16171b] to-[#141518] p-8 transition duration-300 hover:border-white/20 ${isCenter ? "border-[#ff2b44]/30 shadow-[0_18px_40px_rgba(0,0,0,0.45)]" : ""}`}
              >
                <div className="pointer-events-none absolute left-0 top-6 h-12 w-[3px] bg-gradient-to-b from-[#ff2b44] via-[#b61f33] to-transparent" />
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-[#ff2b44]">Pillar</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70 md:text-base">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    className="text-left text-xs uppercase tracking-[0.22em] text-white/50 transition hover:text-white"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index
                      )
                    }
                  >
                    Подробнее
                  </button>
                </div>
                {isOpen ? (
                  <div className="pillars-body mt-4 border-t border-white/10 pt-4">
                    <div className="text-sm text-white/70">
                      {item.description}
                    </div>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex text-sm text-[#ff2b44] transition hover:text-[#ff4960]"
                    >
                      {item.linkLabel}
                    </Link>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
