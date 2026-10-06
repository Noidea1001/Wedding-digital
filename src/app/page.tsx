'use client';

import React from 'react';
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
  Layers
} from 'lucide-react';
import { THEME_CONFIGS } from '@/lib/themes';
import { ALL_PRESET_WEDDINGS } from '@/lib/mockData';

export default function HomePage() {
  const templatesList = [
    {
      id: 'visal-thida',
      themeKey: 'khmer-royal-gold',
      titleKhmer: 'រាជវង្សបុរាណ (Khmer Royal Gold)',
      desc: 'រចនាបថប្រពៃណីរាជវាំងខ្មែរ ក្បាច់ភ្ញីទេស ពណ៌មាស និងក្រហមឆ្អៅ',
      couple: 'សុខ វិសាល & ចាន់ ធីតា',
      badge: 'ពេញនិយមបំផុត (Most Popular)'
    },
    {
      id: 'dara-bopha',
      themeKey: 'khmer-angkor-lotus',
      titleKhmer: 'ផ្កាឈូកអង្គរ (Angkor Lotus Romance)',
      desc: 'ផ្កាឈូកពិសិដ្ឋអង្គរ ស្រទន់ រ៉ូមែនទិក ជាមួយពណ៌ផ្កាឈូក និងមាស',
      couple: 'ម៉េង ដារ៉ា & គង់ បុប្ផា',
      badge: 'រ៉ូមែនទិក (Romantic)'
    },
    {
      id: 'ratanak-socheata',
      themeKey: 'khmer-modern-emerald',
      titleKhmer: 'ត្បូងមរកត (Modern Emerald Jade)',
      desc: 'ភាពថ្លៃថ្នូរទំនើប ត្បូងមរកតបៃតងខ្ចី និងពណ៌ទឹកមាសស្រាល',
      couple: 'ជា រតនៈ & អ៊ុ សុជាតា',
      badge: 'ទំនើបប្រណិត (Luxury Chic)'
    },
    {
      id: 'seyha-muniroth',
      themeKey: 'khmer-midnight-star',
      titleKhmer: 'រាត្រីតារា (Midnight Starlight)',
      desc: 'រចនាបថកម្មវិធីពេលល្ងាចដ៏ប្រណិត ពន្លឺផ្កាយ និងពេជ្រភ្លឺផ្លេក',
      couple: 'តែ សីហា & ហេង មុន្នីរ័ត្ន',
      badge: 'រាត្រីសមោសរ (Evening Banquet)'
    },
    {
      id: 'vibol-devi',
      themeKey: 'khmer-silk-terracotta',
      titleKhmer: 'សូត្រខ្មែរ (Traditional Silk & Amber)',
      desc: 'ក្បាច់សំពត់ចងក្បិនសូត្រខ្មែរ ពណ៌មាសលឿងទុំ និងកក់ក្តៅ',
      couple: 'អ៊ុក វិបុល & ស៊ន ទេវី',
      badge: 'សូត្រខ្មែរ (Khmer Silk)'
    }
  ];

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
                Khmer Digital Wedding
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/invite/visal-thida"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-amber-900 hover:bg-amber-50 transition-all border border-amber-200"
            >
              <span>មើលគំរូផ្ទាល់ (Live Demo)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-900/15 transition-all"
            >
              <span>គ្រប់គ្រងសំបុត្រ (Dashboard)</span>
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
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>វេទិកាសំបុត្រអាពាហ៍ពិពាហ៍ឌីជីថលខ្មែរទំនើបបំផុត</span>
          </div>

          <h1 className="font-khmer-moul text-3xl sm:text-5xl lg:text-6xl text-amber-950 tracking-wide leading-[1.35] mb-3">
            សិរីសួស្តី អាពាហ៍ពិពាហ៍
          </h1>

          <p className="font-khmer-koulen text-xl sm:text-3xl text-amber-800 tracking-wide mb-6">
            រចនាបថប្រពៃណីខ្មែរ & ភាពថ្លៃថ្នូរទាន់សម័យ
          </p>

          <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            បង្កើតសំបុត្រអញ្ជើញឌីជីថលជាមួយការបើកស្រោមសំបុត្របែបប្រពៃណី, ផ្ញើតាម <strong>Telegram & WhatsApp</strong> ត្រឹមតែ ១-Click, ចាក់ភ្លេងការ, ស្កេនចងដៃតាម <strong>ABA KHQR</strong>, និងកត់ត្រាវត្តមានភ្ញៀវដោយស្វ័យប្រវត្តិ។
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/dashboard/builder"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>កែសម្រួលសំបុត្រ (Open Editor)</span>
            </Link>

            <Link
              href="/invite/visal-thida"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl bg-white hover:bg-amber-50/70 border border-amber-300 text-amber-950 font-bold text-xs sm:text-sm shadow-xs transition-all"
            >
              <span>មើលគំរូជាក់ស្តែង (View Demo)</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* MANY TEMPLATES SHOWCASE SECTION */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              ជ្រើសរើសម៉ូតគំរូស្រេចៗ (Pre-made Templates)
            </span>
            <h2 className="font-khmer-koulen text-2xl sm:text-3xl text-slate-900 tracking-wide">
              ម៉ូតសំបុត្រការខ្មែរជាច្រើនជម្រើស (Khmer Wedding Templates)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              ចុចលើម៉ូតណាមួយដើម្បីមើលសំបុត្រអញ្ជើញផ្ទាល់ ឬកែសម្រួលសម្រាប់មង្គលការរបស់លោកអ្នក
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templatesList.map((tmpl) => (
              <div
                key={tmpl.id}
                className="bg-white rounded-3xl p-6 border-2 border-amber-200/80 shadow-md hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      {tmpl.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-serif italic">Khmer Theme</span>
                  </div>

                  <h3 className="font-khmer-koulen text-lg text-slate-900 mb-1 group-hover:text-amber-800 transition-colors">
                    {tmpl.titleKhmer}
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
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs transition-colors border border-amber-200"
                  >
                    <span>មើលសំបុត្រ</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/dashboard/builder`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs transition-colors shadow-xs"
                  >
                    <span>ជ្រើសរើសម៉ូតនេះ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Telegram & WhatsApp */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center mb-5 border border-sky-200">
              <Send className="w-6 h-6" />
            </div>
            <h3 className="font-khmer-koulen text-xl text-slate-900 mb-2 tracking-wide">
              ផ្ញើ Telegram & WhatsApp ១-Click
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ប្រព័ន្ធបង្កើតតំណភ្ជាប់ឈ្មោះភ្ញៀវផ្ទាល់ខ្លួន និងសារអញ្ជើញជាភាសាខ្មែរត្រឹមត្រូវ រួចបើកកម្មវិធី Telegram ឬ WhatsApp ផ្ញើចេញភ្លាមៗ។
            </p>
          </div>

          {/* Card 2: Traditional Music & Wax Seal */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 border border-amber-200">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="font-khmer-koulen text-xl text-slate-900 mb-2 tracking-wide">
              ភ្លេងការខ្មែរ & បើកសំបុត្ររ៉ូមែនទិក
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ភ្ញៀវទទួលបានអារម្មណ៍រំភើបជាមួយការបើកស្រោមសំបុត្រមង្គលការ បាញ់ផ្កាក្រដាស Confetti និងភ្លេងការប្រពៃណីខ្មែរបន្លឺឡើងដោយស្វ័យប្រវត្តិ។
            </p>
          </div>

          {/* Card 3: ABA KHQR & RSVP */}
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 border border-emerald-200">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-khmer-koulen text-xl text-slate-900 mb-2 tracking-wide">
              ស្កេន ABA KHQR & កត់ត្រាភ្ញៀវ RSVP
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              បង្កភាពងាយស្រួលដល់ភ្ញៀវចងដៃតាមរយៈ Bakong KHQR (ABA, Wing, ACLEDA) និងតាមដានចំនួនតុ-ចំនួនភ្ញៀវចូលរួមយ៉ាងជាក់លាក់។
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-[#FFFDF7] border-t border-amber-200/80 text-center text-xs text-slate-500 font-khmer">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-amber-600 fill-current" />
            <span className="font-bold text-slate-800">សំបុត្រការឌីជីថល (Khmer Digital Wedding)</span>
            <span>— រក្សាសិទ្ធិគ្រប់យ៉ាង</span>
          </div>
          <p>© 2026 Khmer Digital Wedding Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
