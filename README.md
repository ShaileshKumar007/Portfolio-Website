# Shailesh Kumar — Developer Portfolio

A responsive, single-page developer portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, and reusable React components. Portfolio content lives in `data/portfolio.ts`; presentation lives in `app/` and `components/`.

## Requirements

- Node.js 20.9 or newer
- npm or pnpm

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Customize before publishing

- Update `profile.github` and `profile.linkedin` in `data/portfolio.ts` with the correct profile URLs.
- Review the résumé-backed content in `data/portfolio.ts` for accuracy and update it as needed.
- Add a canonical site URL and social preview image in `app/layout.tsx` when deploying to a known domain.
- Technical Writing currently uses a coming-soon placeholder; replace it with published writing links when available.

## Deployment

The site can be deployed to any Node.js hosting provider that supports Next.js. For Vercel, import the repository and keep the detected Next.js defaults. For a self-hosted Node.js server, run `npm run build` and then `npm run start` with Node.js 20.9 or newer. No database, API server, or environment variables are required.

The résumé is served from `public/Shailesh_Kumar_Resume.pdf` and linked as a download.
