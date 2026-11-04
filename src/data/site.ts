import type { T } from '../i18n';
import type { SkillId } from './skills';
import type { ProjectId } from './projects';

export const SITE = 'https://a-tlemcani.github.io';

export const profile = {
  name: 'Abderrahman Tlemcani',
  github: 'https://github.com/A-Tlemcani',
  linkedin: 'https://www.linkedin.com/in/AbderrahmanTLEMCANI',
  email: 'a_Tlemcani@outlook.com',
  malt: '', // VERIFY: optional Malt / freelance platform profile
};

export const meta = {
  title: { en: 'Abderrahman Tlemcani — ServiceNow & AI Developer, Web Engineer', fr: 'Abderrahman Tlemcani — Développeur ServiceNow & IA, ingénieur web' },
  description: {
    en: 'Abderrahman Tlemcani is a ServiceNow and AI developer based in Strasbourg, France. He builds AI agents on ServiceNow, AI automation, and fast, immersive websites (Three.js / WebGL).',
    fr: 'Abderrahman Tlemcani est développeur ServiceNow et IA à Strasbourg. Il conçoit des agents IA sur ServiceNow, des automatisations IA, et des sites web rapides et immersifs (Three.js / WebGL).',
  },
  ogDescription: {
    en: 'ServiceNow AI agents, AI automation and immersive websites. Based in Strasbourg, working in French, English and Arabic.',
    fr: 'Agents IA ServiceNow, automatisation IA et sites web immersifs. Basé à Strasbourg, je travaille en français, anglais et arabe.',
  },
  jobTitle: { en: 'ServiceNow & AI Developer', fr: 'Développeur ServiceNow & IA' },
} satisfies Record<string, T>;

export const home = {
  eyebrow: { en: 'Taking on freelance projects', fr: 'Disponible pour des missions freelance' },
  heroLines: [
    { en: 'I build AI agents,', fr: 'Je conçois des agents IA,' },
    { en: '<em>immersive</em> web', fr: 'du web <em>immersif</em>' },
    { en: '& the systems behind them.', fr: '& les systèmes derrière.' },
  ],
  heroSub: {
    en: 'ServiceNow & AI developer in Strasbourg. By day I prototype AI agents on ServiceNow for enterprise teams; for independent clients I build fast, 3D-rich websites and the automation behind them.',
    fr: 'Développeur ServiceNow & IA à Strasbourg. En entreprise, je prototype des agents IA sur ServiceNow ; pour mes clients indépendants, je construis des sites rapides et riches en 3D, et l’automatisation qui va avec.',
  },
  ctaWork: { en: 'See selected work', fr: 'Voir les réalisations' },
  based: { en: 'Based', fr: 'Basé à' },
  parisTime: { en: 'Paris time', fr: 'heure de Paris' },
  focus: { en: 'Focus', fr: 'Domaines' },
  languages: { en: 'Languages', fr: 'Langues' },
  sections: {
    work: {
      eyebrow: { en: '01 — Selected work', fr: '01 — Réalisations' },
      title: { en: 'Client work and showcases, built end to end.', fr: 'Projets clients et vitrines, de bout en bout.' },
      lead: {
        en: 'Real client work and production-grade showcases: designed, engineered, tested and shipped through CI. Showcase brands are fictional; the code and performance budgets are real.',
        fr: 'De vrais projets clients et des vitrines de niveau production : conçus, développés, testés et livrés par CI. Les marques des vitrines sont fictives ; le code et les budgets de performance sont réels.',
      },
    },
    servicenow: {
      eyebrow: { en: '02 — ServiceNow', fr: '02 — ServiceNow' },
      title: { en: 'AI on the platform enterprises already run.', fr: 'L’IA sur la plateforme que les entreprises utilisent déjà.' },
      lead: {
        en: 'My day job at Atos: prototypes with Now Assist and AI Agents, integrations, analytics and multi-instance architecture. Described generically, without internal names or customers.',
        fr: 'Mon métier chez Atos : prototypes avec Now Assist et les AI Agents, intégrations, analytique et architecture multi-instances. Décrit de façon générique, sans noms internes ni clients.',
      },
      more: { en: 'All ServiceNow work →', fr: 'Tout le travail ServiceNow →' },
    },
    lab: {
      eyebrow: { en: '03 — Systems & AI lab', fr: '03 — Systèmes & lab IA' },
      title: { en: 'What I build for myself.', fr: 'Ce que je construis pour moi.' },
      lead: {
        en: 'Agents, automation and pipelines I run every day. This is where I try ideas before they reach client work.',
        fr: 'Agents, automatisations et pipelines que j’utilise chaque jour. C’est ici que je teste les idées avant de les proposer à des clients.',
      },
    },
    services: {
      eyebrow: { en: '04 — Services', fr: '04 — Services' },
      title: { en: 'What I can build for you.', fr: 'Ce que je peux construire pour vous.' },
      lead: {
        en: 'Clear about who does what: what I build myself, what I am still growing in, and what a trusted partner delivers under my coordination.',
        fr: 'Clair sur qui fait quoi : ce que je réalise moi-même, ce sur quoi je progresse, et ce qu’un partenaire de confiance livre sous ma coordination.',
      },
      allSkills: { en: 'Every skill, level and proof →', fr: 'Chaque compétence, niveau et preuve →' },
      how: { en: 'How I work with AI →', fr: 'Comment je travaille avec l’IA →' },
    },
    experience: {
      eyebrow: { en: '05 — Experience & education', fr: '05 — Parcours & formation' },
      title: { en: 'From MIPS assembly to ServiceNow AI agents.', fr: 'De l’assembleur MIPS aux agents IA ServiceNow.' },
    },
    standards: {
      eyebrow: { en: '06 — Engineering standards', fr: '06 — Standards d’ingénierie' },
      title: { en: 'Quality you can measure.', fr: 'Une qualité mesurable.' },
    },
    contact: {
      eyebrow: { en: '07 — Contact', fr: '07 — Contact' },
      title: { en: "Got a project? <em>Let's talk.</em>", fr: 'Un projet ? <em>Parlons-en.</em>' },
      lead: {
        en: 'Tell me about your idea, your deadline and your budget. I reply within 24 hours, in French, English or Arabic.',
        fr: 'Parlez-moi de votre idée, de votre délai et de votre budget. Je réponds sous 24 heures, en français, en anglais ou en arabe.',
      },
    },
  },
  certificationsTitle: { en: 'Certifications', fr: 'Certifications' },
};

