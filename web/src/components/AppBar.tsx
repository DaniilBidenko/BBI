"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavItem } from "@/content/dictionaries/types";
import { locales, type Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/paths";

type AppBarProps = {
  locale: Locale;
  navItems: NavItem[];
  ctaLabel: string;
};

export function AppBar({ locale, navItems, ctaLabel }: AppBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocaleOpen, setIsLocaleOpen] = useState(false);
  const [query, setQuery] = useState("");
  const localeMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === withLocale(locale, "/") || pathname === "/";
  const isWork = pathname === withLocale(locale, "/work");

  const isActive = (href: string) => pathname === withLocale(locale, href);
  const localePath = pathname.replace(/^\/(ru|en|uz)(?=\/|$)/, "") || "/";
  const localeHref = (nextLocale: Locale) => withLocale(nextLocale, localePath);
  const runSearch = () => {
    const term = query.trim();
    const target = withLocale(locale, "/blog");
    if (!term) {
      window.location.href = target;
      return;
    }
    window.location.href = `${target}?q=${encodeURIComponent(term)}`;
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!localeMenuRef.current) return;
      if (localeMenuRef.current.contains(event.target as Node)) return;
      setIsLocaleOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div
      className={
        isHome || isWork
          ? "relative z-30 border-b border-white/18 bg-black/30 backdrop-blur-[1.5px]"
          : "border-b border-[color:var(--bbi-border)] bg-[var(--bbi-bg)]/95 backdrop-blur"
      }
      style={undefined}
    >
      <Container className="flex items-center justify-between py-2.5">
        <Link href={withLocale(locale, "/")} className="flex items-center" aria-label="Bold Brands">
          <span className="logo-wordmark !h-[15px] !w-[86px]" role="img" aria-hidden />
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium leading-[1.1] transition xl:text-[12px] ${isHome ? "hover:text-white" : "hover:text-[var(--bbi-black)]"} ${active ? (isHome ? "bg-white/10 text-white" : "bg-black/10 text-[var(--bbi-black)]") : (isHome ? "text-white/80" : "text-[var(--bbi-muted)]")}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1.5 md:gap-2">
          <Link
            href={withLocale(locale, "/contacts")}
            className="hidden h-8 whitespace-nowrap items-center justify-center rounded-full bg-[var(--bbi-red)] px-4 text-[11px] font-medium text-white transition hover:opacity-90 lg:inline-flex"
          >
            {ctaLabel}
          </Link>
          <div ref={localeMenuRef} className="relative hidden lg:block">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isLocaleOpen}
              onClick={() => setIsLocaleOpen((prev) => !prev)}
              className={`inline-flex h-8 items-center gap-1 rounded-full px-2 text-[13px] uppercase tracking-[0.08em] transition ${
                isHome
                  ? "text-white/90 hover:text-white"
                  : "text-[var(--bbi-muted)] hover:text-[var(--bbi-black)]"
              }`}
            >
              {locale}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                className={`h-3.5 w-3.5 transition ${isLocaleOpen ? "rotate-180" : ""}`}
                aria-hidden
              >
                <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {isLocaleOpen ? (
              <div
                role="menu"
                className={`absolute right-0 top-[calc(100%+6px)] z-40 min-w-[88px] rounded-xl border p-1.5 shadow-[0_14px_30px_rgba(0,0,0,0.4)] ${
                  isHome
                    ? "border-white/20 bg-[#0a0d14]/95 backdrop-blur"
                    : "border-[color:var(--bbi-border)] bg-[var(--bbi-bg)]/95 backdrop-blur"
                }`}
              >
                {locales.map((item) => {
                  const active = item === locale;
                  return (
                    <Link
                      key={item}
                      href={localeHref(item)}
                      role="menuitem"
                      onClick={() => setIsLocaleOpen(false)}
                      className={`block rounded-lg px-2.5 py-1.5 text-[12px] uppercase tracking-[0.08em] transition ${
                        active
                          ? isHome
                            ? "bg-white/10 text-white"
                            : "bg-black/10 text-[var(--bbi-black)]"
                          : isHome
                            ? "text-white/78 hover:bg-white/8 hover:text-white"
                            : "text-[var(--bbi-muted)] hover:bg-black/5 hover:text-[var(--bbi-black)]"
                      }`}
                    >
                      {item}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>
          <button
            type="button"
            className={`flex h-8 w-8 items-center justify-center rounded-full transition ${isHome ? "text-white/85 hover:text-white" : "text-[var(--bbi-muted)] hover:text-[var(--bbi-black)]"}`}
            aria-label="Search"
            onClick={() => setIsOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden>
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l5 5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className={`flex h-8 w-8 items-center justify-center rounded-full transition lg:hidden ${isHome ? "text-white/80 hover:text-white" : "text-[var(--bbi-muted)] hover:text-[var(--bbi-black)]"}`}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="flex flex-col gap-1">
              <span className="h-[1.5px] w-4 rounded bg-current" />
              <span className="h-[1.5px] w-4 rounded bg-current" />
              <span className="h-[1.5px] w-4 rounded bg-current" />
            </span>
          </button>
          <button
            type="button"
            className={`hidden h-8 w-8 items-center justify-center rounded-full transition lg:flex ${isHome ? "text-white/80 hover:text-white" : "text-[var(--bbi-muted)] hover:text-[var(--bbi-black)]"}`}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="flex flex-col gap-1">
              <span className="h-[1.5px] w-4 rounded bg-current" />
              <span className="h-[1.5px] w-4 rounded bg-current" />
              <span className="h-[1.5px] w-4 rounded bg-current" />
            </span>
          </button>
        </div>
      </Container>
      {isOpen ? (
        <div
          id="mobile-nav"
          className={`border-t ${isHome ? "border-white/15 bg-[#080a10]/95" : "border-[color:var(--bbi-border)] bg-[var(--bbi-bg)]/98"} `}
        >
          <div className="flex flex-col gap-4 px-6 py-5 text-sm">
            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") runSearch();
                }}
                placeholder="Поиск"
                className={`h-10 flex-1 rounded-lg border px-3 text-sm outline-none transition ${
                  isHome
                    ? "border-white/20 bg-black/30 text-white placeholder:text-white/45 focus:border-white/35"
                    : "border-[color:var(--bbi-border)] bg-black/15 text-[var(--bbi-text)] placeholder:text-[var(--bbi-muted)] focus:border-[var(--bbi-red)]/40"
                }`}
              />
              <button
                type="button"
                onClick={runSearch}
                className="h-10 rounded-lg border border-[rgba(255,43,68,0.98)] px-3 text-[rgba(255,43,68,0.98)] transition hover:bg-[rgba(255,43,68,0.08)]"
              >
                Найти
              </button>
            </div>

            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  className={`transition ${isHome ? "hover:text-white" : "hover:text-[var(--bbi-black)]"} ${active ? (isHome ? "font-medium text-white" : "font-medium text-[var(--bbi-black)]") : (isHome ? "text-white/78" : "text-[var(--bbi-muted)]")}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-1">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
