import { notFound } from "next/navigation";
import Link from "next/link";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { ru } from "@/content/dictionaries/ru";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { withLocale } from "@/i18n/paths";

type LocalePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    ru.blog.posts.map((post) => ({ locale, slug: post.slug }))
  );
}

export default async function BlogArticlePage({ params }: LocalePageProps) {
  const { locale: localeParam, slug } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { blog } = dictionary;
  const post = blog.posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative">
      <section className="relative overflow-hidden pb-8 pt-20">
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 opacity-[0.05]">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2)_0%,transparent_70%)]" />
        </div>
        <Container className="relative mx-auto lg:w-[85%]">
          <Link
            href={withLocale(locale, "/blog")}
            className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/50 transition hover:text-white"
          >
            {blog.article.backToBlog}
          </Link>
          <div className="bbi-blog-card space-y-6 rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              <span className="text-xs font-medium uppercase tracking-widest text-[#ff2b44]">
                {post.category}
              </span>
              <h1 className="text-2xl font-semibold leading-tight text-white md:text-4xl">
                {post.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/75">
                {post.description}
              </p>
            </div>
            {post.image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="relative py-10">
        <Container className="relative mx-auto lg:w-[85%]">
          <article className="space-y-16">
            {post.sections.map((section, i) => (
              <div
                key={i}
                className={`space-y-6 ${section.image ? "lg:grid lg:grid-cols-[1fr_min(28rem,40%)] lg:gap-10 lg:items-start" : ""}`}
              >
                <div className="space-y-6">
                  {section.title && (
                    <h2 className="border-b border-white/10 pb-3 text-lg font-semibold uppercase tracking-tight text-white md:text-xl">
                      {section.title}
                    </h2>
                  )}
                  <div className="space-y-4">
                    {section.paragraphs.map((p, j) => (
                      <p
                        key={j}
                        className="text-sm leading-relaxed text-white/85 md:text-base"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
                {section.image && (
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-dashed border-white/20 bg-white/[0.03] lg:aspect-[4/3]" />
                )}
              </div>
            ))}
          </article>
          {post.cta && (
            <div className="mt-16 border-t border-white/10 pt-12">
              <Button href={withLocale(locale, post.cta.href)}>
                <span className="flex items-center gap-2 px-4 py-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {post.cta.label}
                </span>
              </Button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
