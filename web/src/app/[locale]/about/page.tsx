import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/Container";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

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
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-[#14151a] text-[#ff2b44]">
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
    <div className="relative">
      <section className="relative overflow-hidden pb-24 pt-20">
        <div className="pointer-events-none absolute left-0 top-8 h-[240px] w-[240px] opacity-[0.08]">
          <img src="/brand/pattern-white.png" alt="" className="h-full w-full" />
        </div>
        <Container className="relative space-y-10 lg:w-[85%]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold uppercase leading-tight md:text-5xl">
                {who.title}
              </h1>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                {who.text}
              </p>
              <div className="rounded-3xl border border-white/10 bg-[#1b1c21] p-6 text-sm text-white/80">
                {who.emphasis}
              </div>
            </div>
            <div className="bbi-card flex flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-[#1b1c21] p-8">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                  BBI
                </div>
                <h2 className="text-2xl font-semibold text-white md:text-3xl">
                  Bold Brands International
                </h2>
                <p className="text-sm text-white/70">
                  Operating Partner (RevOps). Мы строим систему управления и
                  защиты бизнеса, которая работает без ручного контроля.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-white/40">
                <span>Shield</span>
                <span>Leverage</span>
                <span>System</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-28">
        <Container className="relative space-y-12 lg:w-[85%]">
          <h2 className="text-2xl font-semibold md:text-3xl">
            {principles.title}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {principles.items.map((item, index) => (
              <div
                key={item.text}
                className="bbi-card flex gap-4 rounded-3xl border border-white/10 bg-[#1b1c21] p-6"
              >
                <IconBadge index={index} />
                <p className="text-sm leading-relaxed text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-28">
        <Container className="relative space-y-12 lg:w-[85%]">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">
              {manifesto.title}
            </h2>
            <div className="text-xs uppercase tracking-[0.32em] text-[#ff2b44]">
              Manifest
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {manifesto.items.map((item, index) => (
              <div
                key={item.text}
                className="bbi-card flex items-center gap-4 rounded-3xl border border-white/10 bg-[#1b1c21] p-6"
              >
                <IconBadge index={index + 2} />
                <p className="text-sm text-white/80">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-28">
        <Container className="relative space-y-12 lg:w-[85%]">
          <h2 className="text-2xl font-semibold md:text-3xl">{team.title}</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.members.map((member) => (
              <article
                key={`${member.name}-${member.role}`}
                className="bbi-card flex flex-col gap-4 rounded-3xl border border-white/10 bg-[#1b1c21] p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full border border-white/15 bg-white/10" />
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {member.name}
                    </div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[#ff2b44]">
                      {member.role}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/70">{member.note}</p>
                <div className="mt-auto text-xs text-white/40">
                  Фото будет заменено
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-32 pt-16">
        <Container className="relative lg:w-[85%]">
          <div className="bbi-card grid gap-8 rounded-[32px] border border-white/10 bg-[#1b1c21] p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold md:text-3xl">
                {cta.title}
              </h2>
              <p className="text-sm text-white/70">{cta.description}</p>
            </div>
            <form className="grid gap-4">
              <input
                className="h-11 rounded-2xl border border-white/10 bg-[#14151a] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60"
                placeholder={cta.form.name}
              />
              <input
                className="h-11 rounded-2xl border border-white/10 bg-[#14151a] px-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60"
                placeholder={cta.form.phone}
              />
              <textarea
                className="min-h-[96px] rounded-2xl border border-white/10 bg-[#14151a] px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/60"
                placeholder={cta.form.message}
              />
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[#ff2b44] px-4 py-1.5 text-sm font-medium text-[#eeeeee] transition hover:bg-[#ff4960] focus-visible:outline-[#ff2b44]"
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
