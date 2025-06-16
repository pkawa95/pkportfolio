// script.js

const themeToggle = document.getElementById("theme-toggle");
const langToggle = document.getElementById("lang-toggle");
const body = document.body;

function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
});

applyTheme(localStorage.getItem("theme") || "light");

// =========================
// 🌍 JĘZYK / LANGUAGE
// =========================
function translate(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      el.innerHTML = t[key]; // <-- kluczowa zmiana tutaj
    }
  });

  if (t.title) document.title = t.title;

  langToggle.textContent = lang === "pl" ? "EN" : "PL";
  localStorage.setItem("lang", lang);
}

let currentLang = localStorage.getItem("lang") || "pl";
translate(currentLang);

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "pl" ? "en" : "pl";
  translate(currentLang);
});

// ========== ANIMACJA SCROLL FADE-IN-UP ==========
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-on-scroll');
      observer.unobserve(entry.target); // animacja tylko raz
    }
  });
}, {
  threshold: 0.2 // widoczność elementu w 20% wystarcza
});

document.querySelectorAll('.hidden-on-load').forEach(el => observer.observe(el));
