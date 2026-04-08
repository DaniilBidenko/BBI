import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/Container";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

const PANEL_CLASS =
  "rounded-[28px] border border-[color:var(--bbi-panel-border)] bg-[var(--bbi-panel-bg)] shadow-[0_18px_44px_rgba(0,0,0,0.45)]";

function IconBadge({ index }: { index: number }) {
  const icons = [
    // Shield check
    "M12 3l7.5 3.8v5.8c0 4.9-3.2 8.7-7.5 9.7-4.3-1-7.5-4.8-7.5-9.7V6.8L12 3Zm-3.3 9.1 2.2 2.1 4.4-4.3",
    // Trend chart
    "M5 5v14h14M8 14l3-3 2.6 2.6L18 9.2M16.2 9h2v2",
    // Eye
    "M2.5 12S6.4 6.5 12 6.5 21.5 12 21.5 12 17.6 17.5 12 17.5 2.5 12 2.5 12Zm9.5 3.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z",
    // Exclamation mark
    "M12 4.2a7.8 7.8 0 1 0 0 15.6 7.8 7.8 0 0 0 0-15.6Zm-1 3.6h2v6h-2v-6Zm1 9.2a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4Z",
  ];
  const path = icons[index % icons.length];

  return (
    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] border border-white/20 bg-[linear-gradient(165deg,rgba(255,43,68,0.24)_0%,rgba(54,16,22,0.62)_56%,rgba(13,14,20,0.9)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_28px_rgba(0,0,0,0.5)]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        className="h-6 w-6 text-[var(--bbi-red)]"
      >
        <path d={path} />
      </svg>
    </div>
  );
}

