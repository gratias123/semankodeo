import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Phone, Mail, MapPin, Send, MessageSquare, Copy, Check, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenCv: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenCv }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [senderName, setSenderName] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleQuickWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour SEMAKO Déo-Gratias,\nJe suis ${senderName || 'un recruteur/collaborateur'}.\nMessage: ${messageText || 'Je souhaite échanger avec vous concernant une opportunité.'}`
    );
    window.open(`https://wa.me/2290164690682?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B2545] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA Banner matching reference mockup */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-3">
            Passer à l'action
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight text-balance">
            Prêt à passer à l'<span className="text-[#3B82F6] italic font-serif">action</span> ?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-2xl mx-auto text-balance">
            Vous cherchez un profil rigoureux, capable d'intervenir sur le matériel, de concevoir des interfaces intuitives et d'optimiser vos processus grâce à l'IA ?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-xl shadow-xl shadow-[#2563EB]/35 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Échanger sur WhatsApp</span>
            </a>

            <button
              onClick={onOpenCv}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-slate-200 bg-[#0F172A] hover:bg-slate-800 border border-[#3B82F6]/30 hover:border-[#60A5FA] rounded-xl transition-all"
            >
              <span>Consulter mon CV complet</span>
              <ArrowRight className="w-4 h-4 text-[#60A5FA]" />
            </button>
          </div>
        </div>

        {/* Coordonnées & Quick Message Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-slate-800">
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-display text-lg font-bold text-white mb-4">
              Coordonnées Directes
            </h3>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#0F172A] border border-[#3B82F6]/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] text-slate-400 font-mono">Email professionnel</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#60A5FA] transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 text-slate-400 hover:text-white bg-[#0B2545] rounded-lg border border-slate-700 hover:border-slate-500 transition-colors shrink-0"
                title="Copier l'email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-[#0F172A] border border-[#3B82F6]/20 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-mono">Téléphone / Appel</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phoneRaw}`}
                    className="text-xs sm:text-sm font-semibold text-white hover:text-[#60A5FA] transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 text-slate-400 hover:text-white bg-[#0B2545] rounded-lg border border-slate-700 hover:border-slate-500 transition-colors shrink-0"
                title="Copier le numéro"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-[#0F172A] border border-[#3B82F6]/20 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 text-[#60A5FA] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-mono">Localisation</div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-[#3B82F6]/25 p-6 sm:p-7 rounded-2xl">
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Envoyer un message rapide
            </h3>
            <p className="text-xs text-slate-300 mb-5">
              Remplissez ce court message pour démarrer un échange instantané sur WhatsApp ou par email.
            </p>

            <form onSubmit={handleQuickWhatsApp} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Votre nom ou entreprise
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Ex : Recruteur, Responsable Technique, Client..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B2545] border border-slate-700 focus:border-[#2563EB] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Objet de votre message
                </label>
                <textarea
                  rows={3}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Ex : Nous avons un besoin en maintenance informatique / conception UI / mission Prompt Engineering..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B2545] border border-slate-700 focus:border-[#2563EB] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#3B82F6] rounded-xl shadow-md transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Envoyer sur WhatsApp</span>
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Contact%20depuis%20Portfolio&body=${encodeURIComponent(messageText)}`}
                  className="flex-1 flex items-center justify-center gap-2 py-3 text-xs font-semibold text-slate-200 bg-[#0B2545] hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors text-center"
                >
                  <Mail className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Envoyer par Email</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
