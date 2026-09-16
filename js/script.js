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

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

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

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

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

        currentYear.textContent =
            new Date().getFullYear();

    }


    /* =====================================================
       SLIDER DE PROYECTOS
       ===================================================== */

    const projectSliders = document.querySelectorAll(".project-slider");

    projectSliders.forEach(slider => {

        const slides = slider.querySelectorAll(".project-slide");

        if (slides.length <= 1) return;

        let currentSlide = 0;

        setInterval(() => {

            slides[currentSlide].classList.remove("active");

            currentSlide = (currentSlide + 1) % slides.length;

            slides[currentSlide].classList.add("active");

        }, 3000);

    });

});
