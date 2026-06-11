# Portfolio — wlankabl.com / wlankabl.de

Portfolio & studio site of Philipp (online: **WlanKabL**, business: **WlanKabL Digital**, his Einzelunternehmen). He is a product builder/entrepreneur first, developer second — the site must convert freelance clients AND showcase his SaaS products. Nuxt 3 + Tailwind CSS 4 + @nuxtjs/i18n, deployed via Docker. Open source — keep the code clean.

## Stack & commands

- Nuxt 3 (SSR), TypeScript strict, Tailwind CSS 4 (`@theme` tokens in `assets/tailwind.css`)
- `npm run dev` (port 3000) · `npm run build` · `npm run format:fix`
- Lint: `npx eslint components pages layouts plugins data composables types`

## Design system — "Engineered Studio"

Defined in `assets/tailwind.css`. Stick to it on every page:

- Light technical canvas: `bg` (#f4f3f0), `ink`, `muted`, `faint`, `line`/`line-strong`. NOT dark, NOT paper-cream.
- **Colors are Philipp's identity:** `accent` = violet #6d28d9 (+ `accent-bright` #8b5cf6) — his favorite color and brand heritage. `highlight` = yellow #fdd23a as the complementary EYE-CATCHER: primary CTAs (`.btn-primary`, hard offset shadow), `.marker` highlighter swipes, stickers, text selection. Never blue.
- **Brand system (the core idea):** every product keeps its own brand. `data/projects.ts` defines `brand: { color, panel }` per project. Showcase panels (`ProductShowcase`) render dark in the product's `panel` color, cards hover in `--brand`, case-study articles recolor via `--project-accent`. The site is the neutral gallery; the products provide the color.
- **Asymmetry & character (explicitly wanted):** staggered columns (ServicesSection cards step down like KeeperLog's persona router), slightly rotated elements (polaroid, logo plates, stickers, "Digital" tag), `.hairline-hover` accents that grow on hover, off-center blooms. No symmetric grid textures (the blueprint grid was rejected as "KI 0815"), no marquees.
- Fonts: `font-display` (Bricolage Grotesque, ALWAYS with `font-bold`/`font-semibold` — weight 400 is not loaded), `font-sans` (Archivo), `font-mono` (IBM Plex Mono — labels, indices, metrics).
- Patterns: numbered section labels (`.section-label`), hairline dividers, `.btn-primary` (yellow), `.btn-secondary` (violet outline), `.marker`, `.sticker`, `.link-underline`, `.input-line`.
- Motion: `v-reveal` directive (plugins/reveal.ts) with optional ms delay (`v-reveal="120"`); hero uses one-time CSS keyframes + gentle `float-soft` sticker drift; respects `prefers-reduced-motion`.

## Conventions

- UI text ALWAYS via i18n — every key must exist in `i18n/locales/{de,en,nl}.json`
- Locale defaults: browser detection + `plugins/locale-domain.ts` (.de domain → German)
- Project content lives in `data/projects.ts` (config) + locale files (`projects.*` keys, incl. HTML `extended_text`)
- Legacy utility classes inside locale HTML (`text-indigo-400` etc.) are remapped via `.project-article` overrides in `assets/tailwind.css` — do not bulk-edit locale HTML for styling
- Exactly one project has `featured: true`; preview slots (`previewSlot`) must be unique
- No emojis in UI copy; the design carries the personality

## Positioning (from Philipp directly)

- Brand sender: WlanKabL + WlanKabL Digital up front; "Philipp Stecher" only in depth (about/resume)
- Explicit services section wanted (client conversion matters)
- He rejected: pure dev/hacker aesthetics, serif "Schreibschrift" feel, generic AI-template looks, blue accents (purple is his color, yellow the eye-catcher), symmetric grid patterns, marquees
- He loves: asymmetric/staggered compositions (reference: KeeperLog landing, `cold-blood-cast` repo)
