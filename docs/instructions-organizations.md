# instructions-organization.md — Instrukcja tworzenia wpisu o organizacji międzynarodowej

## Cel dokumentu

Ten plik definiuje jak model językowy ma tworzyć i wypełniać wpis o organizacji międzynarodowej
w projekcie GeoAtlas. Każdy wpis to jeden plik Markdown w `src/content/organizations/`.

Dotyczy organizacji takich jak: ONZ, NATO, UE, OBWE, ASEAN, BRICS, SCO, CSTO, G7, G20 i podobnych.

---

## Zasady ogólne

### Perspektywa

Wszystkie treści są pisane **z punktu widzenia Polski, NATO i Unii Europejskiej — w tej kolejności.**

- przy spornej terminologii używaj tej przyjętej przez Polskę, NATO lub UE
- przy ocenie roli i skuteczności organizacji perspektywa polska/zachodnia jest domyślna
- przy opisie kontrowersji zachowuj neutralny ton analityczny, ale nie ukrywaj polskiej/zachodniej oceny

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
- **wszystkie kwoty podawaj w USD** — chyba że EUR lub inna waluta ma wyraźne uzasadnienie merytoryczne (np. budżet UE rozliczany w EUR)

Poprawnie:
```
Budżet: 3,2 mld USD (2024)
Składka USA: 674 mln USD (2024)
Łączny PKB członków: 41 bln USD (2023)
```

Niepoprawnie:
```
$3.2 billion
3.2B USD
approx. 3bn
```

### Limity długości

- **Przegląd** — maksymalnie 5 zdań
- **Profil organizacji** — maksymalnie 600 słów łącznie (sekcja rozszerzona ze względu na warunkowy charakter)
- **Każda pozostała podsekcja H3** — maksymalnie 150 słów
- **Każda pozostała sekcja H2** — maksymalnie 500 słów łącznie
- **Cały dokument** — orientacyjnie maksymalnie 3500 słów

---

## Hierarchia źródeł

Od najbardziej do najmniej wiarygodnych:

**1. Oficjalne strony organizacji** — zawsze preferowane, obowiązkowe dla danych strukturalnych
- Oficjalna strona organizacji (członkowie, organy, budżet, dokumenty założycielskie)
- Oficjalne traktaty i dokumenty prawne (teksty pierwotne)
- Oficjalne raporty i rezolucje organizacji

> ⚠️ **Członkowie, budżet, struktura organów i dokumenty założycielskie** muszą pochodzić **wyłącznie z oficjalnych źródeł organizacji**. Niedopuszczalne jest używanie Wikipedii ani mediów dla tych danych.

**2. Uznane instytucje międzynarodowe i think tanki**
- Council on Foreign Relations (`cfr.org`)
- Chatham House (`chathamhouse.org`)
- RAND Corporation (`rand.org`)
- ECFR (`ecfr.eu`) — szczególnie dla tematów europejskich
- Freedom House (`freedomhouse.org`)
- ICG (`crisisgroup.org`)
- SIPRI (`sipri.org`) — dla organizacji o charakterze militarnym
- IISS (`iiss.org`) — dla organizacji o charakterze militarnym
- World Bank (`data.worldbank.org`), IMF (`imf.org`) — dla danych gospodarczych
- Britannica (`britannica.com`) — dla danych historycznych

**3. Uznane media** — dla bieżących faktów i kontrowersji
- Reuters, BBC, AP, Financial Times

**4. Wikipedia** — dopuszczalna wyłącznie dla kontekstu historycznego
- Używaj **wyłącznie angielskiej Wikipedii**
- Sprawdź czy artykuł ma sekcję `References` z przypisami
- Niedopuszczalna dla danych liczbowych, struktury organów, składu członkowskiego

### Czego unikać

- **CIA World Factbook** — serwis jest niedostępny i nieaktualizowany; nie używaj jako źródła
- Tabloidów i mediów o niskim standardzie dziennikarskim
- Nieoznaczonych blogów i stron bez redakcji
- Danych bez podanego roku
- Propagandowych źródeł państwowych

### Format cytowania źródeł

Na końcu każdej sekcji H2 dodaj blok źródeł (obowiązkowy):

```markdown
> **Źródła:** [Oficjalna strona NATO](https://nato.int/...) (2025),
> [Council on Foreign Relations](https://cfr.org/...) (2024)
```

---

## Proces tworzenia wpisu

### Tryb: tworzenie od zera (4 etapy)

