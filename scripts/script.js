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


// =======================
// ⬇️ Dynamiczne ładowanie footera
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    fetch("footer.html")
      .then((res) => res.text())
      .then((html) => {
        footerPlaceholder.innerHTML = html;
      });
  }
});


// 🔹 Separator animacja scroll
const separators = document.querySelectorAll('.section-separator');

const separatorObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      separatorObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

separators.forEach(separator => {
  separatorObserver.observe(separator);
});


/* Dark/Light Mode Switch */ 
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function updateIcon(isDark) {
  themeIcon.innerHTML = isDark
    ? '<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIcon(isDark);
});

// Init
const stored = localStorage.getItem("theme") === "dark";
document.body.classList.toggle("dark", stored);
updateIcon(stored);


const themeToggleCheckbox = document.getElementById("theme-toggle");

if (themeToggleCheckbox) {
  const storedTheme = localStorage.getItem("theme") || "light";
  document.body.classList.toggle("dark", storedTheme === "dark");
  themeToggleCheckbox.checked = storedTheme === "dark";

  themeToggleCheckbox.addEventListener("change", () => {
    const isDark = themeToggleCheckbox.checked;
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}


/*Podświetlenie strony menu*/
const links = document.querySelectorAll('.menu-items a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});


// Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").slice(-1)[0] || "index.html";
  const navLinks = document.querySelectorAll(".menu-items a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href === currentPath) {
      link.classList.add("active");
    }
  });
});
