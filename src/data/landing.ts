/**
 * Contenus de la landing page (Figma « TTL LOCATION — Landing page », 228:5047).
 * Les `valeur` de domaines / solutions sont partagées avec le formulaire de contact :
 * un clic sur une carte présélectionne l'option correspondante.
 */

export type Domaine = {
  valeur: string;
  titre: string;
  texte: string;
  /** Sous-titre court dans l'option du formulaire. */
  option: string;
  icone: string;
  image: string;
  imageAlt: string;
};

export const domainesLanding: Domaine[] = [
  {
    valeur: 'secteur-public',
    titre: 'Secteur public & collectivités',
    texte: 'Vous êtes une commune ou une administration : voirie, levage et démarches pour vos chantiers publics.',
    option: 'Communes, administrations',
    icone: '/ui/formulaire/icone-secteur-public.svg',
    image: "/assets/mairie.webp",
    imageAlt: "L'une des marie au Luxembourg",
  },
  {
    valeur: 'construction',
    titre: 'Construction & aménagements extérieurs',
    texte: 'Vous installez des piscines ou aménagez des extérieurs : levage, évacuation des terres et accès difficiles.',
    option: 'Piscinistes, aménagement extérieur',
    icone: '/ui/formulaire/icone-construction.svg',
    image: '/assets/RW_1097.webp',
    imageAlt: 'Camion-grue prêt à intervenir sur un chantier',
  },
  {
    valeur: 'agriculture-industrie',
    titre: 'Agriculture & industrie',
    texte: 'Vous gérez une exploitation ou un site industriel : levage de charges lourdes et transport hors gabarit.',
    option: 'Exploitations, sites industriels',
    icone: '/ui/formulaire/icone-agriculture.svg',
    image: '/assets/kerger.webp',
    imageAlt: 'Intervention d’une grue dans une exploitation agricole',
  },
];

/** Options de l'étape 1 du formulaire (domaines + « Autre demande »). */
export const optionsDomaine = [
  ...domainesLanding.map(({ valeur, titre, option, icone }) => ({ valeur, titre, texte: option, icone })),
  {
    valeur: 'autre',
    titre: 'Autre demande',
    texte: 'Particulier ou autre projet : dites-nous tout',
    icone: '/ui/formulaire/icone-autre.svg',
  },
];

export const chiffres = [
  { valeur: '1991', legende: 'Créée à Mamer, au Luxembourg' },
  { valeur: '+35', legende: 'Ans d’expérience à votre service' },
  { valeur: '52 m', legende: 'De hauteur pour vos levages' },
  { valeur: '100 t', legende: 'De capacité pour vos charges' },
];

export type Service = {
  valeur: string;
  titre: string;
  texte: string;
  image: string;
  imageAlt: string;
  /** Recadrage repris de Figma (img en absolu). Sans valeur : object-cover centré. */
  cadrage?: string;
  /** Option du formulaire (étape 2). */
  option: string;
};

export const servicesLanding: Service[] = [
  {
    valeur: 'aspiration',
    titre: 'Terrassement par aspiration',
    texte: 'Vous creusez près de réseaux souterrains ou devez vider une fosse ? Service d’aspiration au Luxembourg.',
    image: '/assets/Camion-aspirateur Tragelux sur chantier.webp',
    imageAlt: 'Camion-aspirateur Tragelux sur un chantier',
    option: 'Excavation et aspiration de matériaux',
  },
  {
    valeur: 'levage',
    titre: 'Levage',
    texte: 'Vous devez lever une charge lourde ? Camions-grues et grues de 14 à 52 m, jusqu’à 100 t.',
    image: '/assets/aerial.webp',
    imageAlt: 'Grue levant une structure vitrée, vue aérienne',
    cadrage: 'height:132.61%;left:0.18%;top:-5.9%;width:100%',
    option: 'Grues de 14 à 52 m, jusqu’à 100 t',
  },
  {
    valeur: 'voirie',
    titre: 'Voirie',
    texte: 'Vous intervenez sur la voirie ? Le matériel adapté à vos travaux.',
    image: '/assets/service-voirie.webp',
    imageAlt: 'Travaux de voirie dans une rue résidentielle',
    cadrage: 'height:189.09%;left:-63.23%;top:-50.56%;width:211.52%',
    option: 'Matériel pour travaux de voirie',
  },
  {
    valeur: 'convoi',
    titre: 'Convoi exceptionnel',
    texte: 'Votre machine dépasse le gabarit ? Transport exceptionnel jusqu’à votre chantier.',
    image: '/assets/service-convoi.webp',
    imageAlt: 'Camion transportant une pelleteuse en convoi exceptionnel',
    cadrage: 'height:149.81%;left:-14.45%;top:-16.95%;width:125.68%',
    option: 'Transport exceptionnel hors gabarit',
  },
  {
    valeur: 'demarches',
    titre: 'Démarches administratives',
    texte: 'Besoin d’une autorisation de transport exceptionnel ou de voirie ? Nous vous accompagnons.',
    image: '/assets/service-demarches.webp',
    imageAlt: 'Dossier TTL Location et liste de contrôle sur un bureau',
    option: 'Autorisations auprès des communes',
  },
];

