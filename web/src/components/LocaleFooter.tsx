"use client";

import { usePathname } from "next/navigation";
import { Footer, type FooterProps } from "./Footer";

type LocaleFooterProps = FooterProps;

export function LocaleFooter({ footer, locale }: LocaleFooterProps) {
  const pathname = usePathname();
  const contactsPath = `/${locale}/contacts`;

  if (pathname === contactsPath) {
    return null;
  }

  return <Footer footer={footer} locale={locale} />;
}

