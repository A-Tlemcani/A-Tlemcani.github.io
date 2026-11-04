# Abderrahman Tlemcani — Portfolio — notes for Claude Code sessions

Personal portfolio of Abderrahman Tlemcani: ServiceNow & AI developer who also builds immersive 3D web experiences.

## Stack
Astro 7 (static) + TypeScript (strict) + Three.js. English at `/`, French at `/fr/`, both generated from `src/pages/[...lang]/`.
All copy is in `src/data/*.ts` with every text as `{ en, fr }`; skills, projects and decisions reference each other by typed id.
Static build in `dist/`, deployed by `.github/workflows/deploy.yml` to GitHub Pages (https://a-tlemcani.github.io/).

## Commands
- `npm ci --ignore-scripts` – install (lockfile is the source of truth)
- `npm run dev` – local server
- `npm test` – unit tests (node:test, where present)
- `npm run build` – `astro check` + production build + `scripts/check-links.mjs` (links, assets, CSP). Must pass before any commit.

## Rules
- Commits are authored by Abderrahman TLEMCANI; no AI attribution trailers (see `.claude/settings.json`).
- Conventional commits (`feat:`, `fix:`, `perf:`, `docs:`, `ci:`, `chore:`).
- Never use `innerHTML` or `set:html` with user input (`set:html` is only for hand-written copy in `src/data` and case pages); keep the CSP in `src/layouts/Base.astro` strict (no inline scripts or styles, no new origins without reason).
- Every new text needs both `en` and `fr`. Skill levels follow the 1–5 scale in `src/data/skills.ts` and only go up with a project as evidence.
- Keep the 3D scene cheap: cap devicePixelRatio at 2, pause rendering when the tab is hidden or the canvas is off-screen, honour `prefers-reduced-motion`.
- New dependencies: pin exact versions released at least 14 days ago.

## Skills (in `.claude/skills/`, source: the Digital-Brain repo)
- `surgical-coding` on every code change: assumptions first, minimum code, only the lines needed, test-first for bugs.
- `plain-english` for all copy and replies (short sentences, one meaning per word). French copy follows the same rules.
- `skill-receipts`: end each answer where a skill changed the result with the receipt table (skill · why · what changed · without it).
