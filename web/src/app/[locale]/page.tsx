import { isLocale, type Locale } from "@/i18n/config";
import { notFound } from "next/navigation";
import { HeroSection } from "@/sections/HeroSection";
import { IcpIntroSection } from "@/sections/IcpIntroSection";
import { IcpSection } from "@/sections/IcpSection";
import { HelpAndProcessSection } from "@/sections/HelpAndProcessSection";
import { WhatWeChangeSection } from "@/sections/WhatWeChangeSection";
import { WhatYouGetSection } from "@/sections/WhatYouGetSection";
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
  const casesHref = withLocale(locale, "/cases");
  const { home } = dictionary;

  return (
    <>
      <HeroSection
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        ctaLabel={home.hero.cta}
        ctaHref={contactsHref}
        secondaryLabel={home.hero.secondaryCta}
        secondaryHref={home.hero.secondaryCtaHref ? withLocale(locale, home.hero.secondaryCtaHref) : undefined}
      />
      <div className="relative overflow-hidden">
        <IcpIntroSection
          eyebrow={home.icpIntro.eyebrow}
          title={home.icpIntro.title}
          segments={home.icpIntro.segments}
          exclude={home.icpIntro.exclude}
          excludeLabel={home.icpIntro.excludeLabel}
        />
        <IcpSection
          title={home.icp.title}
          subtitle={home.icp.subtitle}
          cards={home.icp.cards.map((card) => ({
            ...card,
            href: withLocale(locale, card.href),
          }))}
          ctaLabel={home.icp.ctaLabel}
          ctaHref={contactsHref}
        />
        {home.helpAndProcess && (
          <HelpAndProcessSection
            label={home.helpAndProcess.label}
            title={home.helpAndProcess.title}
            description={home.helpAndProcess.description}
            stages={home.helpAndProcess.stages}
            ctaLabel={home.helpAndProcess.ctaLabel}
            ctaHref={casesHref}
          />
        )}
        <CasesBlogSection
          title={home.casesBlog.title}
          casesLabel={home.casesBlog.casesLabel}
          blogLabel={home.casesBlog.blogLabel}
          readMore={home.casesBlog.readMore}
          cases={dictionary.cases.items}
          blogPosts={dictionary.blog.posts}
          locale={locale}
          ctaLabel={home.casesBlog.ctaLabel}
          ctaHref={contactsHref}
        />
        <WhyBBISection
          eyebrow={home.whyBbi.eyebrow}
          title={home.whyBbi.title}
          subtitle={home.whyBbi.subtitle}
          items={home.whyBbi.items}
          topCards={home.whyBbi.topCards}
          wideCard={home.whyBbi.wideCard}
        />
        <WhatWeChangeSection
          eyebrow={home.whatWeChange.eyebrow}
          title={home.whatWeChange.title}
          pillars={home.whatWeChange.pillars}
        />
        <WhatYouGetSection
          eyebrow={home.whatYouGet.eyebrow}
          title={home.whatYouGet.title}
          subheadline={home.whatYouGet.subheadline}
          items={home.whatYouGet.items}
          cards={home.whatYouGet.cards}
          finalAccent={home.whatYouGet.finalAccent}
          ctaHref={contactsHref}
        />
        <FAQSection
          title={home.faq.title}
          items={home.faq.items}
        />
        <FinalCtaSection
          title={home.finalCta.title}
          ctaLabel={home.finalCta.ctaLabel}
          subtitle={home.finalCta.subtitle}
          ctaHref={contactsHref}
        />
      </div>
    </>
  );
}
