document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("open");

            const isOpen = navLinks.classList.contains("open");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        const navItems = navLinks.querySelectorAll("a");

        navItems.forEach(function (link) {

            link.addEventListener("click", function () {

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
        document.getElementById("portfolioEmpty");


    function filterPortfolio(selectedFilter) {

        let visibleCount = 0;

        projectCards.forEach(function (card) {

            const category =
                card.getAttribute("data-category");

            const shouldShow =
                selectedFilter === "all" ||
                category === selectedFilter;

            if (shouldShow) {

                card.style.display = "";

                visibleCount++;

            } else {

                card.style.display = "none";

            }

        });


        /* Coming Soon message */

        if (portfolioEmpty) {

            if (visibleCount === 0) {

                portfolioEmpty.style.display = "flex";

            } else {

                portfolioEmpty.style.display = "none";

            }

        }

    }


    filterButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.preventDefault();

            const selectedFilter =
                button.getAttribute("data-filter");


            /* Active button */

            filterButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });

            button.classList.add("active");


            /* Apply filter */

            filterPortfolio(selectedFilter);

        });

    });


    /* =========================
       INITIAL PORTFOLIO STATE
    ========================= */

    filterPortfolio("all");


    /* =========================
       CURSOR GLOW
    ========================= */

    const cursorGlow =
        document.querySelector(".cursor-glow");

    if (cursorGlow) {

        document.addEventListener("mousemove", function (event) {

            cursorGlow.style.left =
                event.clientX + "px";

            cursorGlow.style.top =
                event.clientY + "px";

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
                function (entries) {

                    entries.forEach(function (entry) {

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


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("visible");

        });

    }

});
