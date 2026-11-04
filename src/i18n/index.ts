/** Two locales. English lives at `/`, French at `/fr/`. */
export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

/** A string written in both languages. Every user-facing text in `src/data` uses this type. */
export type T = Readonly<Record<Locale, string>>;

export const tr = (text: T, locale: Locale) => text[locale];

/** Periods are written like `08/2025 — now`; only the word "now" needs translating. */
export const period = (p: string, locale: Locale) => (locale === 'fr' ? p.replace('now', 'aujourd’hui') : p);

/** Organisation labels that are plain words rather than names. */
const orgFr: Record<string, string> = { Independent: 'Indépendant', Personal: 'Personnel', Coursework: 'Travaux universitaires' };
export const org = (o: string, locale: Locale) => (locale === 'fr' ? orgFr[o] ?? o : o);

/** Prefix an absolute site path with the locale (`/skills/x/` → `/fr/skills/x/`). */
export const href = (locale: Locale, path: string) => (locale === 'en' ? path : `/fr${path}`);

/** Same page in the other language, from the current pathname. */
export const altPath = (pathname: string): Record<Locale, string> => {
  const base = pathname.replace(/^\/fr(?=\/)/, '') || '/';
  return { en: base, fr: `/fr${base}` };
};

export const ui = {
  en: {
    skip: 'Skip to content',
    nav: { work: 'Work', lab: 'Lab', skills: 'Skills', servicenow: 'ServiceNow', how: 'How I work', contact: 'Contact' },
    langName: 'Français',
    langSwitch: 'Lire en français',
    palette: 'Jump to… (work, skills, github)',
    paletteLabel: 'Quick navigation',
    openPalette: 'Open quick navigation',
    footer: 'Built with Astro, TypeScript & Three.js. No trackers, no cookies.',
    backTop: 'Back to top ↑',
    home: 'Home',
    caseStudy: 'Case study →',
    liveDemo: 'Live demo ↗',
    source: 'Source',
    viewRepo: 'View repository ↗',
    readMore: 'Details →',
    emailMe: 'Email me',
    emailSubject: 'Project inquiry',
    startProject: 'Start a project',
    letsTalk: "Let's talk",
  },
  fr: {
    skip: 'Aller au contenu',
    nav: { work: 'Réalisations', lab: 'Lab', skills: 'Compétences', servicenow: 'ServiceNow', how: 'Méthode', contact: 'Contact' },
    langName: 'English',
    langSwitch: 'Read in English',
    palette: 'Aller à… (réalisations, compétences, github)',
    paletteLabel: 'Navigation rapide',
    openPalette: 'Ouvrir la navigation rapide',
    footer: 'Construit avec Astro, TypeScript et Three.js. Aucun traceur, aucun cookie.',
    backTop: 'Haut de page ↑',
    home: 'Accueil',
    caseStudy: 'Étude de cas →',
    liveDemo: 'Démo en ligne ↗',
    source: 'Code',
    viewRepo: 'Voir le dépôt ↗',
    readMore: 'Détails →',
    emailMe: "M'écrire",
    emailSubject: 'Demande de projet',
    startProject: 'Démarrer un projet',
    letsTalk: 'Parlons-en',
  },
} as const;
