import { HeroSection } from "@/sections/HeroSection";
import { IcpSection } from "@/sections/IcpSection";
import { PillarsSection } from "@/sections/PillarsSection";
import { PositionSection } from "@/sections/PositionSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { getDictionary } from "@/content/dictionaries";
import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { withLocale } from "@/i18n/paths";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);

  const icpCards = dictionary.home.icp.cards.map((card) => ({
    ...card,
    href: withLocale(locale, card.href),
  }));

  const pillarItems = dictionary.home.pillars.items.map((item) => ({
    ...item,
    href: withLocale(locale, item.href),
  }));

  return (
    <>
      <HeroSection
        eyebrow={dictionary.home.hero.eyebrow}
        title={dictionary.home.hero.title}
        subtitle={dictionary.home.hero.subtitle}
        ctaLabel={dictionary.home.hero.cta}
        ctaHref={withLocale(locale, "/contacts")}
        secondaryLabel={dictionary.home.hero.secondaryCta}
      />
      <IcpSection title={dictionary.home.icp.title} cards={icpCards} />
      <ProcessSection
        title={dictionary.home.process.title}
        stepLabel={dictionary.home.process.stepLabel}
        steps={dictionary.home.process.steps}
      />
      <PillarsSection title={dictionary.home.pillars.title} items={pillarItems} />
      <PositionSection
        title={dictionary.home.position.title}
        description={dictionary.home.position.description}
      />
    </>
  );
}
