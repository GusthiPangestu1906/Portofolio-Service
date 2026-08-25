'use client';

import React, { useState } from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { 
  Wrench, 
  Radio, 
  MonitorPlay, 
  Tv, 
  Sliders, 
  Sparkles, 
  Layers, 
  PenTool, 
  FileCode, 
  Atom, 
  Layout, 
  Server, 
  Network 
} from 'lucide-react';

interface SkillsSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ data, lang }) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Radio': return <Radio className="w-4 h-4" />;
      case 'MonitorPlay': return <MonitorPlay className="w-4 h-4" />;
      case 'Tv': return <Tv className="w-4 h-4" />;
      case 'Sliders': return <Sliders className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'Layers': return <Layers className="w-4 h-4" />;
      case 'Figma': return <Layers className="w-4 h-4" />;
      case 'PenTool': return <PenTool className="w-4 h-4" />;
      case 'FileCode': return <FileCode className="w-4 h-4" />;
      case 'Atom': return <Atom className="w-4 h-4" />;
      case 'Layout': return <Layout className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Network': return <Network className="w-4 h-4" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'EXPERT':
        return 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300';
      case 'ADVANCED':
        return 'bg-purple-500/15 border-purple-500/30 text-purple-300';
      case 'INTERMEDIATE':
        return 'bg-yellow-500/15 border-yellow-500/30 text-yellow-300';
      default:
        return 'bg-white/10 border-white/20 text-gray-300';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="ARSENAL & PROFICIENCY"
          badgeIcon={<Wrench className="w-3.5 h-3.5" />}
          titlePrefix={lang === 'id' ? 'Keahlian & ' : 'Technical '}
          titleHighlight={lang === 'id' ? 'Teknologi' : 'Skills & Tools'}
          subtitle={
            lang === 'id'
              ? 'Tingkat penguasaan software multimedia, desain grafis, dan pengembangan web.'
              : 'Proficiency matrix in multimedia software, graphic tools, and web development stacks.'
          }
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {data.skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-lg shadow-cyan-500/20 font-bold scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {cat.title[lang]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {data.skillCategories[activeCategory].skills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-white group-hover:scale-110 transition-transform"
                    style={{ color: skill.color }}
                  >
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono text-gray-400">
                      {skill.level}% Proficiency
                    </span>
                  </div>
                </div>

                <span
                  className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${getBadgeColor(
                    skill.badge
                  )}`}
                >
                  {skill.badge}
                </span>
              </div>

              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
