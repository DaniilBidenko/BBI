import type { Locale } from "./config";

export function withLocale(locale: Locale, href: string): string {
  const normalized = href.startsWith("/") ? href : `/${href}`;
  if (normalized === "/") {
    return `/${locale}`;
  }
  return `/${locale}${normalized}`;
}
