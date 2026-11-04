// Shared behaviour on every page: card accent colours, reveal on scroll, ⌘K quick navigation.

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Accent colours come from data attributes: inline style attributes are blocked by the CSP, CSSOM is not.
document.querySelectorAll<HTMLElement>('[data-a]').forEach((el) => {
  el.style.setProperty('--a', el.dataset.a ?? '');
  el.style.setProperty('--b', el.dataset.b ?? '');
});

// Reveal on scroll
const io = new IntersectionObserver((es) => es.forEach((e) => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('.section-head, .work-card, .lab-card, .service, .tl-item, .stat, .process li, .card').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});

// Command palette (⌘K / Ctrl+K). Commands are rendered at build time into a JSON data block.
const palette = document.getElementById('palette') as HTMLDialogElement;
const input = document.getElementById('palette-input') as HTMLInputElement;
const list = document.getElementById('palette-list') as HTMLUListElement;
const commands = JSON.parse(document.getElementById('palette-data')?.textContent ?? '[]') as { label: string; go: string }[];
let active = 0;

const go = (to: string) => {
  palette.close();
  if (/^https?:/.test(to)) window.open(to, '_blank', 'noopener');
  else location.href = to;
};
const render = () => {
  const q = input.value.toLowerCase().trim();
  const items = commands.filter((c) => c.label.toLowerCase().includes(q));
  active = Math.min(active, Math.max(items.length - 1, 0));
  list.replaceChildren(...items.slice(0, 50).map((c, i) => {
    const li = document.createElement('li');
    li.setAttribute('role', 'option');
    li.setAttribute('aria-selected', String(i === active));
    li.textContent = c.label;
    li.addEventListener('click', () => go(c.go));
    return li;
  }));
  return items;
};
const open = () => { input.value = ''; active = 0; render(); palette.showModal(); input.focus(); };

document.getElementById('open-palette')?.addEventListener('click', open);
addEventListener('keydown', (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.open ? palette.close() : open(); }
});
input.addEventListener('input', () => { active = 0; render(); });
input.addEventListener('keydown', (e) => {
  const items = render();
  if (!items.length) return;
  if (e.key === 'ArrowDown') { active = (active + 1) % items.length; render(); e.preventDefault(); }
  if (e.key === 'ArrowUp') { active = (active - 1 + items.length) % items.length; render(); e.preventDefault(); }
  if (e.key === 'Enter' && items[active]) { e.preventDefault(); go(items[active].go); }
});
palette.addEventListener('click', (e) => { if (e.target === palette) palette.close(); });

export { reduced };
