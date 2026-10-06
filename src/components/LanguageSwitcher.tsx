'use client';

import React from 'react';
import { SupportedLocale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: SupportedLocale;
  onLocaleChange: (locale: SupportedLocale) => void;
}

export default function LanguageSwitcher({
  currentLocale,
  onLocaleChange
}: LanguageSwitcherProps) {
  const isKhmer = currentLocale === 'km';

  const toggleLanguage = () => {
    onLocaleChange(isKhmer ? 'en' : 'km');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-bold border-2 border-amber-300 shadow-md backdrop-blur-md hover:bg-amber-50 hover:border-amber-400 active:scale-95 transition-all duration-300"
      title={isKhmer ? 'Switch to English' : 'ប្តូរទៅជាភាសាខ្មែរ'}
      aria-label={isKhmer ? 'Switch language to English' : 'Switch language to Khmer'}
    >
      {/* Visual pill toggle */}
      <span className="flex items-center gap-1.5">
        <span className="text-sm">{isKhmer ? '🇰🇭' : '🇬🇧'}</span>
        <span className="font-semibold text-amber-950 text-[11px] sm:text-xs">
          {isKhmer ? 'ភាសាខ្មែរ' : 'English'}
        </span>
      </span>

      {/* Switch arrow badge */}
      <span className="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold">
        {isKhmer ? 'EN' : 'ខ្មែរ'}
      </span>
    </button>
  );
}
