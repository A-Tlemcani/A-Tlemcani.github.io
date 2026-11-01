# SEO playbook

Notes and routines that keep the portfolio and the demos discoverable. Re-run them with Claude Code from this repository.

## Inputs
| Input | Value |
| --- | --- |
| Site | https://abdeltl.github.io/ |
| Primary audience | Small brands, hospitality, e-commerce and SaaS teams in France looking for a freelance developer |
| Target queries (FR) | `développeur freelance three.js`, `site web 3D sur mesure`, `développeur freelance site vitrine premium`, `configurateur 3D produit e-commerce`, `freelance servicenow` |
| Target queries (EN) | `freelance three.js developer france`, `3d product configurator developer`, `webgl landing page developer` |
| Google Search Console | Add a URL-prefix property for `https://abdeltl.github.io/` and submit `sitemap.xml` (TODO) |

## Daily (technical hygiene)
1. Crawl every URL in `public/sitemap.xml`; flag non-200s, missing `<title>`/`<meta name="description">`, missing canonical, accidental `noindex`.
2. Check every outbound demo link resolves (each demo is its own GitHub Pages project).

## Weekly (content)
1. In Search Console, list queries where the site ranks on positions 8–20.
2. For each, read the top 3 results and improve the matching section (copy, headings, internal links), never keyword-stuff.
3. Log what changed in `seo/log.md` with the date.

## Monthly (AI answers)
Ask ChatGPT, Perplexity and Google AI Overviews the buyer questions below and log whether Abderrahman or the demos are mentioned:
- "Who can build a 3D product configurator for my furniture e-shop in France?"
- "Freelance developer for an immersive hotel booking website"
- "Three.js developer available for freelance in France"

## Already in place
- Unique title & description per page, canonical URLs, Open Graph image (`public/og.jpg`)
- JSON-LD: `Person` (portfolio), `LodgingBusiness`, `Restaurant` (with opening hours), `Product`, `SoftwareApplication` on the demos
- `robots.txt` + `sitemap.xml` in every repo; no render-blocking third-party requests; fonts self-hosted
