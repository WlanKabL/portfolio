import type { Project } from "~/types/projects";

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
        i18nKey: "crowd_nation_frontend"
    },
    wowDiscordBot: {
        active: true,
        showPreview: true,
        image: "./discord.png",
        link: "/projects/wow-discordbot",
        externalLink: "https://sde.crowd-nation.com/discord-bot/",
        tech: ["Node.js", "TypeScript", "Discord.js", "REST API", "Blizzard API"],
        i18nKey: "wow_discord_bot"
    },
    crowdNationBackend: {
        active: true,
        showPreview: true,
        image: "./REST_socialmedia.webp",
        link: "/projects/crowd-nation-backend",
        tech: ["C#", ".NET Core", "REST API", "Docker", "Swagger", "SurrealDB"],
        i18nKey: "crowd_nation_backend"
    },
    universalJenga: {
        active: true,
        showPreview: false,
        image: "./universal-jenga.png",
        link: "/projects/universal-jenga",
        externalLink: "https://jenga.crowd-nation.com",
        tech: ["Vue 3", "TypeScript", "Vite"],
        i18nKey: "universal_jenga"
    },
    crowdNationCDN: {
        active: true,
        showPreview: true,
        image: "./cdn.avif",
        link: "/projects/crowd-nation-cdn",
        tech: ["Node.js", "Express", "Docker", "EJS", "Axios", "JavaScript"],
        i18nKey: "crowd_nation_cdn"
    },
    ihkNachweisSchreiber: {
        active: true,
        showPreview: false,
        image: "./ihk-nachweis-schreiber.png",
        link: "/projects/ihk-nachweis-schreiber",
        github: "https://github.com/WlanKabL/IHK-Nachweis-Schreiber",
        tech: ["Node.js", "PDFKit", "Jira API", "Untis Export"],
        i18nKey: "ihk_nachweis_schreiber"
    },
    crowdNationTracking: {
        active: true,
        showPreview: false,
        image: "./crowd-nation-tracking.png",
        link: "/projects/crowd-nation-tracking",
        tech: ["WiFi", "Node.js", "Crowd-Nation API", "Triangulation", "Mobile App"],
        i18nKey: "crowd_nation_tracking"
    },
    wowWebsite: {
        active: true,
        showPreview: false,
        image: "./SdE-Logo.jpg",
        link: "/projects/wow-website",
        github: "https://github.com/WlanKabL/sde-wow-website",
        externalLink: "https://sde.crowd-nation.com/",
        tech: ["Vue.js", "TypeScript", "TailwindCSS", "Nuxt 3", "OAuth", "WebSocket"],
        i18nKey: "wow_website"
    },
    rlShopTracking: {
        active: true,
        showPreview: false,
        image: "./mass-data-tracking.webp",
        link: "/projects/rl-shop-tracking",
        github: "https://github.com/WlanKabL/RL-Shop-Tracking",
        tech: ["Node.js", "JSON", "Cheerio"],
        i18nKey: "rl_shop_tracking"
    },
    surrealToCSharp: {
        active: true,
        showPreview: false,
        image: "./SurrealToCSharp.png",
        link: "/projects/surreal-to-csharp",
        github: "https://github.com/WlanKabL/SurrealToCSharp",
        tech: ["Node.js", "C#", "SurrealDB"],
        i18nKey: "surreal_to_csharp"
    }
};

// Function to create projects array with i18n data
export function getProjects(t: any): Project[] {
    return Object.values(projectConfigs).map(config => ({
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
        tech: config.tech
    }));
}

