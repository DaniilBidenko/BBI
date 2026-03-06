"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import type { CaseStudy, Dictionary } from "@/content/dictionaries/types";

type CasesListSectionProps = {
  cases: Dictionary["cases"];
  locale: string;
};

const INDUSTRY_OPTIONS = ["retail", "fAndB", "services", "ecom", "other"] as const;
const DIRECTION_OPTIONS = ["operations", "marketing", "sales", "finance", "hr", "legal"] as const;
const SCALE_OPTIONS = ["smb", "mid", "enterprise"] as const;

const INDUSTRY_ICONS: Record<string, string> = {
  retail: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z",
  fAndB: "M12 2L2 7l10 5 10-5-10-5z",
  ecom: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  services: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  other: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z",
};

export function CasesListSection({ cases, locale }: CasesListSectionProps) {
  const [industry, setIndustry] = useState<string | null>(null);
  const [direction, setDirection] = useState<string | null>(null);
  const [scale, setScale] = useState<string | null>(null);

  const { items, filters, filterLabels, card, noResults } = cases;

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (industry && item.industryFilter !== industry) return false;
      if (direction && item.directionFilter !== direction) return false;
      if (scale && item.scaleFilter !== scale) return false;
      return true;
    });
  }, [items, industry, direction, scale]);

  const toggleFilter = (
    type: "industry" | "direction" | "scale",
    value: string | null
  ) => {
    if (type === "industry") setIndustry(value === industry ? null : value);
    if (type === "direction") setDirection(value === direction ? null : value);
    if (type === "scale") setScale(value === scale ? null : value);
  };

  const chipClass = (active: boolean) =>
    `rounded-lg border px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
      active
        ? "border-[#ff2b44]/50 bg-[#ff2b44]/10 text-[#ff2b44]"
        : "border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white/80"
    }`;

  const FilterRow = ({
    label,
    type,
    options,
    selected,
  }: {
    label: string;
    type: "industry" | "direction" | "scale";
    options: readonly string[];
    selected: string | null;
  }) => (
    <div className="grid grid-cols-1 items-start gap-4 py-4 first:pt-0 sm:grid-cols-[minmax(0,7rem)_1fr] sm:gap-6 sm:py-5 sm:first:pt-0">
      <span className="text-xs font-medium uppercase tracking-widest text-white/50 sm:pt-1.5">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => toggleFilter(type, null)}
          className={chipClass(!selected)}
        >
          {filters.all}
        </button>
        {options.map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => toggleFilter(type, selected === key ? null : key)}
            className={chipClass(selected === key)}
          >
            {filterLabels[key as keyof typeof filterLabels]}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-6">
      <Container className="relative mx-auto space-y-10 lg:w-[85%]">
        <div className="rounded-2xl border border-white/[0.08] bg-[#14151a]/60 px-6 py-6">
          <div className="flex flex-col divide-y divide-white/[0.06]">
            <FilterRow
              label={filters.industry}
              type="industry"
              options={INDUSTRY_OPTIONS}
              selected={industry}
            />
            <FilterRow
              label={filters.direction}
              type="direction"
              options={DIRECTION_OPTIONS}
              selected={direction}
            />
            <FilterRow
              label={filters.scale}
              type="scale"
              options={SCALE_OPTIONS}
              selected={scale}
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#14151a]/50 py-20 text-center">
            <p className="text-white/60">{noResults}</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <CaseCard
                key={item.slug}
                item={item}
                locale={locale}
                readMoreLabel={card.readMore}
              />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

function CaseCard({
  item,
  locale,
  readMoreLabel,
}: {
  item: CaseStudy;
  locale: string;
  readMoreLabel: string;
}) {
  const iconPath =
    INDUSTRY_ICONS[item.industryFilter] ?? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2V5a2 2 0 00-2-2z";
  const excerpt = item.excerpt;

  return (
    <Link
      href={`/${locale}/cases/${item.slug}`}
      className="bbi-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#1b1c21] p-6 transition-all duration-200 hover:border-[#ff2b44]/20"
    >
      <div className="absolute right-0 top-0 h-40 w-40 opacity-[0.06]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,43,68,0.5)_0%,transparent_70%)]" />
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-widest text-[#ff2b44]">
            {item.industry}
          </span>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2a2b30] text-white">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d={iconPath} />
            </svg>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-white">{item.company}</h3>
        <p className="text-base font-semibold text-[#ff2b44]">{item.keyResult}</p>
        {excerpt && (
          <p className="text-sm leading-relaxed text-white/80">{excerpt}</p>
        )}
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#ff2b44]/35 bg-[#25262b] px-3 py-1 text-xs text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-1 text-sm text-[#ff2b44] transition group-hover:underline">
          {readMoreLabel} →
        </span>
      </div>
    </Link>
  );
}
