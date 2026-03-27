import { Container } from "@/components/Container";
import { ContactsForm } from "@/components/ContactsForm";
import type { ContactsPage } from "@/content/dictionaries/types";

type FinalCtaSectionProps = {
  title: string;
  subtitle: string;
  contacts: ContactsPage;
};

export function FinalCtaSection({
  title,
  subtitle: _subtitle,
  contacts,
}: FinalCtaSectionProps) {
  return (
    <section id="contact-form" className="relative py-16 md:py-20 scroll-mt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[var(--bbi-ambient-bg)]" />
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-[30px] border border-[color:var(--bbi-panel-border)] bg-[radial-gradient(120%_90%_at_45%_0%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_34%,rgba(255,255,255,0)_66%),var(--bbi-panel-bg)] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.5)] md:p-8 lg:p-10">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-[40px] font-semibold uppercase leading-[0.98] text-white md:text-[52px]">
                {title}
              </h2>
            </div>
            <div className="mx-auto mt-8 max-w-5xl">
              <ContactsForm contacts={contacts} variant="dark" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