/** Options de l'étape 2 (ordre Figma) + « Je ne sais pas encore ». */
export const optionsSolution = [
  ...['levage', 'aspiration', 'voirie', 'convoi', 'demarches'].map((v) => {
    const s = servicesLanding.find((x) => x.valeur === v)!;
    return { valeur: s.valeur, titre: s.titre, texte: s.option };
  }),
  { valeur: 'indecis', titre: 'Je ne sais pas encore', texte: 'Nous vous conseillons' },
];

export type Grue = {
  nom: string;
  type: string;
  hauteur: string;
  capacite: string;
  image: string;
  cadrage?: string;
};

export const grues: Grue[] = [
  {
    nom: 'Palfinger PK 165.002 TEC H',
    type: 'Sur camion',
    hauteur: '37 m de hauteur',
    capacite: '7,8 t max.',
    image: '/assets/2026-09-25-07-52-48-974.webp',
    cadrage: 'height:117.54%;left:-16.9%;top:-17.66%;width:156.84%',
  },
  {
    nom: 'Grove GMK 4080-1',
    type: 'Tout-terrain',
    hauteur: '51 m de hauteur',
    capacite: '80 t max.',
    image: '/assets/gmk4080.webp',
  },
  {
    nom: 'LTR-1100',
    type: 'Sur chenilles',
    hauteur: '52 m de hauteur',
    capacite: '100 t max.',
    image: '/assets/ltr1100.webp',
    cadrage: 'height:140.86%;left:0.15%;top:-40.78%;width:100%',
  },
];

export const garanties = [
  { titre: 'Rigueur', texte: 'Un parc d’équipements de pointe pour mener à bien vos projets les plus exigeants.' },
  { titre: 'Sécurité', texte: 'Votre opération conduite en toute sécurité, à chaque étape.' },
  { titre: 'Respect des délais', texte: 'Vos délais respectés, et un service sur mesure adapté à votre besoin.' },
];

export const faq = [
  {
    question: 'Comment obtenir un devis pour mon chantier ?',
    reponse:
      'Remplissez le formulaire de contact en 4 étapes ou appelez le +352 55 10 10. TTL Location vous répond par e-mail ou par téléphone.',
  },
  {
    question: 'Proposez-vous l’excavation par aspiration au Luxembourg ?',
    reponse:
      'Oui, depuis Mamer : terrassement et excavation par aspiration à proximité des réseaux, aspiration de terre et de gravats sur vos chantiers au Luxembourg.',
  },
  {
    question: 'Quelle grue pour ma charge ?',
    reponse:
      'Nos grues vont de 14 à 52 m de hauteur et jusqu’à 100 t. Chaque fiche a son abaque, et votre levage est validé avec vous.',
  },
  {
    question: 'Travaillez-vous pour les communes ?',
    reponse: 'Oui : voirie, levage et accompagnement dans vos démarches auprès des communes et des autorités.',
  },
  {
    question: 'Les grues sont-elles louées avec un opérateur ?',
    reponse:
      'Oui. Nos grues sont louées avec un opérateur TTL Location, qui manœuvre la grue en toute sécurité sur votre chantier.',
  },
];

export const horaires = ['Du lundi au vendredi', '8h – 12h et 13h – 17h'];
