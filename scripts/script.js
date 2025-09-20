// 🌙 Motyw jasny/ciemny
function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
  updateIcon(theme === "dark");
}

function updateIcon(isDark) {
  const themeIcon = document.getElementById("theme-icon");
  if (!themeIcon) return;
  themeIcon.innerHTML = isDark
    ? '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.checked = currentTheme === "dark";
    themeToggle.addEventListener("change", () => {
      const newTheme = themeToggle.checked ? "dark" : "light";
      applyTheme(newTheme);
    });
  }
}

// 🌍 Tłumaczenia PL/EN
function translate(lang) {
  const t = translations[lang];
  if (!t) return;

  window.currentLang = lang;
  
  

  // Teksty
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerHTML = t[key];
  });

  // Placeholdery
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.setAttribute("placeholder", t[key]);
  });

  // Listy dynamiczne
  document.querySelectorAll("[data-i18n-list]").forEach(ul => {
    const key = ul.getAttribute("data-i18n-list");
    const listItems = t[key];
    if (Array.isArray(listItems)) {
      ul.innerHTML = "";
      listItems.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
      });
    }
  });

  // Tytuł
  document.title = t.title || document.title;

  // Przełącznik języka
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = lang === "pl" ? "EN" : "PL";
    langToggle.onclick = () => {
      const newLang = lang === "pl" ? "en" : "pl";
      translate(newLang);
      localStorage.setItem("lang", newLang);
    };
  }
    // ✅ Aktualizacja przycisku "Przeczytaj szczegóły"
  const detailsBtn = document.querySelector('.details-btn');
  if (detailsBtn && window.translations[lang]) {
    detailsBtn.textContent = window.translations[lang].read_more_button;
  }
  

  localStorage.setItem("lang", lang);
}

function initTranslation() {
  const currentLang = localStorage.getItem("lang") || "pl";
  translate(currentLang);
}

// 🎯 Scroll - Fade-in
function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || "0s";
        entry.target.style.transitionDelay = delay;
        entry.target.classList.add("show-on-scroll");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".hidden-on-load").forEach((el) => observer.observe(el));
}

// 📱 Hamburger + Dropdown
function initMenuScripts() {
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.getElementById("menu-items");
  const dropdownToggle = document.getElementById("dropdown-toggle");
  const dropdownContainer = dropdownToggle?.parentElement;

menuItems?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    // NIE tykamy .active – tym zarządza skrypt „twardych” tras
    // Tylko kosmetyczna iskierka:
    ensureSparkStyle();
    a.querySelector(".spark")?.remove();
    const s = document.createElement("span");
    s.className = "spark";
    a.appendChild(s);
  });
});


  menuToggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    menuItems?.classList.toggle("show");
  });

  menuItems?.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => menuItems?.classList.remove("show"))
  );

  dropdownToggle?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdownContainer?.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!dropdownContainer?.contains(e.target) && !dropdownToggle?.contains(e.target)) {
      dropdownContainer?.classList.remove("open");
    }
    if (!menuItems?.contains(e.target) && !menuToggle?.contains(e.target)) {
      menuItems?.classList.remove("show");
    }
  });
}

// 📥 Dynamiczne menu


// ⬇️ Dynamiczne ładowanie stopki
function loadFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("../../footer.html")
      .then(res => res.text())
      .then(html => {
        footerPlaceholder.innerHTML = html;
      });
  }
}


// 🔹 Separator scroll animacja
function initSeparatorObserver() {
  const separators = document.querySelectorAll(".section-separator");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  separators.forEach(separator => {
    observer.observe(separator);
  });
}


