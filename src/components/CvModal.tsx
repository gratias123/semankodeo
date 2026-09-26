import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Printer, Copy, Check, MapPin, Phone, Mail, Award, Briefcase, GraduationCap, Wrench, Sparkles, Layout, Cpu, Globe } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textCv = `
CURRICULUM VITÆ — ${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Localisation : ${PERSONAL_INFO.location}
Téléphone : ${PERSONAL_INFO.phone}
Email : ${PERSONAL_INFO.email}
Contributeur Wikimedia Commons : ${PERSONAL_INFO.wikimediaUsername}

==================================================
COMPÉTENCES TECHNIQUES
==================================================

1. INFORMATIQUE & MAINTENANCE
- Diagnostic matériel et logiciel
- Maintenance préventive et corrective
- Installation et configuration des systèmes
- Réinstallation et préparation des postes
- Environnements Windows / Linux
- Réseaux et câblage RJ45
- Dépannage et assistance aux utilisateurs

2. UI/UX & DESIGN
- Conception d’interfaces utilisateur
- Wireframes et prototypes
- Mise en page et identité visuelle
- Outils : Figma, Photoshop, Canva, Adobe XD

3. INTELLIGENCE ARTIFICIELLE
- Prompt Engineering
- Conception et structuration de prompts
- Optimisation des requêtes pour outils IA
- Workflows assistés par IA
- Création de contenus avec l’IA

==================================================
EXPÉRIENCES PROFESSIONNELLES
==================================================

• INSTALLATION ET MAINTENANCE EN INFORMATIQUE (IMI) | 2023 – Présent
  Lycée Technique et Professionnel de Porto-Novo
  - Diagnostic des pannes matérielles et logicielles
  - Installation et réinstallation des systèmes
  - Maintenance et configuration des postes informatiques
  - Intervention sur les équipements et périphériques
  - Travaux pratiques de câblage et de réseaux RJ45

• MAINTENANCE ET RÉPARATION DE SMARTPHONES (GSM) | 2024 – Présent
  Atelier de maintenance & pratique personnelle
  - Diagnostic des pannes courantes
  - Démontage et remontage des appareils
  - Identification des composants défectueux
  - Intervention sur différentes générations de smartphones
  - Maintenance et réparation de premier niveau

• CRÉATION VISUELLE ET DESIGN GRAPHIQUE | 2023 – Présent
  GratiaLink / Travaux personnels et commandes
  - Création d’affiches et supports promotionnels
  - Conception d’identités visuelles
  - Création de visuels pour particuliers, étudiants et structures locales
  - Mise en page et préparation des supports graphiques
  - Utilisation de Photoshop, Canva et Figma

• CONCEPTION D’INTERFACES WEB ET UI/UX | 2024 – Présent
  Projets personnels et apprentissage continu
  - Conception d’interfaces web modernes et responsives
  - Création de wireframes et prototypes
  - Intégration de pages web avec HTML, CSS et JavaScript
  - Développement d’interfaces avec des technologies modernes (React, TypeScript, Tailwind)
  - Amélioration de l’expérience utilisateur et de l’ergonomie

==================================================
PROJETS & RÉALISATIONS
==================================================

• GRATIALINK — IDENTITÉ VISUELLE & SOLUTIONS GRAPHIQUES
  Rôle : Designer graphique & créateur de marque
  Conception d’identités visuelles et de supports graphiques pour différents projets et besoins de communication.
  Outils : Photoshop · Canva · Figma · Typographie

• PLATEFORME PORTFOLIO PROFESSIONNEL & GÉNÉRATEUR DE CV
  Rôle : Développeur Frontend & Concepteur UI
  Conception d’une plateforme web permettant de présenter un profil professionnel et de faciliter la création de CV.
  Technologies : React · TypeScript · Tailwind CSS · Vite

• ATELIER DE DIAGNOSTIC ET DE RÉPARATION GSM / INFORMATIQUE
  Rôle : Technicien de maintenance
  Mise en pratique des techniques de diagnostic, de maintenance et de réparation sur des équipements informatiques et mobiles.
  Compétences : Station à air chaud · Multimètre · Câblage RJ45 · Tournevis de précision

==================================================
CURSUS ACADÉMIQUE
==================================================

• LYCÉE TECHNIQUE ET PROFESSIONNEL DE PORTO-NOVO — BÉNIN
  Cursus de 3 ans — En cours
  Installations et Maintenance en Informatique (IMI)

• LYCÉE BÉHANZIN — 2023
  Brevet d’Études du Premier Cycle (BEPC)

==================================================
FORMATIONS & ATTESTATIONS
==================================================

- Formation pratique en maintenance informatique — 1 an
- Formation pratique en maintenance de smartphones (GSM)
- Formation en graphisme et création visuelle

==================================================
CERTIFICATIONS
==================================================

MTN Skills Academy :
- Compétences Internet pour une utilisation quotidienne
- L’IA responsable
- L’IA pour tous
- Recherche sur Internet et au-delà
- Les fondamentaux d’Internet

==================================================
LANGUES
==================================================
- Français
- Anglais
    `.trim();

    navigator.clipboard.writeText(textCv);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[94vh] flex flex-col rounded-2xl bg-[#0F172A] border border-[#3B82F6]/40 shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#0B2545] border-b border-slate-800 no-print shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Curriculum Vitæ Officiel
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-[#0F172A] hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              title="Copier le texte du CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#60A5FA]" />}
              <span className="hidden sm:inline">{copied ? "Copié !" : "Copier texte"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-lg transition-colors shadow-sm"
              title="Imprimer ou enregistrer en PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Container */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-slate-900/95 text-slate-100 space-y-8 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-700/80 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white print:text-black tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-[#60A5FA] print:text-blue-700 mt-1 uppercase tracking-wide">
                  {PERSONAL_INFO.title}
                </p>
                <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-slate-300 font-mono">
                  <Globe className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Contributeur Wikimedia Commons : <strong className="text-white font-bold">{PERSONAL_INFO.wikimediaUsername}</strong></span>
                </div>
              </div>

              <div className="text-xs space-y-1.5 text-slate-300 print:text-gray-700 sm:text-right shrink-0">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Profile summary */}
            <div className="mt-5 text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed bg-[#0B2545]/70 print:bg-transparent p-4 rounded-xl border border-slate-800 print:border-none">
              {PERSONAL_INFO.bio}
            </div>
          </div>

          {/* Section: Compétences Techniques */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
              <Cpu className="w-4 h-4 text-[#60A5FA]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#60A5FA] print:text-blue-700 font-mono">
                Compétences Techniques
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* 1. Informatique & Maintenance */}
              <div className="p-4 rounded-xl bg-[#0B2545]/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white print:text-black mb-2 text-xs font-mono uppercase tracking-wide text-[#60A5FA] flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#60A5FA]" />
                    Informatique & Maintenance
                  </h3>
                  <ul className="space-y-1.5 text-slate-300 print:text-gray-700 leading-relaxed list-disc list-inside">
                    <li>Diagnostic matériel et logiciel</li>
                    <li>Maintenance préventive et corrective</li>
                    <li>Installation et configuration des systèmes</li>
                    <li>Réinstallation et préparation des postes</li>
                    <li>Windows / Linux</li>
                    <li>Réseaux et câblage RJ45</li>
                    <li>Dépannage et assistance aux utilisateurs</li>
                  </ul>
                </div>
              </div>

              {/* 2. UI/UX & Design */}
              <div className="p-4 rounded-xl bg-[#0B2545]/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white print:text-black mb-2 text-xs font-mono uppercase tracking-wide text-[#60A5FA] flex items-center gap-1.5">
                    <Layout className="w-3.5 h-3.5 text-[#60A5FA]" />
                    UI/UX & Design
                  </h3>
                  <ul className="space-y-1.5 text-slate-300 print:text-gray-700 leading-relaxed list-disc list-inside">
                    <li>Conception d’interfaces utilisateur</li>
                    <li>Wireframes et prototypes</li>
                    <li>Mise en page et identité visuelle</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-800 font-mono text-[11px] text-[#93C5FD]">
                  Figma · Photoshop · Canva · Adobe XD
                </div>
              </div>

              {/* 3. Intelligence Artificielle */}
              <div className="p-4 rounded-xl bg-[#0B2545]/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white print:text-black mb-2 text-xs font-mono uppercase tracking-wide text-[#60A5FA] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                    Intelligence Artificielle
                  </h3>
                  <ul className="space-y-1.5 text-slate-300 print:text-gray-700 leading-relaxed list-disc list-inside">
                    <li>Prompt Engineering</li>
                    <li>Conception et structuration de prompts</li>
                    <li>Optimisation des requêtes pour outils IA</li>
                    <li>Workflows assistés par IA</li>
                    <li>Création de contenus avec l’IA</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Expériences Professionnelles */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
              <Briefcase className="w-4 h-4 text-[#60A5FA]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#60A5FA] print:text-blue-700 font-mono">
                Expériences Professionnelles
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              {/* Exp 1 */}
              <div className="p-4 rounded-xl bg-[#0B2545]/50 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    INSTALLATION ET MAINTENANCE EN INFORMATIQUE (IMI)
                  </h3>
                  <span className="font-mono text-xs text-[#60A5FA] bg-[#2563EB]/20 px-2 py-0.5 rounded border border-[#2563EB]/40 self-start sm:self-auto">
                    2023 – Présent
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-2.5">
                  Lycée Technique et Professionnel de Porto-Novo
                </div>
                <ul className="space-y-1 text-slate-300 print:text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Diagnostic des pannes matérielles et logicielles</li>
                  <li>Installation et réinstallation des systèmes</li>
                  <li>Maintenance et configuration des postes informatiques</li>
                  <li>Intervention sur les équipements et périphériques</li>
                  <li>Travaux pratiques de câblage et de réseaux RJ45</li>
                </ul>
              </div>

              {/* Exp 2 */}
              <div className="p-4 rounded-xl bg-[#0B2545]/50 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    MAINTENANCE ET RÉPARATION DE SMARTPHONES (GSM)
                  </h3>
                  <span className="font-mono text-xs text-[#60A5FA] bg-[#2563EB]/20 px-2 py-0.5 rounded border border-[#2563EB]/40 self-start sm:self-auto">
                    2024 – Présent
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-2.5">
                  Atelier de maintenance & pratique personnelle
                </div>
                <ul className="space-y-1 text-slate-300 print:text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Diagnostic des pannes courantes</li>
                  <li>Démontage et remontage des appareils</li>
                  <li>Identification des composants défectueux</li>
                  <li>Intervention sur différentes générations de smartphones</li>
                  <li>Maintenance et réparation de premier niveau</li>
                </ul>
              </div>

              {/* Exp 3 */}
              <div className="p-4 rounded-xl bg-[#0B2545]/50 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    CRÉATION VISUELLE ET DESIGN GRAPHIQUE
                  </h3>
                  <span className="font-mono text-xs text-[#60A5FA] bg-[#2563EB]/20 px-2 py-0.5 rounded border border-[#2563EB]/40 self-start sm:self-auto">
                    2023 – Présent
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-2.5">
                  GratiaLink / Travaux personnels et commandes
                </div>
                <ul className="space-y-1 text-slate-300 print:text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Création d’affiches et supports promotionnels</li>
                  <li>Conception d’identités visuelles</li>
                  <li>Création de visuels pour particuliers, étudiants et structures locales</li>
                  <li>Mise en page et préparation des supports graphiques</li>
                  <li>Utilisation de Photoshop, Canva et Figma</li>
                </ul>
              </div>

              {/* Exp 4 */}
              <div className="p-4 rounded-xl bg-[#0B2545]/50 border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="font-bold text-sm text-white print:text-black">
                    CONCEPTION D’INTERFACES WEB ET UI/UX
                  </h3>
                  <span className="font-mono text-xs text-[#60A5FA] bg-[#2563EB]/20 px-2 py-0.5 rounded border border-[#2563EB]/40 self-start sm:self-auto">
                    2024 – Présent
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-medium mb-2.5">
                  Projets personnels et apprentissage continu
                </div>
                <ul className="space-y-1 text-slate-300 print:text-gray-700 leading-relaxed list-disc list-inside">
                  <li>Conception d’interfaces web modernes et responsives</li>
                  <li>Création de wireframes et prototypes</li>
                  <li>Intégration de pages web avec HTML, CSS et JavaScript</li>
                  <li>Développement d’interfaces avec des technologies modernes</li>
                  <li>Amélioration de l’expérience utilisateur et de l’ergonomie</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Projets & Réalisations */}
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-2">
              <Award className="w-4 h-4 text-[#60A5FA]" />
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#60A5FA] print:text-blue-700 font-mono">
                Projets & Réalisations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {/* Projet 1 */}
              <div className="p-4 rounded-xl bg-[#0B2545]/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white print:text-black text-xs">
                    GRATIALINK — IDENTITÉ VISUELLE & SOLUTIONS GRAPHIQUES
                  </h3>
                  <div className="text-[#60A5FA] font-medium text-[11px] mt-0.5">
                    Designer graphique & créateur de marque
                  </div>
                  <p className="text-slate-300 print:text-gray-700 mt-2 leading-relaxed text-[11px]">
                    Conception d’identités visuelles et de supports graphiques pour différents projets et besoins de communication.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 font-mono text-[10px] text-slate-400">
                  <strong className="text-slate-300">Outils :</strong> Photoshop · Canva · Figma · Typographie
                </div>
              </div>

              {/* Projet 2 */}
              <div className="p-4 rounded-xl bg-[#0B2545]/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white print:text-black text-xs">
                    PLATEFORME PORTFOLIO PROFESSIONNEL & GÉNÉRATEUR DE CV
                  </h3>
                  <div className="text-[#60A5FA] font-medium text-[11px] mt-0.5">
                    Développeur Frontend & Concepteur UI
                  </div>
                  <p className="text-slate-300 print:text-gray-700 mt-2 leading-relaxed text-[11px]">
                    Conception d’une plateforme web permettant de présenter un profil professionnel et de faciliter la création de CV.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 font-mono text-[10px] text-slate-400">
                  <strong className="text-slate-300">Technologies :</strong> React · TypeScript · Tailwind CSS · Vite
                </div>
              </div>

              {/* Projet 3 */}
              <div className="p-4 rounded-xl bg-[#0B2545]/60 border border-slate-800 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-white print:text-black text-xs">
                    ATELIER DE DIAGNOSTIC ET DE RÉPARATION GSM / INFORMATIQUE
                  </h3>
                  <div className="text-[#60A5FA] font-medium text-[11px] mt-0.5">
                    Technicien de maintenance
                  </div>
                  <p className="text-slate-300 print:text-gray-700 mt-2 leading-relaxed text-[11px]">
                    Mise en pratique des techniques de diagnostic, de maintenance et de réparation sur des équipements informatiques et mobiles.
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800 font-mono text-[10px] text-slate-400">
                  <strong className="text-slate-300">Compétences :</strong> Station à air chaud · Multimètre · Câblage RJ45 · Tournevis de précision
                </div>
              </div>
            </div>
          </div>

          {/* Section: Cursus Académique & Formations & Certifications & Langues */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Cursus Académique */}
            <div>
              <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-1.5">
                <GraduationCap className="w-4 h-4 text-[#60A5FA]" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] print:text-blue-700 font-mono">
                  Cursus Académique
                </h2>
              </div>
              
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0B2545]/50 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white print:text-black">
                      LYCÉE TECHNIQUE ET PROFESSIONNEL DE PORTO-NOVO — BÉNIN
                    </h3>
                  </div>
                  <div className="text-[#60A5FA] font-mono text-[11px] mt-0.5">
                    Cursus de 3 ans — En cours
                  </div>
                  <p className="text-slate-300 print:text-gray-700 mt-1 font-medium text-xs">
                    Installations et Maintenance en Informatique (IMI)
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0B2545]/50 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white print:text-black">
                      LYCÉE BÉHANZIN
                    </h3>
                    <span className="font-mono text-[11px] text-[#60A5FA]">2023</span>
                  </div>
                  <p className="text-slate-300 print:text-gray-700 mt-1 font-medium text-xs">
                    Brevet d’Études du Premier Cycle (BEPC)
                  </p>
                </div>
              </div>

              {/* Formations & Attestations */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-1.5">
                  <Award className="w-4 h-4 text-[#60A5FA]" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] print:text-blue-700 font-mono">
                    Formations & Attestations
                  </h2>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#0B2545]/40 border border-slate-800 text-slate-200">
                    • Formation pratique en maintenance informatique — 1 an
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0B2545]/40 border border-slate-800 text-slate-200">
                    • Formation pratique en maintenance de smartphones (GSM)
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#0B2545]/40 border border-slate-800 text-slate-200">
                    • Formation en graphisme et création visuelle
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Langues */}
            <div>
              <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] print:text-blue-700 font-mono">
                  Certifications
                </h2>
              </div>
              
              <div className="p-4 rounded-xl bg-[#0B2545]/50 border border-slate-800 text-xs">
                <div className="font-bold text-white print:text-black text-sm mb-2.5 flex items-center justify-between">
                  <span>MTN Skills Academy</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/40">
                    Certifié
                  </span>
                </div>
                <ul className="space-y-1.5 text-slate-300 print:text-gray-700 list-disc list-inside leading-relaxed">
                  <li>Compétences Internet pour une utilisation quotidienne</li>
                  <li>L’IA responsable</li>
                  <li>L’IA pour tous</li>
                  <li>Recherche sur Internet et au-delà</li>
                  <li>Les fondamentaux d’Internet</li>
                </ul>
              </div>

              {/* Langues */}
              <div className="mt-5">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-1.5">
                  <Globe className="w-4 h-4 text-[#60A5FA]" />
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] print:text-blue-700 font-mono">
                    Langues
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#0B2545]/40 border border-slate-800 flex items-center justify-between">
                    <span className="font-bold text-white">Français</span>
                    <span className="text-slate-400 text-[11px]">Courant</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0B2545]/40 border border-slate-800 flex items-center justify-between">
                    <span className="font-bold text-white">Anglais</span>
                    <span className="text-slate-400 text-[11px]">Technique</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <div>
              Contributeur Wikimedia Commons : <strong className="text-white print:text-black font-mono">Semako64</strong>
            </div>
            <div>
              Portfolio & CV interactif vérifié · Porto-Novo, Bénin
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
