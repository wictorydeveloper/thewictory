# Performance Notes

## Current Optimization Choices

- App Router for modern routing and metadata
- Server-rendered pages by default
- Client components only where interactivity is needed
- CSS-first motion and lightweight SVG charts
- Minimal layout shift through stable card, chart, and CTA dimensions
- Semantic HTML structure
- Accessible button labels and navigation
- Automatically generated sitemap and robots

## Lighthouse Target

Target scores:

- Performance: 95+
- SEO: 100
- Accessibility: 95+
- Best Practices: 95+

## Before Production

- Compress and upload brand images.
- Add a real Open Graph image.
- Replace placeholders with verified company data.
- Run `npm run build`.
- Test mobile viewports.
- Run Lighthouse on Vercel preview.
- Connect analytics, CRM, Meta Pixel, Google Ads, and Search Console.
