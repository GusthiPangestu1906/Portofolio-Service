'use client';

import React from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Briefcase, Calendar, MapPin, Tv, Palette, Award, Code } from 'lucide-react';

interface ExperienceSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data, lang }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'obs': return <Tv className="w-4 h-4 text-cyan-400" />;
      case 'design': return <Palette className="w-4 h-4 text-pink-400" />;
      case 'certificate': return <Award className="w-4 h-4 text-yellow-400" />;
      default: return <Code className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="TRACK RECORD"
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          badgeClassName="border-purple-500/30 bg-purple-500/10 text-purple-400"
          titlePrefix={lang === 'id' ? 'Pengalaman & ' : 'Professional '}
          titleHighlight={lang === 'id' ? 'Rekam Jejak' : 'Experience'}
          subtitle={
            lang === 'id'
              ? 'Portofolio kepanitiaan event besar, operator siaran visual, dan sertifikasi profesional.'
              : 'Proven track record in major event leadership, live stage broadcast, and certified design excellence.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.experiences.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    {exp.badge[lang]}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                    {getIcon(exp.iconType)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                      {exp.role[lang]}
                    </h3>
                    <p className="text-xs font-semibold text-cyan-400 mt-1">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mb-3.5 pl-11">
                  <MapPin className="w-3 h-3 text-gray-500" />
                  <span>{exp.location}</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed pl-11">
                  {exp.desc[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
