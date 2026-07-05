# Plan wdrożenia SEO: kbrz77.pl (Fractional CTO & AI Integrator)

> Plan **wykonawczy** (co dokładnie zmienić, strona po stronie), oparty na realnym
> kodzie serwisu w `seo_plans/cto/kbrz77.cto/` i na pomiarze pozycji z rank-trackera
> (`summary_kbrz77.csv`, 25 fraz z `keywords_kbrz77.txt`, 8 konkurentów).
> Uzupełnia istniejący `kbrz77.cto/kbrz77_seo_potential_audit.md` (tamten = strategia/potencjał,
> ten = konkretne kroki i zmiany w plikach).
> Data: 2026-07-05.

---

## 0. Diagnoza — gdzie realnie jesteśmy

Pomiar (2026-07-04) na 25 śledzonych frazach:

| Stan | Liczba fraz | Wniosek |
|---|---|---|
| `#1` | **1** — `kamil brzuszczak cto` | jedyna fraza w TOP30 |
| `brak` (poza TOP30) | **24** | w tym własne frazy brandowe: `kamil brzuszczak`, `kbrz77` |

**To nie jest problem konkurencji — to problem STARTU.** Domena jest świeża
(sitemap `lastmod 2026-07-04`, świeży commit z favikoną/SEO), więc Google jej
jeszcze nie zaufał/nie zaindeksował. Dowód: nie rankujemy nawet na `kbrz77` i
`kamil brzuszczak` — a to frazy, na które nowa, poprawna strona wchodzi najszybciej.

### Realne błędy on-page (znalezione w kodzie, do naprawy od ręki)
1. **Identyczny `<h1>` na KAŻDEJ podstronie** — wszędzie „Kamil Brzuszczak Fractional CTO & AI Integrator”. To zabija trafność tematyczną podstron. Każda strona MUSI mieć własny H1 pod swoją frazę.
2. **Brak danych strukturalnych (JSON-LD) na podstronach** — schema jest tylko na `index.html` (1 blok). `fractional-cto`, `integracje-ai-automatyzacja`, `audyt-agencji` = 0.
3. **Cienka treść na podstronach usługowych**: `fractional-cto` ~882 sł., `integracje-ai` ~848 sł., `audyt-agencji` ~1087 sł. Na frazy komercyjne to za mało.
4. **Część fraz nie ma żadnej strony docelowej** (patrz mapowanie w §2) — nie da się rankować na frazę, pod którą nie ma treści.

Tytuły `<title>` i meta description są DOBRE — ich nie ruszamy (poza drobiazgami).

---

## 1. PRIORYTET 0 — Indeksacja i fundamenty (Tydzień 1) 🔴

Bez tego reszta planu nie zadziała. Kolejność wykonania:

1. **Google Search Console** — zweryfikuj `kbrz77.pl` (DNS/plik), wyślij `sitemap.xml`.
2. **URL Inspection → „Request indexing”** dla wszystkich 7 URL z sitemapy (home + 3 usługi + 3 projekty). Wymusza crawl, zamiast czekać tygodniami.
3. **Bing Webmaster Tools** — dodaj i wyślij sitemap (Bing = ~kilka % ruchu, ale indeksuje szybciej i zasila inne).
4. **Profil GBP/wizytówki**: Google Business Profile (jeśli usługi lokalne), LinkedIn z linkiem do `kbrz77.pl`, wpisy w katalogach branżowych — pierwsze sygnały do indeksacji brandu.
5. **Weryfikacja techniczna**: `robots.txt` OK (Allow: /). Sprawdź: brak `noindex` w `<head>` podstron, poprawny canonical (są ✔), czas ładowania i Core Web Vitals (PageSpeed Insights) dla `index.html`.

**Cel P0 (7–14 dni):** wejść do TOP10 na `kbrz77` i `kamil brzuszczak` (frazy brandowe — dla poprawnej strony to formalność po indeksacji). To pierwszy dowód, że Google „widzi” serwis.

