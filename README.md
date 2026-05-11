# The Wictory Premium Website

Production-ready Next.js website for The Wictory, built as an AI-first digital marketing, branding, content creation, and performance growth company.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- Framer Motion ready
- Recharts ready
- Lucide icons
- Vercel Analytics placeholder
- Dynamic SEO landing page architecture

## Main Pages

- `/` Home
- `/services`
- `/packages`
- `/about`
- `/case-studies`
- `/contact`
- `/blog`

## Programmatic SEO

The dynamic route `/[slug]` generates city and national SEO landing pages from `lib/site.ts`.

Examples:

- `/digital-marketing-agency-in-chandigarh`
- `/seo-company-in-delhi`
- `/social-media-marketing-agency-in-mumbai`
- `/paid-ads-agency-in-bangalore`
- `/ai-marketing-company-india`

To add more cities, update `tierTwoCities` or add a new list in `lib/site.ts`. The sitemap updates automatically.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```

## Deploy To Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Set the production domain to `thewictory.com`.
4. Deploy.

## Launch Checklist

- Replace placeholder phone, WhatsApp, and email in `lib/site.ts`.
- Add real client logos, testimonials, and case study visuals.
- Add Calendly embed on `/contact`.
- Add real analytics and pixel IDs.
- Add verified Google Business Profile details.
- Upload brand logo and Open Graph images to `/public`.
