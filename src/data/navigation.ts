/**
 * Landing page one-page : toute la navigation pointe vers des ancres de sections.
 * Les id correspondants doivent être posés sur les sections de la page.
 */
export const ancres = {
  domaines: '#domaines', // « Votre projet, votre secteur »
  services: '#services', // « Comment pouvons-nous vous aider ? »
  aPropos: '#a-propos', // « Un partenaire de chantier près de chez vous. »
  faq: '#faq', // « Vos questions, nos réponses »
  contact: '#contact', // Coordonnées et formulaire
} as const;

export type LienNav = {
  label: string;
  href: string;
};

export const navigationPrincipale: LienNav[] = [
  { label: 'À propos', href: ancres.aPropos },
  { label: 'Nos domaines', href: ancres.domaines },
  { label: 'Services', href: ancres.services },
];

export const domaines: LienNav[] = [
  { label: 'Secteur public & collectivités', href: ancres.domaines },
  { label: 'Construction & aménagements extérieurs', href: ancres.domaines },
  { label: 'Agriculture & industrie', href: ancres.domaines },
];

export const services: LienNav[] = [
  { label: 'Terrassement par aspiration', href: ancres.services },
  { label: 'Levage', href: ancres.services },
  { label: 'Voirie', href: ancres.services },
  { label: 'Convoi exceptionnel', href: ancres.services },
  { label: 'Démarches administratives', href: ancres.services },
];

export const contact = {
  telephone: '+352 55 10 10',
  telephoneHref: 'tel:+35255101010',
  email: 'info@ttllocation.lu',
  adresse: ['28, Rue du Baerendall', 'L-8212 Mamer, Luxembourg'],
  instagram: '@ttl_location',
  site: 'www.ttllocation.lu',
};

export type Langue = 'fr' | 'de' | 'en';

export const langues: { code: Langue; href: string }[] = [
  { code: 'fr', href: '/' },
  { code: 'de', href: '/de/' },
  { code: 'en', href: '/en/' },
];
