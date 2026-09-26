import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Compass, UserCheck } from 'lucide-react';
import photoProfil from '../assets/images/regenerated_image_1790438942219.jpg';

interface AboutSectionProps {
  onOpenCv?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="a-propos" className="py-20 md:py-28 bg-[#0F172A] relative overflow-hidden border-t border-[#3B82F6]/20">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-2 flex items-center justify-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>À Propos de Moi</span>
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white text-balance">
            Qui suis-je & <span className="text-[#3B82F6] italic font-serif">quelle est ma vision</span> ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 text-balance">
            Profil polyvalent alliant précision matérielle, sens du design et maîtrise opérationnelle de l'intelligence artificielle.
          </p>
        </div>

        {/* 2-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Portrait & Badge */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-tr from-[#0B2545] via-[#1E293B] to-[#2563EB]/30 p-2 border border-[#3B82F6]/30 shadow-2xl">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-[#0B2545] flex items-center justify-center relative">
                <img
                  src={photoProfil}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center filter drop-shadow-lg"
                />
              </div>

              {/* Status floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0B2545]/95 border border-[#3B82F6]/40 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-200">Porto-Novo, Bénin</span>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h3 className="text-lg font-bold text-white">{PERSONAL_INFO.name}</h3>
              <p className="text-xs text-[#60A5FA] font-medium mt-1">
                Technicien Informatique · UI/UX Designer · Prompt Engineer
              </p>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-[#0B2545]/80 border border-[#3B82F6]/25 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#3B82F6]" />
                <span>Mon Parcours & Philosophie</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Passionné d'informatique dès le plus jeune âge, j'ai suivi un cursus technique complet de <strong>3 ans en Installations et Maintenance Informatique (IMI)</strong> au Lycée Technique et Professionnel de Porto-Novo. Cette formation rigoureuse m'a inculqué les fondamentaux du matériel, de l'électronique de précision, des systèmes d'exploitation et des architectures réseau.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3">
                Parallèlement, ma sensibilité esthétique et ergonomique m'a conduit vers le <strong>Design Graphique et l'UI/UX</strong>, complété par la pratique du développement frontend moderne. Aujourd'hui, j'y intègre le <strong>Prompt Engineering</strong> pour orchestrer des workflows avec les modèles d'IA générative et livrer des résultats reproductibles et mesurables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
