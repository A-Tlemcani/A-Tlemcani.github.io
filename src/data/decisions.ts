import type { T } from '../i18n';
import type { SkillId } from './skills';
import type { ProjectId } from './projects';

/** Short decision records: the choice, why, and what it costs. Written in my words, one minute to read. */
export interface Decision {
  title: T;
  context: T;
  decision: T;
  why: T[];
  tradeoff: T;
  skills: SkillId[];
  projects: ProjectId[];
}

export const decisions = {
  'astro-for-portfolio': {
    title: { en: 'Astro for this portfolio', fr: 'Astro pour ce portfolio' },
    context: {
      en: 'The site needs two languages and about a hundred small pages (skills, projects, decisions) that link to each other. Doing that in hand-written HTML would drift.',
      fr: 'Le site doit exister en deux langues avec une centaine de petites pages (compétences, projets, décisions) liées entre elles. En HTML écrit à la main, tout finirait par diverger.',
    },
    decision: {
      en: 'Generate every page from one typed data source with Astro. Ship zero JavaScript by default; only the 3D hero and the quick-navigation palette load scripts.',
      fr: 'Générer chaque page depuis une seule source de données typée avec Astro. Zéro JavaScript par défaut ; seuls le héros 3D et la palette de navigation chargent des scripts.',
    },
    why: [
      { en: 'Links are typed: a skill that points to a missing project fails the build.', fr: 'Les liens sont typés : une compétence qui pointe vers un projet inexistant fait échouer le build.' },
      { en: 'Real HTML on every page, readable by search engines and AI assistants.', fr: 'Du vrai HTML sur chaque page, lisible par les moteurs de recherche et les assistants IA.' },
      { en: 'Same tool as my client booking site, so knowledge carries over.', fr: 'Même outil que mon site de réservation client : les acquis se transfèrent.' },
    ],
    tradeoff: { en: 'One more dependency than plain Vite, and a build step for every text change.', fr: 'Une dépendance de plus que Vite seul, et un build pour chaque modification de texte.' },
    skills: ['astro', 'typescript', 'web-quality'],
    projects: [],
  },
  'vanilla-three-for-demos': {
    title: { en: 'No framework for the 3D demos', fr: 'Pas de framework pour les démos 3D' },
    context: {
      en: 'The showcases are single pages where the 3D scene is the product. Bundle size and control of the render loop matter more than component reuse.',
      fr: 'Les vitrines sont des pages uniques où la scène 3D est le produit. Le poids du bundle et le contrôle de la boucle de rendu comptent plus que la réutilisation de composants.',
    },
    decision: {
      en: 'Vite + strict TypeScript + Three.js, no UI framework. Business logic (slots, prices, cart) lives in small pure modules with unit tests.',
      fr: 'Vite + TypeScript strict + Three.js, sans framework d’interface. La logique métier (créneaux, prix, panier) vit dans de petits modules purs testés unitairement.',
    },
    why: [
      { en: 'Smallest bundle: the only heavy code is the 3D engine itself.', fr: 'Bundle minimal : le seul code lourd est le moteur 3D lui-même.' },
      { en: 'Full control: pause rendering off-screen, cap pixel ratio, respect reduced motion.', fr: 'Contrôle total : rendu en pause hors écran, densité de pixels plafonnée, respect du mouvement réduit.' },
    ],
    tradeoff: { en: 'More hand-written DOM code; a real app with many screens would use a framework.', fr: 'Plus de code DOM écrit à la main ; une vraie application avec beaucoup d’écrans utiliserait un framework.' },
    skills: ['threejs', 'typescript'],
    projects: ['vito-3d-showcase', 'atelier-3d-configurator', 'orbit-saas-landing'],
  },
  'gaussian-splats': {
    title: { en: 'Gaussian splats for real places', fr: 'Des Gaussian splats pour les lieux réels' },
    context: {
      en: 'A rental owner needs guests to feel the place. Photos flatten it; a modelled 3D scene is expensive and never looks quite real.',
      fr: 'Un propriétaire veut que ses clients ressentent le lieu. Les photos l’aplatissent ; une scène 3D modélisée coûte cher et ne paraît jamais tout à fait réelle.',
    },
    decision: {
      en: 'Show a Gaussian-splat scan of the real place, rendered with Spark on Three.js, painted after a normal photo so the page is never blank.',
      fr: 'Montrer un scan Gaussian splat du vrai lieu, rendu avec Spark sur Three.js, affiché après une photo classique pour que la page ne soit jamais vide.',
    },
    why: [
      { en: 'Photoreal from one capture visit, no 3D modelling.', fr: 'Photoréaliste à partir d’une seule visite de capture, sans modélisation 3D.' },
      { en: 'Honest: it is the real place, labelled as a scan.', fr: 'Honnête : c’est le vrai lieu, présenté comme un scan.' },
    ],
    tradeoff: { en: 'Scans are heavy (around 15 MB), so they load only when visible, with static fallbacks.', fr: 'Les scans sont lourds (environ 15 Mo) : ils ne se chargent que lorsqu’ils sont visibles, avec des alternatives statiques.' },
    skills: ['threejs', '3d-capture', 'web-quality'],
    projects: ['dar-nila'],
  },
  'depth-layers': {
    title: { en: '3D from photos when there is no scan', fr: 'De la 3D à partir de photos quand il n’y a pas de scan' },
    context: {
      en: 'The client had photos, not a 3D scan, and the site has a 20 KB JavaScript budget per page.',
      fr: 'Le client avait des photos, pas de scan 3D, et le site a un budget de 20 Ko de JavaScript par page.',
    },
    decision: {
      en: 'Upscale each hero photo with AI, split it into near / middle / far layers with a depth model, fill the gaps with LaMa inpainting, and move the layers with CSS.',
      fr: 'Agrandir chaque photo d’accueil par IA, la découper en plans proche / moyen / lointain avec un modèle de profondeur, combler les trous par inpainting LaMa, et animer les plans en CSS.',
    },
    why: [
      { en: 'Real parallax from material the client already has.', fr: 'Une vraie parallaxe à partir de ce que le client possède déjà.' },
      { en: 'A few kilobytes of code, no 3D engine.', fr: 'Quelques kilo-octets de code, pas de moteur 3D.' },
    ],
    tradeoff: { en: 'Less depth than a real scan; the AI work is done offline and checked by eye.', fr: 'Moins de profondeur qu’un vrai scan ; le travail d’IA est fait hors ligne et vérifié à l’œil.' },
    skills: ['ai-automation', 'web-quality', 'astro'],
    projects: ['jardin-vittorio'],
  },
  'channel-manager': {
    title: { en: 'One source of truth for availability', fr: 'Une seule source de vérité pour les disponibilités' },
    context: {
      en: 'Calendar sync by iCal is not real time: Airbnb refreshes every 3 hours, Booking.com every 2. A double booking on Airbnb costs the host 10 to 50 % of the stay.',
      fr: 'La synchronisation iCal n’est pas en temps réel : Airbnb rafraîchit toutes les 3 heures, Booking.com toutes les 2. Une double réservation sur Airbnb coûte à l’hôte 10 à 50 % du séjour.',
    },
    decision: {
      en: 'A channel manager owns availability; the website asks it and never decides alone. Bookings follow a state machine, webhooks are signed, and the database refuses overlapping stays.',
      fr: 'Un channel manager détient les disponibilités ; le site l’interroge et ne décide jamais seul. Les réservations suivent une machine à états, les webhooks sont signés, et la base refuse les séjours qui se chevauchent.',
    },
    why: [
      { en: 'No double bookings, by design rather than by luck.', fr: 'Pas de double réservation, par conception et non par chance.' },
      { en: 'The owner keeps one calendar to manage.', fr: 'Le propriétaire n’a qu’un calendrier à gérer.' },
    ],
    tradeoff: { en: 'A monthly subscription for the client, chosen per pack.', fr: 'Un abonnement mensuel pour le client, choisi selon l’offre.' },
    skills: ['rest-apis', 'security', 'architecture'],
    projects: ['jardin-vittorio', 'dar-nila'],
  },
  'compressed-3d-assets': {
    title: { en: 'Compress every 3D asset', fr: 'Compresser chaque ressource 3D' },
    context: {
      en: 'Photoreal scanned props are beautiful and heavy: 21 MB for one restaurant table.',
      fr: 'Les objets scannés photoréalistes sont beaux et lourds : 21 Mo pour une seule table de restaurant.',
    },
    decision: {
      en: 'Run every model through glTF-Transform: meshopt geometry compression, WebP textures, 1024 px maximum.',
      fr: 'Passer chaque modèle dans glTF-Transform : compression de géométrie meshopt, textures WebP, 1024 px maximum.',
    },
    why: [{ en: '21 MB became 3.9 MB with no visible loss at web size.', fr: '21 Mo sont devenus 3,9 Mo sans perte visible à la taille web.' }],
    tradeoff: { en: 'Needs a small WebAssembly decoder, allowed explicitly in the CSP.', fr: 'Nécessite un petit décodeur WebAssembly, autorisé explicitement dans la CSP.' },
    skills: ['threejs', 'web-quality'],
    projects: ['vito-3d-showcase'],
  },
  'strict-csp': {
    title: { en: 'Strict CSP, no third-party scripts', fr: 'CSP stricte, aucun script tiers' },
    context: {
      en: 'Small business sites are often hacked through plugins and third-party tags, and tracking scripts cost speed and trust.',
      fr: 'Les sites de petites entreprises sont souvent piratés via des plugins et des balises tierces, et les scripts de suivi coûtent en vitesse et en confiance.',
    },
    decision: {
      en: 'Every site ships a Content-Security-Policy that only allows its own files: no inline scripts or styles, self-hosted fonts, no trackers, no cookies.',
      fr: 'Chaque site embarque une Content-Security-Policy qui n’autorise que ses propres fichiers : pas de script ni de style en ligne, polices auto-hébergées, aucun traceur, aucun cookie.',
    },
    why: [
      { en: 'An injected script has nowhere to load from.', fr: 'Un script injecté n’a nulle part d’où se charger.' },
      { en: 'No cookie banner needed, faster pages.', fr: 'Pas de bandeau cookies nécessaire, des pages plus rapides.' },
    ],
    tradeoff: { en: 'Some ready-made widgets cannot be used as they are.', fr: 'Certains widgets prêts à l’emploi ne peuvent pas être utilisés tels quels.' },
    skills: ['security', 'web-quality'],
    projects: ['jardin-vittorio', 'vito-3d-showcase', 'atelier-3d-configurator', 'orbit-saas-landing'],
  },
  'dependency-cooldown': {
    title: { en: 'A 14-day cooldown on dependencies', fr: 'Un délai de 14 jours sur les dépendances' },
    context: {
      en: 'Compromised npm packages are usually caught and pulled within days. The risk is installing one in that window.',
      fr: 'Les paquets npm compromis sont en général détectés et retirés en quelques jours. Le risque, c’est de les installer pendant cette fenêtre.',
    },
    decision: {
      en: 'Only install versions published at least 14 days ago, pin them exactly, install without lifecycle scripts, and audit in CI. Dependabot waits 14 days too.',
      fr: 'N’installer que des versions publiées depuis au moins 14 jours, les épingler exactement, installer sans scripts de cycle de vie, et auditer en CI. Dependabot attend aussi 14 jours.',
    },
    why: [{ en: 'Cheap protection against supply-chain attacks.', fr: 'Une protection peu coûteuse contre les attaques de la chaîne d’approvisionnement.' }],
    tradeoff: { en: 'Security fixes arrive two weeks later, unless I apply one by hand.', fr: 'Les correctifs de sécurité arrivent deux semaines plus tard, sauf si j’en applique un à la main.' },
    skills: ['security', 'cicd'],
    projects: ['vito-3d-showcase', 'atelier-3d-configurator', 'orbit-saas-landing'],
  },
  'transport-separation': {
    title: { en: 'Keep transport apart from business logic', fr: 'Séparer le transport de la logique métier' },
    context: {
      en: 'Managing many ServiceNow instances remotely means the same calls (auth, retries, logging) in many places.',
      fr: 'Administrer de nombreuses instances ServiceNow à distance implique les mêmes appels (authentification, reprises, journalisation) à beaucoup d’endroits.',
    },
    decision: {
      en: 'One transport layer (REST/OAuth, credential aliases) used by business services, orchestrated by Flow Designer. Each layer can change without touching the others.',
      fr: 'Une seule couche de transport (REST/OAuth, credential aliases) utilisée par les services métier, orchestrés par Flow Designer. Chaque couche peut évoluer sans toucher aux autres.',
    },
    why: [
      { en: 'No duplicated integration code.', fr: 'Aucun code d’intégration dupliqué.' },
      { en: 'Auth, audit and least privilege enforced in one place.', fr: 'Authentification, audit et moindre privilège appliqués à un seul endroit.' },
    ],
    tradeoff: { en: 'More upfront design before the first visible result.', fr: 'Plus de conception en amont avant le premier résultat visible.' },
    skills: ['servicenow-integration', 'architecture', 'security'],
    projects: ['sn-multi-instance'],
  },
  'ai-assisted-delivery': {
    title: { en: 'AI writes code, I own the result', fr: 'L’IA écrit du code, je réponds du résultat' },
    context: {
      en: 'AI coding agents make one engineer much faster, and they also make confident mistakes.',
      fr: 'Les agents de code IA rendent un ingénieur bien plus rapide, et font aussi des erreurs avec aplomb.',
    },
    decision: {
      en: 'I use Claude Code to implement. I write the brief, the architecture and the project rules; every change goes through my review, tests and security checks before it ships.',
      fr: 'J’utilise Claude Code pour implémenter. J’écris le brief, l’architecture et les règles du projet ; chaque changement passe par ma relecture, les tests et les contrôles de sécurité avant d’être livré.',
    },
    why: [
      { en: 'Small-team speed with engineering discipline.', fr: 'La vitesse d’une petite équipe avec une discipline d’ingénieur.' },
      { en: 'You know exactly how the work is made.', fr: 'Vous savez exactement comment le travail est fait.' },
    ],
    tradeoff: { en: 'Review takes real time; I do not skip it to go faster.', fr: 'La relecture prend du temps ; je ne la saute pas pour aller plus vite.' },
    skills: ['claude-code', 'security', 'git'],
    projects: ['jardin-vittorio', 'dar-nila', 'digital-brain'],
  },
  'partners-not-pretending': {
    title: { en: 'Partners instead of pretending', fr: 'Des partenaires plutôt que faire semblant' },
    context: {
      en: 'Clients sometimes need things I do not do at production level: running Kubernetes clusters, capturing a 3D scan on site.',
      fr: 'Les clients ont parfois besoin de choses que je ne fais pas au niveau production : exploiter des clusters Kubernetes, capturer un scan 3D sur place.',
    },
    decision: {
      en: 'A trusted specialist does that part; I write the brief, coordinate and guarantee the result, and I price it as partner work.',
      fr: 'Un spécialiste de confiance réalise cette partie ; j’écris le brief, je coordonne et je garantis le résultat, et je le facture comme du travail partenaire.',
    },
    why: [{ en: 'You get production quality and still one contact.', fr: 'Vous obtenez la qualité production avec un seul interlocuteur.' }],
    tradeoff: { en: 'Partner time costs more than doing it badly myself.', fr: 'Le temps d’un partenaire coûte plus cher que de mal le faire moi-même.' },
    skills: ['kubernetes', '3d-capture', 'cloud'],
    projects: ['bloc3', 'dar-nila', 'vito-3d-showcase'],
  },
} as const satisfies Record<string, Decision>;

export type DecisionId = keyof typeof decisions;
export const decisionIds = Object.keys(decisions) as DecisionId[];

export const decisionsForSkill = (id: SkillId) => decisionIds.filter((d) => (decisions[d].skills as readonly SkillId[]).includes(id));
export const decisionsForProject = (id: ProjectId) => decisionIds.filter((d) => (decisions[d].projects as readonly ProjectId[]).includes(id));
