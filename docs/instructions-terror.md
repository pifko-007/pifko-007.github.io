# instructions-terrorist-organizations.md — Instrukcja tworzenia wpisu o organizacji terrorystycznej

## Cel dokumentu

Ten plik definiuje jak model językowy ma tworzyć i wypełniać wpis o organizacji terrorystycznej lub zbrojnej grupie niepaństwowej w projekcie GeoAtlas. Każdy wpis to jeden plik Markdown w `src/content/organizations/`.

---

## Zasady ogólne

### Perspektywa

Wszystkie treści są pisane **z punktu widzenia Polski, NATO i Unii Europejskiej — w tej kolejności.**

- przy spornej terminologii używaj tej przyjętej przez Polskę, NATO lub UE
- przy opisie działalności organizacji perspektywa polska/zachodnia jest domyślna
- przy opisie ideologii i celów zachowuj neutralny ton analityczny — opisuj, nie propaguj

### Styl pisania

- styl **analityczny i neutralny**
- unikaj opinii i ocen
- unikaj języka publicystycznego i emocjonalnego
- unikaj spekulacji
- używaj krótkich i informacyjnych akapitów
- nie stosuj pierwszej osoby ani komentarzy autora
- nie używaj narracji organizacji jako własnej — zamiast „organizacja walczy o…" pisz „organizacja deklaruje, że walczy o…"

Tekst powinien przypominać **raport analityczny służb lub think tanku**, nie artykuł publicystyczny.

### Aktualność danych

Dane mają być aktualne na **marzec 2026**. Jeśli dane z marca 2026 nie są dostępne, użyj danych z okresu najbliższego tej dacie i oznacz je odpowiednio.

### Brak danych i unikanie halucynacji

Jeśli wiarygodne dane nie są dostępne:

- napisz: **"Brak publicznie dostępnych danych"**
- nie zgaduj wartości
- nie twórz estymacji
- nie generuj przybliżonych liczb
- nie używaj sformułowań typu „szacuje się" bez podania źródła

Model **nie może tworzyć danych liczbowych**, które nie są potwierdzone w źródłach.

Jeśli dane są dostępne ale przestarzałe — podaj je z flagą i rokiem:
`⚠️ dane z 2021`

**Szczególna ostrożność:** dane dotyczące organizacji terrorystycznych są często niepewne, sprzeczne lub celowo zniekształcane. Wyraźnie zaznaczaj stopień pewności informacji i jej źródło.

### Format danych liczbowych

- wszystkie dane liczbowe muszą zawierać **rok**
- używaj separatora dziesiętnego: **przecinek** (nie kropka)
- **wszystkie kwoty podawaj w USD**

### Limity długości

- **Przegląd** — maksymalnie 5 zdań
- **Każda podsekcja H3** — maksymalnie 150 słów
- **Każda sekcja H2** — maksymalnie 400 słów łącznie
- **Cały dokument** — orientacyjnie maksymalnie 2500 słów

---

## Hierarchia źródeł

Od najbardziej do najmniej wiarygodnych:

**1. Oficjalne dokumenty instytucji międzynarodowych i rządowych**
- Raporty i rezolucje Rady Bezpieczeństwa ONZ oraz Komitetu Sankcji ONZ
- Listy designacji: UE (`eur-lex.europa.eu`), USA — Departament Stanu i OFAC Treasury (`home.treasury.gov/policy-issues/financial-sanctions`)
- Raporty EUROPOL (`europol.europa.eu`) — szczególnie EU Terrorism Situation and Trend Report (TE-SAT)
- Oficjalne raporty ABW (`abw.gov.pl`) i polskiego MSWiA — dla oceny zagrożenia dla Polski
- Dokumenty sądowe z prawomocnych wyroków w uznanych jurysdykcjach (USA, UE, UK)

> ⚠️ Dla danych strukturalnych (designacje, sankcje, liczba ofiar ataków) używaj wyłącznie powyższych źródeł. Wikipedia i media są niedopuszczalne dla tych danych.

**2. Uznane ośrodki analityczne**
- RAND Corporation (`rand.org`)
- Council on Foreign Relations (`cfr.org`)
- CSIS (`csis.org`)
- START — National Consortium for the Study of Terrorism (`start.umd.edu`) — baza GTD dla danych o atakach
- ICG (`crisisgroup.org`) — dla kontekstu konfliktów
- ACLED (`acleddata.com`) — dla danych o incydentach zbrojnych
- SIPRI (`sipri.org`) — dla kontekstu finansowania i uzbrojenia
- Chatham House (`chathamhouse.org`), ECFR (`ecfr.eu`)

