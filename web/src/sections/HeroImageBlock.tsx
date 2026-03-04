import { Container } from "@/components/Container";

export function HeroImageBlock() {
  return (
    <section className="py-8">
      <Container>
        <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-[#0b0b0d] shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
          <div className="relative h-[280px] w-[500px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(255,255,255,0.25),rgba(10,10,12,0)_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,12,0.98)_0%,rgba(10,10,12,0.85)_55%,rgba(10,10,12,0.45)_75%,rgba(10,10,12,0.05)_100%)]" />
            <img
              src="/brand/hero-wordmark-red.png"
              alt="Bold Brands"
              className="absolute left-[35px] top-[106px] h-[18px] w-auto"
            />
            <div className="absolute left-[39px] top-[140px] max-w-[320px]">
              <h2 className="text-[36px] font-semibold uppercase tracking-[0.08em] text-white">
                Бренд-платформа
              </h2>
            </div>
            <div
              className="absolute left-[327px] top-[168px] h-[210px] w-[130px] bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,1),rgba(255,255,255,0.75))] [mask-image:url('/brand/hero-logo-white.png')] [mask-repeat:no-repeat] [mask-size:contain] [mask-position:center] [webkit-mask-image:url('/brand/hero-logo-white.png')] [webkit-mask-repeat:no-repeat] [webkit-mask-size:contain] [webkit-mask-position:center]"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
