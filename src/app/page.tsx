'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { useLanguage } from '@/hooks/useLanguage';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { CelestiqTerminalModal } from '@/components/modals/CelestiqTerminalModal';

export default function HomePage() {
  const { lang, toggleLanguage } = useLanguage('id');
  const [terminalOpen, setTerminalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#05070d] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300 relative overflow-x-hidden font-sans">
      {/* Background Cyber Grid */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none opacity-40 -z-20"></div>

      {/* Navigation */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <HeroSection
          data={portfolioData}
          lang={lang}
          onOpenTerminal={() => setTerminalOpen(true)}
        />

        <AboutSection
          data={portfolioData}
          lang={lang}
        />

        <EducationSection
          data={portfolioData}
          lang={lang}
        />

        <ServicesSection
          data={portfolioData}
          lang={lang}
        />

        <SkillsSection
          data={portfolioData}
          lang={lang}
        />

        <ExperienceSection
          data={portfolioData}
          lang={lang}
        />

        <ProjectsSection
          data={portfolioData}
          lang={lang}
        />

        <ContactSection
          data={portfolioData}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        data={portfolioData}
        lang={lang}
      />

      {/* Interactive RPG Celestiq Cyber Terminal Modal */}
      <CelestiqTerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        data={portfolioData}
        lang={lang}
      />
    </div>
  );
}
