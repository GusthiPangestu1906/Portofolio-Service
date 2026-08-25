'use client';

import React from 'react';
import { PortfolioData, Language } from '@/types/portfolio';
import { useTypewriter } from '@/hooks/useTypewriter';
import { 
  ArrowRight, 
  FolderGit2, 
  Terminal, 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  Tv, 
  Layers, 
  Code
} from 'lucide-react';
import Image from 'next/image';

interface HeroSectionProps {
  data: PortfolioData;
  lang: Language;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, lang, onOpenTerminal }) => {
  const { displayText } = useTypewriter({
    words: data.titleRoles[lang],
    typingSpeed: 75,
    deletingSpeed: 35,
    pauseDuration: 2000,
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-pink-500/10 rounded-full blur-[90px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span className="text-xs font-mono font-medium text-cyan-300">
                {data.hero.badge[lang]}
              </span>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm sm:text-base font-mono uppercase tracking-widest text-gray-400">
                {data.hero.greeting[lang]} <span className="text-white font-bold">{data.name}</span>
              </h2>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {data.hero.taglinePrefix[lang]}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-glow-cyan">
                  {data.hero.taglineHighlight[lang]}
                </span>
              </h1>

              {/* Dynamic Typewriter */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-2xl font-mono text-cyan-400 font-semibold flex items-center">
                  &gt; {displayText}
                  <span className="w-2.5 h-6 bg-cyan-400 ml-1 inline-block animate-pulse"></span>
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {data.hero.description[lang]}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-black font-bold text-sm shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <span>{data.hero.btnCv[lang]}</span>
                <FolderGit2 className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-cyan-500/40 text-white font-medium text-sm transition-all hover:scale-[1.02] active:scale-95 cursor-pointer backdrop-blur-md"
              >
                <span>{data.hero.btnStart[lang]}</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="flex items-center gap-2 px-4 py-3 rounded-xl border border-purple-500/40 bg-purple-900/20 hover:bg-purple-900/40 text-purple-300 font-mono text-xs transition-all hover:scale-[1.02] cursor-pointer shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                <Terminal className="w-4 h-4 text-purple-400" />
                <span>Celestiq RPG</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-gray-400">
              <a
                href={data.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={data.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:text-cyan-400 hover:border-cyan-500/50 transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={data.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:text-pink-400 hover:border-pink-500/50 transition-all hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:text-yellow-400 hover:border-yellow-500/50 transition-all hover:-translate-y-0.5"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-40 blur-xl"></div>
              
              <div className="relative glass-panel rounded-3xl p-6 border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded border border-cyan-500/30">
                    STATUS: ACTIVE
                  </div>
                </div>

                <div className="relative flex flex-col items-center text-center">
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-cyan-500/40 p-1 bg-gradient-to-b from-cyan-500/20 to-purple-500/20 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                    <div className="w-full h-full rounded-xl overflow-hidden relative bg-[#07090e]">
                      <Image
                        src="/assets/celestiq/Gusthi Pangestu (1).JPG"
                        alt={data.name}
                        fill
                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-4">{data.name}</h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">{data.location}</p>
                </div>

                <div className="grid grid-cols-3 gap-2.5 mt-6 pt-4 border-t border-white/10">
                  <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5 text-center">
                    <div className="text-xs font-bold text-cyan-400 font-mono">{data.stats.eventsCompleted}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{lang === 'id' ? 'Event' : 'Events'}</div>
                  </div>
                  <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5 text-center">
                    <div className="text-xs font-bold text-purple-400 font-mono">{data.stats.experienceYears}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{lang === 'id' ? 'Pengalaman' : 'Experience'}</div>
                  </div>
                  <div className="bg-white/[0.03] p-2.5 rounded-xl border border-white/5 text-center">
                    <div className="text-xs font-bold text-pink-400 font-mono">100%</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{lang === 'id' ? 'Dedikasi' : 'Dedication'}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 justify-center mt-4">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 flex items-center gap-1">
                    <Tv className="w-3 h-3" /> OBS Master
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-pink-500/10 text-pink-300 border border-pink-500/20 flex items-center gap-1">
                    <Layers className="w-3 h-3" /> Design Lead
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 flex items-center gap-1">
                    <Code className="w-3 h-3" /> IT PENS
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
