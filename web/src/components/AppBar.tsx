"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./Button";
import type { NavItem } from "@/content/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/paths";

type AppBarProps = {
  locale: Locale;
  navItems: NavItem[];
  ctaLabel: string;
};

export function AppBar({ locale, navItems, ctaLabel }: AppBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === withLocale(locale, href);

  return (
    <div className="border-b border-[color:var(--bbi-border)] bg-[var(--bbi-bg)]/95 backdrop-blur">
      <Container className="flex items-center justify-between py-2">
        <Link href={withLocale(locale, "/")} className="flex items-center" aria-label="Bold Brands">
          <span className="logo-wordmark" role="img" aria-hidden />
        </Link>
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className={`transition hover:text-[var(--bbi-black)] ${active ? "font-medium text-[var(--bbi-black)]" : "text-[var(--bbi-muted)]"}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Button href={withLocale(locale, "/contacts")} variant="primary">
            {ctaLabel}
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--bbi-border)] text-[var(--bbi-muted)] transition hover:text-[var(--bbi-black)] lg:hidden"
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="flex flex-col gap-1">
              <span className="h-[2px] w-4 rounded bg-current" />
              <span className="h-[2px] w-4 rounded bg-current" />
              <span className="h-[2px] w-4 rounded bg-current" />
            </span>
          </button>
        </div>
      </Container>
      {isOpen ? (
        <div id="mobile-nav" className="border-t border-[color:var(--bbi-border)] lg:hidden">
          <div className="flex flex-col gap-3 px-6 py-4 text-sm">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={withLocale(locale, item.href)}
                  className={`transition hover:text-[var(--bbi-black)] ${active ? "font-medium text-[var(--bbi-black)]" : "text-[var(--bbi-muted)]"}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
