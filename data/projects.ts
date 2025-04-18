import type { Project } from "~/types/projects";

const crowdNationFrontend: Project = {
    active: true,
    showPreview: true,
    title: "Crowd-Nation Frontend",
    shortDescription: "Modern event platform with personalization and real-time features.",
    description:
        "A Vue 3-based web application for Crowd-Nation featuring a responsive UI, event discovery, group tools, and live tracking integration.",
    extendedTitle:
        "Frontend interface for Crowd-Nation – blending modern technology with an immersive user experience.",
    image: "./Crowd-Nation-Logo-BETTER.png",
    link: "/projects/crowd-nation",
    github: "https://github.com/CrowdNation",
    tech: ["Vue 3", "Vite", "TailwindCSS", "Pinia", "TypeScript", "SCSS"],
    externalLink: "https://crowd-nation.com",
    extendedText: `
<div class="space-y-8 text-gray-300">
<p>
  The <strong class="text-indigo-400">Crowd-Nation Frontend</strong> is the visual core of the entire platform, crafted using Vue 3, Vite, and TailwindCSS.
  Built for music lovers, festival goers, and event organizers, it provides a seamless experience across all devices —
  from mobile usage at a festival to desktop-based event planning.
</p>

<div>
  <h3 class="text-lg font-semibold text-white">Key Focus Areas</h3>
  <ul class="list-disc list-inside mt-3 space-y-2">
    <li><strong class="text-indigo-400">Personalization:</strong> Smart suggestions based on interests, genres, and favorite artists.</li>
    <li><strong class="text-indigo-400">Real-Time Integration:</strong> Live data overlays such as crowd density and user positioning powered by the hardware tracking system.</li>
    <li><strong class="text-indigo-400">Dark, Atmospheric UI:</strong> A sleek, immersive interface with vivid accents in blue and purple.</li>
    <li><strong class="text-indigo-400">Modularity & Scalability:</strong> Fully component-based architecture with centralized state via Pinia.</li>
    <li><strong class="text-indigo-400">Multi-Stage Deployment:</strong> GitLab CI/CD pipelines for Live, Beta, and Preview environments, running on PM2.</li>
  </ul>
</div>

<div>
  <h3 class="text-lg font-semibold text-white">Additional Highlights</h3>
  <ul class="list-disc list-inside mt-3 space-y-2">
    <li>i18n support for multilingual users (in progress).</li>
    <li>SCSS-based styling architecture for clean, maintainable UI components.</li>
    <li>Automated testing with <code class="text-purple-400">Vitest</code> and <code class="text-purple-400">Playwright</code>.</li>
    <li>Optimized for SEO and network performance — even in low-bandwidth festival areas.</li>
  </ul>
</div>

<p>
  <strong class="text-indigo-400">Crowd-Nation Frontend</strong> is more than just a site — it's your interactive event companion.
  Whether you're syncing with friends, checking the next act, browsing the map, or joining a private group chat,
  this platform bridges the gap between planning and experiencing, powered by music, technology, and community.
</p>
</div>
`,
};

