'use client';

import React from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MonitorPlay, Palette, CodeXml, Sparkles, Check, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ data, lang }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MonitorPlay':
        return <MonitorPlay className="w-6 h-6 text-cyan-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-pink-400" />;
      case 'CodeXml':
        return <CodeXml className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="SOLUTIONS & EXPERTISE"
          badgeClassName="border-pink-500/30 bg-pink-500/10 text-pink-400"
          titlePrefix={lang === 'id' ? 'Layanan & ' : 'My Specialized '}
          titleHighlight={lang === 'id' ? 'Keahlian' : 'Services'}
          subtitle={
            lang === 'id'
              ? 'Solusi komprehensif untuk kesuksesan visual panggung, branding visual, dan website modern.'
              : 'Comprehensive solutions for live stage visuals, brand identity, and modern web architectures.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.services.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-3xl p-7 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all duration-300 shadow-lg">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title[lang]}
                </h3>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {service.desc[lang]}
                </p>

                <div className="space-y-2.5 mb-8">
                  {service.features[lang].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <div className="p-0.5 rounded bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/link"
              >
                <span>{lang === 'id' ? 'Konsultasikan Kebutuhan' : 'Discuss Project'}</span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
