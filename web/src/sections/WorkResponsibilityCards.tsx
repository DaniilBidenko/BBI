"use client";

import { useEffect, useRef, useState } from "react";

type WorkResponsibilityCardsProps = {
  bbiTitle: string;
  clientTitle: string;
  bbi: string[];
  client: string[];
  bbiDetailed?: { title: string; description: string }[];
  clientDetailed?: { title: string; description: string }[];
};

function withColon(value: string) {
  const trimmed = value.trim();
  return trimmed.endsWith(":") ? trimmed : `${trimmed}:`;
}

function renderDetailed(items: { title: string; description: string }[], isAccent = false) {
  const visibleItems = items.slice(0, 2);
  const hiddenItems = items.slice(2);

  return (
    <div className="mt-4">
      <div className="space-y-4">
        {visibleItems.map((item) => (
          <article
            key={item.title}
            className={`rounded-xl border-t pt-3 transition-colors duration-300 ease-out first:border-t-0 first:pt-0 ${
              isAccent ? "border-[#111111]/22" : "border-white/10"
            }`}
          >
            <h3
              className={`text-[16px] font-semibold leading-[1.25] md:text-[17px] ${
                isAccent ? "text-[#111111]" : "text-white/92"
              }`}
            >
              {item.title}
            </h3>
            <p className={`mt-1.5 text-[13.5px] leading-[1.5] md:text-[14px] ${isAccent ? "text-[#111111]/82" : "text-white/74"}`}>
              {item.description}
            </p>
          </article>
        ))}
      </div>
      {hiddenItems.length > 0 ? (
        <details className="group mt-4">
          <summary
            className={`inline-flex cursor-pointer list-none items-center rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.04em] transition-all duration-300 ease-out ${
              isAccent
                ? "bg-[var(--bbi-red)] text-white hover:bg-[var(--bbi-red-hover)]"
                : "bg-[var(--bbi-red)] text-white hover:opacity-90"
            }`}
          >
            <span className="group-open:hidden">Узнать больше</span>
            <span className="hidden group-open:inline">Скрыть</span>
          </summary>
          <div className="mt-4 space-y-4">
            {hiddenItems.map((item) => (
              <article
                key={item.title}
                className={`rounded-xl border-t pt-3 transition-colors duration-300 ease-out first:border-t-0 first:pt-0 ${
                  isAccent ? "border-[#111111]/22" : "border-white/10"
                }`}
              >
                <h3
                  className={`text-[16px] font-semibold leading-[1.25] md:text-[17px] ${
                    isAccent ? "text-[#111111]" : "text-white/92"
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`mt-1.5 text-[13.5px] leading-[1.5] md:text-[14px] ${isAccent ? "text-[#111111]/82" : "text-white/74"}`}>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </details>
      ) : null}
    </div>
  );
}

export function WorkResponsibilityCards({
  bbiTitle,
  clientTitle,
  bbi,
  client,
  bbiDetailed,
  clientDetailed,
}: WorkResponsibilityCardsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setLeftVisible(true);
      setRightVisible(true);
      return;
    }

    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === leftRef.current) setLeftVisible(true);
          if (entry.target === rightRef.current) setRightVisible(true);
        });
      },
      { root: null, threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="grid gap-5 [perspective:1200px] md:grid-cols-2">
      <div
        ref={leftRef}
        className={`bbi-resp-card bbi-resp-card--left ${leftVisible ? "bbi-resp-card--in" : ""} bbi-card rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.03)_38%,rgba(10,12,17,0.82)_100%)] px-6 py-5 backdrop-blur-[1px] md:px-7 md:py-6`}
      >
        <div className="break-words text-[24px] font-semibold leading-[1.12] text-white sm:text-[28px] md:text-[38px]">
          {withColon(bbiTitle)}
        </div>
        {bbiDetailed && bbiDetailed.length > 0 ? (
          renderDetailed(bbiDetailed)
        ) : (
          <ul className="mt-3.5 space-y-2 text-[14px] text-white/78 md:text-[15px]">
            {bbi.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-[rgba(255,43,68,0.95)]">»</span>
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        ref={rightRef}
        className={`bbi-resp-card bbi-resp-card--right ${rightVisible ? "bbi-resp-card--in" : ""} bbi-card rounded-[28px] border border-[#f2c137]/70 bg-transparent px-6 py-5 md:px-7 md:py-6`}
      >
        <div className="inline-flex max-w-full rounded-[12px] border border-[#f2c137]/85 bg-transparent px-3 py-1.5">
          <span className="break-words text-[24px] font-semibold leading-[1.12] text-[#f2c137] sm:text-[28px] md:text-[38px]">
            {withColon(clientTitle)}
          </span>
        </div>
        {clientDetailed && clientDetailed.length > 0 ? (
          renderDetailed(clientDetailed)
        ) : (
          <ul className="mt-3.5 space-y-2 text-[14px] text-white/80 md:text-[15px]">
            {client.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 text-[#f2c137]/90">»</span>
                <span className="break-words">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
