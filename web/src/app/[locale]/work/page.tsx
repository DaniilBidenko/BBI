import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { withLocale } from "@/i18n/paths";
import { WorkHeroSection } from "@/sections/WorkHeroSection";
import { WorkPillarGridSection } from "@/sections/WorkPillarGridSection";
import { WorkSchemeSection } from "@/sections/WorkSchemeSection";
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
  const navHome = dictionary.nav.items.find((item) => item.href === "/");
  const navWork = dictionary.nav.items.find((item) => item.href === "/work");

  return (
    <div className="relative">
      <WorkHeroSection
        eyebrow={work.hero.eyebrow}
        title={work.hero.title}
        description={work.hero.description}
        ctaLabel={work.hero.ctaLabel}
        ctaHint={work.hero.ctaHint}
        ctaHref={withLocale(locale, "/pillars")}
        breadcrumbHome={navHome?.label ?? "Home"}
        breadcrumbCurrent={navWork?.label ?? "Work"}
        breadcrumbHomeHref={withLocale(locale, "/")}
      />
      <WorkSchemeSection centerLabel={work.scheme.centerLabel} pillars={work.pillars} />
      <WorkPillarGridSection
        title={work.results.title}
        description={work.results.description}
        pillars={work.pillars}
        field="result"
        badge={work.results.badge}
        detailsLabel={work.pillarsIntro.detailsLabel}
      />
      <WorkPillarGridSection
        title={work.problems.title}
        description={work.problems.description}
        pillars={work.pillars}
        field="broken"
        badge={work.problems.badge}
        detailsLabel={work.pillarsIntro.detailsLabel}
      />
      <WorkPillarGridSection
        title={work.actions.title}
        description={work.actions.description}
        pillars={work.pillars}
        field="actions"
        badge={work.actions.badge}
        detailsLabel={work.pillarsIntro.detailsLabel}
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
      <div className="relative">
        <div className="pointer-events-none absolute inset-x-0 -top-24 -bottom-24 -z-10 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/work-final-blocks-photo.png"
            alt=""
            className="h-full w-full object-cover object-center brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.88)_0%,rgba(0,0,0,0.64)_36%,rgba(0,0,0,0.62)_68%,rgba(0,0,0,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_50%,rgba(0,0,0,0.06)_24%,rgba(0,0,0,0.42)_70%,#000_100%)]" />
        </div>
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
    </div>
  );
}
