'use client';

import React from 'react';
import { ProjectItem, Language } from '@/types/portfolio';
import { X, CheckCircle2, User, Building } from 'lucide-react';
import Image from 'next/image';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, lang, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d121d] border border-white/15 rounded-3xl overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-gray-300 hover:text-white border border-white/10 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-black/40">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d121d] via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
                {project.category}
              </span>
              <span className="text-xs font-mono text-gray-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                {project.period}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-cyan-400 font-mono">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-gray-400" />
                <span>{project.role[lang]}</span>
              </div>
              {project.clientOrOrg && (
                <>
                  <span className="text-gray-600">•</span>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span>{project.clientOrOrg}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              {lang === 'id' ? 'Deskripsi Lengkap' : 'Project Overview'}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {project.fullDesc[lang]}
            </p>
          </div>

          {project.highlights && project.highlights[lang].length > 0 && (
            <div className="space-y-3 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
              <h4 className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {lang === 'id' ? 'Sorotan Utama & Kontribusi' : 'Key Highlights & Contributions'}
              </h4>
              <div className="space-y-2">
                {project.highlights[lang].map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="pt-2">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
              {lang === 'id' ? 'Teknologi & Tools' : 'Stack & Tools'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