const wowDiscordBot: Project = {
    active: true,
    showPreview: true,
    title: "World of Warcraft Discord Bot",
    shortDescription:
        "Multifunctional World of Warcraft bot for guild management and character sync.",
    description:
        "Powerful Discord bot for WoW guilds, offering character syncing, applications, and API access to official Blizzard data.",
    image: "./discord.png",
    link: "/projects/wow-discordbot",
    externalLink: "https://sde.crowd-nation.com/discord-bot/",
    tech: ["Node.js", "TypeScript", "Discord.js", "REST API", "Blizzard API"],
    extendedText: `
<div class="space-y-8 text-gray-300">
  <p>
    The <strong class="text-indigo-400">World of Warcraft Discord Bot</strong> is a Node.js and TypeScript-based bot built specifically for <em>World of Warcraft</em> guilds. It serves as a central hub for communication, guild management, and character data — all within Discord.
  </p>

  <div>
    <h3 class="text-lg font-semibold text-white">Key Features</h3>
    <ul class="list-disc list-inside mt-3 space-y-2">
      <li>🔗 <strong class="text-indigo-400">Battle.net Linking</strong> via OAuth2 with secure token management</li>
      <li>📜 <strong class="text-indigo-400">Slash Commands</strong> for character queries, applications, mount reminders, and more</li>
      <li>📊 <strong class="text-indigo-400">Guild Statistics</strong> including class distribution, gear scores, and member roles</li>
      <li>📝 <strong class="text-indigo-400">Application System</strong> directly within Discord, complete with moderation review</li>
      <li>🗃️ <strong class="text-indigo-400">Local JSON Storage</strong> for users, guilds, and character data (migration planned)</li>
      <li>🌍 <strong class="text-indigo-400">Multilingual Support</strong> using a built-in i18n system</li>
    </ul>
  </div>

  <div>
    <h3 class="text-lg font-semibold text-white">Technical Highlights</h3>
    <ul class="list-disc list-inside mt-3 space-y-2">
      <li>⚙️ Modular command system with dynamic loader, robust error handling, and integrated command help</li>
      <li>📚 Automated typing with <code class="text-purple-400">CharacterDetailsResponseMap</code> and structured API maps</li>
      <li>🚀 Fast development flow using hot reloading and internal testing tools</li>
      <li>🧠 Smart API caching to avoid Blizzard rate limits</li>
    </ul>
  </div>

  <div>
    <h3 class="text-lg font-semibold text-white">Integrations</h3>
    <p class="mt-2">
      The bot connects to the official <strong class="text-indigo-400">Blizzard API</strong> to retrieve character stats, gear, token prices, mounts, and more. It features a custom-built mapping system that ensures full type safety, autocomplete support, and validation for every API call.
    </p>
  </div>

  <div>
    <h3 class="text-lg font-semibold text-white">Vision</h3>
    <p class="mt-2">
      The ultimate goal is to provide <strong class="text-indigo-400">the best possible toolkit for World of Warcraft guilds</strong> — including smooth recruitment workflows, synced character tracking, and automated stats management. A web dashboard and external API access are planned for future updates.
    </p>
  </div>

  <div>
    <h3 class="text-lg font-semibold text-white">Status</h3>
    <p class="mt-2">
      The bot is actively used in a live guild and under continuous development. Error handling, community feedback, and new feature rollouts are part of an ongoing roadmap.
    </p>
  </div>
</div>
`,
};

