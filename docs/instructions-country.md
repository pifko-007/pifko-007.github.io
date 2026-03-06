# instructions-country.md — Instrukcja tworzenia wpisu o państwie

## Cel dokumentu

Ten plik definiuje jak model językowy ma tworzyć i wypełniać wpis o państwie
w projekcie GeoAtlas. Każdy wpis to jeden plik Markdown w `src/content/countries/`.

---

## Zasady ogólne

### Perspektywa

Wszystkie treści są pisane **z punktu widzenia Polski, NATO i Unii Europejskiej — w tej kolejności.**

- przy spornej terminologii używaj tej przyjętej przez Polskę, NATO lub UE
- przy opisie konfliktów perspektywa polska/zachodnia jest domyślna
- przy ocenie sojuszy i zagrożeń hierarchia interesów jest polska

### Styl pisania

- styl **analityczny i neutralny**
- unikaj opinii i ocen
- unikaj języka publicystycznego
- unikaj spekulacji
- używaj krótkich i informacyjnych akapitów
- nie stosuj pierwszej osoby ani komentarzy autora

Tekst powinien przypominać **raport analityczny**, nie artykuł publicystyczny.

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

### Format danych liczbowych

- wszystkie dane liczbowe muszą zawierać **rok**
- używaj separatora dziesiętnego: **przecinek** (nie kropka)
- używaj spójnego zapisu w języku polskim
- **wszystkie kwoty podawaj w USD** — chyba że EUR lub PLN ma wyraźne uzasadnienie merytoryczne (np. składki do budżetu UE, umowy rozliczane w PLN)

Poprawnie:
```
PKB: 674 mld USD (2024)
PKB per capita: 17 900 USD (2024)
Inflacja: 6,2% (2024)
Dług publiczny: 49% PKB (2024)
Budżet obronny: 32 mld USD (2024)
```

Niepoprawnie:
```
$674 billion
674B
approx. 674bn
6.2%
PKB: 620 mld EUR
```

### Limity długości

- **Przegląd** — maksymalnie 5 zdań
- **Każda podsekcja H3** — maksymalnie 150 słów
- **Każda sekcja H2** — maksymalnie 500 słów łącznie
- **Cały dokument** — orientacyjnie maksymalnie 3000 słów

---

## Hierarchia źródeł

Od najbardziej do najmniej wiarygodnych:

**1. Oficjalne strony rządowe** — zawsze preferowane, obowiązkowe dla danych z kategorii: gospodarka, wyniki wyborów, skład rządu
- Strony ministerstw (MSZ, MON, ministerstwa gospodarki/finansów)
- Oficjalne portale statystyczne (GUS, Eurostat, krajowe urzędy statystyczne)
- Oficjalne strony parlamentów i instytucji państwowych
- Oficjalne wyniki wyborów z państwowych komisji wyborczych

> ⚠️ **Gospodarka, wyniki wyborów i skład rządu** muszą pochodzić **wyłącznie z oficjalnych źródeł rządowych**. Dla tych kategorii niedopuszczalne jest używanie mediów, Wikipedii ani innych źródeł wtórnych.

**2. Uznane instytucje międzynarodowe**
- SIPRI (`sipri.org`) — wydatki zbrojeniowe, dane militarne
- World Bank (`data.worldbank.org`) — dane gospodarcze
- IMF (`imf.org`) — dane makroekonomiczne
- IISS (`iiss.org`) — dane militarne
- NATO (`nato.int`), UE (`europa.eu`) — dane dot. sojuszy
- IPU Parline (`data.ipu.org`) — dane parlamentarne
- WTO (`wto.org`) — dane handlowe
- IEA (`iea.org`), EIA (`eia.gov`) — dane energetyczne
- Observatory of Economic Complexity (`oec.world`) — dane eksport/import
- Freedom House (`freedomhouse.org`) — dane polityczne i praworządność
- ACLED (`acleddata.com`) — dane o konfliktach
- ICG (`crisisgroup.org`) — analizy konfliktów

**3. Uznane think tanki i encyklopedie** — dla kontekstu i analizy
- Britannica (`britannica.com`) — dane ogólne i historyczne
- Council on Foreign Relations (`cfr.org`)
- RAND Corporation, Chatham House, ECFR
- Reuters, BBC, AP — dla bieżących faktów

**4. Wikipedia** — dopuszczalna pod warunkiem weryfikacji, tylko dla kontekstu
- Używaj **wyłącznie angielskiej Wikipedii**
- Sprawdź czy artykuł ma sekcję `References` z przypisami
- Niedopuszczalna dla danych liczbowych, wyborów, składu rządu, danych gospodarczych
- Akceptowalna wyłącznie dla: historii, opisu ustroju, ogólnego kontekstu

### Czego unikać

