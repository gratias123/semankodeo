import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { TOOLS } from '../data/portfolioData';

interface TechNode {
  id: string;
  name: string;
  categoryLabel: string;
  description: string;
  iconType: 'react' | 'figma' | 'tailwind' | 'ai' | 'hardware' | 'github' | 'ts' | 'vite';
  color: string;
}

export const ToolsSection: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<TechNode | null>(null);
  const [showAllList, setShowAllList] = useState(false);

  // 6 Primary Tech Nodes branching from the central Stack Hub, exactly matching the tree architecture of the image
  const primaryNodes: TechNode[] = [
    {
      id: 'figma',
      name: 'Figma & UI/UX',
      categoryLabel: 'Design & Prototypage',
      description: 'Conception ergonomique, wireframes, design systems réutilisables et maquettes interactives.',
      iconType: 'figma',
      color: '#A855F7',
    },
    {
      id: 'react',
      name: 'React & Front-End',
      categoryLabel: 'Développement Web & App',
      description: 'Développement d’interfaces modulaires, SPA véloces, hooks personnalisés et architecture composable.',
      iconType: 'react',
      color: '#0EA5E9',
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS & Vite',
      categoryLabel: 'Stylisation & Build',
      description: 'Mise en page ultra-rapide, design responsive au pixel près et outillage moderne ultra-performant.',
      iconType: 'tailwind',
      color: '#10B981',
    },
    {
      id: 'ai',
      name: 'Prompt Engineering & IA',
      categoryLabel: 'IA Générative (LLM)',
      description: 'Conception de prompts avancés, workflows avec ChatGPT, Claude, Gemini et automatisation.',
      iconType: 'ai',
      color: '#8B5CF6',
    },
    {
      id: 'hardware',
      name: 'Maintenance GSM & PC',
      categoryLabel: 'Hardware & Diagnostic',
      description: 'Micro-soudure sur cartes mères, multimètre, détection méthodique de pannes et assemblage.',
      iconType: 'hardware',
      color: '#F59E0B',
    },
    {
      id: 'github',
      name: 'GitHub & TypeScript',
      categoryLabel: 'Versioning & Typage',
      description: 'Gestion de code source avec Git/GitHub, CI/CD, documentation rigoureuse et typage TypeScript.',
      iconType: 'github',
      color: '#3B82F6',
    },
  ];

  // Render high-fidelity SVG icon for each technology
  const renderIcon = (type: TechNode['iconType']) => {
    switch (type) {
      case 'react':
        return (
          <svg className="w-6 h-6 text-[#00D8FE]" viewBox="-11.5 -10.23174 23 20.46348" fill="currentColor">
            <circle cx="0" cy="0" r="2.05" />
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        );
      case 'figma':
        return (
          <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
            <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
            <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
            <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
            <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
            <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
          </svg>
        );
      case 'tailwind':
        return (
          <svg className="w-6 h-6 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
          </svg>
        );
      case 'ai':
        return (
          <div className="flex items-center justify-center font-black text-sm tracking-tighter text-[#8B5CF6]">
            <span>AI</span>
          </div>
        );
      case 'hardware':
        return (
          <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case 'github':
        return (
          <svg className="w-5 h-5 text-slate-800" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="outils" className="py-24 md:py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle radial ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#3B82F6]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider mb-4 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            Écosystème & Stack Technique
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Technologies & <span className="text-[#3B82F6] italic font-serif">Outils</span> Maîtrisés
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed text-balance">
            Une architecture connectée où chaque technologie converge vers un résultat opérationnel, fiable et élégant.
          </p>
        </div>

        {/* Tree Branching Visualization (Exact reproduction of the uploaded image layout) */}
        <div className="relative max-w-4xl mx-auto bg-[#0B2545]/60 border border-[#2563EB]/30 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl shadow-black/40">
          
          {/* Top Hub: Central Stack Node with Blue Brand Palette */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] border-4 border-[#60A5FA]/40 shadow-xl shadow-[#2563EB]/30 flex items-center justify-center text-white transition-transform hover:scale-105 cursor-pointer">
              <Layers className="w-8 h-8 sm:w-10 sm:h-10 drop-shadow-md text-white" />
            </div>
            <span className="mt-2.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#93C5FD]">
              Stack Central
            </span>
          </div>

          {/* SVG Connector Branch Lines (Responsive Tree branching downwards to 6 nodes) */}
          <div className="w-full h-24 sm:h-28 my-1 relative">
            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 800 120"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                {/* Brand blue gradient for branching cables */}
                <linearGradient id="treeBranchGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="1" />
                  <stop offset="60%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="activeBranchGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* Central vertical stem */}
              <line x1="400" y1="0" x2="400" y2="28" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
              {/* Funnel junction arc */}
              <path d="M 394 28 C 397 31, 403 31, 406 28" stroke="#60A5FA" strokeWidth="3" fill="none" />

              {/* Branch 1 -> Node 1 (approx x: 67) */}
              <path
                d="M 400 30 C 370 70, 160 70, 67 115"
                stroke="url(#treeBranchGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-75"
              />
              {/* Branch 2 -> Node 2 (approx x: 200) */}
              <path
                d="M 400 30 C 370 65, 270 70, 200 115"
                stroke="url(#treeBranchGradient)"
                strokeWidth="2.2"
              />
              {/* Branch 3 -> Node 3 (approx x: 333) */}
              <path
                d="M 400 30 C 390 60, 360 80, 333 115"
                stroke="url(#treeBranchGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-75"
              />
              {/* Branch 4 -> Node 4 (approx x: 467) */}
              <path
                d="M 400 30 C 410 60, 440 80, 467 115"
                stroke="url(#treeBranchGradient)"
                strokeWidth="2.4"
              />
              {/* Branch 5 -> Node 5 (approx x: 600) */}
              <path
                d="M 400 30 C 430 65, 530 70, 600 115"
                stroke="url(#treeBranchGradient)"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="opacity-75"
              />
              {/* Branch 6 -> Node 6 (approx x: 733) */}
              <path
                d="M 400 30 C 430 70, 640 70, 733 115"
                stroke="url(#treeBranchGradient)"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* 6 Technology Circular Badges (identical to the bottom row of circular nodes in the image) */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-3 items-center justify-items-center relative z-10">
            {primaryNodes.map((node) => {
              const isSelected = selectedTech?.id === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedTech(isSelected ? null : node)}
                  className={`group relative flex flex-col items-center focus:outline-none transition-transform duration-200 hover:-translate-y-1.5`}
                >
                  {/* Circular Node with light white background and gentle border matching screenshot style */}
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center transition-all duration-300 shadow-md ${
                      isSelected
                        ? 'ring-4 ring-[#3B82F6] scale-110 shadow-lg shadow-[#2563EB]/40'
                        : 'border-2 border-blue-200 hover:border-[#3B82F6] hover:shadow-lg'
                    }`}
                  >
                    {renderIcon(node.iconType)}
                  </div>

                  {/* Micro label below the circular icon */}
                  <span className={`mt-2 font-mono text-[10px] sm:text-[11px] font-bold text-center leading-tight transition-colors ${
                    isSelected ? 'text-[#60A5FA]' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {node.name.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Interactive Tool Details Box (appears when clicking any of the tree circles) */}
          {selectedTech && (
            <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#0F172A] border border-[#3B82F6]/50 animate-fadeIn transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]" />
                    <h3 className="font-display text-lg font-bold text-white">
                      {selectedTech.name}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#60A5FA] border border-[#2563EB]/30">
                      {selectedTech.categoryLabel}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {selectedTech.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="self-start sm:self-center px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Expander Button to reveal full software & hardware inventory */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllList(!showAllList)}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0B2545] hover:bg-[#1E3A8A] border border-[#3B82F6]/40 hover:border-[#60A5FA] rounded-full shadow-lg transition-all"
          >
            <span>{showAllList ? "Réduire l'inventaire complet des outils" : "Consulter l'ensemble des outils & équipements (+12)"}</span>
            {showAllList ? <ChevronUp className="w-4 h-4 text-[#60A5FA]" /> : <ChevronDown className="w-4 h-4 text-[#60A5FA]" />}
          </button>
        </div>

        {/* Full Grid inventory when expanded */}
        {showAllList && (
          <div className="mt-10 pt-8 border-t border-slate-800 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="p-4 rounded-xl bg-[#0B2545]/70 border border-slate-800 hover:border-[#3B82F6]/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-bold text-sm text-white group-hover:text-[#60A5FA] transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-snug mt-1">
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-[#60A5FA]">
                    <span>{tool.categoryLabel}</span>
                    <span className="font-mono text-slate-500">#{tool.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
