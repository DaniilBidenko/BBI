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
    <section className="relative py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="bbi-faq-shell mx-auto w-full max-w-6xl overflow-hidden rounded-[28px] p-6 pb-8 md:p-8 md:pb-10 lg:p-10 lg:pb-11">
          <h2 className="mb-7 text-center text-[44px] font-semibold uppercase leading-[1] text-white md:mb-10 md:text-[50px]">
            {title}
          </h2>
          <div className="space-y-5 md:space-y-6">
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              const tone = Math.min(
                Math.round((idx / Math.max(items.length - 1, 1)) * 4),
                4
              );
              return (
                <div
                  key={idx}
                  className={`bbi-faq-row overflow-hidden transition-[border-radius] duration-200 ${isOpen ? "rounded-[22px]" : "rounded-full"}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left md:px-6 md:py-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-[rgba(255,43,68,1)] text-[22px] md:text-[24px]">
                      {item.q}
                    </span>
                    <span className={`bbi-faq-icon bbi-faq-icon--t${tone}`} aria-hidden>
                      <svg
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7M17 7H9M17 7V15" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-white/[0.08] px-5 pb-5 pt-2 md:px-6">
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
