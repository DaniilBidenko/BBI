import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { HeroSection } from "@/sections/HeroSection";
import { IcpSection } from "@/sections/IcpSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { PillarsSection } from "@/sections/PillarsSection";
import { getDictionary } from "@/content/dictionaries";
import { withLocale } from "@/i18n/paths";
import { ClockBackground } from "@/components/ClockBackground";

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
      <div className="relative">
        <IcpSection
          title={dictionary.home.icp.title}
          cards={dictionary.home.icp.cards.map((card) => ({
            ...card,
            href: withLocale(locale, card.href),
          }))}
        />
        <ProcessSection
          title={dictionary.home.process.title}
          stepLabel={dictionary.home.process.stepLabel}
          steps={dictionary.home.process.steps}
        />
      </div>
      <PillarsSection
        title={dictionary.home.pillars.title}
        items={dictionary.home.pillars.items.map((item) => ({
          ...item,
          href: withLocale(locale, item.href),
        }))}
      />
    </>
  );
}