**Etap 1 — Front matter + Przegląd + Historia**
1. Zidentyfikuj podstawowe dane organizacji (typ, siedziba, rok założenia, liczba członków)
2. Pobierz dane z oficjalnej strony organizacji
3. Znajdź teksty traktatów założycielskich i dokumentów zmieniających
4. Wygeneruj front matter oraz sekcje: Przegląd, Historia
5. Dodaj blok źródeł

**Etap 2 — Członkowie + Przywództwo + Główne organy**
1. Pobierz aktualną listę członków z oficjalnej strony organizacji
2. Pobierz dane o kierownictwie wyłącznie z oficjalnej strony
3. Zidentyfikuj strukturę organów z oficjalnych dokumentów
4. Wygeneruj sekcje: Członkowie, Przywództwo, Główne organy
5. Dodaj blok źródeł

**Etap 3 — Profil organizacji + Podejmowanie decyzji + Możliwości**
1. Określ typ organizacji z front matter (`type`)
2. Dobierz zawartość sekcji Profil organizacji zgodnie z instrukcją warunkową poniżej
3. Sprawdź dokumenty proceduralne regulujące proces decyzyjny
4. Wygeneruj sekcje: Profil organizacji, Podejmowanie i wykonywanie decyzji, Możliwości
5. Dodaj blok źródeł

**Etap 4 — Kontrowersje + Relacje z Polską/NATO/UE**
1. Sprawdź udokumentowane kontrowersje w renomowanych mediach i think tankach
2. Sprawdź relacje z Polską na stronie polskiego MSZ
3. Zidentyfikuj oficjalne stanowiska NATO i UE wobec organizacji
4. Wygeneruj sekcje: Kontrowersje, Relacje z Polską, NATO i UE
5. Dodaj blok źródeł

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
name: [Pełna oficjalna nazwa organizacji]
name_short: [Skrót / akronim, np. NATO]
flag: [Emoji lub symbol]
type: [Typ organizacji — patrz lista typów poniżej]
founded: [Rok założenia]
headquarters: [Miasto, Państwo]
members_count: [Liczba członków jako liczba]
members_type: [np. "państwa", "państwa i terytoria"]
secretary_general: [Imię i nazwisko lub "nie dotyczy"]
tags: [lista tagów]
last_updated: [YYYY-MM]
---
```

### Lista typów organizacji (`type`)

Używaj jednego z poniższych typów. Jeśli organizacja nie pasuje do żadnego — zdefiniuj nowy typ i dodaj go do tej listy.

- `Sojusz militarny` — organizacje oparte na kolektywnej obronie (NATO, CSTO)
- `Organizacja gospodarcza` — strefy handlowe, organizacje regulujące handel i gospodarkę (WTO, BRICS, ASEAN)
- `Organizacja polityczna` — forum dyplomatyczne, organizacje bezpieczeństwa zbiorowego (ONZ, OBWE, G7, G20)
- `Unia polityczno-gospodarcza` — organizacje łączące głęboką integrację polityczną i gospodarczą (UE)
- `Unia związkowa` — dwustronna unia z aspiracjami do pełnej integracji państwowej (ZBIR); sekcja „Profil organizacji" zawiera podsekcje: **Model integracji związkowej**, **Asymetria strukturalna**, **Wymiar militarny** (jeśli dotyczy)

Przykład:
```yaml
---
name: Organizacja Traktatu Północnoatlantyckiego
name_short: NATO
flag: 🔷
type: Sojusz militarny
founded: 1949
headquarters: Bruksela, Belgia
members_count: 32
members_type: państwa
secretary_general: Mark Rutte
tags: [Militarna, Kolektywna obrona, Art. 5, Zachód]
last_updated: 2026-03
---
```

---

## Sekcje — szczegółowe wytyczne

---

### `## Przegląd`

**Max 5 zdań.** Wprowadzenie do organizacji, jej praktycznego celu i znaczenia geopolitycznego.
Odpowiada na pytania: *czym jest ta organizacja, do czego służy w praktyce i dlaczego jest istotna z perspektywy Polski i NATO/UE?*

- Napisz w formie ciągłego tekstu, nie listy
- Uwzględnij: typ organizacji, główny cel i funkcja w praktyce, zasięg geograficzny, znaczenie strategiczne
- Nie powielaj suchych danych z front matter

**Źródła:** oficjalna strona organizacji, Britannica

---

### `## Historia`

#### `### Powstanie i traktaty założycielskie`
- Kontekst historyczny powstania
- Data i miejsce podpisania traktatu założycielskiego, pierwotni sygnatariusze
- Główne zasady i cele zapisane w traktacie
- **Źródła:** tekst pierwotny traktatu (oficjalny), Britannica

