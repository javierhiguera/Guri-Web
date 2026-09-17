/* =========================================================
   GURI — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MENÚ MÓVIL
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const isOpen = mainNav.classList.toggle("mobile-open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

        /* Cerrar menú al seleccionar una opción */

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mainNav.classList.remove("mobile-open");
                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =====================================================
       HEADER AL HACER SCROLL
       ===================================================== */

    const header = document.querySelector(".site-header");

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
        ".service-card, .work-card, .process-item, .plan-card"
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

        /* Fallback */

        animatedElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    /* =====================================================
       AÑO AUTOMÁTICO DEL FOOTER
       ===================================================== */

    const currentYear = document.querySelector(
        "[data-current-year]"
    );

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       SLIDER DE PROYECTOS
       ===================================================== */

    const projectSliders =
        document.querySelectorAll(".project-slider");

    /*
     * Cada proyecto tiene su propio ritmo.
     *
     * Proyecto 1 → 3000 ms
     * Proyecto 2 → 4500 ms
     * Proyecto 3 → 6200 ms
     *
     * Cada slider comienza con un retraso diferente
     * para evitar que las transiciones coincidan.
     */

    const sliderSettings = [
        {
            interval: 3000,
            delay: 0
        },
        {
            interval: 4500,
            delay: 1500
        },
        {
            interval: 6200,
            delay: 2800
        }
    ];

    projectSliders.forEach((slider, index) => {

        const slides =
            slider.querySelectorAll(".project-slide");

        if (slides.length <= 1) {
            return;
        }

        let currentSlide = 0;

        const settings =
            sliderSettings[index] || {
                interval: 4000,
                delay: 1000
            };

        const changeSlide = () => {

            slides[currentSlide].classList.remove("active");

            currentSlide =
                (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");

        };

        /*
         * Primer cambio con retraso independiente.
         */

        window.setTimeout(() => {

            changeSlide();

            /*
             * Después del primer cambio,
             * continúa con su propio intervalo.
             */

            window.setInterval(
                changeSlide,
                settings.interval
            );

        }, settings.delay + settings.interval);

    });

});