- **CIA World Factbook** — serwis jest niedostępny i nieaktualizowany; nie używaj jako źródła
- Tabloidów i mediów o niskim standardzie dziennikarskim
- Nieoznaczonych blogów i stron bez redakcji
- Danych bez podanego roku
- Propagandowych źródeł państwowych krajów o niskiej wolności prasy

### Format cytowania źródeł w pliku MD

Na końcu każdej sekcji H2 dodaj blok źródeł (obowiązkowy):

```markdown
> **Źródła:** [World Bank](https://data.worldbank.org/...) (2024),
> [Oficjalna strona Sejmu RP](https://sejm.gov.pl) (2024)
```

---

## Proces tworzenia wpisu

### Tryb: tworzenie od zera (4 etapy)

Wpis tworzy się w czterech osobnych sesjach. Każda sesja dopisuje kolejne sekcje do tego samego pliku MD.

**Etap 1 — Front matter + Przegląd + Polityka wewnętrzna**
1. Zidentyfikuj podstawowe dane państwa (stolica, populacja, ustrój, kody ISO)
2. Sprawdź ogólne informacje w Britannica i oficjalnych stronach rządowych
3. Pobierz skład rządu i wyniki wyborów wyłącznie z oficjalnych stron rządowych i komisji wyborczych
4. Sprawdź dane parlamentarne w IPU Parline
5. Wygeneruj front matter oraz sekcje: Przegląd, Polityka wewnętrzna
6. Dodaj blok źródeł na końcu każdej sekcji H2

**Etap 2 — Gospodarka**
1. Pobierz dane makroekonomiczne z IMF World Economic Outlook lub World Bank — tylko oficjalne dane
2. Pobierz dane handlowe z WTO i Observatory of Economic Complexity
3. Pobierz dane energetyczne z IEA lub EIA
4. Przelicz wszystkie kwoty na USD
5. Wygeneruj sekcję Gospodarka ze wszystkimi podsekcjami
6. Dodaj blok źródeł

**Etap 3 — Siły Zbrojne + Służby Specjalne**
1. Pobierz dane o wydatkach z SIPRI Military Expenditure Database
2. Sprawdź liczebność i plany rozbudowy w IISS lub oficjalnych dokumentach MON
3. Dla służb — korzystaj wyłącznie z publicznie potwierdzonych informacji
4. Wygeneruj sekcje: Siły Zbrojne, Służby Specjalne
5. Dodaj blok źródeł

**Etap 4 — Polityka Zagraniczna + Relacje z Polską**
1. Sprawdź oficjalną doktrynę na stronie MSZ danego państwa
2. Zweryfikuj członkostwa w organizacjach na ich oficjalnych stronach
3. Sprawdź aktywne konflikty w ICG lub ACLED
4. Dla Relacji z Polską — sprawdź stronę polskiego MSZ i ambasady RP
5. Wygeneruj sekcje: Polityka Zagraniczna, Relacje z Polską
6. Dodaj blok źródeł

### Tryb: aktualizacja istniejącej sekcji

Gdy aktualizujesz konkretną sekcję istniejącego wpisu:
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
name: [Pełna oficjalna nazwa państwa]
flag: [Emoji flagi]
capital: [Stolica]
region: [Region geograficzny]
government: [Typ ustroju]
population: [Liczba z jednostką, np. "37,6 mln"]
iso2: [kod ISO 3166-1 alpha-2, np. PL]
iso3: [kod ISO 3166-1 alpha-3, np. POL]
alliances: [lista sojuszy]
tags: [lista tagów]
last_updated: [YYYY-MM]
---
```

Przykład:
```yaml
---
name: Polska
flag: 🇵🇱
capital: Warszawa
region: Europa Środkowa
government: Republika parlamentarna
population: 37,6 mln
iso2: PL
iso3: POL
alliances: [NATO, EU, V4]
tags: [NATO, EU, Flanka wschodnia, V4]
last_updated: 2025-03
---
```

---

## Sekcje — szczegółowe wytyczne

---

### `## Przegląd`

**Max 5 zdań.** Wprowadzenie do pozycji geopolitycznej państwa.
Odpowiada na pytanie: *czym to państwo jest strategicznie i dlaczego jest istotne z perspektywy Polski i NATO?*

- Napisz w formie ciągłego tekstu, nie listy
- Uwzględnij: położenie geograficzne i jego znaczenie strategiczne, kluczową rolę w regionie, jedno zdanie o aktualnych wyzwaniach
- Nie powielaj suchych danych z front matter

**Źródła:** Britannica, MSZ danego państwa

---

### `## Polityka wewnętrzna`

#### `### System polityczny i ustrój`
- Typ państwa (republika, monarchia, federacja)
- Konstytucja: rok uchwalenia, kluczowe zasady
- Podział władzy: ustawodawcza / wykonawcza / sądownicza
- System wyborczy
- **Źródła:** konstytucja państwa (oficjalny tekst), Britannica