const crowdNationBackend: Project = {
    active: true,
    showPreview: true,
    title: "Crowd-Nation Backend",
    shortDescription: "ASP.NET Core API for event management, user handling & data delivery.",
    description:
        "The backbone of the Crowd-Nation platform: a scalable C# Web API powering events, users, and artist data.",
    image: "./REST_socialmedia.webp",
    link: "/projects/crowd-nation-backend",
    tech: ["C#", ".NET Core", "REST API", "Docker", "Swagger", "SurrealDB"],
    extendedTitle: "Crowd-Nation Backend – The API Backbone of the Event Universe",
    extendedText: `
<div class="space-y-8 text-gray-300">
  <p>
    The <strong class="text-indigo-400">Crowd-Nation Backend</strong> serves as the foundation of the entire platform. Built with C# and ASP.NET Core, it exposes a powerful REST API that feeds all frontend components with structured and secure data.
  </p>
  <p>
    From managing user data, events, artists, and locations to handling content moderation and suggestions — this backend ensures everything flows seamlessly and securely.
  </p>

  <div>
    <h3 class="text-white text-xl font-semibold">🔒 Security First</h3>
    <p class="mt-2">
      User protection is paramount. Passwords are processed using a <strong class="text-indigo-400">multi-layered hashing system</strong> that includes salt, pepper, and a proven secure hashing algorithm. Sessions are handled via <strong class="text-indigo-400">token-based authentication</strong> to ensure secure and reliable access.
    </p>
  </div>

  <div>
    <h3 class="text-white text-xl font-semibold">🧱 Modular Architecture</h3>
    <ul class="list-disc list-inside mt-2 space-y-2">
      <li>User management with roles, permissions, login and registration</li>
      <li>Event module for creating and editing live events</li>
      <li>Artist handling including images, bios, and social media links</li>
      <li>Genre, location, and type definitions accessible via dedicated endpoints</li>
      <li>Community content tools like suggestions and recommendations</li>
    </ul>
  </div>

  <div>
    <h3 class="text-white text-xl font-semibold">🛠️ Dev Experience</h3>
    <p class="mt-2">
      Developers benefit from full <strong class="text-indigo-400">Swagger integration</strong> for live documentation and endpoint testing. Configuration is handled through <code class="text-purple-400">appsettings.json</code>, and deployments are streamlined using <strong class="text-indigo-400">Docker</strong> and <strong class="text-indigo-400">docker-compose</strong>.
    </p>
  </div>

  <div>
    <h3 class="text-white text-xl font-semibold">🚀 Deployment Pipeline</h3>
    <p class="mt-2">
      The backend is deployed via a <strong class="text-indigo-400">CI/CD pipeline</strong> powered by GitHub Actions, and runs on a Linux-based Docker host. It’s built to scale and easily extend as the platform grows.
    </p>
  </div>

  <p>
    With a strong focus on maintainability, security, and extensibility, the <strong class="text-indigo-400">Crowd-Nation Backend</strong> forms the reliable infrastructure for a thriving event platform.
  </p>
</div>
`,
};

const universalJenga: Project = {
    active: true,
    showPreview: false,
    title: "Universal Jenga",
    shortDescription:
        "Digital Jenga game with randomized challenges for couples or drinking nights.",
    description:
        "A versatile party game that combines classic Jenga mechanics with randomly generated tasks for a unique experience.",
    image: "./universal-jenga.png",
    link: "/projects/universal-jenga",
    externalLink: "https://jenga.crowd-nation.com",
    tech: ["Vue 3", "TypeScript", "Vite"],
    extendedTitle: "Universal Jenga – The Digital Party Game for Couples & Drinking Nights",
    extendedText: `
<div class="space-y-6 text-gray-300">
  <p>
    <strong class="text-indigo-400">Universal Jenga</strong> is a creative and technical side project born from the idea of reimagining classic game mechanics in a digital format.
    Built with <strong>Vue 3</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>, it delivers fast performance and clean structure.
  </p>

  <p>
    At its core, Universal Jenga replaces handwritten block tasks with numbered blocks.
    The challenges themselves are randomly selected and shuffled from predefined sets on the website.
    Each game is unique, and thanks to the dynamic system, no one can "cheat" by memorizing numbers.
  </p>

  <div>
    <h3 class="text-white text-lg font-semibold">🎮 Game Modes</h3>
    <p class="mt-2">Two challenge sets are available:</p>
    <ul class="list-disc list-inside space-y-2 mt-2">
      <li>
        <strong>🥂 Drinking:</strong> Classic, edgy, or wild – with 3 difficulty levels:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li><strong>Easy:</strong> No sexual content. Perfect for casual gatherings.</li>
          <li><strong>Medium:</strong> Involves more daring tasks and physical interaction.</li>
          <li><strong>Softporn:</strong> Erotic and spicy – tailored for adventurous adults.</li>
        </ul>
      </li>
      <li>
        <strong>❤️ Couples:</strong> Designed for romantic or very close relationships.
        Challenges range from intimate to provocative, making it the perfect playful date-night companion.
      </li>
    </ul>
  </div>

  <div>
    <h3 class="text-white text-lg font-semibold">✨ Why It Stands Out</h3>
    <ul class="list-disc list-inside space-y-2 mt-2">
      <li>Games can be shared via <strong>QR code</strong> or exported as <strong>PDF</strong> for analog use.</li>
      <li>Perfect as a party starter, icebreaker, or social game for smaller groups.</li>
      <li>Supports <strong>Multilingual content</strong> – ready for global fun.</li>
      <li>Session data is saved in <strong>LocalStorage</strong>, allowing users to resume where they left off.</li>
    </ul>
  </div>

  <p>
    Whether you're at a house party, a festival, or on a cozy evening in – 
    <strong class="text-indigo-400">Universal Jenga</strong> brings laughter, connection, and unpredictability to the table. 
    The game is future-ready for scaling through marketing, partnerships, or physical integrations like party boxes or apps.
  </p>
</div>
`,
};

