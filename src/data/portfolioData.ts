import { ProjectItem, ToolItem, EducationItem, TrainingItem, FaqItem } from '../types';
import imgProjectCvPlatform from '../assets/images/project_cv_platform_web.jpg';
import imgProjectPromptAi from '../assets/images/project_prompt_ai_neural.jpg';
import imgProjectGratialink from '../assets/images/project_gratialink_branding.jpg';
import imgProjectHardwareGsm from '../assets/images/competence_gsm_1790422421313.jpg';

export const PERSONAL_INFO = {
  name: "SEMAKO Déo-Gratias",
  shortName: "Déo-Gratias",
  title: "Technicien Informatique · UI/UX Designer · Prompt Engineer",
  roles: [
    "Technicien Informatique",
    "UI/UX Designer",
    "Prompt Engineer"
  ],
  bio: "Profil polyvalent alliant rigueur technique matérielle, conception d'interfaces ergonomiques et maîtrise opérationnelle de l'intelligence artificielle générative. Diplômé en Installations et Maintenance Informatique (IMI), je transforme des besoins complexes en solutions fonctionnelles, fluides et reproductibles.",
  location: "Porto-Novo, Bénin",
  email: "semakodeogratias@gmail.com",
  phone: "+229 01 64 69 06 82",
  phoneRaw: "+2290164690682",
  whatsappUrl: "https://wa.me/2290164690682?text=Bonjour%20SEMAKO%20D%C3%A9o-Gratias,%20j'ai%20d%C3%A9couvert%20votre%20portfolio%20et%20souhaite%20%C3%A9changer%20avec%20vous.",
  facebookUrl: "https://www.facebook.com",
  wikimediaUrl: "https://commons.wikimedia.org/wiki/Special:Contributions/Semako64",
  wikimediaUsername: "Semako64",
};

export const DOMAINS = [
  {
    number: "01",
    title: "Technique Informatique & Maintenance",
    subtitle: "Hardware, Réseaux & Systèmes",
    description: "Diagnostic méthodique, maintenance préventive et curative des parcs informatiques et des terminaux mobiles GSM.",
    skills: [
      "Diagnostic matériel et logiciel",
      "Maintenance informatique & GSM",
      "Micro-soudure et composants électroniques",
      "Câblage RJ45 & notions de réseaux",
      "Installation d'OS, Boot & configuration UEFI"
    ],
    highlight: "Formation IMI de 3 ans"
  },
  {
    number: "02",
    title: "UI/UX & Design Graphique",
    subtitle: "Interfaces, Identité & Prototypage",
    description: "Création d'interfaces utilisateur modernes et centrées sur l'utilisateur, renforcées par une identité visuelle soignée.",
    skills: [
      "Design d'interfaces (UI) & Ergonomie (UX)",
      "Prototypage interactif sous Figma",
      "Création graphique & retouche (Photoshop, Canva)",
      "Hiérarchie typographique & composition visuelle",
      "Développement Frontend (React, TypeScript, Tailwind)"
    ],
    highlight: "Conception centrée utilisateur"
  },
  {
    number: "03",
    title: "Prompt Engineering & Solutions IA",
    subtitle: "Workflows, Automatisation & Scripts",
    description: "Conception et optimisation de prompts structurés pour exploiter le plein potentiel des modèles d'IA générative dans des flux réels.",
    skills: [
      "Conception de prompts structurés et modulaires",
      "Optimisation itérative et affinage d'instructions",
      "Workflows de génération de contenus textuels et visuels",
      "Automatisation de tâches et structuration de données",
      "Maîtrise opérationnelle (ChatGPT, Gemini, Claude)"
    ],
    highlight: "Résultats mesurables et reproductibles"
  }
];

export const KEY_METRICS = [
  {
    value: "3 Ans",
    label: "Formation IMI",
    detail: "Installations & Maintenance Informatique"
  },
  {
    value: "3 Pôles",
    label: "Synergie Unique",
    detail: "Hardware · UI/UX · Prompt IA"
  },
  {
    value: "4+",
    label: "Projets & Ateliers",
    detail: "Réalisations concrètes et documentées"
  },
  {
    value: "100%",
    label: "Rigueur Opérationnelle",
    detail: "Diagnostic fiable et exécution soignée"
  }
];

