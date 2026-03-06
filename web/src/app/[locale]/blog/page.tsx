import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { BlogHeroSection } from "@/sections/BlogHeroSection";
import { BlogListSection } from "@/sections/BlogListSection";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: LocalePageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;
  const dictionary = getDictionary(locale);
  const { blog } = dictionary;

  return (
    <div className="relative">
      <BlogHeroSection
        title={blog.hero.title}
        description={blog.hero.description}
      />
      <BlogListSection
        posts={blog.posts}
        locale={locale}
        readMoreLabel={blog.card.readMore}
      />
    </div>
  );
}
