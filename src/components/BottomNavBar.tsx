'use client';

import React from 'react';
import { Home, Heart, Calendar, BookOpen, Image as ImageIcon, Gift, MessageCircle } from 'lucide-react';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';

interface BottomNavBarProps {
  themeConfig: ThemeConfig;
  locale?: SupportedLocale;
}

export default function BottomNavBar({
  themeConfig,
  locale = 'km'
}: BottomNavBarProps) {
  const t = DICTIONARIES[locale] || DICTIONARIES.km;
  const isKhmer = locale === 'km';

  const navItems = [
    { label: t.navHome, href: '#hero', icon: Home },
    { label: t.navCouple, href: '#couple', icon: Heart },
    { label: t.navEvents, href: '#events', icon: Calendar },
    { label: t.navStory, href: '#story', icon: BookOpen },
    { label: t.navGallery, href: '#gallery', icon: ImageIcon },
    { label: t.navGift, href: '#gift', icon: Gift },
    { label: t.navRsvp, href: '#rsvp', icon: MessageCircle },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-4 inset-x-0 z-30 flex justify-center px-2 pointer-events-none">
      <div className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3.5 py-2 rounded-full ${themeConfig.navBg} border-2 border-amber-300 shadow-2xl backdrop-blur-xl`}>
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => scrollTo(item.href)}
              className="flex flex-col items-center justify-center p-1.5 sm:px-3 rounded-full hover:bg-black/5 active:scale-95 transition-all text-inherit group cursor-pointer"
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform text-amber-700" />
              <span className={`text-[8px] sm:text-[10px] font-bold tracking-tight mt-0.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
