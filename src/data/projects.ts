import type { T } from '../i18n';
import type { SkillId } from './skills';

export type Kind = 'client' | 'showcase' | 'servicenow' | 'lab' | 'study';

export interface Project {
  title: string;
  kind: Kind;
  period: string;
  /** Short line under the title: who it is for. */
  client: T;
  /** One-minute summary: the problem and the answer. */
  summary: T;
  /** What was built, one line each. */
  built: T[];
  /** What it changed, or where it stands. Never an invented metric. */
  outcome: T;
  /** The skills this project is evidence for. */
  skills: SkillId[];
  live?: string;
  repo?: string;
  caseStudy?: string;
  note?: T;
  /** Shown on the home page grid with a screenshot from /work/<id>.jpg. */
  featured?: [accentA: string, accentB: string];
}

const gh = (r: string) => ({ live: `https://a-tlemcani.github.io/${r}/`, repo: `https://github.com/A-Tlemcani/${r}` });

export const projects = {
  'dar-nila': {
    title: 'Dar Nila', kind: 'showcase', period: '2026',
    client: { en: 'Riad direct-booking showcase · Marrakech', fr: 'Vitrine de réservation directe pour riad · Marrakech' },
    summary: {
      en: 'A sales showcase for short-term-rental owners: the page opens on a real Gaussian-splat scan of a courtyard that glides as you scroll. A toggle switches between "photos only" and "with a 3D scan" so owners see the difference on their own phone.',
      fr: 'Une vitrine commerciale pour les propriétaires de locations courte durée : la page s’ouvre sur un vrai scan Gaussian splat d’un patio qui glisse au défilement. Un bouton bascule entre « photos seules » et « avec un scan 3D » pour que le propriétaire voie la différence sur son propre téléphone.',
    },
    built: [
      { en: 'Scroll-driven glide through a real 3D scan', fr: 'Travelling au défilement dans un vrai scan 3D' },
      { en: 'Three design directions: glide, dollhouse room picker, explore with hotspots', fr: 'Trois directions : travelling, maquette en coupe pour choisir sa chambre, exploration libre avec points d’intérêt' },
      { en: 'Mock booking with calendar, price breakdown and request flow', fr: 'Réservation fictive avec calendrier, détail du prix et demande de réservation' },
    ],
    outcome: { en: 'Design gate: three directions ready for review.', fr: 'Étape de design : trois directions prêtes à être choisies.' },
    skills: ['threejs', 'astro', 'typescript', 'web-quality', '3d-capture'],
    caseStudy: '/case/dar-nila/',
    note: { en: 'Private repository', fr: 'Dépôt privé' },
    featured: ['#e8a33d', '#2f4a3a'],
  },
  'jardin-vittorio': {
    title: 'Jardin Vittorio', kind: 'client', period: '2026',
    client: { en: 'Client project · Two apartments, Marrakech', fr: 'Projet client · Deux appartements, Marrakech' },
    summary: {
      en: 'A direct-booking website for two luxury apartments synced with Airbnb and Booking.com. The hero photos are split into layered depth images, so the garden gently moves in 3D without a heavy scan.',
      fr: 'Un site de réservation directe pour deux appartements haut de gamme, synchronisé avec Airbnb et Booking.com. Les photos d’accueil sont découpées en couches de profondeur : le jardin bouge doucement en 3D sans scan lourd.',
    },
    built: [
      { en: 'Photos AI-upscaled and split into near / middle / far layers (LaMa inpainting)', fr: 'Photos agrandies par IA et découpées en plans proche / moyen / lointain (inpainting LaMa)' },
      { en: 'Strict CSP, 20 KB JavaScript budget per page, end-to-end tests in CI', fr: 'CSP stricte, budget de 20 Ko de JavaScript par page, tests de bout en bout en CI' },
      { en: 'Offer, pricing and pre-launch checklist written with the client', fr: 'Offre, tarifs et check-list avant lancement rédigés avec le client' },
    ],
    outcome: { en: 'In progress: design round 2, waiting for the client’s pick.', fr: 'En cours : deuxième tour de design, en attente du choix du client.' },
    skills: ['astro', 'typescript', 'playwright', 'web-quality', 'security', 'ai-automation'],
    caseStudy: '/case/jardin-vittorio/',
    note: { en: 'Client work in progress', fr: 'Projet client en cours' },
    featured: ['#c9774a', '#1f3b2d'],
  },
  'vito-3d-showcase': {
    title: 'Trattoria Aurelia', kind: 'showcase', period: '2026',
    client: { en: 'Restaurant · 3D showcase demo', fr: 'Restaurant · démo de vitrine 3D' },
    summary: {
      en: 'A cinematic scroll story over a dressed trattoria table: photoreal scanned props lit by a real HDRI, a camera that glides through four chapters, then the menu and a live table-booking engine.',
      fr: 'Un récit au défilement autour d’une table de trattoria dressée : objets scannés photoréalistes éclairés par un vrai HDRI, une caméra qui traverse quatre chapitres, puis la carte et un moteur de réservation de table.',
    },
    built: [
      { en: '10 CC0 scanned models compressed from 21 MB to 3.9 MB', fr: '10 modèles scannés CC0 compressés de 21 Mo à 3,9 Mo' },
      { en: 'Reservation slot engine with opening hours, unit-tested', fr: 'Moteur de créneaux de réservation avec horaires, testé unitairement' },
      { en: 'Owner pitch: on-site 3D scan and dish photogrammetry', fr: 'Argumentaire propriétaire : scan 3D sur place et photogrammétrie des plats' },
    ],
    outcome: { en: 'Live demo, used as a sales piece for restaurants.', fr: 'Démo en ligne, utilisée comme support de vente pour les restaurants.' },
    skills: ['threejs', 'typescript', 'web-quality', 'cicd', '3d-capture'],
    featured: ['#d9573b', '#1a120d'],
    ...gh('vito-3d-showcase'),
  },
  'atelier-3d-configurator': {
    title: 'Atelier Nord', kind: 'showcase', period: '2026',
    client: { en: 'Design furniture · E-commerce demo', fr: 'Mobilier design · démo e-commerce' },
    summary: {
      en: 'A 3D product configurator: pick wood, fabric and leg finish, watch the chair update in real time, share the configuration by link and add it to the cart.',
      fr: 'Un configurateur produit 3D : choisissez le bois, le tissu et la finition des pieds, la chaise se met à jour en temps réel, la configuration se partage par lien et s’ajoute au panier.',
    },
    built: [
      { en: 'Procedural wood and fabric, lit by a real studio HDRI', fr: 'Bois et tissu procéduraux, éclairés par un vrai HDRI de studio' },
      { en: 'Shareable deep links, with every URL value whitelisted', fr: 'Liens de partage, chaque valeur d’URL passant par une liste blanche' },
      { en: 'Persistent cart synced across tabs, unit-tested', fr: 'Panier persistant synchronisé entre onglets, testé unitairement' },
    ],
    outcome: { en: 'Live demo for e-commerce prospects.', fr: 'Démo en ligne pour les prospects e-commerce.' },
    skills: ['threejs', 'typescript', 'security', 'cicd'],
    featured: ['#d9c6a5', '#2f3e46'],
    ...gh('atelier-3d-configurator'),
  },
  'orbit-saas-landing': {
    title: 'Orbit', kind: 'showcase', period: '2026',
    client: { en: 'B2B SaaS · Landing page demo', fr: 'SaaS B2B · démo de landing page' },
    summary: {
      en: 'The marketing page a SaaS company buys, for a fictional "AI incident copilot". Its one job is turning visitors into trial sign-ups: a WebGL globe, a bento feature grid, monthly/yearly pricing and an accessible FAQ.',
      fr: 'La page marketing qu’achète un éditeur SaaS, pour un « copilote d’incidents IA » fictif. Son seul objectif : transformer les visiteurs en inscriptions à l’essai. Globe WebGL, grille de fonctionnalités, tarifs mensuels/annuels et FAQ accessible.',
    },
    built: [
      { en: 'Globe drawn from real Natural Earth data (14k instanced points)', fr: 'Globe dessiné à partir de vraies données Natural Earth (14 000 points instanciés)' },
      { en: 'Pricing toggle with annual savings, unit-tested', fr: 'Bascule de tarifs avec économie annuelle, testée unitairement' },
      { en: 'WAI-ARIA radio group and native FAQ', fr: 'Groupe radio WAI-ARIA et FAQ native' },
    ],
    outcome: { en: 'Live demo. Next: a real sign-up API behind it (Spring Boot).', fr: 'Démo en ligne. Prochaine étape : une vraie API d’inscription derrière (Spring Boot).' },
    skills: ['threejs', 'typescript', 'web-quality', 'cicd'],
    featured: ['#7a5cff', '#22d3ee'],
    ...gh('orbit-saas-landing'),
  },

  // --- ServiceNow work at Atos. Generic descriptions only: no internal names, no customers.
  'sn-multi-instance': {
    title: 'Multi-instance management', kind: 'servicenow', period: '07/2026 — now',
    client: { en: 'Atos · ServiceNow scoped app', fr: 'Atos · application ServiceNow scopée' },
    summary: {
      en: 'Onboarding and administering many ServiceNow instances from one parent instance: personas, groups and users managed remotely, safely, and with a trace of every action.',
      fr: 'Intégrer et administrer de nombreuses instances ServiceNow depuis une instance mère : personas, groupes et utilisateurs gérés à distance, en sécurité, avec une trace de chaque action.',
    },
    built: [
      { en: 'Parent/child architecture: REST/OAuth transport kept apart from business services and Flow Designer orchestration, so nothing is duplicated', fr: 'Architecture mère/filles : transport REST/OAuth séparé des services métier et de l’orchestration Flow Designer, sans duplication' },
      { en: 'Runtime auth model (OAuth / Basic with credential aliases), logging and audit, monitoring dashboards', fr: 'Modèle d’authentification à l’exécution (OAuth / Basic via credential aliases), journalisation et audit, tableaux de supervision' },
      { en: 'Least privilege, secret protection, traceable clean-up when an instance is removed', fr: 'Moindre privilège, protection des secrets, nettoyage traçable au retrait d’une instance' },
    ],
    outcome: { en: 'In progress.', fr: 'En cours.' },
    skills: ['servicenow-dev', 'servicenow-integration', 'security', 'architecture', 'rest-apis'],
  },
  'sn-analytics': {
    title: 'Resource management & analytics', kind: 'servicenow', period: '05/2026 — now',
    client: { en: 'Atos · ServiceNow practice', fr: 'Atos · practice ServiceNow' },
    summary: {
      en: 'Steering resource and pre-sales requests for a ServiceNow practice, and giving the team dashboards on an instance that had no documentation.',
      fr: 'Piloter les demandes de ressources et d’avant-vente d’une practice ServiceNow, et donner à l’équipe des tableaux de bord sur une instance sans documentation.',
    },
    built: [
      { en: 'Two operational dashboards in Platform Analytics, KPIs computed by Business Rules and Fix Scripts', fr: 'Deux tableaux de bord opérationnels dans Platform Analytics, KPI calculés par Business Rules et Fix Scripts' },
      { en: 'Map of legacy tables, notifications, views and reports, with a migration path', fr: 'Cartographie des tables, notifications, vues et rapports historiques, avec une trajectoire de migration' },
      { en: 'End-to-end documentation of the instance', fr: 'Documentation de bout en bout de l’instance' },
    ],
    outcome: { en: 'In progress.', fr: 'En cours.' },
    skills: ['platform-analytics', 'servicenow-dev', 'architecture'],
  },
  'sn-poc-factory': {
    title: 'AI PoC Factory', kind: 'servicenow', period: '08/2025 — now',
    client: { en: 'Atos · internal and sales teams', fr: 'Atos · équipes internes et commerciales' },
    summary: {
      en: 'Finding out which AI features of the Now Platform a customer can really use, and proving it with working prototypes before anyone sells it.',
      fr: 'Déterminer quelles fonctions IA de la Now Platform un client peut réellement utiliser, et le prouver par des prototypes qui fonctionnent avant de le vendre.',
    },
    built: [
      { en: 'Prototypes with Now Assist and agentic AI, tested in an isolated environment', fr: 'Prototypes avec Now Assist et l’IA agentique, testés dans un environnement isolé' },
      { en: 'Licence and version analysis to list the AI use cases each package unlocks', fr: 'Analyse des licences et versions pour lister les cas d’usage IA de chaque offre' },
      { en: 'PoCs connecting external AI APIs to ServiceNow AI Agents', fr: 'PoC connectant des API d’IA externes aux AI Agents ServiceNow' },
      { en: 'Demos, documentation and adoption roadmaps for internal and sales teams', fr: 'Démos, documentation et feuilles de route d’adoption pour les équipes internes et commerciales' },
    ],
    outcome: { en: 'Ongoing; recommendations used for industrialisation decisions.', fr: 'En continu ; recommandations utilisées pour décider de l’industrialisation.' },
    skills: ['now-assist', 'servicenow-integration', 'servicenow-dev', 'prompt-engineering', 'rest-apis'],
  },
  'sn-health-check': {
    title: 'Instance health check', kind: 'servicenow', period: '07 — 08/2025',
    client: { en: 'Atos · delivery teams', fr: 'Atos · équipes de delivery' },
    summary: {
      en: 'A package that teams deploy on a customer instance to assess its health and best-practice compliance.',
      fr: 'Un package que les équipes déploient sur l’instance d’un client pour évaluer sa santé et sa conformité aux bonnes pratiques.',
    },
    built: [
      { en: 'Gathered internal and open-source instance-scan checks and adapted them', fr: 'Rassemblement et adaptation de checks Instance Scan internes et open source' },
      { en: 'Packaged as an Update Set ready to deploy, documented for reuse', fr: 'Livré en Update Set prêt à déployer, documenté pour être réutilisé' },
    ],
    outcome: { en: 'Delivered and handed over to the technical teams.', fr: 'Livré et transmis aux équipes techniques.' },
    skills: ['servicenow-dev', 'security'],
    repo: 'https://github.com/A-Tlemcani/my_instance_scan_collection',
  },
  'sn-ai-staffing': {
    title: 'AI staffing assistant', kind: 'servicenow', period: '03 — 06/2025',
    client: { en: 'Atos · resource management', fr: 'Atos · gestion des ressources' },
    summary: {
      en: 'Suggesting the right people for a resource request with AI, directly inside ServiceNow. I led it as innovation lead, from design to stakeholder demo.',
      fr: 'Suggérer les bonnes personnes pour une demande de ressource grâce à l’IA, directement dans ServiceNow. Je l’ai mené comme innovation lead, de la conception à la démo aux parties prenantes.',
    },
    built: [
      { en: 'Functional and technical architecture on the platform', fr: 'Architecture fonctionnelle et technique sur la plateforme' },
      { en: 'External AI API called through REST Messages and Script Includes, triggered by UI Actions and a workflow', fr: 'API d’IA externe appelée via REST Messages et Script Includes, déclenchée par des UI Actions et un workflow' },
    ],
    outcome: { en: 'Full prototype presented and documented.', fr: 'Prototype complet présenté et documenté.' },
    skills: ['servicenow-dev', 'servicenow-integration', 'rest-apis', 'ai-automation'],
  },

  // --- Personal systems
  'digital-brain': {
    title: 'Digital Brain', kind: 'lab', period: '03/2026 — now',
    client: { en: 'Local-first personal AI orchestrator', fr: 'Orchestrateur IA personnel, local d’abord' },
    summary: {
      en: 'My own agent system, running on my PC first: long-term memory, document understanding, modular Python workflows, and switching between local and hosted models depending on the task. WhatsApp is the control channel.',
      fr: 'Mon propre système d’agents, qui tourne d’abord sur mon PC : mémoire longue, compréhension de documents, workflows Python modulaires, et bascule entre modèles locaux et hébergés selon la tâche. WhatsApp sert de canal de commande.',
    },
    built: [
      { en: 'Persistent memory in my own engine (hippo), local models with Ollama on an RTX 5070', fr: 'Mémoire persistante dans mon propre moteur (hippo), modèles locaux avec Ollama sur une RTX 5070' },
      { en: 'Model switching and agentic decisions based on the request', fr: 'Bascule de modèle et décisions agentiques selon la demande' },
      { en: 'Secure remote access over WireGuard with Wake-on-LAN', fr: 'Accès distant sécurisé via WireGuard avec Wake-on-LAN' },
    ],
    outcome: { en: 'Runs every day. Full case study coming.', fr: 'Tourne tous les jours. Étude de cas complète à venir.' },
    skills: ['ai-automation', 'local-llms', 'claude-code', 'python', 'docker', 'security'],
  },
  'content-factory': {
    title: 'Content Factory', kind: 'lab', period: '2026',
    client: { en: 'Automated short-video pipeline', fr: 'Pipeline automatisé de vidéos courtes' },
    summary: {
      en: 'Finds and fetches footage, edits a vertical cut, voices it with a fine-tuned TTS voice, then has an AI judge score it as a viewer would. Only drafts above the bar are delivered to WhatsApp.',
      fr: 'Trouve et récupère des images, monte une version verticale, la double avec une voix TTS affinée, puis un juge IA la note comme le ferait un spectateur. Seuls les brouillons au-dessus du seuil arrivent sur WhatsApp.',
    },
    built: [
      { en: 'Search, edit and voice steps chained in Python', fr: 'Étapes de recherche, montage et voix enchaînées en Python' },
      { en: 'LLM-as-judge quality gate', fr: 'Contrôle qualité par un LLM juge' },
    ],
    outcome: { en: 'Lab project.', fr: 'Projet de lab.' },
    skills: ['ai-automation', 'python', 'prompt-engineering'],
  },
  'flight-alerts': {
    title: 'Flight alerts', kind: 'lab', period: '2026',
    client: { en: 'Price-watch bot', fr: 'Bot de veille tarifaire' },
    summary: {
      en: 'Watches the routes I fly (Strasbourg ↔ Casablanca), compares fares and sends a buy-or-wait call with the price to WhatsApp.',
      fr: 'Surveille les trajets que je fais (Strasbourg ↔ Casablanca), compare les prix et envoie sur WhatsApp un conseil « acheter ou attendre » avec le tarif.',
    },
    built: [{ en: 'Containerised Python bot with scheduled checks', fr: 'Bot Python conteneurisé avec vérifications planifiées' }],
    outcome: { en: 'Runs on my machine.', fr: 'Tourne sur ma machine.' },
    skills: ['python', 'docker', 'ai-automation'],
  },

  // --- Studies and earlier work
  'cv-platform': {
    title: 'CV platform', kind: 'study', period: '08 — 11/2023',
    client: { en: 'Personal project', fr: 'Projet personnel' },
    summary: {
      en: 'A configurable portfolio/CV site with a Java back end.',
      fr: 'Un site portfolio/CV configurable avec un back-end Java.',
    },
    built: [
      { en: 'REST API in Java 11 and Spring Boot, JWT admin authentication', fr: 'API REST en Java 11 et Spring Boot, authentification admin en JWT' },
      { en: 'MySQL schema, Angular front end started, Figma mock-ups', fr: 'Schéma MySQL, front Angular commencé, maquettes Figma' },
    ],
    outcome: { en: 'API done; front end not finished.', fr: 'API terminée ; front non terminé.' },
    skills: ['java', 'sql', 'rest-apis'],
  },
  'unity-app': {
    title: 'Multi-platform team app', kind: 'study', period: '01 — 06/2024',
    client: { en: 'Université de Strasbourg · team project', fr: 'Université de Strasbourg · projet d’équipe' },
    summary: {
      en: 'One app on web, mobile, Windows and macOS, built as a team with a real client brief.',
      fr: 'Une application sur web, mobile, Windows et macOS, réalisée en équipe à partir d’un vrai cahier des charges.',
    },
    built: [
      { en: 'Requirements with the client, V-model delivery, Gantt planning', fr: 'Recueil du besoin avec le client, cycle en V, planning de Gantt' },
      { en: 'Core logic in C#, UI in Unity, networking with Netcode', fr: 'Logique en C#, interface en Unity, réseau avec Netcode' },
      { en: 'Deployed on a Linux server, unit tests and GitLab CI', fr: 'Déployée sur un serveur Linux, tests unitaires et GitLab CI' },
    ],
    outcome: { en: 'Delivered.', fr: 'Livré.' },
    skills: ['csharp', 'cicd', 'git'],
  },
  takaevent: {
    title: 'TakaEvent', kind: 'study', period: '2024',
    client: { en: 'CESI team project', fr: 'Projet d’équipe CESI' },
    summary: {
      en: 'An event and room booking platform built as microservices.',
      fr: 'Une plateforme de réservation d’événements et de salles en microservices.',
    },
    built: [{ en: 'Separate API gateway, user, reservation, room, email and database services plus a web UI', fr: 'Passerelle d’API, services utilisateurs, réservations, salles, e-mails et base de données séparés, plus une interface web' }],
    outcome: { en: 'Delivered as a team.', fr: 'Livré en équipe.' },
    skills: ['rest-apis', 'architecture', 'docker'],
    repo: 'https://github.com/TakaEventCesi',
  },
  bloc3: {
    title: 'Kubernetes deployment', kind: 'study', period: '2026',
    client: { en: 'CESI project (bloc 3)', fr: 'Projet CESI (bloc 3)' },
    summary: {
      en: 'Declarative Kubernetes manifests to deploy and operate a multi-service application.',
      fr: 'Manifestes Kubernetes déclaratifs pour déployer et exploiter une application multi-services.',
    },
    built: [{ en: 'Deployments, services and configuration as YAML', fr: 'Deployments, services et configuration en YAML' }],
    outcome: { en: 'Coursework.', fr: 'Travail de formation.' },
    skills: ['kubernetes', 'docker'],
    repo: 'https://github.com/A-Tlemcani/bloc3',
  },
} as const satisfies Record<string, Project>;

export type ProjectId = keyof typeof projects;
export const projectIds = Object.keys(projects) as ProjectId[];

export const kinds: Record<Kind, T> = {
  client: { en: 'Client work', fr: 'Projet client' },
  showcase: { en: 'Showcase', fr: 'Vitrine' },
  servicenow: { en: 'ServiceNow', fr: 'ServiceNow' },
  lab: { en: 'Lab', fr: 'Lab' },
  study: { en: 'Studies', fr: 'Formation' },
};

/** Projects that prove a skill. */
export const evidenceFor = (id: SkillId) => projectIds.filter((p) => (projects[p].skills as readonly SkillId[]).includes(id));

/** Widened accessor for templates: every optional field is visible on every project. */
export const project = (id: ProjectId): Project => projects[id];
