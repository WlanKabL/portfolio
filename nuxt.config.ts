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
        lazy: true,
        defaultLocale: "en",
        locales: [
            // {
            //     code: "de",
            //     file: "de.json",
            //     name: "Deutsch",
            // },
            {
                code: "en",
                file: "en.json",
                name: "English",
            },
        ],
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
