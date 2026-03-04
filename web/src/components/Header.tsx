import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import type { NavItem } from "@/content/dictionaries/types";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/paths";

type HeaderProps = {
  locale: Locale;
  navItems: NavItem[];
  ctaLabel: string;
};

export function Header({ locale, navItems, ctaLabel }: HeaderProps) {
  return (
    <header className="border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href={withLocale(locale, "/")} className="text-lg font-semibold">
          BBI
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
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <Button href={withLocale(locale, "/contacts")}>{ctaLabel}</Button>
        </div>
      </Container>
    </header>
  );
}
