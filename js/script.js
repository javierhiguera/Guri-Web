/* =========================================================
   TAGBACK — JAVASCRIPT v12 (intro 700ms parpadeo)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       INTRO — parpadeo rápido, ~700ms total
       ===================================================== */

    const intro = document.getElementById("tb-intro");

    if (intro) {

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        const INTRO_KEY = "tagback-intro-shown";

        const hideIntro = () => {
            intro.classList.add("is-hiding");
            intro.setAttribute("aria-hidden", "true");

            const cleanup = () => {
                if (intro && intro.parentNode) {
                    intro.parentNode.removeChild(intro);
                }
            };

            intro.addEventListener("transitionend", cleanup, { once: true });
            setTimeout(cleanup, 500);
        };

        if (prefersReducedMotion) {
            setTimeout(hideIntro, 100);
        } else {

            let alreadyShown = false;

            try {
                alreadyShown = sessionStorage.getItem(INTRO_KEY) === "1";
            } catch (e) { /* ignorar */ }

            if (alreadyShown) {
                hideIntro();
            } else {
                /* La animación del logo dura 350ms.
                   Esperamos un poco para que se vea y arrancamos el fade out.
                   Total: ~700ms = parpadeo. */
                setTimeout(hideIntro, 450);

                try {
                    sessionStorage.setItem(INTRO_KEY, "1");
                } catch (e) { /* ignorar */ }
            }

        }

        window.addEventListener("error", () => {
            if (intro && intro.parentNode) {
                intro.style.display = "none";
            }
        });

    }


    /* =====================================================
       COOKIES — modal centrado
       ===================================================== */

    const COOKIE_KEY = "tagback-cookies-accepted";
    const cookieBanner = document.getElementById("cookie-banner");

    if (cookieBanner) {

        let alreadyAccepted = false;

        try {
            alreadyAccepted = localStorage.getItem(COOKIE_KEY) === "1";
        } catch (e) { /* ignorar */ }

        /* Mostrar después de la intro (que dura ~700ms).
           Delay de 1.2s para no superponer. */
        if (!alreadyAccepted) {
            setTimeout(() => {
                cookieBanner.classList.add("is-visible");
            }, 1200);
        }

        const acceptBtn = cookieBanner.querySelector("[data-cookie-accept]");
        const rejectBtn = cookieBanner.querySelector("[data-cookie-reject]");

        const closeBanner = (value) => {
            try {
                localStorage.setItem(COOKIE_KEY, value);
            } catch (e) { /* ignorar */ }

            cookieBanner.classList.remove("is-visible");

            setTimeout(() => {
                if (cookieBanner.parentNode) {
                    cookieBanner.parentNode.removeChild(cookieBanner);
                }
            }, 400);
        };

        if (acceptBtn) {
            acceptBtn.addEventListener("click", () => closeBanner("1"));
        }

        if (rejectBtn) {
            rejectBtn.addEventListener("click", () => closeBanner("0"));
        }

    }


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
       RESPETO A PREFERS-REDUCED-MOTION
       ===================================================== */

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       ANIMACIONES AL ENTRAR EN PANTALLA
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        [
            ".accordion-item",
            ".work-card",
            ".plan-card"
        ].join(", ")
    );

    if (
        !prefersReducedMotion &&
        "IntersectionObserver" in window &&
        animatedElements.length
    ) {

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    const el = entry.target;
                    const parent = el.parentElement;
                    const siblings = parent ? Array.from(parent.children) : [];
                    const index = siblings.indexOf(el);
                    const delay = Math.min(index, 4) * 90;

                    setTimeout(() => {
                        el.classList.add("visible");
                    }, delay);

                    observer.unobserve(el);
                });
            },
            {
                threshold: 0.10,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        animatedElements.forEach(el => observer.observe(el));

    } else {

        animatedElements.forEach(el => el.classList.add("visible"));

    }


    /* =====================================================
       ACORDEONES (Servicios + Beneficios)
       ===================================================== */

    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {

        const accHeader = item.querySelector(".accordion-header");
        if (!accHeader) return;

        accHeader.addEventListener("click", () => {

            const isOpen = item.classList.contains("is-open");

            /* Cerrar los hermanos del mismo stack */
            const stack = item.parentElement;
            if (stack) {
                stack.querySelectorAll(".accordion-item.is-open").forEach(sibling => {
                    if (sibling !== item) {
                        sibling.classList.remove("is-open");
                        const h = sibling.querySelector(".accordion-header");
                        if (h) h.setAttribute("aria-expanded", "false");
                    }
                });
            }

            item.classList.toggle("is-open", !isOpen);
            accHeader.setAttribute("aria-expanded", String(!isOpen));

        });

    });


    /* =====================================================
       AÑO DEL FOOTER
       ===================================================== */

    const currentYear = document.querySelector("[data-current-year]");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       FORMULARIO
       ===================================================== */

    const quoteForm = document.querySelector(".quote-form");

    if (quoteForm) {

        const formSubmit = quoteForm.querySelector(".quote-form-submit");
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const submitBtnDefaultText = submitBtn ? submitBtn.textContent : "";

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

        const getFieldError = (field) => {

            if (field.validity.valueMissing) {
                return "Este campo es obligatorio.";
            }

            if (field.validity.typeMismatch && field.type === "email") {
                return "Revisá este dato.";
            }

            if (field.name === "phone" && field.validity.patternMismatch) {
                return "Ingresá un número de teléfono válido.";
            }

            if (!field.checkValidity()) {
                return "Revisá este dato.";
            }

            return "";

        };

        const setFieldError = (field, message) => {

            const wrapper = field.closest(".form-field");
            if (!wrapper) return;

            let errorEl = wrapper.querySelector(".form-field-error");

            if (!errorEl) {
                errorEl = document.createElement("span");
                errorEl.className = "form-field-error";
                wrapper.appendChild(errorEl);
            }

            if (message) {
                field.setAttribute("aria-invalid", "true");
                errorEl.textContent = message;
                errorEl.classList.add("is-visible");
            } else {
                field.removeAttribute("aria-invalid");
                errorEl.textContent = "";
                errorEl.classList.remove("is-visible");
            }

        };

        const validateField = (field) => {
            const message = getFieldError(field);
            setFieldError(field, message);
            return !message;
        };

        quoteForm.querySelectorAll("input, textarea, select").forEach(field => {
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

            const fields = quoteForm.querySelectorAll("input, textarea, select");
            let allValid = true;

            fields.forEach(field => {
                if (!validateField(field)) {
                    allValid = false;
                }
            });

            if (!allValid) {
                const firstInvalid = quoteForm.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
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
                    "Estamos configurando el formulario. Mientras tanto, escribinos a projects@tagback.com"
                );

                return;

            }

            submitBtn.disabled = true;
            submitBtn.textContent = "Enviando consulta…";

            const formData = new FormData(quoteForm);

            fetch(action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            })
            .then(response => {

                if (response.ok) {
                    showFeedback(
                        "success",
                        "Tu consulta fue enviada correctamente. Nos pondremos en contacto con vos."
                    );
                    quoteForm.reset();
                    quoteForm.querySelectorAll('[aria-invalid="true"]').forEach(f => {
                        f.removeAttribute("aria-invalid");
                    });
                    quoteForm.querySelectorAll(".form-field-error").forEach(e => {
                        e.textContent = "";
                        e.classList.remove("is-visible");
                    });
                } else {
                    throw new Error("Error en la respuesta");
                }

            })
            .catch(() => {
                showFeedback(
                    "error",
                    "No pudimos enviar tu consulta. Intentá nuevamente o escribinos a projects@tagback.com"
                );
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = submitBtnDefaultText;
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
