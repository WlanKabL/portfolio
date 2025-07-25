import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["./assets/tailwind.css"],
    modules: [
        "@nuxt/eslint",
        "@nuxt/icon",
        "@nuxt/ui",
        "@nuxt/scripts",
        "@nuxt/fonts",
        "@nuxtjs/i18n",
    ],
    devServer: {
        port: 3000,
        // host: "0.0.0.0",
    },
    runtimeConfig: {
        public: {},
        DISCORD_WEBHOOK_URL: process.env.DISCORD_WEBHOOK_URL,
    },
    i18n: {
        strategy: "no_prefix",
        defaultLocale: "en",
        locales: [
            {
                code: "de",
                name: "Deutsch",
            },
            {
                code: "en",
                name: "English",
            },
        ],
        messages: {
            en: {
                nav: {
                    projects: "Projects",
                    resume: "Resume", 
                    about: "About",
                    contact: "Contact"
                },
                landing: {
                    hero_title: "Code. Connect. Create Experiences.",
                    hero_subtitle: "Full-Stack Developer & Platform Engineer",
                    view_projects: "View Projects",
                    contact_me: "Contact Me"
                },
                about: {
                    title: "About Me",
                    description: "Hey, I'm {wlankabl} — a passionate Full-Stack Developer driven by curiosity and a deep love for code, music, and motorcycles. I create digital solutions that are fast, secure, and built with modern technologies like {technologies}.",
                    engineering: "Full-Stack Engineering & Architecture",
                    passion_projects: "Passion Projects like {crowdnation}",
                    scalable_apps: "Fast, Scalable Web Apps",
                    creative_coding: "Hacking, Hardware & Creative Coding",
                    page_title: "Hey, I'm WlanKabL",
                    page_description: "Passionate Full-Stack Developer, Motorcycle Rider, Music Addict, and Festival Enthusiast. Building digital solutions with purpose, personality, and performance.",
                    developer_title: "🔧 Developer by Passion",
                    developer_text: "I'm a Full-Stack Developer focused on Vue.js, Node.js, and C#. From scalable backends to beautiful frontends – I code with clarity and purpose. I love performance, great user experience, and building tools people love to use. I also dive into security, reverse engineering and love exploring complex systems.",
                    music_title: "🎵 Fueled by Music & Adrenaline",
                    music_text: "Whether it's a new DJ set, a spontaneous ride on my motorcycle, or coding late at night, music is always by my side. Festivals like Defqon.1 and Thunderdome inspire my energy and my biggest project: {crowdnation}, a platform to bring music lovers together.",
                    vision_title: "💼 Self-Driven and Visionary",
                    vision_text: "I work full-time as a developer, but I'm also a freelancer with a long-term goal: building my own business around my passions. My projects aren't just hobbies – they're part of a bigger vision.",
                    tools_title: "⚙️ Tools I Love",
                    tools_text: "VSCode, Docker, Nuxt, SurrealDB, Swagger, TailwindCSS, PM2, GitLab CI/CD, Portainer, Let's Encrypt, and anything that makes building smoother & cleaner. Also: I'm obsessed with automation.",
                    view_work: "View My Work",
                    connect_text: "Want to build something together?",
                    connect_link: "Let's connect!"
                },
                tech_stack: {
                    title: "Tech Stack",
                    frontend: "Frontend",
                    backend: "Backend",
                    database: "Database",
                    devops: "DevOps",
                    security: "Security & Networking",
                    tooling: "Tooling & Misc",
                    infrastructure: "Web Infrastructure",
                    ux: "UX & Communication"
                },
                contact: {
                    title: "Get in Touch",
                    form_title: "Contact me",
                    email_placeholder: "Your email",
                    message_placeholder: "Your message",
                    send_button: "Send Message",
                    sending: "Sending...",
                    success: "✅ Message sent successfully!",
                    error: "❌ Something went wrong.",
                    page_title: "Let's Get In Touch",
                    page_description: "You've got a project idea, a question, or just want to vibe? Feel free to reach out – I'm always open for new connections.",
                    linkedin: "LinkedIn",
                    github: "GitHub"
                },
                resume: {
                    title: "Résumé",
                    subtitle: "Overview of my skills, work experience and education.",
                    experience: "Experience",
                    education: "Education",
                    skills: "Skills & Tools",
                    languages: "Languages",
                    hobbies: "Hobbies",
                    mediabeam_role: "Apprenticeship – Application Development",
                    smake_role: "Full-Stack Developer",
                    realschule_degree: "Secondary School Certificate",
                    berufskolleg_degree: "Technical College Entrance Qualification – IT & Communication",
                    german_native: "🇩🇪 German – C2 (native)",
                    english_fluent: "🇬🇧 English – B2 (fluent)",
                    hobby_programming: "💻 Programming",
                    hobby_motorcycles: "🏍️ Riding motorcycles",
                    hobby_music: "🎶 Music & festivals",
                    hobby_cars: "🚗 Car projects"
                },
                projects: {
                    title: "A glimpse into my work",
                    subtitle: "Explore a curated selection of my projects – each one crafted with attention to detail, performance, and scalability. From full-stack platforms to sleek UIs."
                },
                footer: {
                    made_by: "Made by hand",
                    with_care: "with care & caffeine",
                    github_link: "→ Check the source on GitHub",
                    easter_egg: "console.log('Hey, curious dev — Let\\'s code together.');"
                }
            },
            de: {
                nav: {
                    projects: "Projekte",
                    resume: "Lebenslauf",
                    about: "Über mich",
                    contact: "Kontakt"
                },
                landing: {
                    hero_title: "Coden. Verbinden. Erlebnisse schaffen.",
                    hero_subtitle: "Full-Stack Entwickler & Platform Engineer",
                    view_projects: "Projekte ansehen",
                    contact_me: "Kontakt aufnehmen"
                },
                about: {
                    title: "Über mich",
                    description: "Hey, ich bin {wlankabl} — ein leidenschaftlicher Full-Stack Entwickler, angetrieben von Neugier und einer tiefen Liebe für Code, Musik und Motorräder. Ich erstelle digitale Lösungen, die schnell, sicher und mit modernen Technologien wie {technologies} gebaut sind.",
                    engineering: "Full-Stack Engineering & Architektur",
                    passion_projects: "Leidenschaftsprojekte wie {crowdnation}",
                    scalable_apps: "Schnelle, skalierbare Web-Apps",
                    creative_coding: "Hacking, Hardware & kreatives Programmieren",
                    page_title: "Hey, ich bin WlanKabL",
                    page_description: "Leidenschaftlicher Full-Stack Entwickler, Motorradfahrer, Musik-Addict und Festival-Enthusiast. Ich entwickle digitale Lösungen mit Zweck, Persönlichkeit und Performance.",
                    developer_title: "🔧 Entwickler aus Leidenschaft",
                    developer_text: "Ich bin ein Full-Stack Entwickler mit Fokus auf Vue.js, Node.js und C#. Von skalierbaren Backends bis zu schönen Frontends – ich programmiere mit Klarheit und Zweck. Ich liebe Performance, großartige Benutzererfahrung und das Erstellen von Tools, die Leute gerne verwenden. Außerdem tauche ich in Sicherheit, Reverse Engineering ein und liebe es, komplexe Systeme zu erkunden.",
                    music_title: "🎵 Angetrieben von Musik & Adrenalin",
                    music_text: "Ob es ein neues DJ-Set ist, eine spontane Fahrt mit meinem Motorrad oder nächtliches Programmieren, Musik ist immer an meiner Seite. Festivals wie Defqon.1 und Thunderdome inspirieren meine Energie und mein größtes Projekt: {crowdnation}, eine Plattform, um Musikliebhaber zusammenzubringen.",
                    vision_title: "💼 Selbstbestimmt und visionär",
                    vision_text: "Ich arbeite Vollzeit als Entwickler, bin aber auch Freelancer mit einem langfristigen Ziel: ein eigenes Unternehmen rund um meine Leidenschaften aufzubauen. Meine Projekte sind nicht nur Hobbys – sie sind Teil einer größeren Vision.",
                    tools_title: "⚙️ Tools, die ich liebe",
                    tools_text: "VSCode, Docker, Nuxt, SurrealDB, Swagger, TailwindCSS, PM2, GitLab CI/CD, Portainer, Let's Encrypt und alles, was das Entwickeln smoother & cleaner macht. Außerdem: Ich bin besessen von Automatisierung.",
                    view_work: "Meine Arbeit ansehen",
                    connect_text: "Willst du etwas zusammen entwickeln?",
                    connect_link: "Lass uns vernetzen!"
                },
                tech_stack: {
                    title: "Tech Stack",
                    frontend: "Frontend",
                    backend: "Backend",
                    database: "Datenbank",
                    devops: "DevOps",
                    security: "Sicherheit & Netzwerk",
                    tooling: "Tools & Sonstiges",
                    infrastructure: "Web-Infrastruktur",
                    ux: "UX & Kommunikation"
                },
                contact: {
                    title: "Kontakt aufnehmen",
                    form_title: "Schreib mir",
                    email_placeholder: "Deine E-Mail",
                    message_placeholder: "Deine Nachricht",
                    send_button: "Nachricht senden",
                    sending: "Wird gesendet...",
                    success: "✅ Nachricht erfolgreich gesendet!",
                    error: "❌ Etwas ist schiefgelaufen.",
                    page_title: "Lass uns in Kontakt treten",
                    page_description: "Du hast eine Projektidee, eine Frage oder willst einfach nur quatschen? Schreib mir gerne – ich bin immer offen für neue Verbindungen.",
                    linkedin: "LinkedIn",
                    github: "GitHub"
                },
                resume: {
                    title: "Lebenslauf",
                    subtitle: "Überblick über meine Fähigkeiten, Berufserfahrung und Ausbildung.",
                    experience: "Berufserfahrung",
                    education: "Ausbildung",
                    skills: "Fähigkeiten & Tools",
                    languages: "Sprachen",
                    hobbies: "Hobbys",
                    mediabeam_role: "Ausbildung – Anwendungsentwicklung",
                    smake_role: "Full-Stack Entwickler",
                    realschule_degree: "Realschulabschluss",
                    berufskolleg_degree: "Fachhochschulreife – IT & Kommunikation",
                    german_native: "🇩🇪 Deutsch – C2 (Muttersprache)",
                    english_fluent: "🇬🇧 Englisch – B2 (fließend)",
                    hobby_programming: "💻 Programmieren",
                    hobby_motorcycles: "🏍️ Motorrad fahren",
                    hobby_music: "🎶 Musik & Festivals",
                    hobby_cars: "🚗 Auto-Projekte"
                },
                projects: {
                    title: "Ein Einblick in meine Arbeit",
                    subtitle: "Entdecke eine kuratierte Auswahl meiner Projekte – jedes mit Liebe zum Detail, Performance und Skalierbarkeit entwickelt. Von Full-Stack Plattformen bis zu eleganten UIs."
                },
                footer: {
                    made_by: "Von Hand gemacht",
                    with_care: "mit Liebe & Koffein",
                    github_link: "→ Schau dir den Quellcode auf GitHub an",
                    easter_egg: "console.log('Hey, neugieriger Dev — Lass uns mal zusammen coden.');"
                }
            }
        }
    },
    vite: {
        define: {
            "process.env.DEBUG": false,
        },
        build: {
            minify: true,
        },
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/Crowd-Nation-Logo-BETTER.png", 
                },
            ],
            meta: [
                { property: "og:title", content: "WlanKabL – Full-Stack Developer" },
                {
                    property: "og:description",
                    content: "Explore my portfolio and featured projects.",
                },
                { property: "og:image", content: "/Crowd-Nation-Logo-BETTER.png" }, 
                { property: "og:url", content: "https://dev.crowd-nation.com" },
                { property: "og:type", content: "website" },
            ],
        },
    },
});