const crowdNationCDN: Project = {
    active: true,
    showPreview: true,
    title: "Crowd-Nation CDN",
    shortDescription:
        "Flexible CDN system with access tokens, permission roles, and detailed access control.",
    description:
        "An advanced content delivery system for Crowd-Nation with token support, visibility rules, and fine-grained access permissions.",
    image: "./cdn.avif",
    link: "/projects/crowd-nation-cdn",
    // github: "https://github.com/CrowdNation/CrowdNation.CDN",
    tech: ["Node.js", "Express", "Docker", "EJS", "Axios", "JavaScript"],
    extendedTitle: "Crowd-Nation CDN – Secure & Flexible File Delivery for Modern Platforms",
    extendedText: `
  <div class="space-y-6 text-gray-300">
    <p>
      <strong class="text-indigo-400">Crowd-Nation CDN</strong> is a custom-built, flexible content delivery system developed for both
      internal use at Crowd-Nation and as a powerful standalone solution. The goal was to create a secure, API-first platform for
      file management and distribution that allows precise control and supports both public and private access scenarios.
    </p>

    <p>
      At the core are <strong>access tokens</strong>, <strong>user roles & permissions</strong>, and configurable visibility through public/private flags.
      Assets can be shared with time-limited or permanent access via secure token-based URLs, providing full control over visibility and usability.
    </p>

    <div>
      <h3 class="text-white text-lg font-semibold">⚙️ Architecture & Key Features</h3>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li><strong>Node.js & Express:</strong> Lightweight and modular API backend</li>
        <li><strong>Docker-ready:</strong> Fully containerized for seamless deployment across environments</li>
        <li><strong>JWT-style tokens:</strong> Token-based access with optional expiration logic</li>
        <li>
          <strong>Single Sign-On:</strong> Automatically syncs session state from <code>api.crowd-nation.com</code> via cookie-based authentication
        </li>
        <li>
          <strong>Granular Permission Control:</strong> Assign read/write access per user or role for each file
        </li>
        <li><strong>Access Statistics:</strong> Tracks views and downloads per asset</li>
        <li><strong>Backend Integration:</strong> Works hand-in-hand with the Crowd-Nation backend for dynamic file access structures</li>
      </ul>
    </div>

    <div>
      <h3 class="text-white text-lg font-semibold">🛠 Planned Features</h3>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li>CMS (Content Management System) support for text-based content control within Crowd-Nation websites</li>
        <li>Admin dashboard for managing assets, roles, and access tokens visually</li>
        <li>Automated cleanup for temporary or expired uploads</li>
      </ul>
    </div>

    <div>
      <h3 class="text-white text-lg font-semibold">📦 Use Cases</h3>
      <ul class="list-disc list-inside space-y-2 mt-2">
        <li>Distributing SVGs, banners, and media assets for event and artist pages</li>
        <li>Securing PDFs or videos with time-limited or restricted access</li>
        <li>Internal file management between editorial or moderation teams</li>
      </ul>
    </div>

    <p>
      <strong class="text-indigo-400">Crowd-Nation CDN</strong> isn't just a utility – it’s a standout part of the ecosystem.
      With its smart mix of <span class="text-white">security</span>, <span class="text-white">control</span>, and <span class="text-white">developer experience</span>,
      it redefines how a CDN can be both powerful and user-centric – made with ❤️ and attention to detail.
    </p>
  </div>
  `,
};

