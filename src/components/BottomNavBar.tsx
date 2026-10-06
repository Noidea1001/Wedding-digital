'use client';

import React, { useState, useEffect } from 'react';
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
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'couple', 'events', 'story', 'gallery', 'gift', 'rsvp'];
    const handleScroll = () => {
      let current = 'hero';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.navHome,    href: 'hero',    icon: Home },
    { label: t.navCouple,  href: 'couple',  icon: Heart },
    { label: t.navEvents,  href: 'events',  icon: Calendar },
    { label: t.navStory,   href: 'story',   icon: BookOpen },
    { label: t.navGallery, href: 'gallery', icon: ImageIcon },
    { label: t.navGift,    href: 'gift',    icon: Gift },
    { label: t.navRsvp,    href: 'rsvp',    icon: MessageCircle },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setActiveSection(id);
  };

  const isLight = !themeConfig.bodyBg.includes('#0') && !themeConfig.bodyBg.includes('#1');

  return (
    <nav className="fixed bottom-0 inset-x-0 z-30 pointer-events-none">
      {/* Fade gradient above nav */}
      <div
        className="absolute bottom-full left-0 right-0 h-16 pointer-events-none"
        style={{
          background: isLight
            ? 'linear-gradient(to bottom, transparent, rgba(255,253,247,0.85))'
            : 'linear-gradient(to bottom, transparent, rgba(10,17,40,0.85))',
        }}
      />

      <div className="flex justify-center px-3 pb-3 pt-1 pointer-events-auto">
        <div
          className="flex items-stretch gap-0.5 sm:gap-1 rounded-2xl overflow-hidden"
          style={{
            background: isLight
              ? 'rgba(255, 253, 249, 0.97)'
              : 'rgba(15, 20, 40, 0.97)',
            boxShadow: '0 8px 30px -4px rgba(0,0,0,0.18), 0 0 0 1px rgba(212,175,55,0.3)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            maxWidth: '100%',
            width: 'fit-content',
          }}
        >
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;

            return (
              <button
                key={idx}
                onClick={() => scrollTo(item.href)}
                className="relative flex flex-col items-center justify-center gap-0.5 transition-all duration-200 cursor-pointer group"
                style={{
                  minWidth: '44px',
                  minHeight: '52px',
                  padding: '6px 8px',
                  borderRadius: '12px',
                  color: isActive
                    ? '#8B6914'
                    : isLight ? '#6B5E4B' : '#9CA3AF',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(255,236,153,0.2))'
                    : 'transparent',
                }}
              >
                {/* Active indicator dot */}
                {isActive && (
                  <span
                    className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{ background: '#D4AF37' }}
                  />
                )}

                <Icon
                  className="transition-transform duration-200 group-hover:scale-110"
                  style={{
                    width: '16px',
                    height: '16px',
                    color: isActive ? '#D4AF37' : 'inherit',
                    filter: isActive ? 'drop-shadow(0 0 4px rgba(212,175,55,0.5))' : 'none',
                  }}
                />
                <span
                  className="text-center leading-tight"
                  style={{
                    fontSize: isKhmer ? '8px' : '8px',
                    fontFamily: isKhmer ? 'Kantumruy Pro, sans-serif' : 'inherit',
                    fontWeight: isActive ? 700 : 500,
                    whiteSpace: 'nowrap',
                    maxWidth: '44px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
