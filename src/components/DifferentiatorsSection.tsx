import React from 'react';
import { DIFFERENTIATORS } from '../data/portfolioData';

export const DifferentiatorsSection: React.FC = () => {
  return (
    <section id="differenciation" className="py-24 md:py-32 bg-[#0B2545] relative overflow-hidden text-white">
      {/* Background subtle ambient dots */}
      <div 
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#3B82F6 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative subtle ambient blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1E293B] border border-[#3B82F6]/40 text-[#60A5FA] text-xs font-mono font-bold uppercase tracking-wider mb-4 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            Mon Approche & Valeur Ajoutée
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ce qui me <span className="text-[#3B82F6] italic font-serif">différencie</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
            Loin du simple exécutant ou de la théorie abstraite : une synergie unique entre rigueur matérielle, sens de l'ergonomie et maîtrise des IA au service de vos projets.
          </p>
        </div>

        {/* Timeline / Alternating S-Curve Flow */}
        <div className="relative">
          {/* Alternating Cards Container */}
          <div className="flex flex-col gap-10 sm:gap-14 lg:gap-12 relative z-10">
            {DIFFERENTIATORS.map((item, idx) => {
              const numStr = String(idx + 1).padStart(2, '0');
              const isRight = idx % 2 === 1; // 0, 2, 4 left ; 1, 3, 5 right
              const isNotLast = idx < DIFFERENTIATORS.length - 1;

              return (
                <div
                  key={item.title}
                  className={`relative flex w-full ${isRight ? 'lg:justify-end' : 'lg:justify-start'}`}
                >
                  {/* Connecteur courbe en pointillés vers la carte suivante sur grand écran */}
                  {isNotLast && (
                    <div
                      className={`hidden lg:block absolute pointer-events-none z-0 ${
                        isRight
                          ? 'left-[60px] top-[90%] w-[380px] h-[90px]'
                          : 'right-[60px] top-[90%] w-[380px] h-[90px]'
                      }`}
                    >
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                          d={isRight ? "M 90 0 C 40 10, 60 90, 10 100" : "M 10 0 C 60 10, 40 90, 90 100"}
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="2.5"
                          strokeDasharray="5 5"
                          opacity="0.6"
                        />
                      </svg>
                    </div>
                  )}

                  <div
                    className={`relative w-full lg:w-[460px] bg-[#0F172A]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#2563EB]/40 hover:border-[#60A5FA] shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-[#2563EB]/20 transition-all duration-300 group z-10 ${
                      isRight ? 'lg:translate-y-2' : ''
                    }`}
                  >
                    {/* Top Center circular peg/node (Deep blue with golden-amber core) */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#1E293B] border border-[#3B82F6]/50 flex items-center justify-center shadow-md">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    </div>

                    {/* Outlined Stylized Number like "01", "02" */}
                    <div className="mb-3">
                      <span
                        className="text-4xl sm:text-5xl font-extrabold tracking-tight select-none inline-block font-mono"
                        style={{
                          WebkitTextStroke: '2px #60A5FA',
                          WebkitTextFillColor: 'transparent',
                          color: '#60A5FA',
                        }}
                      >
                        {numStr}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#60A5FA] transition-colors">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
