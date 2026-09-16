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
            mainNav.classList.toggle("mobile-open");
            menuToggle.classList.toggle("active");
        });


        /* Cerrar menú al seleccionar una opción */

        mainNav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                mainNav.classList.remove("mobile-open");
                menuToggle.classList.remove("active");
            });

        });

    }


    /* =====================================================
       HEADER AL HACER SCROLL
       ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 20) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    /* =====================================================
       ANIMACIONES AL ENTRAR EN PANTALLA
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        ".service-card, .work-card, .process-item, .plan-card"
    );

    if ("IntersectionObserver" in window && animatedElements.length) {

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

    }


    /* =====================================================
       AÑO AUTOMÁTICO DEL FOOTER
       ===================================================== */

    const currentYear = document.querySelector("[data-current-year]");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

});
