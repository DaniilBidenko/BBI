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
    <section className="relative py-16 md:py-20">
      <Container className="relative mx-auto lg:w-[90%]">
        <h2 className="mb-10 text-center text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
          {title}
        </h2>
        <div className="mx-auto max-w-2xl space-y-3">
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bbi-card overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)]/30"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-[var(--bbi-text)]">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-[var(--bbi-red)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    ↓
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-black/[0.06] px-6 py-4">
                    <p className="text-[15px] leading-[1.75] text-[var(--bbi-muted)]">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
