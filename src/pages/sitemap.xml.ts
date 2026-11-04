import { href, locales } from '../i18n';
import { SITE } from '../data/site';
import { projectIds } from '../data/projects';
import { skillIds } from '../data/skills';
import { decisionIds } from '../data/decisions';

/** Every page in both languages, with hreflang alternates. Built from the same data as the pages. */
export function GET() {
  const paths = [
    '/', '/skills/', '/decisions/', '/how-i-work/', '/servicenow/', '/case/dar-nila/', '/case/jardin-vittorio/',
    ...projectIds.map((id) => `/projects/${id}/`),
    ...skillIds.map((id) => `/skills/${id}/`),
    ...decisionIds.map((id) => `/decisions/${id}/`),
  ];
  const alt = (p: string) => locales.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${href(l, p)}"/>`).join('');
  const urls = paths.flatMap((p) => locales.map((l) => `<url><loc>${SITE}${href(l, p)}</loc>${alt(p)}</url>`));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
