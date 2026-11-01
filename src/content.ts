/**
 * All portfolio copy lives here so it can be edited without touching layout code.
 * Items marked `// VERIFY` were inferred and should be checked by Abderrahman before publishing.
 */

export const profile = {
  name: 'Abderrahman Tlemcani',
  github: 'https://github.com/AbdelTL',
  linkedin: '', // VERIFY: add LinkedIn URL
  email: '', // VERIFY: add the public contact address (kept empty so no address is published by default)
  malt: '', // VERIFY: optional Malt / freelance platform profile
};

export interface Work {
  slug: string;
  title: string;
  client: string;
  summary: string;
  tags: string[];
  outcomes: string[];
  live: string;
  repo: string;
  accent: [string, string];
}

const gh = (r: string) => ({ live: `https://abdeltl.github.io/${r}/`, repo: `https://github.com/AbdelTL/${r}` });

export const work: Work[] = [
  {
    slug: 'booking-3d-showcase',
    title: 'Maison Lumen',
    client: 'Boutique villa · Hospitality',
    summary: 'A booking site where guests explore the villa in real-time 3D, tap a room to see it, switch day/night, and book with live pricing.',
    tags: ['Three.js', 'TypeScript', 'Booking UX', 'A11y'],
    outcomes: ['Procedural 3D villa, ~140 KB JS gzipped incl. Three.js', 'Date-range picker with nightly pricing', 'Room hotspots synced with cards'],
    accent: ['#f4c27a', '#3a6df0'],
    ...gh('booking-3d-showcase'),
  },
  {
    slug: 'vitorio',
    title: 'Vitorio',
    client: 'Cucina italiana · Restaurant',
    summary: 'A premium restaurant website with a sculpted 3D hero, a filterable menu with dietary tags and a table reservation flow with live slot availability.',
    tags: ['WebGL', 'Reservation flow', 'SEO local', 'Schema.org'],
    outcomes: ['Restaurant JSON-LD for Google', 'Slot engine respecting opening hours', 'Menu filters: vegetarian, gluten-free'],
    accent: ['#c8553d', '#f2d0a4'],
    ...gh('vitorio'),
  },
  {
    slug: 'atelier-3d-configurator',
    title: 'Atelier Nord',
    client: 'Design furniture · E-commerce',
    summary: 'A 3D product configurator: pick wood, fabric and leg finish, watch the chair update in real time, share the configuration by link and add it to the cart.',
    tags: ['3D configurator', 'State in URL', 'Cart', 'PBR materials'],
    outcomes: ['Live price recomputed per option', 'Shareable deep links', 'Persistent cart (localStorage)'],
    accent: ['#d9c6a5', '#2f3e46'],
    ...gh('atelier-3d-configurator'),
  },
  {
    slug: 'orbit-saas-landing',
    title: 'Orbit',
    client: 'B2B SaaS · Landing page',
    summary: 'A conversion-focused SaaS landing page with an interactive WebGL globe, a bento feature grid, monthly/yearly pricing and an accessible FAQ.',
    tags: ['Landing page', 'WebGL globe', 'Pricing', 'Core Web Vitals'],
    outcomes: ['GPU instanced globe (10k+ points)', 'Pricing toggle with annual savings', 'WAI-ARIA disclosure FAQ'],
    accent: ['#7a5cff', '#22d3ee'],
    ...gh('orbit-saas-landing'),
  },
];

export const services = [
  { title: 'Immersive websites', body: 'Brand and product sites with real-time 3D, scroll storytelling and micro-interactions that still score green on Core Web Vitals.', points: ['Three.js / WebGL', 'Motion design', 'SEO & accessibility'] },
  { title: 'Web apps & e-commerce', body: 'Booking engines, configurators, dashboards and storefronts, typed end to end and deployed through CI.', points: ['TypeScript', 'APIs & payments', 'Testing'] },
  { title: 'Cloud & DevOps', body: 'Containerised, observable infrastructure: Kubernetes manifests, CI/CD pipelines, environments and cost control.', points: ['Kubernetes', 'GitHub Actions', 'Monitoring'] },
  { title: 'ServiceNow & automation', body: 'Instance quality, scan checks, workflow automation and AI-assisted processes for IT teams.', points: ['ServiceNow', 'Instance Scan', 'AI agents'] },
];

