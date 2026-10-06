'use client';

import React from 'react';
import { Calendar, Clock, MapPin, Navigation, Video } from 'lucide-react';
import { WeddingEvent } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
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
}

export default function EventsSection({
  events,
  dressCode,
  themeConfig
}: EventsSectionProps) {
  return (
    <section id="events" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12 font-khmer">
      <div className="text-center mb-14">
        <h2 className="font-khmer-moul text-xl sm:text-2xl text-amber-900 mb-2">
          កម្មវិធីបុណ្យអាពាហ៍ពិពាហ៍
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-3">
          Wedding Schedule
        </span>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          យើងខ្ញុំសូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមតាមពេលវេលា និងទីកន្លែងដូចខាងក្រោម៖
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <div
            key={event.id || idx}
            className={`p-6 rounded-3xl ${themeConfig.cardBg} flex flex-col justify-between group hover:shadow-xl transition-all duration-300 relative border-2 border-amber-300/80`}
          >
            <KbachCorner position="top-left" />
            <KbachCorner position="top-right" />
            <KbachCorner position="bottom-left" />
            <KbachCorner position="bottom-right" />
            {/* Top accent badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-amber-100 text-amber-950 font-khmer">
                {event.titleKhmer || event.title}
              </span>
            </div>

            <div className="space-y-3.5 my-2">
              {/* Date */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">កាលបរិច្ឆេទ</p>
                  <p className="font-semibold text-slate-800 text-xs sm:text-sm">
                    {event.dateKhmer || event.date}
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ពេលវេលា</p>
                  <p className="font-semibold text-slate-800 text-xs sm:text-sm">
                    ម៉ោង {event.startTime} - {event.endTime}
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">ទីតាំង</p>
                  <p className="font-semibold text-slate-800 text-xs sm:text-sm">
                    {event.venueName}
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                    {event.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Map if provided */}
            {event.mapsEmbedUrl && (
              <div className="my-3 w-full h-32 rounded-2xl overflow-hidden border border-slate-200">
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
            <div className="pt-3">
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold bg-amber-700 hover:bg-amber-800 text-white shadow-xs transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>មើលផែនទី (Google Maps)</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dress Code Section */}
      {dressCode && (
        <div className={`mt-10 p-6 rounded-3xl ${themeConfig.cardBg} text-center max-w-xl mx-auto border border-amber-200/80`}>
          <h4 className="font-khmer-koulen text-lg text-slate-900 tracking-wide">
            {dressCode.titleKhmer || dressCode.title}
          </h4>
          <p className="text-xs text-slate-600 mt-1 mb-4 leading-relaxed font-khmer">
            {dressCode.descriptionKhmer || dressCode.description}
          </p>
          <div className="flex items-center justify-center gap-3">
            {dressCode.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-8 h-8 rounded-full border-2 border-white shadow-md transform hover:scale-110 transition-transform"
                style={{ backgroundColor: color }}
                title={`Color ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
