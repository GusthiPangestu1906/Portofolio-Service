export type Language = 'id' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'esports' | 'event' | 'branding' | 'web' | 'training';
  role: {
    id: string;
    en: string;
  };
  period: string;
  shortDesc: {
    id: string;
    en: string;
  };
  fullDesc: {
    id: string;
    en: string;
  };
  image: string;
  tags: string[];
  clientOrOrg?: string;
  highlights?: {
    id: string[];
    en: string[];
  };
  link?: string;
  github?: string;
}

export interface ExperienceItem {
  id: string;
  role: {
    id: string;
    en: string;
  };
  company: string;
  period: string;
  location: string;
  desc: {
    id: string;
    en: string;
  };
  badge: {
    id: string;
    en: string;
  };
  iconType: 'obs' | 'design' | 'figma' | 'code' | 'certificate';
}

export interface SkillCategory {
  title: {
    id: string;
    en: string;
  };
  skills: {
    name: string;
    level: number; // 0-100
    badge: 'EXPERT' | 'ADVANCED' | 'INTERMEDIATE';
    icon: string;
    color: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: {
    id: string;
    en: string;
  };
  period: string;
  location: string;
  desc: {
    id: string;
    en: string;
  };
  badge: string;
  isCurrent?: boolean;
}

export interface ServiceItem {
  id: string;
  title: {
    id: string;
    en: string;
  };
  desc: {
    id: string;
    en: string;
  };
  features: {
    id: string[];
    en: string[];
  };
  icon: string;
  color: string;
}

export interface AIChatNode {
  text: string;
  options?: {
    text: string;
    next?: string;
    action?: string;
  }[];
}

export interface PortfolioData {
  name: string;
  titleRoles: {
    id: string[];
    en: string[];
  };
  location: string;
  email: string;
  phone: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
  stats: {
    eventsCompleted: string;
    experienceYears: string;
    happyClients: string;
  };
  hero: {
    badge: {
      id: string;
      en: string;
    };
    greeting: {
      id: string;
      en: string;
    };
    taglinePrefix: {
      id: string;
      en: string;
    };
    taglineHighlight: {
      id: string;
      en: string;
    };
    description: {
      id: string;
      en: string;
    };
    btnStart: {
      id: string;
      en: string;
    };
    btnCv: {
      id: string;
      en: string;
    };
  };
  about: {
    creative: {
      badge: {
        id: string;
        en: string;
      };
      title: {
        id: string;
        en: string;
      };
      desc: {
        id: string;
        en: string;
      };
      bullet1: {
        id: string;
        en: string;
      };
      bullet2: {
        id: string;
        en: string;
      };
    };
    technical: {
      badge: {
        id: string;
        en: string;
      };
      title: {
        id: string;
        en: string;
      };
      desc: {
        id: string;
        en: string;
      };
      bullet1: {
        id: string;
        en: string;
      };
      bullet2: {
        id: string;
        en: string;
      };
    };
  };
  education: EducationItem[];
  services: ServiceItem[];
  skillCategories: SkillCategory[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
}