#### `### Parlament`
- Nazwa, liczba izb, liczba miejsc, kadencja
- Aktualne partie i układ sił — **wyłącznie z oficjalnych wyników wyborczych** (z datą ostatnich wyborów)
- **Źródła:** oficjalna strona parlamentu, IPU Parline (`data.ipu.org`), państwowa komisja wyborcza

#### `### Rząd`
- Głowa rządu — imię, partia, od kiedy — **wyłącznie z oficjalnej strony rządu**
- Kluczowe ministerstwa: MSZ, MON, gospodarka
- **Źródła:** oficjalna strona rządu

#### `### Głowa państwa`
- Imię, od kiedy, uprawnienia (ceremonialne czy wykonawcze)
- **Źródła:** oficjalna strona prezydenta / dworu

---

### `## Gospodarka`

> ⚠️ Wszystkie dane gospodarcze muszą pochodzić z oficjalnych źródeł (IMF, World Bank, krajowe urzędy statystyczne). Wszystkie kwoty w USD.

#### `### Wskaźniki makroekonomiczne`
- PKB nominalny i PPP w USD (z rokiem)
- PKB per capita w USD, wzrost PKB (%), inflacja (%), bezrobocie (%), dług publiczny (% PKB)
- **Źródła:** IMF World Economic Outlook, World Bank Open Data, krajowy urząd statystyczny

#### `### Główne gałęzie gospodarki`
- Top 3–5 sektorów według udziału w PKB
- Dla każdego: krótki opis i znaczenie strategiczne
- **Źródła:** ministerstwo gospodarki, krajowy urząd statystyczny

#### `### Eksport`
- Główne towary (top 5–10), główni partnerzy (top 5 z % udziałem), wartość ogółem w USD
- **Źródła:** WTO (`wto.org`), Observatory of Economic Complexity (`oec.world`)

#### `### Import`
- Główne towary, główni partnerzy, strategiczne zależności importowe
- **Źródła:** jw.

#### `### Surowce energetyczne`
- Zasoby własne, zależność energetyczna, strategiczne projekty
- **Źródła:** IEA (`iea.org`), EIA (`eia.gov`)

#### `### Silne i słabe strony gospodarcze`
- Silne strony: 3–5 punktów
- Słabe strony: 3–5 punktów

---

### `## Siły Zbrojne`

#### `### Liczebność i struktura`
- Łączna liczba żołnierzy aktywnych i rezerwy
- Paramilitarne i inne formacje jeśli istotne
- Pobór / służba zawodowa / mieszana
- **Źródła:** IISS Military Balance, oficjalne MON

#### `### Budżet i wydatki obronne`
- Budżet w USD i % PKB, trend ostatnich 5 lat
- Odniesienie do normy NATO 2% PKB jeśli dotyczy
- **Źródła:** SIPRI Military Expenditure Database (`sipri.org/databases/milex`)

#### `### Plany rozbudowy i modernizacji`
- Ogłoszone programy rozbudowy sił zbrojnych
- Kluczowe zakupy i kontrakty zbrojeniowe
- Docelowa liczebność i zdolności
- **Źródła:** oficjalne MON, renomowane media obronne

#### `### Doktryna i strategia`
- Oficjalna doktryna obronna i priorytety strategiczne
- Udział w misjach zagranicznych (aktywne)
- **Źródła:** oficjalne dokumenty strategiczne (White Papers obronne), MON

---

### `## Służby Specjalne`

**Uwaga:** Opisuj wyłącznie informacje publicznie potwierdzone. Wyraźnie zaznaczaj co pochodzi z oficjalnych źródeł, a co z doniesień medialnych.

#### `### Wywiad zagraniczny`
- Nazwa agencji, rok założenia, podległość, oficjalne zadania
- Znane zdolności (tylko publicznie potwierdzone)
- **Źródła:** oficjalne strony agencji, IISS, renomowane media śledcze

#### `### Kontrwywiad i bezpieczeństwo wewnętrzne`
- Nazwa agencji, zakres działania, relacja z policją
- **Źródła:** jw.

#### `### SIGINT i cyberwywiad`
- Dedykowana agencja SIGINT jeśli istnieje
- Znane zdolności i programy (tylko publicznie potwierdzone)
- Uczestnictwo w sojuszach wywiadowczych (Five Eyes, SIGINT Seniors Europe itp.)
- **Źródła:** oficjalne oświadczenia, raporty parlamentarne, The Intercept, Bellingcat

#### `### Nadzór i kontrola demokratyczna`
- Kto nadzoruje służby, poziom transparentności
- **Źródła:** raporty Freedom House, oficjalne akty prawne

---

### `## Polityka Zagraniczna`

