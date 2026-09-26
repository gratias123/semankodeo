import React, { useState } from 'react';
import { FAQS } from '../data/portfolioData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-[#0F172A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Foire aux Questions</span>
          </p>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white text-balance">
            Des réponses <span className="text-[#3B82F6] italic font-serif">claires</span> & directes.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 text-balance">
            Tout ce qu'un recruteur ou un porteur de projet a besoin de savoir avant d'engager une collaboration.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B2545]/80 border border-[#3B82F6]/20 hover:border-[#60A5FA]/40 transition-all overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-semibold text-sm sm:text-base text-white hover:text-[#60A5FA] transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0F172A] border border-slate-700 flex items-center justify-center text-[#60A5FA] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#2563EB] text-white border-transparent' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
