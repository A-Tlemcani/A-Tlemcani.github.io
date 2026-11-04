// Post-build check: every internal link, image, video and script in dist/ must point to a file that exists,
// and every page must carry the CSP. Fails the build otherwise.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';

const root = resolve('dist');
const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? (f !== 'previews' && walk(p)) : p.endsWith('.html') && pages.push(p); });
walk(root);

const errors = [];
const exists = (url, from) => {
  const clean = decodeURI(url.split('#')[0].split('?')[0]);
  if (!clean) return true;
  const target = clean.startsWith('/') ? join(root, clean) : join(dirname(from), clean);
  return existsSync(target) && (statSync(target).isFile() || existsSync(join(target, 'index.html')));
};
for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  const rel = page.slice(root.length);
  if (!html.includes('http-equiv="Content-Security-Policy"')) errors.push(`${rel}: missing CSP`);
  if (/<script(?![^>]*\b(src=|type="application\/(ld\+)?json"))[^>]*>/.test(html)) errors.push(`${rel}: inline script`);
  if (/<style[\s>]/.test(html) || /\sstyle="/.test(html)) errors.push(`${rel}: inline style`);
  for (const [, url] of html.matchAll(/\s(?:href|src|poster)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:|#)/.test(url)) continue;
    if (!exists(url, page)) errors.push(`${rel}: broken link ${url}`);
  }
}
if (errors.length) { console.error(errors.join('\n')); console.error(`\n✗ ${errors.length} problem(s) in ${pages.length} pages`); process.exit(1); }
console.log(`✓ ${pages.length} pages: links, assets and CSP OK`);
