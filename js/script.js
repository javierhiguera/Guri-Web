/* =========================================================
   GURI — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENÚ MÓVIL
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    const header = document.querySelector(".site-header");

    if (menuToggle && mainNav && header) {

        const closeMenu = () => {

            header.classList.remove("menu-open");
            document.body.classList.remove("menu-open");

            mainNav.classList.remove("is-open");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        };

        const openMenu = () => {

            header.classList.add("menu-open");
            document.body.classList.add("menu-open");

            mainNav.classList.add("is-open");

            menuToggle.classList.add("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

        };

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mainNav.classList.contains("is-open");

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }

        });


        /* Cerrar menú al seleccionar una opción */

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                closeMenu();
            });

        });


        /* Cerrar menú con ESC */

        document.addEventListener("keydown", event => {

            if (
                event.key === "Escape" &&
                mainNav.classList.contains("is-open")
            ) {
                closeMenu();
            }

        });


        /* Cerrar menú al pasar de mobile a desktop */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 900) {
                closeMenu();
            }

        });

    }


    /* =====================================================
       HEADER AL HACER SCROLL
       ===================================================== */

    if (header) {

        const updateHeader = () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 20
            );

        };

        window.addEventListener("scroll", updateHeader, {
            passive: true
        });

        updateHeader();

    }


    /* =====================================================
       ANIMACIONES AL ENTRAR EN PANTALLA
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        [
            ".service-item",
            ".work-card",
            ".process-step",
            ".plan-card",
            ".brainstorm-item",
            ".digital-management-item"
        ].join(", ")
    );

    if (
        "IntersectionObserver" in window &&
        animatedElements.length
    ) {

        const observer = new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                });

            },
            {
                threshold: 0.12
            }
        );

        animatedElements.forEach(element => {
            observer.observe(element);
        });

    } else {

        animatedElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       AÑO DEL FOOTER
       ===================================================== */

    const currentYear = document.querySelector(
        "[data-current-year]"
    );

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       FORMULARIO DE PRESUPUESTO
       ===================================================== */

    const quoteForm = document.querySelector(".quote-form");

    if (quoteForm) {

        quoteForm.addEventListener("submit", event => {

            if (quoteForm.getAttribute("action") === "#") {
                event.preventDefault();
            }

        });

    }

});
