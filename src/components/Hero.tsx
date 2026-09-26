import React from 'react';
import defaultPhoto from '../assets/images/photo.png';
import { 
  ArrowRight, 
  ArrowDown
} from 'lucide-react';

interface HeroProps {
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] lg:min-h-screen pt-28 sm:pt-36 pb-12 overflow-hidden bg-[#070D1E] flex flex-col justify-between items-center"
    >
      {/* 1. FOND QUADRILLÉ (Grille géométrique de carreaux comme sur la maquette) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.22) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.22) 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 95%)'
        }}
      />

      {/* Halos ambiants violacés / bleus profonds sur les côtés */}
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] bg-[#6366F1]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-[#2563EB]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#3B82F6]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* CONTENEUR PRINCIPAL */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10 flex-1 justify-between">
        
        {/* EN-TÊTE : Pilule supérieure + Grand Titre exactement stylé comme la maquette */}
        <div className="text-center max-w-4xl mx-auto pt-2 sm:pt-4">
          
          {/* Badge Pilule Supérieur */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-[#3B82F6]/35 text-xs sm:text-sm text-slate-300 backdrop-blur-md shadow-lg mb-6">
            <span className="text-[#60A5FA] font-medium">Technicien Informatique</span>
            <span className="text-slate-500">·</span>
            <span className="text-white font-medium">UI/UX Designer</span>
            <span className="text-slate-500">·</span>
            <span className="text-[#A78BFA] font-medium">Prompt Engineer</span>
          </div>

          {/* Grand Titre façon Maquette */}
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold text-white tracking-tight leading-[1.14] text-balance">
            J'allie la <span className="font-serif italic font-normal text-[#60A5FA]">technique</span>, le{' '}
            <span className="font-serif italic font-normal text-[#818CF8]">design</span>
            <br />
            et{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-[#60A5FA] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent">
              l'intelligence artificielle
            </span>
          </h1>
        </div>

        {/* 2. ZONE CENTRALE : PHOTO SANS ARRIÈRE-PLAN SUR LE PREMIER PLAN + LES 6 PASTILLES SANS ICÔNES */}
        <div className="relative w-full max-w-5xl mt-6 sm:mt-10 flex flex-col items-center">

          {/* HALO LUMINEUX DIRECTEMENT DERRIÈRE LA TÊTE / BUSTE */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-80 sm:w-[500px] lg:w-[620px] h-80 sm:h-[500px] lg:h-[620px] bg-gradient-to-tr from-[#3B82F6]/25 via-[#6366F1]/20 to-[#8B5CF6]/25 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

          {/* PASTILLES FLOTTANTES GAUCHE (Sans icônes, épurées et élégantes) */}
          <div className="hidden md:flex flex-col gap-9 absolute left-2 lg:left-6 top-8 z-30 pointer-events-auto">
            {/* Pastille 1 : Maintenance Informatique */}
            <div className="flex items-center px-4 py-2 rounded-full bg-[#0B172E]/90 border border-[#3B82F6]/40 text-slate-200 text-xs lg:text-sm font-medium backdrop-blur-md shadow-xl hover:border-[#60A5FA] hover:text-white hover:scale-105 transition-all">
              <span>Maintenance Informatique</span>
            </div>

            {/* Pastille 2 : Intelligence Artificielle */}
            <div className="flex items-center px-4 py-2 rounded-full bg-[#0B172E]/90 border border-[#818CF8]/40 text-slate-200 text-xs lg:text-sm font-medium backdrop-blur-md shadow-xl hover:border-[#A78BFA] hover:text-white hover:scale-105 transition-all -ml-3 lg:-ml-6">
              <span>Intelligence Artificielle</span>
            </div>

            {/* Pastille 3 : UI/UX & Prototypage */}
            <div className="flex items-center px-4 py-2 rounded-full bg-[#0B172E]/90 border border-pink-500/40 text-slate-200 text-xs lg:text-sm font-medium backdrop-blur-md shadow-xl hover:border-pink-400 hover:text-white hover:scale-105 transition-all ml-1">
              <span>UI/UX & Prototypage</span>
            </div>
          </div>

          {/* PASTILLES FLOTTANTES DROITE (Sans icônes, épurées et élégantes) */}
          <div className="hidden md:flex flex-col gap-9 absolute right-2 lg:right-6 top-8 z-30 pointer-events-auto">
            {/* Pastille 4 : Réseaux & Câblage RJ45 */}
            <div className="flex items-center px-4 py-2 rounded-full bg-[#0B172E]/90 border border-cyan-500/40 text-slate-200 text-xs lg:text-sm font-medium backdrop-blur-md shadow-xl hover:border-cyan-400 hover:text-white hover:scale-105 transition-all">
              <span>Réseaux & Câblage RJ45</span>
            </div>

            {/* Pastille 5 : Localisation */}
            <div className="flex items-center px-4 py-2 rounded-full bg-[#0B172E]/90 border border-[#818CF8]/40 text-slate-200 text-xs lg:text-sm font-medium backdrop-blur-md shadow-xl hover:border-[#A78BFA] hover:text-white hover:scale-105 transition-all ml-3 lg:ml-6">
              <span>Porto-Novo, Bénin</span>
            </div>

            {/* Pastille 6 : Projets & Interventions */}
            <div className="flex items-center px-4 py-2 rounded-full bg-[#0B172E]/90 border border-indigo-500/40 text-slate-200 text-xs lg:text-sm font-medium backdrop-blur-md shadow-xl hover:border-indigo-400 hover:text-white hover:scale-105 transition-all -ml-2">
              <span>+100 Interventions & Projets</span>
            </div>
          </div>

          {/* PHOTO AU PREMIER PLAN : AGRANDIE ET HARMONISÉE */}
          <div className="relative z-20 flex flex-col items-center">
            <div className="relative flex items-end justify-center pointer-events-none select-none [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
              <img
                src={defaultPhoto}
                alt="SEMAKO Déo-Gratias"
                className="max-h-[440px] sm:max-h-[520px] md:max-h-[590px] lg:max-h-[650px] w-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
              />
            </div>

            {/* LES BOUTONS D'ACTION (Harmonisés, centrés et unifiés sous la photo) */}
            <div className="relative -mt-8 sm:-mt-10 z-40 flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4 pointer-events-auto">
              
              {/* Bouton Primaire */}
              <a
                href="#realisations"
                className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#4F46E5] hover:from-[#6D28D9] hover:to-[#4338CA] border border-purple-400/30 shadow-xl shadow-purple-600/35 hover:shadow-purple-600/55 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Voir mes réalisations</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Bouton Secondaire */}
              <button
                onClick={onOpenCv}
                className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-transparent hover:bg-white/10 border border-white/30 hover:border-white/60 backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                <span>Consulter mon CV</span>
                <ArrowDown className="w-4 h-4 text-slate-300" />
              </button>
            </div>

            {/* Version mobile des pastilles (épurées sans icônes) */}
            <div className="flex md:hidden flex-wrap items-center justify-center gap-2 mt-8 px-4 z-30">
              <div className="px-3.5 py-1.5 rounded-full bg-[#0B172E]/90 border border-[#3B82F6]/30 text-[11px] text-slate-200">
                Maintenance Informatique
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-[#0B172E]/90 border border-[#818CF8]/30 text-[11px] text-slate-200">
                Intelligence Artificielle
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-[#0B172E]/90 border border-pink-500/30 text-[11px] text-slate-200">
                UI/UX Design
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
