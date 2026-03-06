import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { withLocale } from "@/i18n/paths";
import { WorkHeroSection } from "@/sections/WorkHeroSection";
import { WorkInfographicSection } from "@/sections/WorkInfographicSection";
import { WorkPillarsSection } from "@/sections/WorkPillarsSection";
import { WorkPillarGridSection } from "@/sections/WorkPillarGridSection";
import { WorkFormatSection } from "@/sections/WorkFormatSection";
import { WorkStagesSection } from "@/sections/WorkStagesSection";
import { WorkResponsibilitySection } from "@/sections/WorkResponsibilitySection";
import { WorkTargetStateSection } from "@/sections/WorkTargetStateSection";
import { WorkCtaSection } from "@/sections/WorkCtaSection";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function WorkPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { work } = dictionary;

  return (
    <div className="relative">
      <WorkHeroSection
        eyebrow={work.hero.eyebrow}
        title={work.hero.title}
        description={work.hero.description}
        ctaLabel={work.hero.ctaLabel}
        ctaHint={work.hero.ctaHint}
        ctaHref={withLocale(locale, "/pillars")}
      />
      <WorkInfographicSection
        title={work.pillarsIntro.title}
        description={work.pillarsIntro.description}
      />
      <WorkPillarsSection
        title={work.pillarsIntro.title}
        description={work.pillarsIntro.description}
        detailsLabel={work.pillarsIntro.detailsLabel}
        pillars={work.pillars}
      />
      <WorkPillarGridSection
        title={work.results.title}
        description={work.results.description}
        pillars={work.pillars}
        field="result"
        badge={work.results.badge}
      />
      <WorkPillarGridSection
        title={work.problems.title}
        description={work.problems.description}
        pillars={work.pillars}
        field="broken"
        badge={work.problems.badge}
      />
      <WorkPillarGridSection
        title={work.actions.title}
        description={work.actions.description}
        pillars={work.pillars}
        field="actions"
        badge={work.actions.badge}
      />
      <WorkFormatSection
        title={work.format.title}
        description={work.format.description}
        zones={work.format.zones}
      />
      <WorkStagesSection
        title={work.stages.title}
        description={work.stages.description}
        steps={work.stages.steps}
      />
      <WorkResponsibilitySection
        title={work.responsibility.title}
        bbiTitle={work.responsibility.bbiTitle}
        clientTitle={work.responsibility.clientTitle}
        bbi={work.responsibility.bbi}
        client={work.responsibility.client}
      />
      <WorkTargetStateSection
        title={work.targetState.title}
        minimumTitle={work.targetState.minimumTitle}
        minimumDescription={work.targetState.minimumDescription}
        idealTitle={work.targetState.idealTitle}
        idealDescription={work.targetState.idealDescription}
      />
      <WorkCtaSection
        title={work.cta.title}
        description={work.cta.description}
        form={work.cta.form}
        submitHref={withLocale(locale, "/contacts")}
      />
    </div>
  );
}
