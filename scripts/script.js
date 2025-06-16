// =======================
// 🌙 Motyw jasny/ciemny
// =======================
const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const body = document.body;

function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

themeToggle?.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});

applyTheme(localStorage.getItem("theme") || "light");

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

  if (t.title) document.title = t.title;
  langToggle.textContent = lang === "pl" ? "EN" : "PL";
  localStorage.setItem("lang", lang);
}

let currentLang = localStorage.getItem("lang") || "pl";
translate(currentLang);

langToggle?.addEventListener("click", () => {
  currentLang = currentLang === "pl" ? "en" : "pl";
  translate(currentLang);
});

// =======================
// 🎯 Scroll - Fade-in
// =======================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-on-scroll");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".hidden-on-load").forEach((el) => observer.observe(el));

// =======================
// 📱 Hamburger + Dropdown
// =======================
const menuToggle = document.getElementById("menu-toggle");
const menuItems = document.getElementById("menu-items");
const dropdownToggle = document.getElementById("dropdown-toggle");
const dropdownContainer = dropdownToggle?.parentElement;

// Toggle hamburger
menuToggle?.addEventListener("click", (e) => {
  e.stopPropagation();
  menuItems?.classList.toggle("show");
});

// Auto-close hamburger on link click
menuItems?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => menuItems?.classList.remove("show"))
);

// Toggle dropdown "Projekty"
dropdownToggle?.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation(); // zapobiega zamknięciu przez globalny click
  dropdownContainer?.classList.toggle("open");
});

// Zamknięcie dropdownu i hamburgera przy kliknięciu poza
document.addEventListener("click", (e) => {
  if (!dropdownContainer?.contains(e.target)) {
    dropdownContainer?.classList.remove("open");
  }
  if (!menuItems?.contains(e.target) && !menuToggle?.contains(e.target)) {
    menuItems?.classList.remove("show");
  }
});
