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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Portrait Card & Professional Summary */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full flex flex-col justify-between bg-[#0B2545]/80 border border-[#3B82F6]/30 rounded-2xl p-6 sm:p-7 shadow-xl backdrop-blur-sm">
              <div className="flex flex-col items-center">
                {/* Photo Container with elegant framing & optimal height */}
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#2563EB]/40 p-1.5 border border-[#3B82F6]/40 shadow-2xl overflow-hidden group">
                  <div className="w-full h-full rounded-xl overflow-hidden bg-[#091E3A] relative">
                    <img
                      src={photoProfil}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/80 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Status floating badge */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0B2545]/95 border border-[#3B82F6]/50 backdrop-blur-md px-3.5 py-1 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-slate-200">Porto-Novo, Bénin</span>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-xl font-display font-bold text-white tracking-tight">
                    {PERSONAL_INFO.name}
                  </h3>
                  <p className="text-xs text-[#60A5FA] font-medium mt-1 font-mono">
                    Technicien IMI · UI/UX Designer · Prompt Engineer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-[#0B2545]/80 border border-[#3B82F6]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-5 flex items-center gap-2.5">
                <UserCheck className="w-5 h-5 text-[#3B82F6]" />
                <span>Mon parcours & ma philosophie</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                <p>
                  Mon parcours s’est construit progressivement autour de l’informatique, du design et des nouvelles technologies.
                </p>

                <p>
                  Après l’obtention de mon <strong className="text-white font-semibold">BEPC</strong>, j’ai poursuivi mes études au <strong className="text-white font-semibold">Lycée Technique et Professionnel de Porto-Novo</strong>, où je suis rentré pour un cursus de <strong className="text-[#60A5FA] font-semibold">3 ans en Installations et Maintenance en Informatique (IMI)</strong>. Cette formation m’a permis de développer une compréhension concrète de l’environnement informatique et de renforcer mon intérêt pour les technologies numériques.
                </p>

                <p>
                  Au fil de mon parcours, je me suis également orienté vers le <strong className="text-white font-semibold">design graphique et l’UI/UX</strong>, des domaines qui correspondent à mon intérêt pour la création, la conception visuelle et l’expérience utilisateur. Cette évolution m’a naturellement amené à explorer davantage les outils numériques et le développement web.
                </p>

                <p>
                  Plus récemment, le <strong className="text-[#60A5FA] font-semibold">Prompt Engineering et l’intelligence artificielle</strong> sont venus compléter cette orientation. Je m’intéresse particulièrement à la manière dont ces technologies peuvent être utilisées pour améliorer la création, organiser le travail et transformer plus efficacement une idée en résultat concret.
                </p>

                <div className="pt-4 mt-4 border-t border-slate-700/80">
                  <p className="text-white font-medium text-sm sm:text-base bg-[#0F172A]/70 p-4 rounded-xl border border-[#3B82F6]/30">
                    <span className="text-[#60A5FA] font-bold block mb-1">Cap & Ambition</span>
                    « Mon objectif est de continuer à construire un profil polyvalent, à la croisée de la technique, de la création et des technologies numériques. »
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
