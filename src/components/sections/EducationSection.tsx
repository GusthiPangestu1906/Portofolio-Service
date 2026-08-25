'use client';

import React from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GraduationCap, Calendar, MapPin, Building2 } from 'lucide-react';

interface EducationSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ data, lang }) => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="ACADEMIC BACKGROUND"
          badgeIcon={<GraduationCap className="w-3.5 h-3.5" />}
          badgeClassName="border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
          titlePrefix={lang === 'id' ? 'Riwayat ' : 'Education '}
          titleHighlight={lang === 'id' ? 'Pendidikan & Vokasi' : 'History & Training'}
          subtitle={
            lang === 'id'
              ? 'Fondasi akademis formal dan program vokasi yang membentuk kompetensi saya.'
              : 'Formal academic background and vocational certifications shaping my competencies.'
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.education.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel rounded-2xl p-6 border transition-all duration-300 relative group overflow-hidden ${
                item.isCurrent
                  ? 'border-cyan-500/40 bg-gradient-to-br from-cyan-950/20 via-transparent to-transparent shadow-[0_0_25px_rgba(6,182,212,0.1)]'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                    item.isCurrent
                      ? 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300'
                      : 'bg-white/5 border-white/10 text-gray-400'
                  }`}
                >
                  {item.badge}
                </span>

                <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-2">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-cyan-400 shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                    {item.degree[lang]}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-3.5 pl-11">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>{item.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-11">
                {item.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
