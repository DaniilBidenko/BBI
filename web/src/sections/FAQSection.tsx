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
    <section className="relative py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <h2 className="mb-6 text-center text-[44px] font-semibold uppercase leading-[1] text-white md:mb-8 md:text-[50px]">
          {title}
        </h2>
        <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] border border-[color:var(--bbi-panel-border)] bg-[radial-gradient(120%_90%_at_45%_0%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_66%),var(--bbi-panel-bg)] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.5)] md:p-7">
          <div className="space-y-3 md:space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden rounded-full border border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.11)_0%,rgba(255,255,255,0.03)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-200 hover:border-white/28"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left md:px-5 md:py-3.5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[rgba(255,43,68,1)] text-[22px] md:text-[24px]">
                      {item.q}
                    </span>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/6 text-[var(--bbi-red)]">
                      <span className={`text-[16px] leading-none transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>↗</span>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/12 px-5 pb-4 pt-1 md:px-6">
                      <p className="text-[14px] leading-[1.7] text-white/78 md:text-[15px]">
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
