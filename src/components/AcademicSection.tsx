import React from 'react';
import { EDUCATION_LIST, COMPLEMENTARY_TRAININGS, TECHNICAL_DOMAINS_STUDIED } from '../data/portfolioData';
import { GraduationCap, BookOpen, CheckCircle, Award, Calendar, MapPin } from 'lucide-react';

export const AcademicSection: React.FC = () => {
  return (
    <section id="cursus" className="py-20 md:py-28 bg-[#0F172A] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-2">
            Parcours & Formations
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white text-balance">
            Cursus académique & <span className="text-[#3B82F6] italic font-serif">certifications</span>.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 text-balance">
            Une base technique éprouvée de 3 ans en IMI complétée par des apprentissages ciblés en GSM, bureautique, graphisme et sérigraphie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Academic Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Diplômes & Études Techniques
              </h3>
            </div>

            <div className="relative border-l-2 border-[#2563EB]/40 ml-4 pl-6 space-y-8">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline indicator node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-[#0F172A] group-hover:scale-125 transition-transform" />

                  <div className="p-6 rounded-2xl bg-[#0B2545]/80 border border-[#3B82F6]/20 hover:border-[#60A5FA]/40 transition-all shadow-md">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2563EB]/20 text-[11px] font-bold text-[#60A5FA] border border-[#2563EB]/30">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </span>
                      {edu.location && (
                        <span className="inline-flex items-center gap-1 text-[11px] text-slate-400">
                          <MapPin className="w-3 h-3 text-[#3B82F6]" />
                          <span>{edu.location}</span>
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg font-bold text-white mb-1">
                      {edu.degree}
                    </h4>

                    <div className="text-xs font-semibold text-[#60A5FA] mb-3">
                      {edu.institution}
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    {edu.points && (
                      <div className="pt-3 border-t border-slate-800 space-y-1.5">
                        {edu.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-200">
                            <CheckCircle className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Domaines techniques étudiés */}
            <div className="mt-8 p-6 rounded-2xl bg-[#0B2545]/60 border border-slate-800">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-3">
                Disciplines Techniques Clés de la formation IMI
              </h4>
              <div className="flex flex-wrap gap-2">
                {TECHNICAL_DOMAINS_STUDIED.map((domain, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-2.5 py-1 text-xs text-slate-200 bg-[#0F172A] border border-slate-800 rounded-md font-mono"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Formations complémentaires & Attestations (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Formations Complémentaires
              </h3>
            </div>

            <div className="space-y-4">
              {COMPLEMENTARY_TRAININGS.map((train, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0B2545]/80 border border-[#3B82F6]/20 hover:border-[#60A5FA]/40 transition-all shadow-md group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-sm sm:text-base text-white group-hover:text-[#60A5FA] transition-colors">
                      {train.title}
                    </h4>
                    {train.hasAttestation ? (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/40 text-[10px] font-bold text-emerald-400">
                        <Award className="w-3 h-3" />
                        <span>Attestation</span>
                      </span>
                    ) : train.duration ? (
                      <span className="text-[11px] font-mono text-[#60A5FA] bg-[#0F172A] px-2 py-0.5 rounded border border-slate-800">
                        {train.duration}
                      </span>
                    ) : null}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {train.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {train.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 text-[10px] font-medium text-slate-400 bg-[#0F172A] rounded border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Practical pledge card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#1E3A8A]/30 to-[#0F172A] border border-[#2563EB]/40 shadow-lg">
              <h5 className="font-bold text-white text-sm mb-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                Formation continue & Autonomie
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Apprentissage itératif et pratique constante sur banc d'essai réel, machines physiques et environnements de développement modernes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
