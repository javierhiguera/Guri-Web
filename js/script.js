/* =========================================================
   TAGBACK — JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CORTINA DE ENTRADA — se ejecuta una vez por sesión
       ===================================================== */

    const INTRO_KEY = "tagback-intro-shown";
    const introCurtain = document.getElementById("intro-curtain");

    const shouldShowIntro = () => {
        try {
            return sessionStorage.getItem(INTRO_KEY) !== "1";
        } catch (e) {
            return true;
        }
    };

    const markIntroDone = () => {
        try {
            sessionStorage.setItem(INTRO_KEY, "1");
        } catch (e) { /* nada */ }
    };

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (introCurtain && shouldShowIntro() && !prefersReducedMotion) {

        document.body.classList.add("intro-locked");

        /* Después de que termina la animación de la cortina */
        setTimeout(() => {
            introCurtain.classList.add("is-hidden");
            document.body.classList.remove("intro-locked");
            document.body.classList.add("intro-done");
            markIntroDone();
        }, 1500);

    } else {

        /* Sin intro: se muestra el hero directo */
        if (introCurtain) introCurtain.classList.add("is-hidden");
        document.body.classList.add("intro-done");

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
       ANIMACIONES AL ENTRAR EN PANTALLA
       ===================================================== */

    const animatedElements = document.querySelectorAll(
        [
            ".service-card",
            ".why-row",
            ".process-card",
            ".plan-card",
            ".work-card",
            ".trust-note"
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
       FORMULARIO
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
                    "Formulario en configuración. Mientras tanto, escribinos a projects@tagback.com.ar"
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
                    "No pudimos enviar el mensaje. Probá de nuevo o escribinos a projects@tagback.com.ar"
                );

            })
            .finally(() => {

                submitBtn.disabled = false;
                submitBtn.textContent = originalText;

            });

        });

    }


    /* =====================================================
       COOKIES — Banner + Modal
       ===================================================== */

    const COOKIE_KEY = "tagback-cookie-consent";
    const COOKIE_VERSION = "1.0";

    const banner = document.getElementById("cookie-banner");
    const modal = document.getElementById("cookie-modal");
    const btnAccept = document.getElementById("cookie-accept");
    const btnReject = document.getElementById("cookie-reject");
    const btnConfig = document.getElementById("cookie-config");
    const btnSaveConfig = document.getElementById("cookie-save");
    const btnCloseModal = document.getElementById("cookie-close-modal");

    const getStored = () => {
        try {
            const raw = localStorage.getItem(COOKIE_KEY);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (parsed.version !== COOKIE_VERSION) return null;
            return parsed;
        } catch (e) {
            return null;
        }
    };

    const saveConsent = (consent) => {
        try {
            localStorage.setItem(COOKIE_KEY, JSON.stringify({
                version: COOKIE_VERSION,
                timestamp: new Date().toISOString(),
                necessary: true,
                analytics: consent.analytics ?? false,
                marketing: consent.marketing ?? false
            }));
        } catch (e) {
            console.warn("No se pudo guardar la preferencia de cookies.");
        }
    };

    const hideBanner = () => {
        if (banner) banner.classList.remove("is-visible");
    };

    const showBanner = () => {
        if (banner) {
            setTimeout(() => banner.classList.add("is-visible"), 600);
        }
    };

    const openModal = () => {
        if (!modal) return;
        modal.classList.add("is-visible");
        document.body.classList.add("modal-open");
        const focusable = modal.querySelector("button, input, [tabindex]");
        if (focusable) setTimeout(() => focusable.focus(), 100);
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove("is-visible");
        document.body.classList.remove("modal-open");
    };

    const stored = getStored();
    if (stored) {
        hideBanner();
    } else {
        showBanner();
    }

    if (btnAccept) {
        btnAccept.addEventListener("click", () => {
            saveConsent({ analytics: true, marketing: true });
            hideBanner();
            closeModal();
        });
    }

    if (btnReject) {
        btnReject.addEventListener("click", () => {
            saveConsent({ analytics: false, marketing: false });
            hideBanner();
            closeModal();
        });
    }

    if (btnConfig) {
        btnConfig.addEventListener("click", openModal);
    }

    if (btnSaveConfig) {
        btnSaveConfig.addEventListener("click", () => {
            const analyticsCheck = document.getElementById("cookie-analytics");
            const marketingCheck = document.getElementById("cookie-marketing");
            saveConsent({
                analytics: analyticsCheck ? analyticsCheck.checked : false,
                marketing: marketingCheck ? marketingCheck.checked : false
            });
            hideBanner();
            closeModal();
        });
    }

    if (btnCloseModal) {
        btnCloseModal.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal && modal.classList.contains("is-visible")) {
            closeModal();
        }
    });

    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal) closeModal();
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
