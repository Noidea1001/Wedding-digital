'use client';

import React, { useState } from 'react';
import { Globe, Check } from 'lucide-react';
import { SupportedLocale } from '@/lib/i18n';

interface LanguageSwitcherProps {
  currentLocale: SupportedLocale;
  onLocaleChange: (locale: SupportedLocale) => void;
}

export default function LanguageSwitcher({
  currentLocale,
  onLocaleChange
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: SupportedLocale; label: string; flag: string }[] = [
    { code: 'km', label: 'ភាសាខ្មែរ (Khmer)', flag: '🇰🇭' },
    { code: 'en', label: 'English (Global)', flag: '🇬🇧' },
    { code: 'fr', label: 'Français (French)', flag: '🇫🇷' },
    { code: 'zh', label: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'id', label: 'Bahasa Indonesia', flag: '🇮🇩' },
  ];

  const current = languages.find((l) => l.code === currentLocale) || languages[0];

  return (
    <div className="relative font-sans">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-slate-800 text-xs font-bold border border-slate-200 shadow-md backdrop-blur-md hover:bg-slate-50 transition-all"
        title="Change Language / ផ្លាស់ប្តូរភាសា"
      >
        <Globe className="w-3.5 h-3.5 text-amber-700" />
        <span>{current.flag}</span>
        <span className="hidden sm:inline">{current.label.split(' ')[0]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 py-1.5 z-50 animate-fadeIn">
          <p className="px-3 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            Select Language:
          </p>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLocaleChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left text-xs font-semibold flex items-center justify-between hover:bg-slate-50 transition-colors ${
                currentLocale === lang.code ? 'text-amber-800 bg-amber-50/70 font-bold' : 'text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.label}</span>
              </div>
              {currentLocale === lang.code && <Check className="w-3.5 h-3.5 text-amber-700" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