#### `### Kluczowe traktaty i dokumenty zmieniające`
- Chronologiczna lista najważniejszych zmian traktatowych
- Format: `**[Rok]** — [Nazwa dokumentu] — [krótki opis zmiany]`
- **Źródła:** oficjalna strona organizacji, teksty traktatów

#### `### Kamienie milowe`
- 3–5 kluczowych momentów w historii (rozszerzenia, kryzysy, reformy)
- Format: `**[Rok]** — [wydarzenie]`
- **Źródła:** oficjalna strona organizacji, Britannica, CFR

---

### `## Członkowie`

> ⚠️ Dane wyłącznie z oficjalnej strony organizacji.

#### `### Aktualni członkowie`
- Łączna liczba członków (z datą)
- Lista członków — jeśli powyżej 20, grupuj regionalnie
- Data przystąpienia dla kluczowych lub ostatnio przyjętych członków
- **Źródła:** oficjalna strona organizacji

#### `### Obserwatorzy i partnerzy`
- Status obserwatora lub partnerstwa jeśli organizacja go przewiduje
- Kluczowe państwa z tym statusem
- **Źródła:** oficjalna strona organizacji

#### `### Rozszerzenia i wykluczenia`
- Historia kolejnych rozszerzeń (fale akcesji)
- Przypadki zawieszenia lub wykluczenia jeśli miały miejsce
- **Źródła:** oficjalna strona organizacji

---

### `## Przywództwo`

*(Applicable gdy organizacja ma wyznaczoną głowę lub sekretarza generalnego. Pomiń lub skróć dla organizacji o rotacyjnym lub rozproszonym przywództwie.)*

#### `### Obecne kierownictwo`
- Nazwa stanowiska, imię i nazwisko, państwo pochodzenia, od kiedy
- Sposób wyboru / mianowania, kadencja
- **Źródła:** oficjalna strona organizacji

#### `### Historia przywództwa`
- Lista poprzednich szefów z latami kadencji
- **Źródła:** oficjalna strona organizacji

---

### `## Główne organy`

#### `### Struktura instytucjonalna`
- Lista głównych organów z krótkim opisem roli
- Format: `**[Nazwa organu]** — [skład, funkcja, częstotliwość posiedzeń]`
- **Źródła:** oficjalna strona organizacji, traktat założycielski

#### `### Organy wykonawcze`
- Które organy mają realną władzę wykonawczą, jak są powoływane
- **Źródła:** oficjalna strona organizacji

#### `### Organy pomocnicze i agencje`
- Kluczowe agencje wyspecjalizowane o istotnym znaczeniu strategicznym
- **Źródła:** oficjalna strona organizacji

---

### `## Profil organizacji`

**Sekcja elastyczna — zawartość zależy od wartości pola `type` w front matter.**
Opisuje praktyczne funkcjonowanie organizacji w jej kluczowym obszarze działania.
Nie wchodź w nadmierny poziom szczegółowości (np. dokładna liczba jednostek sprzętu).

---

#### Jeśli `type: Sojusz militarny`

**`### Doktryna i zasady użycia siły`**
- Oficjalna doktryna obronna organizacji
- Zasady kolektywnej obrony (np. Artykuł 5 dla NATO, Artykuł 4 CSTO)
- Warunki uruchomienia mechanizmów obronnych
- **Źródła:** oficjalne dokumenty doktrynalne, traktat założycielski

**`### Struktura dowodzenia`**
- Ogólna struktura dowodzenia militarnego (bez szczegółów operacyjnych)
- Najważniejsze stanowiska dowódcze
- **Źródła:** oficjalna strona organizacji, IISS

**`### Zdolności i misje`**
- Ogólna charakterystyka zdolności militarnych (bez szczegółowych danych sprzętowych)
- Aktywne i historyczne misje oraz operacje
- Obszary geograficzne działania
- **Źródła:** oficjalna strona organizacji, IISS, SIPRI

**`### Wydatki obronne członków`**
- Łączne lub średnie wydatki obronne członków (% PKB)
- Normy i zobowiązania wydatkowe jeśli istnieją
- **Źródła:** SIPRI, oficjalna strona organizacji

---

#### Jeśli `type: Organizacja gospodarcza`

**`### Model i zasady gospodarcze`**
- Na czym polega współpraca gospodarcza (strefa wolnego handlu, unia celna, inne)
- Kluczowe zasady i mechanizmy gospodarcze
- **Źródła:** oficjalna strona organizacji, WTO jeśli dotyczy

