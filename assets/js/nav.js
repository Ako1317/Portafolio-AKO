// nav.js
function initNav() {
  // ===== CAMBIO DE IDIOMA =====
  const langSelect = document.getElementById("lang-select");

  function cambiarIdioma(lang) {
    document.querySelectorAll("[data-es]").forEach((el) => {
      if (el.dataset[lang]) el.textContent = el.dataset[lang];
    });
  }

  const langGuardado = localStorage.getItem("lang") || "es";
  cambiarIdioma(langGuardado);

  if (langSelect) {
    langSelect.value = langGuardado;
    langSelect.addEventListener("change", () => {
      const lang = langSelect.value;
      localStorage.setItem("lang", lang);
      cambiarIdioma(lang);
    });
  }

  // ===== SCROLL SUAVE =====
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (targetId.length <= 1) return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      const menuToggle = document.getElementById("menu-toggle");
      if (menuToggle) menuToggle.checked = false;
    });
  });
}
