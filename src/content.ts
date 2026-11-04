/**
 * All portfolio copy lives here so it can be edited without touching layout code.
 * Items marked `// VERIFY` were inferred and should be checked by Abderrahman before publishing.
 */

export const profile = {
  name: 'Abderrahman Tlemcani',
  github: 'https://github.com/A-Tlemcani',
  linkedin: 'https://www.linkedin.com/in/AbderrahmanTLEMCANI', // VERIFY: URL taken from the CV
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

const gh = (r: string) => ({ live: `https://a-tlemcani.github.io/${r}/`, repo: `https://github.com/A-Tlemcani/${r}` });

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
    slug: 'vito-3d-showcase',
    title: 'Trattoria Aurelia',
    client: 'Restaurant · 3D showcase demo',
    summary: 'A cinematic scroll story over a dressed trattoria table: photoreal scanned props lit by a real HDRI, a camera that glides through four chapters, then the menu and a live table-booking engine.',
    tags: ['Three.js', 'PBR / HDRI', 'glTF + meshopt', 'Scroll storytelling'],
    outcomes: ['10 CC0 scanned models, 21 MB → 3.9 MB', 'Reservation slot engine with opening hours, unit-tested', 'Owner pitch: on-site 3D scan + dish photogrammetry'],
    accent: ['#d9573b', '#1a120d'],
    ...gh('vito-3d-showcase'),
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
  { title: 'Digital Brain', kind: 'Local-first personal AI orchestrator · since 03/2026', body: 'My own agent system, running on my PC first: long-term memory, document understanding, modular Python workflows, and switching between local and hosted models depending on the task. WhatsApp is the control channel; remote access goes over WireGuard with Wake-on-LAN.', tags: ['Python', 'Letta', 'Ollama', 'Claude Code', 'Hermes'] }, // VERIFY wording
  { title: 'Content Factory', kind: 'Automated short-video pipeline', body: 'Finds and fetches footage, edits a vertical cut, voices it with a fine-tuned TTS voice, then has an AI judge score it as a viewer would. Only drafts above the bar are delivered to WhatsApp.', tags: ['Python', 'TTS / voice cloning', 'FFmpeg', 'LLM-as-judge'] }, // VERIFY wording
  { title: 'Flight alerts', kind: 'Price-watch bot', body: 'Watches routes I fly (Strasbourg ↔ Casablanca), compares fares and sends a buy-or-wait call with the price to WhatsApp.', tags: ['Python', 'Docker', 'Automation'] },
];

export const services = [
  { title: '3D capture on site', body: 'A scan visit for your venue or property: Gaussian-splat scans of rooms and terraces, photogrammetry of products and dishes. Capture is done by a partner 3D studio; I handle the brief, the web integration and the result.', points: ['Gaussian splats', 'Photogrammetry', 'Partner studio'] },
  { title: 'Immersive websites', body: 'Brand and product sites with real-time 3D, scroll storytelling and micro-interactions that still score green on Core Web Vitals.', points: ['Three.js / WebGL', 'Motion design', 'SEO & accessibility'] },
  { title: 'Web apps & e-commerce', body: 'Booking engines, configurators, dashboards and storefronts, typed end to end and deployed through CI.', points: ['TypeScript', 'APIs & payments', 'Testing'] },
  { title: 'ServiceNow & AI agents', body: 'Now Assist and AI Agent use cases, integrations with external AI APIs, Flows, Script Includes and REST, plus instance health checks and documentation of instances nobody documented.', points: ['ServiceNow', 'Now Assist', 'AI Agents'] },
  { title: 'AI automation', body: 'Agents and pipelines that do real work: document understanding, model routing, LLM-as-judge quality gates, delivery to the channels your team already uses.', points: ['Python', 'LLMs', 'Agents'] },
  { title: 'Delivery & DevOps', body: 'Containers, CI/CD pipelines and secure defaults on everything I ship. Kubernetes cluster operations are done with a specialist partner; I stay your single point of contact.', points: ['Docker', 'GitHub Actions', 'Partner: Kubernetes'] },
];

export const process = [
  { step: 'Discover', body: '30-minute call, goals, audience, constraints. Fixed quote within 24 h.' },
  { step: 'Design', body: 'Moodboard and interactive prototype you can click before a line of production code.' },
  { step: 'Build', body: 'Weekly demos on a live preview URL. You see progress, not promises.' },
  { step: 'Launch & care', body: 'Performance, SEO and security checks, handover docs, optional maintenance.' },
];

export interface TimelineItem { period: string; title: string; org: string; body: string; tags: string[]; link?: string }

