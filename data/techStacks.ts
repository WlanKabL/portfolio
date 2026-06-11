export interface TechStackGroup {
    /** i18n key under `tech_stack.*` */
    key: string;
    skills: string[];
}

export const techStacks: TechStackGroup[] = [
    {
        key: "frontend",
        skills: [
            "Vue.js",
            "TypeScript",
            "Tailwind CSS",
            "Nuxt 3",
            "SCSS",
            "Pinia",
            "Vite",
            "Vue Router",
            "PrimeVue",
        ],
    },
    {
        key: "backend",
        skills: [
            "Node.js",
            "Express",
            "C#",
            "REST APIs",
            "ASP.NET Core",
            "SurrealDB Integration",
            "Authentication (JWT, OAuth2)",
        ],
    },
    {
        key: "database",
        skills: ["SurrealDB", "MySQL", "MongoDB", "SQL", "ORMs", "Data Modeling"],
    },
    {
        key: "devops",
        skills: ["Docker", "CI/CD", "Portainer", "PM2", "GitLab CI", "Deployment Automation"],
    },
    {
        key: "security",
        skills: [
            "HTTPS (Let's Encrypt)",
            "SSH",
            "Fail2Ban",
            "JWT",
            "Reverse Proxy",
            "Firewall",
            "Network Monitoring",
        ],
    },
    {
        key: "tooling",
        skills: [
            "Visual Studio Code",
            "Swagger",
            "Postman",
            "Git",
            "Nginx",
            "Apache2",
            "Jira",
            "Playwright",
            "Vitest",
            "ESLint",
            "Prettier",
        ],
    },
    {
        key: "infrastructure",
        skills: [
            "Domain Management",
            "DNS",
            "Nginx",
            "Apache2",
            "Let's Encrypt",
            "Subdomains",
            "SSL Configuration",
        ],
    },
    {
        key: "ux",
        skills: [
            "Responsive Design",
            "Accessibility",
            "WebSocket Communication",
            "Realtime Interfaces",
            "User-Centered Design",
        ],
    },
];
