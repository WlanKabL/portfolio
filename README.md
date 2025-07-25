# 🧩 WlanKabL Portfolio

A modern, responsive and dark-themed personal portfolio built with **Nuxt 3**, **TypeScript**, **TailwindCSS**, and a full component-based architecture. It showcases professional projects, personal tools, and creative experiments – all from a passionate full-stack developer & creative builder.

---

## ✨ Features

- Fully responsive & dark UI
- Animated project previews
- Project detail pages with extended descriptions
- Localized language switcher (i18n-ready)
- Contact form with Discord Webhook support
- SEO Meta tags for all pages
- 404 error page with custom styling
- Modular component structure
- Dockerized for production deployment

---

## 🧑‍💻 Developer Environment

To set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/WlanKabL/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create `.env` File

Create a `.env` file in the root directory:

```env
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/your-webhook-url
```

### 4. Run Dev Server

```bash
npm run dev
```

Now visit `http://localhost:3000` to see the site in action.

---

## 🐳 Docker Deployment

This project is fully dockerized and ready for production.

### 1. Build Docker Image

Use Docker Compose (recommended for more control):

### `docker-compose.yml`

```yaml
services:
    portfolio:
        build: .
        ports:
            - "3000:3000"
        env_file:
            - .env
        restart: unless-stopped
```

Then run:

```bash
docker-compose up -d (--build)
```

---

## 🛠 Tech Stack

- **Nuxt 3** – Framework for Vue 3
- **TypeScript** – Type safety and modern JS tooling
- **TailwindCSS** – Utility-first CSS for clean, responsive design
- **Pinia** – Modern state management
- **VueUse** – Composable utilities
- **Lucide Icons** – Beautiful SVG icon pack
- **SCSS** – Extended styling capabilities

---

## 📁 Project Structure (Simplified)

```
📁 components/        → UI components (ItemTag, PageContainer, LinkItem, etc.)
📁 data/              → Project list with detailed metadata
📁 pages/             → Pages like /projects, /about, /resume, etc.
📁 public/            → Static assets (images, icons)
📁 styles/            → Global SCSS
📁 utils/             → Reusable logic/helpers
.env                 → Environment variables
nuxt.config.ts       → Nuxt configuration
```

---

## 📬 Contact Form

Submissions are sent to your **Discord Webhook** set in the `.env` file. The `ContactForm.vue` handles email + message input and posts via `$fetch`.

---

## 🚀 Roadmap / Ideas

- Add multilingual support for entire content
- Blog integration via CMS (like Crowd-Nation CDN or Contentful)
- Admin panel to edit projects
- Animations & transitions for route changes
- GitHub Actions CI pipeline

---

## 🧑 Author

**WlanKabL**  
Built with love, passion, and way too much caffeine ☕  
[https://wlankabl.crowd-nation.com/](https://wlankabl.crowd-nation.com/)

---

## 📄 License

MIT – Free to use, adapt and learn from.  
Credit appreciated & required.
