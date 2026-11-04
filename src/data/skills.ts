import type { T } from '../i18n';

/**
 * Skills, levels and delivery tiers.
 * Levels use the same 1–5 scale as my employer skills sheet (1 fundamentals · 2 novice · 3 intermediate ·
 * 4 advanced · 5 expert). The sheet is the baseline; a level is only raised when a project in
 * `projects.ts` proves it. Evidence is never typed here: each skill page lists the projects that use it.
 */
export type Tier = 'build' | 'growing' | 'partner';
export type Group = 'servicenow' | 'ai' | 'web' | 'backend' | 'delivery' | 'partner';

export interface Skill {
  name: string;
  group: Group;
  level: 1 | 2 | 3 | 4 | 5;
  tier: Tier;
  /** One or two sentences: what I actually do with it. */
  summary: T;
}

export const skills = {
  'servicenow-dev': {
    name: 'ServiceNow development', group: 'servicenow', level: 3, tier: 'build',
    summary: {
      en: 'Server and client scripting on the Now Platform: Business Rules, Script Includes, UI Actions, Client Scripts, Fix Scripts, ACLs and Update Sets. CSA certified.',
      fr: 'Scripting serveur et client sur la Now Platform : Business Rules, Script Includes, UI Actions, Client Scripts, Fix Scripts, ACL et Update Sets. Certifié CSA.',
    },
  },
  'now-assist': {
    name: 'Now Assist & AI Agents', group: 'servicenow', level: 3, tier: 'build',
    summary: {
      en: 'Prototyping Now Assist skills and agentic AI, reading licences and versions to see which AI features a customer can really switch on. Two ServiceNow delivery accreditations.',
      fr: 'Prototypage de skills Now Assist et d’IA agentique, lecture des licences et versions pour savoir quelles fonctions IA un client peut vraiment activer. Deux accréditations de delivery ServiceNow.',
    },
  },
  'servicenow-integration': {
    name: 'ServiceNow integrations', group: 'servicenow', level: 3, tier: 'build',
    summary: {
      en: 'REST Messages, OAuth 2.0 and credential aliases, Flow Designer orchestration, and connecting external AI APIs to the platform.',
      fr: 'REST Messages, OAuth 2.0 et credential aliases, orchestration Flow Designer, et connexion d’API d’IA externes à la plateforme.',
    },
  },
  'platform-analytics': {
    name: 'Platform Analytics', group: 'servicenow', level: 2, tier: 'growing',
    summary: {
      en: 'Operational dashboards and KPIs, and migrating legacy reports to Platform Analytics.',
      fr: 'Tableaux de bord opérationnels et KPI, migration des rapports historiques vers Platform Analytics.',
    },
  },
  'ai-automation': {
    name: 'AI automation & agents', group: 'ai', level: 4, tier: 'build',
    summary: {
      en: 'Agents and pipelines that do real work: memory, document understanding, model routing, LLM-as-judge quality gates, delivery to WhatsApp.',
      fr: 'Agents et pipelines qui font un vrai travail : mémoire, compréhension de documents, routage de modèles, contrôle qualité par un LLM juge, livraison sur WhatsApp.',
    },
  },
  'claude-code': {
    name: 'Claude Code (AI-assisted engineering)', group: 'ai', level: 4, tier: 'build',
    summary: {
      en: 'My daily build tool. I write the brief, the architecture and the rules; the agent implements; I review, test and decide what ships.',
      fr: 'Mon outil de développement au quotidien. J’écris le brief, l’architecture et les règles ; l’agent implémente ; je relis, je teste et je décide de ce qui part en production.',
    },
  },
  'local-llms': {
    name: 'Local LLMs (Ollama, Letta)', group: 'ai', level: 4, tier: 'build',
    summary: {
      en: 'Running models on my own machine with Ollama, and long-term agent memory with Letta, so private data stays local.',
      fr: 'Modèles exécutés sur ma propre machine avec Ollama, et mémoire longue d’agent avec Letta, pour que les données privées restent locales.',
    },
  },
  'prompt-engineering': {
    name: 'Prompt engineering', group: 'ai', level: 3, tier: 'build',
    summary: {
      en: 'Structured prompts, evaluation rubrics and guardrails for agents and judges.',
      fr: 'Prompts structurés, grilles d’évaluation et garde-fous pour les agents et les juges.',
    },
  },
  python: {
    name: 'Python', group: 'ai', level: 3, tier: 'growing',
    summary: {
      en: 'The language of my automation: agents, media pipelines and bots.',
      fr: 'Le langage de mes automatisations : agents, pipelines média et bots.',
    },
  },
  typescript: {
    name: 'TypeScript', group: 'web', level: 3, tier: 'build',
    summary: {
      en: 'Strict mode everywhere, small typed modules, unit tests on the business logic (prices, slots, carts).',
      fr: 'Mode strict partout, petits modules typés, tests unitaires sur la logique métier (prix, créneaux, panier).',
    },
  },
  astro: {
    name: 'Astro', group: 'web', level: 3, tier: 'build',
    summary: {
      en: 'Static-first sites with zero JavaScript by default: this portfolio and the client booking site.',
      fr: 'Sites statiques d’abord, zéro JavaScript par défaut : ce portfolio et le site de réservation client.',
    },
  },
  threejs: {
    name: 'Three.js / WebGL', group: 'web', level: 3, tier: 'build',
    summary: {
      en: 'Real-time 3D for the web: PBR materials and HDRI lighting, shaders, compressed glTF, Gaussian splats, and performance budgets that hold on phones.',
      fr: '3D temps réel pour le web : matériaux PBR et éclairage HDRI, shaders, glTF compressé, Gaussian splats, et budgets de performance qui tiennent sur mobile.',
    },
  },
  'web-quality': {
    name: 'Accessibility, SEO & performance', group: 'web', level: 3, tier: 'build',
    summary: {
      en: 'Semantic HTML, keyboard and screen-reader support, reduced-motion fallbacks, strict CSP, Core Web Vitals.',
      fr: 'HTML sémantique, clavier et lecteurs d’écran, alternatives sans animation, CSP stricte, Core Web Vitals.',
    },
  },
  playwright: {
    name: 'Playwright (e2e tests)', group: 'web', level: 3, tier: 'build',
    summary: {
      en: 'End-to-end tests of booking flows, screenshots and recordings to check what users really see.',
      fr: 'Tests de bout en bout des parcours de réservation, captures et enregistrements pour vérifier ce que l’utilisateur voit vraiment.',
    },
  },
  java: {
    name: 'Java / Spring Boot', group: 'backend', level: 2, tier: 'growing',
    summary: {
      en: 'REST APIs with Spring Boot, JWT auth and MySQL. Next: a production-style API with Postgres, migrations and container tests.',
      fr: 'API REST avec Spring Boot, authentification JWT et MySQL. Prochaine étape : une API de niveau production avec Postgres, migrations et tests en conteneur.',
    },
  },
  csharp: {
    name: 'C# / .NET', group: 'backend', level: 2, tier: 'growing',
    summary: {
      en: 'Application logic in C# for a multi-platform team project (Unity, Netcode).',
      fr: 'Logique applicative en C# pour un projet d’équipe multiplateforme (Unity, Netcode).',
    },
  },
  sql: {
    name: 'SQL & databases', group: 'backend', level: 2, tier: 'growing',
    summary: {
      en: 'Relational modelling with MySQL and PL/SQL; first steps with MongoDB.',
      fr: 'Modélisation relationnelle avec MySQL et PL/SQL ; premiers pas avec MongoDB.',
    },
  },
  'rest-apis': {
    name: 'REST APIs & integration', group: 'backend', level: 3, tier: 'build',
    summary: {
      en: 'Designing and consuming JSON APIs, auth (OAuth 2.0, JWT), testing with Postman, signed webhooks.',
      fr: 'Conception et consommation d’API JSON, authentification (OAuth 2.0, JWT), tests avec Postman, webhooks signés.',
    },
  },
  docker: {
    name: 'Docker', group: 'delivery', level: 3, tier: 'build',
    summary: {
      en: 'Containerised services and bots that run the same on my PC and on a server.',
      fr: 'Services et bots conteneurisés qui tournent pareil sur mon PC et sur un serveur.',
    },
  },
  cicd: {
    name: 'CI/CD (GitHub Actions, GitLab CI)', group: 'delivery', level: 2, tier: 'growing',
    summary: {
      en: 'Every repo builds, audits dependencies, tests and deploys in CI. No manual uploads.',
      fr: 'Chaque dépôt construit, audite ses dépendances, teste et déploie en CI. Aucun envoi manuel.',
    },
  },
  architecture: {
    name: 'Architecture (ArchiMate, C4, UML)', group: 'delivery', level: 3, tier: 'build',
    summary: {
      en: 'Modelling information systems and writing down decisions so the next person understands why.',
      fr: 'Modéliser des systèmes d’information et écrire les décisions pour que la personne suivante comprenne pourquoi.',
    },
  },
  security: {
    name: 'Secure by default', group: 'delivery', level: 3, tier: 'build',
    summary: {
      en: 'Least privilege, secrets out of git, strict CSP, dependency cooldowns and audits, threat thinking before features.',
      fr: 'Moindre privilège, aucun secret dans git, CSP stricte, délai et audit des dépendances, réflexion sur les menaces avant les fonctionnalités.',
    },
  },
  'git': {
    name: 'Git, GitHub & GitLab', group: 'delivery', level: 3, tier: 'build',
    summary: {
      en: 'Branches and pull requests, Conventional Commits, protected main branches.',
      fr: 'Branches et pull requests, Conventional Commits, branches principales protégées.',
    },
  },
  kubernetes: {
    name: 'Kubernetes (cluster operations)', group: 'partner', level: 2, tier: 'partner',
    summary: {
      en: 'I write manifests and understand the platform; running production clusters is done by a specialist partner I bring in. I stay your single point of contact.',
      fr: 'J’écris des manifestes et je comprends la plateforme ; l’exploitation de clusters en production est confiée à un partenaire spécialiste que je fais intervenir. Je reste votre interlocuteur unique.',
    },
  },
  '3d-capture': {
    name: '3D capture on site', group: 'partner', level: 2, tier: 'partner',
    summary: {
      en: 'Gaussian-splat scans and photogrammetry of your venue are captured by a partner 3D studio. I write the brief, integrate the result on the web and guarantee it.',
      fr: 'Les scans Gaussian splat et la photogrammétrie de votre lieu sont réalisés par un studio 3D partenaire. J’écris le brief, j’intègre le résultat sur le web et je le garantis.',
    },
  },
  cloud: {
    name: 'Cloud platforms (Azure, AWS)', group: 'partner', level: 1, tier: 'partner',
    summary: {
      en: 'Fundamentals only. Larger cloud architecture is designed with a certified partner.',
      fr: 'Bases seulement. Une architecture cloud plus large est conçue avec un partenaire certifié.',
    },
  },
} as const satisfies Record<string, Skill>;

