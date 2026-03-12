import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { HeroSection } from "@/sections/HeroSection";
import { IcpIntroSection } from "@/sections/IcpIntroSection";
import { IcpSection } from "@/sections/IcpSection";
import { IcpBridgeSection } from "@/sections/IcpBridgeSection";
import { WhatWeChangeSection } from "@/sections/WhatWeChangeSection";
import { WhatYouGetSection } from "@/sections/WhatYouGetSection";
import { ProcessSection } from "@/sections/ProcessSection";
import { WhyBBISection } from "@/sections/WhyBBISection";
import { CasesBlogSection } from "@/sections/CasesBlogSection";
import { FAQSection } from "@/sections/FAQSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
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
  const contactsHref = withLocale(locale, "/contacts");

  return (
    <>
      <HeroSection
        eyebrow={dictionary.home.hero.eyebrow}
        title={dictionary.home.hero.title}
        subtitle={dictionary.home.hero.subtitle}
        ctaLabel={dictionary.home.hero.cta}
        ctaHref={contactsHref}
        secondaryLabel={dictionary.home.hero.secondaryCta}
        secondaryHref={dictionary.home.hero.secondaryCtaHref ? withLocale(locale, dictionary.home.hero.secondaryCtaHref) : undefined}
      />
      <div className="relative overflow-hidden">
        <IcpIntroSection
          eyebrow={dictionary.home.icpIntro.eyebrow}
          title={dictionary.home.icpIntro.title}
          segments={dictionary.home.icpIntro.segments}
          exclude={dictionary.home.icpIntro.exclude}
          excludeLabel={dictionary.home.icpIntro.excludeLabel}
        />
        <IcpSection
          title={dictionary.home.icp.title}
          subtitle={dictionary.home.icp.subtitle}
          cards={dictionary.home.icp.cards.map((card) => ({
            ...card,
            href: withLocale(locale, card.href),
          }))}
          ctaLabel={dictionary.home.icp.ctaLabel}
          ctaHref={contactsHref}
        />
        <IcpBridgeSection
          label={dictionary.home.icpBridge.label}
          title={dictionary.home.icpBridge.title}
          description={dictionary.home.icpBridge.description}
          highlightPhrase={dictionary.home.icpBridge.highlightPhrase}
          items={dictionary.home.icpBridge.items}
          ctaLabel={dictionary.home.icpBridge.ctaLabel}
          ctaHref={contactsHref}
        />
        <WhatWeChangeSection
          eyebrow={dictionary.home.whatWeChange.eyebrow}
          title={dictionary.home.whatWeChange.title}
          pillars={dictionary.home.whatWeChange.pillars}
        />
        <WhatYouGetSection
          eyebrow={dictionary.home.whatYouGet.eyebrow}
          title={dictionary.home.whatYouGet.title}
          items={dictionary.home.whatYouGet.items}
        />
        <ProcessSection
          eyebrow={dictionary.home.process.eyebrow}
          title={dictionary.home.process.title}
          approaches={dictionary.home.process.approaches}
          ctaLabel={dictionary.home.process.ctaLabel}
          ctaHref={contactsHref}
        />
        <WhyBBISection
          eyebrow={dictionary.home.whyBbi.eyebrow}
          title={dictionary.home.whyBbi.title}
          items={dictionary.home.whyBbi.items}
        />
        <CasesBlogSection
          title={dictionary.home.casesBlog.title}
          casesLabel={dictionary.home.casesBlog.casesLabel}
          blogLabel={dictionary.home.casesBlog.blogLabel}
          readMore={dictionary.home.casesBlog.readMore}
          cases={dictionary.cases.items}
          blogPosts={dictionary.blog.posts}
          locale={locale}
          ctaLabel={dictionary.home.casesBlog.ctaLabel}
          ctaHref={contactsHref}
        />
        <FAQSection
          title={dictionary.home.faq.title}
          items={dictionary.home.faq.items}
        />
        <FinalCtaSection
          title={dictionary.home.finalCta.title}
          ctaLabel={dictionary.home.finalCta.ctaLabel}
          subtitle={dictionary.home.finalCta.subtitle}
          ctaHref={contactsHref}
        />
      </div>
    </>
  );
}