export const certifications: T[] = [
  { en: 'ServiceNow Certified System Administrator (CSA)', fr: 'ServiceNow Certified System Administrator (CSA)' },
  { en: 'Delivery accreditation: AI Agents', fr: 'Accréditation delivery : AI Agents' },
  { en: 'Delivery accreditation: Now Assist for ITSM implementation', fr: 'Accréditation delivery : implémentation Now Assist for ITSM' },
  { en: 'Planned: CAD and ITSM exams', fr: 'Prévu : examens CAD et ITSM' },
  { en: 'In progress: ServiceNow AI certification path', fr: 'En cours : parcours de certification IA ServiceNow' },
  { en: 'English C1 (TOEFL)', fr: 'Anglais C1 (TOEFL)' },
];

export const services: { title: T; body: T; skills: SkillId[] }[] = [
  {
    title: { en: 'ServiceNow & AI agents', fr: 'ServiceNow & agents IA' },
    body: {
      en: 'Now Assist and AI Agent use cases, integrations with external AI APIs, Flows, Script Includes and REST, plus instance health checks and documentation of instances nobody documented.',
      fr: 'Cas d’usage Now Assist et AI Agents, intégration d’API d’IA externes, Flows, Script Includes et REST, ainsi que des bilans de santé d’instance et la documentation d’instances jamais documentées.',
    },
    skills: ['now-assist', 'servicenow-dev', 'servicenow-integration'],
  },
  {
    title: { en: 'AI automation', fr: 'Automatisation IA' },
    body: {
      en: 'Agents and pipelines that do real work: document understanding, model routing, LLM-as-judge quality gates, delivery to the channels your team already uses.',
      fr: 'Des agents et pipelines qui font un vrai travail : compréhension de documents, routage de modèles, contrôle qualité par un LLM juge, livraison dans les canaux que votre équipe utilise déjà.',
    },
    skills: ['ai-automation', 'local-llms', 'python'],
  },
  {
    title: { en: 'Immersive websites', fr: 'Sites web immersifs' },
    body: {
      en: 'Brand and product sites with real-time 3D, scroll storytelling and micro-interactions that still score green on Core Web Vitals.',
      fr: 'Sites de marque et de produit avec 3D temps réel, récit au défilement et micro-interactions, toujours au vert sur les Core Web Vitals.',
    },
    skills: ['threejs', 'astro', 'web-quality'],
  },
  {
    title: { en: 'Web apps & booking', fr: 'Applications web & réservation' },
    body: {
      en: 'Booking engines, configurators and dashboards, typed end to end and deployed through CI. Back ends in Java are hands-on and growing.',
      fr: 'Moteurs de réservation, configurateurs et tableaux de bord, typés de bout en bout et déployés par CI. Les back-ends Java sont en pratique, en progression.',
    },
    skills: ['typescript', 'rest-apis', 'java', 'playwright'],
  },
  {
    title: { en: '3D capture on site', fr: 'Capture 3D sur place' },
    body: {
      en: 'Gaussian-splat scans of rooms and terraces, photogrammetry of products and dishes. Capture is done by a partner 3D studio; I handle the brief, the web integration and the result.',
      fr: 'Scans Gaussian splat de pièces et de terrasses, photogrammétrie de produits et de plats. La capture est réalisée par un studio 3D partenaire ; je gère le brief, l’intégration web et le résultat.',
    },
    skills: ['3d-capture', 'threejs'],
  },
  {
    title: { en: 'Delivery & DevOps', fr: 'Delivery & DevOps' },
    body: {
      en: 'Containers, CI/CD pipelines and secure defaults on everything I ship. Kubernetes cluster operations are done with a specialist partner; I stay your single point of contact.',
      fr: 'Conteneurs, pipelines CI/CD et sécurité par défaut sur tout ce que je livre. L’exploitation de clusters Kubernetes se fait avec un partenaire spécialiste ; je reste votre interlocuteur unique.',
    },
    skills: ['docker', 'cicd', 'security', 'kubernetes'],
  },
];

