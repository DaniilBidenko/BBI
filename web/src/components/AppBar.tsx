"use client";

import Link from "next/link";
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
  return (
    <div className="border-b border-white/10 bg-[#0e0e0e]/80 backdrop-blur">
      <Container className="flex items-center justify-between py-2">
        <Link href={withLocale(locale, "/")} className="flex items-center">
          <img
            src="/brand/logo-wordmark.png"
            alt="Bold Brands"
            className="h-5 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={withLocale(locale, item.href)}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <Button href={withLocale(locale, "/contacts")} variant="primary">
            {ctaLabel}
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:text-white lg:hidden"
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
        <div id="mobile-nav" className="border-t border-white/10 lg:hidden">
          <div className="flex flex-col gap-3 px-6 py-4 text-sm text-white/80">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={withLocale(locale, item.href)}
                className="transition hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
