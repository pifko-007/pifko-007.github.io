# CONTEXT — stan projektu GeoAtlas

> Plik do zaczytania na początku sesji. Spec projektu: `CLAUDE.md`.

---

## Co zostało zbudowane

Kompletny szkielet Astro przepisany z `prototype.html`. Projekt buduje się bez błędów.

```
npm run dev     # dev server
npm run build   # static build → dist/
```

## Struktura (kluczowe pliki)

```
src/
  content/
    config.ts                  ← Zod schema (countries + organizations)
    CLAUDE.md                  ← Instrukcja dodawania treści (ładowana kontekstowo)
    countries/poland.md        ← Przykład państwa (pełna treść PL)
    organizations/nato.md      ← Przykład organizacji (pełna treść PL)
  layouts/
    BaseLayout.astro           ← HTML shell, cały CSS, GlobalNav
    CountryLayout.astro        ← Sidebar + section nav + zielony akcent
    OrgLayout.astro            ← j.w. + niebieski akcent
  pages/
    index.astro                ← Strona główna, karty z getCollection()
    countries/[slug].astro     ← Dynamiczna strona państwa
    organizations/[slug].astro ← Dynamiczna strona organizacji
  components/
    GlobalNav.astro            ← Dropdowny generowane z kolekcji
    Card.astro                 ← Karta na stronie głównej
    SectionNav.astro           ← Sticky nav + scroll spy (IntersectionObserver)
.github/workflows/deploy.yml   ← Build → gh-pages branch
```

## Stan treści

| Wpis | Plik | Sekcje |
|------|------|--------|
| 🇵🇱 Polska | `countries/poland.md` | Przegląd, Polityka zagraniczna, Siły zbrojne, Gospodarka |
| 🔷 NATO | `organizations/nato.md` | Przegląd, Art. 5, Rozszerzenie, Budżet |

## Co jeszcze nie zrobione

- `astro.config.mjs` — `site` i `base` do uzupełnienia przed deploy (GitHub Pages URL)
- GitHub Pages — wymaga ustawienia source branch na `gh-pages` w repo settings
- Brak innych państw i organizacji — do dodania jako kolejne pliki `.md`
