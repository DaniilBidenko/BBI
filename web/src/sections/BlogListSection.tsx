"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import type { BlogPage, BlogPost } from "@/content/dictionaries/types";

const CATEGORY_ICONS: Record<string, string> = {
  operations:
    "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4",
  diagnostics:
    "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
  marketing:
    "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
  sales:
    "M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z",
  finance:
    "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  hr: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
};

function getCategoryIcon(categoryKey: string): string {
  return (
    CATEGORY_ICONS[categoryKey] ??
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  );
}

type FilterId = "all" | "marketing" | "finance" | "operations";

const FILTER_IDS: FilterId[] = ["all", "marketing", "finance", "operations"];

function matchesFilter(post: BlogPost, filter: FilterId): boolean {
  if (filter === "all") return true;
  return post.categoryKey === filter;
}

type BlogListSectionProps = {
  posts: BlogPost[];
  locale: string;
  readMoreLabel: string;
  filters: BlogPage["filters"];
  noPosts: string;
};

export function BlogListSection({
  posts,
  locale,
  readMoreLabel,
  filters,
  noPosts,
}: BlogListSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filterLabels: Record<FilterId, string> = {
    all: filters.all,
    marketing: filters.marketing,
    finance: filters.finance,
    operations: filters.operations,
  };

  const filtered = useMemo(
    () => posts.filter((p) => matchesFilter(p, activeFilter)),
    [posts, activeFilter]
  );

  return (
    <section className="relative py-8 pb-16 md:pb-20">
      <Container className="relative mx-auto lg:w-[85%]">
        <nav
          className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-white/[0.08] sm:gap-x-10"
          aria-label="Blog categories"
        >
          {FILTER_IDS.map((id) => {
            const active = activeFilter === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                className={`pb-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                  active ? "text-white" : "text-white/45 hover:text-white/75"
                }`}
              >
                <span className="relative inline-block">
                  {filterLabels[id]}
                  {active ? (
                    <span
                      className="absolute left-0 right-0 top-full mt-1.5 h-0.5 rounded-full bg-[var(--bbi-red)]"
                      aria-hidden
                    />
                  ) : null}
                </span>
              </button>
            );
          })}
        </nav>

        {filtered.length === 0 ? (
          <div className="bbi-blog-card rounded-2xl px-6 py-16 text-center">
            <p className="text-white/65">{noPosts}</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="bbi-blog-card group relative flex flex-col overflow-hidden rounded-2xl"
              >
                {post.image && (
                  <div className="relative aspect-video w-full overflow-hidden bg-black/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                )}
                <div className="relative flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-start gap-3">
                    <div className="bbi-blog-card__icon">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d={getCategoryIcon(post.categoryKey)} />
                      </svg>
                    </div>
                    <span className="pt-2 text-xs font-medium uppercase tracking-widest text-[#ff2b44]">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold leading-snug text-white">
                    {post.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/75 line-clamp-3">
                    {post.description}
                  </p>
                  <span className="mt-auto text-sm font-medium text-[#ff2b44] transition group-hover:underline">
                    {readMoreLabel}
                    {" >>"}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
