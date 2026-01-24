/* ================================
   SCROLL REVEAL (USED BY PROJECT TILES)
================================ */

const observerOptions = {
  root: null,
  threshold: 0.1,
};

const revealOnScroll = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(revealOnScroll, observerOptions);

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".animate-on-scroll")
    .forEach((el) => observer.observe(el));
});