**3. Uznane media śledcze i dziennikarstwo weryfikowalne**
- Reuters, BBC, AP, Financial Times
- Bellingcat (`bellingcat.com`) — dla danych z otwartych źródeł (OSINT), z adnotacją metodologiczną
- The Intercept — dla ujawnionych dokumentów rządowych

**4. Wikipedia** — niedopuszczalna dla danych liczbowych, struktury, designacji i ataków. Dopuszczalna wyłącznie dla ogólnego kontekstu historycznego przy weryfikacji przypisów.

### Czego unikać

- Materiałów propagandowych samej organizacji jako źródła faktów (można cytować jako ilustrację deklarowanej ideologii — z wyraźnym oznaczeniem)
- Mediów państwowych krajów o niskiej wolności prasy
- Anonimowych blogów i serwisów bez redakcji
- CIA World Factbook — serwis jest niedostępny i nieaktualizowany

### Format cytowania źródeł

Na końcu każdej sekcji H2 dodaj blok źródeł (obowiązkowy):

```markdown
> **Źródła:** [EUROPOL TE-SAT 2024](https://europol.europa.eu/...) (2024),
> [START GTD](https://start.umd.edu/gtd) (2024)
```

---

## Proces tworzenia wpisu

### Tryb: tworzenie od zera (2 etapy)

**Etap 1 — Front matter + Przegląd + Rys historyczny + Ideologia i cele + Struktura + Zasięg**
1. Zidentyfikuj podstawowe dane organizacji z oficjalnych list designacji (ONZ, UE, USA)
2. Sprawdź raporty EUROPOL TE-SAT i think tanków
3. Wygeneruj front matter oraz sekcje: Przegląd, Rys historyczny, Ideologia i cele, Struktura organizacyjna, Zasięg i obecność
4. Dodaj blok źródeł

**Etap 2 — Finansowanie + Zdolności + Operacje + Powiązania + Status prawny + Zagrożenie**
1. Sprawdź raporty Komitetu Sankcji ONZ i OFAC w zakresie finansowania
2. Sprawdź bazę GTD (START) dla danych o atakach
3. Zidentyfikuj powiązania zewnętrzne z dokumentów sądowych i raportów analitycznych
4. Sprawdź aktualne listy designacji UE/USA/ONZ
5. Pobierz ocenę zagrożenia z raportów ABW i EUROPOL
6. Wygeneruj sekcje: Finansowanie, Zdolności operacyjne i taktyki, Znaczące operacje, Powiązania zewnętrzne, Status prawny i sankcje, Zagrożenie dla Polski NATO i UE
7. Dodaj blok źródeł

### Tryb: aktualizacja istniejącej sekcji

1. Otrzymujesz istniejący plik MD
2. Identyfikujesz sekcję do aktualizacji
3. Pobierasz aktualne dane ze źródeł
4. Nadpisujesz tylko wskazaną sekcję — reszta pliku pozostaje bez zmian
5. Aktualizujesz pole `last_updated` w front matter

---

## Struktura pliku

### Front matter (wymagany)

```yaml
---
name: [Pełna oficjalna nazwa lub najczęściej używana nazwa]
name_short: [Akronim lub skrót, np. ISIS, Hamas, PKK]
flag: [Emoji lub symbol — jeśli brak oczywistego, użyj ⚠️]
type: Organizacja terrorystyczna
subtype: [np. "dżihadystyczna", "separatystyczna", "lewacka", "prawicowa", "etno-nacjonalistyczna"]
founded: [Rok założenia lub przybliżony]
headquarters: [Znana lub przypuszczalna baza — z adnotacją "przypuszczalnie" jeśli niepewne]
active_regions: [Lista regionów operacyjnych]
designation_un: [tak / nie / częściowa]
designation_eu: [tak / nie]
designation_us: [tak / nie]
tags: [lista tagów]
last_updated: [YYYY-MM]
---
```

Przykład:
```yaml
---
name: Islamskie Państwo Iraku i Lewantu
name_short: ISIS
flag: ⚠️
type: Organizacja terrorystyczna
subtype: dżihadystyczna
founded: 2013
headquarters: "brak stałej siedziby (historycznie: Rakka, Syria)"
active_regions: [Bliski Wschód, Afryka Subsaharyjska, Azja Południowo-Wschodnia]
designation_un: tak
designation_eu: tak
designation_us: tak
tags: [Dżihadyzm, Kalifat, Bliski Wschód, Zagrożenie globalne]
last_updated: 2026-03
---
```

---

## Sekcje — szczegółowe wytyczne

---

### `## Przegląd`

