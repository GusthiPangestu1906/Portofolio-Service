'use client';

import React from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Palette, Cpu, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data, lang }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-cyber-grid">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="DUAL PERSPECTIVE ARCHITECTURE"
          badgeClassName="border-purple-500/30 bg-purple-500/10 text-purple-400"
          titlePrefix={lang === 'id' ? 'Tentang ' : 'About '}
          titleHighlight="Gusthi Pangestu"
          subtitle={
            lang === 'id'
              ? 'Sinergi harmonis antara kreativitas multimedia dan presisi rekayasa komputasi.'
              : 'A seamless synergy between multimedia creativity and software engineering precision.'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Creative Side */}
          <div className="glass-panel glass-panel-purple rounded-3xl p-8 border border-pink-500/20 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-pink-500/20 transition-all"></div>
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono font-bold">
                  <Palette className="w-3.5 h-3.5" />
                  <span>{data.about.creative.badge[lang]}</span>
                </div>
                <span className="text-[11px] font-mono text-gray-500">LIVE OPS // MULTIMEDIA</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                {data.about.creative.title[lang]}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {data.about.creative.desc[lang]}
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-pink-500/20 text-pink-400 mt-0.5 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {data.about.creative.bullet1[lang]}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-pink-500/20 text-pink-400 mt-0.5 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {data.about.creative.bullet2[lang]}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono text-pink-400">OBS Studio • Photoshop • Canva • VJ</span>
              <span className="font-mono text-[11px] text-gray-500">15+ Events</span>
            </div>
          </div>

          {/* Card 2: Technical Side */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 border border-cyan-500/20 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all"></div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{data.about.technical.badge[lang]}</span>
                </div>
                <span className="text-[11px] font-mono text-gray-500">ENGINEERING // PENS</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                {data.about.technical.title[lang]}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {data.about.technical.desc[lang]}
              </p>

              <div className="space-y-3.5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {data.about.technical.bullet1[lang]}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-cyan-500/20 text-cyan-400 mt-0.5 shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">
                    {data.about.technical.bullet2[lang]}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
              <span className="font-mono text-cyan-400">Next.js • TypeScript • Tailwind • APIs</span>
              <span className="font-mono text-[11px] text-gray-500">HIMIT PENS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
