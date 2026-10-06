'use client';

import React from 'react';
import { Home, Heart, Calendar, BookOpen, Image as ImageIcon, Gift, MessageCircle } from 'lucide-react';
import { ThemeConfig } from '@/lib/themes';

interface BottomNavBarProps {
  themeConfig: ThemeConfig;
}

export default function BottomNavBar({ themeConfig }: BottomNavBarProps) {
  const navItems = [
    { label: 'Home', href: '#hero', icon: Home },
    { label: 'Mempelai', href: '#couple', icon: Heart },
    { label: 'Acara', href: '#events', icon: Calendar },
    { label: 'Cerita', href: '#story', icon: BookOpen },
    { label: 'Galeri', href: '#gallery', icon: ImageIcon },
    { label: 'Kado', href: '#gift', icon: Gift },
    { label: 'RSVP', href: '#rsvp', icon: MessageCircle },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-4 inset-x-0 z-30 flex justify-center px-4 pointer-events-none">
      <div className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full ${themeConfig.navBg} border backdrop-blur-xl shadow-2xl`}>
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => scrollTo(item.href)}
              className="flex flex-col items-center justify-center p-2 sm:px-3 rounded-full hover:bg-black/5 active:scale-95 transition-all text-inherit group"
            >
              <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:scale-110 transition-transform" />
              <span className="text-[9px] sm:text-[10px] font-medium tracking-tight mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