**Max 5 zdań.** Wprowadzenie do organizacji.
Odpowiada na pytania: *czym jest ta organizacja, jaka jest jej ideologia w skrócie, gdzie działa i dlaczego jest istotna z perspektywy Polski i NATO/UE?*

- Napisz w formie ciągłego tekstu, nie listy
- Uwzględnij: typ organizacji, podłoże ideologiczne, zasięg geograficzny, znaczenie dla bezpieczeństwa zachodniego
- Nie powielaj suchych danych z front matter

**Źródła:** EUROPOL TE-SAT, CFR, Britannica

---

### `## Rys historyczny`

Krótka sekcja — **bez podsekcji H3**, maksymalnie 200 słów ciągłego tekstu.

- Kiedy i w jakim kontekście powstała organizacja
- Najważniejsze przełomy: rozłamy, przekształcenia, utrata lub zdobycie terytorium
- Aktualny stan w porównaniu do szczytu aktywności

**Źródła:** CFR, Britannica, ICG

---

### `## Ideologia i cele`

#### `### Baza ideologiczna`
- Ideologia: religijna, polityczna, etniczna — z precyzyjnym określeniem nurtu
- Kluczowe dokumenty doktrynalne jeśli istnieją i są publicznie znane
- **Źródła:** analizy akademickie, RAND, CFR — nie materiały samej organizacji jako źródło faktyczne

#### `### Deklarowane cele`
- Oficjalnie ogłaszane cele polityczne lub terytorialne
- Wyraźnie zaznacz: to są cele deklarowane, nie ocena ich zasadności
- **Źródła:** j.w. oraz dokumenty sądowe cytujące materiały organizacji

---

### `## Struktura organizacyjna`

#### `### Model struktury`
- Hierarchiczna / sieciowa / hybrydowa — z uzasadnieniem
- Znane skrzydła: militarne, polityczne, propagandowe, charytatywne (jeśli rozdzielone)
- **Źródła:** raporty EUROPOL, dokumenty sądowe, RAND

#### `### Przywództwo`
- Tylko publicznie potwierdzone informacje o liderach (imię, rola, status: aktywny / zabity / aresztowany)
- Wyraźnie zaznaczaj stopień pewności: „według raportów X" itp.
- **Źródła:** oficjalne komunikaty rządowe, wyroki sądowe, EUROPOL

---

### `## Zasięg i obecność`

#### `### Obszary operacyjne`
- Regiony i państwa, w których organizacja jest aktywna
- Rozróżnienie: kontrolowane terytorium / obecność komórkowa / inspiracja bez struktury
- **Źródła:** ACLED, ICG, EUROPOL

#### `### Obecność w diasporach i rekrutacja zagraniczna`
- Znana aktywność w Europie lub wśród diaspor — tylko z potwierdzonych raportów
- **Źródła:** EUROPOL TE-SAT, wyroki sądowe w UE

---

### `## Finansowanie`

#### `### Źródła finansowania`
- Znane lub udokumentowane źródła: sponsorzy państwowi, przestępczość zorganizowana, darowizny, kontrolowane terytorium
- Dla każdego źródła — stopień pewności i źródło informacji
- **Źródła:** raporty Komitetu Sankcji ONZ, OFAC Treasury, dokumenty sądowe

#### `### Mechanizmy transferu środków`
- Znane metody: hawala, kryptowaluty, fundacje charytatywne, przedsiębiorstwa przykrywki
- Tylko publicznie udokumentowane przypadki
- **Źródła:** j.w., FATF (`fatf-gafi.org`)

---

### `## Zdolności operacyjne i taktyki`

#### `### Preferowane metody ataków`
- Typy ataków (zamachy samobójcze, IED, strzelaniny, cyberataki itp.)
- Modus operandi — bez instruktażowych szczegółów technicznych
- **Źródła:** START GTD, ACLED, EUROPOL

#### `### Rekrutacja i radykalizacja`
- Znane kanały rekrutacyjne i metody radykalizacji
- Rola mediów społecznościowych i propagandy online jeśli udokumentowana
- **Źródła:** EUROPOL, RAND, Bellingcat

---

### `## Znaczące operacje`

Chronologiczna lista najważniejszych ataków lub operacji przypisanych organizacji.

- Format: `**[Rok, miejsce]** — [krótki opis] — [liczba ofiar jeśli potwierdzona]`
- Tylko ataki potwierdzone przez oficjalne śledztwa lub wyroki sądowe
- Nie przekraczaj 10 pozycji — wybierz najbardziej znaczące z perspektywy skali lub wpływu geopolitycznego

