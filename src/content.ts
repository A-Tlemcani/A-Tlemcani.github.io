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
  live?: string;
  repo?: string;
  /** Shown instead of links when the work is private or not yet launched. */
  note?: string;
  /** Relative URL of an in-site case study page. */
  caseStudy?: string;
  accent: [string, string];
}

const gh = (r: string) => ({ live: `https://abdeltl.github.io/${r}/`, repo: `https://github.com/AbdelTL/${r}` });

export const work: Work[] = [
  {
    slug: 'dar-nila',
    title: 'Dar Nila',
    client: 'Riad direct-booking showcase · Marrakech',
    summary: 'A sales showcase for short-term-rental owners: the page opens on a real Gaussian-splat scan of a courtyard that glides as you scroll. A toggle switches between "photos only" and "with a 3D scan" so owners see the difference on their own phone.',
    tags: ['Astro', 'Three.js', 'Gaussian splats (Spark)', 'Depth maps', 'Booking UX'],
    outcomes: ['Scroll-driven glide through a real 3D scan', '3 design directions: glide, dollhouse room picker, explore with hotspots', 'Mock booking with calendar, price breakdown and request flow'],
    note: 'Private repository',
    caseStudy: './case/dar-nila/',
    accent: ['#e8a33d', '#2f4a3a'],
  },
  {
    slug: 'jardin-vittorio',
    title: 'Jardin Vittorio',
    client: 'Client project · Two apartments, Marrakech',
    summary: 'A direct-booking website for two luxury apartments synced with Airbnb and Booking.com. The hero photos are split into layered depth images, so the garden gently moves in 3D without a heavy scan.',
    tags: ['Astro', 'Node', '2.5D depth layers', 'AI upscaling', 'Playwright e2e', 'i18n'],
    outcomes: ['Photos AI-upscaled and split into near/middle/far layers (LaMa inpainting)', 'Strict CSP, 20 KB JS budget per page, e2e tests in CI', 'Offer, pricing and pre-launch checklist written with the client'],
    note: 'Client work in progress',
    caseStudy: './case/jardin-vittorio/',
    accent: ['#c9774a', '#1f3b2d'],
  },
  {
    slug: 'restaurant-3d-showcase',
    title: 'Trattoria Aurelia',
    client: 'Restaurant · 3D showcase demo',
    summary: 'A cinematic scroll story over a dressed trattoria table: photoreal scanned props lit by a real HDRI, a camera that glides through four chapters, then the menu and a live table-booking engine.',
    tags: ['Three.js', 'PBR / HDRI', 'glTF + meshopt', 'Scroll storytelling'],
    outcomes: ['10 CC0 scanned models, 21 MB → 3.9 MB', 'Reservation slot engine with opening hours, unit-tested', 'Owner pitch: on-site 3D scan + dish photogrammetry'],
    accent: ['#d9573b', '#1a120d'],
    ...gh('restaurant-3d-showcase'),
  },
  {
    slug: 'atelier-3d-configurator',
    title: 'Atelier Nord',
    client: 'Design furniture · E-commerce demo',
    summary: 'A 3D product configurator: pick wood, fabric and leg finish, watch the chair update in real time, share the configuration by link and add it to the cart.',
    tags: ['Three.js', 'TypeScript', 'PBR materials', 'State in URL'],
    outcomes: ['Procedural wood & fabric, lit by a real studio HDRI', 'Shareable deep links, input whitelisted', 'Persistent cart synced across tabs'],
    accent: ['#d9c6a5', '#2f3e46'],
    ...gh('atelier-3d-configurator'),
  },
  {
    slug: 'orbit-saas-landing',
    title: 'Orbit',
    client: 'B2B SaaS · Landing page demo',
    summary: 'A conversion-focused SaaS landing page with an interactive WebGL globe, a bento feature grid, monthly/yearly pricing and an accessible FAQ.',
    tags: ['WebGL', 'TypeScript', 'Pricing', 'Core Web Vitals'],
    outcomes: ['Globe drawn from real Natural Earth data (14k instanced points)', 'Pricing toggle with annual savings, unit-tested', 'WAI-ARIA radiogroup & native FAQ'],
    accent: ['#7a5cff', '#22d3ee'],
    ...gh('orbit-saas-landing'),
  },
];

/** Second tier: systems and experiments, shown smaller than client work. */
export const lab = [
  { title: 'Digital Brain', kind: 'Personal AI operating system', body: 'My own agent setup across PC, laptop and phone: long-term memory, one owning session per project with written handoffs, WhatsApp as the control channel, and remote access over WireGuard with Wake-on-LAN.', tags: ['Claude Code', 'Agents', 'Memory', 'WireGuard'] }, // VERIFY wording
  { title: 'Content Factory', kind: 'Automated short-video pipeline', body: 'Finds and fetches footage, edits a vertical cut, voices it with a fine-tuned TTS voice, then has an AI judge score it as a viewer would. Only drafts above the bar are delivered to WhatsApp.', tags: ['Python', 'TTS / voice cloning', 'FFmpeg', 'LLM-as-judge'] }, // VERIFY wording
  { title: 'Flight alerts', kind: 'Price-watch bot', body: 'Watches routes I fly (Strasbourg ↔ Casablanca), compares fares and sends a buy-or-wait call with the price to WhatsApp.', tags: ['Python', 'Docker', 'Automation'] },
];

