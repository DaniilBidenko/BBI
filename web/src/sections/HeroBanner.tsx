import { Container } from "@/components/Container";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden pt-6">
      <Container>
        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-neutral-950">
          <img
            src="/brand/hero-banner.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
