# Shailesh Kumar — Developer Portfolio

A responsive, dark-first personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS v4, Motion for React, and React Three Fiber. It includes a lazily loaded 3D homepage hero, career journey, project case studies, local Markdown articles, About, Contact, and a résumé viewer. There is no application backend or database.

## Requirements

- Node.js 20.9 or newer
- pnpm (the project includes `pnpm-lock.yaml`)

## Local development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). To create and run a production build locally:

```bash
pnpm build
pnpm start
```

## Validation

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Content and configuration

- Update `config/site.ts` for name, contact details, navigation, résumé path, and social profile URLs. The configured social profiles currently link to GitHub, LinkedIn, X, and Instagram.
- Update `data/experience.ts`, `data/projects.ts`, and `data/skills.ts` with verified details. Empty project links and incomplete case studies are intentional until public URLs and confirmed information are available.
- Blog posts live in `content/blog/*.md`. Use frontmatter fields `title`, `summary`, `category`, optional ISO `date` (`YYYY-MM-DD`), and optional `demo: true`. Demo articles are visibly labeled and excluded from indexing and the sitemap.
- Replace `public/resume.pdf` when the résumé changes. The source résumé is preserved as `public/Shailesh_Kumar_Resume.pdf`.
- Set `NEXT_PUBLIC_SITE_URL` to the deployed origin (for example, `https://portfolio.example`) to enable canonical metadata and a populated sitemap. Without it, the sitemap is intentionally empty rather than publishing a fabricated domain.

The contact form validates its fields and prepares a `mailto:` draft. The visitor's mail application sends it; the site does not transmit or store messages.

## Deployment

### Vercel

1. Import this repository as a Next.js project.
2. Set `NEXT_PUBLIC_SITE_URL` to the public HTTPS origin in project environment variables.
3. Deploy with the default build command (`pnpm build`) and output settings.

### Node.js hosting

Use Node.js 20.9 or newer, set `NEXT_PUBLIC_SITE_URL`, install from the lockfile with `pnpm install --frozen-lockfile`, build with `pnpm build`, then start with `pnpm start`. Serve the app behind HTTPS through your hosting provider or reverse proxy.

## Project structure

```text
app/                 App Router pages, metadata routes, global styles
components/          Shared layout, motion, 3D, blog, contact, and project UI
config/site.ts       Site and social configuration
content/blog/        Markdown writing content
data/                Typed experience, skills, and project content
lib/                 Server-side Markdown parsing and shared formatters
public/              Résumé PDF and static assets
PROJECT_STATUS.md    Phase progress, decisions, checks, and next actions
```
