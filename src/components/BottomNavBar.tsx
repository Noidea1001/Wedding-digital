'use client';

import React from 'react';
import { Home, Heart, Calendar, BookOpen, Image as ImageIcon, Gift, MessageCircle } from 'lucide-react';
import { ThemeConfig } from '@/lib/themes';

interface BottomNavBarProps {
  themeConfig: ThemeConfig;
}

export default function BottomNavBar({ themeConfig }: BottomNavBarProps) {
  const navItems = [
    { label: 'ទំព័រដើម', href: '#hero', icon: Home },
    { label: 'មង្គលការ', href: '#couple', icon: Heart },
    { label: 'កម្មវិធីបុណ្យ', href: '#events', icon: Calendar },
    { label: 'ប្រវត្តិស្នេហ៍', href: '#story', icon: BookOpen },
    { label: 'រូបថត', href: '#gallery', icon: ImageIcon },
    { label: 'ចំណងដៃ', href: '#gift', icon: Gift },
    { label: 'ជូនពរ', href: '#rsvp', icon: MessageCircle },
  ];

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-4 inset-x-0 z-30 flex justify-center px-2 pointer-events-none font-khmer">
      <div className={`pointer-events-auto flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full ${themeConfig.navBg} border backdrop-blur-xl shadow-2xl`}>
        {navItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button
              key={idx}
              onClick={() => scrollTo(item.href)}
              className="flex flex-col items-center justify-center p-1.5 sm:px-3 rounded-full hover:bg-black/5 active:scale-95 transition-all text-inherit group"
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform text-amber-700" />
              <span className="text-[8px] sm:text-[10px] font-bold tracking-tight mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
