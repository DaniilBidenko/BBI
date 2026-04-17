import type { Locale } from "@/i18n/config";
import { PRIVACY_POLICY_TEXT } from "./privacyPolicyText";
import { PRIVACY_POLICY_TEXT_EN } from "./privacyPolicyEn";
import { PRIVACY_POLICY_TEXT_UZ } from "./privacyPolicyUz";

export function getPrivacyPolicyText(locale: Locale): string {
  if (locale === "en") return PRIVACY_POLICY_TEXT_EN;
  if (locale === "uz") return PRIVACY_POLICY_TEXT_UZ;
  return PRIVACY_POLICY_TEXT;
}
