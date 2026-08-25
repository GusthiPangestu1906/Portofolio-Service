'use client';

import React from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { Github, Linkedin, Instagram, ArrowUp, Code2 } from 'lucide-react';

interface FooterProps {
  data: PortfolioData;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ data, lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#04060a] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wide">
                GUSTHI PANGESTU
              </div>
              <div className="text-[11px] text-gray-500 font-mono">
                © {new Date().getFullYear()} • Next.js 15 & TypeScript (Clean Architecture)
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href={data.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={data.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={data.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 p-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all cursor-pointer"
          >
            <span>{lang === 'id' ? 'Kembali ke Atas' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
