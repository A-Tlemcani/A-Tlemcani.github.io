# a-tlemcani.github.io

Personal portfolio of **Abderrahman Tlemcani**: ServiceNow & AI developer who also builds immersive 3D web experiences.

**Live → [a-tlemcani.github.io](https://a-tlemcani.github.io/)** · English at `/`, French at `/fr/`

![Portfolio](public/og.jpg)

## What's inside
- **Home:** GPU particle hero (22k points, 9k on mobile, simplex noise in a vertex shader, lazy-loaded after first paint), selected work, ServiceNow work, AI lab, services, experience, standards, contact.
- **Explore pages**, all cross-linked and in both languages:
  - `/skills/` — every skill with an honest 1–5 level and a delivery tier (*I build it* · *hands-on, growing* · *with trusted partners*), each linking to the projects that prove it.
  - `/projects/<id>/` — what was built, where it stands, the skills it proves, the decisions behind it.
  - `/decisions/<id>/` — short decision records: context, choice, why, what it costs.
  - `/how-i-work/` — exactly who does what in AI-assisted delivery.
  - `/servicenow/` — the platform in plain words, my role, generic case studies, certifications.
- Case studies: Dar Nila and Jardin Vittorio, with interactive previews in `public/previews/`.
- ⌘K / Ctrl+K quick navigation across every page, reduced-motion support, no trackers, no cookies.

## Engineering
Astro 7 (static, zero JS by default) · TypeScript strict · Three.js · self-hosted variable fonts · strict CSP on every page · GitHub Actions → Pages · Dependabot with a 14-day cooldown · `npm audit` gate.

The build fails if anything breaks the rules:
- `astro check` type-checks pages and data. Links between skills, projects and decisions are typed ids, so a dangling one does not compile.
- `scripts/check-links.mjs` walks the built site: every internal link and asset must exist, every page must carry the CSP, and no inline script or style is allowed.

SEO routines live in [`seo/`](seo/README.md).

## Editing content
All copy lives in typed data files, each text written in English and French:

| File | What |
| --- | --- |
| `src/data/site.ts` | profile, home page copy, services, timeline, stats |
| `src/data/skills.ts` | skills, levels, tiers |
| `src/data/projects.ts` | projects (evidence for skills) |
| `src/data/decisions.ts` | decision records |
| `src/pages/[...lang]/case/*` | the two long case studies |

```bash
npm ci --ignore-scripts && npm run dev
```

MIT licensed (code). Demo brands are fictional.