**`### Potencjał gospodarczy członków`**
- Łączny PKB członków w USD (z rokiem)
- Udział w globalnym handlu lub PKB (%)
- **Źródła:** World Bank, IMF, oficjalna strona organizacji

**`### Kluczowe obszary współpracy`**
- Handel, inwestycje, surowce, technologie — zależnie co jest centralnym elementem
- Konkretne mechanizmy i umowy
- **Źródła:** oficjalna strona organizacji, WTO, World Bank

**`### Instrumenty gospodarcze`**
- Sankcje gospodarcze, cła, preferencje taryfowe jeśli organizacja je stosuje
- **Źródła:** oficjalna strona organizacji

---

#### Jeśli `type: Organizacja polityczna`

**`### Cel i mandat polityczny`**
- Oficjalny mandat i zakres działania
- Kluczowe obszary tematyczne (bezpieczeństwo, prawa człowieka, klimat itp.)
- **Źródła:** traktat założycielski, oficjalna strona organizacji

**`### Mechanizmy dyplomatyczne`**
- Główne narzędzia dyplomatyczne (rezolucje, misje, mediacje, sankcje)
- Skuteczność mechanizmów w praktyce
- **Źródła:** oficjalna strona organizacji, CFR, Chatham House

**`### Prawo weta i blokady decyzyjne`**
- Kto posiada prawo weta lub możliwość blokowania decyzji
- Znane przypadki użycia weta lub paraliżu decyzyjnego
- **Źródła:** oficjalna strona organizacji, CFR, RAND

---

#### Jeśli `type: Unia polityczno-gospodarcza`

**`### Model integracji`**
- Stopień integracji politycznej i gospodarczej
- Zakres przekazanych suwerenności przez państwa członkowskie
- **Źródła:** traktaty założycielskie, oficjalna strona organizacji

**`### Potencjał gospodarczy`**
- Łączny PKB w USD, udział w globalnym handlu
- Wspólna waluta jeśli istnieje, zasięg jej stosowania
- **Źródła:** Eurostat, World Bank, IMF

**`### Instrumenty polityczne`**
- Mechanizmy dyplomatyczne, sankcje, rozszerzenie jako instrument
- Wspólna polityka zagraniczna jeśli istnieje
- **Źródła:** oficjalna strona organizacji, ECFR

**`### Instrumenty gospodarcze`**
- Jednolity rynek, unia celna, wspólna polityka handlowa
- Fundusze i mechanizmy pomocowe
- **Źródła:** oficjalna strona organizacji, Eurostat

---

#### Jeśli `type` nie pasuje do żadnej kategorii

Zdefiniuj nowy typ w front matter i opisz profil organizacji w podsekcjach odpowiednich dla jej charakteru. Dodaj nowy typ do listy typów w tym dokumencie.

---

### `## Podejmowanie i wykonywanie decyzji`

#### `### Proces decyzyjny`
- Jak podejmowane są decyzje: konsensus / głosowanie / większość kwalifikowana
- Czy istnieje prawo weta i kto je posiada
- **Źródła:** traktat założycielski, regulamin organizacji

#### `### Wykonywanie decyzji`
- Jak decyzje są wdrażane, mechanizmy egzekwowania i sankcji
- Co organizacja może a czego nie może wymusić
- **Źródła:** oficjalna strona organizacji, CFR, Chatham House

#### `### Skuteczność i ograniczenia`
- Ocena realnej skuteczności mechanizmów decyzyjnych
- Znane przypadki blokady lub paraliżu
- **Źródła:** CFR, RAND, Chatham House, ECFR

---

### `## Możliwości`

#### `### Zasoby i budżet`
- Budżet organizacji w USD (z rokiem), główni płatnicy i ich udziały
- Zasoby ludzkie (personel, misje jeśli dotyczy)
- **Źródła:** oficjalna strona organizacji, raporty finansowe

#### `### Zdolności operacyjne`
- Co organizacja realnie może zrobić
- Przykłady zrealizowanych operacji lub działań
- **Źródła:** oficjalna strona organizacji

#### `### Instrumenty wpływu`
- Narzędzia dyplomatyczne, gospodarcze, militarne
- Mechanizmy warunkowania (np. warunkowość akcesji)
- **Źródła:** oficjalna strona organizacji, Chatham House, ECFR

---

### `## Kontrowersje`

*(Obowiązkowa jeśli udokumentowane kontrowersje istnieją. Pomiń jeśli brak.)*

