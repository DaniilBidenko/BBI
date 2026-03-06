import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { withLocale } from "@/i18n/paths";
import { PillarsPageSection } from "@/sections/PillarsPageSection";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PillarsPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  return (
    <PillarsPageSection
      title={dictionary.pillarsPage.title}
      description={dictionary.pillarsPage.description}
      ctaLabel={dictionary.pillarsPage.ctaLabel}
      ctaDescription={dictionary.pillarsPage.ctaDescription}
      detailsLabel={dictionary.work.pillarsIntro.detailsLabel}
      pillars={dictionary.work.pillars}
      ctaHref={withLocale(locale, "/contacts")}
    />
  );
}
