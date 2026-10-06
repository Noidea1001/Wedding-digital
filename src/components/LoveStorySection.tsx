'use client';

import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { LoveStoryItem } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';

interface LoveStorySectionProps {
  stories: LoveStoryItem[];
  themeConfig: ThemeConfig;
}

export default function LoveStorySection({ stories, themeConfig }: LoveStorySectionProps) {
  if (!stories || stories.length === 0) return null;

  return (
    <section id="story" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12">
      <div className="text-center mb-14">
        <span className="text-xs font-semibold tracking-[0.25em] text-rose-700 uppercase block mb-2">
          Perjalanan Cinta Kami
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800">
          Our Love Story
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Setiap kisah cinta itu indah, namun kisah cinta kitalah yang paling istimewa.
        </p>
      </div>

      <div className="relative border-l-2 border-rose-200 ml-4 sm:ml-32 space-y-12">
        {stories.map((story, index) => (
          <div key={story.id} className="relative pl-6 sm:pl-8 group">
            {/* Timeline node */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-rose-100 border-2 border-rose-500 text-rose-600 flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
              <Heart className="w-3.5 h-3.5 fill-current" />
            </div>

            {/* Left year indicator on larger screens */}
            <div className="hidden sm:block absolute -left-32 top-2 text-right w-24">
              <span className="font-cormorant font-bold text-2xl text-rose-800">
                {story.year}
              </span>
            </div>

            {/* Story Card */}
            <div className={`p-6 rounded-3xl ${themeConfig.cardBg} hover:shadow-lg transition-all duration-300`}>
              <div className="sm:hidden mb-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800">
                  {story.year}
                </span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-slate-800">
                {story.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {story.description}
              </p>

              {story.imageUrl && (
                <div className="mt-4 rounded-2xl overflow-hidden max-h-64 border border-rose-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={story.imageUrl}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