const IHKNachweisSchreiber: Project = {
    active: true,
    showPreview: false,
    title: "IHK Report Generator",
    shortDescription: "Automated PDF creation for vocational training reports.",
    description:
        "A Node.js-based CLI tool for generating weekly or monthly IHK reports as ready-to-print PDFs with support for data import from Jira and Untis.",
    image: "./ihk-nachweis-schreiber.png",
    link: "/projects/ihk-nachweis-schreiber",
    github: "https://github.com/WlanKabL/IHK-Nachweis-Schreiber",
    tech: ["Node.js", "PDFKit", "Jira API", "Untis Export"],
    extendedText: `
  <div class="space-y-6 text-gray-300">
    <p>
      The <strong class="text-indigo-400">IHK Report Generator</strong> is a smart Node.js utility designed to automate the generation of weekly or monthly training reports (Berichtshefte) for apprentices in IHK-regulated professions. This tool significantly reduces manual effort by producing structured, professional PDFs based on configurable templates and imported data.
    </p>

    <h3 class="text-white text-lg font-semibold">✨ Key Features</h3>
    <ul class="list-disc list-inside space-y-2 mt-2">
      <li>Fully automated PDF generation for weekly/monthly report periods</li>
      <li>Customizable templates with dynamic placeholders (e.g. name, department, week, date range)</li>
      <li>Organized folder structure for archiving printouts and digital copies</li>
      <li>Optional data import from <strong>Jira</strong> for practical tasks and <strong>Untis</strong> for school schedules</li>
      <li>Simple CLI interface with interactive prompts</li>
    </ul>

    <h3 class="text-white text-lg font-semibold">🧪 Tech Stack & Implementation</h3>
    <ul class="list-disc list-inside space-y-2 mt-2">
      <li><strong>Node.js</strong> runtime for platform-independent execution</li>
      <li><strong>PDFKit</strong> for structured and clean PDF output</li>
      <li><strong>REST API integrations</strong> (Jira, Untis) for automatic data collection</li>
      <li><strong>Filesystem logic</strong> to generate folders, filenames, and save locations dynamically</li>
    </ul>

    <h3 class="text-white text-lg font-semibold">📘 Real-World Use Case</h3>
    <p>
      The tool was born out of necessity — managing weekly training reports can be time-consuming and error-prone, especially when apprentices fail to document their work regularly.
      With automated imports and streamlined PDF creation, this solution saves time and improves both consistency and reporting quality.
    </p>

    <h3 class="text-white text-lg font-semibold">✅ Conclusion</h3>
    <p>
      <span class="text-indigo-400 font-semibold">IHK Report Generator</span> is more than just a script — it's a time-saving assistant for trainees, trainers, and HR departments alike. Thanks to its modular structure and API-ready architecture, it’s easily extendable for future enhancements or custom workflows.
    </p>
  </div>
  `,
};

