'use client';

import React, { useState } from 'react';
import { PortfolioData, Language, ProjectItem } from '@/types/portfolio';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectDetailModal } from '@/components/modals/ProjectDetailModal';
import { FolderGit2, ArrowUpRight, Eye } from 'lucide-react';
import Image from 'next/image';

interface ProjectsSectionProps {
  data: PortfolioData;
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data, lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: lang === 'id' ? 'Semua Proyek' : 'All Projects' },
    { id: 'event', label: lang === 'id' ? 'Event & Stage' : 'Events & Stage' },
    { id: 'esports', label: 'Esports' },
    { id: 'branding', label: 'Branding & PDD' },
    { id: 'training', label: lang === 'id' ? 'Pelatihan' : 'Workshops' },
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? data.projects
      : data.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="PORTFOLIO SHOWCASE"
          badgeIcon={<FolderGit2 className="w-3.5 h-3.5" />}
          titlePrefix={lang === 'id' ? 'Dokumentasi & ' : 'Selected '}
          titleHighlight={lang === 'id' ? 'Karya Proyek' : 'Projects & Archives'}
          subtitle={
            lang === 'id'
              ? 'Koleksi rekam jejak visual, siaran live OBS, branding event, dan peran kepanitiaan.'
              : 'Curated collection of live broadcasting, event stage productions, and visual design.'
          }
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20 font-bold scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group cursor-pointer relative"
            >
              <div>
                <div className="relative w-full h-52 overflow-hidden bg-black/40">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d121d] via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-black/70 border border-white/15 text-cyan-300 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold shadow-lg shadow-cyan-500/30 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      {lang === 'id' ? 'Lihat Detail' : 'View Details'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[11px] font-mono text-cyan-400 mb-1 font-semibold">
                    {project.role[lang]}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4">
                    {project.shortDesc[lang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-5 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                <span className="font-mono text-[11px] text-gray-500">{project.period}</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{lang === 'id' ? 'Detail' : 'Explore'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={activeProject}
        lang={lang}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
