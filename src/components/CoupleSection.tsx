'use client';

import React from 'react';
import { Heart, Send } from 'lucide-react';
import { CouplePerson } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';
import { KbachCorner } from './KhmerOrnaments';

interface CoupleSectionProps {
  groom: CouplePerson;
  bride: CouplePerson;
  quote: {
    text: string;
    textKhmer?: string;
    source: string;
    sourceKhmer?: string;
  };
  greetingText: string;
  greetingTextKhmer?: string;
  themeConfig: ThemeConfig;
  locale?: SupportedLocale;
}

export default function CoupleSection({
  groom,
  bride,
  quote,
  greetingText,
  greetingTextKhmer,
  themeConfig,
  locale = 'km'
}: CoupleSectionProps) {
  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  const groomName = isKhmer ? (groom.fullNameKhmer || groom.fullName) : groom.fullName;
  const brideName = isKhmer ? (bride.fullNameKhmer || bride.fullName) : bride.fullName;

  const groomChildOrder = isKhmer ? (groom.childOrderTextKhmer || groom.childOrderText) : groom.childOrderText;
  const brideChildOrder = isKhmer ? (bride.childOrderTextKhmer || bride.childOrderText) : bride.childOrderText;

  const groomFather = isKhmer ? (groom.fatherNameKhmer || groom.fatherName) : groom.fatherName;
  const groomMother = isKhmer ? (groom.motherNameKhmer || groom.motherName) : groom.motherName;

  const brideFather = isKhmer ? (bride.fatherNameKhmer || bride.fatherName) : bride.fatherName;
  const brideMother = isKhmer ? (bride.motherNameKhmer || bride.motherName) : bride.motherName;

  const quoteText = isKhmer ? (quote.textKhmer || quote.text) : quote.text;
  const quoteSource = isKhmer ? (quote.sourceKhmer || quote.source) : quote.source;
  const greeting = isKhmer ? (greetingTextKhmer || greetingText) : greetingText;

  return (
    <section id="couple" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center scroll-mt-12">
      {/* Traditional Auspicious Quote Card */}
      <div className={`p-6 sm:p-8 rounded-[32px] ${themeConfig.cardBg} mb-14 max-w-2xl mx-auto shadow-md border-2 border-amber-300/80 relative`}>
        <div className="w-10 h-10 mx-auto rounded-full gold-foil-bg text-amber-950 flex items-center justify-center mb-4 shadow-md">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <p className={`text-sm sm:text-base italic leading-relaxed text-slate-700 font-medium ${isKhmer ? 'font-khmer' : 'font-serif'}`}>
          {quoteText}
        </p>
        <p className={`mt-3 text-xs sm:text-sm font-bold tracking-wider text-amber-800 uppercase ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          — {quoteSource}
        </p>
      </div>

      {/* Greeting Heading */}
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className={`text-2xl sm:text-3xl text-amber-950 mb-2 ${isKhmer ? 'font-khmer-moul' : 'font-playfair font-bold'}`}>
          {isKhmer ? 'សិរីសួស្តី អាពាហ៍ពិពាហ៍' : 'The Newlyweds'}
        </h2>
        <span className={`text-xs uppercase tracking-[0.25em] font-bold text-amber-800/70 block mb-4 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {isKhmer ? 'កូនប្រុស និង កូនស្រី' : 'The Groom & The Bride'}
        </span>
        <p className={`text-xs sm:text-sm text-slate-700 leading-loose px-4 max-w-2xl mx-auto ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {greeting}
        </p>
      </div>

      {/* Couple Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* 1. Groom Card (កូនកំលោះ) */}
        <div className={`p-6 sm:p-8 rounded-[36px] ${themeConfig.cardBg} flex flex-col items-center group hover:shadow-2xl transition-all duration-300 relative border-2 border-amber-300/80`}>
          <KbachCorner position="top-left" />
          <KbachCorner position="top-right" />
          <KbachCorner position="bottom-left" />
          <KbachCorner position="bottom-right" />

          {/* Role Pill */}
          <div className="absolute top-4 right-4">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold gold-foil-bg text-amber-950 shadow-xs ${isKhmer ? 'font-khmer-koulen' : 'font-sans'}`}>
              {t.groomTitle}
            </span>
          </div>

          {/* Golden Framed Photo */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 border-4 border-amber-300 shadow-xl group-hover:scale-105 transition-transform duration-500 mb-5 mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={groom.photoUrl}
              alt={groomName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Groom Full Name */}
          <h3 className={`text-2xl sm:text-3xl text-slate-900 tracking-wide ${isKhmer ? 'font-khmer-koulen' : 'font-playfair font-bold'}`}>
            {groomName}
          </h3>

          {/* Family Parentage */}
          <div className={`mt-4 text-xs sm:text-sm text-slate-600 space-y-1.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
            <p className="font-bold text-amber-900">{groomChildOrder}</p>
            <p className="font-medium text-slate-800">{groomFather}</p>
            <p className="text-slate-400 font-serif italic">{t.and}</p>
            <p className="font-medium text-slate-800">{groomMother}</p>
          </div>

          {/* Social Contact Links */}
          <div className="mt-5 flex items-center gap-2">
            {groom.telegram && (
              <a
                href={`https://t.me/${groom.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-sky-800 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors"
              >
                <Send className="w-3 h-3 text-sky-600" />
                <span>Telegram</span>
              </a>
            )}
          </div>
        </div>

        {/* 2. Bride Card (កូនក្រមុំ) */}
        <div className={`p-6 sm:p-8 rounded-[36px] ${themeConfig.cardBg} flex flex-col items-center group hover:shadow-2xl transition-all duration-300 relative border-2 border-amber-300/80`}>
          <KbachCorner position="top-left" />
          <KbachCorner position="top-right" />
          <KbachCorner position="bottom-left" />
          <KbachCorner position="bottom-right" />

          {/* Role Pill */}
          <div className="absolute top-4 right-4">
            <span className={`px-3.5 py-1 rounded-full text-xs font-bold gold-foil-bg text-amber-950 shadow-xs ${isKhmer ? 'font-khmer-koulen' : 'font-sans'}`}>
              {t.brideTitle}
            </span>
          </div>

          {/* Golden Framed Photo */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 border-4 border-amber-300 shadow-xl group-hover:scale-105 transition-transform duration-500 mb-5 mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bride.photoUrl}
              alt={brideName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Bride Full Name */}
          <h3 className={`text-2xl sm:text-3xl text-slate-900 tracking-wide ${isKhmer ? 'font-khmer-koulen' : 'font-playfair font-bold'}`}>
            {brideName}
          </h3>

          {/* Family Parentage */}
          <div className={`mt-4 text-xs sm:text-sm text-slate-600 space-y-1.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
            <p className="font-bold text-amber-900">{brideChildOrder}</p>
            <p className="font-medium text-slate-800">{brideFather}</p>
            <p className="text-slate-400 font-serif italic">{t.and}</p>
            <p className="font-medium text-slate-800">{brideMother}</p>
          </div>

          {/* Social Contact Links */}
          <div className="mt-5 flex items-center gap-2">
            {bride.telegram && (
              <a
                href={`https://t.me/${bride.telegram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-sky-800 bg-sky-50 border border-sky-200 hover:bg-sky-100 transition-colors"
              >
                <Send className="w-3 h-3 text-sky-600" />
                <span>Telegram</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
