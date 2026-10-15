/* =========================================================
   TAGBACK — JAVASCRIPT v3
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
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menú");
        };

        const openMenu = () => {
            header.classList.add("menu-open");
            document.body.classList.add("menu-open");
            mainNav.classList.add("is-open");
            menuToggle.classList.add("active");
            menuToggle.setAttribute("aria-expanded", "true");
            menuToggle.setAttribute("aria-label", "Cerrar menú");
        };

        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.contains("is-open");
            if (isOpen) { closeMenu(); } else { openMenu(); }
        });

        mainNav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => { closeMenu(); });
        });

        document.addEventListener("keydown", event => {
            if (event.key === "Escape" && mainNav.classList.contains("is-open")) {
                closeMenu();
            }
        });

        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                if (window.innerWidth > 900) { closeMenu(); }
            }, 120);
        });

    }


    /* =====================================================
       HEADER AL HACER SCROLL
       ===================================================== */

    if (header) {

        let ticking = false;

        const updateHeader = () => {
            header.classList.toggle("scrolled", window.scrollY > 20);
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateHeader);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        updateHeader();

    }


    /* =====================================================
       ANIMACIONES AL ENTRAR EN PANTALLA
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        [
            ".service-card",
            ".why-row",
            ".process-card",
            ".plan-card",
            ".work-card"
        ].join(", ")
    );

    if ("IntersectionObserver" in window && animatedElements.length) {

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        animatedElements.forEach(element => observer.observe(element));

    } else {

        animatedElements.forEach(element => element.classList.add("visible"));

    }


    /* =====================================================
       AÑO DEL FOOTER
       ===================================================== */

    const currentYear = document.querySelector("[data-current-year]");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       FORMULARIO — validación + estados
       ===================================================== */

    const quoteForm = document.querySelector(".quote-form");

    if (quoteForm) {

        const formSubmit = quoteForm.querySelector(".quote-form-submit");
        const submitBtn = quoteForm.querySelector('button[type="submit"]');

        const showFeedback = (type, message) => {

            let feedback = quoteForm.querySelector(".form-feedback");

            if (!feedback) {
                feedback = document.createElement("p");
                feedback.className = "form-feedback";
                formSubmit.appendChild(feedback);
            }

            feedback.className = `form-feedback form-feedback--${type}`;
            feedback.textContent = message;
            feedback.setAttribute("role", "status");
            feedback.setAttribute("aria-live", "polite");

        };

        const clearFeedback = () => {
            const feedback = quoteForm.querySelector(".form-feedback");
            if (feedback) feedback.remove();
        };

        const validateField = (field) => {

            if (field.checkValidity()) {
                field.removeAttribute("aria-invalid");
                return true;
            }

            field.setAttribute("aria-invalid", "true");
            return false;

        };

        quoteForm.querySelectorAll("input, textarea").forEach(field => {
            field.addEventListener("blur", () => validateField(field));
            field.addEventListener("input", () => {
                if (field.getAttribute("aria-invalid") === "true") {
                    validateField(field);
                }
            });
        });

        quoteForm.addEventListener("submit", event => {

            event.preventDefault();
            clearFeedback();

            if (!quoteForm.checkValidity()) {
                quoteForm.reportValidity();
                return;
            }

            const action = quoteForm.getAttribute("action");

            if (!action || action === "#" || action.includes("TU_ID")) {

                console.warn(
                    "TAGBACK: el formulario no está configurado. " +
                    "Reemplazá TU_ID en el action del <form> por tu ID de Formspree."
                );

                showFeedback(
                    "info",
                    "Formulario en configuración. Mientras tanto, escribinos a hola@tagback.com"
                );

                return;

            }

            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = "Enviando...";

            const formData = new FormData(quoteForm);

            fetch(action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            })
            .then(response => {

                if (response.ok) {
                    showFeedback("success", "¡Mensaje enviado! Te respondemos en menos de 24 horas.");
                    quoteForm.reset();
                } else {
                    throw new Error("Error en la respuesta");
                }

            })
            .catch(() => {
                showFeedback(
                    "error",
                    "No pudimos enviar el mensaje. Probá de nuevo o escribinos a hola@tagback.com"
                );
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            });

        });

    }


    /* =====================================================
       NAVEGACIÓN SUAVE PARA ANCLAS
       ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#" || targetId.length < 2) return;

            const target = document.querySelector(targetId);

            if (!target) return;

            if (!("scrollBehavior" in document.documentElement.style)) {
                event.preventDefault();
                const headerOffset = 90;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;
                window.scrollTo({ top: targetPosition, behavior: "smooth" });
            }

        });

    });

});
