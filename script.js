/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

}


/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    /* Active button */
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    /* Selected category */
    const filter = button.dataset.filter;

    /* Show / hide projects */
    projectCards.forEach(card => {

      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }

    });

  });

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {

  document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

  });

}


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.1
    }
  );

  revealElements.forEach(element => {
    observer.observe(element);
  });

} else {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}
