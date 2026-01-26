// =============================================
// NAV.JS - Navegación completa para todo el sitio
// =============================================

// =============================================
// FUNCIÓN PRINCIPAL PARA INDEX.HTML
// (scroll suave dentro de la misma página)
// =============================================
function initNav() {
  setupLanguageSelector();
  setupMobileMenu();

  // Scroll suave para enlaces internos (solo en index.html)
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Cerrar menú móvil si está abierto
      const menuToggle = document.getElementById("menu-toggle");
      if (menuToggle) menuToggle.checked = false;
    });
  });
}

// =============================================
// FUNCIÓN PARA OTRAS PÁGINAS (motion, 3d, posters)
// (redirige a index.html#seccion)
// =============================================
function initNavExternal() {
  setupLanguageSelector();
  setupMobileMenu();

  // Redirigir enlaces del nav a index.html#seccion
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      // Redirigir a index.html con el ancla
      window.location.href = "index.html" + targetId;
    });
  });
}

// =============================================
// SELECTOR DE IDIOMA
// =============================================
function setupLanguageSelector() {
  const langSelect = document.getElementById("lang-select");
  if (!langSelect) return;

  // Cargar idioma guardado
  const savedLang = localStorage.getItem("siteLang") || "es";
  langSelect.value = savedLang;
  applyLanguage(savedLang);

  // Cambiar idioma al seleccionar
  langSelect.addEventListener("change", function () {
    const lang = this.value;
    localStorage.setItem("siteLang", lang);
    applyLanguage(lang);
  });
}

function applyLanguage(lang) {
  document.querySelectorAll("[data-es]").forEach((el) => {
    el.textContent = lang === "es" ? el.dataset.es : el.dataset.en;
  });
}

// =============================================
// MENÚ MÓVIL
// =============================================
function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileLinks = document.querySelectorAll(".mobile-links a");

  // Cerrar menú al hacer click en un enlace
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (menuToggle) menuToggle.checked = false;
    });
  });
}
