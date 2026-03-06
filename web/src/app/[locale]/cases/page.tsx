import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { CasesHeroSection } from "@/sections/CasesHeroSection";
import { CasesListSection } from "@/sections/CasesListSection";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CasesPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { cases } = dictionary;

  return (
    <div className="relative">
      <CasesHeroSection
        eyebrow={cases.hero.eyebrow}
        title={cases.hero.title}
        description={cases.hero.description}
      />
      <CasesListSection cases={cases} locale={locale} />
    </div>
  );
}
