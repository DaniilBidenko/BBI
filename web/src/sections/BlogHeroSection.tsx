import { Container } from "@/components/Container";

type BlogHeroSectionProps = {
  title: string;
  description: string;
};

export function BlogHeroSection({ title, description }: BlogHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-16 pt-20">
      <div className="pointer-events-none absolute right-0 top-0 h-[280px] w-[280px] opacity-[0.06]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_70%)]" />
      </div>
      <Container className="relative mx-auto max-w-3xl lg:w-[85%]">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
            <span className="bg-gradient-to-b from-white to-white/85 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          <p className="text-base leading-relaxed text-white/75">{description}</p>
        </div>
      </Container>
    </section>
  );
}