export const process: { step: T; body: T }[] = [
  { step: { en: 'Discover', fr: 'Découvrir' }, body: { en: '30-minute call: goals, audience, constraints. Fixed quote within 24 h.', fr: 'Appel de 30 minutes : objectifs, public, contraintes. Devis forfaitaire sous 24 h.' } },
  { step: { en: 'Design', fr: 'Concevoir' }, body: { en: 'Moodboard and a clickable prototype before a line of production code.', fr: 'Moodboard et prototype cliquable avant la première ligne de code de production.' } },
  { step: { en: 'Build', fr: 'Construire' }, body: { en: 'Weekly demos on a live preview URL. You see progress, not promises.', fr: 'Démos hebdomadaires sur une URL de préproduction. Vous voyez l’avancement, pas des promesses.' } },
  { step: { en: 'Launch & care', fr: 'Lancer & maintenir' }, body: { en: 'Performance, SEO and security checks, handover docs, optional maintenance.', fr: 'Contrôles de performance, SEO et sécurité, documentation de passation, maintenance en option.' } },
];

export type TimelineItem =
  | { project: ProjectId; title?: T; org?: string }
  | { period: string; title: T; org: string; body: T; skills: SkillId[]; link?: string };

export const timeline: TimelineItem[] = [
  { period: '2026 — now', title: { en: 'Freelance engineer', fr: 'Ingénieur freelance' }, org: 'Independent', body: { en: 'Direct-booking websites for short-term rentals in Marrakech, immersive 3D showcases and configurators: offer, build, launch and maintenance.', fr: 'Sites de réservation directe pour des locations courte durée à Marrakech, vitrines 3D immersives et configurateurs : offre, développement, lancement et maintenance.' }, skills: ['astro', 'threejs', 'typescript', 'cicd'] },
  { project: 'sn-multi-instance', org: 'Atos · ServiceNow' },
  { project: 'sn-analytics', title: { en: 'Resource management & analytics lead', fr: 'Lead gestion des ressources & analytique' }, org: 'Atos · ServiceNow' },
  { project: 'sn-poc-factory', title: { en: 'ServiceNow developer · AI PoC Factory', fr: 'Développeur ServiceNow · PoC Factory IA' }, org: 'Atos' },
  { project: 'sn-health-check', title: { en: 'Integration developer · instance health check', fr: 'Développeur intégration · bilan de santé d’instance' }, org: 'Atos · ServiceNow' },
  { project: 'sn-ai-staffing', title: { en: 'Innovation lead · AI staffing assistant', fr: 'Innovation lead · assistant de staffing IA' }, org: 'Atos · ServiceNow' },
  { period: '2024 — 2026', title: { en: 'MAALSI: software & IS architecture manager (Bac+5, RNCP level 7)', fr: 'MAALSI : manager en architecture & applications logicielles des SI (Bac+5, RNCP niveau 7)' }, org: 'CESI', body: { en: 'Work-study master-level programme: software architecture, information systems, cloud and project management.', fr: 'Programme de niveau master en alternance : architecture logicielle, systèmes d’information, cloud et gestion de projet.' }, skills: ['architecture'] },
  { period: '2026', title: { en: 'Grand Oral: Microsoft 365 Copilot in the enterprise', fr: 'Grand Oral : Microsoft 365 Copilot en entreprise' }, org: 'CESI', body: { en: 'Final oral on deploying generative AI at enterprise scale: governance, security, adoption and ROI.', fr: 'Oral final sur le déploiement de l’IA générative à l’échelle de l’entreprise : gouvernance, sécurité, adoption et ROI.' }, skills: ['ai-automation', 'security'] },
  { project: 'bloc3', org: 'CESI' },
  { project: 'takaevent', org: 'CESI' },
  { project: 'unity-app', org: 'Université de Strasbourg' },
  { period: '12/2023 — 01/2024', title: { en: 'Secure network in C', fr: 'Réseau sécurisé en C' }, org: 'Université de Strasbourg', body: { en: 'TCP sockets, secured communication between users and custom commands, with unit tests and GitLab CI.', fr: 'Sockets TCP, communication sécurisée entre utilisateurs et commandes dédiées, avec tests unitaires et GitLab CI.' }, skills: ['cicd', 'security'] },
  { project: 'cv-platform', org: 'Personal' },
  { period: '12/2022 — 01/2024', title: { en: 'Co-founder, CEO / CTO', fr: 'Cofondateur, CEO / CTO' }, org: 'Blooming Group Ltd', body: { en: 'International e-commerce company: long-term goals, compliance, coordination with clients, partners and suppliers, and custom Shopify storefronts in Liquid.', fr: 'Entreprise internationale de e-commerce : objectifs à long terme, conformité, coordination avec clients, partenaires et fournisseurs, et boutiques Shopify sur mesure en Liquid.' }, skills: [] },
  { period: '2021 — 2024', title: { en: 'Licence (Bachelor) in Computer Science', fr: 'Licence Informatique' }, org: 'Université de Strasbourg', body: { en: 'Algorithms, systems, networks, databases and software engineering; object-oriented apps and games in Java / JavaFX.', fr: 'Algorithmique, systèmes, réseaux, bases de données et génie logiciel ; applications et jeux orientés objet en Java / JavaFX.' }, skills: ['java', 'sql'] },
  { period: '2023', title: { en: 'First portfolio', fr: 'Premier portfolio' }, org: 'Personal', body: { en: 'Server-rendered PHP portfolio, where this site started.', fr: 'Portfolio PHP rendu côté serveur, le point de départ de ce site.' }, skills: [], link: 'https://github.com/A-Tlemcani/portfolio' },
  { period: '2022', title: { en: 'MARS: MIPS assembly', fr: 'MARS : assembleur MIPS' }, org: 'Coursework', body: { en: 'Low-level programs written in MIPS assembly and run on the MARS simulator: registers, memory, syscalls.', fr: 'Programmes bas niveau en assembleur MIPS exécutés sur le simulateur MARS : registres, mémoire, appels système.' }, skills: [], link: 'https://github.com/A-Tlemcani/mars' },
  { period: '2021', title: { en: 'ChatBot', fr: 'ChatBot' }, org: 'Personal', body: { en: 'A JavaScript chatbot, my first interactive web project.', fr: 'Un chatbot en JavaScript, mon premier projet web interactif.' }, skills: [], link: 'https://github.com/A-Tlemcani/ChatBot' },
];

export const stats: { value: number; suffix: string; label: T }[] = [
  { value: 95, suffix: '+', label: { en: 'Lighthouse performance target on every demo', fr: 'Objectif de performance Lighthouse sur chaque démo' } },
  { value: 0, suffix: '', label: { en: 'third-party trackers or cookies', fr: 'traceur tiers ou cookie' } },
  { value: 100, suffix: '%', label: { en: 'TypeScript strict mode, built in CI', fr: 'TypeScript en mode strict, construit en CI' } },
  { value: 14, suffix: ' d', label: { en: 'minimum age of any new dependency (supply-chain cooldown)', fr: 'âge minimum de toute nouvelle dépendance (délai anti-attaque)' } },
];

export const marquee = ['ServiceNow', 'Now Assist', 'AI Agents', 'Claude Code', 'Python', 'Ollama', 'TypeScript', 'Astro', 'Three.js', 'Gaussian splats', 'WebGL', 'Docker', 'GitHub Actions', 'REST / OAuth', 'Accessibility', 'SEO'];
