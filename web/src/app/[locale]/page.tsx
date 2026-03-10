import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { HeroSection } from "@/sections/HeroSection";
import { IcpSection } from "@/sections/IcpSection";
import { IcpBridgeSection } from "@/sections/IcpBridgeSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { PillarsSection } from "@/sections/PillarsSection";
import { CasesBlogSection } from "@/sections/CasesBlogSection";
import { getDictionary } from "@/content/dictionaries";
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
      <div className="relative overflow-hidden">
        <IcpSection
          eyebrow={dictionary.home.icp.eyebrow}
          title={dictionary.home.icp.title}
          cards={dictionary.home.icp.cards.map((card) => ({
            ...card,
            href: withLocale(locale, card.href),
          }))}
        />
        <IcpBridgeSection
          label={dictionary.home.icpBridge.label}
          title={dictionary.home.icpBridge.title}
          description={dictionary.home.icpBridge.description}
        />
        <ProcessSection
          eyebrow={dictionary.home.process.eyebrow}
          title={dictionary.home.process.title}
          approaches={dictionary.home.process.approaches}
        />
      </div>
      <PillarsSection
        title={dictionary.home.pillars.title}
        items={dictionary.home.pillars.items.map((item) => ({
          ...item,
          href: withLocale(locale, item.href),
        }))}
      />
      <CasesBlogSection
        title={dictionary.home.casesBlog.title}
        casesLabel={dictionary.home.casesBlog.casesLabel}
        blogLabel={dictionary.home.casesBlog.blogLabel}
        readMore={dictionary.home.casesBlog.readMore}
        cases={dictionary.cases.items}
        blogPosts={dictionary.blog.posts}
        locale={locale}
      />
    </>
  );
}
