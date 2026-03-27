"use client";

import type { ComponentType } from "react";
import { useCallback, useLayoutEffect, useMemo, useRef } from "react";
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
      className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-[rgba(255,43,68,0.24)] bg-[linear-gradient(165deg,rgba(255,43,68,0.16)_0%,rgba(35,20,26,0.76)_32%,rgba(9,11,16,0.96)_66%,rgba(7,8,11,0.98)_100%)] shadow-[0_16px_42px_rgba(0,0,0,0.48)] transition-all duration-300 hover:border-[rgba(255,43,68,0.38)]"
    >
      {post.image && (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-[22px] border border-white/18 bg-[var(--bbi-bg)] m-4 mb-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt="" className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-5 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,43,68,0.3)] bg-[rgba(255,43,68,0.08)]">
            <BlogIcon categoryKey={post.categoryKey} />
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--bbi-red)]">
            {post.category}
          </span>
        </div>
        <h3 className="text-[34px] font-semibold leading-[1.06] text-white line-clamp-2">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-[14px] leading-[1.5] text-white/76">
          {post.description}
        </p>
        <span className="mt-auto text-[14px] text-[var(--bbi-red)] transition group-hover:text-[var(--bbi-red-hover)]">
          {readMore} &gt;&gt;
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
  const isLoopAdjusting = useRef(false);

  /** Три копии: ручная прокрутка без конца, позиция «перекидывается» незаметно */
  const loopPosts = useMemo(
    () => [...blogPosts, ...blogPosts, ...blogPosts],
    [blogPosts],
  );

  useLayoutEffect(() => {
    const el = scrollRef.current;
    if (!el || blogPosts.length === 0) return;
    const apply = () => {
      const setW = el.scrollWidth / 3;
      if (setW > 0) el.scrollLeft = setW;
      else requestAnimationFrame(apply);
    };
    apply();
  }, [blogPosts.length, loopPosts.length]);

  const onScrollLoop = useCallback(() => {
    const el = scrollRef.current;
    if (!el || blogPosts.length === 0 || isLoopAdjusting.current) return;
    const setW = el.scrollWidth / 3;
    if (setW <= 0) return;
    const { scrollLeft } = el;
    const threshold = 12;
    if (scrollLeft >= 2 * setW - threshold) {
      isLoopAdjusting.current = true;
      el.scrollLeft = scrollLeft - setW;
      requestAnimationFrame(() => {
        isLoopAdjusting.current = false;
      });
    } else if (scrollLeft <= threshold) {
      isLoopAdjusting.current = true;
      el.scrollLeft = scrollLeft + setW;
      requestAnimationFrame(() => {
        isLoopAdjusting.current = false;
      });
    }
  }, [blogPosts.length]);

  const scroll = (dir: "prev" | "next") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth * (dir === "next" ? 1 : -1);
    /* instant: без smooth — иначе длинная анимация и конфликт с бесконечным циклом */
    el.scrollBy({ left: step, behavior: "auto" });
  };

  return (
    <section className="relative py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mb-8 flex items-center justify-between gap-4 md:mb-10">
          <h2 className="text-[44px] font-semibold uppercase text-white md:text-[50px]">
            {title}
          </h2>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/6 text-white/85 transition hover:border-white/30 hover:text-[var(--bbi-red)]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/6 text-white/85 transition hover:border-white/30 hover:text-[var(--bbi-red)]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={onScrollLoop}
          className="flex touch-pan-x gap-6 overflow-x-auto overscroll-x-contain pb-2 [scroll-behavior:auto] lg:gap-8 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {loopPosts.map((post, i) => (
            <div key={`${post.slug}-${i}`} className="w-[min(85vw,420px)] shrink-0 sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-32px)/2)]">
              <BlogCard post={post} locale={locale} readMore={readMore} />
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href={`/${locale}/blog`}
            className="group inline-flex items-center gap-1 rounded-full border border-white/28 bg-[linear-gradient(180deg,#f6f6f6_0%,#d8d8d8_100%)] px-5 py-2 text-[20px] font-medium text-[#1a1a1a] transition hover:brightness-105"
          >
            {blogLabel} &gt;&gt;
          </Link>
        </div>
      </Container>
    </section>
  );
}
