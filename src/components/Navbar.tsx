import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Send, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenCv: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCv }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLDivElement>(null);

  // Exactement 3 sections comme demandé explicitement
  const threeSections = [
    { label: "Expertises", href: "#expertises" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Contact", href: "#contact" }
  ];

  // Disparition du menu dès qu'on quitte le Hero, sauf si on remonte / repart en haut
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroElement = document.getElementById('hero');

      let pastHero = false;
      if (heroElement) {
        const heroRect = heroElement.getBoundingClientRect();
        // Le Hero est considéré quitté dès que son bas dépasse le haut de l'écran
        pastHero = heroRect.bottom <= 80;
      } else {
        pastHero = currentScrollY > 400;
      }

      // Si on est dans le Hero (en haut de page), toujours visible
      if (!pastHero) {
        setIsVisible(true);
      } else {
        // En dehors du Hero :
        // Si on fait défiler vers le bas, le menu disparaît complètement
        // Si on repart vers le haut (scroll vers le haut), le menu réapparaît
        const delta = currentScrollY - lastScrollY.current;
        if (delta > 6) {
          // Défilement vers le bas : masquer le menu
          setIsVisible(false);
        } else if (delta < -8) {
          // Repartir en haut / défilement vers le haut : afficher le menu
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Vérification initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fermer le menu si l'utilisateur clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Si le menu mobile est ouvert, forcer la visibilité
  const showNav = isVisible || mobileMenuOpen;

  return (
    <div
      className={`fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none transition-all duration-500 ease-in-out ${
        showNav
          ? 'translate-y-0 opacity-100'
          : '-translate-y-28 opacity-0'
      }`}
    >
      <header
        ref={navRef}
        className={`pointer-events-auto w-full max-w-5xl bg-[#0F172A]/95 backdrop-blur-2xl border border-[#3B82F6]/35 shadow-2xl shadow-black/70 px-4 sm:px-8 py-2.5 sm:py-3.5 transition-all duration-300 ${
          mobileMenuOpen ? 'rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-6">
          {/* 1. Le Nom & Monogramme */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none shrink min-w-0"
          >
            <span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#2563EB] flex items-center justify-center font-extrabold text-white text-xs sm:text-sm shadow-md shadow-[#2563EB]/40 group-hover:bg-[#3B82F6] transition-colors shrink-0 border border-white/20">
              SD
            </span>
            <span className="font-display font-bold text-sm sm:text-base lg:text-lg tracking-tight text-white group-hover:text-[#60A5FA] transition-colors truncate max-w-[130px] xs:max-w-[200px] sm:max-w-none">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* 2. Les Trois Sections (Desktop / Tablet) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-sm sm:text-base font-semibold text-slate-300 shrink-0">
            {threeSections.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors relative py-1 hover:text-[#60A5FA] tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 3. Bouton CTA & Déclencheur Mobile */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#3B82F6] shadow-md shadow-[#2563EB]/40 transition-all hover:scale-[1.03] active:scale-95 whitespace-nowrap"
            >
              <span>Me contacter</span>
              <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden xs:inline" />
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-slate-300 hover:text-white md:hidden focus:outline-none rounded-lg hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#60A5FA]" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu avec les 3 sections uniquement */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800 pb-1 flex flex-col gap-2 animate-fadeIn">
            {threeSections.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800/70 rounded-xl transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>
        )}
      </header>
    </div>
  );
};
