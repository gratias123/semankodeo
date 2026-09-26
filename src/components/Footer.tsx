import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Globe, ArrowUp, MessageSquare, Facebook } from 'lucide-react';

interface FooterProps {
  onOpenCv?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B2545] border-t border-[#3B82F6]/20 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center font-bold text-white text-sm">
                SD
              </span>
              <span className="font-display font-bold text-xl text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg leading-relaxed">
              Technicien Informatique, UI/UX Designer et Prompt Engineer. Basé à Porto-Novo, Bénin. Disponible pour opportunités, missions web, design d'interfaces et intégration d'IA.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#60A5FA] hover:text-white hover:bg-[#2563EB] transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#60A5FA] hover:text-white hover:bg-[#2563EB] transition-colors"
                title="Email direct"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.wikimediaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#60A5FA] hover:text-white hover:bg-[#2563EB] transition-colors"
                title="Contributions Wikimedia Commons"
              >
                <Globe className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0F172A] border border-slate-800 flex items-center justify-center text-[#60A5FA] hover:text-white hover:bg-[#2563EB] transition-colors"
                title="Profil Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="font-display font-bold text-white text-sm mb-4">
              Coordonnées
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                <span>Porto-Novo, Bénin</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                <a href={`tel:${PERSONAL_INFO.phoneRaw}`} className="hover:text-white transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors truncate">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                <a
                  href={PERSONAL_INFO.wikimediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-slate-400 hover:text-white hover:underline transition-colors"
                >
                  Wiki: {PERSONAL_INFO.wikimediaUsername}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {PERSONAL_INFO.name} — Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#60A5FA]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
