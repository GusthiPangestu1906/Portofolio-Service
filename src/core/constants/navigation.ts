export interface NavLink {
  href: string;
  label: {
    id: string;
    en: string;
  };
}

export const NAV_LINKS: NavLink[] = [
  { href: '#home', label: { id: 'Beranda', en: 'Home' } },
  { href: '#about', label: { id: 'Tentang', en: 'About' } },
  { href: '#education', label: { id: 'Pendidikan', en: 'Education' } },
  { href: '#services', label: { id: 'Layanan', en: 'Services' } },
  { href: '#skills', label: { id: 'Keahlian', en: 'Skills' } },
  { href: '#experience', label: { id: 'Pengalaman', en: 'Experience' } },
  { href: '#projects', label: { id: 'Proyek', en: 'Projects' } },
  { href: '#contact', label: { id: 'Kontak', en: 'Contact' } },
];
