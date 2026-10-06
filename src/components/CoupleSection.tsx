'use client';

import React from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { CouplePerson } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';

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
    source: string;
  };
  greetingText: string;
  themeConfig: ThemeConfig;
}

export default function CoupleSection({
  groom,
  bride,
  quote,
  greetingText,
  themeConfig
}: CoupleSectionProps) {
  return (
    <section id="couple" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto text-center scroll-mt-12">
      {/* Quote Card */}
      <div className={`p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} mb-14 max-w-2xl mx-auto transition-all`}>
        <div className="w-8 h-8 mx-auto rounded-full bg-rose-100 flex items-center justify-center text-rose-700 mb-4">
          <Heart className="w-4 h-4 fill-current" />
        </div>
        <p className="font-cormorant text-lg sm:text-xl italic leading-relaxed text-slate-700">
          {quote.text}
        </p>
        <p className="mt-3 text-xs sm:text-sm font-semibold tracking-wider text-rose-700 uppercase">
          — {quote.source}
        </p>
      </div>

      {/* Greeting Heading */}
      <div className="max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-[0.25em] text-rose-700 uppercase block mb-2">
          Assalamu’alaikum Wr. Wb. / Salam Sejahtera
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800">
          Pasangan Mempelai
        </h2>
        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed px-4">
          {greetingText}
        </p>
      </div>

      {/* Couple Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Groom Card */}
        <div className={`p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} flex flex-col items-center group hover:shadow-lg transition-all duration-300`}>
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 border-2 border-rose-300 shadow-md group-hover:scale-105 transition-transform duration-500 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={groom.photoUrl}
              alt={groom.fullName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-900">
            {groom.fullName}
          </h3>
          <p className="text-xs uppercase tracking-widest text-rose-700 font-semibold mt-1">
            ({groom.nickname})
          </p>
          <div className="mt-4 text-xs sm:text-sm text-slate-600">
            <p className="font-medium text-slate-500">{groom.childOrderText}</p>
            <p className="font-semibold text-slate-800 mt-1">{groom.fatherName}</p>
            <p className="text-slate-500">&</p>
            <p className="font-semibold text-slate-800">{groom.motherName}</p>
          </div>
          {groom.instagram && (
            <a
              href={`https://instagram.com/${groom.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-rose-800 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@{groom.instagram}</span>
            </a>
          )}
        </div>

        {/* Bride Card */}
        <div className={`p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} flex flex-col items-center group hover:shadow-lg transition-all duration-300`}>
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden p-1.5 border-2 border-rose-300 shadow-md group-hover:scale-105 transition-transform duration-500 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={bride.photoUrl}
              alt={bride.fullName}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-900">
            {bride.fullName}
          </h3>
          <p className="text-xs uppercase tracking-widest text-rose-700 font-semibold mt-1">
            ({bride.nickname})
          </p>
          <div className="mt-4 text-xs sm:text-sm text-slate-600">
            <p className="font-medium text-slate-500">{bride.childOrderText}</p>
            <p className="font-semibold text-slate-800 mt-1">{bride.fatherName}</p>
            <p className="text-slate-500">&</p>
            <p className="font-semibold text-slate-800">{bride.motherName}</p>
          </div>
          {bride.instagram && (
            <a
              href={`https://instagram.com/${bride.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-rose-800 bg-rose-50 border border-rose-200 hover:bg-rose-100 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>@{bride.instagram}</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
