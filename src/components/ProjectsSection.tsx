import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ArrowUpRight, X, Code, Cpu, Palette, Wrench, Layers, GitBranch, Terminal, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface InDevelopmentProject {
  id: string;
  title: string;
  clientContext: string;
  phase: string;
  category: 'web' | 'ai' | 'design' | 'hardware';
  categoryLabel: string;
  objective: string;
  deliverables: string[];
  stack: string[];
}

const IN_DEVELOPMENT_PROJECTS: InDevelopmentProject[] = [
  {
    id: "gsm-diag-workbench",
    title: "Guide Technique Interactif & Base de Diagnostic GSM / Matériel",
    clientContext: "Usage atelier & support technique",
    phase: "Phase 2 : Référencement des protocoles de mesures",
    category: "hardware",
    categoryLabel: "Maintenance & Électronique",
    objective: "Standardiser et accélérer les diagnostics de cartes mères mobiles et PC en répertoriant les points de test, lignes de tension et procédures de micro-soudure éprouvées.",
    deliverables: [
      "Arbre de décision pour pannes de charge, court-circuit et rétroéclairage",
      "Fiches de valeurs de référence multimètre (mode diode et continuité)",
      "Procédures illustrées de remplacement CMS à l'air chaud"
    ],
    stack: ["Multimètre", "Station Air Chaud", "Documentation Technique", "Schémas CMS"]
  },
  {
    id: "ai-prompt-eval-matrix",
    title: "Matrice d'Évaluation & Benchmark de Prompts pour LLM",
    clientContext: "R&D & Ingénierie de Prompts",
    phase: "Phase 3 : Tests comparatifs et calibration de sortie",
    category: "ai",
    categoryLabel: "Prompt Engineering & IA",
    objective: "Mettre en place un cadre rigoureux pour concevoir, tester et valider la fiabilité de prompts métier multi-modèles (réduction du taux d'hallucination, respect de formats stricts JSON/Markdown).",
    deliverables: [
      "Jeux de prompts structurés pour l'analyse et la synthèse technique",
      "Protocole de tests de robustesse face aux requêtes ambiguës",
      "Templates d'instructions système réutilisables"
    ],
    stack: ["ChatGPT (OpenAI)", "Gemini (Google)", "Claude (Anthropic)", "System Prompting"]
  },
  {
    id: "web-portal-identity",
    title: "Interface Web Responsive & Système de Présentation de Services",
    clientContext: "Projet client en cours de cadrage",
    phase: "Phase 1 : Maquettage Figma & Architecture React",
    category: "web",
    categoryLabel: "Développement Web & UI",
    objective: "Développer une plateforme web performante et accessible permettant aux structures de services de présenter leur catalogue d'interventions avec réservation et devis clairs.",
    deliverables: [
      "Maquettes interactives haute fidélité sous Figma",
      "Composants modulaires et réutilisables avec TypeScript",
      "Optimisation SEO et temps de chargement Lighthouse 95+"
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Figma", "Vite"]
  }
];

interface ProjectsSectionProps {
  selectedCategory: 'all' | 'web' | 'ai' | 'design' | 'hardware';
  onCategoryChange: (cat: 'all' | 'web' | 'ai' | 'design' | 'hardware') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [projectStatusView, setProjectStatusView] = useState<'completed' | 'in_progress'>('completed');

  const filterTabs = [
    { id: 'all', label: 'Toutes les réalisations' },
    { id: 'web', label: 'Développement Web' },
    { id: 'ai', label: 'Prompt Engineering & IA' },
    { id: 'design', label: 'UI/UX & Identité' },
    { id: 'hardware', label: 'Maintenance & GSM' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'web': return Code;
      case 'ai': return Cpu;
      case 'design': return Palette;
      case 'hardware': return Wrench;
      default: return Layers;
    }
  };

  return (
    <section id="realisations" className="py-20 md:py-28 bg-[#0B2545] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#3B82F6]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider mb-3 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            Portfolio & Travaux Techniques
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white text-balance">
            Projets & <span className="text-[#3B82F6] italic font-serif">Réalisations</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 text-balance">
            Consultez les projets aboutis et livrés ainsi que les chantiers techniques et R&D actuellement en cours d'élaboration.
          </p>
        </div>

        {/* Onglet Principal Type de Projets (Aboutis vs En cours) façon Executive / Senior */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#0F172A] border border-[#2563EB]/40 rounded-xl shadow-lg">
            <button
              onClick={() => setProjectStatusView('completed')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                projectStatusView === 'completed'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" />
              <span>Réalisations Finalisées ({PROJECTS.length})</span>
            </button>
            <button
              onClick={() => setProjectStatusView('in_progress')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                projectStatusView === 'in_progress'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GitBranch className="w-4 h-4 text-[#60A5FA]" />
              <span>En cours d'élaboration ({IN_DEVELOPMENT_PROJECTS.length})</span>
            </button>
          </div>
        </div>

        {/* VUE 1 : PROJETS FINALISÉS */}
        {projectStatusView === 'completed' && (
          <div>
            {/* Filter Tabs par catégorie */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onCategoryChange(tab.id as any)}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                    selectedCategory === tab.id
                      ? 'bg-[#2563EB] text-white shadow-lg shadow-[#2563EB]/30'
                      : 'bg-[#0F172A] text-slate-300 hover:text-white border border-[#3B82F6]/20 hover:border-[#3B82F6]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {filteredProjects.map((project) => {
                const Icon = getCategoryIcon(project.category);
                return (
                  <div
                    key={project.id}
                    className="group flex flex-col rounded-xl bg-[#0F172A]/90 border border-[#3B82F6]/25 hover:border-[#60A5FA]/60 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Project Image Banner */}
                    <div
                      className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900 cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

                      {/* Category Pill */}
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0F172A]/90 border border-[#3B82F6]/40 text-[11px] font-semibold text-[#60A5FA] flex items-center gap-1.5 backdrop-blur-md">
                        <Icon className="w-3 h-3 text-[#2563EB]" />
                        <span>{project.categoryLabel}</span>
                      </div>

                      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-[#0F172A]/90 text-white hover:bg-[#2563EB] transition-colors border border-slate-700">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Project Body */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#60A5FA] transition-colors leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] text-slate-300 mt-2 leading-relaxed">
                          {project.shortDescription}
                        </p>

                        {/* Tech tags */}
                        <div className="mt-3.5 flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 text-[10px] font-medium text-slate-300 bg-[#0B2545] border border-slate-800 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-xs font-bold text-[#60A5FA] hover:text-white flex items-center gap-1.5 group-hover:underline"
                        >
                          <span>Consulter la fiche détaillée</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* VUE 2 : PROJETS EN COURS DE CONCEPTION (Format Dossier Technique / Recruteur) */}
        {projectStatusView === 'in_progress' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="p-4 sm:p-5 rounded-xl bg-[#0F172A] border border-[#2563EB]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#60A5FA] shrink-0">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Chantiers & R&D en Cours</h4>
                  <p className="text-xs text-slate-300">
                    Ces projets illustrent la démarche méthodologique, la rigueur d'ingénierie et l'apprentissage continu.
                  </p>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#60A5FA] bg-[#0B2545] px-3 py-1.5 rounded-md border border-slate-800 shrink-0">
                Statut : Actifs & Documentés
              </span>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {IN_DEVELOPMENT_PROJECTS.map((inProg) => {
                const Icon = getCategoryIcon(inProg.category);

                return (
                  <div
                    key={inProg.id}
                    className="p-6 sm:p-7 rounded-2xl bg-[#0F172A]/90 border border-slate-800 hover:border-[#60A5FA]/60 shadow-xl transition-all duration-300 flex flex-col gap-5"
                  >
                    {/* Top Meta */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 text-xs font-semibold text-[#60A5FA] flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{inProg.categoryLabel}</span>
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          • {inProg.clientContext}
                        </span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        {inProg.phase}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {inProg.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {inProg.objective}
                      </p>
                    </div>

                    {/* Livrables & Étapes validées */}
                    <div className="p-4 rounded-xl bg-[#0B2545]/70 border border-slate-800">
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA]" />
                        Objectifs & Livrables en cours :
                      </p>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {inProg.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stack & Environnement */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {inProg.stack.map((s) => (
                          <span
                            key={s}
                            className="px-2.5 py-1 text-[11px] font-mono text-slate-300 bg-[#0B2545] border border-slate-700/80 rounded"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs text-slate-400 italic">
                        Documentations & notes techniques disponibles sur demande
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Modal Dialog for Project Details */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0F172A] border border-[#3B82F6]/50 shadow-2xl p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#0B2545] text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden mb-6 h-64 w-full bg-slate-900 border border-slate-800">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Header info */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB]/20 border border-[#2563EB]/40 text-xs font-bold text-[#60A5FA]">
                {activeModalProject.categoryLabel}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Rôle : {activeModalProject.role}
              </span>
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
              {activeModalProject.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeModalProject.fullDescription}
            </p>

            {/* Key highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                Points clés & Méthodologie
              </h4>
              <ul className="space-y-2">
                {activeModalProject.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                Environnement & Outils
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-slate-300 bg-[#0B2545] border border-slate-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {activeModalProject.linkUrl && (
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={activeModalProject.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-[#1D4ED8] transition-colors"
                >
                  <span>{activeModalProject.linkText || "Voir le projet en ligne"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
