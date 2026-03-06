import { Container } from "@/components/Container";

export function WorkSchemeSection() {
  return (
    <section className="relative py-14">
      <Container className="relative mx-auto px-4 lg:w-[85%]">
        <div
          className="relative flex min-h-[200px] justify-center overflow-hidden rounded-3xl border border-black bg-black p-6 md:p-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/work-scheme.jpg"
            alt="Схема: Бизнес и шесть столпов"
            className="h-auto w-full max-w-[720px] object-contain"
            loading="eager"
          />
        </div>
      </Container>
    </section>
  );
}
