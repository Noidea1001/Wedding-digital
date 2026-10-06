'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Navigation, Video } from 'lucide-react';
import { WeddingEvent } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';
import { KbachCorner } from './KhmerOrnaments';

interface EventsSectionProps {
  events: WeddingEvent[];
  dressCode?: {
    title: string;
    titleKhmer?: string;
    description: string;
    descriptionKhmer?: string;
    colors: string[];
  };
  themeConfig: ThemeConfig;
  locale?: SupportedLocale;
}

export default function EventsSection({
  events,
  dressCode,
  themeConfig,
  locale = 'km'
}: EventsSectionProps) {
  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  return (
    <section id="events" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      <div className="text-center mb-14">
        <p className="text-[10px] uppercase tracking-[0.22em] font-bold mb-2"
          style={{ color: '#9B7920', fontFamily: isKhmer ? 'Kantumruy Pro, sans-serif' : 'inherit' }}>
          {isKhmer ? 'កាលវិភាគកម្មវិធី' : 'Order of Events'}
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            lineHeight: 1.2,
            fontFamily: isKhmer ? 'Moul, cursive' : 'var(--font-playfair), Georgia, serif',
            fontWeight: isKhmer ? 400 : 700,
            color: '#4A2800',
            letterSpacing: isKhmer ? '0.02em' : '-0.01em',
          }}
        >
          {t.eventsSchedule}
        </h2>
        <div className="w-12 h-0.5 mx-auto rounded-full mt-3 mb-3" style={{ background: 'linear-gradient(90deg, #BF953F, #FCF6BA, #AA771C)' }} />
        <p
          className="text-slate-600 max-w-lg mx-auto"
          style={{
            fontSize: 'clamp(0.8125rem, 2vw, 0.9375rem)',
            fontFamily: isKhmer ? 'Kantumruy Pro, sans-serif' : 'inherit',
            lineHeight: isKhmer ? 1.85 : 1.65,
          }}
        >
          {t.scheduleDesc}
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => {
          const eventTitle = isKhmer ? (event.titleKhmer || event.title) : event.title;
          const eventDate = isKhmer ? (event.dateKhmer || event.date) : event.date;
          const venue = isKhmer ? (event.venueNameKhmer || event.venueName) : event.venueName;
          const address = isKhmer ? (event.addressKhmer || event.address) : event.address;

          return (
            <div
              key={event.id || idx}
              className={`p-6 rounded-[32px] ${themeConfig.cardBg} flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 relative border-2 border-amber-300/80`}
            >
              <KbachCorner position="top-left" />
              <KbachCorner position="top-right" />
              <KbachCorner position="bottom-left" />
              <KbachCorner position="bottom-right" />

              {/* Top Accent Badge */}
              <div className="mb-4">
                <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold gold-foil-bg text-amber-950 shadow-xs ${isKhmer ? 'font-khmer-koulen' : 'font-sans'}`}>
                  {eventTitle}
                </span>
              </div>

              {/* Ceremony Information */}
              <div className="space-y-3.5 my-2">
                {/* Date */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold text-slate-400 uppercase tracking-wider ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {t.date}
                    </p>
                    <p className={`font-semibold text-slate-800 text-xs sm:text-sm ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {eventDate}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold text-slate-400 uppercase tracking-wider ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {t.time}
                    </p>
                    <p className={`font-semibold text-slate-800 text-xs sm:text-sm ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {isKhmer ? `ម៉ោង ${event.startTime} - ${event.endTime}` : `${event.startTime} - ${event.endTime}`}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 border border-amber-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className={`text-[10px] font-bold text-slate-400 uppercase tracking-wider ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {t.venue}
                    </p>
                    <p className={`font-semibold text-slate-800 text-xs sm:text-sm ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {venue}
                    </p>
                    <p className={`text-[11px] text-slate-600 mt-0.5 leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Directions & Livestream Links */}
              <div className="mt-5 pt-4 border-t border-amber-200/60 flex flex-col gap-2">
                {event.mapsUrl && (
                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-800 border border-amber-300 shadow-xs hover:bg-amber-50 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Navigation className="w-3.5 h-3.5 text-amber-700" />
                    <span className={isKhmer ? 'font-khmer' : 'font-sans'}>
                      {t.getDirections}
                    </span>
                  </a>
                )}
                {event.livestreamUrl && (
                  <a
                    href={event.livestreamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-rose-50 text-rose-800 border border-rose-200 shadow-xs hover:bg-rose-100 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Video className="w-3.5 h-3.5 text-rose-600" />
                    <span>{isKhmer ? 'ទស្សនាការផ្សាយផ្ទាល់' : 'Watch Livestream'}</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dress Code Section */}
      {dressCode && (
        <div className={`mt-10 p-6 rounded-3xl ${themeConfig.cardBg} border-2 border-amber-300/80 max-w-xl mx-auto text-center shadow-md`}>
          <h4 className={`text-sm sm:text-base font-bold text-amber-950 mb-1 ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
            {isKhmer ? (dressCode.titleKhmer || dressCode.title) : dressCode.title}
          </h4>
          <p className={`text-xs text-slate-600 mb-3 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
            {isKhmer ? (dressCode.descriptionKhmer || dressCode.description) : dressCode.description}
          </p>
          <div className="flex items-center justify-center gap-3">
            {dressCode.colors.map((color, cIdx) => (
              <div
                key={cIdx}
                className="w-7 h-7 rounded-full shadow-sm border-2 border-white ring-1 ring-slate-200"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