export const DIFFERENTIATORS = [
  {
    title: "Rigueur & Diagnostic Précis",
    description: "Chaque problème est analysé avec méthode, qu'il s'agisse d'une panne de carte mère GSM ou d'un flux d'interaction UX."
  },
  {
    title: "Du Concret, Zéro Superflu",
    description: "Priorité à l'efficacité opérationnelle : des interfaces lisibles, des réparations durables et des prompts directement exploitables."
  },
  {
    title: "Synergie Hardware, Web & IA",
    description: "Une capacité rare à relier l'infrastructure technique physique, la conception d'applications modernes et la productivité par l'IA."
  },
  {
    title: "Polyvalence Terrain",
    description: "Aussi à l'aise avec une station à air chaud et un multimètre qu'avec du code React, Figma ou une suite de prompts avancés."
  },
  {
    title: "Veille & Expérimentation Continue",
    description: "Exploration constante des avancées en intelligence artificielle générative et des technologies du web contemporain."
  },
  {
    title: "Esprit Contributif & Partage",
    description: "Engagement actif dans la documentation libre et le partage de connaissances en tant que contributeur Wikimedia Commons."
  }
];

export const TOOLS: ToolItem[] = [
  // Primary (Featured first as requested: ~4-6 clean tools)
  {
    name: "Figma",
    category: "design",
    categoryLabel: "Design & UI/UX",
    description: "Wireframing, prototypage d'interfaces et design system",
    isPrimary: true
  },
  {
    name: "VS Code & React",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Édition de code TypeScript, Tailwind CSS et composants réactifs",
    isPrimary: true
  },
  {
    name: "Station GSM & Multimètre",
    category: "hardware",
    categoryLabel: "Maintenance",
    description: "Diagnostic de circuits, mesures électriques et micro-soudure",
    isPrimary: true
  },
  {
    name: "ChatGPT & Gemini",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    description: "Conception de prompts structurés, analyse et workflows",
    isPrimary: true
  },
  // Secondary / Additional tools shown when "Voir plus" is clicked
  {
    name: "TypeScript",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Typage statique robuste pour applications web modernes",
    isPrimary: false
  },
  {
    name: "Tailwind CSS",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Stylisation utilitaire rapide, responsive et modulaire",
    isPrimary: false
  },
  {
    name: "Vite",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Environnement d'assemblage rapide pour applications front-end",
    isPrimary: false
  },
  {
    name: "HTML5 & CSS3",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Structuration sémantique accessible et styles modernes",
    isPrimary: false
  },
  {
    name: "JavaScript & Bootstrap",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Dynamisme côté client et grilles responsives",
    isPrimary: false
  },
  {
    name: "GitHub & GitHub Pages",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Contrôle de version, collaboration et hébergement",
    isPrimary: false
  },
  {
    name: "Python",
    category: "dev",
    categoryLabel: "Développement Web",
    description: "Scripts de traitement et bases de programmation",
    isPrimary: false
  },
  {
    name: "Adobe Photoshop",
    category: "design",
    categoryLabel: "Design & UI/UX",
    description: "Création graphique matricielle, retouche et photomontage",
    isPrimary: false
  },
  {
    name: "Canva",
    category: "design",
    categoryLabel: "Design & UI/UX",
    description: "Conception rapide de supports marketing et visuels",
    isPrimary: false
  },
  {
    name: "Photopea",
    category: "design",
    categoryLabel: "Design & UI/UX",
    description: "Éditeur graphique en ligne pour retouches rapides",
    isPrimary: false
  },
  {
    name: "Adobe XD",
    category: "design",
    categoryLabel: "Design & UI/UX",
    description: "Conception d'écrans et maquettage interactif",
    isPrimary: false
  },
  {
    name: "Câblage RJ45 & Réseau",
    category: "hardware",
    categoryLabel: "Maintenance",
    description: "Sertissage, tests de connectivité et configuration LAN",
    isPrimary: false
  },
  {
    name: "Outils de précision & Tournevis",
    category: "hardware",
    categoryLabel: "Maintenance",
    description: "Démontage sécurisé de terminaux mobiles et ordinateurs",
    isPrimary: false
  },
  {
    name: "Claude (Anthropic)",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    description: "Raisonnement poussé, écriture de documentation et synthèses",
    isPrimary: false
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "portfolio-cv-platform",
    title: "Plateforme Portfolio Professionnel & Générateur de CV",
    category: "web",
    categoryLabel: "Développement & UI/UX",
    role: "Développeur Frontend & Concepteur UI",
    shortDescription: "Application web responsive dédiée à la valorisation de compétences et à la génération de fiches CV professionnelles.",
    fullDescription: "Conception complète de l'architecture d'interface et implémentation front-end d'un outil permettant aux professionnels de gérer leur profil, d'organiser leurs réalisations et d'exporter un CV propre et prêt pour le recrutement.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "UI/UX Design"],
    image: imgProjectCvPlatform,
    highlights: [
      "Interface réactive pensée selon les principes d'ergonomie UI/UX",
      "Architecture modulaire et typée sous TypeScript",
      "Génération et prévisualisation instantanée de CV imprimable",
      "Performance optimisée avec Vite et styles Tailwind CSS"
    ]
  },
  {
    id: "prompt-engineering-solutions",
    title: "Prompt Engineering & Solutions IA",
    category: "ai",
    categoryLabel: "Intelligence Artificielle",
    role: "Prompt Engineer",
    shortDescription: "Conception de bibliothèques de prompts structurés, scripts et workflows assistés par IA pour la production de résultats fiables.",
    fullDescription: "Mise en place de protocoles et de gabarits d'instructions structurées pour les modèles de langage (LLM). L'objectif est d'éliminer les hallucinations, de normaliser les formats de sortie et d'automatiser la génération de contenus textuels, analytiques et graphiques.",
    technologies: ["ChatGPT", "Gemini", "Claude", "AI Workflows", "Prompt Architecture"],
    image: imgProjectPromptAi,
    highlights: [
      "Création de prompts à contraintes strictes et formats normalisés",
      "Itérations et tests comparatifs entre modèles d'IA",
      "Automatisation de tâches rédactionnelles et d'analyse documentaire",
      "Guides d'utilisation et scripts reproductibles pour tiers"
    ]
  },
  {
    id: "gratialink-branding",
    title: "GratiaLink — Identité Visuelle & Solutions Graphiques",
    category: "design",
    categoryLabel: "Identité de Marque & Graphisme",
    role: "Designer Graphique & Créateur de Marque",
    shortDescription: "Direction artistique, création d'univers de marque et déclinaison de supports visuels cohérents.",
    fullDescription: "Projet centré sur la définition d'une identité graphique moderne : création de logos, choix typographiques, charte de couleurs, et déclinaisons print & digital pour renforcer l'impact visuel et la mémorisation.",
    technologies: ["Adobe Photoshop", "Canva", "Figma", "Typographie", "Charte Visuelle"],
    image: imgProjectGratialink,
    highlights: [
      "Création d'un logo mémorable et déclinable sur tous formats",
      "Élaboration d'une palette chromatique harmonieuse",
      "Production de gabarits pour réseaux sociaux et supports physiques",
      "Application stricte des règles de composition visuelle"
    ]
  },
  {
    id: "hardware-gsm-workshop",
    title: "Atelier Diagnostic & Réparation GSM / Informatique",
    category: "hardware",
    categoryLabel: "Maintenance & Électronique",
    role: "Technicien de Maintenance",
    shortDescription: "Interventions matérielles et logicielles, micro-soudure, câblage réseau et remise en état d'équipements informatiques et mobiles.",
    fullDescription: "Pratique opérationnelle en atelier : détection de pannes au multimètre, réfection de pistes par micro-soudure, maintenance de composants informatiques, réinstallation de systèmes d'exploitation et confection de câblage RJ45 certifié.",
    technologies: ["Station à air chaud", "Multimètre digital", "Micro-soudure", "Câblage RJ45", "Boot UEFI"],
    image: imgProjectHardwareGsm,
    highlights: [
      "Diagnostic méthodique de pannes d'alimentation et de circuits",
      "Remplacement de composants CMS via station à air chaud",
      "Câblage structuré RJ45 et vérification de continuité",
      "Installation, formatage et sécurisation d'environnements OS"
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: "3 Ans d'études techniques",
    degree: "Installations et Maintenance en Informatique (IMI)",
    institution: "Lycée Technique et Professionnel de Porto-Novo",
    location: "Porto-Novo, Bénin",
    description: "Cursus technique approfondi couvrant la maintenance préventive et curative, les systèmes d'exploitation, l'architecture des ordinateurs, les réseaux et les bases de l'électronique.",
    points: [
      "Systèmes informatiques, boot, BIOS et UEFI",
      "Réseaux informatiques, architectures et câblage RJ45",
      "Électronique et électricité de base appliquées à l'informatique",
      "Bases de données (SIGD / SGBD) et analyse système",
      "Mathématiques appliquées à l'IMI et logiciels d'application"
    ]
  },
  {
    period: "2023",
    degree: "Brevet d'Études du Premier Cycle (BEPC)",
    institution: "Lycée Behanzin",
    location: "Porto-Novo, Bénin",
    description: "Parcours secondaire général entamé dès la classe de 6e, sanctionné par l'obtention du diplôme national du BEPC en 2023.",
    points: [
      "Formation académique générale solide",
      "Développement de la rigueur de raisonnement et de synthèse"
    ]
  }
];

export const COMPLEMENTARY_TRAININGS: TrainingItem[] = [
  {
    title: "Informatique Bureautique",
    duration: "1 An",
    description: "Maîtrise approfondie des outils bureautiques essentiels pour l'administration et la gestion documentaire.",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint", "Mise en page de documents"]
  },
  {
    title: "Maintenance GSM & Téléphonie",
    description: "Formation pratique au démontage, au test électrique, à la micro-soudure et au remplacement de composants de smartphones.",
    skills: ["Diagnostic GSM", "Micro-soudure", "Électronique de base", "Station à air chaud"]
  },
  {
    title: "Graphisme & Conception Visuelle",
    description: "Apprentissage des fondamentaux du design visuel, de la théorie des couleurs et de la composition publicitaire.",
    skills: ["Adobe Photoshop", "Photomontage", "Identité graphique", "Canva"]
  },
  {
    title: "Sérigraphie",
    description: "Formation certifiante aux techniques d'impression sur supports textiles et supports dérivés.",
    skills: ["Impression sérigraphique", "Préparation des cadres", "Techniques d'encrage"],
    hasAttestation: true
  }
];

export const TECHNICAL_DOMAINS_STUDIED = [
  "Logiciels d'application",
  "Mathématiques appliquées à l'IMI",
  "Réseaux informatiques",
  "Bases de données (SIGD / SGBD)",
  "Analyse système",
  "Électronique de base",
  "Électricité de base",
  "Systèmes informatiques",
  "Boot / UEFI"
];

export const FAQS: FaqItem[] = [
  {
    question: "Pourquoi combiner la technique informatique, l'UI/UX et le Prompt Engineering ?",
    answer: "Cette triple casquette crée un pont direct entre l'infrastructure physique (hardware), l'expérience utilisateur (design) et l'accélération numérique (IA). Je comprends aussi bien la contrainte technique de la machine que le besoin psychologique de l'utilisateur final et l'optimisation par l'IA."
  },
  {
    question: "Quels types de missions ou opportunités vous intéressent particulièrement ?",
    answer: "Je suis ouvert aux postes et missions en maintenance informatique & réseaux, conception d'interfaces UI/UX, développement frontend web, création d'identités graphiques, ainsi qu'au consulting et à l'intégration de workflows assistés par IA."
  },
  {
    question: "Où êtes-vous basé et êtes-vous disponible pour travailler à distance ?",
    answer: "Je réside à Porto-Novo au Bénin. Pour les missions de design UI/UX, développement web, Prompt Engineering et graphisme, je travaille parfaitement à distance avec les équipes internationales. Pour la maintenance matérielle sur site, j'interviens au Bénin."
  },
  {
    question: "Comment puis-je vous contacter pour une proposition ou un entretien ?",
    answer: "Vous pouvez me joindre directement par WhatsApp (+229 01 64 69 06 82) pour une réponse immédiate, par email à semakodeogratias@gmail.com, ou en consultant mon CV complet directement sur cette page."
  }
];
