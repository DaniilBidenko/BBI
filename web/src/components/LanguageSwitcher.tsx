import Link from "next/link";
import { locales, type Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/paths";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-wide">
      {locales.map((item) => (
        <Link
          key={item}
          href={withLocale(item, "/")}
          className={
            item === locale
              ? "text-[var(--bbi-black)]"
              : "text-[var(--bbi-muted)] hover:text-[var(--bbi-black)]"
          }
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
