"use client";

import type { ComponentType } from "react";
import { useRef } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import type { BlogPost } from "@/content/dictionaries/types";

function IconOperations() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <rect x="4" y="6" width="16" height="10" rx="0.5" />
      <path d="M7 10h10M7 12h6" strokeWidth="0.7" />
      <rect x="6" y="12" width="14" height="8" rx="0.5" />
      <path d="M9 15h8M9 17h4" strokeWidth="0.6" />
      <rect x="8" y="17" width="12" height="5" rx="0.5" />
      <path d="M11 19h6" strokeWidth="0.5" />
    </svg>
  );
}

function IconDiagnostics() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <circle cx="10" cy="10" r="5.5" />
      <path d="M14.5 14.5l5 5" strokeWidth="1.3" />
      <ellipse cx="10" cy="10" rx="2" ry="2" strokeWidth="0.6" />
    </svg>
  );
}

function IconMarketing() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <path d="M4 3h16l-4 8-2 6-4 5H14l-2-5-2-6-4-8z" />
      <path d="M8 11l4 9 4-9M4 3l4 8 4 4" strokeWidth="0.85" />
    </svg>
  );
}

function IconSales() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <path d="M5 17V11l2.5 2v4H5zM11 17V7l2.5 2v8H11zM17 17V4l2.5 1.5v11.5H17z" />
      <path d="M4 18h16M5 11h1.5M11 7h1.5M17 4h1.5" strokeWidth="0.75" />
    </svg>
  );
}

function IconFinance() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <ellipse cx="12" cy="8" rx="5" ry="2.2" />
      <path d="M7 8v5c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2V8" />
      <path d="M7 13c0 1.2 2.2 2.2 5 2.2" strokeWidth="0.8" />
    </svg>
  );
}

function IconHr() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="6" cy="16" r="2" />
      <circle cx="18" cy="16" r="2" />
      <path d="M12 7.2v3M9.5 12l-2 2.5M14.5 12l2 2.5" strokeWidth="0.9" />
    </svg>
  );
}

const BLOG_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  operations: IconOperations,
  diagnostics: IconDiagnostics,
  marketing: IconMarketing,
  sales: IconSales,
  finance: IconFinance,
  hr: IconHr,
};

function BlogIcon({ categoryKey }: { categoryKey: string }) {
  const Icon = BLOG_ICONS[categoryKey] ?? IconOperations;
  return <Icon />;
}

type BlogSectionProps = {
  title: string;
  blogLabel: string;
  readMore: string;
  blogPosts: BlogPost[];
  locale: string;
};

function BlogCard({
  post,
  locale,
  readMore,
}: {
  post: BlogPost;
  locale: string;
  readMore: string;
}) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="bbi-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)]"
    >
      {post.image && (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden border-b border-black/[0.06] bg-[var(--bbi-bg)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--bbi-red)] bg-[var(--bbi-red)]/5">
            <BlogIcon categoryKey={post.categoryKey} />
          </div>
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--bbi-red)]">
            {post.category}
          </span>
        </div>
        <h3 className="text-base font-semibold text-[var(--bbi-text)] line-clamp-2">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm text-[var(--bbi-muted)]">
          {post.description}
        </p>
        <span className="mt-auto text-sm text-[var(--bbi-red)] transition group-hover:text-[var(--bbi-red-hover)]">
          {readMore} →
        </span>
      </div>
    </Link>
  );
}

export function BlogSection({
  title,
  blogLabel,
  readMore,
  blogPosts,
  locale,
}: BlogSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth * (dir === "next" ? 1 : -1);
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section className="relative py-20 md:py-24">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-12 flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
            {title}
          </h2>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--bbi-border)] text-[var(--bbi-text)] transition hover:border-[var(--bbi-red)]/30 hover:text-[var(--bbi-red)]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--bbi-border)] text-[var(--bbi-text)] transition hover:border-[var(--bbi-red)]/30 hover:text-[var(--bbi-red)]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scroll-smooth lg:gap-8 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="w-[min(85vw,320px)] shrink-0 snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-64px)/3)]"
            >
              <BlogCard post={post} locale={locale} readMore={readMore} />
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-black/[0.06] pt-8">
          <Link
            href={`/${locale}/blog`}
            className="group inline-flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white/80 px-5 py-2.5 text-sm font-medium text-[var(--bbi-text)] transition-all hover:border-[var(--bbi-red)]/25 hover:bg-white hover:text-[var(--bbi-red)] hover:shadow-[0_2px_12px_rgba(185,28,28,0.06)]"
          >
            {blogLabel}
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
