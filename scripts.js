
document.addEventListener("DOMContentLoaded", () => {
  // Automatically update the footer year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Reveal sections and cards when they enter the viewport
  const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .project-card, .contact-card"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerInstance.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px"
      }
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  }

  // Close the mobile navbar after clicking a navigation link
  const navbar = document.getElementById("navbarNav");

  if (navbar && window.bootstrap) {
    navbar.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (
          navbar.classList.contains("show") &&
          window.innerWidth < 992
        ) {
          window.bootstrap.Collapse.getOrCreateInstance(navbar).hide();
        }
      });
    });
  }
});
