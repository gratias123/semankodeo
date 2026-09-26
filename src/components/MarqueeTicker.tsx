import React from 'react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    "TECHNIQUE INFORMATIQUE",
    "UI/UX DESIGN & FIGMA",
    "PROMPT ENGINEERING & IA",
    "DIAGNOSTIC & MAINTENANCE GSM",
    "REACT & TAILWIND CSS",
    "MICRO-SOUDURE & CÂBLAGE RJ45",
    "WORKFLOWS ASSISTÉS PAR IA",
    "CONTRIBUTEUR WIKIMEDIA (SEMAKO64)",
    "SYSTÈMES & BOOT UEFI"
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#0F172A] border-y border-[#3B82F6]/20 py-3.5 select-none">
      {/* Edge gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Sequence repeated twice for seamless loop */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs sm:text-sm font-semibold tracking-wider text-slate-300">
            <span>{text}</span>
            <span className="text-[#2563EB] text-xs">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
