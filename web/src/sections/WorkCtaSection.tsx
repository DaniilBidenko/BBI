import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PrivacyPolicyModalLink } from "@/components/PrivacyPolicyModalLink";

type WorkCtaSectionProps = {
  title: string;
  description: string;
  form: {
    name: string;
    phone: string;
    message: string;
    submit: string;
  };
  submitHref: string;
  privacyHref: string;
};

export function WorkCtaSection({
  title,
  description,
  form,
  submitHref,
  privacyHref,
}: WorkCtaSectionProps) {
  return (
    <section id="work-cta-form" className="relative pb-20 pt-10 md:pb-24 md:pt-12">
      <Container className="relative mx-auto lg:w-[90%]">
        <div className="bbi-hover-lift relative overflow-hidden rounded-[28px] border border-white/14 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.03)_34%,rgba(10,12,17,0.84)_100%)] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.38)] backdrop-blur-[1px] md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(130%_100%_at_50%_0%,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.04)_34%,rgba(255,255,255,0)_74%)]" />
          <div className="relative space-y-3">
            <h2 className="break-words text-[28px] font-semibold uppercase leading-[1.05] text-white sm:text-[34px] md:text-[44px]">
              {title}
            </h2>
            <p className="break-words text-[12px] uppercase tracking-[0.14em] text-[rgba(255,196,58,0.98)] sm:text-[13px] md:text-[15px]">
              {description}
            </p>
          </div>
          <form className="relative mt-5 grid gap-4">
            <input
              className="h-11 rounded-full border border-white/14 bg-[#07090d]/95 px-5 text-[15px] text-white placeholder:text-white/38 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/45 md:h-12 md:text-[16px]"
              placeholder={form.name}
            />
            <input
              className="h-11 rounded-full border border-white/14 bg-[#07090d]/95 px-5 text-[15px] text-white placeholder:text-white/38 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/45 md:h-12 md:text-[16px]"
              placeholder={form.phone}
            />
            <textarea
              className="min-h-[112px] rounded-[14px] border border-white/14 bg-[#07090d]/95 px-5 py-3.5 text-[15px] text-white placeholder:text-white/38 focus:outline-none focus:ring-2 focus:ring-[#ff2b44]/45 md:min-h-[128px] md:rounded-[16px] md:text-[16px]"
              placeholder={form.message}
            />
            <Button href={submitHref} className="!h-11 !w-fit !px-7 !text-[12px] !tracking-[0.02em] md:!h-12">
              {form.submit}
            </Button>
            <label className="flex max-w-3xl items-start gap-3 text-[12px] leading-relaxed text-white/62 md:text-[13px]">
              <span className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="peer absolute h-5 w-5 cursor-pointer opacity-0"
                />
                <span
                  className="h-5 w-5 rounded-[6px] border border-white/25 bg-[rgba(8,9,11,0.55)] transition peer-checked:border-[var(--bbi-red)] peer-checked:bg-[var(--bbi-red)]/10"
                  aria-hidden="true"
                />
                <svg
                  viewBox="0 0 12 10"
                  className="pointer-events-none absolute h-3 w-3 text-[var(--bbi-red)] opacity-0 transition peer-checked:opacity-100"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5.5l3 3L11 1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                Нажимая на кнопку "Отправить", я даю свое согласие на{" "}
                <PrivacyPolicyModalLink
                  href={privacyHref}
                  className="text-[var(--bbi-red)] transition hover:opacity-85"
                  title="Политика конфиденциальности"
                >
                  обработку моих персональных данных
                </PrivacyPolicyModalLink>
                .
              </span>
            </label>
          </form>
        </div>
      </Container>
    </section>
  );
}
