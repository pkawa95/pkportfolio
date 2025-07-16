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
function loadMenuAndInit() {
  fetch("/menu.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("menu-placeholder").innerHTML = html;
      initMenuScripts();
      initThemeToggle();
      initTranslation();
    });
}

// ⬇️ Dynamiczne ładowanie stopki
function loadFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("/footer.html")
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

// 🔸 Podświetlenie aktywnego linku menu
function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".menu-items a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href === currentPath) {
      link.classList.add("active");
    }
  });
}

// ✅ Inicjalizacja główna
document.addEventListener("DOMContentLoaded", () => {
  loadMenuAndInit();
  loadFooter();
  initScrollObserver();
  initSeparatorObserver();
  highlightActiveNavLink();
});

function initTranslation() {
  const currentLang = localStorage.getItem("lang") || "pl";
  window.currentLang = currentLang;  // Ustawiamy globalnie!
  translate(currentLang);
}

