import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { AppBar } from "@/components/AppBar";
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
    <div className="flex min-h-screen flex-col">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_85%_35%,rgba(255,43,68,0.28),rgba(14,14,14,0)_45%),radial-gradient(circle_at_70%_80%,rgba(255,43,68,0.16),rgba(14,14,14,0)_40%)]" />
      <AppBar locale={locale} ctaLabel={dictionary.nav.cta} />
      <main className="flex-1">{children}</main>
      <Footer text={dictionary.footer.copyright} />
    </div>
  );
}