---

## 2. Mapowanie fraza → strona docelowa (fundament)

Każda śledzona fraza musi mieć JEDNĄ, jednoznaczną stronę docelową. Obecny stan i akcja:

| Fraza | Strona docelowa | Status | Akcja |
|---|---|---|---|
| kamil brzuszczak, kbrz77 | `/` (home) | jest | indeksacja (P0) + Person schema |
| kamil brzuszczak cto | `/` | **#1** ✅ | utrzymać |
| fractional cto polska | `/fractional-cto.html` | jest, cienka | H1 + treść + Service schema |
| fractional cto co to | `/fractional-cto.html` (sekcja FAQ) | brak treści | dodać sekcję „Co to jest Fractional CTO?” + FAQPage |
| cto na godziny, dyrektor technologiczny na godziny | `/fractional-cto.html` | jest | wpleść w H2/treść |
| integrator ai polska | `/integracje-ai-automatyzacja.html` | jest | H1 + wzmocnić |
| konsulting technologiczny dla mśp, doradztwo it dla firm | `/` + **nowy hub `/uslugi.html`** | brak strony | utworzyć hub usług linkujący do 3 silosów |
| audyt agencji marketingowej / seo, kontrola agencji marketingowej | `/audyt-agencji.html` | jest | H1 + rozbudować |
| audyt kampanii google ads | `/audyt-agencji.html` (sekcja Ads) | słaba | dodać sekcję dot. Google Ads |
| jak sprawdzić efekty seo | **blog/poradnik** | brak | artykuł (patrz §5) |
| przepalanie budżetu marketingowego | `/audyt-agencji.html` (jest kalkulator) | jest | wzmocnić H2 + FAQ |
| automatyzacja procesów ai w firmie, wdrażanie ai w mśp, optymalizacja procesów biznesowych ai | `/integracje-ai-automatyzacja.html` | jest, cienka | rozbudować, H2 pod każdą frazę |
| baza wiedzy rag dla firm | `/integracje-ai-automatyzacja.html` (sekcja RAG) | wzmianka | dedykowana sekcja + case |
| automatyczny lead management | `/integracje-ai-automatyzacja.html` | wzmianka | sekcja + przykład |
| integracja systemów voip 3cx | **nowa `/projekty/voip-3cx.html`** | brak | case study |
| openclaw ai gateway | **nowa `/projekty/openclaw.html`** | brak | strona produktu (łatwe #1) |
| coip transkrypcja rozmów | **nowa `/projekty/coip.html`** | brak | strona produktu (łatwe #1) |
| docker w firmie mśp | **blog/poradnik** | brak | artykuł techniczny |

---

## 3. Konkretne zmiany on-page (strona po stronie)

### 3.1 `index.html` (home) — frazy brandowe + parasol usług
- **H1** zostaw brandowy, ale dodaj podtytuł z frazą: OK jest.
- **Dodaj/rozszerz JSON-LD**: `Person` (Kamil Brzuszczak, jobTitle „Fractional CTO”, `sameAs`: LinkedIn/GitHub) **oraz** `ProfessionalService` (nazwa, opis, `areaServed: Polska`, `knowsAbout: [Fractional CTO, integracja AI, audyt SEO]`). Dziś jest 1 blok — rozbić na te typy.
- **Sekcja „Usługi”** z 3 kafelkami linkującymi mocnym anchorem do silosów: „Fractional CTO na godziny”, „Integracja AI i automatyzacja”, „Audyt agencji SEO/Ads”.
- **Linkowanie wewnętrzne**: z home do każdej podstrony i do nowego `/uslugi.html`.

### 3.2 `fractional-cto.html` — „fractional cto polska / cto na godziny” 🔴 (najwyższy priorytet komercyjny)
- **H1 (ZMIENIĆ z brandowego na):** `Fractional CTO / Dyrektor Technologiczny na godziny dla MŚP`
- **H2 pod frazy** (dziś 5 H2 — dołożyć/nazwać):
  - „Co to jest Fractional CTO?” → łapie `fractional cto co to`
  - „Fractional CTO w Polsce — jak to działa” → `fractional cto polska`
  - „Kiedy potrzebujesz CTO na godziny” → `cto na godziny`
  - „Zakres współpracy i model rozliczeń”
  - „FAQ” (5–7 pytań)
- **Treść**: z ~882 → **1400–1800 słów** (proces współpracy, dla kogo, cennik/model godzinowy, 2–3 mini-case z linkiem do `/projekty/`).
- **Schema**: `Service` (serviceType „Fractional CTO”, provider Person) + `FAQPage` + `BreadcrumbList`.

### 3.3 `integracje-ai-automatyzacja.html` — klaster AI
- **H1 (ZMIENIĆ na):** `Integracja AI i automatyzacja procesów w firmie (MŚP)`
- **H2 pod konkretne frazy**: „Wdrażanie AI w MŚP”, „Automatyzacja procesów AI”, „Baza wiedzy RAG dla firm”, „Automatyczny lead management”, „Optymalizacja procesów biznesowych z AI”.
- Każda sekcja: problem → rozwiązanie → efekt/mierzalny wynik + link do case (`openclaw`, `coip`, `voip-3cx`).
- Treść ~848 → **1400+ słów**. Schema `Service` + `FAQPage` + `BreadcrumbList`.

### 3.4 `audyt-agencji.html` — klaster audytów
- **H1 (ZMIENIĆ na):** `Audyt agencji SEO i Google Ads — sprawdź, czy nie przepalasz budżetu`
- **H2**: „Audyt agencji SEO”, „Audyt kampanii Google Ads”, „Kontrola agencji marketingowej”, „Jak rozpoznać przepalanie budżetu”, „FAQ”.
- Kalkulator przepalania jest — opisać go tekstowo (Google indeksuje treść, nie JS): dodać akapit + nagłówek nad kalkulatorem.
- Treść ~1087 → **1500+ słów**. Schema `Service` + `FAQPage`.

### 3.5 Wspólne dla wszystkich podstron
- **Unikalny H1** = najważniejsza pojedyncza zmiana (patrz §0 pkt 1).
- **BreadcrumbList** (JSON-LD) na każdej podstronie.
- **Wewnętrzne linki kontekstowe** między silosami (np. z „audytu” link do „Fractional CTO” jako rozwiązania).
- **Alt-teksty** obrazów z frazami (screeny projektów).

---

## 4. Nowe strony do utworzenia (łatwe wygrane + domknięcie mapy fraz)

Priorytet wg łatwości rankowania:

1. 🟢 **`/projekty/openclaw.html`** → `openclaw ai gateway` — nazwa własna, **zero konkurencji → realne #1** po indeksacji. Opis produktu, do czego służy, screeny, CTA.
2. 🟢 **`/projekty/coip.html`** → `coip transkrypcja rozmów` — jw., nisza własna, łatwe TOP3.
3. 🟡 **`/projekty/voip-3cx.html`** → `integracja systemów voip 3cx` — case study wdrożenia 3CX.
4. 🟡 **`/uslugi.html`** — hub linkujący 3 silosy; cel: `konsulting technologiczny dla mśp`, `doradztwo it dla firm`, `integrator ai polska`.

Każda nowa strona: unikalny title/H1/meta, min. 600–900 sł., schema odpowiedniego typu, dodana do `sitemap.xml` + linkowanie z home i klastra.

---

## 5. Treść / E-E-A-T — blog (autorytet tematyczny, frazy informacyjne)

Frazy informacyjne najłatwiej złapać artykułem (i budują autorytet całej domeny). Utwórz `/blog/` i 4 startowe wpisy:

| Artykuł | Fraza docelowa | Link wewn. do |
|---|---|---|
| „Fractional CTO — co to jest i kiedy się opłaca (2026)” | fractional cto co to | `/fractional-cto.html` |
| „Jak sprawdzić efekty pracy agencji SEO — 7 metryk” | jak sprawdzić efekty seo | `/audyt-agencji.html` |
| „Docker w firmie MŚP — po co i jak zacząć” | docker w firmie mśp | `/integracje-ai-automatyzacja.html` |
| „RAG dla firm — baza wiedzy oparta o AI” | baza wiedzy rag dla firm | `/integracje-ai-automatyzacja.html` |

E-E-A-T: strona „O mnie” z realnym doświadczeniem, `Person` schema z `sameAs`, autorstwo wpisów (author = Kamil Brzuszczak), realne case studies z wynikami.

---

## 6. Off-page / autorytet (równolegle, od Tygodnia 2)

Nowa domena bez linków = brak autorytetu. Minimalny, bezpieczny zestaw:
- LinkedIn (profil + posty linkujące do artykułów), GitHub (README z linkiem), profile branżowe.
- 3–5 wartościowych wpisów gościnnych / cytatów eksperckich w mediach o MŚP/IT/AI.
- Katalogi lokalne/branżowe (NAP spójne).
- Wzmianki przy projektach (jeśli klienci publiczni).
- **Bez** kupowania masowych linków — przy tak młodej domenie to ryzyko.

---

## 7. Harmonogram (roadmap)

| Kiedy | Zadania | Cel |
|---|---|---|
| **Tydzień 1** | §1 Indeksacja (GSC/Bing/request indexing) + §3 unikalne H1 na 3 podstronach + schema Person/ProfessionalService na home | wejście na frazy brandowe |
| **Tydzień 2** | §4 strony openclaw + coip (łatwe #1) + Service/FAQ schema na 3 silosach + linkowanie wewnętrzne | pierwsze rankingi na frazy własne |
| **Tydzień 3–4** | rozbudowa treści 3 silosów do 1400–1800 sł. + `/uslugi.html` + `/projekty/voip-3cx.html` | wejście do TOP30 na frazy usługowe |
| **Miesiąc 2** | §5 blog (4 artykuły) + off-page start (LinkedIn/guest) | frazy informacyjne + autorytet |
| **Miesiąc 3** | link building, aktualizacja treści wg GSC (query), rozbudowa case studies | wzrost TOP30 → TOP10 na frazach komercyjnych |

---

## 8. KPI (cele 90 dni) — mierzone tym samym trackerem

Punkt startu: 1/25 fraz w TOP30. Cele:

- **30 dni:** frazy brandowe (`kbrz77`, `kamil brzuszczak`) w **TOP3**; `openclaw ai gateway`, `coip transkrypcja rozmów` w **TOP10**. Min. **6/25** fraz w TOP30.
- **60 dni:** `fractional cto polska`, `cto na godziny`, `audyt agencji seo` w **TOP30**; frazy własne w TOP3. Min. **12/25** w TOP30.
- **90 dni:** min. **16/25** fraz w TOP30, w tym **5+ na stronie 1**; utrzymane #1 na `kamil brzuszczak cto`.

Weryfikacja: `python3 rank_tracker_competitive.py keywords_kbrz77.txt` (co 1–2 tyg.) → podgląd w dashboardzie (raport „Kamil Brzuszczak (kbrz77.pl)”). GSC: rosnące „Impressions” i malejąca średnia pozycja.

---

### TL;DR — 5 rzeczy, które ruszają najwięcej i najszybciej
1. **Zaindeksować** (GSC + request indexing) — bez tego zero rankingów.
2. **Unikalne H1** na każdej podstronie (dziś wszędzie ten sam) — 30 min pracy, duży efekt trafności.
3. **Strony openclaw + coip** — nazwy własne = najłatwiejsze #1.
4. **Schema Service + FAQPage** na 3 silosach — rich results i trafność.
5. **Rozbudowa treści** 3 silosów do ~1500 sł. pod konkretne frazy z §2.
