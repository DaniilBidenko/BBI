import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { withLocale } from "@/i18n/paths";
import { Container } from "@/components/Container";
import { ContactsForm } from "@/components/ContactsForm";

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
  const { contacts } = dictionary;
  const navHome = dictionary.nav.items.find((item) => item.href === "/");
  const navContacts = dictionary.nav.items.find((item) => item.href === "/contacts");

  /** Центрированная колонка, шире прежнего max-w-2xl — текст и форма одной ширины */
  const columnClass = "mx-auto w-full max-w-5xl";

  return (
    <div className="relative">
      <section className="relative overflow-hidden pb-10 pt-20 md:pb-12">
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 opacity-[0.05]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        </div>
        <Container className="relative max-w-7xl lg:w-[min(96%,92rem)]">
          <div className={columnClass}>
            <div className="px-5 sm:px-8">
              <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-white/48">
                <Link href={withLocale(locale, "/")} className="transition hover:text-white/72">
                  {navHome?.label ?? "Home"}
                </Link>
                <span className="text-white/35" aria-hidden>
                  —
                </span>
                <span className="text-white/55">{navContacts?.label ?? "Contacts"}</span>
              </div>
              <div className="space-y-5">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,192,7,1)]">
                  {contacts.hero.eyebrow}
                </span>
                <h1 className="text-3xl font-semibold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-[2.65rem]">
                  {contacts.hero.title}
                </h1>
                <p className="text-base leading-relaxed text-white/78 md:text-lg">
                  {contacts.hero.description}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative pb-24 md:pb-28">
        <Container className="relative max-w-7xl lg:w-[min(96%,92rem)]">
          <div className={columnClass}>
            <div className="bbi-contacts-page-shell px-5 py-7 sm:px-8 md:py-9 lg:py-10">
              <ContactsForm contacts={contacts} compactLabels />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
