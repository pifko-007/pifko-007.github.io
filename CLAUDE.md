# CLAUDE.md — GeoAtlas

## Cel projektu

Statyczna strona geopolityczna zbudowana w Astro, deployowana na GitHub Pages.
Zawiera usystematyzowane informacje o państwach i organizacjach międzynarodowych.
Treść jest zarządzana przez modele językowe — każdy nowy wpis to nowy plik Markdown.

-----

## Stack

- **Framework:** Astro (static output)
- **Hosting:** GitHub Pages via GitHub Actions
- **Treść:** Astro Content Collections (Markdown + YAML front matter)
- **Styl:** Vanilla CSS (bez frameworków CSS — style są w layoucie)
- **JS:** Vanilla JS, minimalnie (scroll spy, nawigacja)

-----

## Struktura projektu

```
/
├── src/
│   ├── content/
│   │   ├── config.ts           ← Zod schema dla obu kolekcji
│   │   ├── countries/          ← Jeden plik .md = jedno państwo
│   │   │   └── poland.md
│   │   └── organizations/      ← Jeden plik .md = jedna organizacja
│   │       └── nato.md
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← Globalny layout (nav, fonts, CSS)
│   │   ├── CountryLayout.astro ← Szablon strony państwa
│   │   └── OrgLayout.astro     ← Szablon strony organizacji
│   ├── pages/
│   │   ├── index.astro         ← Strona główna (lista kart)
│   │   ├── countries/
│   │   │   └── [slug].astro    ← Dynamiczna strona państwa
│   │   └── organizations/
│   │       └── [slug].astro    ← Dynamiczna strona organizacji
│   └── components/
│       ├── GlobalNav.astro
│       ├── SectionNav.astro    ← Sticky anchor menu na stronie wpisu
│       └── Card.astro
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml          ← GitHub Actions → GitHub Pages
├── astro.config.mjs
├── package.json
└── CLAUDE.md                   ← Ten plik
```

-----

## Content Collections — schema

### countries (`src/content/config.ts`)

```typescript
const countries = defineCollection({
  schema: z.object({
    name: z.string(),                          // Pełna nazwa państwa
    flag: z.string(),                          // Emoji flagi
    capital: z.string(),
    region: z.string(),
    government: z.string(),
    population: z.string(),
    alliances: z.array(z.string()),
    tags: z.array(z.string()),
    // Podkategorie — TBD, zostawić jako opcjonalne stringi
    // sections: definiowane przez nagłówki H2 w treści MD
  })
});
```

### organizations (`src/content/config.ts`)

```typescript
const organizations = defineCollection({
  schema: z.object({
    name: z.string(),
    flag: z.string(),                          // Emoji lub symbol
    type: z.string(),                          // np. "Sojusz wojskowy"
    founded: z.string(),
    headquarters: z.string(),
    members: z.string(),                       // np. "32 państwa"
    tags: z.array(z.string()),
  })
});
```

-----

## Konwencje plików treści

### Państwo (`src/content/countries/poland.md`)

```markdown
---
name: Polska
flag: 🇵🇱
capital: Warszawa
region: Europa Środkowa
government: Republika parlamentarna
population: 37,6 mln
alliances: [NATO, EU, V4]
tags: [NATO, EU, Flanka wschodnia]
---

## Przegląd

[treść]

## Podkategoria A

[treść]

## Podkategoria B

[treść]
```

### Organizacja (`src/content/organizations/nato.md`)

```markdown
---
name: NATO
flag: 🔷
type: Sojusz wojskowy
founded: "1949"
headquarters: Bruksela
members: 32 państwa
tags: [Militarna, Kolektywna obrona, Art. 5]
---

## Przegląd

[treść]

## Podkategoria X

[treść]
```

-----

## Wzorzec strony — jedna długa strona z anchor links

Każda strona (państwo lub organizacja) to:

1. **Nagłówek** — flaga, nazwa, metadane, tagi
1. **Sticky section nav** — linki do każdego H2 na stronie (`#przeglad`, `#podkategoria-a` itd.), generowane automatycznie z nagłówków MD
1. **Treść** — kolejne sekcje H2 renderowane jako długa strona
1. **Sidebar** (desktop) — ta sama nawigacja co section nav, po lewej stronie, sticky

Sekcje są generowane dynamicznie z nagłówków H2 w pliku MD — nie hardkodujemy ich w layoucie.

-----

## Design — patrz prototype.html

Plik `prototype.html` zawiera docelowy wygląd wizualny. Zachować:

- Paletę kolorów (dark theme, CSS variables z `prototype.html`)
- Typografię: Playfair Display (nagłówki) + IBM Plex Mono (etykiety) + IBM Plex Sans (treść)
- Rozróżnienie kolorystyczne: państwa = zielony akcent, organizacje = niebieski akcent
- Efekt grain overlay
- Animacje fade-up na kartach

-----

## Jak dodać nowe państwo / organizację

Szczegółowa instrukcja z szablonami front matter w `src/content/CLAUDE.md`.

Skrót: utwórz jeden plik `.md` w odpowiednim podkatalogu, nie modyfikuj niczego innego.

-----

## GitHub Actions deploy

Plik `.github/workflows/deploy.yml` buduje Astro i deployuje na `gh-pages` branch.
GitHub Pages musi być skonfigurowane na source: `gh-pages` branch.

-----

## Czego nie robić

- Nie używać `@astrojs/tailwind` ani innych CSS frameworków
- Nie hardkodować listy państw/organizacji w komponentach — zawsze pobierać z `getCollection()`
- Nie tworzyć osobnych stron dla każdej sekcji — to zawsze jedna długa strona
- Nie modyfikować `config.ts` przy dodawaniu treści — tylko przy zmianie struktury schematu
