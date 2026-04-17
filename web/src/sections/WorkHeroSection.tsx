"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

type WorkHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHint?: string;
  ctaHref: string;
  carouselSlides: [string, string, string];
};

export function WorkHeroSection({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHint,
  ctaHref,
  carouselSlides,
}: WorkHeroSectionProps) {
  const slides = useMemo(
    () =>
      carouselSlides.map((lead) => ({
        lead,
        title: "",
        body: "",
      })),
    [carouselSlides],
  );
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative z-0 -mt-[58px] overflow-hidden pb-20 pt-[108px] md:-mt-[62px] md:pb-24 md:pt-[122px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/work-hero-photo.png"
          alt=""
          className="h-full w-full object-cover object-[center_36%] brightness-[0.82] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(0,0,0,0.74)_0%,rgba(0,0,0,0.46)_42%,rgba(0,0,0,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.54)_58%,rgba(0,0,0,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_18%,rgba(0,0,0,0)_30%,rgba(0,0,0,0.46)_72%,#000_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.32)_36%,rgba(0,0,0,0.62)_66%,rgba(0,0,0,0.88)_86%,#000_100%)]" />
      </div>
      <Container className="relative z-10 mx-auto lg:w-[90%]">
        <div className="mb-10" />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.35fr)_minmax(0,1fr)] lg:items-start lg:gap-7 xl:gap-8">
          <div className="min-w-0 space-y-6 lg:pr-0">
            <span className="text-sm uppercase tracking-[0.34em] text-[#f3c546]">{eyebrow}</span>
            <h1 className="max-w-none break-words text-[34px] font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-[46px] md:text-[58px] lg:text-[68px] xl:text-[72px]">
              {title}
            </h1>
            <p className="max-w-[40ch] whitespace-pre-line break-words text-[15px] leading-[1.5] text-white/90 sm:text-[16px] md:max-w-[48ch] md:text-[17px] lg:max-w-[58ch] lg:text-[18px]">
              {description}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={ctaHref}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[var(--bbi-red)] px-5 py-2 text-[12px] font-semibold leading-snug text-white transition hover:opacity-90 sm:px-6"
              >
                {ctaLabel}
              </Link>
              {ctaHint ? (
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/42 sm:text-[12px] sm:tracking-[0.2em]">
                  {ctaHint}
                </span>
              ) : null}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[min(100%,580px)] rounded-[28px] border border-[rgba(255,43,68,0.56)] bg-[rgba(10,10,14,0.44)] p-6 text-[15px] leading-[1.42] text-[rgba(255,43,68,0.84)] backdrop-blur-[1px] sm:p-7 md:max-w-[640px] lg:mx-0 lg:mt-[148px] lg:max-w-none lg:p-8">
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(130%_92%_at_18%_0%,rgba(255,43,68,0.13)_0%,rgba(255,43,68,0.03)_48%,rgba(255,43,68,0)_78%)]" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full transition ${index === activeIndex ? "w-4 bg-white/80" : "bg-white/30 hover:bg-white/50"}`}
                  />
                ))}
              </div>
              <p className="text-[14px] leading-[1.42] text-[rgba(255,43,68,0.92)] sm:text-[15px] md:text-[16px]">
                {slides[activeIndex].lead}
              </p>
              <div className="flex justify-end">
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={nextSlide}
                  className="shrink-0 self-end pb-0.5 text-[30px] leading-none text-white/85 transition hover:text-white md:text-[32px]"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
