import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/Container";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

/* Apex-style: однотонный тёмный фон, чёрные блоки, крупный белый шрифт */
const PAGE_BG = "#121212";
const CARD_BG = "#0a0a0a";
const BORDER = "rgba(255,255,255,0.06)";

function IconBadge({ index }: { index: number }) {
  const icons = [
    "M12 3l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V7l8-4z",
    "M3 12h18M12 3v18M7 7l10 10M17 7L7 17",
    "M4 4h16v16H4zM4 10h16M10 4v16",
    "M5 19l7-14 7 14M8 15h8",
    "M6 6h12v12H6zM9 9h6v6H9z",
  ];
  const path = icons[index % icons.length];

  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-[var(--bbi-red)]"
      style={{ borderColor: BORDER, backgroundColor: CARD_BG }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
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
    <div className="min-h-screen text-white" style={{ backgroundColor: PAGE_BG }}>
      {/* Hero: кто мы */}
      <section className="relative overflow-hidden pb-20 pt-24 md:pb-28 md:pt-28">
        <Container className="relative lg:w-[88%]">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="space-y-8">
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                {who.title}
              </h1>
              <p className="text-lg leading-relaxed text-white/85 md:text-xl">
                {who.text}
              </p>
              <div
                className="rounded-2xl border p-6 text-base md:p-8 md:text-lg"
                style={{ backgroundColor: CARD_BG, borderColor: BORDER }}
              >
                <p className="leading-relaxed text-white/90">{who.emphasis}</p>
              </div>
            </div>
            <div
              className="flex flex-col justify-between gap-6 rounded-2xl border p-8"
              style={{ backgroundColor: CARD_BG, borderColor: BORDER }}
            >
              <div className="space-y-4">
                <div className="text-xs font-medium uppercase tracking-[0.35em] text-white/45">
                  BBI
                </div>
                <h2 className="text-2xl font-semibold md:text-3xl">
                  Bold Brands International
                </h2>
                <p className="text-base leading-relaxed text-white/80 md:text-lg">
                  Operating Partner (RevOps). Мы строим систему управления и
                  защиты бизнеса, которая работает без ручного контроля.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                <span>Shield</span>
                <span>Leverage</span>
                <span>System</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Ключевые убеждения — чёрные блоки */}
      <section className="relative py-16 md:py-24">
        <Container className="relative lg:w-[88%]">
          <h2 className="mb-12 text-3xl font-semibold md:mb-16 md:text-4xl lg:text-[2.5rem]">
            {principles.title}
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {principles.items.map((item, index) => (
              <div
                key={item.text}
                className="flex gap-5 rounded-2xl border p-6 md:p-8"
                style={{ backgroundColor: CARD_BG, borderColor: BORDER }}
              >
                <IconBadge index={index} />
                <p className="text-base leading-relaxed text-white/90 md:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Против чего мы выступаем — красные плашки */}
      <section className="relative py-16 md:py-24">
        <Container className="relative lg:w-[88%]">
          <h2 className="mb-10 text-3xl font-semibold md:mb-14 md:text-4xl lg:text-[2.5rem]">
            {manifesto.title}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {manifesto.items.map((item) => (
              <div
                key={item.text}
                className="rounded-xl bg-[var(--bbi-red)] px-6 py-5 text-white md:px-8 md:py-6"
              >
                <p className="text-base font-medium leading-snug md:text-lg">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Команда — чёрные карточки */}
      <section className="relative py-16 md:py-24">
        <Container className="relative lg:w-[88%]">
          <h2 className="mb-12 text-3xl font-semibold md:mb-16 md:text-4xl lg:text-[2.5rem]">
            {team.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.members.map((member) => (
              <article
                key={`${member.name}-${member.role}`}
                className="flex flex-col gap-4 rounded-2xl border p-6"
                style={{ backgroundColor: CARD_BG, borderColor: BORDER }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-16 w-16 shrink-0 rounded-full border"
                    style={{ borderColor: BORDER, backgroundColor: "rgba(255,255,255,0.06)" }}
                  />
                  <div>
                    <div className="text-base font-semibold md:text-lg">
                      {member.name}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--bbi-red)]">
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/80 md:text-base">
                  {member.note}
                </p>
                <div className="mt-auto text-xs text-white/40">
                  Фото будет заменено
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA — чёрный блок с формой */}
      <section className="relative pb-28 pt-12 md:pb-36">
        <Container className="relative lg:w-[88%]">
          <div
            className="grid gap-8 rounded-2xl border p-8 md:gap-10 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12"
            style={{ backgroundColor: CARD_BG, borderColor: BORDER }}
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
                {cta.title}
              </h2>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                {cta.description}
              </p>
            </div>
            <form className="grid gap-4">
              <input
                className="h-12 rounded-xl border px-4 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/50"
                style={{ backgroundColor: PAGE_BG, borderColor: BORDER }}
                placeholder={cta.form.name}
              />
              <input
                className="h-12 rounded-xl border px-4 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/50"
                style={{ backgroundColor: PAGE_BG, borderColor: BORDER }}
                placeholder={cta.form.phone}
              />
              <textarea
                className="min-h-[100px] rounded-xl border px-4 py-3 text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[var(--bbi-red)]/50"
                style={{ backgroundColor: PAGE_BG, borderColor: BORDER }}
                placeholder={cta.form.message}
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--bbi-red)] px-6 text-base font-medium text-white transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--bbi-red)]"
              >
                {cta.form.submit}
              </button>
            </form>
          </div>
        </Container>
      </section>
    </div>
  );
}
