/* =========================
   MOBILE MENU
========================= */

document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");

      menuBtn.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });

    navLinks.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

  }


  /* =========================
     PORTFOLIO FILTER
  ========================= */

  const filterButtons =
    document.querySelectorAll(".filter-btn");

  const projectCards =
    document.querySelectorAll(".project-card");

  const portfolioEmpty =
    document.querySelector("#portfolioEmpty");


  console.log(
    "Filter buttons:",
    filterButtons.length
  );

  console.log(
    "Project cards:",
    projectCards.length
  );


  filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

      /* Remove active class */
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });


      /* Add active class */
      button.classList.add("active");


      /* Get selected category */
      const filter =
        button.getAttribute("data-filter");


      let visibleCount = 0;


      /* Filter project cards */
      projectCards.forEach((card) => {

        const category =
          card.getAttribute("data-category");


        if (
          filter === "all" ||
          category === filter
        ) {

          card.style.display = "";

          visibleCount++;

        } else {

          card.style.display = "none";

        }

      });


      /* Coming Soon */
      if (portfolioEmpty) {

        if (visibleCount === 0) {

          portfolioEmpty.style.display = "flex";

        } else {

          portfolioEmpty.style.display = "none";

        }

      }

    });

  });


  /* =========================
     CURSOR GLOW
  ========================= */

  const cursorGlow =
    document.querySelector(".cursor-glow");


  if (cursorGlow) {

    document.addEventListener("mousemove", (e) => {

      cursorGlow.style.left =
        e.clientX + "px";

      cursorGlow.style.top =
        e.clientY + "px";

    });

  }


  /* =========================
     REVEAL ANIMATION
  ========================= */

  const revealElements =
    document.querySelectorAll(".reveal");


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add("visible");

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.1
        }
      );


    revealElements.forEach((element) => {

      observer.observe(element);

    });

  } else {

    revealElements.forEach((element) => {

      element.classList.add("visible");

    });

  }

});
