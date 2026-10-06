'use client';

import React from 'react';
import { Heart, Send } from 'lucide-react';
import { CouplePerson } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { KbachCorner, GoldDivider } from './KhmerOrnaments';

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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
}

export default function CoupleSection({
  groom,
  bride,
  quote,
  greetingText,
  greetingTextKhmer,
  themeConfig
}: CoupleSectionProps) {
  return (
    <section id="couple" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center scroll-mt-12 font-khmer">
      {/* Traditional Quote Card */}
      <div className={`p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} mb-14 max-w-2xl mx-auto transition-all`}>
        <div className="w-9 h-9 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700 mb-4">
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <p className="font-khmer text-sm sm:text-base italic leading-relaxed text-slate-700 font-medium">
          {quote.textKhmer || quote.text}
        </p>
        <p className="mt-3 text-xs sm:text-sm font-bold tracking-wider text-amber-800 uppercase font-khmer">
          — {quote.sourceKhmer || quote.source}
        </p>
      </div>

      {/* Greeting Heading */}
      <div className="max-w-3xl mx-auto mb-14">
        <h2 className="font-khmer-moul text-xl sm:text-2xl text-amber-900 mb-3">
          សិរីសួស្តី អាពាហ៍ពិពាហ៍
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-slate-400 block mb-4">
          Groom & Bride
        </span>
        <p className="text-xs sm:text-sm text-slate-700 leading-loose px-4 max-w-2xl mx-auto">
          {greetingTextKhmer || greetingText}
        </p>
      </div>

      {/* Couple Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Groom Card (កូនកំលោះ) */}
        <div className={`p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} flex flex-col items-center group hover:shadow-xl transition-all duration-300 relative border-2 border-amber-300/80`}>
          <KbachCorner position="top-left" />
          <KbachCorner position="top-right" />
          <KbachCorner position="bottom-left" />
          <KbachCorner position="bottom-right" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 font-khmer">
              កូនកំលោះ (Groom)
            </span>
          </div>

          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 border-4 border-amber-300 shadow-lg group-hover:scale-105 transition-transform duration-500 mb-5 mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={groom.photoUrl}
              alt={groom.fullName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h3 className="font-khmer-koulen text-2xl sm:text-3xl text-slate-900 tracking-wide">
            {groom.fullNameKhmer || groom.fullName}
          </h3>
          <p className="text-xs uppercase tracking-widest text-amber-800 font-semibold mt-1 font-playfair">
            ({groom.fullName})
          </p>

          <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-1">
            <p className="font-semibold text-amber-900 font-khmer">{groom.childOrderTextKhmer || groom.childOrderText}</p>
            <p className="font-medium text-slate-800 mt-1">{groom.fatherNameKhmer || groom.fatherName}</p>
            <p className="text-slate-400 font-khmer">&</p>
            <p className="font-medium text-slate-800">{groom.motherNameKhmer || groom.motherName}</p>
          </div>

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
            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-rose-800 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@{groom.instagram}</span>
              </a>
            )}
          </div>
        </div>

        {/* Bride Card (កូនក្រមុំ) */}
        <div className={`p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} flex flex-col items-center group hover:shadow-xl transition-all duration-300 relative border-2 border-amber-300/80`}>
          <KbachCorner position="top-left" />
          <KbachCorner position="top-right" />
          <KbachCorner position="bottom-left" />
          <KbachCorner position="bottom-right" />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 font-khmer">
              កូនក្រមុំ (Bride)
            </span>
          </div>

          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 border-4 border-amber-300 shadow-lg group-hover:scale-105 transition-transform duration-500 mb-5 mt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bride.photoUrl}
              alt={bride.fullName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h3 className="font-khmer-koulen text-2xl sm:text-3xl text-slate-900 tracking-wide">
            {bride.fullNameKhmer || bride.fullName}
          </h3>
          <p className="text-xs uppercase tracking-widest text-amber-800 font-semibold mt-1 font-playfair">
            ({bride.fullName})
          </p>

          <div className="mt-4 text-xs sm:text-sm text-slate-600 space-y-1">
            <p className="font-semibold text-amber-900 font-khmer">{bride.childOrderTextKhmer || bride.childOrderText}</p>
            <p className="font-medium text-slate-800 mt-1">{bride.fatherNameKhmer || bride.fatherName}</p>
            <p className="text-slate-400 font-khmer">&</p>
            <p className="font-medium text-slate-800">{bride.motherNameKhmer || bride.motherName}</p>
          </div>

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
            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-rose-800 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@{bride.instagram}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
