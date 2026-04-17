import { Container } from "@/components/Container";
import { ContactsForm } from "@/components/ContactsForm";
import type { ContactsPage, Dictionary } from "@/content/dictionaries/types";

type ConsentUi = Pick<
  Dictionary["ui"],
  | "contactsConsentBeforeLink"
  | "contactsConsentLinkText"
  | "contactsConsentAfterLink"
  | "privacyModalTitle"
  | "privacyModalCloseAria"
>;

type FinalCtaSectionProps = {
  title: string;
  subtitle: string;
  contacts: ContactsPage;
  consentUi: ConsentUi;
};

export function FinalCtaSection({
  title,
  subtitle: _subtitle,
  contacts,
  consentUi,
}: FinalCtaSectionProps) {
  return (
    <section id="contact-form" className="relative py-16 md:py-20 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mx-auto w-full max-w-6xl">
          <div className="bbi-contact-shell bbi-hover-lift rounded-[30px] p-6 md:p-8 lg:p-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="break-words text-[30px] font-semibold uppercase leading-[1.05] text-white sm:text-[36px] md:text-[52px]">
                {title}
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-5xl">
              <ContactsForm contacts={contacts} variant="dark" consentUi={consentUi} />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
