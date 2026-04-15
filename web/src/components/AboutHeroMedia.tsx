"use client";

import { useState } from "react";

export type AboutHeroPage = {
  title: string;
  body: string;
};

type AboutHeroMediaProps = {
  pages: AboutHeroPage[];
  prevLabel: string;
  nextLabel: string;
  pagesGroupLabel: string;
};

export function AboutHeroMedia({
  pages,
  prevLabel,
  nextLabel,
  pagesGroupLabel,
}: AboutHeroMediaProps) {
  const [index, setIndex] = useState(0);
  const n = pages.length;
  const page = pages[index] ?? pages[0];

  const goPrev = () => setIndex((i) => (i - 1 + n) % n);
  const goNext = () => setIndex((i) => (i + 1) % n);

  return (
    <div className="bbi-about-animated-card relative overflow-hidden rounded-[34px] border border-white/12 bg-black/40 shadow-[0_24px_64px_rgba(0,0,0,0.65)]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/about-hero-photo.png"
          alt="Bold Brands International"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_28%,rgba(0,0,0,0.36)_55%,rgba(0,0,0,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.58)_58%,rgba(0,0,0,0.9)_100%)]" />
      </div>
      <div
        className="relative flex min-h-[390px] flex-col justify-end p-6 md:p-7 lg:px-12"
        aria-live="polite"
      >
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--bbi-red)]/95">BBI</span>
          <h2 className="mt-2 break-words text-[18px] font-semibold leading-[1.08] tracking-[-0.01em] text-white sm:text-[22px] md:text-[28px]">
            {page.title}
          </h2>
          <p className="mt-3 max-w-md text-[14px] leading-[1.4] text-white/84 sm:text-[15px] md:text-[16px]">
            {page.body}
          </p>
        </div>
        <div
          className="mt-5 flex items-center gap-1.5"
          role="tablist"
          aria-label={pagesGroupLabel}
        >
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`${i + 1} / ${n}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-[width,background-color] ${
                i === index ? "w-6 bg-[var(--bbi-red)]" : "w-1.5 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            aria-label={prevLabel}
            onClick={goPrev}
            className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/90 shadow-[0_6px_18px_rgba(0,0,0,0.42)] transition hover:bg-black/55 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label={nextLabel}
            onClick={goNext}
            className="z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/90 shadow-[0_6px_18px_rgba(0,0,0,0.42)] transition hover:bg-black/55 hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