document.addEventListener("DOMContentLoaded", function () {
  let pathPrefix = '';

  if (location.pathname.includes('/projects/')) {
    pathPrefix = '../../';
  } else if (location.pathname !== '/index.html' && location.pathname !== '/') {
    pathPrefix = './';
  }

  // ✅ Ładowanie MENU + linki + ikony + inicjalizacja
  fetch(pathPrefix + 'menu.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('menu-placeholder').innerHTML = html;

      document.querySelectorAll('#menu-placeholder a[data-target]').forEach(link => {
        const target = link.getAttribute('data-target');
        if (target) link.setAttribute('href', pathPrefix + target);
      });

      document.querySelectorAll('#menu-placeholder img[data-img]').forEach(img => {
        const imgPath = img.getAttribute('data-img');
        if (imgPath) img.setAttribute('src', pathPrefix + imgPath);
      });

      initMenuScripts();
      initThemeToggle();
      initTranslation();
      document.dispatchEvent(new Event('menu:loaded')); // uruchomi setActiveNavLink()

    });

  // ✅ Ładowanie FOOTER + poprawka ikon
  fetch(pathPrefix + 'footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;

      document.querySelectorAll('#footer-placeholder img[data-img]').forEach(img => {
        const imgPath = img.getAttribute('data-img');
        if (imgPath) img.setAttribute('src', pathPrefix + imgPath);
      });
    });

  // ✅ Inicjalizacje ogólne
  initScrollObserver();
  initSeparatorObserver();

});



document.addEventListener("DOMContentLoaded", function () {
  let pathPrefix = '';

  if (location.pathname.includes('/projects/')) {
    pathPrefix = '../../';
  } else if (location.pathname !== '/index.html' && location.pathname !== '/') {
    pathPrefix = './';
  }

  // ✅ Popraw ścieżkę do ikony w floating button
  document.querySelectorAll('.github-floating-button img').forEach(img => {
    img.setAttribute('src', pathPrefix + 'img/icons/github.svg');
  });
});


document.addEventListener('DOMContentLoaded', function () {
  fetch('../../addons/projects_data.json')
    .then(response => response.json())
    .then(data => {
      setupTimerObserver(data, 'pkportfolio', 'portfolio-timers', 'Czas pracy nad projektem PORTFOLIO', 'portfolio-hours');
      setupTimerObserver(data, 'Philips Hue', 'philips-timers', 'Czas pracy nad projektem PHILIPS HUE', 'project-hours');
      const portfolio = data.projects.find(p => p.key === "pkportfolio");
      if (!portfolio) return;

      const container = document.getElementById('projects-timers');
      if (!container) return;

      const tile = document.createElement('div');
      tile.className = 'tile hidden-on-load';

      tile.innerHTML = `
        <h3>CZAS PRACY NAD PROJEKTEM PORTFOLIO</h3>
        <div class="timer-wrapper">
          <div><span class="timer-value portfolio-hours">0</span><span class="timer-label">h</span></div>
          <div><span class="timer-value portfolio-minutes">0</span><span class="timer-label">min</span></div>
        </div>
      `;
      container.appendChild(tile);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tile.classList.add('show-on-scroll');
            animateCounter('.portfolio-hours', portfolio.hours);
            animateCounter('.portfolio-minutes', portfolio.minutes);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      observer.observe(tile);
    });

  function setupTimerObserver(data, key, containerId, title, className) {
    const project = data.projects.find(p => p.key === key);
    if (!project) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    const tile = document.createElement('div');
    tile.className = 'tile show-on-scroll';
    tile.innerHTML = `
      <h3>${title}</h3>
      <div class="timer-wrapper">
        <div><span class="timer-value ${className}">0</span><span class="timer-label">h</span></div>
      </div>
    `;
    container.appendChild(tile);

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(`.${className}`, project.hours);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(tile);
  }

  function animateCounter(selector, targetValue) {
    const el = document.querySelector(selector);
    if (!el) return;
    let current = 0;
    const increment = targetValue / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(interval);
      }
      el.textContent = Math.floor(current);
    }, 20);
  }
});


