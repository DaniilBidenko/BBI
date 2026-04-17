"""Translate privacy policy to en/uz; writes privacyPolicyByLocale.ts (Russian stays in privacyPolicyText.ts)."""
import json
import re
import time
from pathlib import Path

from deep_translator import GoogleTranslator
from deep_translator.exceptions import RequestError

SRC = Path(__file__).resolve().parent.parent / "src" / "content" / "privacyPolicyText.ts"
OUT = Path(__file__).resolve().parent.parent / "src" / "content" / "privacyPolicyByLocale.ts"
CACHE = Path(__file__).resolve().parent / ".translate_cache_privacy.json"

CHUNK_MAX = 4500
SLEEP = 0.45


def extract_ru_body(source: str) -> str:
    m = re.search(r"export const PRIVACY_POLICY_TEXT = `([\s\S]*)`;", source)
    if not m:
        raise SystemExit("Could not find PRIVACY_POLICY_TEXT template")
    return m.group(1)


def split_chunks(text: str) -> list[str]:
    if len(text) <= CHUNK_MAX:
        return [text]
    lines = text.split("\n")
    chunks = []
    cur = ""
    for line in lines:
        cand = (cur + "\n" + line) if cur else line
        if len(cand) > CHUNK_MAX and cur:
            chunks.append(cur)
            cur = line
        else:
            cur = cand
    if cur:
        chunks.append(cur)
    return chunks


def translate_chunks(text: str, target: str) -> str:
    tr = GoogleTranslator(source="ru", target=target)
    parts = []
    pieces = split_chunks(text)
    for i, ch in enumerate(pieces):
        delay = 3.0
        last_err: Exception | None = None
        for attempt in range(12):
            try:
                parts.append(tr.translate(ch))
                break
            except RequestError as e:
                last_err = e
                print(f"  retry {attempt + 1}/12 chunk {i + 1} ({target}): {e}", flush=True)
                time.sleep(delay)
                delay = min(delay * 1.6, 45.0)
        else:
            raise last_err or RuntimeError("translate failed")
        time.sleep(SLEEP)
        print(f"  {target} chunk {i + 1}/{len(pieces)}", flush=True)
    return "\n".join(parts) if "\n" in text else " ".join(parts)


def main():
    raw = SRC.read_text(encoding="utf-8")
    body = extract_ru_body(raw)
    cache: dict = {}
    if CACHE.exists():
        cache = json.loads(CACHE.read_text(encoding="utf-8"))

    if "en" not in cache:
        print("Translating privacy policy to English...", flush=True)
        cache["en"] = translate_chunks(body, "en")
        CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
    if "uz" not in cache:
        print("Translating privacy policy to Uzbek...", flush=True)
        cache["uz"] = translate_chunks(body, "uz")
        CACHE.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")

    en_body = cache["en"]
    uz_body = cache["uz"]

    out = f"""import type {{ Locale }} from "@/i18n/config";
import {{ PRIVACY_POLICY_TEXT }} from "./privacyPolicyText";

const en: string = {json.dumps(en_body, ensure_ascii=False)};
const uz: string = {json.dumps(uz_body, ensure_ascii=False)};

export function getPrivacyPolicyText(locale: Locale): string {{
  if (locale === "en") return en;
  if (locale === "uz") return uz;
  return PRIVACY_POLICY_TEXT;
}}
"""
    OUT.write_text(out, encoding="utf-8")
    print(f"Wrote {OUT}", flush=True)


if __name__ == "__main__":
    main()