export type SkillId = keyof typeof skills;
export const skillIds = Object.keys(skills) as SkillId[];

export const levelName: Record<Skill['level'], T> = {
  1: { en: 'Fundamentals', fr: 'Notions' },
  2: { en: 'Novice', fr: 'Novice' },
  3: { en: 'Intermediate', fr: 'Intermédiaire' },
  4: { en: 'Advanced', fr: 'Avancé' },
  5: { en: 'Expert', fr: 'Expert' },
};

export const tiers: Record<Tier, { name: T; body: T }> = {
  build: {
    name: { en: 'I build it', fr: 'Je le fais' },
    body: {
      en: 'Work I design and deliver myself, and price as my own work.',
      fr: 'Ce que je conçois et livre moi-même, au tarif de mon propre travail.',
    },
  },
  growing: {
    name: { en: 'Hands-on, growing', fr: 'En pratique, en progression' },
    body: {
      en: 'I use it on real projects and I am getting better at it. I say so upfront, and I scope accordingly.',
      fr: 'Je l’utilise sur de vrais projets et je progresse. Je le dis d’emblée et je dimensionne en conséquence.',
    },
  },
  partner: {
    name: { en: 'With trusted partners', fr: 'Avec des partenaires de confiance' },
    body: {
      en: 'A specialist does the work; I write the brief, coordinate, integrate and guarantee the result. You keep one contact: me. Priced as partner work.',
      fr: 'Un spécialiste réalise le travail ; j’écris le brief, je coordonne, j’intègre et je garantis le résultat. Vous gardez un seul interlocuteur : moi. Facturé comme du travail partenaire.',
    },
  },
};

export const groups: Record<Group, T> = {
  servicenow: { en: 'ServiceNow', fr: 'ServiceNow' },
  ai: { en: 'AI & automation', fr: 'IA & automatisation' },
  web: { en: 'Web', fr: 'Web' },
  backend: { en: 'Back end & data', fr: 'Back-end & données' },
  delivery: { en: 'Delivery', fr: 'Delivery' },
  partner: { en: 'Through partners', fr: 'Via des partenaires' },
};
