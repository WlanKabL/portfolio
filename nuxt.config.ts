export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["./assets/css/tailwind.css"],
    modules: [
        "@nuxt/eslint",
        "@nuxt/icon",
        "@nuxt/ui",
        "@nuxt/scripts",
        "@nuxt/fonts",
        "@nuxtjs/i18n",
        "@nuxtjs/tailwindcss",
        "@tailwindcss/postcss",
    ],

    i18n: {
        strategy: "no_prefix",
        lazy: true,
        defaultLocale: "de",
        locales: [
            {
                code: "de",
                file: "de.json",
                name: "Deutsch",
            },
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
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