const crowdNationTracking: Project = {
    active: true,
    showPreview: false,
    title: "Crowd-Nation Tracking",
    shortDescription: "Real-time event tracking using WiFi-based triangulation.",
    description:
        "A hardware-powered tracking system that determines user locations on event grounds through WiFi access point triangulation.",
    image: "./crowd-nation-tracking.png",
    link: "/projects/crowd-nation-tracking",
    tech: ["WiFi", "Node.js", "Crowd-Nation API", "Triangulation", "Mobile App"],
    extendedTitle: "Crowd-Nation Tracking – Reuniting Friends in Real-Time at Events",
    extendedText: `
  <div class="space-y-6 text-gray-300">
    <p>
      <strong class="text-indigo-400">Crowd-Nation Tracking</strong> is a unique system designed to track users in real time across large events such as festivals or concerts — even in areas where GPS fails. 
      The concept was born from a simple frustration: losing friends in the crowd and not being able to find them again.
    </p>

    <p>
      Using our own <strong>WiFi Access Points</strong>, mobile devices within range are detected. The signal strength between each device and multiple access points is analyzed to estimate a user's virtual position.
      Identification is based on MAC addresses, ensuring anonymized yet consistent tracking of individuals.
    </p>

    <p>
      The system runs fully <strong>offline and internet-independent</strong>. All access points broadcast the same SSID and communicate locally with the event server.
      The server performs a triangulation algorithm and reports the user's location back to the Crowd-Nation platform in real-time.
    </p>

    <p>
      When paired with the <span class="text-indigo-400 font-semibold">Crowd-Nation mobile app</span>, users can add friends and view their locations on a live map.
      This is especially useful in tents, indoor areas, or crowded zones where GPS is unreliable or fails completely.
    </p>

    <p>
      The goal is not just to offer a tech gimmick, but to deliver a full-fledged <strong class="text-indigo-400">festival navigation system</strong> — one that boosts social interaction, enhances safety, and adds real value to the live event experience.
    </p>

    <div>
      <h3 class="text-white text-lg font-semibold">🔧 Planned Features</h3>
      <ul class="list-disc list-inside mt-2 space-y-1">
        <li>Full integration into the Crowd-Nation app (iOS & Android)</li>
        <li>Detailed mapping of event terrain and zone boundaries</li>
        <li>Notifications when entering or leaving designated areas (e.g. "Main Stage")</li>
        <li>GDPR-compliant opt-in/opt-out mechanisms for user consent</li>
      </ul>
    </div>
  </div>
  `,
};

const wowWebsiteProject: Project = {
    active: true,
    showPreview: false,
    title: "World of Warcraft Guild Website",
    shortDescription:
        "Landing page and bot overview in the Dark-Fantasy style of Schatten der Ewigkeit.",
    description:
        "A stylish website presenting our WoW guild along with detailed information and invite links for the integrated Discord bot.",
    image: "./SdE-Logo.jpg",
    link: "/projects/wow-website",
    github: "https://github.com/WlanKabL/sde-wow-website",
    externalLink: "https://sde.crowd-nation.com/",
    tech: ["Vue.js", "TypeScript", "TailwindCSS", "Nuxt 3", "OAuth", "WebSocket"],
    extendedTitle: "Schatten der Ewigkeit – Guild Presence with Discord Bot Integration",
    extendedText: `
  <div class="space-y-6 text-gray-300">
    <p>
      The official website for our <strong class="text-indigo-400">Schatten der Ewigkeit</strong> guild serves as a modern, dark-fantasy themed landing page. Built with <code>Vue 3</code> and <code>Nuxt 3</code>, it provides visitors and potential members with a stylish and informative entry point into our guild universe.
    </p>

    <p>
      The homepage greets users with immersive <strong>Dark-Fantasy vibes</strong>—fitting perfectly with our guild's identity. Carefully crafted content, visuals, and call-to-actions invite visitors to explore more without overwhelming them.
    </p>

    <p>
      The website also features a dedicated <span class="text-indigo-400 font-medium">Discord Bot Subpage</span>, where users can learn more about our bot’s functionality and integrations:
    </p>

    <ul class="list-disc list-inside ml-4 space-y-1">
      <li>Character linking via Battle.net OAuth2</li>
      <li>Automatic role assignment based on characters</li>
      <li>Application system directly within Discord</li>
      <li>Mount reminders and more quality-of-life features</li>
    </ul>

    <p class="pt-2">
      Visitors will also find direct access to the most important links:
    </p>
    <ul class="list-disc list-inside ml-4 space-y-1">
      <li><strong>Join the Discord Server</strong></li>
      <li><strong>Invite the Bot to Your Server</strong></li>
    </ul>

    <p>
      Looking forward, we plan to enhance the site with more interactivity: stored guild/character data, an internal application portal, and live interaction with the bot through <code>WebSockets</code>.
    </p>

    <p>
      For now, the goal is simple: <span class="text-indigo-400 font-semibold">represent our guild with style</span>—and this site delivers just that.
    </p>
  </div>
  `,
};

