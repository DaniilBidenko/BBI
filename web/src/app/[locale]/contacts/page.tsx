import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { Container } from "@/components/Container";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactsPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const navContacts = dictionary.nav.items.find((item) => item.href === "/contacts");
  const linkedInUrl = "https://www.linkedin.com/in/boldbrands-international-857b78329/";

  return (
    <section className="relative py-16 md:py-36">
      <Container className="relative max-w-7xl lg:w-[min(96%,92rem)]">
        <div className="mx-auto w-full max-w-5xl rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_36%,rgba(8,10,15,0.9)_100%)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] md:rounded-[32px] md:p-12">
          <div className="space-y-5 md:space-y-7">
            <h1 className="text-3xl font-semibold uppercase leading-[1.05] tracking-tight text-white md:text-6xl">
              {navContacts?.label ?? "Contacts"}
            </h1>
          </div>

          <div className="mt-6 space-y-4 md:mt-10 md:space-y-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 md:text-xs">Соцсети</p>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bbi-contacts-link-card group flex items-start justify-between gap-3 rounded-xl border border-white/14 bg-white/[0.03] px-4 py-4 transition-all duration-500 ease-out hover:border-[#0a66c2]/60 hover:bg-[#0a66c2]/12 md:items-center md:gap-5 md:rounded-2xl md:px-6 md:py-6"
            >
              <div className="flex min-w-0 items-start gap-3 md:items-center md:gap-5">
                <span className="bbi-contacts-link-icon inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/24 bg-[#0a66c2]/20 text-white transition group-hover:border-[#0a66c2]/80 group-hover:bg-[#0a66c2]/38 md:h-16 md:w-16">
                  <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6 fill-current md:h-8 md:w-8">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45ZM22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-white/62 md:text-base">LinkedIn</p>
                  <p className="mt-0.5 text-[15px] font-medium leading-tight text-white/94 md:mt-1 md:text-[28px]">
                    Bold Brands International
                  </p>
                  <p className="mt-1 text-[13px] leading-snug text-white/64 md:mt-1.5 md:text-base md:leading-relaxed">
                    Перейти в профиль компании в LinkedIn
                  </p>
                </div>
              </div>
              <span className="bbi-contacts-link-arrow shrink-0 text-white/42 transition group-hover:text-white/72" aria-hidden>
                <svg viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
