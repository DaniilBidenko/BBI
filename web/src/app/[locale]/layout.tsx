import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
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
      <Header
        locale={locale}
        navItems={dictionary.nav.items}
        ctaLabel={dictionary.nav.cta}
      />
      <main className="flex-1">{children}</main>
      <Footer text={dictionary.footer.copyright} />
    </div>
  );
}
