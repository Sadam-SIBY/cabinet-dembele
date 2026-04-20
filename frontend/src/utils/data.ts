import type { Service, Testimonial, NavItem, Stat, Article } from '../types'
import profilImg from '../assets/profil.png'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Accueil',      href: '/' },
  { label: 'Le Cabinet',   href: '/#cabinet' },
  { label: 'Services',     href: '/#services' },
  { label: 'Expertise',    href: '/#expertise' },
  { label: 'Actualités',   href: '/actualites' },
  { label: 'Contact',      href: '/#contact' },
]

export const STATS: Stat[] = [
  { value: '20+', label: 'Années d\'expérience' },
  { value: '5000+', label: 'Dossiers traités' },
  { value: '15+', label: 'Pays couverts' },
  { value: '98%', label: 'Satisfaction client' },
]

export const SERVICES: Service[] = [
  {
    id: 1,
    icon: 'Scale',
    title: 'Droit Immobilier',
    description: 'Authentification et sécurisation de toutes vos transactions immobilières, locales et transfrontalières.',
    details: ['Ventes & acquisitions', 'Hypothèques & sûretés réelles', 'Copropriété & divisions', 'Due diligence internationale'],
  },
  {
    id: 2,
    icon: 'Users',
    title: 'Droit de la Famille',
    description: 'Accompagnement juridique personnalisé pour tous les actes liés à la vie familiale et successorale.',
    details: ['Contrats de mariage', 'Successions & testaments', 'Donations & libéralités', 'Régimes matrimoniaux'],
  },
  {
    id: 3,
    icon: 'Briefcase',
    title: 'Droit des Affaires & OHADA',
    description: 'Conseil et rédaction d\'actes pour accompagner vos projets entrepreneuriaux dans l\'espace OHADA et au-delà.',
    details: ['Constitution de sociétés OHADA', 'Fusions & acquisitions', 'Pactes d\'associés', 'Restructurations'],
  },
  {
    id: 4,
    icon: 'Globe',
    title: 'Droit International',
    description: 'Expertise spécialisée dans les actes notariaux à dimension internationale et transfrontalière.',
    details: ['Légalisations & apostilles', 'Actes étrangers', 'Droit applicable', 'Coopération internationale'],
  },
  {
    id: 5,
    icon: 'FileCheck',
    title: 'Actes Authentiques',
    description: 'Rédaction et conservation de tous vos actes authentiques avec force exécutoire reconnue.',
    details: ['Procurations notariées', 'Reconnaissance de dettes', 'Actes sous seing privé', 'Archives & conservation'],
  },
  {
    id: 6,
    icon: 'Shield',
    title: 'Conseil Patrimonial',
    description: 'Stratégies sur mesure pour la protection et la transmission de votre patrimoine.',
    details: ['Optimisation fiscale', 'Fiducies & trusts', 'Transmission d\'entreprise', 'Planning successoral'],
  },
]

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: 'nomination-uinl-vice-president-2026',
    category: 'Distinction',
    date: '10 avril 2026',
    image: profilImg,
    title: 'Me Yacouba Dembélé nommé Vice-Président CAAF/UINL — Afrique de l\'Ouest II',
    excerpt: 'Le Ministère burkinabè des Affaires étrangères annonce officiellement la nomination de Maître Yacouba Dembélé au sein de la Commission des Affaires Africaines de l\'Union Internationale du Notariat Latin.',
    content: `Le 10 avril 2026, le Ministère burkinabè des Affaires étrangères a annoncé officiellement la nomination de Maître Yacouba Dembélé en qualité de Vice-Président de la Zone Afrique de l'Ouest II au sein de la Commission des Affaires Africaines (CAAF) de l'Union Internationale du Notariat Latin (UINL).

Cette nomination est décrite par le Ministère comme une reconnaissance qui «consacre à la fois le parcours professionnel de Maître Dembélé et la qualité de l'expertise notariale burkinabè» sur la scène juridique internationale.

L'UINL regroupe les notariats de droit civil latin de plus de 90 pays à travers le monde. La Commission des Affaires Africaines joue un rôle stratégique dans l'harmonisation des pratiques notariales sur le continent africain et le renforcement des liens entre les notariats membres.

Maître Dembélé, déjà Président de l'Ordre National des Notaires du Burkina Faso (ONBF), renforce ainsi son rayonnement institutionnel à l'échelle internationale, portant haut l'expertise notariale burkinabè.`,
  },
  {
    id: 2,
    slug: 'formation-lbc-ft-notaires-juillet-2025',
    category: 'Formation',
    date: 'Juillet 2025',
    title: 'L\'ONBF organise une session de formation sur la lutte anti-blanchiment',
    excerpt: 'Sous l\'impulsion de son Président, l\'Ordre National des Notaires du Burkina Faso a organisé une session de formation approfondie sur la lutte contre le blanchiment de capitaux et le financement du terrorisme.',
    content: `En juillet 2025, l'Ordre National des Notaires du Burkina Faso (ONBF), sous la présidence de Maître Yacouba Dembélé, a organisé une session de formation des notaires burkinabè sur la lutte anti-blanchiment de capitaux (LBC) et le financement du terrorisme (FT).

Cette initiative s'inscrit dans la démarche de conformité aux normes du Groupe d'Action Financière (GAFI), dont le Burkina Faso est membre via l'INTER-GOUVERNEMENTAL ACTION GROUP AGAINST MONEY LAUNDERING IN WEST AFRICA (GIABA).

La formation a réuni l'ensemble des notaires du pays autour des thématiques suivantes : identification et vérification des clients (KYC), déclaration de soupçon, vigilance renforcée pour les personnes politiquement exposées, et tenue des registres.

«Le notaire n'est pas un simple rédacteur d'actes, c'est aussi une sentinelle contre les dérives financières», a rappelé Maître Dembélé en ouverture de la session.`,
  },
  {
    id: 3,
    slug: 'chevalier-ordre-etalon',
    category: 'Distinction',
    date: '2024',
    title: 'Maître Dembélé élevé au rang de Chevalier de l\'Ordre de l\'Étalon',
    excerpt: 'Haute distinction nationale burkinabè, l\'Ordre de l\'Étalon a été décerné à Maître Yacouba Dembélé en reconnaissance de son engagement exceptionnel au service du droit et de la justice.',
    content: `Maître Yacouba Dembélé a reçu la distinction de Chevalier de l'Ordre de l'Étalon, l'une des plus hautes décorations civiles du Burkina Faso.

Cette distinction, qu'il a reçue avec humilité et placée sous le signe de «l'excellence et de la persévérance», vient couronner un parcours exemplaire au service du notariat burkinabè et de l'accès au droit pour tous les citoyens.

L'Ordre de l'Étalon est décerné par les plus hautes autorités de l'État burkinabè à des personnalités ayant rendu des services éminents à la nation dans leur domaine d'activité.

Maître Dembélé dédie cette distinction à l'ensemble des notaires burkinabè et aux équipes de l'Étude Me Yacouba DEMBELE, dont le travail quotidien contribue à la sécurité juridique des actes et à la confiance entre les citoyens.`,
  },
  {
    id: 4,
    slug: 'ohada-conaohada-representation',
    category: 'Actualité',
    date: '2024',
    title: 'Me Dembélé représente l\'Ordre des Notaires au sein de la CONAOHADA',
    excerpt: 'Membre actif de la Commission Nationale OHADA du Burkina Faso, Maître Dembélé contribue à l\'harmonisation du droit des affaires dans l\'espace OHADA en tant que représentant de l\'Ordre des Notaires.',
    content: `Maître Yacouba Dembélé siège au sein de la Commission Nationale OHADA du Burkina Faso (CONAOHADA) en qualité de représentant de l'Ordre National des Notaires du Burkina Faso.

L'OHADA — Organisation pour l'Harmonisation en Afrique du Droit des Affaires — regroupe 17 États membres et constitue le cadre juridique de référence pour les transactions commerciales et les investissements en Afrique subsaharienne.

À ce titre, Maître Dembélé participe à l'élaboration et à la mise à jour des textes normatifs applicables aux notaires dans l'espace OHADA, garantissant ainsi que le notariat burkinabè demeure à la pointe des évolutions législatives et réglementaires du droit des affaires africain.

Cette implication institutionnelle renforce la position du Burkina Faso comme acteur incontournable de l'intégration juridique africaine.`,
  },
  {
    id: 5,
    slug: 'lignes-directrices-lbc-ft-secteurs-non-financiers',
    category: 'Publication',
    date: '2024',
    title: 'Élaboration des lignes directrices LBC/FT pour les secteurs non-financiers',
    excerpt: 'Maître Dembélé participe au comité d\'élaboration des lignes directrices nationales en matière de lutte contre le blanchiment de capitaux dans les secteurs non-financiers désignés.',
    content: `Maître Yacouba Dembélé est membre du comité d'élaboration des lignes directrices en matière de lutte contre le blanchiment de capitaux, le financement du terrorisme et la prolifération des armes de destruction massive dans les secteurs non-financiers désignés (SNFD).

Ce travail normatif, mené en collaboration avec les autorités de régulation et les acteurs du secteur privé, vise à doter les professions juridiques — dont le notariat — d'un référentiel pratique et opérationnel pour remplir leurs obligations de vigilance.

Les lignes directrices abordent notamment : l'évaluation des risques par nature d'acte, les obligations de due diligence renforcée, la cartographie des risques sectoriels et les mécanismes de remontée d'information vers la Cellule Nationale de Traitement des Informations Financières (CENTIF).

Ce document de référence est destiné à l'ensemble des notaires, avocats, experts-comptables et agents immobiliers du Burkina Faso.`,
  },
  {
    id: 6,
    slug: 'enseignement-enaref-iam-esmi',
    category: 'Actualité',
    date: '2025',
    title: 'Me Dembélé, chargé de cours dans 7 établissements supérieurs de Ouagadougou',
    excerpt: 'Au-delà de sa pratique notariale, Maître Dembélé s\'engage dans la formation des futures générations de juristes burkinabè en dispensant des cours dans plusieurs grandes écoles de la capitale.',
    content: `Maître Yacouba Dembélé est chargé de cours dans sept établissements d'enseignement supérieur de Ouagadougou : l'École Nationale des Régies Financières (ENAREF), l'Institut Africain de Management (IAM), l'École Supérieure de Management et d'Informatique (ESMI), l'École Supérieure d'Administration et de Finance (ESAFE), le Centre d'Études et de Recherche en Comptabilité (CERCO), l'Institut des Technologies et du Management au Développement (ITMD) et l'ESPT School of Management.

Cet engagement pédagogique témoigne de sa conviction profonde : la qualité du droit en Afrique passe par la formation rigoureuse de ses futurs praticiens.

Ses interventions portent sur le droit des affaires, le droit notarial, le droit OHADA, le droit international privé et les mécanismes de la conformité financière.

«Transmettre le droit, c'est transmettre un outil de paix sociale et de développement économique», confie Maître Dembélé.`,
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'Maître Dembélé a accompagné notre acquisition immobilière avec un professionnalisme et une rigueur exemplaires. Une expertise notariale indispensable dans la sous-région.',
    author: 'Amadou Koné',
    country: 'Côte d\'Ivoire',
    flag: '🇨🇮',
  },
  {
    id: 2,
    quote: 'La maîtrise du droit OHADA et du droit international de ce cabinet nous a permis de finaliser une opération complexe avec sérénité et en toute sécurité juridique.',
    author: 'Ibrahim Touré',
    country: 'Sénégal',
    flag: '🇸🇳',
  },
  {
    id: 3,
    quote: 'Le cabinet de référence en Afrique de l\'Ouest pour les opérations notariales à dimension internationale. La rigueur du Président de l\'ONBF se ressent à chaque acte.',
    author: 'Mariam Sawadogo',
    country: 'Burkina Faso',
    flag: '🇧🇫',
  },
]
