'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types/portfolio';
import { NAV_LINKS } from '@/core/constants/navigation';
import { Menu, X, Terminal, Languages, Code2, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070d]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-purple-500 to-pink-500 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              GUSTHI<span className="text-cyan-400 font-mono">.DEV</span>
            </span>
            <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase">
              {lang === 'id' ? 'Visual & Dev' : 'Visual & Code'}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-gray-300 hover:text-cyan-400 px-3 py-1.5 rounded-full hover:bg-white/[0.05] transition-colors"
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Celestiq Interactive Mode */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-purple-500/40 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400 transition-all shadow-[0_0_15px_rgba(168,85,247,0.15)] group cursor-pointer"
            title="Launch Celestiq Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-purple-400 group-hover:rotate-6 transition-transform" />
            <span>Celestiq</span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping"></span>
          </button>

          {/* Language Switcher */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
            title="Toggle Language (ID / EN)"
          >
            <Languages className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-mono uppercase font-bold text-[11px] text-cyan-400">{lang}</span>
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer font-bold"
          >
            <span>{lang === 'id' ? 'Hubungi' : "Let's Talk"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-cyan-400 font-mono text-xs font-bold"
          >
            {lang.toUpperCase()}
          </button>

          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg border border-purple-500/30 bg-purple-500/10 text-purple-300"
          >
            <Terminal className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-white/10 bg-white/5 text-gray-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#07090e]/95 backdrop-blur-xl border-b border-white/10 px-4 py-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label[lang]}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center text-xs font-bold py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black"
              >
                {lang === 'id' ? 'Mulai Kolaborasi' : "Let's Connect"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
