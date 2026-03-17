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
  subtitle,
  contacts,
}: FinalCtaSectionProps) {
  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--bbi-bg)]/50 to-[var(--bbi-bg)]/80" />
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-2xl border border-[var(--bbi-text)]/[0.08] bg-white p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] md:p-10 lg:p-12">
            <div className="mx-auto max-w-xl space-y-4 text-center">
              <h2 className="text-2xl font-semibold leading-tight text-[var(--bbi-text)] md:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="text-[15px] leading-[1.75] text-[var(--bbi-text)]/85 md:text-base">
                {subtitle}
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl">
              <ContactsForm contacts={contacts} variant="light" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
