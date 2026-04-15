import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { isLocale } from "@/i18n/config";
import { PRIVACY_POLICY_TEXT } from "@/content/privacyPolicyText";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function PrivacyPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <section className="relative py-20 md:py-24">
      <Container className="relative max-w-7xl lg:w-[min(96%,92rem)]">
        <article className="mx-auto w-full max-w-5xl rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_38%,rgba(8,10,15,0.9)_100%)] px-6 py-7 md:px-10 md:py-10">
          <h1 className="text-3xl font-semibold uppercase leading-tight tracking-tight text-white md:text-4xl">
            Политика конфиденциальности
          </h1>
          <div className="mt-6 whitespace-pre-line text-[14px] leading-[1.65] text-white/84 md:text-[15px]">
            {PRIVACY_POLICY_TEXT}
          </div>
        </article>
      </Container>
    </section>
  );
}
