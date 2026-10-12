#!/usr/bin/env python3
"""Render the public Academic CV to two searchable A4 PDFs.

Launch from a local HTTP server at http://127.0.0.1:8765/cv/.
Only information already published in cv/index.html is included.
"""
from __future__ import annotations

import os
import shutil
import sys
from pathlib import Path

from playwright.sync_api import sync_playwright
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUTS = {
    "en": ROOT / "cv" / "Hafidh-Khoerul-Fata-Academic-CV-EN.pdf",
    "id": ROOT / "cv" / "Hafidh-Khoerul-Fata-CV-Akademik-ID.pdf",
}
URL = "http://127.0.0.1:8765/cv/"

def main() -> None:
    chrome = os.environ.get("CHROME_BIN") or shutil.which("google-chrome") or shutil.which("chromium")
    if not chrome:
        sys.exit("Chrome/Chromium executable is required to generate CV PDFs.")

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(
            executable_path=chrome,
            headless=True,
            args=["--no-sandbox", "--disable-dev-shm-usage"],
        )
        try:
            for language, output in OUTPUTS.items():
                context = browser.new_context(
                    viewport={"width": 1250, "height": 900},
                    device_scale_factor=1,
                )
                try:
                    page = context.new_page()
                    page.goto(URL, wait_until="domcontentloaded", timeout=45000)
                    if language == "id":
                        page.locator('[data-lang="id"]').click()
                    else:
                        page.locator('[data-lang="en"]').click()
                    page.wait_for_function("(lang) => document.documentElement.lang === lang", arg=language)
                    page.evaluate("() => document.fonts.ready")
                    page.emulate_media(media="print")
                    output.parent.mkdir(parents=True, exist_ok=True)
                    page.pdf(
                        path=str(output),
                        prefer_css_page_size=True,
                        print_background=True,
                        display_header_footer=False,
                    )
                    if output.stat().st_size < 5000:
                        raise RuntimeError(f"Generated PDF is too small: {output}")
                    reader = PdfReader(str(output))
                    if not 1 <= len(reader.pages) <= 6:
                        raise RuntimeError(f"Unexpected page count {len(reader.pages)}: {output}")
                    body = "\n".join(p.extract_text() or "" for p in reader.pages)
                    expected_rank = "Assistant Professor (Asisten Ahli)" if language == "en" else "Asisten Ahli"
                    if " ".join(page.locator('[data-i18n="academicRankValue"]').first.inner_text().split()) != expected_rank:
                        raise RuntimeError(f"Wrong academic rank in source HTML for {language}")
                    extracted = " ".join(body.split())
                    if "Hafidh Khoerul Fata" not in extracted:
                        raise RuntimeError(f"CV author missing from rendered PDF: {output}")
                    if "Asisten" not in extracted or "Ahli" not in extracted:
                        raise RuntimeError(f"Academic rank missing from rendered PDF: {output}")
                    print(f"Created {output.relative_to(ROOT)}: {len(reader.pages)} pages, {output.stat().st_size} bytes")
                finally:
                    context.close()
        finally:
            browser.close()

if __name__ == "__main__":
    main()