export const services = [
  { title: '3D capture on site', body: 'A scan visit for your venue or property: Gaussian-splat scans of rooms and terraces, photogrammetry of products and dishes, ready for the web.', points: ['Gaussian splats', 'Photogrammetry', 'LiDAR'] },
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
  { period: '2026 — now', title: 'Freelance engineer', org: 'Independent', body: 'Direct-booking websites for short-term rentals in Marrakech, immersive 3D showcases and configurators; offer, build, launch and maintenance.', tags: ['Three.js', 'TypeScript', 'CI/CD'] },
  { period: '2024 — 2026', title: 'Software & ServiceNow engineer (work-study)', org: 'Atos', body: 'ServiceNow platform work in an enterprise IT services context: instance quality, automation and delivery for client projects.', tags: ['ServiceNow', 'JavaScript', 'ITSM'] }, // VERIFY: role title and dates
  { period: '2024 — 2026', title: 'Master-level engineering programme (RNCP 7)', org: 'CESI', body: 'Software architecture, cloud, project management and innovation; final Grand Oral on technology and management topics.', tags: ['Architecture', 'Cloud', 'Management'] }, // VERIFY: exact programme name
  { period: '2024', title: 'TakaEvent: event & room booking platform', org: 'CESI team project', body: 'Microservice architecture with separate API gateway, user, reservation, room, email and database services plus a web UI, built as a team.', tags: ['Microservices', 'REST', 'Team project'], link: 'https://github.com/TakaEventCesi' },
  { period: '2026', title: 'Grand Oral: Microsoft 365 Copilot in the enterprise', org: 'CESI', body: 'Final oral on deploying generative AI at enterprise scale: governance, security, adoption and ROI, with a full presentation system.', tags: ['AI governance', 'M365', 'Management'] }, // VERIFY topic
  { period: '2026', title: 'Kubernetes deployment (bloc 3)', org: 'CESI project', body: 'Declarative Kubernetes manifests to deploy and operate a multi-service application.', tags: ['Kubernetes', 'YAML', 'DevOps'], link: 'https://github.com/AbdelTL/bloc3' },
  { period: '2025', title: 'ServiceNow instance scan checks', org: 'Open source', body: 'Worked with a collection of several hundred instance-scan checks to audit ServiceNow instances for quality and security issues.', tags: ['ServiceNow', 'Code quality'], link: 'https://github.com/AbdelTL/my_instance_scan_collection' },
  { period: '2023', title: 'First portfolio', org: 'Personal', body: 'Server-rendered PHP portfolio, where this site started.', tags: ['PHP', 'HTML/CSS'], link: 'https://github.com/AbdelTL/portfolio' },
  { period: '2022', title: 'MARS: MIPS assembly', org: 'Coursework', body: 'Low-level programs written in MIPS assembly and run on the MARS simulator: registers, memory, syscalls.', tags: ['Assembly', 'Computer architecture'], link: 'https://github.com/AbdelTL/mars' },
  { period: '2021', title: 'ChatBot', org: 'Personal', body: 'A JavaScript chatbot, my first interactive web project.', tags: ['JavaScript'], link: 'https://github.com/AbdelTL/ChatBot' },
];

export const skills: Record<string, string[]> = {
  Frontend: ['TypeScript', 'JavaScript', 'Astro', 'Three.js / WebGL', 'GLSL', 'HTML & CSS', 'Vite', 'Accessibility'],
  Backend: ['Node.js', 'Python', 'PHP', 'REST APIs', 'Microservices', 'SQL'],
  'Cloud & DevOps': ['Kubernetes', 'Docker', 'GitHub Actions', 'Playwright', 'Linux', 'WireGuard', 'Git'],
  Platforms: ['ServiceNow', 'GitHub Pages', 'Vercel'],
  'AI & tooling': ['Claude Code', 'Agent orchestration', 'LLM automation', 'TTS / voice', 'Gaussian splats', 'Depth estimation'],
};

export const stats = [
  { value: 95, suffix: '+', label: 'Lighthouse performance target on every demo' },
  { value: 0, suffix: '', label: 'third-party trackers or cookies' },
  { value: 100, suffix: '%', label: 'TypeScript strict mode, built in CI' },
  { value: 14, suffix: ' days', label: 'minimum age of any new dependency (supply-chain cooldown)' },
];

export const marquee = ['TypeScript', 'Astro', 'Three.js', 'Gaussian splats', 'WebGL', 'GLSL', 'Vite', 'Node.js', 'Kubernetes', 'Docker', 'GitHub Actions', 'ServiceNow', 'Linux', 'Claude Code', 'Accessibility', 'SEO'];
