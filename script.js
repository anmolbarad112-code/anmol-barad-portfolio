const menu = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
menu?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const glow = document.querySelector(".cursor-glow");
window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
// Portfolio filters
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioGrids = document.querySelectorAll(".portfolio-grid");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    portfolioGrids.forEach(grid => {
      if (filter === "all" || grid.dataset.category === filter) {
        grid.parentElement.style.display = "";
      } else {
        grid.parentElement.style.display = "none";
      }
    });
  });
});
