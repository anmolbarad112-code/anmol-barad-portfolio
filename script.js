const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menu?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", e => {
  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});


/* ==============================
   PORTFOLIO FILTER
============================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioGrids = document.querySelectorAll(".portfolio-grid");
const comingGrid = document.querySelector(".coming-grid");

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const filter = button.dataset.filter;

    /* Active button */
    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");


    /* Graphic Design + 3D Models */

    portfolioGrids.forEach(grid => {

      const category = grid.dataset.category;
      const heading = grid.previousElementSibling;

      if (filter === "all" || category === filter) {

        grid.style.display = "";

        if (heading && heading.classList.contains("category-title")) {
          heading.style.display = "";
        }

      } else {

        grid.style.display = "none";

        if (heading && heading.classList.contains("category-title")) {
          heading.style.display = "none";
        }

      }

    });


    /* Video Editing + Animation */

    if (comingGrid) {

      if (
        filter === "all" ||
        filter === "video" ||
        filter === "animation"
      ) {

        comingGrid.style.display = "";

        const boxes = comingGrid.querySelectorAll("div");

        boxes.forEach(box => {

          const type = box.querySelector("span")?.textContent
            .trim()
            .toLowerCase();

          if (filter === "all") {

            box.style.display = "";

          } else if (filter === "video") {

            box.style.display =
              type === "video editing" ? "" : "none";

          } else if (filter === "animation") {

            box.style.display =
              type === "animation" ? "" : "none";

          }

        });

      } else {

        comingGrid.style.display = "none";

      }

    }

  });

});
