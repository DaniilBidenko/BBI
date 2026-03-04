import type { Locale } from "@/i18n/config";
import type { Dictionary } from "./types";
import { en } from "./en";
import { ru } from "./ru";
import { uz } from "./uz";

const dictionaries: Record<Locale, Dictionary> = {
  ru,
  en,
  uz,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
