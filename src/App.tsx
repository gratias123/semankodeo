/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeTicker } from './components/MarqueeTicker';
import { DomainsSection } from './components/DomainsSection';
import { ToolsSection } from './components/ToolsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WikimediaSection } from './components/WikimediaSection';
import { FaqSection } from './components/FaqSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export default function App() {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'ai' | 'design' | 'hardware'>('all');

  return (
    <div className="min-h-screen bg-[#0B2545] text-[#F8FAFC] selection:bg-[#2563EB] selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 01 — Hero Section (Portrait sans fond, titre géant & boutons) */}
        <Hero onOpenCv={() => setCvModalOpen(true)} />

        {/* Dynamic Infinite Ribbon Ticker */}
        <MarqueeTicker />

        {/* 03 — 3 Pôles d'expertise (Technique & GSM, UI/UX, Prompt Engineering) */}
        <DomainsSection
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            const el = document.getElementById('realisations');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 04 — Outils & Équipements (4 primary tools + "Voir plus" expander) */}
        <ToolsSection />

        {/* 09 — Réalisations & Projets réels avec Modale de détails */}
        <ProjectsSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Wikimedia Commons Showcase (Semako64) */}
        <WikimediaSection />

        {/* Section À Propos (Parcours, vision, repères) */}
        <AboutSection onOpenCv={() => setCvModalOpen(true)} />

        {/* FAQ Section (Questions fréquentes) positionnée après À Propos */}
        <FaqSection />

        {/* 11 — Contact direct & Appel à l'action */}
        <ContactSection onOpenCv={() => setCvModalOpen(true)} />
      </main>

      {/* 12 — Footer en Bleu Nuit */}
      <Footer onOpenCv={() => setCvModalOpen(true)} />

      {/* 10 — Full Structured CV Modal (Interactive, Printable, Downloadable) */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
