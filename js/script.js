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

        let resizeTimer;

        window.addEventListener("resize", () => {

            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(() => {

                if (window.innerWidth > 900) {
                    closeMenu();
                }

            }, 120);

        });

    }


    /* =====================================================
       HEADER AL HACER SCROLL
       ===================================================== */

    if (header) {

        let ticking = false;

        const updateHeader = () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 20
            );

            ticking = false;

        };

        const onScroll = () => {

            if (ticking) {
                return;
            }

            ticking = true;

            window.requestAnimationFrame(updateHeader);

        };

        window.addEventListener("scroll", onScroll, {
            passive: true
        });

        updateHeader();

    }


    /* =====================================================
       ANIMACIONES AL ENTRAR EN PANTALLA
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        [
            ".orbit-item",
            ".work-card",
            ".process-step",
            ".plan-card",
            ".brainstorm-item",
            ".digital-icon",
            ".digital-emoji"
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

            const action = quoteForm.getAttribute("action");

            /* Bloquea el envío si todavía no configuraste
               el endpoint real (Formspree, EmailJS, etc.) */

            if (
                !action ||
                action === "#" ||
                action.includes("TU_ID")
            ) {

                event.preventDefault();

                console.warn(
                    "Formulario no configurado: reemplazá TU_ID en el action del <form>."
                );

            }

        });

    }

});
