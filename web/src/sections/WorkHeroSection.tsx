 "use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";

type WorkHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHint: string;
  ctaHref: string;
};

export function WorkHeroSection({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHint,
  ctaHref,
}: WorkHeroSectionProps) {
  const slides = useMemo(
    () => [
      {
        lead: description,
        title: "Система вместо хаоса",
        body: "Мы проектируем единый контур управления и внедряем его вместе с вашей командой.",
      },
      {
        lead: "Мы не лечим симптомы, а устраняем первопричины.",
        title: "Диагностика и архитектура",
        body: "Показываем, где бизнес теряет управляемость, и собираем рабочую модель роста.",
      },
      {
        lead: "BBI заходит во все 6 столпов, а не в один участок.",
        title: "Внедрение 45+ дней",
        body: "Изменения переходят в регулярную практику, чтобы система работала без ручного контроля.",
      },
    ],
    [description],
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
        <div className="mb-10 border-b border-white/10 pb-6 text-[12px] text-white/45">
          Главная <span className="px-2">→</span> Как мы работаем
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.34fr_0.66fr] lg:items-start">
          <div className="space-y-6">
            <span className="text-sm uppercase tracking-[0.34em] text-[#f3c546]">
            {eyebrow}
            </span>
            <h1 className="max-w-[15ch] text-[52px] font-semibold uppercase leading-[0.98] tracking-tight text-white md:text-[66px]">
              {title}
            </h1>
            <p className="max-w-[36ch] text-[16px] leading-[1.32] text-white/90 md:text-[17px]">
              {description}
            </p>
            <div className="flex items-center gap-4 pt-2 whitespace-nowrap">
              <Link
                href={ctaHref}
                className="inline-flex h-10 items-center justify-center rounded-full bg-[var(--bbi-red)] px-6 text-[12px] font-semibold uppercase tracking-[0.04em] text-white transition hover:opacity-90"
              >
                {ctaLabel}
              </Link>
              <span className="text-[12px] uppercase tracking-[0.2em] text-white/38">
                {ctaHint}
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[332px] rounded-[24px] border border-[rgba(255,43,68,0.56)] bg-[rgba(10,10,14,0.44)] p-4 text-[13px] leading-[1.35] text-[rgba(255,43,68,0.84)] backdrop-blur-[1px] lg:mr-2 lg:mt-[174px]">
            <div className="pointer-events-none absolute inset-0 rounded-[24px] bg-[radial-gradient(130%_90%_at_50%_0%,rgba(255,43,68,0.11)_0%,rgba(255,43,68,0.02)_48%,rgba(255,43,68,0)_78%)]" />
            <div className="relative space-y-2.5">
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
              <p className="line-clamp-3 text-[12px] leading-[1.34] text-[rgba(255,43,68,0.9)]">
                {slides[activeIndex].lead}
              </p>
              <div className="flex items-end justify-between gap-3">
                <p className="line-clamp-5 max-w-[17ch] text-[12px] leading-[1.34] text-[rgba(255,43,68,0.9)]">
                  {slides[activeIndex].title}. {slides[activeIndex].body}
                </p>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={nextSlide}
                  className="text-[28px] leading-none text-white/85 transition hover:text-white"
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
