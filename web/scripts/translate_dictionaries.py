"""
Translates string literals in ru.ts into en.ts / uz.ts (same structure, only text).
Uses Google Translate via deep_translator. Progress is cached under scripts/.translate_cache_*.json
"""
import ast
import json
import re
import time
from pathlib import Path

from deep_translator import GoogleTranslator

RU_PATH = Path(__file__).resolve().parent.parent / "src" / "content" / "dictionaries" / "ru.ts"
OUT_EN = Path(__file__).resolve().parent.parent / "src" / "content" / "dictionaries" / "en.ts"
OUT_UZ = Path(__file__).resolve().parent.parent / "src" / "content" / "dictionaries" / "uz.ts"
CACHE_EN = Path(__file__).resolve().parent / ".translate_cache_en.json"
CACHE_UZ = Path(__file__).resolve().parent / ".translate_cache_uz.json"

# Google allows long segments; keep chunks moderate for stability
CHUNK_MAX = 4500
SLEEP_BETWEEN_CHUNKS = 0.35
SLEEP_BETWEEN_STRINGS = 0.15
MAX_RETRIES = 8


def parse_strings(source: str):
    strings = []
    idx = 0
    length = len(source)
    while idx < length:
        if source[idx] == "\"":
            j = idx + 1
            while j < length:
                if source[j] == "\"":
                    backslashes = 0
                    k = j - 1
                    while k > idx and source[k] == "\\":
                        backslashes += 1
                        k -= 1
                    if backslashes % 2 == 0:
                        break
                j += 1
            raw = source[idx + 1:j]
            try:
                decoded = ast.literal_eval("\"" + raw + "\"")
            except Exception:
                decoded = raw
            strings.append((idx, j, raw, decoded))
            idx = j + 1
            continue
        idx += 1
    return strings


def split_text(text: str, max_len: int = CHUNK_MAX):
    if len(text) <= max_len:
        return [text]
    if "\n" in text:
        parts = text.split("\n")
        chunks = []
        buf = ""
        for part in parts:
            candidate = f"{buf}\n{part}" if buf else part
            if len(candidate) > max_len and buf:
                chunks.append(buf)
                buf = part
            else:
                buf = candidate
        if buf:
            chunks.append(buf)
        return chunks
    sentences = re.split(r"(?<=[.!?])\s+", text)
    chunks = []
    buf = ""
    for sentence in sentences:
        candidate = f"{buf} {sentence}" if buf else sentence
        if len(candidate) > max_len and buf:
            chunks.append(buf)
            buf = sentence
        else:
            buf = candidate
    if buf:
        chunks.append(buf)
    return chunks


def translate_chunk(translator: GoogleTranslator, chunk: str, depth: int = 0) -> str:
    """Translate one chunk; on empty response or error, split in half (depth-limited)."""
    if not chunk.strip():
        return chunk
    if depth > 14:
        return chunk
    delay = 2.0
    last_err: Exception | None = None
    for attempt in range(MAX_RETRIES):
        try:
            raw = translator.translate(chunk)
            result = (raw or "").strip()
            if result:
                return result
            if len(chunk) <= 100:
                return chunk
            mid = len(chunk) // 2
            time.sleep(SLEEP_BETWEEN_CHUNKS)
            left = translate_chunk(translator, chunk[:mid], depth + 1)
            time.sleep(SLEEP_BETWEEN_CHUNKS)
            return left + translate_chunk(translator, chunk[mid:], depth + 1)
        except Exception as e:
            last_err = e
            print(f"  retry {attempt + 1}/{MAX_RETRIES}: {e}", flush=True)
            time.sleep(delay)
            delay = min(delay * 1.8, 60.0)
    raise last_err


def translate_all(texts: list[str], google_target: str, cache_path: Path) -> dict:
    translator = GoogleTranslator(source="ru", target=google_target)
    cache: dict = {}
    if cache_path.exists():
        cache = json.loads(cache_path.read_text(encoding="utf-8"))
    total = len(texts)
    for i, src in enumerate(texts, 1):
        if src in cache:
            continue
        chunks = split_text(src)
        translated_chunks = []
        for chunk in chunks:
            translated_chunks.append(translate_chunk(translator, chunk))
            time.sleep(SLEEP_BETWEEN_CHUNKS)
        translated = "\n".join(translated_chunks) if "\n" in src else " ".join(translated_chunks)
        cache[src] = translated
        cache_path.write_text(json.dumps(cache, ensure_ascii=False, indent=2), encoding="utf-8")
        time.sleep(SLEEP_BETWEEN_STRINGS)
        if i % 25 == 0 or i == total:
            print(f"Translated {i}/{total} strings -> {google_target}...", flush=True)
    return cache


def escape_ts_string(value: str) -> str:
    value = value.replace("\\", "\\\\")
    value = value.replace("\"", "\\\"")
    value = value.replace("\n", "\\n")
    value = value.replace("\r", "\\r")
    value = value.replace("\t", "\\t")
    return value


def write_translated(source: str, strings, export_name: str, google_target: str, out_path: Path, cache_path: Path):
    cyrillic_re = re.compile(r"[\u0400-\u04FF]")
    unique_texts: list[str] = []
    seen: set[str] = set()
    for _, _, _, decoded in strings:
        if cyrillic_re.search(decoded) and decoded not in seen:
            seen.add(decoded)
            unique_texts.append(decoded)

    cache = translate_all(unique_texts, google_target, cache_path)
    out: list[str] = []
    idx = 0
    for start, end, raw, decoded in strings:
        out.append(source[idx:start])
        if cyrillic_re.search(decoded):
            translated = cache.get(decoded, decoded)
            out.append("\"" + escape_ts_string(translated) + "\"")
        else:
            out.append("\"" + raw + "\"")
        idx = end + 1
    out.append(source[idx:])
    result = "".join(out)
    result = result.replace("export const ru: Dictionary =", f"export const {export_name}: Dictionary =", 1)
    out_path.write_text(result, encoding="utf-8")


def main():
    source = RU_PATH.read_text(encoding="utf-8")
    strings = parse_strings(source)
    write_translated(source, strings, "en", "en", OUT_EN, CACHE_EN)
    write_translated(source, strings, "uz", "uz", OUT_UZ, CACHE_UZ)
    print("Done: en.ts and uz.ts written.", flush=True)


if __name__ == "__main__":
    main()
