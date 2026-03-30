import { notFound } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/content/dictionaries";
import { withLocale } from "@/i18n/paths";
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
  const navHome = dictionary.nav.items.find((item) => item.href === "/");
  const navBlog = dictionary.nav.items.find((item) => item.href === "/blog");

  return (
    <div className="relative">
      <BlogHeroSection
        title={blog.hero.title}
        description={blog.hero.description}
        breadcrumbHome={navHome?.label ?? "Home"}
        breadcrumbCurrent={navBlog?.label ?? "Blog"}
        breadcrumbHomeHref={withLocale(locale, "/")}
      />
      <BlogListSection
        posts={blog.posts}
        locale={locale}
        readMoreLabel={blog.card.readMore}
        filters={blog.filters}
        noPosts={blog.noPosts}
      />
    </div>
  );
}
