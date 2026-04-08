import Link from "next/link";
import { Container } from "@/components/Container";

type CasesHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  breadcrumbHomeHref: string;
  /** Фон секции; по умолчанию — war room / дашборды */
  heroImage?: string;
};

export function CasesHeroSection({
  eyebrow,
  title,
  description,
  breadcrumbHome,
  breadcrumbCurrent,
  breadcrumbHomeHref,
  heroImage = "/brand/cases-war-room-hero.png",
}: CasesHeroSectionProps) {
  return (
    <section className="relative isolate z-0 -mt-[58px] min-h-[min(88vh,980px)] overflow-hidden pb-28 pt-[108px] md:-mt-[62px] md:min-h-[min(84vh,940px)] md:pb-36 md:pt-[118px] lg:min-h-[min(82vh,920px)] lg:pb-44 lg:pt-[122px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImage}
          alt=""
          className="h-full min-h-full w-full object-cover object-[62%_42%] brightness-[0.78] contrast-[1.05] saturate-[1.06]"
        />
        {/* Слева/центр — читаемость текста */}
        <div className="absolute inset-0 bg-[linear-gradient(104deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.42)_44%,rgba(0,0,0,0.58)_100%)]" />
        {/* Верх — лёгкое затемнение */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.16)_30%,transparent_55%)]" />
        {/* Низ — высокий слой, плавный переход в #000 (фото визуально «уходит» ниже) */}
        <div className="absolute inset-x-0 bottom-0 h-[78%] min-h-[52vh] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.06)_14%,rgba(0,0,0,0.22)_32%,rgba(0,0,0,0.45)_52%,rgba(0,0,0,0.65)_72%,rgba(0,0,0,0.82)_88%,rgba(0,0,0,0.94)_96%,#000_100%)]" />
      </div>
      <Container className="relative z-10 mx-auto lg:w-[90%]">
        <div className="mb-10 flex flex-wrap items-center gap-2.5 text-[12px]">
          <Link href={breadcrumbHomeHref} className="text-white/48 transition hover:text-white/72">
            {breadcrumbHome}
          </Link>
          <span className="bbi-work-breadcrumb-pill">{breadcrumbCurrent}</span>
        </div>
        <div className="max-w-4xl space-y-6 sm:space-y-7 md:space-y-9 lg:space-y-10">
          <span className="block text-[11px] uppercase tracking-[0.28em] text-[rgba(200,158,88,0.96)] sm:text-sm sm:tracking-[0.34em]">
            {eyebrow}
          </span>
          <h1 className="max-w-none break-words text-[34px] font-semibold uppercase leading-[1.12] tracking-tight text-white sm:text-[46px] sm:leading-[1.1] md:text-[60px] md:leading-[1.08] lg:text-[72px] lg:leading-[1.07]">
            {title}
          </h1>
          <p className="max-w-[40ch] break-words text-[15px] leading-[1.55] text-white/90 sm:text-[16px] md:max-w-[48ch] md:text-[17px] md:leading-[1.52] lg:text-[18px] lg:leading-[1.55]">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