document.addEventListener('scroll', () => {
  const scrollProgress = document.querySelector('.scroll-progress');
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${scrolled}%`;
});


(function setFavicon() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/png'; // lub 'image/x-icon' jeśli .ico
  link.href = 'img/icons/favicon.png'; // ścieżka do pliku favicon
  document.head.appendChild(link);
})();

function formatParagraphs(text) {
  return text
    .trim()
    .split(/\n\s*\n/) // puste linie jako separator akapitów
    .map(p => `<p>${p.trim()}</p>`)
    .join('');
}

// === Tabelowe taby „Zainteresowania” ===
function initInterestTableTabs() {
  const bar = document.getElementById('interest-tabs-table');
  if (!bar) return;

  const tabs   = bar.querySelectorAll('.tab-cell');
  const panels = document.querySelectorAll('.tab-panel');

  function activate(name) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === name));
  }

  tabs.forEach(t => {
    t.addEventListener('click', () => activate(t.dataset.tab));
  });

  // start: aktywny z HTML lub pierwszy
  const initial = bar.querySelector('.tab-cell.active')?.dataset.tab || tabs[0]?.dataset.tab;
  if (initial) activate(initial);
}

// podłącz do Twoich hooków
document.addEventListener('DOMContentLoaded', initInterestTableTabs);
document.addEventListener('languageChanged', () => {
  // same teksty – aktywny tab pozostaje bez zmian
});

(function(){
  // --- Guard: nie uruchamiaj drugi raz na tej stronie
  if (window.__changelogLoaded) return;
  window.__changelogLoaded = true;

  // Pomocnik: czekaj na element w DOM (bez spamowania)
  function waitFor(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
      const el = document.querySelector(selector);
      if (el) return resolve(el);

      const obs = new MutationObserver(() => {
        const e = document.querySelector(selector);
        if (e) { obs.disconnect(); resolve(e); }
      });
      obs.observe(document.documentElement, { childList: true, subtree: true });

      setTimeout(() => { obs.disconnect(); reject(new Error("Timeout: " + selector)); }, timeout);
    });
  }

  // Wstrzykuje HTML i uruchamia skrypty z fragmentu
  function injectWithScripts(target, html) {
    target.innerHTML = html;
    const scripts = target.querySelectorAll("script");
    scripts.forEach(old => {
      const s = document.createElement("script");
      if (old.type) s.type = old.type;
      if (old.src) {
        s.src = new URL(old.getAttribute("src"), document.baseURI).toString();
        s.defer = true;
      } else {
        s.textContent = old.textContent;
      }
      document.body.appendChild(s);
      old.remove();
    });
  }

  async function init() {
    try {
      // poczekaj aż menu (a w nim placeholder) pojawi się w DOM
      const placeholder = await waitFor("#changelog-placeholder");

      const src = placeholder.getAttribute("data-src") || "/addons/changelog/changelog.html";
      const url = new URL(src, document.baseURI);

      // Guard: nie rób ponownie, jeśli ktoś już wypełnił placeholder
      if (placeholder.dataset.filled === "1") return;
      placeholder.dataset.filled = "1";

      const res = await fetch(url.toString(), { credentials: "same-origin", cache: "no-cache" });
      if (!res.ok) throw new Error("HTTP " + res.status + " for " + url);

      const html = await res.text();
      injectWithScripts(placeholder, html);
    } catch (e) {
      console.warn("[Changelog] Wczytanie nieudane:", e.message);
      const ph = document.getElementById("changelog-placeholder");
      if (ph) ph.textContent = "Changelog niedostępny.";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  // Jeśli masz własny loader menu (fetch do #menu-placeholder),
  // po jego zakończeniu możesz wywołać:
  // document.dispatchEvent(new Event('menu:loaded'));
  // i tutaj dodać jeszcze:
  document.addEventListener("menu:loaded", init, { once: true });
})();

/* ===== pfv2-banner — bezpieczny, realtime i18n + logika pokazywania ===== */
(function () {
  const ROOT = document.getElementById('pfv2-banner');
  if (!ROOT) return;

  // Nie pozwól globalnym tłumaczom dotykać tego subdrzewa
  ROOT.setAttribute('data-i18n-skip', '');

  // --- Mini słowniki bannera (prosty format z podkreślnikami) ---
  const DICTS = {
    pl: {
      pfv2_banner_region_aria: "Nowość: PiotrFlix v2 dostępny w projektach",
      pfv2_banner_link_aria:   "Przejdź do projektu PiotrFlix v2",
      pfv2_banner_logo_alt:    "Logo PiotrFlix",
      pfv2_banner_title:       "PiotrFlix v2",
      pfv2_banner_pill:        "Nowość",
      pfv2_banner_desc:        "PiotrFlix v2 jest już dostępny w sekcji „Projekty”.",
      pfv2_banner_close_title: "Zamknij",
      pfv2_banner_close_aria:  "Zamknij powiadomienie"
    },
    en: {
      pfv2_banner_region_aria: "New: PiotrFlix v2 is available in Projects",
      pfv2_banner_link_aria:   "Go to the PiotrFlix v2 project",
      pfv2_banner_logo_alt:    "PiotrFlix logo",
      pfv2_banner_title:       "PiotrFlix v2",
      pfv2_banner_pill:        "New",
      pfv2_banner_desc:        "PiotrFlix v2 is now available in the “Projects” section.",
      pfv2_banner_close_title: "Close",
      pfv2_banner_close_aria:  "Close notification"
    }
  };

  const norm = v => (String(v||'pl').toLowerCase().startsWith('en') ? 'en' : 'pl');
  const currentLang = () => {
    try { const ls = localStorage.getItem('lang'); if (ls) return norm(ls); } catch(_){}
    return norm(document.documentElement.getAttribute('lang') || 'pl');
  };
  const t = (key, lang) => (DICTS[lang||currentLang()]?.[key] ?? DICTS.pl[key] ?? '');

  // --- zastosuj tłumaczenia tylko w obrębie ROOT ---
  function applyI18n(lang){
    ROOT.setAttribute('aria-label', t('pfv2_banner_region_aria', lang));

    const a = ROOT.querySelector('.pfv2-link');
    if (a) a.setAttribute('aria-label', t('pfv2_banner_link_aria', lang));

    const logo = ROOT.querySelector('.pfv2-logo');
    if (logo) logo.setAttribute('alt', t('pfv2_banner_logo_alt', lang));

    const close = ROOT.querySelector('.pfv2-close');
    if (close){
      close.setAttribute('title', t('pfv2_banner_close_title', lang));
      close.setAttribute('aria-label', t('pfv2_banner_close_aria', lang));
    }

    const setText = (sel, key) => {
      const el = ROOT.querySelector(sel);
      if (el) el.textContent = t(key, lang);
    };
    setText('[data-i18n="pfv2_banner_title"]', 'pfv2_banner_title');
    setText('[data-i18n="pfv2_banner_pill"]',  'pfv2_banner_pill');
    setText('[data-i18n="pfv2_banner_desc"]',  'pfv2_banner_desc');
  }

  // --- show/hide + pamięć zamknięcia ---
  const KEY = 'pfv2_banner_hidden';
  function show(){ ROOT.classList.add('pfv2-show'); }
  function hide(){ ROOT.classList.remove('pfv2-show'); }

  const closeBtn = ROOT.querySelector('.pfv2-close');
  closeBtn?.addEventListener('click', () => {
    try { localStorage.setItem(KEY, '1'); } catch(_){}
    hide();
  });

  // init (po małym opóźnieniu żeby wejście było płynne)
  applyI18n();
  const hidden = (function(){ try { return localStorage.getItem(KEY) === '1'; } catch(_){ return false; }})();
  if (!hidden) setTimeout(show, 150);

  // --- realtime nasłuchy na zmianę języka ---
  document.addEventListener('languageChanged', e => applyI18n(e?.detail?.lang));
  window.addEventListener('pf:set-lang',      e => applyI18n(e?.detail?.lang));
  new MutationObserver(() => applyI18n()).observe(document.documentElement, { attributes:true, attributeFilter:['lang'] });
  window.addEventListener('storage', e => { if (e.key === 'lang') applyI18n(); });

  // podpinamy się pod globalną funkcję i18n, jeśli istnieje
  if (!window.__pfv2BannerI18nPatched && typeof window.i18nSetLang === 'function'){
    const prev = window.i18nSetLang;
    window.i18nSetLang = function(lang){
      prev(lang);
      applyI18n(lang);
      setTimeout(() => applyI18n(lang), 0);
    };
    window.__pfv2BannerI18nPatched = true;
  }
})();