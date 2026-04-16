import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { LocaleFooter } from "@/components/LocaleFooter";
import { AppBar } from "@/components/AppBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, locales, type Locale } from "@/i18n/config";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <div className="layout-bg pointer-events-none fixed inset-0 -z-10" />
      <AppBar
        locale={locale}
        navItems={dictionary.nav.items}
        ctaLabel={dictionary.nav.cta}
      />
      <main className="flex-1">{children}</main>
        <LocaleFooter footer={dictionary.footer} locale={locale} />
      </div>
    </ThemeProvider>
  );
}