#### `### Priorytety i doktryna`
- Oficjalna doktryna (jeśli opublikowana), główne priorytety strategiczne
- **Źródła:** MSZ danego państwa, oficjalne strategie bezpieczeństwa narodowego

#### `### Sojusze i partnerstwa`
- Formalne sojusze wojskowe, kluczowe partnerstwa strategiczne
- Relacje bilateralne — top 5, format: `**[Państwo]** — [charakter relacji]`
- **Źródła:** MSZ, Council on Foreign Relations, ECFR

#### `### Interesy strategiczne`
- Geograficzne strefy wpływów, kluczowe interesy gospodarcze za granicą
- **Źródła:** RAND, Chatham House, ECFR

#### `### Członkostwo w organizacjach międzynarodowych`
- Lista istotnych organizacji, format: `**[Org]** — [rola, od kiedy]`
- **Źródła:** oficjalne strony organizacji, MSZ

#### `### Aktywne napięcia i konflikty`
- Bieżące spory: strony, geneza, aktualny status
- **Źródła:** ACLED (`acleddata.com`), ICG (`crisisgroup.org`)

---

### `## Relacje z Polską`

*(Sekcja pomijana dla wpisu o Polsce)*

#### `### Ogólna charakterystyka relacji`
- Sojusznik / partner / neutralny / rywal / przeciwnik
- Podstawa prawna relacji (traktaty, umowy bilateralne)
- **Źródła:** polski MSZ (`gov.pl/web/dyplomacja`), strona ambasady RP

#### `### Współpraca`
- Kluczowe obszary współpracy (wojskowa, gospodarcza, dyplomatyczna)
- Wspólne inicjatywy i projekty
- **Źródła:** jw.

#### `### Napięcia i punkty sporne`
- Istniejące lub historyczne napięcia, otwarte kwestie sporne
- **Źródła:** jw., renomowane media

#### `### Znaczenie dla Polski`
- Dlaczego to państwo jest istotne z perspektywy polskich interesów
- Ocena z perspektywy PL/NATO/UE

---

## Formatowanie — zasady ogólne

- **Nagłówki H2** (`##`) — główne sekcje, nie zmieniaj nazw (używane do generowania menu)
- **Nagłówki H3** (`###`) — podsekcje, można dostosowywać; dopuszczalne jest dodanie dodatkowych H3 spoza szablonu, jeśli istnieje wyraźne merytoryczne uzasadnienie (np. odrębna instytucja o kluczowym znaczeniu, specyficzna struktura danego państwa). Każdą dodatkową sekcję należy opatrzyć krótkim kursywnym uzasadnieniem bezpośrednio pod nagłówkiem, np. `*Sekcja dodana ze względu na...*`
- Dane liczbowe zawsze z rokiem: `PKB: 674 mld USD (2024)`
- Separator dziesiętny: przecinek (`6,2%`, nie `6.2%`)
- Wszystkie kwoty w USD — wyjątki tylko z uzasadnienia merytorycznego
- Daty: `12 marca 2025` lub `marzec 2025` lub `2025`
- Nazwy własne obcojęzyczne przy pierwszym użyciu: `Bundestag (parlament Niemiec)`
- Blok źródeł na końcu każdej sekcji H2 — obowiązkowy
- Przestarzałe dane oznaczaj flagą: `⚠️ dane z 2021`

---

## Szablon gotowy do wypełnienia

```markdown
---
name: [NAZWA]
flag: [EMOJI]
capital: [STOLICA]
region: [REGION]
government: [USTRÓJ]
population: [POPULACJA]
iso2: [KOD]
iso3: [KOD]
alliances: []
tags: []
last_updated: 2025-03
---

## Przegląd

[max 5 zdań]

> **Źródła:**

## Polityka wewnętrzna

### System polityczny i ustrój

### Parlament

### Rząd

### Głowa państwa

> **Źródła:**

## Gospodarka

### Wskaźniki makroekonomiczne

### Główne gałęzie gospodarki

### Eksport

### Import

### Surowce energetyczne

### Silne i słabe strony gospodarcze

> **Źródła:**

## Siły Zbrojne

### Liczebność i struktura

### Budżet i wydatki obronne

### Plany rozbudowy i modernizacji

### Doktryna i strategia

> **Źródła:**

## Służby Specjalne

### Wywiad zagraniczny

### Kontrwywiad i bezpieczeństwo wewnętrzne

### SIGINT i cyberwywiad

### Nadzór i kontrola demokratyczna

> **Źródła:**

## Polityka Zagraniczna

### Priorytety i doktryna

### Sojusze i partnerstwa

### Interesy strategiczne

### Członkostwo w organizacjach międzynarodowych

### Aktywne napięcia i konflikty

> **Źródła:**

## Relacje z Polską

### Ogólna charakterystyka relacji

### Współpraca

### Napięcia i punkty sporne

### Znaczenie dla Polski

> **Źródła:**
```
