/* =========================================================
   TAGBACK — JAVASCRIPT v17 (Traducción real)
   ========================================================= */

// --- DICCIONARIO DE IDIOMAS ---
const translations = {
    es: {
        skip_link: "Saltar al contenido principal",
        nav_services: "Servicios",
        nav_projects: "Proyectos",
        nav_process: "Proceso",
        nav_plans: "Planes",
        nav_faq: "Preguntas",
        nav_contact: "Contacto",
        nav_home: "Inicio",
        nav_privacy: "Política de Privacidad",
        nav_cookies: "Política de Cookies",
        
        hero_eyebrow_1: "DISEÑO WEB",
        hero_eyebrow_2: "DESARROLLO",
        hero_eyebrow_3: "PRESENCIA DIGITAL",
        hero_title_1: "Webs claras para",
        hero_title_2: "negocios que",
        hero_title_3: "quieren crecer.",
        hero_lead: "Diseñamos y desarrollamos sitios web rápidos, claros y pensados para convertir visitas en oportunidades de negocio.",
        
        services_eyebrow: "01 — SERVICIOS",
        services_title: "Soluciones digitales para negocios que quieren avanzar.",
        services_desc: "Cada proyecto tiene necesidades diferentes. Hacé clic en cada servicio para ver el detalle.",
        srv_1_title: "Landing pages",
        srv_1_desc: "Una página enfocada en presentar una oferta concreta, con secciones definidas y una llamada a la acción principal. Incluye diseño responsive y un canal de contacto.",
        srv_2_title: "Sitios web corporativos",
        srv_2_desc: "Sitio con varias secciones o páginas internas para presentar la empresa, sus servicios y sus canales de contacto. Incluye estructura de contenidos y diseño responsive.",
        srv_3_title: "Tiendas online",
        srv_3_desc: "Catálogo de productos organizado, ficha de producto y flujo de compra o consulta. El alcance se define según la plataforma y las integraciones necesarias.",
        srv_4_title: "Mantenimiento web",
        srv_4_desc: "Actualizaciones, ajustes de contenido y soporte técnico para mantener el sitio en funcionamiento. Las condiciones se acuerdan por separado según cada caso.",
        
        why_eyebrow: "02 — BENEFICIOS",
        why_title: "Una web con propósito, no solo apariencia.",
        why_desc: "Cada decisión está pensada para que tu sitio funcione: comunique, convierta y crezca con tu negocio.",
        
        work_eyebrow: "03 — PROYECTOS",
        work_title: "Proyectos que llevan ideas a la web.",
        work_desc: "Cada proyecto parte de una necesidad concreta y se convierte en una experiencia digital diseñada para su propósito.",
        work_link: "Ver proyecto →",
        cat_services: "SERVICIOS",
        cat_gastro: "GASTRONOMÍA",
        cat_church: "IGLESIA",
        
        process_eyebrow: "04 — PROCESO",
        process_title: "De la idea al sitio publicado.",
        process_desc: "Cuatro etapas para llevar tu proyecto desde la primera conversación hasta el sitio online.",
        proc_1_title: "Etapa 01 — Descubrimiento",
        proc_1_desc: "Conocemos tu negocio, tus objetivos y las necesidades de tu proyecto.",
        proc_2_title: "Etapa 02 — Propuesta",
        proc_2_desc: "Definimos el alcance, las funcionalidades, los plazos y el presupuesto.",
        proc_3_title: "Etapa 03 — Diseño y desarrollo",
        proc_3_desc: "Construimos el sitio siguiendo la propuesta aprobada y los requisitos acordados.",
        proc_4_title: "Etapa 04 — Revisión y entrega",
        proc_4_desc: "Revisamos el resultado, realizamos los ajustes incluidos y coordinamos la publicación.",
        
        plans_eyebrow: "05 — PLANES",
        plans_title: "Una solución acorde a tu proyecto.",
        plans_desc: "No todos los negocios necesitan la misma web. Por eso, cada propuesta se define según el alcance, el contenido y las funcionalidades requeridas.",
        plan_badge: "RECOMENDADO",
        plan_1_label: "LANDING",
        plan_1_title: "Landing page",
        plan_1_sub: "Pago único · alcance definido",
        plan_1_desc: "Para presentar un servicio, producto o propuesta comercial en una página enfocada.",
        plan_1_f1: "Una página con secciones definidas",
        plan_1_f2: "Diseño responsive",
        plan_1_f3: "Formulario o canal de contacto",
        plan_1_f4: "No incluye dominio ni hosting",
        plan_2_label: "SITIO",
        plan_2_title: "Web corporativa",
        plan_2_sub: "Pago único · según alcance",
        plan_2_desc: "Para empresas y profesionales que necesitan presentar su negocio, servicios y canales de contacto.",
        plan_2_f1: "Varias secciones y páginas internas",
        plan_2_f2: "Estructura de contenidos",
        plan_2_f3: "Formulario o canal de contacto",
        plan_2_f4: "No incluye dominio ni hosting",
        plan_3_label: "A MEDIDA",
        plan_3_title: "Proyecto personalizado",
        plan_3_sub: "Según alcance y funcionalidades",
        plan_3_desc: "Para tiendas online, integraciones o cualquier proyecto que requiera un desarrollo específico.",
        plan_3_f1: "Alcance a definir juntos",
        plan_3_f2: "Stack adaptado al proyecto",
        plan_3_f3: "Integraciones según necesidad",
        plan_3_f4: "Condiciones acordadas por escrito",
        
        faq_eyebrow: "06 — PREGUNTAS FRECUENTES",
        faq_title: "Preguntas frecuentes",
        faq_desc: "Las dudas más comunes antes de empezar un proyecto.",
        faq_1_q: "¿Cómo se define el precio de un proyecto?",
        faq_1_a: "El precio depende del tipo de sitio, la cantidad de secciones, las funcionalidades y el contenido. Los planes de landing y web corporativa tienen un valor de referencia desde USD 350 y USD 700. Los proyectos a medida se cotizan según su alcance.",
        faq_2_q: "¿Qué incluye el presupuesto?",
        faq_2_a: "El presupuesto detalla el alcance del trabajo y los servicios incluidos. El dominio y el hosting no están incluidos salvo que se indique lo contrario.",
        faq_3_q: "¿Cuánto tarda en estar listo el sitio?",
        faq_3_a: "El plazo depende de la complejidad del sitio y de la disponibilidad del contenido necesario. Se define antes de comenzar el trabajo.",
        faq_4_q: "¿Cómo se define el diseño?",
        faq_4_a: "La propuesta visual se adapta a la identidad, los objetivos y las necesidades de cada proyecto.",
        faq_5_q: "¿El sitio va a funcionar en celulares y tablets?",
        faq_5_a: "Los sitios se desarrollan con diseño responsive para adaptarse a diferentes tamaños de pantalla.",
        faq_6_q: "¿Puedo pedir modificaciones después de la entrega?",
        faq_6_a: "Los ajustes posteriores pueden presupuestarse por separado o contratarse mediante un servicio de mantenimiento.",
        faq_7_q: "¿Cómo contrato un proyecto?",
        faq_7_a: "Escribinos a hola@tagback.com con una descripción de tu proyecto. Revisaremos tus necesidades y prepararemos una propuesta.",
        
        contact_eyebrow: "07 — CONTACTO",
        contact_title: "Contanos tu idea.",
        contact_desc: "Completá los datos y contanos qué necesitás. Te contactaremos para conversar sobre tu proyecto.",
        form_title: "Contanos tu idea.",
        form_lead: "Completá los datos y te contactamos.",
        form_name: "Nombre *",
        form_name_ph: "Tu nombre",
        form_email: "Correo electrónico *",
        form_email_ph: "tu@correo.com",
        form_phone: "Teléfono",
        form_phone_ph: "Ingresá tu número de teléfono",
        form_type: "Tipo de proyecto *",
        form_type_1: "Landing page",
        form_type_2: "Web corporativa",
        form_type_3: "Proyecto personalizado",
        form_msg: "Mensaje *",
        form_msg_ph: "Contanos un poco sobre tu proyecto",
        form_submit: "Enviar consulta",
        form_legal: "Al enviar aceptás nuestra Política de Privacidad.",
        
        cta_title: "Tu idea no se va a hacer sola. Hagámosla realidad.",
        
        foot_contact: "CONTACTO",
        foot_phone: "TELÉFONO",
        foot_location: "UBICACIÓN",
        foot_tz: "ZONA HORARIA",
        foot_nav: "NAVEGACIÓN",
        foot_legal: "LEGAL",
        foot_rights: "Todos los derechos reservados.",
        foot_credit: "Diseño y desarrollo por",
        
        cookie_title: "Uso de cookies",
        cookie_desc: "Usamos cookies para analizar cómo se utiliza este sitio y mejorar la experiencia de navegación.",
        cookie_accept: "Aceptar",
        cookie_reject: "Rechazar",
        
        back_home: "← Volver al inicio",
        legal_eyebrow: "LEGAL",
        legal_updated: "Última actualización: 2025",
        
        privacy_title: "Política de Privacidad",
        privacy_intro: "En tagback respetamos tu privacidad y nos comprometemos a proteger los datos personales que nos compartís. Esta política explica qué información recopilamos, cómo la usamos y qué derechos tenés sobre ella.",
        privacy_h2_1: "1. Responsable del tratamiento",
        privacy_p_1: "El responsable del tratamiento de los datos personales recopilados a través de este sitio es tagback, con correo de contacto privacy@tagback.com.",
        privacy_h2_2: "2. Qué datos recopilamos",
        privacy_p_2: "Recopilamos únicamente los datos que nos brindás voluntariamente:",
        privacy_li_1: "Nombre",
        privacy_li_2: "Correo electrónico",
        privacy_li_3: "Teléfono (opcional)",
        privacy_li_4: "Tipo de proyecto y mensaje que nos enviás",
        privacy_h2_3: "3. Para qué usamos los datos",
        privacy_li_5: "Responder consultas y solicitudes de presupuesto",
        privacy_li_6: "Coordinar reuniones y propuestas comerciales",
        privacy_li_7: "Enviarte información relacionada con tu proyecto",
        privacy_li_8: "Analizar el uso del sitio para mejorarlo",
        privacy_p_3: "No usamos tus datos para fines distintos a los que los proporcionaste.",
        privacy_h2_4: "4. Base legal",
        privacy_p_4: "Tratamos tus datos en base a tu consentimiento expreso al enviarnos el formulario de contacto, y en base a nuestro interés legítimo en responder consultas comerciales.",
        privacy_h2_5: "5. Con quién compartimos los datos",
        privacy_p_5: "No vendemos ni compartimos tus datos con terceros con fines comerciales. Solo los compartimos con proveedores técnicos que nos permiten operar el sitio (hosting, servicio de formularios, analítica), quienes están sujetos a sus propias políticas de privacidad.",
        privacy_h2_6: "6. Cuánto tiempo conservamos los datos",
        privacy_p_6: "Conservamos los datos de contacto mientras exista una relación comercial activa o potencial, y por el tiempo necesario para cumplir obligaciones legales. Después los eliminamos o anonimizamos.",
        privacy_h2_7: "7. Tus derechos",
        privacy_p_7: "De acuerdo con la Ley 25.326 de Protección de Datos Personales de Argentina, tenés derecho a:",
        privacy_li_9: "Acceder a los datos que tenemos sobre vos",
        privacy_li_10: "Rectificarlos si están incorrectos",
        privacy_li_11: "Solicitar su eliminación",
        privacy_li_12: "Oponerte a su tratamiento",
        privacy_li_13: "Retirar tu consentimiento en cualquier momento",
        privacy_p_8: "Para ejercer cualquiera de estos derechos, escribinos a privacy@tagback.com.",
        privacy_h2_8: "8. Seguridad",
        privacy_p_9: "Aplicamos medidas técnicas y organizativas razonables para proteger tus datos contra accesos no autorizados, pérdidas o alteraciones. Sin embargo, ningún sistema es 100% seguro.",
        privacy_h2_9: "9. Menores de edad",
        privacy_p_10: "Este sitio no está dirigido a menores de 18 años. No recopilamos conscientemente datos de menores. Si detectamos tal situación, eliminaremos la información.",
        privacy_h2_10: "10. Cambios en esta política",
        privacy_p_11: "Podemos actualizar esta Política de Privacidad cuando sea necesario. La versión vigente siempre estará publicada en esta página, con la fecha de última actualización.",
        privacy_h2_11: "11. Contacto",
        privacy_p_12: "Para cualquier consulta sobre esta política o sobre el tratamiento de tus datos, escribinos a privacy@tagback.com.",

        cookies_title: "Política de Cookies",
        cookies_intro: "Esta política explica qué son las cookies, cuáles usamos en tagback, para qué sirven y cómo podés gestionarlas.",
        cookies_h2_1: "1. Qué son las cookies",
        cookies_p_1: "Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo cuando los visitás. Sirven para recordar tus preferencias, analizar cómo usás el sitio y mostrarte contenido o anuncios relevantes.",
        cookies_h2_2: "2. Qué cookies usamos",
        cookies_h3_1: "Cookies necesarias",
        cookies_p_2: "Son imprescindibles para que el sitio funcione correctamente. Sin ellas, algunas partes del sitio no funcionarían.",
        cookies_li_1: "Preferencia de consentimiento de cookies (localStorage)",
        cookies_li_2: "Funcionamiento básico del sitio y seguridad",
        cookies_h3_2: "Cookies analíticas",
        cookies_p_3: "Nos ayudan a entender cómo se usa el sitio: qué páginas se visitan más, cuánto tiempo se quedan los usuarios, de dónde vienen. Esta información es agregada y anónima.",
        cookies_li_3: "Google Analytics (si está activado)",
        cookies_li_4: "Métricas de rendimiento y errores",
        cookies_h3_3: "Cookies de marketing",
        cookies_p_4: "Se usan para mostrarte anuncios relevantes en otros sitios y medir el rendimiento de campañas publicitarias.",
        cookies_li_5: "Google Ads (si está activado)",
        cookies_li_6: "Meta Ads (si está activado)",
        cookies_h2_3: "3. Cookies de terceros",
        cookies_p_5: "Algunos servicios que usamos pueden instalar sus propias cookies:",
        cookies_li_7: "para analítica web",
        cookies_li_8: "para gestionar el formulario de contacto",
        cookies_h2_4: "4. Cómo gestionar las cookies",
        cookies_p_6: "Podés cambiar tus preferencias en cualquier momento desde el botón de configuración del banner de cookies, o desde la configuración de tu navegador:",
        cookies_p_7: "Si bloqueás todas las cookies, algunas funciones del sitio podrían no funcionar correctamente.",
        cookies_h2_5: "5. Cómo revocar tu consentimiento",
        cookies_p_8: "Podés eliminar las cookies guardadas desde la configuración de tu navegador, o volver a abrir el banner de cookies para cambiar tus preferencias.",
        cookies_h2_6: "6. Actualizaciones",
        cookies_p_9: "Podemos actualizar esta Política de Cookies cuando cambien las herramientas que usamos o la normativa aplicable. La versión vigente siempre estará publicada en esta página.",
        cookies_h2_7: "7. Contacto",
        cookies_p_10: "Para consultas sobre cookies, escribinos a privacy@tagback.com."
    },
    en: {
        skip_link: "Skip to main content",
        nav_services: "Services",
        nav_projects: "Projects",
        nav_process: "Process",
        nav_plans: "Plans",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        nav_home: "Home",
        nav_privacy: "Privacy Policy",
        nav_cookies: "Cookie Policy",
        
        hero_eyebrow_1: "WEB DESIGN",
        hero_eyebrow_2: "DEVELOPMENT",
        hero_eyebrow_3: "DIGITAL PRESENCE",
        hero_title_1: "Clear websites for",
        hero_title_2: "businesses ready",
        hero_title_3: "to grow.",
        hero_lead: "We design and develop fast, clear websites built to turn visits into business opportunities.",
        
        services_eyebrow: "01 — SERVICES",
        services_title: "Digital solutions for businesses ready to move forward.",
        services_desc: "Every project has different needs. Click on each service to see the details.",
        srv_1_title: "Landing pages",
        srv_1_desc: "A page focused on presenting a specific offer, with defined sections and a main call to action. Includes responsive design and a contact channel.",
        srv_2_title: "Corporate websites",
        srv_2_desc: "A site with multiple sections or internal pages to present the company, its services, and contact channels. Includes content structure and responsive design.",
        srv_3_title: "Online stores",
        srv_3_desc: "Organized product catalog, product page, and purchase or inquiry flow. The scope is defined based on the platform and necessary integrations.",
        srv_4_title: "Web maintenance",
        srv_4_desc: "Updates, content adjustments, and technical support to keep the site running. Conditions are agreed separately for each case.",
        
        why_eyebrow: "02 — BENEFITS",
        why_title: "A website with purpose, not just appearance.",
        why_desc: "Every decision is made so your site works: communicates, converts, and grows with your business.",
        
        work_eyebrow: "03 — PROJECTS",
        work_title: "Projects that bring ideas to the web.",
        work_desc: "Every project starts from a specific need and becomes a digital experience designed for its purpose.",
        work_link: "View project →",
        cat_services: "SERVICES",
        cat_gastro: "GASTRONOMY",
        cat_church: "CHURCH",
        
        process_eyebrow: "04 — PROCESS",
        process_title: "From idea to published site.",
        process_desc: "Four stages to take your project from the first conversation to the site online.",
        proc_1_title: "Stage 01 — Discovery",
        proc_1_desc: "We learn about your business, goals, and project needs.",
        proc_2_title: "Stage 02 — Proposal",
        proc_2_desc: "We define the scope, features, timelines, and budget.",
        proc_3_title: "Stage 03 — Design & development",
        proc_3_desc: "We build the site following the approved proposal and agreed requirements.",
        proc_4_title: "Stage 04 — Review & delivery",
        proc_4_desc: "We review the result, make the included adjustments, and coordinate the launch.",
        
        plans_eyebrow: "05 — PLANS",
        plans_title: "A solution that fits your project.",
        plans_desc: "Not every business needs the same website. That's why every proposal is defined by scope, content, and required features.",
        plan_badge: "RECOMMENDED",
        plan_1_label: "LANDING",
        plan_1_title: "Landing page",
        plan_1_sub: "One-time payment · defined scope",
        plan_1_desc: "To present a service, product, or commercial proposal on a focused page.",
        plan_1_f1: "One page with defined sections",
        plan_1_f2: "Responsive design",
        plan_1_f3: "Form or contact channel",
        plan_1_f4: "Domain and hosting not included",
        plan_2_label: "SITE",
        plan_2_title: "Corporate website",
        plan_2_sub: "One-time payment · according to scope",
        plan_2_desc: "For companies and professionals who need to present their business, services, and contact channels.",
        plan_2_f1: "Multiple sections and internal pages",
        plan_2_f2: "Content structure",
        plan_2_f3: "Form or contact channel",
        plan_2_f4: "Domain and hosting not included",
        plan_3_label: "CUSTOM",
        plan_3_title: "Custom project",
        plan_3_sub: "According to scope and features",
        plan_3_desc: "For online stores, integrations, or any project that requires specific development.",
        plan_3_f1: "Scope to define together",
        plan_3_f2: "Stack adapted to the project",
        plan_3_f3: "Integrations as needed",
        plan_3_f4: "Conditions agreed in writing",
        
        faq_eyebrow: "06 — FAQ",
        faq_title: "Frequently asked questions",
        faq_desc: "The most common doubts before starting a project.",
        faq_1_q: "How is the project price defined?",
        faq_1_a: "The price depends on the type of site, number of sections, features, and content. Landing and corporate plans have a reference value starting at USD 350 and USD 700. Custom projects are quoted according to their scope.",
        faq_2_q: "What does the budget include?",
        faq_2_a: "The budget details the scope of work and included services. Domain and hosting are not included unless stated otherwise.",
        faq_3_q: "How long does it take for the site to be ready?",
        faq_3_a: "The timeline depends on the complexity of the site and the availability of the necessary content. It is defined before starting work.",
        faq_4_q: "How is the design defined?",
        faq_4_a: "The visual proposal adapts to the identity, goals, and needs of each project.",
        faq_5_q: "Will the site work on mobile and tablets?",
        faq_5_a: "Sites are developed with responsive design to adapt to different screen sizes.",
        faq_6_q: "Can I request modifications after delivery?",
        faq_6_a: "Subsequent adjustments can be quoted separately or contracted through a maintenance service.",
        faq_7_q: "How do I hire a project?",
        faq_7_a: "Write to us at hola@tagback.com with a description of your project. We will review your needs and prepare a proposal.",
        
        contact_eyebrow: "07 — CONTACT",
        contact_title: "Tell us your idea.",
        contact_desc: "Fill in the details and tell us what you need. We will contact you to discuss your project.",
        form_title: "Tell us your idea.",
        form_lead: "Fill in the details and we'll contact you.",
        form_name: "Name *",
        form_name_ph: "Your name",
        form_email: "Email address *",
        form_email_ph: "you@email.com",
        form_phone: "Phone",
        form_phone_ph: "Enter your phone number",
        form_type: "Project type *",
        form_type_1: "Landing page",
        form_type_2: "Corporate website",
        form_type_3: "Custom project",
        form_msg: "Message *",
        form_msg_ph: "Tell us a bit about your project",
        form_submit: "Send inquiry",
        form_legal: "By submitting you accept our Privacy Policy.",
        
        cta_title: "Your idea won't make itself. Let's make it real.",
        
        foot_contact: "CONTACT",
        foot_phone: "PHONE",
        foot_location: "LOCATION",
        foot_tz: "TIMEZONE",
        foot_nav: "NAVIGATION",
        foot_legal: "LEGAL",
        foot_rights: "All rights reserved.",
        foot_credit: "Design & development by",
        
        cookie_title: "Cookie usage",
        cookie_desc: "We use cookies to analyze how this site is used and improve the browsing experience.",
        cookie_accept: "Accept",
        cookie_reject: "Reject",
        
        back_home: "← Back to home",
        legal_eyebrow: "LEGAL",
        legal_updated: "Last updated: 2025",

        privacy_title: "Privacy Policy",
        privacy_intro: "At tagback we respect your privacy and are committed to protecting the personal data you share with us. This policy explains what information we collect, how we use it, and what rights you have over it.",
        privacy_h2_1: "1. Data controller",
        privacy_p_1: "The data controller for the personal data collected through this site is tagback, with contact email privacy@tagback.com.",
        privacy_h2_2: "2. What data we collect",
        privacy_p_2: "We only collect the data you voluntarily provide:",
        privacy_li_1: "Name",
        privacy_li_2: "Email address",
        privacy_li_3: "Phone (optional)",
        privacy_li_4: "Project type and message you send us",
        privacy_h2_3: "3. How we use the data",
        privacy_li_5: "Respond to inquiries and quote requests",
        privacy_li_6: "Coordinate meetings and commercial proposals",
        privacy_li_7: "Send you information related to your project",
        privacy_li_8: "Analyze site usage to improve it",
        privacy_p_3: "We do not use your data for purposes other than those you provided it for.",
        privacy_h2_4: "4. Legal basis",
        privacy_p_4: "We process your data based on your express consent when sending us the contact form, and based on our legitimate interest in responding to commercial inquiries.",
        privacy_h2_5: "5. Who we share data with",
        privacy_p_5: "We do not sell or share your data with third parties for commercial purposes. We only share it with technical providers that allow us to operate the site (hosting, form service, analytics), who are subject to their own privacy policies.",
        privacy_h2_6: "6. How long we keep the data",
        privacy_p_6: "We keep contact data while there is an active or potential commercial relationship, and for the time necessary to comply with legal obligations. After that, we delete or anonymize it.",
        privacy_h2_7: "7. Your rights",
        privacy_p_7: "According to Law 25.326 on Personal Data Protection in Argentina, you have the right to:",
        privacy_li_9: "Access the data we have about you",
        privacy_li_10: "Rectify it if it is incorrect",
        privacy_li_11: "Request its deletion",
        privacy_li_12: "Object to its processing",
        privacy_li_13: "Withdraw your consent at any time",
        privacy_p_8: "To exercise any of these rights, write to us at privacy@tagback.com.",
        privacy_h2_8: "8. Security",
        privacy_p_9: "We apply reasonable technical and organizational measures to protect your data against unauthorized access, loss, or alteration. However, no system is 100% secure.",
        privacy_h2_9: "9. Minors",
        privacy_p_10: "This site is not directed at minors under 18. We do not knowingly collect data from minors. If we detect such a situation, we will delete the information.",
        privacy_h2_10: "10. Changes to this policy",
        privacy_p_11: "We may update this Privacy Policy when necessary. The current version will always be published on this page, with the last update date.",
        privacy_h2_11: "11. Contact",
        privacy_p_12: "For any questions about this policy or the processing of your data, write to us at privacy@tagback.com.",

        cookies_title: "Cookie Policy",
        cookies_intro: "This policy explains what cookies are, which ones we use at tagback, what they are for, and how you can manage them.",
        cookies_h2_1: "1. What are cookies",
        cookies_p_1: "Cookies are small text files that websites store on your device when you visit them. They are used to remember your preferences, analyze how you use the site, and show you relevant content or ads.",
        cookies_h2_2: "2. What cookies we use",
        cookies_h3_1: "Necessary cookies",
        cookies_p_2: "They are essential for the site to function correctly. Without them, some parts of the site would not work.",
        cookies_li_1: "Cookie consent preference (localStorage)",
        cookies_li_2: "Basic site operation and security",
        cookies_h3_2: "Analytical cookies",
        cookies_p_3: "They help us understand how the site is used: which pages are visited most, how long users stay, where they come from. This information is aggregated and anonymous.",
        cookies_li_3: "Google Analytics (if activated)",
        cookies_li_4: "Performance and error metrics",
        cookies_h3_3: "Marketing cookies",
        cookies_p_4: "They are used to show you relevant ads on other sites and measure the performance of advertising campaigns.",
        cookies_li_5: "Google Ads (if activated)",
        cookies_li_6: "Meta Ads (if activated)",
        cookies_h2_3: "3. Third-party cookies",
        cookies_p_5: "Some services we use may install their own cookies:",
        cookies_li_7: "for web analytics",
        cookies_li_8: "to manage the contact form",
        cookies_h2_4: "4. How to manage cookies",
        cookies_p_6: "You can change your preferences at any time from the cookie banner settings button, or from your browser settings:",
        cookies_p_7: "If you block all cookies, some site functions may not work correctly.",
        cookies_h2_5: "5. How to withdraw your consent",
        cookies_p_8: "You can delete saved cookies from your browser settings, or reopen the cookie banner to change your preferences.",
        cookies_h2_6: "6. Updates",
        cookies_p_9: "We may update this Cookie Policy when the tools we use or applicable regulations change. The current version will always be published on this page.",
        cookies_h2_7: "7. Contact",
        cookies_p_10: "For cookie inquiries, write to us at privacy@tagback.com."
    }
};

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       FUNCIÓN PARA APLICAR IDIOMA
       ===================================================== */
    const applyLanguage = (lang) => {
        const dict = translations[lang];
        if (!dict) return;

        document.documentElement.lang = lang;
        localStorage.setItem("tagback-lang", lang);

        // Traducir textos (etiquetas)
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Traducir placeholders (inputs)
        document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (dict[key]) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        // Actualizar clases de los botones
        document.querySelectorAll(".lang-btn").forEach(btn => {
            if (btn.getAttribute("data-lang") === lang) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    };

    /* =====================================================
       INIT IDIOMA
       ===================================================== */
    const savedLang = localStorage.getItem("tagback-lang") || "es";
    applyLanguage(savedLang);

    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");
            applyLanguage(lang);
        });
    });

    /* =====================================================
       INTRO
       ===================================================== */
    const intro = document.getElementById("tb-intro");
    if (intro) {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const INTRO_KEY = "tagback-intro-shown";

        const hideIntro = () => {
            if (!intro) return;
            intro.classList.add("is-hiding");
            intro.setAttribute("aria-hidden", "true");
            const cleanup = () => {
                if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
            };
            intro.addEventListener("transitionend", cleanup, { once: true });
            setTimeout(cleanup, 600);
        };

        if (prefersReducedMotion) {
            setTimeout(hideIntro, 100);
        } else {
            let alreadyShown = false;
            try { alreadyShown = sessionStorage.getItem(INTRO_KEY) === "1"; } catch (e) { /* ignorar */ }

            if (alreadyShown) {
                hideIntro();
            } else {
                setTimeout(hideIntro, 350);
                try { sessionStorage.setItem(INTRO_KEY, "1"); } catch (e) { /* ignorar */ }
            }
        }
    }

    /* =====================================================
       COOKIES
       ===================================================== */
    const COOKIE_KEY = "tagback-cookies-accepted";
    const cookieBanner = document.getElementById("cookie-banner");

    if (cookieBanner) {
        let alreadyAccepted = false;
        try { alreadyAccepted = localStorage.getItem(COOKIE_KEY) === "1"; } catch (e) { /* ignorar */ }

        if (!alreadyAccepted) {
            setTimeout(() => { cookieBanner.classList.add("is-visible"); }, 1200);
        }

        const acceptBtn = cookieBanner.querySelector("[data-cookie-accept]");
        const rejectBtn = cookieBanner.querySelector("[data-cookie-reject]");

        const closeBanner = (value) => {
            try { localStorage.setItem(COOKIE_KEY, value); } catch (e) { /* ignorar */ }
            cookieBanner.classList.remove("is-visible");
            setTimeout(() => {
                if (cookieBanner.parentNode) cookieBanner.parentNode.removeChild(cookieBanner);
            }, 400);
        };

        if (acceptBtn) acceptBtn.addEventListener("click", () => closeBanner("1"));
        if (rejectBtn) rejectBtn.addEventListener("click", () => closeBanner("0"));
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
       HEADER SCROLL
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
       ANIMACIONES
       ===================================================== */
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const animatedElements = document.querySelectorAll(".accordion-item, .work-card, .plan-card, .service-card, .process-item");

    if (!prefersReducedMotion && "IntersectionObserver" in window && animatedElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const el = entry.target;
                const parent = el.parentElement;
                const siblings = parent ? Array.from(parent.children) : [];
                const index = siblings.indexOf(el);
                const delay = Math.min(index, 4) * 80;
                setTimeout(() => { el.classList.add("visible"); }, delay);
                observer.unobserve(el);
            });
        }, { threshold: 0.10, rootMargin: "0px 0px -40px 0px" });
        animatedElements.forEach(el => observer.observe(el));
    } else {
        animatedElements.forEach(el => el.classList.add("visible"));
    }

    /* =====================================================
       ACORDEONES (Beneficios y Servicios)
       ===================================================== */
    const accordionItems = document.querySelectorAll(".accordion-item, .service-card");
    accordionItems.forEach(item => {
        const accHeader = item.querySelector(".accordion-header, .service-card-header");
        if (!accHeader) return;

        accHeader.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");
            const stack = item.parentElement;
            if (stack) {
                stack.querySelectorAll(".is-open").forEach(sibling => {
                    if (sibling !== item) {
                        sibling.classList.remove("is-open");
                        const h = sibling.querySelector(".accordion-header, .service-card-header");
                        if (h) h.setAttribute("aria-expanded", "false");
                    }
                });
            }
            item.classList.toggle("is-open", !isOpen);
            accHeader.setAttribute("aria-expanded", String(!isOpen));
        });
    });

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
            if (field.validity.valueMissing) return "Este campo es obligatorio.";
            if (field.validity.typeMismatch && field.type === "email") return "Revisá este dato.";
            if (!field.checkValidity()) return "Revisá este dato.";
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
                if (field.getAttribute("aria-invalid") === "true") validateField(field);
            });
        });

        quoteForm.addEventListener("submit", event => {
            event.preventDefault();
            clearFeedback();
            const fields = quoteForm.querySelectorAll("input, textarea, select");
            let allValid = true;
            fields.forEach(field => { if (!validateField(field)) allValid = false; });

            if (!allValid) {
                const firstInvalid = quoteForm.querySelector('[aria-invalid="true"]');
                if (firstInvalid) firstInvalid.focus();
                return;
            }

            const action = quoteForm.getAttribute("action");
            if (!action || action === "#" || action.includes("TU_ID")) {
                showFeedback("info", "Estamos configurando el formulario. Mientras tanto, escribinos a hola@tagback.com");
                return;
            }

            submitBtn.disabled = true;
            submitBtn.textContent = "Enviando...";

            const formData = new FormData(quoteForm);
            fetch(action, {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            }).then(response => {
                if (response.ok) {
                    showFeedback("success", "Tu consulta fue enviada correctamente.");
                    quoteForm.reset();
                    quoteForm.querySelectorAll('[aria-invalid="true"]').forEach(f => f.removeAttribute("aria-invalid"));
                    quoteForm.querySelectorAll(".form-field-error").forEach(e => { e.textContent = ""; e.classList.remove("is-visible"); });
                } else {
                    throw new Error("Error");
                }
            }).catch(() => {
                showFeedback("error", "No pudimos enviar tu consulta. Intentá nuevamente.");
            }).finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = submitBtnDefaultText;
            });
        });
    }

    /* =====================================================
       AÑO ACTUAL
       ===================================================== */
    const yearEls = document.querySelectorAll("[data-current-year]");
    if (yearEls.length) {
        const currentYear = new Date().getFullYear();
        yearEls.forEach(el => { el.textContent = currentYear; });
    }
});
