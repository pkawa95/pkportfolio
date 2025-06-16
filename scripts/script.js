// =======================
// 🌙 Motyw jasny/ciemny
// =======================
function applyTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle?.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    applyTheme(newTheme);
  });

  applyTheme(localStorage.getItem("theme") || "light");
}

// =======================
// 🌍 Tłumaczenia PL/EN
// =======================
function translate(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.innerHTML = t[key];
  });

  document.title = t.title || document.title;

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = lang === "pl" ? "EN" : "PL";
    langToggle.addEventListener("click", () => {
      const newLang = lang === "pl" ? "en" : "pl";
      translate(newLang);
      localStorage.setItem("lang", newLang);
    });
  }

  localStorage.setItem("lang", lang);
}

function initTranslation() {
  const currentLang = localStorage.getItem("lang") || "pl";
  translate(currentLang);
}

// =======================
// 🎯 Scroll - Fade-in + Delay
// =======================
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

// =======================
// 📱 Hamburger + Dropdown
// =======================
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

// =======================
// 📥 Dynamiczne menu
// =======================
function loadMenuAndInit() {
  fetch('/pkportfolio/menu.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('menu-placeholder').innerHTML = html;
      initMenuScripts();
      initThemeToggle();     // potrzebne, bo przycisk wczytywany z menu
      initTranslation();     // aktualizacja języka po wczytaniu menu
    });
}

// =======================
// ✅ Inicjalizacja
// =======================
document.addEventListener("DOMContentLoaded", () => {
  loadMenuAndInit();
  initScrollObserver();
});