**Źródła:** START GTD, dokumenty sądowe, Reuters/AP/BBC dla potwierdzenia faktów

---

### `## Powiązania zewnętrzne`

#### `### Sponsorzy państwowi`
- Udokumentowane powiązania z państwami (wsparcie finansowe, logistyczne, polityczne)
- Wyraźnie zaznaczaj: oficjalnie potwierdzone vs. zarzucane
- **Źródła:** raporty ONZ, wyroki sądowe, Departament Stanu USA

#### `### Powiązania z innymi organizacjami`
- Formalne afiliacje, sojusze, franczyzy
- **Źródła:** EUROPOL, RAND, CFR

---

### `## Status prawny i sankcje`

#### `### Designacje`
- Lista jurysdykcji, w których organizacja jest wyznaczona jako terrorystyczna
- Format: `**[ONZ / UE / USA / inne]** — [data designacji, podstawa prawna]`
- **Źródła:** listy ONZ (`un.org/securitycouncil/sanctions`), EUR-Lex, OFAC

#### `### Sankcje wobec liderów i struktur`
- Zamrożone aktywa, zakazy podróżowania — łączne kwoty jeśli podane
- **Źródła:** OFAC, EUR-Lex

---

### `## Zagrożenie dla Polski, NATO i UE`

#### `### Ocena zagrożenia`
- Oficjalna ocena z raportów ABW, EUROPOL lub NATO
- Poziom zagrożenia jeśli oficjalnie komunikowany
- **Źródła:** raporty ABW (`abw.gov.pl`), EUROPOL TE-SAT, oficjalne komunikaty NATO

#### `### Wektory zagrożenia`
- Potencjalne lub udokumentowane wektory ataku na obszar PL/NATO/UE
- Znane komórki lub inspirowane ataki w Europie
- **Źródła:** j.w., wyroki sądowe w państwach UE

#### `### Środki zaradcze`
- Publicznie ogłoszone działania Polski, UE i NATO (legislacja, operacje, współpraca wywiadowcza)
- **Źródła:** oficjalne komunikaty rządów, EUROPOL

---

## Formatowanie — zasady ogólne

- **Nagłówki H2** (`##`) — główne sekcje, nie zmieniaj nazw
- **Nagłówki H3** (`###`) — podsekcje; dopuszczalne dodatkowe H3 z kursywnym uzasadnieniem pod nagłówkiem
- Dane liczbowe zawsze z rokiem: `Liczba ofiar: 137 (2015)`
- Separator dziesiętny: przecinek (`6,2%`, nie `6.2%`)
- Wszystkie kwoty w USD
- Daty: `13 listopada 2015` lub `listopad 2015` lub `2015`
- Stopień pewności informacji: „według raportu EUROPOL (2023)", „według wyroku sądu w Paryżu (2022)"
- Blok źródeł na końcu każdej sekcji H2 — obowiązkowy
- Przestarzałe dane oznaczaj flagą: `⚠️ dane z 2021`

---

## Szablon gotowy do wypełnienia

```markdown
---
name: [PEŁNA NAZWA]
name_short: [SKRÓT]
flag: [EMOJI]
type: Organizacja terrorystyczna
subtype: [PODTYP]
founded: [ROK]
headquarters: [SIEDZIBA lub "brak stałej siedziby"]
active_regions: []
designation_un: [tak / nie]
designation_eu: [tak / nie]
designation_us: [tak / nie]
tags: []
last_updated: 2026-03
---

## Przegląd

[max 5 zdań]

> **Źródła:**

## Rys historyczny

[max 200 słów, bez podsekcji]

> **Źródła:**

## Ideologia i cele

### Baza ideologiczna

### Deklarowane cele

> **Źródła:**

## Struktura organizacyjna

### Model struktury

### Przywództwo

> **Źródła:**

## Zasięg i obecność

### Obszary operacyjne

### Obecność w diasporach i rekrutacja zagraniczna

> **Źródła:**

## Finansowanie

### Źródła finansowania

### Mechanizmy transferu środków

> **Źródła:**

## Zdolności operacyjne i taktyki

### Preferowane metody ataków

### Rekrutacja i radykalizacja

> **Źródła:**

## Znaczące operacje

> **Źródła:**

## Powiązania zewnętrzne

### Sponsorzy państwowi

### Powiązania z innymi organizacjami

> **Źródła:**

## Status prawny i sankcje

### Designacje

### Sankcje wobec liderów i struktur

> **Źródła:**

## Zagrożenie dla Polski, NATO i UE

### Ocena zagrożenia

### Wektory zagrożenia

### Środki zaradcze

> **Źródła:**
```
