'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Navigation, Video } from 'lucide-react';
import { WeddingEvent } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';

interface EventsSectionProps {
  events: WeddingEvent[];
  dressCode?: {
    title: string;
    description: string;
    colors: string[];
  };
  themeConfig: ThemeConfig;
}

export default function EventsSection({
  events,
  dressCode,
  themeConfig
}: EventsSectionProps) {
  // Format date helper: "2026-12-12" -> "Sabtu, 12 Desember 2026"
  const formatDateIndo = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return new Intl.DateTimeFormat('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }).format(d);
    } catch {
      return dateStr;
    }
  };

  return (
    <section id="events" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-[0.25em] text-rose-700 uppercase block mb-2">
          Save The Date
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800">
          Rangkaian Acara
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Dengan sukacita kami mengundang kehadiran Bapak/Ibu/Saudara/i pada serangkaian prosesi pernikahan kami:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} flex flex-col justify-between group hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
          >
            {/* Top accent badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-rose-100 text-rose-800 uppercase">
                {event.title}
              </span>
            </div>

            <div className="space-y-4 my-2">
              {/* Date */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Tanggal</p>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">
                    {formatDateIndo(event.date)}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Waktu</p>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">
                    Pukul {event.startTime} - {event.endTime} {event.timeZone}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0 border border-rose-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Lokasi / Tempat</p>
                  <p className="font-semibold text-slate-800 text-sm sm:text-base">
                    {event.venueName}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {event.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Map if provided */}
            {event.mapsEmbedUrl && (
              <div className="my-4 w-full h-36 rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title={`Map for ${event.title}`}
                  src={event.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-2.5 items-center">
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-rose-700 hover:bg-rose-800 text-white shadow-md shadow-rose-900/10 transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Petunjuk Arah (Google Maps)</span>
              </a>

              {event.livestreamUrl && (
                <a
                  href={event.livestreamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors"
                >
                  <Video className="w-4 h-4" />
                  <span>Live Streaming</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dress Code Section */}
      {dressCode && (
        <div className={`mt-10 p-6 rounded-3xl ${themeConfig.cardBg} text-center max-w-xl mx-auto`}>
          <h4 className="font-playfair text-lg font-bold text-slate-800">{dressCode.title}</h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4">{dressCode.description}</p>
          <div className="flex items-center justify-center gap-3">
            {dressCode.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full border-2 border-white shadow-md transform hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                title={`Color ${idx + 1}: ${color}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