#### `### Główne zarzuty i kryzysy`
- Udokumentowane kontrowersje, kryzysy wewnętrzne, zarzuty wobec organizacji
- Dla każdej: opis, strony sporu, aktualny status — pisz neutralnie
- **Źródła:** Reuters, BBC, FT, raporty think tanków

#### `### Nierozwiązane napięcia strukturalne`
- Systemowe napięcia wynikające ze struktury lub składu organizacji
- **Źródła:** CFR, RAND, Chatham House, ECFR

---

### `## Relacje z Polską, NATO i UE`

*(Perspektywa PL/NATO/UE — oceniamy organizację z naszego punktu widzenia)*

#### `### Relacje z Polską`
- Czy Polska jest członkiem — jeśli tak, od kiedy i jaka jest jej rola
- Jeśli nie — oficjalne stanowisko Polski wobec organizacji
- Kluczowe obszary współpracy lub napięć
- **Źródła:** polski MSZ (`gov.pl/web/dyplomacja`), oficjalne oświadczenia rządu RP

#### `### Relacje z NATO`
- Oficjalne stanowisko NATO, współpraca lub napięcia
- Czy organizacja jest postrzegana jako komplementarna czy konkurencyjna wobec NATO
- **Źródła:** oficjalna strona NATO, dokumenty strategiczne NATO

#### `### Relacje z Unią Europejską`
- Oficjalne stanowisko UE, formalne powiązania i umowy o współpracy
- **Źródła:** `europa.eu`, ECFR

---

## Formatowanie — zasady ogólne

- **Nagłówki H2** (`##`) — główne sekcje, nie zmieniaj nazw
- **Nagłówki H3** (`###`) — podsekcje, można dostosowywać; dopuszczalne jest dodanie dodatkowych H3 spoza szablonu, jeśli istnieje wyraźne merytoryczne uzasadnienie (np. odrębny organ o kluczowym znaczeniu, specyficzna struktura danej organizacji). Każdą dodatkową sekcję należy opatrzyć krótkim kursywnym uzasadnieniem bezpośrednio pod nagłówkiem, np. `*Sekcja dodana ze względu na...*`
- Dane liczbowe zawsze z rokiem: `Budżet: 3,2 mld USD (2024)`
- Separator dziesiętny: przecinek (`6,2%`, nie `6.2%`)
- Wszystkie kwoty w USD — wyjątki tylko z uzasadnienia merytorycznego
- Daty: `4 kwietnia 1949` lub `kwiecień 1949` lub `1949`
- Nazwy własne przy pierwszym użyciu z rozwinięciem: `Rada Północnoatlantycka (NAC)`
- Blok źródeł na końcu każdej sekcji H2 — obowiązkowy
- Przestarzałe dane oznaczaj flagą: `⚠️ dane z 2021`

---

## Szablon gotowy do wypełnienia

```markdown
---
name: [PEŁNA NAZWA]
name_short: [SKRÓT]
flag: [EMOJI]
type: [TYP]
founded: [ROK]
headquarters: [MIASTO, PAŃSTWO]
members_count: [LICZBA]
members_type: państwa
secretary_general: [IMIĘ NAZWISKO lub "nie dotyczy"]
tags: []
last_updated: 2026-03
---

## Przegląd

[max 5 zdań — czym jest, do czego służy w praktyce, dlaczego istotna]

> **Źródła:**

## Historia

### Powstanie i traktaty założycielskie

### Kluczowe traktaty i dokumenty zmieniające

### Kamienie milowe

> **Źródła:**

## Członkowie

### Aktualni członkowie

### Obserwatorzy i partnerzy

### Rozszerzenia i wykluczenia

> **Źródła:**

## Przywództwo

### Obecne kierownictwo

### Historia przywództwa

> **Źródła:**

## Główne organy

### Struktura instytucjonalna

### Organy wykonawcze

### Organy pomocnicze i agencje

> **Źródła:**

## Profil organizacji

[podsekcje dobrane zgodnie z `type` — patrz instrukcja warunkowa powyżej]

> **Źródła:**

## Podejmowanie i wykonywanie decyzji

### Proces decyzyjny

### Wykonywanie decyzji

### Skuteczność i ograniczenia

> **Źródła:**

## Możliwości

### Zasoby i budżet

### Zdolności operacyjne

### Instrumenty wpływu

> **Źródła:**

## Kontrowersje

### Główne zarzuty i kryzysy

### Nierozwiązane napięcia strukturalne

> **Źródła:**

## Relacje z Polską, NATO i UE

### Relacje z Polską

### Relacje z NATO

### Relacje z Unią Europejską

> **Źródła:**
```
