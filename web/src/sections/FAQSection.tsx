"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

type FAQSectionProps = {
  title: string;
  items: { q: string; a: string }[];
};

export function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-8 md:py-10">
      <Container className="relative mx-auto lg:w-[90%]">
        <h2 className="mb-4 text-center text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
          {title}
        </h2>
        <div className="bbi-card mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-5 md:p-6 shadow-sm">
          <div className="space-y-5">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl border border-black/[0.06] bg-white/80 transition-all duration-200 hover:border-[var(--bbi-red)]/25 hover:shadow-[0_1px_3px_rgba(0,0,0,0.06)]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left md:px-5 md:py-3.5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[var(--bbi-text)] text-[15px]">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 text-[var(--bbi-red)] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      ↓
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-black/[0.06] px-4 pb-2.5 pt-0 md:px-5 md:pb-3">
                      <p className="text-[14px] leading-[1.7] text-[var(--bbi-muted)] md:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
