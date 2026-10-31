import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';
import './style.css';
import { marquee, process, profile, services, skills, stats, timeline, work } from './content';

type Child = Node | string | null | undefined | false;
/** Tiny DOM builder: every string goes through textContent, so content can never inject markup. */
function h<K extends keyof HTMLElementTagNameMap>(tag: K, attrs: Record<string, string> = {}, ...children: Child[]) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  for (const c of children) if (c) el.append(typeof c === 'string' ? document.createTextNode(c) : c);
  return el;
}
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const ext = { target: '_blank', rel: 'noopener noreferrer' };

// --- Marquee (duplicated once for a seamless loop)
const track = $('marquee');
for (const pass of [0, 1]) for (const m of marquee) track.append(h('span', pass ? { 'aria-hidden': 'true' } : {}, m));

// --- Work
$('work-grid').append(...work.map((w, i) => {
  const card = h('article', { class: 'work-card' },
    h('a', { class: 'work-visual', href: w.live, ...ext, 'aria-label': `Open the ${w.title} live demo` },
      h('img', { src: `./work/${w.slug}.jpg`, alt: `${w.title} demo screenshot`, loading: 'lazy', width: '1280', height: '800' }),
      h('span', { class: 'work-index' }, String(i + 1).padStart(2, '0'))),
    h('div', { class: 'work-body' },
      h('p', { class: 'work-client' }, w.client),
      h('h3', {}, w.title),
      h('p', {}, w.summary),
      h('ul', { class: 'work-outcomes' }, ...w.outcomes.map((o) => h('li', {}, o))),
      h('ul', { class: 'tags' }, ...w.tags.map((t) => h('li', {}, t))),
      h('div', { class: 'work-links' },
        h('a', { class: 'btn btn-primary btn-sm', href: w.live, ...ext }, 'Live demo ↗'),
        h('a', { class: 'btn btn-ghost btn-sm', href: w.repo, ...ext }, 'Source'))));
  card.style.setProperty('--a', w.accent[0]);
  card.style.setProperty('--b', w.accent[1]);
  card.querySelector('img')!.addEventListener('error', (e) => (e.target as HTMLElement).remove(), { once: true });
  return card;
}));

// --- Services & process
$('services-grid').append(...services.map((s) => h('article', { class: 'service' },
  h('h3', {}, s.title), h('p', {}, s.body), h('ul', { class: 'tags' }, ...s.points.map((p) => h('li', {}, p))))));
$('process').append(...process.map((p, i) => h('li', {}, h('span', { class: 'step-n' }, `0${i + 1}`), h('strong', {}, p.step), h('p', {}, p.body))));

// --- Timeline & skills
$('timeline').append(...timeline.map((t) => h('li', { class: 'tl-item' },
  h('p', { class: 'tl-period' }, t.period),
  h('div', {},
    h('h3', {}, t.title, ' ', h('span', { class: 'tl-org' }, `· ${t.org}`)),
    h('p', {}, t.body),
    h('ul', { class: 'tags' }, ...t.tags.map((x) => h('li', {}, x))),
    t.link && h('a', { class: 'tl-link', href: t.link, ...ext }, 'View repository ↗')))));
$('skills').append(...Object.entries(skills).map(([group, list]) => h('div', { class: 'skill-group' },
  h('h3', {}, group), h('ul', { class: 'tags' }, ...list.map((s) => h('li', {}, s))))));

// --- Stats with count-up when visible
const statsEl = $('stats');
statsEl.append(...stats.map((s) => h('div', { class: 'stat' },
  h('p', { class: 'stat-value', 'data-to': String(s.value), 'data-suffix': s.suffix }, `${s.value}${s.suffix}`),
  h('p', { class: 'stat-label' }, s.label))));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
new IntersectionObserver((entries, obs) => {
  if (!entries[0].isIntersecting) return;
  obs.disconnect();
  if (reduced) return;
  statsEl.querySelectorAll<HTMLElement>('.stat-value').forEach((el) => {
    const to = Number(el.dataset.to); const suf = el.dataset.suffix ?? ''; const t0 = performance.now();
    const tick = (now: number) => { const k = Math.min((now - t0) / 1200, 1); el.textContent = `${Math.round(to * (1 - (1 - k) ** 3))}${suf}`; if (k < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.4 }).observe(statsEl);

// --- Contact
const actions = $('contact-actions');
if (profile.email) actions.append(h('a', { class: 'btn btn-primary btn-lg', href: `mailto:${profile.email}?subject=Project%20inquiry` }, 'Email me'));
actions.append(h('a', { class: 'btn btn-ghost btn-lg', href: profile.github, ...ext }, 'GitHub ↗'));
if (profile.linkedin) actions.append(h('a', { class: 'btn btn-ghost btn-lg', href: profile.linkedin, ...ext }, 'LinkedIn ↗'));
if (profile.malt) actions.append(h('a', { class: 'btn btn-ghost btn-lg', href: profile.malt, ...ext }, 'Malt ↗'));

// --- Clock & year
const clock = $('local-time');
const fmt = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' });
const updateClock = () => { clock.textContent = fmt.format(new Date()); };
updateClock(); setInterval(updateClock, 30_000);
$('year').textContent = String(new Date().getFullYear());

// --- Reveal on scroll
const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.section-head, .work-card, .service, .tl-item, .stat, .process li').forEach((el) => { el.classList.add('reveal'); io.observe(el); });

// --- Command palette (⌘K / Ctrl+K)
const palette = $('palette') as HTMLDialogElement;
const input = $('palette-input') as HTMLInputElement;
const list = $('palette-list');
const commands = [
  { label: 'Selected work', go: '#work' }, { label: 'Services', go: '#services' }, { label: 'Experience', go: '#experience' }, { label: 'Contact', go: '#contact' },
  ...work.map((w) => ({ label: `Demo: ${w.title}`, go: w.live })), { label: 'GitHub profile', go: profile.github },
];
let active = 0;
const render = () => {
  const q = input.value.toLowerCase().trim();
  const items = commands.filter((c) => c.label.toLowerCase().includes(q));
  active = Math.min(active, Math.max(items.length - 1, 0));
  list.replaceChildren(...items.map((c, i) => {
    const li = h('li', { role: 'option', 'aria-selected': String(i === active) }, c.label);
    li.addEventListener('click', () => run(c.go));
    return li;
  }));
  return items;
};
const run = (go: string) => { palette.close(); if (go.startsWith('#')) document.querySelector(go)?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); else window.open(go, '_blank', 'noopener'); };
const open = () => { input.value = ''; active = 0; render(); palette.showModal(); input.focus(); };
$('open-palette').addEventListener('click', open);
addEventListener('keydown', (e) => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.open ? palette.close() : open(); } });
input.addEventListener('input', () => { active = 0; render(); });
input.addEventListener('keydown', (e) => {
  const items = render();
  if (e.key === 'ArrowDown') { active = (active + 1) % items.length; render(); e.preventDefault(); }
  if (e.key === 'ArrowUp') { active = (active - 1 + items.length) % items.length; render(); e.preventDefault(); }
  if (e.key === 'Enter' && items[active]) { e.preventDefault(); run(items[active].go); }
});
palette.addEventListener('click', (e) => { if (e.target === palette) palette.close(); });

// --- 3D hero, loaded after first paint so it never blocks content
const heroCanvas = $('hero-canvas') as HTMLCanvasElement;
const startHero = () => import('./hero').then((m) => m.initHero(heroCanvas));
'requestIdleCallback' in window ? requestIdleCallback(startHero, { timeout: 1200 }) : setTimeout(startHero, 200);
