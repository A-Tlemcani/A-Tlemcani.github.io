// Home page only: stats count-up, Paris clock, 3D hero.
import { reduced } from './common';

const statsEl = document.getElementById('stats');
if (statsEl) {
  new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    if (reduced) return;
    statsEl.querySelectorAll<HTMLElement>('.stat-value').forEach((el) => {
      const to = Number(el.dataset.to); const suf = el.dataset.suffix ?? ''; const t0 = performance.now();
      const tick = (now: number) => {
        const k = Math.min((now - t0) / 1200, 1);
        el.textContent = `${Math.round(to * (1 - (1 - k) ** 3))}${suf}`;
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 }).observe(statsEl);
}

const clock = document.getElementById('local-time');
if (clock) {
  const fmt = new Intl.DateTimeFormat('fr-FR', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Paris' });
  const update = () => { clock.textContent = fmt.format(new Date()); };
  update(); setInterval(update, 30_000);
}

// 3D hero, loaded after first paint so it never blocks content.
const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
if (canvas) {
  const dir = canvas.dataset.dir;
  const start = () => (dir
    ? import('./lab/object').then((m) => m.initObject(canvas, dir))
    : import('./hero').then((m) => m.initHero(canvas)));
  'requestIdleCallback' in window ? requestIdleCallback(start, { timeout: 1200 }) : setTimeout(start, 200);
}

// Design previews (/lab/): work chapters carry muted video loops.
if (document.documentElement.dataset.dir) import('./case');
