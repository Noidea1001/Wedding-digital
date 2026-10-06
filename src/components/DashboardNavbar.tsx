'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, LayoutDashboard, Sliders, Users, MessageSquare, ExternalLink } from 'lucide-react';

export default function DashboardNavbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: 'Ringkasan', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Editor Undangan', href: '/dashboard/builder', icon: Sliders },
    { label: 'Daftar Tamu & WhatsApp', href: '/dashboard/guests', icon: Users },
    { label: 'RSVP & Ucapan', href: '/dashboard/wishes', icon: MessageSquare },
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-700 to-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-900/20 group-hover:scale-105 transition-transform">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="font-playfair text-lg font-bold text-slate-900 tracking-tight block leading-none">
                  Vows & Bloom
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-rose-700">
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
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-rose-50 text-rose-800'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Live Preview Button */}
          <div className="flex items-center gap-2">
            <Link
              href="/invite/sarah-david"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all"
            >
              <span>Lihat Undangan</span>
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
                className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  isActive
                    ? 'bg-rose-50 text-rose-800'
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
