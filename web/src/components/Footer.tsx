"use client";

import Link from "next/link";
import { Container } from "./Container";
import { withLocale } from "@/i18n/paths";
import type { Locale } from "@/i18n/config";

const IconInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const IconFacebook = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IconTelegram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

type FooterLocation = {
  city: string;
  address?: string;
  phone?: string;
  email?: string;
  socials?: { instagram?: string; facebook?: string; whatsapp?: string; telegram?: string };
};

type FooterLink = { label: string; href?: string };

export type FooterProps = {
  footer: {
    copyright: string;
    tagline?: string;
    aboutTitle: string;
    aboutLinks: { label: string; href: string }[];
    servicesTitle: string;
    servicesLinks: FooterLink[];
    socialTitle: string;
    locations: FooterLocation[];
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    workingHoursLabel?: string;
    workingHours?: string;
    privacyLabel?: string;
    privacyHref?: string;
  };
  locale: Locale;
};

function SocialIcon({
  href,
  children,
  label,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--bbi-red)] text-white transition hover:opacity-90"
      aria-label={label}
    >
      {children}
    </a>
  );
}

export function Footer({ footer, locale }: FooterProps) {
  return (
    <footer className="bg-white">
      {/* Верхний блок: скруглённые углы */}
      <div className="rounded-t-3xl border-t border-[var(--bbi-text)]/[0.08] bg-white pt-12 pb-10 md:pt-14 md:pb-12">
        <Container className="px-4 lg:px-6">
          {/* 4 колонки */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {/* Бренд + слоган */}
            <div className="max-w-xs">
              <Link
                href={withLocale(locale, "/")}
                className="inline-flex items-center"
                aria-label="BBI — на главную"
              >
                <span className="logo-wordmark" role="img" aria-hidden />
              </Link>
              {footer.tagline && (
                <p className="mt-3 text-[13px] leading-[1.5] text-[var(--bbi-text)]/70">
                  {footer.tagline}
                </p>
              )}
            </div>

            {/* О компании */}
            <div>
              <h3 className="text-[13px] font-semibold text-[var(--bbi-text)]">
                {footer.aboutTitle}
              </h3>
              <ul className="mt-3 space-y-2">
                {footer.aboutLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={withLocale(locale, item.href)}
                      className="text-[13px] text-[var(--bbi-text)]/80 transition hover:text-[var(--bbi-red)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Услуги */}
            <div>
              <h3 className="text-[13px] font-semibold text-[var(--bbi-text)]">
                {footer.servicesTitle}
              </h3>
              <ul className="mt-3 space-y-2">
                {footer.servicesLinks.map((item, i) => (
                  <li key={i}>
                    {item.href ? (
                      <Link
                        href={withLocale(locale, item.href)}
                        className="text-[13px] text-[var(--bbi-text)]/80 transition hover:text-[var(--bbi-red)]"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-[13px] text-[var(--bbi-text)]/80">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Мы есть — соцсети по городам */}
            <div>
              <h3 className="text-[13px] font-semibold text-[var(--bbi-text)]">
                {footer.socialTitle}
              </h3>
              <div className="mt-3 space-y-5">
                {footer.locations.map((loc) => (
                  <div key={loc.city}>
                    <p className="text-[13px] text-[var(--bbi-text)]/80">
                      {loc.city}
                    </p>
                    {loc.socials && (
                      <div className="mt-2 flex gap-2">
                        {loc.socials.instagram && (
                          <SocialIcon
                            href={loc.socials.instagram}
                            label="Instagram"
                          >
                            <IconInstagram />
                          </SocialIcon>
                        )}
                        {loc.socials.facebook && (
                          <SocialIcon href={loc.socials.facebook} label="Facebook">
                            <IconFacebook />
                          </SocialIcon>
                        )}
                        {loc.socials.whatsapp && (
                          <SocialIcon href={loc.socials.whatsapp} label="WhatsApp">
                            <IconWhatsApp />
                          </SocialIcon>
                        )}
                        {loc.socials.telegram && (
                          <SocialIcon href={loc.socials.telegram} label="Telegram">
                            <IconTelegram />
                          </SocialIcon>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Средний блок: контакты по городам + режим работы */}
          <div className="mt-10 grid gap-8 border-t border-[var(--bbi-text)]/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {footer.locations.map((loc) => (
              <div key={loc.city} className="space-y-3">
                {loc.address && (
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--bbi-text)]/60">
                      {footer.addressLabel} ({loc.city})
                    </p>
                    <p className="mt-0.5 text-[13px] font-medium text-[var(--bbi-text)]">
                      {loc.address}
                    </p>
                  </div>
                )}
                {loc.phone && (
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--bbi-text)]/60">
                      {footer.phoneLabel} ({loc.city})
                    </p>
                    <a
                      href={`tel:${loc.phone.replace(/\s/g, "")}`}
                      className="mt-0.5 block text-[13px] font-medium text-[var(--bbi-text)] hover:text-[var(--bbi-red)]"
                    >
                      {loc.phone}
                    </a>
                  </div>
                )}
                {loc.email && (
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--bbi-text)]/60">
                      {footer.emailLabel} ({loc.city})
                    </p>
                    <a
                      href={`mailto:${loc.email}`}
                      className="mt-0.5 block text-[13px] font-medium text-[var(--bbi-text)] hover:text-[var(--bbi-red)]"
                    >
                      {loc.email}
                    </a>
                  </div>
                )}
              </div>
            ))}
            {footer.workingHoursLabel && footer.workingHours && (
              <div className="space-y-3 sm:col-span-2 lg:col-span-1">
                <p className="text-[11px] font-medium uppercase tracking-wider text-[var(--bbi-text)]/60">
                  {footer.workingHoursLabel}
                </p>
                <p className="mt-0.5 text-[13px] font-medium text-[var(--bbi-text)]">
                  {footer.workingHours}
                </p>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Нижняя полоса: копирайт + политика */}
      <div className="border-t border-[var(--bbi-text)]/[0.08] py-4">
        <Container className="px-4 lg:px-6">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-[12px] text-[var(--bbi-text)]/60">
              {footer.copyright}
            </p>
            {footer.privacyLabel && footer.privacyHref && (
              <Link
                href={withLocale(locale, footer.privacyHref)}
                className="text-[12px] text-[var(--bbi-text)]/60 transition hover:text-[var(--bbi-red)]"
              >
                {footer.privacyLabel}
              </Link>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
