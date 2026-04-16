import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { Footer } from "@/components/Footer";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactsPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div className="contacts-page-root h-[calc(100dvh-80px)] md:h-[calc(100dvh-92px)]">
      <Footer footer={dictionary.footer} locale={locale} variant="page" />
    </div>
  );
}
