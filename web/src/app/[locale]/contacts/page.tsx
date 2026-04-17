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
    <div className="contacts-page-root box-border flex min-h-0 flex-1 flex-col pt-[80px] md:pt-[92px]">
      <div className="contacts-page-inner flex min-h-0 flex-1 flex-col">
        <Footer footer={dictionary.footer} locale={locale} variant="page" />
      </div>
    </div>
  );
}
