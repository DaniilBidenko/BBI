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

  /** Список кейсов: фото героя под шапкой — без плотного фона app bar */
  const isCasesListPage =
    /^\/(ru|en|uz)\/cases\/?$/.test(pathname) ||
    pathname === "/cases" ||
    /^\/cases\/?$/.test(pathname);

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

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
      setIsLocaleOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bbi-appbar-cateye fixed inset-x-0 top-0 z-30 ${isCasesListPage ? "bbi-appbar-cateye--over-photo" : "backdrop-blur-[10px]"}`}
    >
      <Container className="flex items-center justify-between py-2.5">
        <Link href={withLocale(locale, "/")} className="flex items-center" aria-label="Bold Brands">
          <span className="logo-wordmark !h-[30px] !w-[172px]" role="img" aria-hidden />
        </Link>
        <nav className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium leading-[1.1] transition hover:text-white xl:text-[12px] ${active ? "text-white" : "text-white/78"}`}
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
              className="inline-flex h-8 items-center gap-1 rounded-full px-2 text-[13px] uppercase tracking-[0.08em] text-white/90 transition hover:text-white"
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
                className="absolute right-0 top-[calc(100%+6px)] z-40 min-w-[88px] rounded-xl border border-white/20 bg-[#0a0d14]/95 p-1.5 shadow-[0_14px_30px_rgba(0,0,0,0.4)] backdrop-blur"
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
                          ? "bg-white/10 text-white"
                          : "text-white/78 hover:bg-white/8 hover:text-white"
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
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/85 transition hover:text-white"
            aria-label="Search"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden
            >
              <circle cx="11" cy="11" r="6.2" />
              <path d="M20 20l-4.1-4.1" />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:text-white lg:hidden"
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
            className="hidden h-8 w-8 items-center justify-center rounded-full text-white/80 transition hover:text-white lg:flex"
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
        <div id="mobile-nav" className="border-t border-white/15 bg-[#080a10]/95">
          <div className="flex flex-col gap-4 px-6 py-5 text-sm">
            <div className="flex items-center gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") runSearch();
                }}
                placeholder="Поиск"
                className="h-10 flex-1 rounded-lg border border-white/20 bg-black/30 px-3 text-sm text-white outline-none transition placeholder:text-white/45 focus:border-white/35"
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
                  className={`transition hover:text-white ${active ? "font-medium text-white" : "text-white/78"}`}
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
