'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { LoveStoryItem } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';

interface LoveStorySectionProps {
  stories: LoveStoryItem[];
  themeConfig: ThemeConfig;
  locale?: SupportedLocale;
}

export default function LoveStorySection({
  stories,
  themeConfig,
  locale = 'km'
}: LoveStorySectionProps) {
  if (!stories || stories.length === 0) return null;

  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  return (
    <section id="story" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12">
      <div className="text-center mb-14">
        <h2 className={`text-2xl sm:text-3xl text-amber-950 mb-2 ${isKhmer ? 'font-khmer-moul' : 'font-playfair font-bold'}`}>
          {t.loveStoryTitle}
        </h2>
        <span className={`text-xs uppercase tracking-[0.25em] font-bold text-amber-800/70 block mb-3 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {isKhmer ? 'ដំណើររឿងស្នេហ៍ដ៏មានអត្ថន័យ' : 'Our Beautiful Journey'}
        </span>
        <p className={`mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {t.loveStoryDesc}
        </p>
      </div>

      <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-32 space-y-12">
        {stories.map((story) => {
          const year = isKhmer ? (story.yearKhmer || story.year) : story.year;
          const title = isKhmer ? (story.titleKhmer || story.title) : story.title;
          const description = isKhmer ? (story.descriptionKhmer || story.description) : story.description;

          return (
            <div key={story.id} className="relative pl-6 sm:pl-8 group">
              {/* Timeline node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full gold-foil-bg border-2 border-yellow-200 text-amber-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300">
                <Heart className="w-3.5 h-3.5 fill-current" />
              </div>

              {/* Left year indicator on larger screens */}
              <div className="hidden sm:block absolute -left-32 top-2 text-right w-24">
                <span className={`font-bold text-2xl text-amber-900 ${isKhmer ? 'font-khmer-koulen' : 'font-cormorant'}`}>
                  {year}
                </span>
              </div>

              {/* Story Card */}
              <div className={`p-6 rounded-[28px] ${themeConfig.cardBg} border-2 border-amber-300/80 hover:shadow-xl transition-all duration-300`}>
                <div className="sm:hidden mb-2">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold gold-foil-bg text-amber-950 ${isKhmer ? 'font-khmer-koulen' : 'font-sans'}`}>
                    {year}
                  </span>
                </div>
                <h3 className={`text-lg sm:text-xl font-bold text-slate-900 ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
                  {title}
                </h3>
                <p className={`mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {description}
                </p>

                {story.imageUrl && (
                  <div className="mt-4 rounded-2xl overflow-hidden max-h-64 border border-amber-200/80 shadow-xs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={story.imageUrl}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
