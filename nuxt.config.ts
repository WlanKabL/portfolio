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
                    creative_coding: "Hacking, Hardware & Creative Coding"
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
                    error: "❌ Something went wrong."
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
                    creative_coding: "Hacking, Hardware & kreatives Programmieren"
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
                    error: "❌ Etwas ist schiefgelaufen."
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
