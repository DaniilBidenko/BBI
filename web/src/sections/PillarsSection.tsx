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
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section className="relative py-20 md:py-24">
      <ClockBackground className="pointer-events-none absolute -left-4 -top-32 -z-10 h-[400px] w-[400px] opacity-[0.18]" />
      <Container className="relative max-w-7xl space-y-8">
        <div className="mx-auto w-full lg:w-[95%]">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h2>
        </div>
        <div className="relative mx-auto grid items-start gap-6 lg:w-[95%] lg:grid-cols-3 lg:gap-8">
          {items.map((item, index) => {
            const isCenter = index === 2;
            const isOpen = openIndices.has(index);

            return (
              <div
                key={item.title}
                className={`group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-gradient-to-b from-[#1e1f24] to-[#16171b] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-white/[0.18] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] md:p-7 ${isCenter ? "ring-1 ring-[#ff2b44]/40" : ""}`}
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#ff2b44] via-[#ff2b44]/80 to-transparent" />
                <div className="flex flex-col gap-4 pl-1">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold tabular-nums text-white/90">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full bg-[#ff2b44]/15 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#ff2b44]">
                      Pillar
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-white md:text-xl">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.75] text-white/90 md:text-base">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/70 transition hover:text-[#ff2b44]"
                    aria-expanded={isOpen}
                    onClick={() => toggleIndex(index)}
                  >
                    <span className="uppercase tracking-wider">
                      {item.linkLabel}
                    </span>
                    <span
                      className={`inline-block transition-transform ${isOpen ? "rotate-180" : ""}`}
                    >
                      ↓
                    </span>
                  </button>
                </div>
                {isOpen ? (
                  <div className="mt-4 border-t border-white/10 pt-4 pl-1">
                    <p className="text-[15px] leading-[1.75] text-white/90 md:text-base">
                      {item.details ?? item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#ff2b44] transition hover:text-[#ff4960]"
                    >
                      {item.linkLabel}
                      <span aria-hidden>→</span>
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
