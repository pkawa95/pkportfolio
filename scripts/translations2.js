const translationsUpdates = {
  pl: {
    // Nagłówki i meta
    updates_title: "Ostatnie aktualizacje — Piotr Kawa",
    updates_h1: "Ostatnie aktualizacje",
    updates_lead: "Najświeższe zmiany i poprawki wdrożone na stronie.",
    updates_list_title: "Lista aktualizacji",
    updates_meta_description: "Lista ostatnich aktualizacji strony i portfolio Piotra Kawy.",
    updates_og_title: "Ostatnie aktualizacje — Piotr Kawa",
    updates_og_description: "Zobacz co nowego na stronie — lista zmian i usprawnień.",
    updates_twitter_title: "Ostatnie aktualizacje — Piotr Kawa",
    updates_twitter_description: "Lista najnowszych zmian i poprawek na stronie.",

    //2025-08-27b (TIDIO)
     updates_item_2025_08_27b_date: "2025-08-27",
  updates_item_2025_08_27b_text: "Dodano obsługę Tidio chat na całości strony",
  updates_item_2025_08_27b_title: "Integracja Tidio na całej stronie",
  updates_item_2025_08_27b_desc:
    "Wdrożyłem lekki widget Tidio na wszystkich podstronach, aby ułatwić szybki kontakt. Skrypt ładuje się asynchronicznie i nie blokuje renderowania, a widget respektuje motyw jasny/ciemny i może być zwinięty w dowolnym momencie. Dzięki temu odwiedzający mogą napisać bez przełączania zakładek, a odpowiedź trafia do nich szybciej.",

    // 2025-08-26c (UI refresh + CSS refactor)
    updates_item_2025_08_26c_date: "2025-08-26",
    updates_item_2025_08_26c_text: "Odświeżenie warstwy wizualnej, pełny dark mode, usprawnienia CSS.",
    updates_item_2025_08_26c_title: "Aurora / Glass Theme v2 + refaktor CSS",
    updates_item_2025_08_26c_desc:
      "Zaktualizowano wizualną część portfolio: nowy motyw Aurora/Glass z neonowymi akcentami i lepszą głębią, przy zachowaniu dotychczasowego układu treści na stronie głównej. Ciemny motyw został dopracowany w 100% – tła, treści, ikonografia i nawigacja są spójne i czytelne.",
    updates_item_2025_08_26c_bullets: [
      "<strong>Dark mode:</strong> biała typografia w treści, jasny pasek „Ostatnie aktualizacje”, białe ikony GitHub w menu i stopce.",
      "<strong>Nawigacja (mobile):</strong> dropdown/hamburger ma nieprzezroczyste szkło — koniec z „zlewaniem” tekstu.",
      "<strong>Formularze:</strong> pole wiadomości bez ręcznego skalowania (<code>resize: none</code>), lepsze focus-ringi.",
      "<strong>Kafelki i karty:</strong> delikatne szkło, gradientowe obramowania, spójne cienie i hover.",
      "<strong>Tokeny kolorów:</strong> zmienne CSS dla jasnego/ciemnego motywu, mniej duplikacji stylów.",
      "<strong>Wydajność & a11y:</strong> wsparcie <code>prefers-reduced-motion</code>, wyższy kontrast, poprawione <code>:focus-visible</code>."
    ],

    // 2025-08-27a (Mobile nav + update bar fix)
    updates_item_2025_08_27a_date: "2025-08-27",
    updates_item_2025_08_27a_text: "Aktualizacja menu, naprawa wyświetlania paska aktualizacji na wersji mobilnej",
    updates_item_2025_08_27a_title: "Usprawnienia nawigacji i pasek aktualizacji (mobile)",
    updates_item_2025_08_27a_desc:
    "Dopracowano zachowanie mobilnego menu (lepsza widoczność, spójne stany rozwinięcia) oraz naprawiono rendering paska aktualizacji na małych ekranach. Efekt: bardziej przewidywalna nawigacja i czytelny changelog w trybie mobilnym.",
    labeldata_in: "tłumaczenie",

    // 2025-08-26b
    updates_item_2025_08_26b_date: "2025-08-26",
    updates_item_2025_08_26b_text: "Dodano stronę z listą aktualizacji (updates.html).",
    updates_item_2025_08_26b_title: "Nowa strona „Aktualizacje”",
    updates_item_2025_08_26b_desc:
      "Stworzyłem dedykowaną podstronę updates.html, która w przejrzysty sposób wyświetla historię zmian i nowości na stronie. Każda zmiana ma teraz swój opis, datę oraz szczegóły ukryte w rozwijanych kartach akordeonu. Dzięki temu odwiedzający mogą szybko sprawdzić, co zostało dodane i kiedy, a całość jest spójna z resztą portfolio (menu, stopka, styl dark/light).",

    // 2025-08-26
    updates_item_2025_08_26_date: "2025-08-26",
    updates_item_2025_08_26_text: "Dostosowano widoczność i animację paska aktualizacji.",
    updates_item_2025_08_26_title: "Poprawki UX paska aktualizacji",
    updates_item_2025_08_26_desc:
      "Wyostrzone kontrasty, płynniejsze wejścia/wyjścia, lepsze standardy ARIA oraz pauzowanie animacji przy najechaniu kursorem.",

    // 2025-08-22
    updates_item_2025_08_22_date: "2025-08-22",
    updates_item_2025_08_22_text: "Dodano pasek aktualizacji pod menu.",
    updates_item_2025_08_22_title: "Nowy pasek aktualizacji",
    updates_item_2025_08_22_desc:
      "Krótki komunikat nad sekcjami, z automatycznym przewijaniem przy długich tekstach (marquee) i wsparciem dla języków PL/EN.",

    // 2025-08-14a
    updates_item_2025_08_14a_date: "2025-08-14",
    updates_item_2025_08_14a_text: "Dodano sekcję „O mnie” z informacjami osobistymi.",
    updates_item_2025_08_14a_title: "Nowa sekcja „O mnie”",
    updates_item_2025_08_14a_desc:
      "Zawiera skrót doświadczenia, zainteresowania, zdjęcie oraz szybkie linki. Zoptymalizowana pod mobile i tryb ciemny.",

    // 2025-08-14b
    updates_item_2025_08_14b_date: "2025-08-14",
    updates_item_2025_08_14b_text: "Rozpoczęto prace nad „skraperem Instagrama” do sekcji „O mnie” (Python).",
    updates_item_2025_08_14b_title: "Automatyczne zaciąganie treści",
    updates_item_2025_08_14b_desc:
      "Prototyp scrapera w Pythonie z walidacją, cache i harmonogramem pobierania. Docelowo mini-galeria z najnowszymi zdjęciami.",

    // Buttons
    read_more_button: "Przeczytaj szczegóły",
    read_less_button: "Zwiń szczegóły",

    roadmap_h2: "Przyszłe aktualizacje",

    // IG Scraper
    roadmap_item_ig_eta: "wrzesień 2025",
    roadmap_item_ig_text: "Dodanie scrapera Instagrama (Python) do automatycznego ładowania postów.",
    roadmap_item_ig_title: "Scraper Instagram (Python)",
    roadmap_item_ig_desc:
      "Własne narzędzie do pobierania i cache’owania najnowszych postów, z walidacją, harmonogramem i mechanizmem awaryjnym. Zasilanie mini-galerii w sekcji „O mnie”.",
    roadmap_item_ig_b1: "<strong>Technologie:</strong> Python, requests/HTTPX, harmonogram (cron), cache.",
    roadmap_item_ig_b2: "<strong>Funkcje:</strong> walidacja odpowiedzi, fallback, limit zapytań.",
    roadmap_item_ig_b3: "<strong>Cel:</strong> automatyczna, świeża zawartość bez ręcznej ingerencji.",

    // Animacje + sekcje projektów
    roadmap_item_anim_eta: "wrzesień 2025",
    roadmap_item_anim_text: "Ulepszenie animacji globalnych oraz rozwinięcie sekcji projektów.",
    roadmap_item_anim_title: "Animacje i sekcje projektów",
    roadmap_item_anim_desc:
      "Dalsza praca nad płynnością wejść/wyjść, harmonogramem opóźnień i scenami „aurora”. Rozbudowa kart projektów o dodatkowe metadane, filtry i sortowanie.",
    roadmap_item_anim_b1: "<strong>Ruch:</strong> fine-tuning, obsługa <code>prefers-reduced-motion</code>.",
    roadmap_item_anim_b2: "<strong>Kartoteka:</strong> tagi, filtry, małe KPI (gwiazdki, stack, status).",
    roadmap_item_anim_b3: "<strong>Cel:</strong> szybsza nawigacja po projektach i lepszy UX.",
   
    // Roadmap o mnie
    updates_item_2025_08_27c_date: "2025-08-27",
    updates_item_2025_08_27c_text: "Ukończenie sekcji „O mnie”",
    updates_item_2025_08_27c_title: "Sekcja „O mnie” — finalna wersja",
    updates_item_2025_08_27c_desc:
    "Zakończyłem prace nad sekcją „O mnie”: odświeżone bio, klarowna narracja i lepsza struktura treści. Zdjęcie zostało zoptymalizowane pod szybkie ładowanie, a układ jest w pełni responsywny i dostępny (nagłówki, alt-teksty, focus-stany). Dołożyłem szybkie CTA i linki do profili — wszystko spójne z motywem jasnym/ciemnym.",
    updates_item_2025_08_27c_b1: "<strong>Bio:</strong> zwięzłe, konkretne i łatwe do skanowania.",
    updates_item_2025_08_27c_b2: "<strong>Media:</strong> zoptymalizowane zdjęcie + poprawne <code>alt</code>.",
    updates_item_2025_08_27c_b3: "<strong>UX:</strong> wyraźne CTA i linki do profili społecznościowych.",
    chip_content: "Treść",

    // Cookies policy
    roadmap_item_cookies_eta: "wrzesień 2025",
    roadmap_item_cookies_text: "Wprowadzenie polityki cookies.",
    roadmap_item_cookies_title: "Polityka cookies",
    roadmap_item_cookies_desc:
      "Dodanie klarownej polityki cookies i banera zgód zgodnego z RODO. Precyzyjne kategorie, pamiętanie wyboru i łatwa zmiana preferencji.",
    roadmap_item_cookies_b1: "<strong>Transparentność:</strong> jasny opis, cele i retencja.",
    roadmap_item_cookies_b2: "<strong>Kontrola:</strong> granularne zgody, opt-in zamiast opt-out.",
    roadmap_item_cookies_b3: "<strong>Cel:</strong> zgodność prawna i lepsze doświadczenie użytkownika.",

     // Menu 
    menu_logo: "PK Portfolio",
    home: "Strona główna",
    projects: "Projekty",
    about: "O mnie",
    docs: "Dokumenty",
    contact: "Kontakt",
    menu_update: "Aktualizacje",

    /* Chips */
    chip_plan: "Plan",
    chip_python: "Python",
    chip_automation: "Automatyzacja",
    chip_ui: "UI",
    chip_animation: "Animacje",
    chip_api: "API",
    chip_security: "Security",
    chip_compliance: "Compliance",
    chip_privacy: "Prywatność",

    changelog: {
      label: "Ostatnie aktualizacje",
      lines: [
        "📅 [2025-08-27] 🛠️ Aktualizacja menu, naprawa wyświetlania paska aktualizacji na wersji mobilnej.",
        "📅 [2025-08-27] 💬 Dodano obsługę Tidio chat na całości strony.",
        "📅 [2025-08-26] ✨ Odświeżenie UI (Aurora/Glass), pełny dark mode i refaktor CSS.",
        "📅 [2025-08-26] 👀 Poprawiono widoczność i animacje paska aktualizacji.",
        "📅 [2025-08-22] 🆕 Dodano pasek aktualizacji pod menu.",
        "📅 [2025-08-14] 👤 Dodano sekcję 'O mnie' z informacjami o mnie.",
        "📅 [2025-08-14] 🤖 Rozpoczęto pracę nad 'scraperem Instagrama' do sekcji o mnie (Python)."
      ]
    }
  },

  en: {
    // Headers & meta
    updates_title: "Latest updates — Piotr Kawa",
    updates_h1: "Latest updates",
    updates_lead: "The freshest changes and improvements introduced on the site.",
    updates_list_title: "List of updates",
    updates_meta_description: "List of the latest updates to Piotr Kawa’s website and portfolio.",
    updates_og_title: "Latest updates — Piotr Kawa",
    updates_og_description: "See what’s new on the site — full list of changes and improvements.",
    updates_twitter_title: "Latest updates — Piotr Kawa",
    updates_twitter_description: "List of the most recent changes and fixes on the site.",

    updates_item_2025_08_27c_date: "2025-08-27",
  updates_item_2025_08_27c_text: "Completed the “About Me” section",
  updates_item_2025_08_27c_title: "“About Me” — final version",
  updates_item_2025_08_27c_desc:
    "Finished the About Me section: refreshed bio, clear narrative and improved content structure. The photo is optimized for fast loading, and the layout is fully responsive and accessible (headings, alt text, focus states). Added quick CTAs and profile links — all consistent with light/dark mode.",
  updates_item_2025_08_27c_b1: "<strong>Bio:</strong> concise, focused and easy to scan.",
  updates_item_2025_08_27c_b2: "<strong>Media:</strong> optimized photo + proper <code>alt</code>.",
  updates_item_2025_08_27c_b3: "<strong>UX:</strong> clear CTAs and links to social profiles.",
  chip_content: "Content",
    // 2025-08-27a (Mobile nav + update bar fix)
    updates_item_2025_08_27a_date: "2025-08-27",
    updates_item_2025_08_27a_text: "Menu update, fix for update-bar display on mobile",
    updates_item_2025_08_27a_title: "Navigation improvements & update bar (mobile)",
    updates_item_2025_08_27a_desc:
    "Refined the mobile menu behavior (better visibility, consistent expand/collapse states) and fixed the update bar rendering on small screens. Result: more predictable navigation and a clear changelog on mobile.",
    labeldata_in: "translation",

    // 2025-08-26c (UI refresh + CSS refactor)
    updates_item_2025_08_26c_date: "2025-08-26",
    updates_item_2025_08_26c_text: "Visual refresh, full dark mode, CSS improvements.",
    updates_item_2025_08_26c_title: "Aurora / Glass Theme v2 + CSS refactor",
    updates_item_2025_08_26c_desc:
      "Refreshed the visual layer: a new Aurora/Glass theme with neon accents and more depth while preserving the existing content layout on the home page. Dark mode is now 100% complete — backgrounds, copy, iconography and navigation are consistent and readable.",
    updates_item_2025_08_26c_bullets: [
      "<strong>Dark mode:</strong> white typography for content, a light “Recent updates” bar, white GitHub icons in the header and footer.",
      "<strong>Navigation (mobile):</strong> dropdown/hamburger uses non-transparent glass — no more blended text.",
      "<strong>Forms:</strong> message textarea can’t be manually resized (<code>resize: none</code>), improved focus rings.",
      "<strong>Tiles & cards:</strong> subtle glass, gradient borders, consistent shadows and hover.",
      "<strong>Color tokens:</strong> CSS variables for light/dark themes, less duplicated styles.",
      "<strong>Performance & a11y:</strong> <code>prefers-reduced-motion</code> support, higher contrast, improved <code>:focus-visible</code>."
    ],

    // 2025-08-26b
    updates_item_2025_08_26b_date: "2025-08-26",
    updates_item_2025_08_26b_text: "Added a dedicated updates page (updates.html).",
    updates_item_2025_08_26b_title: "New “Updates” page",
    updates_item_2025_08_26b_desc:
      "Created a dedicated updates.html page to clearly display the history of changes and new features on the site. Each entry now includes its own date, title and details hidden in accordion cards. This makes it easy for visitors to see what was added and when, all styled consistently with the rest of the portfolio (menu, footer, dark/light mode).",

    // 2025-08-26
    updates_item_2025_08_26_date: "2025-08-26",
    updates_item_2025_08_26_text: "Adjusted update bar visibility and animation.",
    updates_item_2025_08_26_title: "Update bar UX improvements",
    updates_item_2025_08_26_desc:
      "Sharper contrast, smoother fade-ins/outs, improved ARIA semantics and paused animation on hover.",

    // 2025-08-22
    updates_item_2025_08_22_date: "2025-08-22",
    updates_item_2025_08_22_text: "Added an update bar below the menu.",
    updates_item_2025_08_22_title: "New update bar",
    updates_item_2025_08_22_desc:
      "A short info bar above sections, with automatic marquee scroll for longer texts and PL/EN i18n support.",

    // 2025-08-14a
    updates_item_2025_08_14a_date: "2025-08-14",
    updates_item_2025_08_14a_text: "Added an 'About Me' section with personal information.",
    updates_item_2025_08_14a_title: "New 'About Me' section",
    updates_item_2025_08_14a_desc:
      "Includes a summary of experience, interests, photo and quick links. Optimized for mobile and dark mode.",

    // 2025-08-14b
    updates_item_2025_08_14b_date: "2025-08-14",
    updates_item_2025_08_14b_text: "Started working on an 'Instagram scraper' for the About Me section (Python).",
    updates_item_2025_08_14b_title: "Automatic content fetching",
    updates_item_2025_08_14b_desc:
      "Prototype of a Python scraper with validation, caching and scheduled fetching. Eventually to power a mini-gallery with the latest photos.",

    // Buttons
    read_more_button: "Read more",
    read_less_button: "Hide details",

        roadmap_h2: "Future updates",

    // IG Scraper
    roadmap_item_ig_eta: "September 2025",
    roadmap_item_ig_text: "Add an Instagram scraper (Python) for automatic post loading.",
    roadmap_item_ig_title: "Instagram Scraper (Python)",
    roadmap_item_ig_desc:
      "A custom tool to fetch and cache the latest posts with validation, scheduling and failover. It will power the mini-gallery in the About section.",
    roadmap_item_ig_b1: "<strong>Tech:</strong> Python, requests/HTTPX, scheduler (cron), cache.",
    roadmap_item_ig_b2: "<strong>Features:</strong> response validation, fallback, request limits.",
    roadmap_item_ig_b3: "<strong>Goal:</strong> automatic, fresh content without manual steps.",

    // Animations + projects
    roadmap_item_anim_eta: "September 2025",
    roadmap_item_anim_text: "Improve global animations and expand project sections.",
    roadmap_item_anim_title: "Animations & project sections",
    roadmap_item_anim_desc:
      "More polish for entrances/exits, delay choreography and aurora scenes. Expand project cards with metadata, filters and sorting.",
    roadmap_item_anim_b1: "<strong>Motion:</strong> fine-tuning, <code>prefers-reduced-motion</code> support.",
    roadmap_item_anim_b2: "<strong>Library:</strong> tags, filters, small KPIs (stars, stack, status).",
    roadmap_item_anim_b3: "<strong>Goal:</strong> faster project navigation and better UX.",

    // External contact APIs
    roadmap_item_api_eta: "September 2025",
    roadmap_item_api_text: "Hook external APIs for instant contact.",
    roadmap_item_api_title: "Contact integrations",
    roadmap_item_api_desc:
      "Wire simple endpoints for instant contact (e.g., webhooks, email gateway). Focus on security and rate limiting.",
    roadmap_item_api_b1: "<strong>Security:</strong> tokens, limits, event logging.",
    roadmap_item_api_b2: "<strong>Convenience:</strong> one-click contact with fallback.",
    roadmap_item_api_b3: "<strong>Goal:</strong> shorter path to reach out and fewer steps.",

    // Cookies policy
    roadmap_item_cookies_eta: "September 2025",
    roadmap_item_cookies_text: "Introduce a cookies policy.",
    roadmap_item_cookies_title: "Cookies policy",
    roadmap_item_cookies_desc:
      "Add a clear cookies policy and GDPR-compliant consent banner. Precise categories, remembered choice and easy preference changes.",
    roadmap_item_cookies_b1: "<strong>Transparency:</strong> clear purpose and retention.",
    roadmap_item_cookies_b2: "<strong>Control:</strong> granular consents, opt-in over opt-out.",
    roadmap_item_cookies_b3: "<strong>Goal:</strong> legal compliance and better user experience.",
    
    // Menu 
    home: "Home",
    projects: "Projects",
    about: "About",
    docs: "Documents",
    contact: "Contact",
    menu_update: "Updates",

    /* Chips */
    chip_plan: "Plan",
    chip_python: "Python",
    chip_automation: "Automation",
    chip_ui: "UI",
    chip_animation: "Animations",
    chip_api: "API",
    chip_security: "Security",
    chip_compliance: "Compliance",
    chip_privacy: "Privacy",

    changelog: {
      label: "Recent updates",
      lines: [
        "📅 [2025-08-27] 🛠️ Menu update, fix for update bar display on mobile.",
        "📅 [2025-08-27] 💬 Added Tidio chat support across the entire site.",
        "📅 [2025-08-26] ✨ Visual refresh (Aurora/Glass), full dark mode and CSS refactor.",
        "📅 [2025-08-26] 👀 Adjusted recent updates visibility and animation.",
        "📅 [2025-08-22] 🆕 Added an update bar below the menu.",
        "📅 [2025-08-14] 👤 Added the 'About Me' section with personal information.",
        "📅 [2025-08-14] 🤖 Started working on an 'Instagram scraper' for the About Me section (Python)."
      ]
    }
  }
};

// Merge with global translations and notify i18n system
window.translations = Object.assign({}, window.translations, translationsUpdates);
document.dispatchEvent(new Event("languageChanged"));
