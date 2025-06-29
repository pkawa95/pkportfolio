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
  fetch("/pkportfolio/menu.html")
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
    fetch("/pkportfolio/footer.html")
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

// 🖼️ Uniwersalna funkcja inicjalizacji karuzeli
function initCarousel(carouselId, dotsContainerId, itemsPerPage = 3, autoScrollInterval = 5000) {
  const carousel = document.getElementById(carouselId);
  const dotsContainer = document.getElementById(dotsContainerId);
  const images = carousel.querySelectorAll('img');
  const totalPages = Math.ceil(images.length / itemsPerPage);
  let currentPage = 0;

  // Generowanie kropek
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalPages; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToPage(i));
    dotsContainer.appendChild(dot);
  }
  updateDots();

  function scrollCarousel(direction) {
    currentPage += direction;
    if (currentPage < 0) currentPage = 0;
    if (currentPage >= totalPages) currentPage = totalPages - 1;
    goToPage(currentPage);
  }

  function goToPage(page) {
    const slide = carousel.querySelector('img');
    const slideWidth = slide.offsetWidth;
    const gap = parseInt(getComputedStyle(carousel).gap) || 0;
    const totalSlideWidth = slideWidth + gap;

    const scrollAmount = page * (totalSlideWidth * itemsPerPage);
    carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    currentPage = page;
    updateDots();
  }

  function updateDots() {
    dotsContainer.querySelectorAll('span').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentPage);
    });
  }

  // Auto scroll
  let autoScroll = setInterval(() => {
    currentPage = (currentPage + 1) % totalPages;
    goToPage(currentPage);
  }, autoScrollInterval);

  // Pause on hover/touch
  carousel.addEventListener('mouseover', () => clearInterval(autoScroll));
  carousel.addEventListener('mouseout', () => {
    autoScroll = setInterval(() => {
      currentPage = (currentPage + 1) % totalPages;
      goToPage(currentPage);
    }, autoScrollInterval);
  });

  // Publiczne zwracanie funkcji dla przycisków nawigacji
  return { scrollCarousel };
}

// 🖼️ Lightbox (pozostaje bez zmian)
let currentLightboxIndex = 0;
let currentLightboxImages = [];

function openLightbox(img) {
  currentLightboxImages = Array.from(document.querySelectorAll('.carousel img'));
  currentLightboxIndex = currentLightboxImages.indexOf(img);
  updateLightbox();
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "block";
  lightbox.style.zIndex = "999999";
  const closeBtn = lightbox.querySelector('.close');
  closeBtn.style.zIndex = "1000000";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function updateLightbox() {
  const img = currentLightboxImages[currentLightboxIndex];
  document.getElementById("lightbox-img").src = img.src;
}

function prevImage() {
  currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
  updateLightbox();
}

function nextImage() {
  currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
  updateLightbox();
}

// ✅ Inicjalizacja karuzel po DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const frontend = initCarousel('frontend-carousel', 'carousel-dots');
  const mobile = initCarousel('mobile-carousel', 'mobile-carousel-dots');

  // Przypisanie funkcji do globalnego scope dla onclick w HTML
  window.scrollCarousel = frontend.scrollCarousel;
  window.scrollCarouselMobile = mobile.scrollCarousel;
});
