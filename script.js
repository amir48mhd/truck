document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const revealItems = document.querySelectorAll(".card, .testimonial, .benefit, .step, .stat, .feature-box, .cta-box");

  const syncNav = () => {
    if (!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 16);
  };

  syncNav();
  window.addEventListener("scroll", syncNav, { passive: true });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => {
      item.classList.add("reveal");
      observer.observe(item);
    });
  }
});
