# Dodawanie treści — GeoAtlas

Jeden plik = jedna strona. Nie modyfikuj żadnego innego pliku.

---

## Państwo

**Ścieżka:** `src/content/countries/[slug].md`

- `slug` = ASCII lowercase, myślniki zamiast spacji (np. `south-korea.md`)

**Front matter:**

```markdown
---
name: Pełna nazwa państwa
flag: 🇵🇱
capital: Stolica
region: Europa Środkowa
government: Republika parlamentarna
population: 37,6 mln
alliances: [NATO, EU]
tags: [NATO, EU, Tag3]
---
```

- `flag` — emoji flagi Unicode
- `alliances` — może być puste `[]`
- `population` / `members` — string, dowolny format

---

## Organizacja

**Ścieżka:** `src/content/organizations/[slug].md`

```markdown
---
name: Nazwa organizacji
flag: 🔷
type: Sojusz wojskowy
founded: "1949"
headquarters: Bruksela
members: 32 państwa
tags: [Militarna, Kolektywna obrona]
---
```

- `founded` — zawsze w cudzysłowie (YAML)
- `flag` — emoji lub symbol (🔷 🔵 🌐 ⚖️)

---

## Struktura treści (wspólna)

```markdown
## Przegląd

Pierwsze H2 zawsze "Przegląd". Liczba i nazwy kolejnych sekcji są dowolne.

## Polityka zagraniczna

Każde H2 tworzy wpis w sticky nav i sidebarze.

## Gospodarka

Używaj H3 dla podsekcji — nie trafiają do nav.
```

**Nie używaj H1** — tytuł jest generowany przez layout.

---

## Weryfikacja

```bash
npm run build
```

Nowy wpis pojawia się automatycznie na stronie głównej i w nawigacji.
