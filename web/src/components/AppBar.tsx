import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "./Button";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/paths";

type AppBarProps = {
  locale: Locale;
  ctaLabel: string;
};

export function AppBar({ locale, ctaLabel }: AppBarProps) {
  return (
    <div className="border-b border-white/10 bg-[#0e0e0e]/80 backdrop-blur">
      <Container className="flex items-center justify-between py-2">
        <img
          src="/brand/logo-wordmark.png"
          alt="Bold Brands"
          className="h-5 w-auto"
        />
        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <Button href={withLocale(locale, "/contacts")} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </div>
  );
}