export default async function AboutPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { who, principles, manifesto, team, cta } = dictionary.about;

  return (
    <>
      <div className="min-h-screen text-white">
      <section className="relative overflow-hidden pb-16 pt-20 md:pb-20 md:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
        <Container className="relative lg:w-[90%]">
          <div className="mb-8 text-[12px] text-white/45">
            Главная <span className="px-2">→</span> О компании
          </div>
          <div className="rounded-[28px] bg-[var(--bbi-panel-bg)] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.45)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8 xl:gap-10">
            <div className="space-y-7">
              <h1 className="break-words text-[34px] font-semibold uppercase leading-[1.05] tracking-tight text-white sm:text-[44px] md:text-[56px] lg:text-[68px]">
                {who.title}
              </h1>
              <p className="max-w-[56ch] break-words text-[16px] leading-[1.5] text-white/90 sm:text-[18px] md:text-[20px] lg:text-[21px]">
                {who.text}
              </p>
              <div className="w-fit rounded-[22px] border border-[rgba(255,43,68,0.82)] bg-[rgba(255,43,68,0.06)] px-5 py-4 text-[15px] leading-[1.38] text-[rgba(255,43,68,1)] sm:px-6 sm:text-[17px] md:px-7 md:py-5 md:text-[19px] lg:text-[20px]">
                <p className="max-w-[50ch] break-words">{who.emphasis}</p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[34px] border border-white/12 bg-black/40 shadow-[0_24px_64px_rgba(0,0,0,0.65)]">
              <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/about-hero-photo.png"
                  alt="Bold Brands International"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(98deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.72)_28%,rgba(0,0,0,0.36)_55%,rgba(0,0,0,0.3)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.58)_58%,rgba(0,0,0,0.9)_100%)]" />
              </div>
              <div className="pointer-events-none absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/90 shadow-[0_6px_18px_rgba(0,0,0,0.42)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </div>
              <div className="pointer-events-none absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/90 shadow-[0_6px_18px_rgba(0,0,0,0.42)]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
              <div className="relative flex min-h-[390px] flex-col justify-between p-6 md:p-7">
                <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/58">
                  SHIELD · LEVERAGE · SYSTEM
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--bbi-red)]/95">BBI</span>
                  <h2 className="mt-2 break-words text-[18px] font-semibold leading-[1.08] tracking-[-0.01em] text-white sm:text-[22px] md:text-[28px]">
                    Bold Brands International
                  </h2>
                  <p className="mt-3 max-w-md text-[14px] leading-[1.4] text-white/84 sm:text-[15px] md:text-[16px]">
                    Operating Partner (RevOps). Мы строим систему управления и защиты бизнеса,
                    которая работает без ручного контроля.
                  </p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative pb-16 pt-10 md:pb-16 md:pt-12">
        <Container className="relative lg:w-[90%]">
          <h2 className="mb-8 break-words text-[30px] font-semibold uppercase leading-[1.05] text-white sm:text-[36px] md:mb-10 md:text-[50px]">
            {principles.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {principles.items.map((item, index) => (
              <div
                key={item.text}
                data-ap-i={index % 4}
                className="bbi-about-principle-card relative overflow-hidden rounded-[30px] p-5 md:p-7"
              >
                <div className="relative flex items-center gap-5">
                <IconBadge index={index} />
                <p className="max-w-[28ch] break-words text-[16px] leading-[1.4] text-white/86 md:text-[17px]">
                  {item.text}
                </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-12 md:py-16">
        <Container className="relative lg:w-[90%]">
          <h2 className="mb-8 break-words text-[30px] font-semibold uppercase leading-[1.05] text-white sm:text-[36px] md:mb-10 md:text-[50px]">
            {manifesto.title}
          </h2>
          <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {manifesto.items.map((item, index) => (
              <div
                key={item.text}
                data-mm-i={index % 5}
                className="bbi-about-manifesto-pill flex w-fit max-w-full min-h-0 items-center justify-self-start rounded-full px-4 py-2.5 text-white md:px-5 md:py-3"
              >
                <p className="max-w-[32ch] break-words text-[16px] font-normal leading-snug text-white/92 sm:text-[18px] md:text-[20px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-12 md:py-16">
        <Container className="relative lg:w-[90%]">
          <h2 className="mb-8 break-words text-[30px] font-semibold uppercase leading-[1.05] text-white sm:text-[36px] md:mb-10 md:text-[50px]">
            {team.title}
          </h2>
          <div className="relative md:px-12">
            <div className="pointer-events-none absolute -left-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/90 md:flex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="pointer-events-none absolute -right-1 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white/90 md:flex">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
            <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">
              {team.members.slice(0, 3).map((member, index) => (
                <article
                  key={`${member.name}-${member.role}`}
                  data-tc-i={index % 3}
                  className="bbi-about-team-card relative h-[226px] w-[86%] shrink-0 snap-start overflow-hidden rounded-[30px] p-5 sm:w-[70%] md:w-[52%] lg:w-[calc((100%-3rem)/3)]"
                >
                  <div className="relative flex items-center gap-4">
                    <div className="h-[102px] w-[102px] shrink-0 overflow-hidden rounded-[18px] border border-white/18 bg-black/30">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/brand/team-member-1.png"
                        alt={member.name}
                        className="h-full w-full object-cover object-[50%_18%]"
                      />
                    </div>
                    <div>
                      <div className="break-words text-[16px] font-semibold leading-[1.1] text-white sm:text-[18px] md:text-[20px]">
                        {member.name}
                      </div>
                      <div className="mt-2 text-[14px] font-medium uppercase tracking-[0.12em] text-[var(--bbi-red)]">
                        {member.role}
                      </div>
                    </div>
                  </div>
                  <p className="relative mt-3 max-w-[24ch] break-words text-[15px] leading-[1.35] text-white/86 sm:text-[16px] md:text-[17px]">
                    {member.note}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative pb-20 pt-12 md:pb-24">
        <Container className="relative lg:w-[90%]">
          <div className="bbi-about-cta-shell relative overflow-hidden rounded-[30px] p-6 md:p-8 lg:p-10">
            <div className="relative space-y-5">
              <h2 className="max-w-3xl break-words text-[28px] font-semibold uppercase leading-[1.05] text-white sm:text-[34px] md:text-[48px]">
                {cta.title}
              </h2>
              <p className="break-words text-[11px] uppercase tracking-[0.12em] text-[rgba(255,192,7,1)] sm:text-[12px] md:text-[14px]">
                {cta.description}
              </p>
            </div>
            <form className="relative mt-6 grid gap-5 md:mt-7">
              <input
                className="h-12 rounded-full border border-white/14 bg-[#07090d]/95 px-5 text-[16px] text-white placeholder:text-white/38 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/45 sm:text-[18px] md:h-14 md:text-[19px]"
                placeholder={cta.form.name}
              />
              <input
                className="h-12 rounded-full border border-white/14 bg-[#07090d]/95 px-5 text-[16px] text-white placeholder:text-white/38 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/45 sm:text-[18px] md:h-14 md:text-[19px]"
                placeholder={cta.form.phone}
              />
              <textarea
                className="min-h-[120px] rounded-[14px] border border-white/14 bg-[#07090d]/95 px-5 py-4 text-[16px] text-white placeholder:text-white/38 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/45 sm:text-[18px] md:min-h-[150px] md:rounded-[16px] md:text-[19px]"
                placeholder={cta.form.message}
              />
              <button
                type="button"
                className="inline-flex h-12 w-fit items-center justify-center rounded-full bg-[var(--bbi-red)] px-6 text-[15px] font-medium text-white shadow-[0_10px_24px_rgba(255,43,68,0.35)] transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bbi-red)] sm:px-7 sm:text-[17px] md:h-14 md:px-8 md:text-[18px]"
              >
                {cta.form.submit}
              </button>
            </form>
          </div>
        </Container>
      </section>
      </div>
    </>
  );
}
