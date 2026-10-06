'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, LayoutDashboard, Sliders, Users, MessageSquare, ExternalLink } from 'lucide-react';

export default function DashboardNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'ទំព័រទូទៅ (Overview)', href: '/dashboard', icon: LayoutDashboard },
    { label: 'កែសម្រួលសំបុត្រ (Editor)', href: '/dashboard/builder', icon: Sliders },
    { label: 'បញ្ជីភ្ញៀវ & Telegram / WA', href: '/dashboard/guests', icon: Users },
    { label: 'សៀវភៅជូនពរ (RSVP)', href: '/dashboard/wishes', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-amber-200 font-khmer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-500 text-amber-950 flex items-center justify-center shadow-md shadow-amber-900/15 group-hover:scale-105 transition-transform font-bold">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-khmer-moul text-sm text-amber-900 tracking-wide block leading-none">
                  សំបុត្រការឌីជីថល
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Host Platform
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-amber-100 text-amber-950 border border-amber-300'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-700" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Live Preview Button */}
          <div className="flex items-center gap-2">
            <Link
              href="/invite/visal-thida"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold shadow-xs transition-all"
            >
              <span>មើលសំបុត្រ</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Mobile Horizontal Subnav */}
        <div className="flex md:hidden overflow-x-auto py-2 gap-1 border-t border-slate-100 scrollbar-none">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${
                  isActive
                    ? 'bg-amber-100 text-amber-950'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
