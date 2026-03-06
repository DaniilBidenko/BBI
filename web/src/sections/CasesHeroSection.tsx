import { Container } from "@/components/Container";

type CasesHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function CasesHeroSection({
  eyebrow,
  title,
  description,
}: CasesHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-20 pt-24">
      <div className="pointer-events-none absolute right-0 top-0 h-[320px] w-[320px] opacity-[0.06]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,43,68,0.4)_0%,transparent_70%)]" />
      </div>
      <Container className="relative mx-auto max-w-3xl lg:w-[85%]">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-[#ff2b44] to-transparent" />
            <span className="text-xs uppercase tracking-[0.35em] text-white/60">
              {eyebrow}
            </span>
          </div>
          <h1 className="text-3xl font-semibold leading-[1.15] md:text-5xl">
            <span className="bg-gradient-to-b from-white to-white/85 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/75">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
