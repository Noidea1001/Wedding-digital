'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Sparkles, 
  Sliders, 
  Share2, 
  Music, 
  CreditCard, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Smartphone,
  Gift,
  Send,
  Layers,
  Globe
} from 'lucide-react';
import { THEME_CONFIGS } from '@/lib/themes';
import { ALL_PRESET_WEDDINGS } from '@/lib/mockData';
import { WeddingTheme } from '@/types/wedding';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const templatesList = [
    {
      id: 'visal-thida',
      themeKey: 'khmer-royal-gold',
      category: 'Khmer Heritage',
      title: 'Khmer Royal Gold (រាជវង្សបុរាណ)',
      desc: 'Traditional Royal Palace gold with sacred lotus motifs & burgundy accents',
      couple: 'សុខ វិសាល & ចាន់ ធីតា',
      badge: 'Khmer Traditional'
    },
    {
      id: 'dara-bopha',
      themeKey: 'khmer-angkor-lotus',
      category: 'Khmer Heritage',
      title: 'Angkor Lotus Romance (ផ្កាឈូកអង្គរ)',
      desc: 'Sacred Angkor lotus blossoms with blush pink & champagne gold',
      couple: 'ម៉េង ដារ៉ា & គង់ បុប្ផា',
      badge: 'Lotus Blossom'
    },
    {
      id: 'julien-charlotte',
      themeKey: 'french-rose-gold',
      category: 'Romantic Floral',
      title: 'French Rose Gold & Lace (Paris Romance)',
      desc: 'Parisian bridal romance with delicate rose gold, cream lace & peony blooms',
      couple: 'Julien & Charlotte (Paris, France)',
      badge: 'French Romance'
    },
    {
      id: 'alexander-victoria',
      themeKey: 'black-tie-luxury',
      category: 'Modern Luxury',
      title: 'Black Tie Luxury Onyx (NYC / London)',
      desc: 'High-fashion editorial aesthetic with deep onyx black & metallic champagne gold',
      couple: 'Alexander & Victoria (New York, USA)',
      badge: 'Black Tie Gala'
    },
    {
      id: 'oliver-sophia',
      themeKey: 'modern-sage-botanical',
      category: 'Boho & Nature',
      title: 'Tuscany Sage Botanical Garden',
      desc: 'Earthy Italian olive branches, calming sage green & sun-bleached linen',
      couple: 'Oliver & Sophia (Tuscany, Italy)',
      badge: 'Botanical Garden'
    },
    {
      id: 'leo-maya',
      themeKey: 'tropical-beach',
      category: 'Boho & Nature',
      title: 'Tropical Beach Sunset (Koh Rong / Bali)',
      desc: 'Turquoise ocean waters, warm golden beach sand & tropical coral vibes',
      couple: 'Leo & Maya (Tropical Destination)',
      badge: 'Beach Wedding'
    }
  ];

  const categories = ['All', 'Khmer Heritage', 'Romantic Floral', 'Modern Luxury', 'Boho & Nature'];

  const filteredTemplates = selectedCategory === 'All'
    ? templatesList
    : templatesList.filter((t) => t.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#FFFDF7] text-slate-800 flex flex-col selection:bg-amber-200 selection:text-amber-950 font-khmer">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-500 text-amber-950 flex items-center justify-center shadow-md shadow-amber-900/15 group-hover:scale-105 transition-transform font-bold">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-khmer-moul text-base text-amber-900 tracking-wide block leading-none">
                សំបុត្រការឌីជីថល
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Global & Khmer Wedding Platform
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/invite/visal-thida"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-amber-900 hover:bg-amber-50 transition-all border border-amber-200"
            >
              <span>មើលសំបុត្រគំរូ (Live Demo)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-900/15 transition-all"
            >
              <span>Dashboard Host</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-14 pb-20 sm:pt-20 sm:pb-28 px-4 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-amber-200/35 via-yellow-100/25 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold mb-6 shadow-xs animate-fadeIn">
            <Globe className="w-3.5 h-3.5 text-amber-700" />
            <span>វេទិកាសំបុត្រអាពាហ៍ពិពាហ៍ឌីជីថលសកលលោក (Worldwide & Khmer)</span>
          </div>

          <h1 className="font-khmer-moul text-3xl sm:text-5xl lg:text-6xl text-amber-950 tracking-wide leading-[1.35] mb-3">
            សិរីសួស្តី អាពាហ៍ពិពាហ៍
          </h1>

          <p className="font-khmer-koulen text-xl sm:text-3xl text-amber-800 tracking-wide mb-6">
            Worldwide Elegant Digital Wedding Invitations
          </p>

          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Create luxurious, interactive digital wedding invitations with 3D wax seal golden envelope opening, sweet falling lotus petals, romantic wedding music, strict dual-language support (<strong>ភាសាខ្មែរ & English</strong>), instant sharing, and seamless digital gift registry via <strong>ABA KHQR, PayPal, Wise, and Zelle</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/dashboard/builder"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>បើកផ្ទាំងកែសម្រួល (Open Builder)</span>
            </Link>

            <Link
              href="/invite/visal-thida"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl bg-white hover:bg-amber-50/70 border border-amber-300 text-amber-950 font-bold text-xs sm:text-sm shadow-xs transition-all"
            >
              <span>មើលគំរូសំបុត្រ (Live Preview)</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* MANY CHOICES TEMPLATE SHOWCASE SECTION */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              ជម្រើសម៉ូតជាច្រើន (Many Choices & Global Themes)
            </span>
            <h2 className="font-khmer-koulen text-2xl sm:text-3xl text-slate-900 tracking-wide">
              កម្រងម៉ូតសំបុត្រមង្គលការទូទាំងពិភពលោក (Wedding Collection)
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((tmpl) => (
              <div
                key={tmpl.id}
                className="bg-white rounded-3xl p-6 border-2 border-slate-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-950 border border-amber-300">
                      {tmpl.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-serif italic">{tmpl.category}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 mb-1 group-hover:text-amber-800 transition-colors">
                    {tmpl.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-700 mb-3">
                    {tmpl.couple}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {tmpl.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                  <Link
                    href={`/invite/${tmpl.id}`}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-amber-50 text-slate-800 font-bold text-xs transition-colors border border-slate-200"
                  >
                    <span>មើលសំបុត្រ</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/dashboard/builder`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    <span>កែសម្រួល</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Worldwide Highlights Grid */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Multi-language & Global Sharing */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5 border border-sky-200">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              ភាសាខ្មែរ & English (Pure Bilingual Dual Mode)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Strict language isolation: When Khmer is selected, enjoy 100% traditional Khmer vocabulary, ceremonies, and numbers. When English is selected, enjoy 100% clean international English with no mixed text.
            </p>
          </div>

          {/* Card 2: Music & Opening Animation */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 border border-amber-200">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              ភ្លេងការ & Curated Music Library
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Choice of traditional Khmer Phleng Kar, Canon in D, romantic acoustic guitars, lo-fi sunsets, or custom soundtrack URLs with spinning vinyl disc.
            </p>
          </div>

          {/* Card 3: Worldwide Cashless & KHQR */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-200">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">
              ABA KHQR, PayPal & Worldwide Gifting
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Accept wedding gifts effortlessly through ABA KHQR (Bakong), PayPal, Wise multi-currency, Zelle, Venmo, or direct bank wire with 1-click copy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-[#FFFDF7] border-t border-slate-200 text-center text-xs text-slate-500 font-khmer">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-amber-600 fill-current" />
            <span className="font-bold text-slate-800">សំបុត្រការឌីជីថល (Global & Khmer Digital Wedding)</span>
            <span>— Worldwide Platform</span>
          </div>
          <p>© 2026 Global Digital Wedding Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
