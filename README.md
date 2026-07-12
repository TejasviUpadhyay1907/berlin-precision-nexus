# Berlin Machineries — Corporate Website

Official website for **Berlin Machineries Private Limited** — manufacturers of precision CNC & EDM machines since 2005.

## Tech Stack

- **Framework:** React + TanStack Start (SSR)
- **Routing:** TanStack Router (file-based)
- **Styling:** Tailwind CSS v4
- **Animation:** Motion (Framer Motion)
- **UI Components:** shadcn/ui (Radix primitives)
- **Build:** Vite 8
- **Language:** TypeScript

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, products, industries, stats, testimonials |
| `/about` | Company story, timeline, team |
| `/products` | Product portfolio (4 machine families) |
| `/products/[category]` | Category listing |
| `/products/[category]/[machine]` | Individual machine detail |
| `/industries` | Industries served |
| `/service` | Service & support |
| `/contact` | Contact form + enquiry (Google Sheets integration) |
| `/careers` | Job openings + application form (Google Sheets + Drive) |
| `/news` | Company news |
| `/blog` | Technical articles & insights |
| `/blog/[slug]` | Individual blog post |

## Features

- Command palette search (Ctrl+K)
- WhatsApp / Call / Email quick contact on every machine page
- Form submissions → Google Sheets
- Resume uploads → Google Drive
- Responsive design (mobile-first)
- SEO meta tags + structured data
- Smooth scroll animations

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

Configured for Vercel / Cloudflare Pages. Static + SSR supported.

## Product Families

1. CNC Wire Cut EDM (N Series, Hyper Series, Elite Series, FDK Series, Super Series)
2. CNC Sinker EDM
3. ZNC EDM
4. EDM Drill Machines

## Project Structure

```
src/
├── assets/          # Machine images (SVG/JPG)
├── components/
│   ├── site/        # Custom site components (Nav, Footer, etc.)
│   └── ui/          # shadcn/ui primitives
├── data/            # Static data (products, site info, blog, news)
├── hooks/           # Custom React hooks
├── lib/             # Utilities
├── routes/          # File-based routes (TanStack Router)
├── router.tsx       # Router configuration
├── styles.css       # Global styles + Tailwind config
└── routeTree.gen.ts # Auto-generated route tree
```
