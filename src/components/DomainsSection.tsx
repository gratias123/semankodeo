import React from 'react';
import { ArrowUpRight, Cpu, Smartphone, Palette, Terminal, Code2 } from 'lucide-react';

import imgInformatique from '../assets/images/regenerated_image_1790423095743.png';
import imgGsm from '../assets/images/competence_gsm_1790422421313.jpg';
import imgDesign from '../assets/images/competence_design_1790422432943.jpg';
import imgPrompt from '../assets/images/competence_prompt_1790422443032.jpg';
import imgWebDev from '../assets/images/competence_web_dev_1790422453876.jpg';

interface DomainsSectionProps {
  onSelectCategory: (cat: 'web' | 'ai' | 'design' | 'hardware') => void;
}

export const DomainsSection: React.FC<DomainsSectionProps> = ({ onSelectCategory }) => {
  const competences = [
    {
      number: "01",
      title: "Informatique & Maintenance",
      description: "Diagnostic méthodique matériel et logiciel, maintenance préventive et curative de parcs informatiques, dépannage de composants, assemblage et optimisation de performances.",
      image: imgInformatique,
      icon: Cpu,
      targetCategory: 'hardware' as const,
      colSpan: 'lg:col-span-2',
      badge: "HARDWARE & SYSTÈMES"
    },
    {
      number: "02",
      title: "Maintenance GSM",
      description: "Réparation minutieuse de smartphones et tablettes, micro-soudure sur cartes mères, remplacement de circuits et écrans, flashage de firmwares et désoxydation.",
      image: imgGsm,
      icon: Smartphone,
      targetCategory: 'hardware' as const,
      colSpan: 'lg:col-span-2',
      badge: "MICRO-SOUDURE & MOBILES"
    },
    {
      number: "03",
      title: "Design Graphique",
      description: "Création d'identités visuelles percutantes, logos, maquettes UI/UX sous Figma, supports visuels numériques et respect rigoureux des chartes graphiques modernes.",
      image: imgDesign,
      icon: Palette,
      targetCategory: 'design' as const,
      colSpan: 'lg:col-span-2',
      badge: "UI/UX & DIRECTION ARTISTIQUE"
    },
    {
      number: "04",
      title: "Prompt Engineering",
      description: "Conception de prompts avancés et structurés, calibrage de modèles d'IA générative (ChatGPT, Claude, Gemini), automatisation de workflows et intégration de logique IA.",
      image: imgPrompt,
      icon: Terminal,
      targetCategory: 'ai' as const,
      colSpan: 'lg:col-span-3',
      badge: "IA GÉNÉRATIVE & AUTOMATISATION"
    },
    {
      number: "05",
      title: "Dev Web & App",
      description: "Développement d'applications web et mobiles réactives, intégration moderne avec React, TypeScript et Tailwind CSS, architecture fluide et conception d'expériences connectées.",
      image: imgWebDev,
      icon: Code2,
      targetCategory: 'web' as const,
      colSpan: 'lg:col-span-3',
      badge: "FRONT-END & APPLICATIONS"
    }
  ];

  return (
    <section id="competences" className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden">
      {/* Anchor for backward compatibility with existing links */}
      <span id="expertises" className="absolute -top-20 opacity-0 pointer-events-none" />

      {/* Decorative ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563EB]/10 rounded-none blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#3B82F6]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider mb-4 rounded-none">
            <span className="w-1.5 h-1.5 bg-[#3B82F6]" />
            Compétences Clés
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight text-balance">
            Mes <span className="text-[#3B82F6] italic font-serif">Compétences</span> & Pôles d'Action
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed text-balance">
            Des compétences techniques et créatives concrètes, développées sur le terrain pour répondre avec rigueur à vos besoins.
          </p>
        </div>

        {/* Grille des 5 Compétences — Cadres façon carrée aux bords (rounded-none) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          {competences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                onClick={() => {
                  onSelectCategory(item.targetCategory);
                  const el = document.getElementById('realisations');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative flex flex-col justify-between bg-[#0B2545] border-2 border-[#2563EB]/35 hover:border-[#60A5FA] shadow-xl shadow-black/50 hover:shadow-2xl hover:shadow-[#2563EB]/25 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer rounded-none overflow-hidden ${item.colSpan}`}
              >
                {/* 1. IMAGE DE LA COMPÉTENCE — Bords strictement carrés (rounded-none) */}
                <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900 rounded-none border-b-2 border-[#2563EB]/30 group-hover:border-[#60A5FA]/60 transition-colors">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-none"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545] via-transparent to-black/30 pointer-events-none" />

                  {/* Badge thématique au bord carré */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-[#0F172A]/90 backdrop-blur-md border border-[#3B82F6]/50 text-[#93C5FD] text-[10px] font-mono font-bold tracking-wider rounded-none shadow-md">
                    <Icon className="w-3.5 h-3.5 text-[#60A5FA]" />
                    <span>{item.badge}</span>
                  </div>

                  {/* Numéro carré en haut à droite */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-[#0F172A]/90 backdrop-blur-md border border-slate-700/80 group-hover:border-[#3B82F6] flex items-center justify-center font-mono text-xs font-bold text-slate-300 group-hover:text-white rounded-none transition-colors">
                    {item.number}
                  </div>
                </div>

                {/* 2. CONTENU TEXTUEL & TITRE */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Titre de la compétence */}
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#60A5FA] transition-colors leading-tight mb-3">
                      {item.title}
                    </h3>

                    {/* Description claire et fluide */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* 3. BAS DU CADRE CARRÉ : Action d'exploration */}
                  <div className="pt-5 mt-6 border-t border-slate-800/90 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#60A5FA] transition-colors">
                    <span className="font-mono text-[11px] uppercase tracking-wide">Voir les réalisations</span>
                    <div className="w-8 h-8 bg-[#0F172A] border border-slate-700 group-hover:border-[#3B82F6] group-hover:bg-[#2563EB] group-hover:text-white flex items-center justify-center text-slate-300 transition-all rounded-none">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Accent corner line indicator for high-tech square feel */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent group-hover:via-[#60A5FA] transition-all" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
