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
          description={work.responsibility.description}
          bbiTitle={work.responsibility.bbiTitle}
          clientTitle={work.responsibility.clientTitle}
          bbi={work.responsibility.bbi}
          client={work.responsibility.client}
          bbiDetailed={work.responsibility.bbiDetailed}
          clientDetailed={work.responsibility.clientDetailed}
        />
        {locale === "ru" ? (
          <section className="relative py-16 md:py-18">
            <div className="mx-auto w-full max-w-[min(100%,72rem)] px-4 sm:px-6 lg:px-8">
              <div className="bbi-hover-lift w-full rounded-[24px] border border-[var(--bbi-red)]/45 bg-black/25 px-5 py-5 text-center md:px-6 md:py-6">
                <h3 className="flex items-center justify-center gap-2 text-[34px] font-semibold leading-none text-white md:text-[42px]">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                    <path d="M12 3L22 21H2L12 3Z" fill="#FFC007" />
                    <rect x="11" y="9" width="2" height="7" rx="1" fill="#111111" />
                    <circle cx="12" cy="18.2" r="1.15" fill="#111111" />
                  </svg>
                  Что BBI не обещает
                </h3>
                <p className="mx-auto mt-2.5 text-[14px] leading-[1.45] text-white/78 md:text-[15px]">
                  Чтобы не было ложных ожиданий — честно:
                </p>
                <div className="mx-auto mt-3 max-w-[1120px] space-y-2.5 text-left">
                  <p className="text-[13px] leading-[1.5] text-white/78 md:text-[14px]">
                    Не гарантируем мгновенный рост выручки. Результат BBI — управляемый бизнес-актив. Рост становится
                    контролируемым и воспроизводимым, а не случайным.
                  </p>
                  <p className="text-[13px] leading-[1.5] text-white/78 md:text-[14px]">
                    Не создаём «автопилот без собственника». Собственник выходит из операционки, но остаётся в
                    управлении через цифры и ритм — это не одно и то же.
                  </p>
                  <p className="text-[13px] leading-[1.5] text-white/78 md:text-[14px]">
                    Не работаем в режиме «сделайте нам вот это». Только в логике согласованного целевого результата —
                    без бесконечного потока задач, не связанных с системой.
                  </p>
                  <p className="text-[13px] leading-[1.5] text-white/78 md:text-[14px]">
                    Не трансформируем всё и сразу. Движение идёт поэтапно: сначала критические риски и прозрачность,
                    потом стандарты и масштабируемость.
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <WorkTargetStateSection
            title={work.targetState.title}
            minimumTitle={work.targetState.minimumTitle}
            minimumDescription={work.targetState.minimumDescription}
            idealTitle={work.targetState.idealTitle}
            idealDescription={work.targetState.idealDescription}
          />
        )}
        <WorkCtaSection
          title={work.cta.title}
          description={work.cta.description}
          form={work.cta.form}
          submitHref={withLocale(locale, "/contacts")}
          privacyHref={withLocale(locale, "/privacy")}
        />
      </div>
    </div>
  );
}
