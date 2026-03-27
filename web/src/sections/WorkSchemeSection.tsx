import { Container } from "@/components/Container";

export function WorkSchemeSection() {
  return (
    <section className="relative py-14">
      <Container className="relative mx-auto px-4 lg:w-[85%]">
        <div className="relative flex min-h-[200px] justify-center overflow-hidden rounded-3xl border border-white/8 bg-[linear-gradient(180deg,#06070a_0%,#05060a_100%)] p-3 shadow-[0_16px_38px_rgba(0,0,0,0.45)] md:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/work-scheme.jpg"
            alt="Схема: Бизнес и шесть столпов"
            className="h-auto w-full max-w-[820px] rounded-[18px] object-contain"
            loading="eager"
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]" />
        </div>
      </Container>
    </section>
  );
}