export const process = [
  { step: 'Discover', body: '30-minute call, goals, audience, constraints. Fixed quote within 24 h.' },
  { step: 'Design', body: 'Moodboard and interactive prototype you can click before a line of production code.' },
  { step: 'Build', body: 'Weekly demos on a live preview URL. You see progress, not promises.' },
  { step: 'Launch & care', body: 'Performance, SEO and security checks, handover docs, optional maintenance.' },
];

export interface TimelineItem { period: string; title: string; org: string; body: string; tags: string[]; link?: string }

export const timeline: TimelineItem[] = [
  { period: '2026 — now', title: 'Freelance engineer', org: 'Independent', body: 'Designing and shipping immersive websites, booking flows and 3D configurators for small brands; cloud setup and maintenance.', tags: ['Three.js', 'TypeScript', 'CI/CD'] },
  { period: '2024 — 2026', title: 'Software & ServiceNow engineer (work-study)', org: 'Atos', body: 'ServiceNow platform work in an enterprise IT services context: instance quality, automation and delivery for client projects.', tags: ['ServiceNow', 'JavaScript', 'ITSM'] }, // VERIFY: role title and dates
  { period: '2024 — 2026', title: 'Master-level engineering programme (RNCP 7)', org: 'CESI', body: 'Software architecture, cloud, project management and innovation; final Grand Oral on technology and management topics.', tags: ['Architecture', 'Cloud', 'Management'] }, // VERIFY: exact programme name
  { period: '2026', title: 'Kubernetes deployment (bloc 3)', org: 'CESI project', body: 'Declarative Kubernetes manifests to deploy and operate a multi-service application.', tags: ['Kubernetes', 'YAML', 'DevOps'], link: 'https://github.com/AbdelTL/bloc3' },
  { period: '2025', title: 'ServiceNow instance scan checks', org: 'Open source', body: 'Worked with a collection of several hundred instance-scan checks to audit ServiceNow instances for quality and security issues.', tags: ['ServiceNow', 'Code quality'], link: 'https://github.com/AbdelTL/my_instance_scan_collection' },
  { period: '2023', title: 'First portfolio', org: 'Personal', body: 'Server-rendered PHP portfolio, where this site started.', tags: ['PHP', 'HTML/CSS'], link: 'https://github.com/AbdelTL/portfolio' },
  { period: '2022', title: 'MARS: MIPS assembly', org: 'Coursework', body: 'Low-level programs written in MIPS assembly and run on the MARS simulator: registers, memory, syscalls.', tags: ['Assembly', 'Computer architecture'], link: 'https://github.com/AbdelTL/mars' },
  { period: '2021', title: 'ChatBot', org: 'Personal', body: 'A JavaScript chatbot, my first interactive web project.', tags: ['JavaScript'], link: 'https://github.com/AbdelTL/ChatBot' },
];

export const skills: Record<string, string[]> = {
  Frontend: ['TypeScript', 'JavaScript', 'Three.js / WebGL', 'GLSL', 'HTML & CSS', 'Vite', 'Accessibility'],
  Backend: ['Node.js', 'PHP', 'REST APIs', 'SQL'],
  'Cloud & DevOps': ['Kubernetes', 'Docker', 'GitHub Actions', 'Linux', 'Git'],
  Platforms: ['ServiceNow', 'GitHub Pages', 'Vercel'],
  'AI & tooling': ['Claude Code', 'LLM automation', 'Prompt engineering'],
};

export const stats = [
  { value: 95, suffix: '+', label: 'Lighthouse performance target on every demo' },
  { value: 0, suffix: '', label: 'third-party trackers or cookies' },
  { value: 100, suffix: '%', label: 'TypeScript strict mode, built in CI' },
  { value: 14, suffix: ' days', label: 'minimum age of any new dependency (supply-chain cooldown)' },
];

export const marquee = ['TypeScript', 'Three.js', 'WebGL', 'GLSL', 'Vite', 'Node.js', 'Kubernetes', 'Docker', 'GitHub Actions', 'ServiceNow', 'Linux', 'Claude Code', 'Accessibility', 'SEO'];