export const timeline: TimelineItem[] = [
  { period: '2024 — now', title: 'ServiceNow consultant & developer', org: 'Atos', body: 'Work-study, then developer. Since 08/2025 in an AI innovation team: prototypes with Now Assist and agentic AI; licence and version analysis to find AI use cases a client can really run; PoCs connecting external AI APIs to ServiceNow AI Agents; demos and adoption roadmaps for internal and sales teams.', tags: ['ServiceNow', 'Now Assist', 'AI Agents', 'REST'] }, // VERIFY: may Atos be named? wording OK?
  { period: '07/2026 — now', title: 'Multi-instance management', org: 'Atos · ServiceNow', body: 'Parent/child architecture to onboard instances remotely: transport (REST/OAuth) separated from business services and Flow orchestration, runtime auth, logging and audit, monitoring, least privilege, secret protection and traceable decommissioning.', tags: ['Architecture', 'OAuth', 'Flow Designer', 'Security'] }, // VERIFY
  { period: '05/2026 — now', title: 'Resource-management analytics', org: 'Atos · ServiceNow', body: 'Platform Analytics dashboards and KPIs, a map of legacy reports with a migration path, and end-to-end documentation of an instance that had none.', tags: ['Platform Analytics', 'KPIs', 'Documentation'] }, // VERIFY
  { period: '03/2026 — now', title: 'Independent projects', org: 'Alongside my job', body: 'A direct-booking website for two apartments in Marrakech, and 3D showcases for hospitality and e-commerce: offer, build, launch and maintenance.', tags: ['Astro', 'Three.js', 'TypeScript', 'CI/CD'] }, // VERIFY: how to describe the freelance side
  { period: '03 — 06/2025', title: 'Innovation lead · AI matching tool', org: 'Atos · ServiceNow', body: 'Internal tool that matches people to needs with AI, built on ServiceNow with UI Actions, Script Includes, REST Messages and Flows.', tags: ['ServiceNow', 'AI', 'Script Includes', 'Flows'] }, // VERIFY
  { period: '2024 — 2026', title: 'MAALSI: software & IS architecture manager (Bac+5)', org: 'CESI', body: 'Work-study master-level programme: software architecture, information systems, cloud and project management.', tags: ['Architecture', 'ArchiMate', 'Management'] }, // VERIFY: 2026 graduation status
  { period: '2026', title: 'Kubernetes deployment (bloc 3)', org: 'CESI project', body: 'Declarative Kubernetes manifests to deploy and operate a multi-service application.', tags: ['Kubernetes', 'YAML', 'DevOps'], link: 'https://github.com/A-Tlemcani/bloc3' },
  { period: '2025', title: 'ServiceNow instance scan checks', org: 'Study fork', body: 'Studied and adapted a collection of several hundred instance-scan checks used to audit ServiceNow instances for quality and security issues.', tags: ['ServiceNow', 'Code quality'], link: 'https://github.com/A-Tlemcani/my_instance_scan_collection' },
  { period: '2024', title: 'TakaEvent: event & room booking platform', org: 'CESI team project', body: 'Microservice architecture with separate API gateway, user, reservation, room, email and database services plus a web UI, built as a team.', tags: ['Microservices', 'REST', 'Team project'], link: 'https://github.com/TakaEventCesi' },
  { period: '2021 — 2024', title: 'Licence (Bachelor) in Computer Science', org: 'Université de Strasbourg', body: 'Algorithms, systems, networks, databases and software engineering.', tags: ['C', 'Java', 'SQL', 'Systems'] },
  { period: '2023', title: 'First portfolio', org: 'Personal', body: 'Server-rendered PHP portfolio, where this site started.', tags: ['PHP', 'HTML/CSS'], link: 'https://github.com/A-Tlemcani/portfolio' },
  { period: '2022', title: 'MARS: MIPS assembly', org: 'Coursework', body: 'Low-level programs written in MIPS assembly and run on the MARS simulator: registers, memory, syscalls.', tags: ['Assembly', 'Computer architecture'], link: 'https://github.com/A-Tlemcani/mars' },
  { period: '2021', title: 'ChatBot', org: 'Personal', body: 'A JavaScript chatbot, my first interactive web project.', tags: ['JavaScript'], link: 'https://github.com/A-Tlemcani/ChatBot' },
];

export const skills: Record<string, string[]> = {
  'ServiceNow': ['Now Assist', 'AI Agents', 'Flow Designer', 'Script Includes', 'REST / OAuth', 'Platform Analytics', 'Instance Scan'],
  'AI & automation': ['Claude Code', 'Agent orchestration', 'Python', 'Ollama / local LLMs', 'Letta', 'Prompt engineering', 'LLM-as-judge'],
  Web: ['TypeScript', 'Astro', 'Three.js / WebGL', 'Vite', 'Accessibility', 'Playwright'],
  'Back end & data': ['REST APIs', 'Node.js', 'Java', 'C# / .NET', 'SQL / MySQL', 'Microservices'],
  'Delivery': ['Git / GitHub / GitLab', 'GitHub Actions', 'Docker', 'Linux', 'WireGuard', 'ArchiMate / UML'],
  Certifications: ['ServiceNow CSA', 'AI Agents delivery accreditation', 'Now Assist for ITSM accreditation', 'TOEFL · English C1'], // VERIFY exact titles
};

export const stats = [
  { value: 95, suffix: '+', label: 'Lighthouse performance target on every demo' },
  { value: 0, suffix: '', label: 'third-party trackers or cookies' },
  { value: 100, suffix: '%', label: 'TypeScript strict mode, built in CI' },
  { value: 14, suffix: ' days', label: 'minimum age of any new dependency (supply-chain cooldown)' },
];

export const marquee = ['ServiceNow', 'Now Assist', 'AI Agents', 'Claude Code', 'Python', 'Ollama', 'TypeScript', 'Astro', 'Three.js', 'Gaussian splats', 'WebGL', 'Docker', 'GitHub Actions', 'REST / OAuth', 'Accessibility', 'SEO'];
