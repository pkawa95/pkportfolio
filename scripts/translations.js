const translations = {
  pl: {
    title: "Piotr Kawa - Portfolio",
    home: "Strona główna",
    projects: "Projekty",
    about: "O mnie",
    docs: "Dokumenty",
    contact: "Kontakt",
    intro_h1: "Portfolio – Piotr Kawa",
    intro_p1:
      "<strong>Piotr Kawa</strong> – student drugiego roku Informatyki o specjalności Programowanie, ze średnią ocen 5.0. Absolwent technikum informatycznego w specjalizacji sieci komputerowe, z wynikiem 100% z egzaminów zawodowych w części praktycznej.",
    intro_p2:
      "W pracy technicznej łączone są solidne podstawy akademickie z praktycznymi umiejętnościami wyniesionymi z samodzielnych projektów programistycznych oraz doświadczeniem w zakresie urządzeń elektronicznych i nowoczesnych technologii IT. Zakres zainteresowań obejmuje m.in. inżynierię oprogramowania, systemy IoT, integracje z API, automatyzację procesów, aplikacje desktopowe, systemy WebDAV, a także fotografię i technologię dronów.",
    intro_p3: "Realizowane projekty obejmują szerokie spektrum środowisk i technologii, w tym:",
    intro_p4:
      "W portfolio znajdują się m.in. aplikacje desktopowe (Python, C#, WPF), aplikacje progresywne, panele do sterowania inteligentnym oświetleniem, narzędzia CLI oraz rozwiązania działające w trybie WebDAV. Każdy projekt został zaprojektowany z naciskiem na jakość kodu, stabilność działania i estetykę interfejsu użytkownika.",
    intro_note:
      "Witryna dostępna jest w języku polskim i angielskim oraz oferuje możliwość przełączenia pomiędzy trybem jasnym i ciemnym.",
    stack_python: "<strong>Python</strong> – PyQt6, automatyzacja z Selenium, REST API, obsługa WebDAV, JWT",
    stack_csharp: "<strong>C#</strong> – aplikacje w .NET i WPF",
    stack_pwa:
      "<strong>Progressive Web Apps (PWA)</strong> – aplikacje offline-ready, responsywne, zgodne ze standardami",
    stack_frontend: "<strong>Frontend/UI</strong> – interfejsy użytkownika, Tailwind CSS, zarządzanie stanem aplikacji",
    stack_security: "<strong>Bezpieczeństwo i integracja</strong> – szyfrowanie lokalne, OAuth, JWT, API tokeny",
    stack_devops: "<strong>DevOps / Sieci</strong> – konfiguracja, infrastruktura lokalna, zdalne zarządzanie urządzeniami",
    tile_student_title: "Student informatyki",
    tile_student_text: "Ukończyłem 2 rok studiów ze średnią 5.0",
    tile_code_title: "Specjalność: Programowanie",
    tile_code_text: "Rozwijanie projektów na uczelni oraz własnych",
    tile_contact_title: "Kontakt",
    tile_contact_text: "Dane kontaktowe dostępne w sekcji kontakt w menu strony",
    tile_tech_title: "Absolwent technikum informatycznego",
    tile_tech_text: "Zdałem praktyczny egzamin zawodowy z wynikiem 100%",
    experience_title: "Obecne doświadczenie zawodowe w IT",
    experience_text: `W trzeciej klasie technikum informatycznego odbyłem <strong>odpłatny staż wakacyjny</strong> zorganizowany przez <strong>ZSP Nowe</strong>, w firmie
<strong>GECKONET Sp. z o.o.</strong>. Pracowałem zgodnie z profilem kształcenia w zakresie <strong>sieci komputerowych</strong>, zajmując się:<br><br>
– <strong>montażem instalacji internetowych</strong> w technologii radiowej,<br>
– <strong>konfiguracją sieci</strong> według procedur firmowych,<br>
– <strong>usuwaniem usterek</strong> oraz diagnozą problemów u klientów,<br>
– <strong>budową i montażem nowych stacji nadawczych</strong> w celu rozszerzania zasięgu sieci operatora.`,
    experience_text_2: `W tej samej firmie odbyłem również <strong>praktyki zawodowe</strong>, wymagane w ramach programu technikum informatycznego. W trakcie praktyk
  dokumentowałem swoje działania w <strong>dzienniku praktyk</strong>, który obejmował wszystkie realizowane zadania, zdobyte umiejętności oraz przebieg
  pracy w środowisku rzeczywistym.`,
  experience_other_title: "Inne doświadczenie zawodowe",

  experience_other_text_1: `<span class="company-name">TERG S.A – Media Expert</span><br>
Pracowałem jako <strong>Starszy Specjalista ds. Sprzedaży i Usług</strong> w salonie Media Expert w Nowem. W ciągu 5 lat zdobyłem szeroką wiedzę produktową
dzięki licznym szkoleniom oraz doświadczeniu w bezpośredniej obsłudze klienta. Pracowałem na wszystkich działach sprzedaży, w tym przy stanowiskach:
<strong>ratalnych, reklamacyjnych oraz serwisowych</strong>. Odpowiadałem za realizację standardów obsługi klienta, sprzedaż sprzętu i akcesoriów, ubezpieczeń
oraz usług dodatkowych oferowanych przez firmę.`,

  experience_other_text_2: `<span class="company-name">Jeronimo Martins Polska S.A.</span><br>
Na stanowisku <strong>Zastępcy Kierownika Sklepu</strong> byłem odpowiedzialny za <strong>koordynowanie zespołu</strong> podczas zmiany,
<strong>obsługę klienta</strong> w standardzie firmy, rozwiązywanie sytuacji konfliktowych, egzekwowanie obowiązków pracowników oraz przestrzeganie
<strong>zasad BHP i wewnętrznych procedur</strong>.`,
contact_title: "Kontakt",
contact_name: "Piotr Kawa",
contact_phone: "tel. +48 726 526 154",
contact_email: "piotrkawa95@gmail.com",
contact_message: "Zapraszam do kontaktu w sprawie współpracy lub zatrudnienia. Z przyjemnością odpowiem na pytania i przedstawię szczegóły projektów.",
contact_form_name: "Imię i nazwisko",
contact_form_email: "Adres e-mail",
contact_form_message: "Wiadomość",
contact_form_submit: "Wyślij",
projects_title: "Projekty",
  projects_intro: "Poniżej znajduje się przegląd wybranych projektów zrealizowanych w ramach nauki, pracy oraz samodzielnych działań. Projekty zostały podzielone według technologii.",

  project_python_title: "Projekty Python",
  project_python_desc: "Automatyzacje, GUI (PyQt6), integracje z API, WebDAV.",

  project_csharp_title: "Projekty C#",
  project_csharp_desc: "Aplikacje desktopowe, narzędzia CLI, przetwarzanie danych.",

  project_wpf_title: "Projekty WPF",
  project_wpf_desc: "Aplikacje z graficznym interfejsem (WPF/.NET).",

  project_pwa_title: "Progressive Web Apps",
  project_pwa_desc: "Responsywne aplikacje offline, oparte o nowoczesne standardy.",
  project_hardware_title:"Projekty Hardware",
  project_hardware_desc: "Własne projekty sprzętowe",
    project_python_intro: "Projekty oparte na języku Python, zaprojektowane i stworzone w pełni samodzielnie – od koncepcji po realizację. Skupiają się na praktycznym zastosowaniu technologii: tworzeniu nowoczesnych interfejsów graficznych, integracji z API oraz automatyzacji procesów codziennej pracy.",

    piotrflix_title: "PiotrFlix",
    piotrflix_frontend_gallery_title : "Zrzuty ekranu z aplikacji mobilnej",
    piotrflix_desc: "<strong>PiotrFlix</strong> to w pełni autorska aplikacja desktopowa, napisana w <strong>Pythonie</strong>, z wykorzystaniem <strong>PyQt6</strong> i integracją z <strong>TMDB API</strong>. Jej celem jest katalogowanie filmów i seriali offline, z uwzględnieniem automatycznego pobierania metadanych, plakatów i opisów. Projekt oferuje:",
    piotrflix_list: [
      "przejrzysty, nowoczesny <strong>interfejs graficzny (GUI)</strong>,",
      "wyszukiwanie, filtrowanie i oznaczanie postępu oglądania,",
      "<strong>Cache</strong> w formacie JSON z mechanizmem czyszczenia nieaktywnych pozycji,",
      "integrację z <strong>Plex Media Server</strong> oraz klientem torrentów (Deluge),",
      "pełne zarządzanie biblioteką multimediów i automatyczne usuwanie obejrzanych pozycji."
    ],
    piotrflix_tags: "#Python #PyQt6 #TMDB #JSON #GUI #Plex #Automation",
    // Philips
    philips_title: "Philips Hue",
    philips_desc: "<strong>Philips Hue</strong> to w pełni autorska aplikacja desktopowa, napisana w <strong>Pythonie</strong> z wykorzystaniem <strong>PyQt6</strong>, zintegrowana z <strong>Philips Hue API</strong>. Jej celem jest sterowanie inteligentnym oświetleniem marki Philips za pomocą API i mostka. Projekt oferuje:",
    philips_list: [
    "przejrzysty, nowoczesny <strong>interfejs graficzny (GUI)</strong>,",
    "kafle odpowiadające pokojom zmieniają gradient w zależności od ustawionego światła,",
    "<strong>Cache</strong> w formacie JSON — zapis klucza API i tokena,",
    "możliwość osobnego <strong>sterowania</strong> całymi pomieszczeniami i pojedynczymi żarówkami,",
    "sprawdzanie <strong>statusu czujników ruchu</strong>."
  ],
philips_tags: "#Python #PyQt6 #Philips #API #GUI #IoT #Automation",


    piotrflix_long_desc: "PiotrFlix to kompleksowa aplikacja webowa umożliwiająca automatyczne pobieranie filmów i seriali z torrentów, integrację z Plex Media Server, zarządzanie pobraniami oraz automatyczne czyszczenie obejrzanych treści. Wykorzystuje Flask, Deluge API, Selenium i TMDb do zapewnienia pełnej funkcjonalności w Twojej domowej sieci multimedialnej.",
    piotrflix_long_desc_2: "Projekt powstał, aby zautomatyzować proces wyszukiwania i pobierania treści do Plex, a także zarządzać nimi w prostym panelu webowym dostosowanym do urządzeń mobilnych.",

    piotrflix_backend_title: "Opis backendu i funkcjonalności",

    piotrflix_backend_p1: "Aplikacja posiada rozbudowany backend oparty na Flask. Wyszukuje tytuły filmów i seriali w trzech źródłach:",
    piotrflix_backend_list: [
      "🎬 YTS – filmy HD i 4K",
      "🏴‍☠️ TPB – filmy",
      "📺 TPB – seriale"
    ],
    piotrflix_backend_p2: "Wyszukiwania obsługują tytuły w języku polskim – backend automatycznie tłumaczy je na język angielski przed zapytaniem do zewnętrznych API, co znacząco zwiększa trafność wyników.",

    piotrflix_backend_code_translate: "# Przykład tłumaczenia zapytań\nfrom googletrans import Translator\n\ntranslator = Translator()\ntranslated = translator.translate(query, dest=\"en\").text",

    piotrflix_backend_p3: "Backend zarządza torrentami – po pobraniu są one automatycznie przenoszone do historii i pauzowane, by oszczędzać zasoby serwera.",

    piotrflix_backend_code_pause: "# Pauzowanie torrentów po zakończeniu\nif torrent.progress == 100:\n    client.call(\"core.pause_torrent\", torrent_id)",

    piotrflix_backend_p4: "Aplikacja pobiera okładki oraz opisy filmów i seriali z TMDb API i automatycznie tłumaczy je na język polski, by panel użytkownika był w pełni lokalny.",

    piotrflix_backend_code_desc: "# Tłumaczenie opisów na PL\ndescription_en = data[\"overview\"]\ndescription_pl = translator.translate(description_en, dest=\"pl\").text",

    piotrflix_backend_p5: "PiotrFlix wyposażony jest również w system watchdog, który aktualizuje postęp oglądania filmów i seriali w Plex. Po osiągnięciu 100% automatycznie usuwa obejrzane pozycje z dysku, zwalniając przestrzeń.",

    piotrflix_backend_code_watchdog: "# Watchdog do kasowania obejrzanych\nif view_progress >= 100:\n    os.remove(file_path)",

    piotrflix_backend_p6: "Dla bezpieczeństwa cały backend działa wyłącznie w Twojej lokalnej sieci domowej. Aplikacja wykorzystuje również cache zapytań do API, co znacząco przyspiesza kolejne wyszukiwania tych samych tytułów i zmniejsza obciążenie zewnętrznych serwisów.",

    piotrflix_code_title: "Wybrane fragmenty kodu",
    piotrflix_code_snippet1: "# Pobieranie plakatu filmu z TMDb\ndef get_tmdb_poster(title, type_=\"movie\"):\n    resp = requests.get(\n        f\"https://api.themoviedb.org/3/search/{type_}\",\n        params={\"api_key\": TMDB_API_KEY, \"query\": title, \"language\": \"pl-PL\"},\n        timeout=5\n    )\n    data = resp.json()\n    poster_path = data[\"results\"][0].get(\"poster_path\")\n    return f\"https://image.tmdb.org/t/p/w342{poster_path}\" if poster_path else \"\"",
    piotrflix_code_desc: "Funkcja pobierająca plakat filmu lub serialu z API TMDb.",

    piotrflix_code_snippet2: "# Dodawanie torrenta do Deluge\nclient = get_client()\nclient.call(\"core.add_torrent_magnet\", magnet, {\n    b\"download_location\": download_path.encode(\"utf-8\")\n})",
    piotrflix_code_desc2: "Dodanie torrenta przez API Deluge z określoną ścieżką pobierania.",

    gallery_title: "Zrzuty ekranu",
    documents_title: "Curriculum Vitae",
    download_cv: "Pobierz CV",
    documents2_title: "Wyniki Egzaminu Zawodowego",
    download_doc1: "Pobierz Wyniki Egzaminu Zawodowego",
    documents3_title: "Suplement do dyplomu",
    download_doc2: "Pobierz Suplement do dyplomu - PL",
    download_doc3: "Pobierz Suplement do dyplomu - EN",
    documents4_title: "Certyfikat ECDL",
    download_doc4: "Pobierz Certyfikat ECDL",
    read_doc: "Obejrzyj dokument",
    privacy_note: "Dane osobowe, takie jak numer PESEL, data i miejsce urodzenia, zostały usunięte ze względów bezpieczeństwa.",
    privacy_note2: "Dane adresowe zostały zamazane ze względów bezpieczeństwa.",
    hardware_page_title: "Hardware | Portfolio",
    hardware_hero_title: "Hardware",
    hardware_intro_text: "Przegląd moich projektów hardware'owych — budowa własnych projektów do użytku prywatnego oraz projekty na studia",
    hardware_project1_title: "Projekt własnej stacji",
    hardware_project1_desc: "Na początku 2020 roku zbudowałem własną stację roboczą — zaprojektowaną do profesjonalnej obróbki zdjęć, montażu filmów oraz płynnej obsługi najnowszych gier.  Po starannym zaplanowaniu budżetu, skompletowałem zestaw podzespołów najwyższej jakości, idealnie dopasowanych do moich potrzeb.  W tej sekcji prezentuję szczegóły projektu, który na co dzień wspiera mnie zarówno w pracy, jak i w rozrywce.",

    hardware_github_button: "Moje Projekty",
    hardware_intro2_text : "Prezentowane projekty są w pełni autorskie i zostały zrealizowane dzięki wiedzy zdobytej w technikum, na studiach oraz podczas pracy w <strong>Media Expert</strong>. Po premierze <strong>NVIDIA GEFORCE RTX 3080</strong> zrealizowałem swój wymarzony projekt, wykorzystując doświadczenie zarówno zawodowe, jak i pasję do nowych technologii.",
    hardware_project3_desc: "W 2025 roku przygotowałem prezentację w ramach zajęć z inżynierii systemów i analizy systemowej. Naszym celem było zaprojektowanie stacji roboczych dla pracowników firmy, którzy mieli korzystać z oprogramowania <strong>Blender</strong> oraz <strong>Autocad</strong>. Projekt zakładał również możliwość wykorzystania stacji w przyszłości jako koparek kryptowalut. W trakcie realizacji łączyliśmy wiedzę zdobytą na studiach z nowoczesnymi rozwiązaniami oraz wsparciem sztucznej inteligencji.",
    hardware_studia_title: "Projekt ze studiów",
    hardware_download_presentation: "Pobierz prezentację",
    hardware_project4_title : "Pełna realizacja projektu — od pomysłu po gotową stację",
    hardware_project4_desc: "Projekt mojej stacji roboczej zrealizowałem samodzielnie — począwszy od dokładnej analizy rynku i wyboru odpowiednich komponentów, przez ich zakup, aż po samodzielny montaż oraz sukcesywne rozbudowywanie zestawu. Każda decyzja była świadoma i przemyślana — nie kierowałem się chwilowymi trendami, lecz długofalową niezawodnością oraz uniwersalnością zestawu. Zainwestowałem w podzespoły najwyższej klasy, chcąc stworzyć maszynę, która przez lata sprosta zarówno wymagającej pracy, jak i celom edukacyjnym czy rozrywkowym. Dodatkowo, komputer został zoptymalizowany pod kątem profesjonalnej pracy w pakiecie Adobe, co pozwala mi na efektywną obróbkę zdjęć, montaż filmów i realizację zaawansowanych projektów multimedialnych.",
    spec_processor: "Procesor",
    spec_gpu: "Karta Graficzna",
    spec_ram: "Pamięć RAM",
    spec_ssd: "Dysk SSD",
    spec_hdd: "Dysk HDD",
    spec_mobo: "Płyta Główna",
    spec_psu: "Zasilacz",
    spec_case: "Obudowa",
    spec_cpu_cooling: "Chłodzenie procesora",
    spec_additional_cooling: "Dodatkowe chłodzenie",
        huecontroller_title: "Hue Controller",
    huecontroller_intro: "Hue Controller — aplikacja do zarządzania oświetleniem Philips Hue, umożliwiająca pełną kontrolę nad światłami, grupami oraz sensorami poprzez nowoczesny interfejs desktopowy.",
    huecontroller_desc2: "Obsługuje dynamiczne zmiany jasności, koloru oraz automatyczne wykrywanie mostka w sieci lokalnej.",

    backend_title: "Technologie Backend",
    backend_desc: "Aplikacja oparta na Pythonie z użyciem PyQt6, łączy bezpośrednie połączenia REST API z mostkiem Philips Hue.",
    backend_list_1: "Automatyczne wykrywanie mostka w sieci (UPnP + skanowanie LAN)",
    backend_list_2: "Bezpieczna autoryzacja przy użyciu tokenu API",
    backend_list_3: "Obsługa grup, scen i pojedynczych świateł",
    backend_list_4: "Pełna kontrola nad jasnością i kolorami świateł",
    backend_list_5: "Obsługa czujników ruchu i temperatury",
    backend_list_6: "Dynamiczne odświeżanie stanu urządzeń w czasie rzeczywistym",
    backend_list_7: "Wsparcie dla wielowątkowego pobierania danych",
    backend_list_8: "System automatycznych aktualizacji z GitHub",
    backend_list_9: "Modularna architektura ułatwiająca rozbudowę aplikacji",
    backend_list_10: "Integracja z lokalnymi systemami automatyzacji",
    backend_call_example: "Przykładowe zapytanie API do zmiany jasności światła:",
    backend_update_mechanism: "Mechanizm cyklicznej aktualizacji danych z mostka:",

    frontend_title: "Frontend i Interfejs Użytkownika",
    frontend_desc1: "Nowoczesny i responsywny interfejs oparty na dynamicznych kafelkach grup i interaktywnym panelu sterowania.",
    frontend_list_1: "Dynamiczne kafelki grup z efektami animacji",
    frontend_list_2: "Panel sterowania pojedynczymi światłami",
    frontend_list_3: "Podgląd czujników i ich stanu",
    frontend_list_4: "Zintegrowany system onboardingowy",
    frontend_list_5: "Responsywny układ dostosowany do różnych rozdzielczości",
    frontend_desc2: "Frontend wspiera szybki podgląd stanu systemu i błyskawiczną interakcję z urządzeniami.",

    code_title: "Wybrane Fragmenty Kodów",
    code_desc1: "Automatyczne wykrywanie mostka oraz inicjalizacja połączenia.",
    code_desc2: "Aktualizacja kafelków grup świateł po synchronizacji z mostkiem.",
    code_desc3: "Pobieranie grup z API z opcjonalnym callbackiem.",

    mobile_screenshots_title: "Zrzuty ekranu aplikacji mobilnej (przyszła wersja)",

    video_demo: "Twoja przeglądarka nie obsługuje tagu wideo.",

    future_title: "Plany na przyszłość",
    future_1: "Wydanie wersji mobilnej z użyciem PyQt for Mobile",
    future_2: "Wsparcie harmonogramów i scen świetlnych",
    future_3: "Integracja z Zigbee2MQTT dla urządzeń innych producentów",
    future_4: "Bezpośrednia integracja z Home Assistant",
    future_5: "System powiadomień push dla zdarzeń z czujników",
    future_6: "Zaawansowany edytor scen i harmonogramów",
    future_7: "Wsparcie dla aktualizacji OTA dla dedykowanych urządzeń",

    github_button: "Kod źródłowy na GitHub",
    carousel_heading: "Sprawdź inne moje projekty",
    carousel_badge_hardware: "Hardware",
    carousel_badge_python: "Python",
    carousel_project_hardware_title: "Projekt Hardware",
    carousel_project_hardware_desc: "Budowa prywatnej stacji roboczej, oraz projekt na studia",
    carousel_see_more: "Zobacz więcej",
    carousel_project_piotrflix_desc: "Automatyzacja zarządzania biblioteką filmów w sieci lokalnej",
    carousel_see_project: "Zobacz projekt",
    carousel_project_philipshue_desc: "Aplikacja do sterowania inteligentnym oświetleniem marki Philips.",
    carousel_check_details: "Sprawdź szczegóły",

    comingsoon_title: "Zawartość w przygotowaniu - Piotr Kawa",
    comingsoon_h1: "🔧 Zawartość w trakcie przygotowania",
    comingsoon_p: "Ta sekcja jest jeszcze w budowie. Już wkrótce pojawią się tutaj nowe treści.<br>Zapraszam do odwiedzin w najbliższym czasie!",
    comingsoon_back: "← Powrót do strony głównej",

    wdcloud_title: "WD Cloud Dashboard – Zaawansowana Platforma WebDAV",
    carousel_project_WD_desc : "Aplikacja do zarządzania chmurą WD MyCloud z obsługą WebDAV.",
  menu_logo: "PK Portfolio",
  menu_home: "Strona główna",
  menu_projects: "Projekty",
  menu_about: "O mnie",
  menu_contact: "Kontakt",
  last_update: "Ostatnia aktualizacja - 31.07.2025",

  // Nagłówek i opis projektu
  wdcloud_heading: "WD Cloud Dashboard – Pełna Integracja z WebDAV i API chmurowym",
  wdcloud_desc1: "Zaawansowana aplikacja desktopowa pozwalająca użytkownikom na logowanie do kont WD MyCloud, zarządzanie plikami i montowanie WebDAV.",
  wdcloud_desc2: "Dzięki wykorzystaniu PyQt, Selenium, Auth0 i WebDAV, użytkownik ma dostęp do prywatnej chmury w prostym i bezpiecznym środowisku graficznym.",

  // Backend
  wdcloud_backend_title: "Backend – Architektura i Technologie",
  wdcloud_backend_list: [
    "Autoryzacja OAuth2 z wykorzystaniem Auth0 i Selenium",
    "Dynamiczne pobieranie tokenów i ID urządzeń",
    "Obsługa protokołu WebDAV przez WsgiDAV",
    "Zarządzanie plikami – pobieranie, przesyłanie, usuwanie",
    "Bezpośrednia komunikacja z API MyCloud przez HTTPS",
    "Bezpieczne szyfrowanie danych logowania lokalnie (base64)",
  ],
  wdcloud_backend_code1_title: "Fragment kodu: automatyczne pobieranie tokenu OAuth",
  wdcloud_backend_code1: `code = current_url.split("code=")[1].split("&")[0]
access_token = requests.post(...).json()["access_token"]`,

  wdcloud_backend_code2_title: "Fragment kodu: inicjacja WebDAV przez WsgiDAV",
  wdcloud_backend_code2: `provider = WDProvider(token, device_url)
app = WsgiDAVApp({ "provider_mapping": {"/": provider}, ... })`,

  // Frontend
  wdcloud_frontend_title: "Frontend – Nowoczesny Interfejs Użytkownika",
  wdcloud_frontend_p1: "Aplikacja desktopowa została zaprojektowana z użyciem PyQt6 – nowoczesnego frameworka GUI. Umożliwia intuicyjne logowanie, eksplorację folderów oraz zarządzanie plikami w chmurze WD.",
  wdcloud_frontend_p2: "Responsywny interfejs graficzny z paskiem postępu, automatycznym zapisem sesji, wyborem profili i integracją z profilem użytkownika. Obsługa drag & drop, lightbox i podglądu zawartości.",

  // Wideo
  wdcloud_video_title: "Demo wideo – pełny przebieg logowania i montowania dysku",
  wdcloud_video_fallback: "Twoja przeglądarka nie wspiera tagu wideo.",

  // Przyszłość
  wdcloud_future_title: "Plany rozwoju",
  wdcloud_future_list: [
    "Wersja mobilna z natywnym WebDAV",
    "Tryb offline (cache plików lokalnie)",
    "Dwuskładnikowe logowanie (2FA)",
    "Synchronizacja folderów z systemem plików",
    "Zdalne zarządzanie użytkownikami urządzenia",
    "Motywy interfejsu (ciemny/jasny)",
  ],

    piotrflix_future_title: "Plany rozwoju",
    piotrflix_future_list: [
      "Dodanie systemu użytkowników z autoryzacją JWT",
      "Rozszerzenie o odtwarzanie filmów bezpośrednio w aplikacji",
      "Wdrożenie monitoringu wykorzystania zasobów i powiadomień push"
    ],

    wd_title : "WD MYCLOUD APP",
    wd_desc : "<strong>WD MYCLOUD APP</strong> to w pełni autorska aplikacja desktopowa, napisana w <strong>Pythonie</strong> z wykorzystaniem <strong>PyQt6</strong>, zintegrowana z <strong> WD MYCLOUD API</strong>. Jej celem jest zarządzanie plikami w obszarze chmury domowej, aplikacja oferuje :",
    wd_list: [
    "przejrzysty, nowoczesny <strong>interfejs graficzny (GUI)</strong>,",
    "podział gui na przeglądanie plików i folderów,",
    "<strong>Upload i download</strong> plików oraz <strong> udostępnianie i tworzenie linku</strong>,",
    "<strong>automatyczne logowanie</strong> z wykorzystanem selenium w tle,",
    "automatyczne<strong>pobieranie informacji o chmurze</strong>.",
    "tworzenie serwera <strong>WebDav</strong> w celu zmapowania chmury jako dysku sieciowego.",	
  ],
    wd_tags : "#Python, #PyQt6, #Selenium, #Automatyzacja, #Token, #zarządzanieplikami, #WEBDAVSERVER.", 
    comingsoon_title: "Zawartość w przygotowaniu - Piotr Kawa",
    comingsoon_h1: "🔧 Zawartość w trakcie przygotowania",
    comingsoon_p: "Ta sekcja jest jeszcze w budowie. Już wkrótce pojawią się tutaj nowe treści.<br>Zapraszam do odwiedzin w najbliższym czasie!",
    comingsoon_back: "← Powrót do strony głównej"
  },

  en: {
    title: "Piotr Kawa - Portfolio",
    home: "Home",
    projects: "Projects",
    about: "About",
    docs: "Documents",
    contact: "Contact",
    last_update: "Last update - 31.07.2025",
    intro_h1: "Portfolio – Piotr Kawa",
    intro_p1:
      "<strong>Piotr Kawa</strong> – a second-year Computer Science student specializing in Software Development, with a GPA of 5.0. A graduate of a technical high school in computer networking, having achieved 100% in the practical part of the vocational exam.",
    intro_p2:
      "Technical work combines solid academic foundations with practical skills from self-developed programming projects and experience in electronic devices and modern IT technologies. Interests include software engineering, IoT systems, API integrations, process automation, desktop applications, WebDAV systems, as well as photography and drone technology.",
    intro_p3: "The projects cover a broad range of environments and technologies, including:",
    intro_p4:
      "The portfolio includes desktop applications (Python, C#, WPF), progressive apps, lighting control panels, CLI tools, and WebDAV-based solutions. Each project was developed with a focus on code quality, operational stability, and user interface aesthetics.",
    intro_note: "This site is available in both Polish and English and offers a dark/light mode switch.",
    stack_python: "<strong>Python</strong> – PyQt6, Selenium automation, REST API, WebDAV handling, JWT",
    stack_csharp: "<strong>C#</strong> – .NET and WPF applications",
    stack_pwa:
      "<strong>Progressive Web Apps (PWA)</strong> – offline-ready, responsive, standards-compliant apps",
    stack_frontend: "<strong>Frontend/UI</strong> – user interfaces, Tailwind CSS, state management",
    stack_security: "<strong>Security & Integration</strong> – local encryption, OAuth, JWT, API tokens",
    stack_devops: "<strong>DevOps / Networks</strong> – configuration, local infrastructure, remote device management",
    tile_student_title: "Computer Science Student",
    tile_student_text: "Completed 2nd year of studies with a 5.0 GPA",
    tile_code_title: "Specialization: Programming",
    tile_code_text: "Developing academic and personal projects",
    tile_contact_title: "Contact",
    tile_contact_text: "Contact details available in the menu section",
    tile_tech_title: "IT Technical School Graduate",
    tile_tech_text: "Passed the practical professional exam with 100% score",
    experience_title: "Current Professional Experience",
    experience_text: `In my third year of technical school, I completed a <strong>paid summer internship</strong> organized by <strong>ZSP Nowe</strong> at the company <strong>GECKONET Ltd.</strong>. I worked within my specialization in <strong>computer networks</strong>, handling:<br><br>
– <strong>installing internet infrastructure</strong> using radio technology,<br>
– <strong>configuring networks</strong> based on company procedures,<br>
– <strong>resolving network issues</strong> and troubleshooting client-side problems,<br>
– <strong>building and deploying new transmission stations</strong> to expand the company’s coverage.`,
    experience_text_2: `At the same company, I also completed a <strong>mandatory professional internship</strong> as part of my IT technical school curriculum.
  During this internship, I maintained a <strong>practical journal</strong> documenting my tasks, skills acquired, and the overall learning process in a real-world setting.`,
  experience_other_title: "Other Professional Experience",

  experience_other_text_1: `<span class="company-name">TERG S.A – Media Expert</span><br>
I worked as a <strong>Senior Sales and Service Specialist</strong> at the Media Expert store in Nowe. Over 5 years, I gained deep product knowledge through regular training
and extensive experience in <strong>direct customer service</strong>. I operated across all sales departments including <strong>installment, complaints, and service desks</strong>.
My responsibilities included delivering service standards, selling electronics and accessories, insurance policies, and add-on services offered by the company.`,

  experience_other_text_2: `<span class="company-name">Jeronimo Martins Polska S.A.</span><br>
As an <strong>Assistant Store Manager</strong>, I was responsible for <strong>coordinating staff</strong> during shifts, ensuring customer service standards,
handling conflict situations, enforcing internal procedures, and supervising <strong>occupational health and safety (OHS)</strong> compliance.`,
contact_title: "Contact",
contact_name: "Piotr Kawa",
contact_phone: "Phone: +48 726 526 154",
contact_email: "piotrkawa95@gmail.com",
contact_message: "Feel free to reach out regarding potential collaboration or employment. I will be happy to answer your questions and provide details about my projects.",
contact_form_name: "Full Name",
contact_form_email: "Email Address",
contact_form_message: "Message",
contact_form_submit: "Send",
projects_title: "Projects",
  projects_intro: "Below is an overview of selected projects developed during studies, work, and self-learning. Projects are categorized by technology.",

  project_python_title: "Python Projects",
  project_python_desc: "Automation, GUI (PyQt6), API integration, WebDAV.",

  project_csharp_title: "C# Projects",
  project_csharp_desc: "Desktop apps, CLI tools, data processing.",

  project_wpf_title: "WPF Projects",
  project_wpf_desc: "Graphical user interface applications (WPF/.NET).",

  project_pwa_title: "Progressive Web Apps",
  project_pwa_desc: "Offline-ready, responsive apps using modern standards.",

  project_hardware_title: "Hardware Projects",
  project_hardware_desc: "Proprietary hardware designs",
  hardware_intro2_text : "The showcased projects are entirely self-developed, based on knowledge acquired in technical school, university, and during my work at <strong>Media Expert</strong>. Following the launch of the <strong>NVIDIA GEFORCE RTX 3080</strong>, I completed my dream project — combining professional experience with a passion for new technologies.",
    project_python_intro: "Projects based on the Python programming language, fully self-designed and developed – from concept to execution. Focused on practical use of technology: building modern graphical interfaces, API integrations, and automating everyday workflows.",

    piotrflix_title: "PiotrFlix",
    piotrflix_desc: "<strong>PiotrFlix</strong> is a fully custom-built desktop app written in <strong>Python</strong>, using <strong>PyQt6</strong> and integrated with the <strong>TMDB API</strong>. It catalogs movies and TV shows offline, automatically retrieving posters and metadata. The project features:",
    piotrflix_list: [
      "a clean and modern <strong>GUI interface</strong>,",
      "searching, filtering, and watch progress tracking,",
      "a local <strong>JSON-based</strong> cache with inactive entry cleanup,",
      "integration with <strong>Plex Media Server</strong> and Deluge torrent client,",
      "full media library management with auto-removal of watched content."
    ],

    // Philips
    philips_title: "Philips Hue",
    philips_desc: "<strong>Philips Hue</strong> is a fully custom desktop application developed in <strong>Python</strong> using <strong>PyQt6</strong>, integrated with the <strong>Philips Hue API</strong>. Its purpose is to control Philips smart lighting via the API and bridge. The project features:",
    philips_list: [
    "a clean, modern <strong>graphical user interface (GUI)</strong>,",
    "room tiles dynamically changing gradient based on the selected light color,",
    "JSON-based <strong>cache</strong> for storing API keys and tokens,",
    "individual <strong>control</strong> of entire rooms and single bulbs,",
    "monitoring the <strong>status of motion sensors</strong>."
    ],
    philips_tags: "#Python #PyQt6 #Philips #API #GUI #IoT #Automation",

    piotrflix_tags: "#Python #PyQt6 #TMDB #JSON #GUI #Plex #Automation",
    piotrflix_long_desc: "PiotrFlix is a comprehensive web app that automates downloading movies and series via torrents, integrates with Plex Media Server, manages downloads, and automatically deletes watched content. It uses Flask, Deluge API, Selenium, and TMDb to provide full functionality within your home media network.",
    piotrflix_long_desc_2: "The project was created to automate searching and downloading content for Plex, as well as managing it in a simple web panel optimized for mobile devices.",

    piotrflix_backend_title: "Backend description and features",
    piotrflix_frontend_gallery_title : "Mobile app screenshots",

    piotrflix_backend_p1: "The app has an advanced backend built on Flask. It searches for movie and series titles across three sources:",
    piotrflix_backend_list: [
      "🎬 YTS – HD and 4K movies",
      "🏴‍☠️ TPB – movies",
      "📺 TPB – series"
    ],
    piotrflix_backend_p2: "Searches support Polish titles – the backend automatically translates them to English before querying external APIs, significantly improving results.",

    piotrflix_backend_code_translate: "# Example of query translation\nfrom googletrans import Translator\n\ntranslator = Translator()\ntranslated = translator.translate(query, dest=\"en\").text",

    piotrflix_backend_p3: "The backend manages torrents – after download they are automatically moved to history and paused to save server resources.",

    piotrflix_backend_code_pause: "# Pausing torrents after completion\nif torrent.progress == 100:\n    client.call(\"core.pause_torrent\", torrent_id)",

    piotrflix_backend_p4: "The app retrieves posters and descriptions from TMDb API and automatically translates them to Polish for a fully localized UI.",

    piotrflix_backend_code_desc: "# Translating descriptions to PL\ndescription_en = data[\"overview\"]\ndescription_pl = translator.translate(description_en, dest=\"pl\").text",

    piotrflix_backend_p5: "PiotrFlix also has a watchdog system that updates watch progress for movies and series in Plex. When reaching 100%, watched files are automatically deleted to free up space.",

    piotrflix_backend_code_watchdog: "# Watchdog for deleting watched\nif view_progress >= 100:\n    os.remove(file_path)",

    piotrflix_backend_p6: "For security, the entire backend runs only within your local home network. The app also uses API query caching, greatly speeding up repeat searches and reducing load on external services.",

    piotrflix_code_title: "Selected code snippets",
    piotrflix_code_snippet1: "# Fetching movie poster from TMDb\ndef get_tmdb_poster(title, type_=\"movie\"):\n    resp = requests.get(\n        f\"https://api.themoviedb.org/3/search/{type_}\",\n        params={\"api_key\": TMDB_API_KEY, \"query\": title, \"language\": \"pl-PL\"},\n        timeout=5\n    )\n    data = resp.json()\n    poster_path = data[\"results\"][0].get(\"poster_path\")\n    return f\"https://image.tmdb.org/t/p/w342{poster_path}\" if poster_path else \"\"",
    piotrflix_code_desc: "Function to fetch movie or series poster from TMDb API.",

    piotrflix_code_snippet2: "# Adding torrent to Deluge\nclient = get_client()\nclient.call(\"core.add_torrent_magnet\", magnet, {\n    b\"download_location\": download_path.encode(\"utf-8\")\n})",
    piotrflix_code_desc2: "Adding a torrent via Deluge API with a defined download path.",

    gallery_title: "Screenshots",
    download_cv: "Download CV",
    documents2_title: "Vocational Exam Results",
    download_doc1: "Download Vocational Exam Results",
    documents3_title: "Diploma Supplement",
    download_doc2: "Download Diploma Supplement - PL",
    download_doc3: "Download Diploma Supplement - EN",
    documents4_title: "ECDL Certificate",
    download_doc4: "Download ECDL Certificate",
    read_doc: "View Document",
    privacy_note: "Personal data such as PESEL number, date and place of birth have been removed for security reasons.",
    privacy_note2: "Address details have been blurred for security reasons.",
    hardware_page_title: "Hardware | Portfolio",
    hardware_hero_title: "Hardware",
    hardware_intro_text: "An overview of my hardware projects — personal builds for private use and university assignments",
    hardware_project1_title: "Personal Workstation Project",
    hardware_project1_desc: "At the beginning of 2020, I built my own workstation — designed for professional photo editing, video production, and smooth operation of the latest games.  After carefully planning the budget, I selected high-quality components perfectly suited to my needs.  In this section, I present the details of a project that supports me daily in both work and entertainment.",

    hardware_github_button: "My Projects",
    hardware_project3_desc: "In 2025, I prepared a presentation as part of the Systems Engineering and System Analysis course. Our goal was to design workstation PCs for company employees who would use software such as <strong>Blender</strong> and <strong>AutoCAD</strong>. The project also included the possibility of repurposing these stations as cryptocurrency mining rigs in the future. During the project, we combined knowledge acquired at university with modern solutions and AI-driven support.",
    hardware_studia_title: "University Project",
    hardware_download_presentation: "Download presentation",
    hardware_project4_title : "Complete Project Execution — from Idea to Fully Built Workstation",
    hardware_project4_desc: "I carried out the entire workstation project on my own — starting with a thorough market analysis and careful selection of components, through purchase, assembly, and ongoing upgrades of the setup. Every decision was deliberate and well thought out — driven not by trends, but by long-term reliability and versatility. I invested in top-quality components to build a machine capable of meeting both demanding professional tasks and personal, educational, or entertainment needs for years to come. Additionally, the workstation was optimized for advanced workflows in the Adobe Creative Suite, allowing me to efficiently edit photos, produce videos, and complete complex multimedia projects.",
    
    wd_title: "WD MYCLOUD APP",
    wd_desc: "<strong>WD MYCLOUD APP</strong> is a fully custom desktop application written in <strong>Python</strong> using <strong>PyQt6</strong>, integrated with the <strong>WD MYCLOUD API</strong>. Its purpose is to manage files within the home cloud environment. The application offers:",
    wd_list: [
    "a clear, modern <strong>graphical user interface (GUI)</strong>,",
    "GUI split into file and folder browsing,",
    "<strong>File upload and download</strong>, as well as <strong>sharing and link creation</strong>,",
    "<strong>Automatic login</strong> using Selenium in the background,",
    "automatic <strong>retrieval of cloud information</strong>,",
    "creation of a <strong>WebDAV server</strong> to map the cloud as a network drive."
  ],
  
  wd_tags: "#Python, #PyQt6, #Selenium, #Automation, #Token, #FileManagement, #WEBDAVSERVER.",
    spec_processor: "Processor",
    spec_gpu: "Graphics Card",
    spec_ram: "RAM Memory",
    spec_ssd: "SSD Drive",
    spec_hdd: "HDD Drive",
    spec_mobo: "Motherboard",
    spec_psu: "Power Supply",
    spec_case: "Case",
    spec_cpu_cooling: "CPU Cooling",
    spec_additional_cooling: "Additional Cooling",
    huecontroller_title: "Hue Controller",
    huecontroller_intro: "Hue Controller — a desktop application for managing Philips Hue lighting, providing full control over lights, groups, and sensors via a modern interface.",
    huecontroller_desc2: "Supports dynamic brightness, color changes, and automatic bridge discovery on the local network.",

    backend_title: "Backend Technologies",
    backend_desc: "Built with Python and PyQt6, directly integrating REST API calls with the Philips Hue Bridge.",
    backend_list_1: "Automatic bridge discovery (UPnP + LAN scanning)",
    backend_list_2: "Secure authorization via API token",
    backend_list_3: "Control of groups, scenes, and individual lights",
    backend_list_4: "Full brightness and color management",
    backend_list_5: "Motion and temperature sensor handling",
    backend_list_6: "Real-time device state refreshing",
    backend_list_7: "Multithreaded data fetching support",
    backend_list_8: "Automatic update system with GitHub integration",
    backend_list_9: "Modular architecture for easy extension",
    backend_list_10: "Integration with local automation systems",
    backend_call_example: "Sample API call to change light brightness:",
    backend_update_mechanism: "Periodic data refresh mechanism:",

    frontend_title: "Frontend & User Interface",
    frontend_desc1: "Modern responsive interface with dynamic group tiles and an interactive control panel.",
    frontend_list_1: "Animated dynamic group tiles",
    frontend_list_2: "Control panel for individual lights",
    frontend_list_3: "Sensor monitoring and status overview",
    frontend_list_4: "Integrated onboarding system",
    frontend_list_5: "Responsive design for various resolutions",
    frontend_desc2: "Frontend supports quick system status overview and instant device interaction.",
    carousel_heading: "Check out my other projects",
    carousel_badge_hardware: "Hardware",
    carousel_badge_python: "Python",
    carousel_project_hardware_title: "Hardware Project",
    carousel_project_hardware_desc: "Building a private workstation and academic project",
    carousel_see_more: "See more",
    carousel_project_piotrflix_desc: "Automating local network movie library management",
    carousel_see_project: "View project",
    carousel_project_philipshue_desc: "App for controlling Philips smart lighting",
    carousel_check_details: "Check details",

    comingsoon_title: "Content Under Construction - Piotr Kawa",
    comingsoon_h1: "🔧 Content Under Preparation",
    comingsoon_p: "This section is still under construction. New content will be available here soon.<br>Please check back again soon!",
    comingsoon_back: "← Back to Home Page",

    code_title: "Code Snippets",
    code_desc1: "Automatic bridge detection and connection initialization.",
    code_desc2: "Updating group tiles after sync with the bridge.",
    code_desc3: "Fetching groups from the API with optional callback.",

    mobile_screenshots_title: "Mobile App Screenshots (Upcoming)",

    video_demo: "Your browser does not support the video tag.",

    future_title: "Future Plans",
    future_1: "Mobile version with PyQt for Mobile",
    future_2: "Support for schedules and lighting scenes",
    future_3: "Integration with Zigbee2MQTT for third-party devices",
    future_4: "Direct integration with Home Assistant",
    future_5: "Push notification system for sensor events",
    future_6: "Advanced scene and schedule editor",
    future_7: "OTA update support for dedicated devices",

    github_button: "Source Code on GitHub",
    piotrflix_future_title: "Development plans",
    piotrflix_future_list: [
      "Add user system with JWT authorization",
      "Extend to allow direct movie playback in app",
      "Implement resource monitoring and push notifications",
    ],

  carousel_project_WD_desc: "An application for managing WD MyCloud cloud storage with WebDAV support.",
    // TITLE & MENU
  wdcloud_title: "WD Cloud Dashboard – Advanced WebDAV Integration Platform",
  menu_logo: "PK Portfolio",
  menu_home: "Home",
  menu_projects: "Projects",
  menu_about: "About Me",
  menu_contact: "Contact",

  // HEADER & INTRO
  wdcloud_heading: "WD Cloud Dashboard – Full Integration with WebDAV and Cloud API",
  wdcloud_desc1: "An advanced desktop application allowing users to log into their WD MyCloud account, manage files, and mount them via WebDAV.",
  wdcloud_desc2: "Thanks to the use of PyQt, Selenium, Auth0, and WebDAV, users get secure and intuitive access to their private cloud.",

  // BACKEND SECTION
  wdcloud_backend_title: "Backend – Architecture & Technologies",
  wdcloud_backend_list: [
    "OAuth2 authorization using Auth0 and Selenium",
    "Dynamic access token and device ID acquisition",
    "WebDAV protocol handling with WsgiDAV",
    "File operations – upload, download, delete",
    "Direct API communication with MyCloud over HTTPS",
    "Secure local credential encryption (base64)"
  ],
  wdcloud_backend_code1_title: "Code Sample: Automatic OAuth Token Fetch",
  wdcloud_backend_code1: `code = current_url.split("code=")[1].split("&")[0]
access_token = requests.post(...).json()["access_token"]`,

  wdcloud_backend_code2_title: "Code Sample: Starting WebDAV via WsgiDAV",
  wdcloud_backend_code2: `provider = WDProvider(token, device_url)
app = WsgiDAVApp({ "provider_mapping": {"/": provider}, ... })`,

  // FRONTEND SECTION
  wdcloud_frontend_title: "Frontend – Modern User Interface",
  wdcloud_frontend_p1: "The desktop application was built with PyQt6 – a modern GUI framework. It enables login, folder exploration, and file management in the WD cloud.",
  wdcloud_frontend_p2: "The interface includes progress bars, session memory, profile support, drag & drop, and lightbox previews – all in a responsive and polished design.",

  // VIDEO DEMO
  wdcloud_video_title: "Video Demo – Full Flow of Login and Drive Mounting",
  wdcloud_video_fallback: "Your browser does not support the video tag.",

  // FUTURE PLANS
  wdcloud_future_title: "Future Plans",
  wdcloud_future_list: [
    "Mobile app version with native WebDAV",
    "Offline mode with local file caching",
    "Two-factor authentication (2FA)",
    "File system folder synchronization",
    "Remote user/device management",
    "Light/Dark UI themes toggle",
      ],
    }
    
  }





window.translations = {
  pl: {
    read_more_button: "Przeczytaj szczegóły",
    read_less_button: "Zwiń szczegóły"
  },
  en: {
    read_more_button: "Read more",
    read_less_button: "Hide details"
  }
};

const langChangeEvent = new Event('languageChanged');
document.dispatchEvent(langChangeEvent);