const rlShopTracking: Project = {
    active: true,
    showPreview: false,
    title: "Rocket League Shop Tracker",
    shortDescription: "Daily scraping of the Rocket League item shop with checksum validation.",
    description:
        "An automated tool to archive and analyze Rocket League shop data with structured output and deduplication logic.",
    image: "./mass-data-tracking.webp",
    link: "/projects/rl-shop-tracking",
    github: "https://github.com/WlanKabL/RL-Shop-Tracking",
    tech: ["Node.js", "JSON", "Cheerio"],
    extendedText: `
  <div class="space-y-6 text-gray-300">
    <p>
      <strong class="text-indigo-400">RL-Shop-Tracking</strong> is a fully automated data scraping tool that fetches the Rocket League in-game shop daily. It archives all items with timestamps and metadata for further analysis—ideal for trend detection, rotation tracking, and item rarity insights.
    </p>

    <ul class="list-disc list-inside ml-4 space-y-1">
      <li>Utilizes <code>Cheerio</code> for HTML parsing and extracting structured data.</li>
      <li>Stores content as <code>JSON</code> with timestamps and all relevant item metadata.</li>
      <li>Generates <strong>checksums</strong> to avoid duplicate entries and ensure data cleanliness.</li>
    </ul>

    <p>
      The process runs fully automated on a scheduled basis and supports long-term analytics on item availability, offer cycles, and featured content within the Rocket League ecosystem.
    </p>

    <p>
      Whether you're a data nerd, a collector, or a developer working on a tracker—this tool delivers clean and consistent Rocket League shop snapshots, day by day.
    </p>
  </div>
  `,
};

const surrealToCSharp: Project = {
    active: true,
    showPreview: false,
    title: "SurrealToCSharp",
    shortDescription: "Convert SurrealDB schemas into C# classes for .NET projects.",
    description:
        "An automated tool that transforms SurrealDB data dumps into typed C# model classes for use in backend development.",
    image: "./SurrealToCSharp.png",
    link: "/projects/surreal-to-csharp",
    github: "https://github.com/WlanKabL/SurrealToCSharp",
    tech: ["Node.js", "C#", "SurrealDB"],
    extendedTitle: "SurrealToCSharp – From SurrealDB to Strongly Typed .NET Models",
    extendedText: `
    <div class="space-y-6 text-gray-300">
      <p>
        <strong class="text-indigo-400">SurrealToCSharp</strong> is a conversion utility designed to transform SurrealDB export files into fully structured <strong>C# class definitions</strong>. It automates the process of mapping database schema information directly into .NET-friendly data models.
      </p>

      <ul class="list-disc list-inside ml-4 space-y-1">
        <li>Parses complete <code>SurrealDB</code> dumps with table and field detection.</li>
        <li>Infers field types and creates clean, strongly typed <code>C#</code> class files.</li>
        <li>Eliminates the need to manually recreate model classes for known database schemas.</li>
      </ul>

      <p>
        Whether you're reverse-engineering an existing SurrealDB dataset or scaffolding models for a new .NET backend, <strong>SurrealToCSharp</strong> provides a fast and reliable starting point.
      </p>

      <p>
        It’s particularly useful for projects that aim to bridge NoSQL schema logic with typed languages like C#, offering consistency, maintainability, and speed in development.
      </p>
    </div>
  `,
};

export const projects: Project[] = [
    crowdNationFrontend,
    wowDiscordBot,
    crowdNationBackend,
    universalJenga,
    crowdNationCDN,
    IHKNachweisSchreiber,
    crowdNationTracking,
    wowWebsiteProject,
    rlShopTracking,
    surrealToCSharp,
];
