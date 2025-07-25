import type { LocalizedProject, ProjectConfig } from "~/types/projects";

// Project configurations with i18n keys
const projectConfigs = {
    crowdNationFrontend: {
        active: true,
        showPreview: true,
        image: "./Crowd-Nation-Logo-BETTER.png",
        link: "/projects/crowd-nation",
        github: "https://github.com/CrowdNation",
        tech: ["Vue 3", "Vite", "TailwindCSS", "Pinia", "TypeScript", "SCSS"],
        externalLink: "https://crowd-nation.com",
        i18nKey: "crowd_nation_frontend",
    },
    wowDiscordBot: {
        active: true,
        showPreview: true,
        image: "./discord.png",
        link: "/projects/wow-discordbot",
        externalLink: "https://sde.crowd-nation.com/discord-bot/",
        tech: ["Node.js", "TypeScript", "Discord.js", "REST API", "Blizzard API"],
        i18nKey: "wow_discord_bot",
    },
    crowdNationBackend: {
        active: true,
        showPreview: true,
        image: "./REST_socialmedia.webp",
        link: "/projects/crowd-nation-backend",
        tech: ["C#", ".NET Core", "REST API", "Docker", "Swagger", "SurrealDB"],
        i18nKey: "crowd_nation_backend",
    },
    universalJenga: {
        active: true,
        showPreview: false,
        image: "./universal-jenga.png",
        link: "/projects/universal-jenga",
        externalLink: "https://jenga.crowd-nation.com",
        tech: ["Vue 3", "TypeScript", "Vite"],
        i18nKey: "universal_jenga",
    },
    crowdNationCDN: {
        active: true,
        showPreview: true,
        image: "./cdn.avif",
        link: "/projects/crowd-nation-cdn",
        tech: ["Node.js", "Express", "Docker", "EJS", "Axios", "JavaScript"],
        i18nKey: "crowd_nation_cdn",
    },
    ihkNachweisSchreiber: {
        active: true,
        showPreview: false,
        image: "./ihk-nachweis-schreiber.png",
        link: "/projects/ihk-nachweis-schreiber",
        github: "https://github.com/WlanKabL/IHK-Nachweis-Schreiber",
        tech: ["Node.js", "PDFKit", "Jira API", "Untis Export"],
        i18nKey: "ihk_nachweis_schreiber",
    },
    crowdNationTracking: {
        active: true,
        showPreview: false,
        image: "./crowd-nation-tracking.png",
        link: "/projects/crowd-nation-tracking",
        tech: ["WiFi", "Node.js", "Crowd-Nation API", "Triangulation", "Mobile App"],
        i18nKey: "crowd_nation_tracking",
    },
    wowWebsite: {
        active: true,
        showPreview: false,
        image: "./SdE-Logo.jpg",
        link: "/projects/wow-website",
        github: "https://github.com/WlanKabL/sde-wow-website",
        externalLink: "https://sde.crowd-nation.com/",
        tech: ["Vue.js", "TypeScript", "TailwindCSS", "Nuxt 3", "OAuth", "WebSocket"],
        i18nKey: "wow_website",
    },
    rlShopTracking: {
        active: true,
        showPreview: false,
        image: "./mass-data-tracking.webp",
        link: "/projects/rl-shop-tracking",
        github: "https://github.com/WlanKabL/RL-Shop-Tracking",
        tech: ["Node.js", "JSON", "Cheerio"],
        i18nKey: "rl_shop_tracking",
    },
    surrealToCSharp: {
        active: true,
        showPreview: false,
        image: "./SurrealToCSharp.png",
        link: "/projects/surreal-to-csharp",
        github: "https://github.com/WlanKabL/SurrealToCSharp",
        tech: ["Node.js", "C#", "SurrealDB"],
        i18nKey: "surreal_to_csharp",
    },
};

// Function to create projects array with i18n data
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getProjects(t: any): LocalizedProject[] {
    return Object.values(projectConfigs).map((config: ProjectConfig) => ({
        active: config.active,
        showPreview: config.showPreview,
        title: t(`projects.${config.i18nKey}.title`),
        shortDescription: t(`projects.${config.i18nKey}.short_description`),
        description: t(`projects.${config.i18nKey}.description`),
        extendedTitle: t(`projects.${config.i18nKey}.extended_title`),
        extendedText: t(`projects.${config.i18nKey}.extended_text`),
        image: config.image,
        link: config.link,
        github: config.github,
        externalLink: config.externalLink,
        tech: config.tech,
    }));
}
