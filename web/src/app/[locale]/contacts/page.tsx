import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
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

  const dictionary = getDictionary(localeParam as Locale);
  const { contacts } = dictionary;

  return (
    <div className="relative">
      <section className="relative overflow-hidden pb-12 pt-20">
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 opacity-[0.05]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        </div>
        <Container className="relative lg:w-[85%]">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#ff2b44]">
              {contacts.hero.eyebrow}
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
              {contacts.hero.title}
            </h1>
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              {contacts.hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="relative pb-24">
        <Container className="relative lg:w-[85%]">
          <div className="bbi-card mx-auto max-w-xl rounded-3xl border border-white/10 bg-[#1b1c21] p-8 shadow-xl md:p-10">
            <ContactsForm contacts={contacts} />
          </div>
        </Container>
      </section>
    </div>
  );
}
