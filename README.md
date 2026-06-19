# Sattva Design Website

Marketing + SEO site for Sattva Design Consultancy, built with **Next.js 14 (App Router)**, React 18, TypeScript, Tailwind CSS and MUI. Content (blog, projects) comes from Contentful; images from Cloudinary; the contact form uses EmailJS.

## Stack & rendering

- **Next.js App Router** with Server Components.
- The ~45 location/service SEO landing pages are **statically prerendered** (real HTML for crawlers).
- Blog and project pages use **ISR** (`export const revalidate = 60`) so new Contentful entries appear without a redeploy.
- SEO via the Metadata API (per-page `metadata` / `generateMetadata`) plus inline JSON-LD structured data.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` (sitemap includes Contentful blog/project slugs).

## Local development

```bash
npm install
cp .env.example .env   # then fill in real values
npm run dev            # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## Environment variables

Set them in `.env` locally and in the Vercel project settings. Contentful is fetched server-side only, so its credentials are **server-only** (no `NEXT_PUBLIC_` prefix, not exposed to the browser). The Cloudinary and EmailJS values are used in client components, so they stay `NEXT_PUBLIC_*`.

| Variable | Scope | Purpose |
|----------|-------|---------|
| `CONTENTFUL_SPACE_ID` | server | Contentful space |
| `CONTENTFUL_ACCESS_TOKEN` | server | Contentful delivery token |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | client | Cloudinary cloud name |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | client | EmailJS public key |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | client | EmailJS service id |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | client | EmailJS template id |

## Deployment (Vercel)

Import the repo into Vercel, add the env vars above, and deploy — the framework preset is auto-detected as Next.js. ISR and on-demand rendering work out of the box.

## Project structure

- `app/` — routes (App Router). Static landing pages live in `app/services/*` and `app/service-areas/*`; dynamic content in `app/blog/[slug]` and `app/projects/[slug]`.
- `src/components/` — shared UI (`Navbar`, `Footer`, `ContactSection`, `ServiceCard`, `CloudinaryImage`).
- `src/utils/` — `contentful.ts` (CMS client + queries), `cloudinary.ts`, `offices.ts` (office locations).
