import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ArrowUpRight, X, Check, Code, Cpu, Palette, Wrench, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  selectedCategory: 'all' | 'web' | 'ai' | 'design' | 'hardware';
  onCategoryChange: (cat: 'all' | 'web' | 'ai' | 'design' | 'hardware') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  selectedCategory,
  onCategoryChange
}) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-2">
            Projets & Ateliers
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white text-balance">
            Réalisations <span className="text-[#3B82F6] italic font-serif">concrètes</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 text-balance">
            Découvrez un aperçu de mes projets en développement, ingénierie de prompts, identité de marque et maintenance en atelier.
          </p>
        </div>

        {/* Filter Tabs */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {filteredProjects.map((project) => {
            const Icon = getCategoryIcon(project.category);
            return (
              <div
                key={project.id}
                className="group flex flex-col rounded-xl bg-[#0F172A]/90 border border-[#3B82F6]/25 hover:border-[#60A5FA]/60 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Project Image Banner */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-900 cursor-pointer" onClick={() => setActiveModalProject(project)}>
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
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
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

            {/* Highlights */}
            <div className="mb-6 bg-[#0B2545] p-5 rounded-xl border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-3">
                Points clés & Méthodologie
              </h4>
              <ul className="space-y-2">
                {activeModalProject.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Technologies & Outils Mobilisés
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-[#0B2545] border border-[#3B82F6]/30 text-xs font-medium text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Close modal action */}
            <div className="flex justify-end pt-4 border-t border-slate-800">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] text-xs font-bold text-white transition-colors"
              >
                Fermer l'aperçu
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
