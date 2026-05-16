# SYNTRA

Premium earbud brand landing page — museum-grade product experience.

## Stack

- **Next.js 16** App Router — SEO metadata, OG image, JSON-LD
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — dock physics, curtain reveals, scroll-driven rotation, parallax
- **Lenis** — momentum smooth scroll
- **shadcn/ui** — base components (available via CLI)

## Design

- Near-black `#0a0a0a` surfaces, warm amber `#c9a55c` accent only
- Editorial typography: Cormorant Garamond display + Inter ultra-light labels
- Dock-style floating navigation with macOS magnification
- Sections: Hero → Engineering → Materials → Colorways → Reserve CTA

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add shadcn components

```bash
npx shadcn@latest add [component]
```

## Environment

Optional: set `NEXT_PUBLIC_SITE_URL` for canonical and Open Graph URLs.
