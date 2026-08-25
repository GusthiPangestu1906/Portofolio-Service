'use client';

import { useState, useCallback, useEffect } from 'react';
import { Language } from '@/types/portfolio';

export function useLanguage(initialLang: Language = 'id') {
  const [lang, setLang] = useState<Language>(initialLang);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    if (saved === 'id' || saved === 'en') {
      setLang(saved);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      const nextLang = prev === 'id' ? 'en' : 'id';
      localStorage.setItem('portfolio_lang', nextLang);
      return nextLang;
    });
  }, []);

  const setSpecificLanguage = useCallback((newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('portfolio_lang', newLang);
  }, []);

  return {
    lang,
    toggleLanguage,
    setLanguage: setSpecificLanguage,
    isIndonesian: lang === 'id',
    isEnglish: lang === 'en',
  };
}
