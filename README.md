# foundr.company

The landing page for the Foundr product family — a growing set of small, sharp
tools for the AI-native solo founder. This site is the hub that points to every
product (foundr.world, foundr.host, foundr.run, and the rest).

## Stack

- Next.js 16 (App Router, `cacheComponents: true`)
- Tailwind CSS v4 (`@theme` directive)
- No backend — static marketing page, deployed on Vercel

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
```

## Editing the product directory

All products live in [`src/components/products.ts`](src/components/products.ts).
Each entry has a `name`, a one-line `tagline`, an optional `href`, and a
`status` (`live` | `beta` | `soon`). Products without an `href` render as
non-clickable "Soon" cards. Add a new product by appending to the array.

Brand accent is sage `#9bbf83` (`text-sage-400`, `bg-sage-400`), defined in
[`src/app/globals.css`](src/app/globals.css).
