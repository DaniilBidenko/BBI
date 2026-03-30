import Link from "next/link";
import { Container } from "@/components/Container";

type BlogHeroSectionProps = {
  title: string;
  description: string;
  breadcrumbHome: string;
  breadcrumbCurrent: string;
  breadcrumbHomeHref: string;
};

export function BlogHeroSection({
  title,
  description,
  breadcrumbHome,
  breadcrumbCurrent,
  breadcrumbHomeHref,
}: BlogHeroSectionProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-20 md:pb-16">
      <div className="pointer-events-none absolute right-0 top-0 h-[280px] w-[280px] opacity-[0.06]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,transparent_70%)]" />
      </div>
      <Container className="relative mx-auto max-w-3xl lg:w-[85%]">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-[12px] text-white/48">
          <Link href={breadcrumbHomeHref} className="transition hover:text-white/72">
            {breadcrumbHome}
          </Link>
          <span className="text-white/35" aria-hidden>
            —
          </span>
          <span className="text-white/55">{breadcrumbCurrent}</span>
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl font-semibold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/78">{description}</p>
        </div>
      </Container>
    </section>
  );
}
