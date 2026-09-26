import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Globe, ArrowUpRight, CheckCircle2, User, BookOpen, ShieldCheck } from 'lucide-react';

export const WikimediaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0B2545] relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#0B2545] to-[#1E3A8A]/40 border border-[#3B82F6]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-12 -bottom-12 w-80 h-80 bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            {/* Content left */}
            <div className="max-w-3xl">
              {/* Badge User */}
              <div className="flex flex-wrap items-center gap-2.5 mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/20 border border-[#3B82F6]/40 text-xs font-semibold text-[#60A5FA]">
                  <Globe className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Projets Wikimedia & Savoir Libre</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B] border border-slate-700 text-xs font-mono text-slate-300">
                  <User className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Nom d'utilisateur : <strong className="text-white font-bold">{PERSONAL_INFO.wikimediaUsername}</strong></span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Wikimedia Commons & <span className="text-[#3B82F6] italic font-serif">Engagement Numérique</span>
              </h3>

              {/* Subtitle / Intro */}
              <p className="text-base sm:text-lg font-medium text-blue-100/90 mt-4 leading-relaxed">
                Contributeur aux projets Wikimedia sous le pseudonyme « <span className="text-[#60A5FA] font-bold">{PERSONAL_INFO.wikimediaUsername}</span> ». Mon activité comprend notamment des contributions sur Wikimedia Commons.
              </p>

              {/* Manifeste / Raison d'être */}
              <div className="mt-5 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  L’engagement dans l’univers Wikimedia représente pour moi une passerelle essentielle entre la technique informatique et la responsabilité citoyenne du numérique. Plutôt que de rester simple consommateur passif d’Internet, contribuer permet d’agir concrètement pour la qualité de l’information accessible à tous.
                </p>
                <p>
                  Cette démarche implique une rigueur méthodologique permanente : respect strict de la neutralité de point de vue, vérification scrupuleuse de sources admissibles et indépendantes, et structuration minutieuse des données pour les rendre interopérables et pérennes.
                </p>
              </div>

              {/* Highlights pillars */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-slate-700/60 text-xs text-slate-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Neutralité & sources fiables</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <BookOpen className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Documentation pérenne</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Médias sous licences libres</span>
                </div>
              </div>
            </div>

            {/* CTA action right */}
            <div className="shrink-0 flex flex-col gap-3 lg:pt-4">
              <a
                href={PERSONAL_INFO.wikimediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] border border-[#60A5FA]/40 rounded-xl shadow-xl shadow-[#2563EB]/30 transition-all hover:scale-[1.02] whitespace-nowrap"
              >
                <span>Voir mes contributions</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>

              <a
                href="https://commons.wikimedia.org/wiki/User:Semako64"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-300 hover:text-white bg-[#0F172A] hover:bg-[#1E293B] border border-slate-700 rounded-xl transition-all"
              >
                <span>Profil Commons</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