// Legacy export for backward compatibility - uses English fallback
export const projects: Project[] = [
    {
        active: true,
        showPreview: true,
        title: "Crowd-Nation Frontend",
        shortDescription: "Modern event platform with personalization and real-time features.",
        description: "A Vue 3-based web application for Crowd-Nation featuring a responsive UI, event discovery, group tools, and live tracking integration.",
        extendedTitle: "Frontend interface for Crowd-Nation – blending modern technology with an immersive user experience.",
        image: "./Crowd-Nation-Logo-BETTER.png",
        link: "/projects/crowd-nation",
        github: "https://github.com/CrowdNation",
        tech: ["Vue 3", "Vite", "TailwindCSS", "Pinia", "TypeScript", "SCSS"],
        externalLink: "https://crowd-nation.com",
        extendedText: `<div class="space-y-8 text-gray-300"><p>The <strong class="text-indigo-400">Crowd-Nation Frontend</strong> is the visual core of the entire platform, crafted using Vue 3, Vite, and TailwindCSS. Built for music lovers, festival goers, and event organizers, it provides a seamless experience across all devices — from mobile usage at a festival to desktop-based event planning.</p><div><h3 class="text-lg font-semibold text-white">Key Focus Areas</h3><ul class="list-disc list-inside mt-3 space-y-2"><li><strong class="text-indigo-400">Personalization:</strong> Smart suggestions based on interests, genres, and favorite artists.</li><li><strong class="text-indigo-400">Real-Time Integration:</strong> Live data overlays such as crowd density and user positioning powered by the hardware tracking system.</li><li><strong class="text-indigo-400">Dark, Atmospheric UI:</strong> A sleek, immersive interface with vivid accents in blue and purple.</li><li><strong class="text-indigo-400">Modularity & Scalability:</strong> Fully component-based architecture with centralized state via Pinia.</li><li><strong class="text-indigo-400">Multi-Stage Deployment:</strong> GitLab CI/CD pipelines for Live, Beta, and Preview environments, running on PM2.</li></ul></div><div><h3 class="text-lg font-semibold text-white">Additional Highlights</h3><ul class="list-disc list-inside mt-3 space-y-2"><li>i18n support for multilingual users (in progress).</li><li>SCSS-based styling architecture for clean, maintainable UI components.</li><li>Automated testing with <code class="text-purple-400">Vitest</code> and <code class="text-purple-400">Playwright</code>.</li><li>Optimized for SEO and network performance — even in low-bandwidth festival areas.</li></ul></div><p><strong class="text-indigo-400">Crowd-Nation Frontend</strong> is more than just a site — it's your interactive event companion. Whether you're syncing with friends, checking the next act, browsing the map, or joining a private group chat, this platform bridges the gap between planning and experiencing, powered by music, technology, and community.</p></div>`
    },
    {
        active: true,
        showPreview: true,
        title: "World of Warcraft Discord Bot",
        shortDescription: "Multifunctional World of Warcraft bot for guild management and character sync.",
        description: "Powerful Discord bot for WoW guilds, offering character syncing, applications, and API access to official Blizzard data.",
        extendedTitle: "World of Warcraft Discord Bot",
        image: "./discord.png",
        link: "/projects/wow-discordbot",
        externalLink: "https://sde.crowd-nation.com/discord-bot/",
        tech: ["Node.js", "TypeScript", "Discord.js", "REST API", "Blizzard API"],
        extendedText: `<div class="space-y-8 text-gray-300"><p>The <strong class="text-indigo-400">World of Warcraft Discord Bot</strong> is a Node.js and TypeScript-based bot built specifically for <em>World of Warcraft</em> guilds. It serves as a central hub for communication, guild management, and character data — all within Discord.</p><div><h3 class="text-lg font-semibold text-white">Key Features</h3><ul class="list-disc list-inside mt-3 space-y-2"><li>🔗 <strong class="text-indigo-400">Battle.net Linking</strong> via OAuth2 with secure token management</li><li>📜 <strong class="text-indigo-400">Slash Commands</strong> for character queries, applications, mount reminders, and more</li><li>📊 <strong class="text-indigo-400">Guild Statistics</strong> including class distribution, gear scores, and member roles</li><li>📝 <strong class="text-indigo-400">Application System</strong> directly within Discord, complete with moderation review</li><li>🗃️ <strong class="text-indigo-400">Local JSON Storage</strong> for users, guilds, and character data (migration planned)</li><li>🌍 <strong class="text-indigo-400">Multilingual Support</strong> using a built-in i18n system</li></ul></div><div><h3 class="text-lg font-semibold text-white">Technical Highlights</h3><ul class="list-disc list-inside mt-3 space-y-2"><li>⚙️ Modular command system with dynamic loader, robust error handling, and integrated command help</li><li>📚 Automated typing with <code class="text-purple-400">CharacterDetailsResponseMap</code> and structured API maps</li><li>🚀 Fast development flow using hot reloading and internal testing tools</li><li>🧠 Smart API caching to avoid Blizzard rate limits</li></ul></div><div><h3 class="text-lg font-semibold text-white">Integrations</h3><p class="mt-2">The bot connects to the official <strong class="text-indigo-400">Blizzard API</strong> to retrieve character stats, gear, token prices, mounts, and more. It features a custom-built mapping system that ensures full type safety, autocomplete support, and validation for every API call.</p></div><div><h3 class="text-lg font-semibold text-white">Vision</h3><p class="mt-2">The ultimate goal is to provide <strong class="text-indigo-400">the best possible toolkit for World of Warcraft guilds</strong> — including smooth recruitment workflows, synced character tracking, and automated stats management. A web dashboard and external API access are planned for future updates.</p></div><div><h3 class="text-lg font-semibold text-white">Status</h3><p class="mt-2">The bot is actively used in a live guild and under continuous development. Error handling, community feedback, and new feature rollouts are part of an ongoing roadmap.</p></div></div>`
    },
    {
        active: true,
        showPreview: true,
        title: "Crowd-Nation Backend",
        shortDescription: "ASP.NET Core API for event management, user handling & data delivery.",
        description: "The backbone of the Crowd-Nation platform: a scalable C# Web API powering events, users, and artist data.",
        extendedTitle: "Crowd-Nation Backend – The API Backbone of the Event Universe",
        image: "./REST_socialmedia.webp",
        link: "/projects/crowd-nation-backend",
        tech: ["C#", ".NET Core", "REST API", "Docker", "Swagger", "SurrealDB"],
        extendedText: `<div class="space-y-8 text-gray-300"><p>The <strong class="text-indigo-400">Crowd-Nation Backend</strong> serves as the foundation of the entire platform. Built with C# and ASP.NET Core, it exposes a powerful REST API that feeds all frontend components with structured and secure data.</p><p>From managing user data, events, artists, and locations to handling content moderation and suggestions — this backend ensures everything flows seamlessly and securely.</p><div><h3 class="text-white text-xl font-semibold">🔒 Security First</h3><p class="mt-2">User protection is paramount. Passwords are processed using a <strong class="text-indigo-400">multi-layered hashing system</strong> that includes salt, pepper, and a proven secure hashing algorithm. Sessions are handled via <strong class="text-indigo-400">token-based authentication</strong> to ensure secure and reliable access.</p></div><div><h3 class="text-white text-xl font-semibold">🧱 Modular Architecture</h3><ul class="list-disc list-inside mt-2 space-y-2"><li>User management with roles, permissions, login and registration</li><li>Event module for creating and editing live events</li><li>Artist handling including images, bios, and social media links</li><li>Genre, location, and type definitions accessible via dedicated endpoints</li><li>Community content tools like suggestions and recommendations</li></ul></div><div><h3 class="text-white text-xl font-semibold">🛠️ Dev Experience</h3><p class="mt-2">Developers benefit from full <strong class="text-indigo-400">Swagger integration</strong> for live documentation and endpoint testing. Configuration is handled through <code class="text-purple-400">appsettings.json</code>, and deployments are streamlined using <strong class="text-indigo-400">Docker</strong> and <strong class="text-indigo-400">docker-compose</strong>.</p></div><div><h3 class="text-white text-xl font-semibold">🚀 Deployment Pipeline</h3><p class="mt-2">The backend is deployed via a <strong class="text-indigo-400">CI/CD pipeline</strong> powered by GitHub Actions, and runs on a Linux-based Docker host. It's built to scale and easily extend as the platform grows.</p></div><p>With a strong focus on maintainability, security, and extensibility, the <strong class="text-indigo-400">Crowd-Nation Backend</strong> forms the reliable infrastructure for a thriving event platform.</p></div>`
    }
    // Additional projects would follow the same pattern for fallback, but for brevity we'll use the new system
];