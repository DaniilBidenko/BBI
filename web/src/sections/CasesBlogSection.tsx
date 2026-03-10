import type { ComponentType } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import type { CaseStudy } from "@/content/dictionaries/types";
import type { BlogPost } from "@/content/dictionaries/types";

type CasesBlogSectionProps = {
  title: string;
  casesLabel: string;
  blogLabel: string;
  readMore: string;
  cases: CaseStudy[];
  blogPosts: BlogPost[];
  locale: string;
};

/* 3D isometric icons — hollow, thematic, each unique */

/** Case: network grid — кейс, сеть магазинов */
function CaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-[var(--bbi-red)]">
      <circle cx="6" cy="7" r="2" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="18" cy="7" r="2" />
      <circle cx="6" cy="17" r="2" />
      <circle cx="12" cy="17" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M6 7v10M12 7v10M18 7v10M6 7h6M12 7h6M6 17h6M12 17h6" strokeWidth="0.8" />
    </svg>
  );
}

/** Operations: stacked documents — SOP, регламенты */
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

/** Diagnostics: magnifying glass — поиск, вскрытие */
function IconDiagnostics() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <circle cx="10" cy="10" r="5.5" />
      <path d="M14.5 14.5l5 5" strokeWidth="1.3" />
      <ellipse cx="10" cy="10" rx="2" ry="2" strokeWidth="0.6" />
    </svg>
  );
}

/** Marketing: 3D funnel — воронка каналов */
function IconMarketing() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <path d="M4 3h16l-4 8-2 6-4 5H14l-2-5-2-6-4-8z" />
      <path d="M8 11l4 9 4-9M4 3l4 8 4 4" strokeWidth="0.85" />
    </svg>
  );
}

/** Sales: 3D ascending bars — рост продаж */
function IconSales() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <path d="M5 17V11l2.5 2v4H5zM11 17V7l2.5 2v8H11zM17 17V4l2.5 1.5v11.5H17z" />
      <path d="M4 18h16M5 11h1.5M11 7h1.5M17 4h1.5" strokeWidth="0.75" />
    </svg>
  );
}

/** Finance: 3D cylinder/coin — финансы */
function IconFinance() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7 text-[var(--bbi-red)]">
      <ellipse cx="12" cy="8" rx="5" ry="2.2" />
      <path d="M7 8v5c0 1.2 2.2 2.2 5 2.2s5-1 5-2.2V8" />
      <path d="M7 13c0 1.2 2.2 2.2 5 2.2" strokeWidth="0.8" />
    </svg>
  );
}

/** HR: 3D org structure — люди, команда */
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

const BLOG_ICONS: Record<string, ComponentType> = {
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

export function CasesBlogSection({
  title,
  casesLabel,
  blogLabel,
  readMore,
  cases,
  blogPosts,
  locale,
}: CasesBlogSectionProps) {
  const featuredCase = cases[0];
  const posts = blogPosts.slice(0, 2);

  return (
    <section className="relative py-20 md:py-24">
      <Container className="relative mx-auto lg:w-[90%]">
        <h2 className="mb-12 text-2xl font-semibold text-[var(--bbi-text)] md:text-3xl">
          {title}
        </h2>

        <div className="grid gap-6 lg:grid-cols-4 lg:gap-8">
          {/* Featured case - large card */}
          {featuredCase && (
            <Link
              href={`/${locale}/cases/${featuredCase.slug}`}
              className="bbi-card group relative col-span-1 flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)] lg:col-span-2"
            >
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--bbi-red)] bg-[var(--bbi-red)]/5">
                    <CaseIcon />
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--bbi-red)]">
                    {featuredCase.industry}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--bbi-text)] md:text-xl">
                  {featuredCase.company}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--bbi-muted)] line-clamp-2">
                  {featuredCase.excerpt}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {featuredCase.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-black/10 px-2 py-0.5 text-xs text-[var(--bbi-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-medium text-[var(--bbi-red)] transition group-hover:text-[var(--bbi-red-hover)]">
                  {readMore} →
                </span>
              </div>
            </Link>
          )}

          {/* Blog cards */}
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/${locale}/blog/${post.slug}`}
              className="bbi-card group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition hover:border-[var(--bbi-red)]"
            >
              {post.image && (
                <div className="relative aspect-video w-full shrink-0 overflow-hidden border-b border-black/[0.06] bg-[var(--bbi-bg)]">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
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
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 border-t border-black/10 pt-10">
          <Link
            href={`/${locale}/cases`}
            className="text-sm font-medium text-[var(--bbi-muted)] transition hover:text-[var(--bbi-red)]"
          >
            {casesLabel}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium text-[var(--bbi-muted)] transition hover:text-[var(--bbi-red)]"
          >
            {blogLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
