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
    project_python_intro: "Projekty oparte na języku Python, zaprojektowane i stworzone w pełni samodzielnie – od koncepcji po realizację. Skupiają się na praktycznym zastosowaniu technologii: tworzeniu nowoczesnych interfejsów graficznych, integracji z API oraz automatyzacji procesów codziennej pracy.",

    piotrflix_title: "PiotrFlix",
    piotrflix_desc: "<strong>PiotrFlix</strong> to w pełni autorska aplikacja desktopowa, napisana w <strong>Pythonie</strong>, z wykorzystaniem <strong>PyQt6</strong> i integracją z <strong>TMDB API</strong>. Jej celem jest katalogowanie filmów i seriali offline, z uwzględnieniem automatycznego pobierania metadanych, plakatów i opisów. Projekt oferuje:",
    piotrflix_list: [
      "przejrzysty, nowoczesny <strong>interfejs graficzny (GUI)</strong>,",
      "wyszukiwanie, filtrowanie i oznaczanie postępu oglądania,",
      "<strong>lokalną bazę danych SQLite</strong> z systemem cache oraz czyszczeniem pozycji nieaktywnych,",
      "integrację z <strong>Plex Media Server</strong> oraz klientem torrentów (Deluge),",
      "pełne zarządzanie biblioteką multimediów i automatyczne usuwanie obejrzanych pozycji."
    ],
    piotrflix_tags: "#Python #PyQt6 #TMDB #SQLite #GUI #Plex #Automation",
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

    piotrflix_future_title: "Plany rozwoju",
    piotrflix_future_list: [
      "Dodanie systemu użytkowników z autoryzacją JWT",
      "Rozszerzenie o odtwarzanie filmów bezpośrednio w aplikacji",
      "Wdrożenie monitoringu wykorzystania zasobów i powiadomień push"
    ]
  },

  en: {
    title: "Piotr Kawa - Portfolio",
    home: "Home",
    projects: "Projects",
    about: "About",
    docs: "Documents",
    contact: "Contact",
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
    project_python_intro: "Projects based on the Python programming language, fully self-designed and developed – from concept to execution. Focused on practical use of technology: building modern graphical interfaces, API integrations, and automating everyday workflows.",

    piotrflix_title: "PiotrFlix",
    piotrflix_desc: "<strong>PiotrFlix</strong> is a fully custom-built desktop app written in <strong>Python</strong>, using <strong>PyQt6</strong> and integrated with the <strong>TMDB API</strong>. It catalogs movies and TV shows offline, automatically retrieving posters and metadata. The project features:",
    piotrflix_list: [
      "a clean and modern <strong>GUI interface</strong>,",
      "searching, filtering, and watch progress tracking,",
      "a local <strong>SQLite database</strong> with cache and automatic cleanup,",
      "integration with <strong>Plex Media Server</strong> and Deluge torrent client,",
      "full media library management with auto-removal of watched content."
    ],
    piotrflix_tags: "#Python #PyQt6 #TMDB #SQLite #GUI #Plex #Automation",
    piotrflix_long_desc: "PiotrFlix is a comprehensive web app that automates downloading movies and series via torrents, integrates with Plex Media Server, manages downloads, and automatically deletes watched content. It uses Flask, Deluge API, Selenium, and TMDb to provide full functionality within your home media network.",
    piotrflix_long_desc_2: "The project was created to automate searching and downloading content for Plex, as well as managing it in a simple web panel optimized for mobile devices.",

    piotrflix_backend_title: "Backend description and features",

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

    piotrflix_future_title: "Development plans",
    piotrflix_future_list: [
      "Add user system with JWT authorization",
      "Extend to allow direct movie playback in app",
      "Implement resource monitoring and push notifications"
    ]
    },
}