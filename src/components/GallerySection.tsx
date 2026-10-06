'use client';

import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryPhoto } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';

interface GallerySectionProps {
  gallery: GalleryPhoto[];
  themeConfig: ThemeConfig;
  locale?: SupportedLocale;
}

export default function GallerySection({
  gallery,
  themeConfig,
  locale = 'km'
}: GallerySectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  if (!gallery || gallery.length === 0) return null;

  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      <div className="text-center mb-12">
        <h2 className={`text-2xl sm:text-3xl text-amber-950 mb-2 ${isKhmer ? 'font-khmer-moul' : 'font-playfair font-bold'}`}>
          {t.galleryTitle}
        </h2>
        <span className={`text-xs uppercase tracking-[0.25em] font-bold text-amber-800/70 block mb-3 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {isKhmer ? 'ពេលវេលាដ៏ស្រស់ស្អាតបំផុត' : 'Captured Moments'}
        </span>
        <p className={`mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {t.galleryDesc}
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {gallery.map((photo, index) => {
          const caption = isKhmer ? (photo.captionKhmer || photo.caption) : photo.caption;

          return (
            <div
              key={photo.id || index}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-square rounded-[24px] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 bg-slate-100 border-2 border-amber-300/80"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.url}
                alt={caption || `Moment ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-10 h-10 rounded-full bg-white/95 text-slate-900 flex items-center justify-center shadow-md">
                  <ZoomIn className="w-5 h-5 text-amber-700" />
                </div>
              </div>
              {caption && (
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className={`text-white text-xs font-medium truncate ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                    {caption}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10 cursor-pointer"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl max-h-[90vh] flex flex-col items-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption || 'Enlarged photo'}
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border-2 border-amber-300/80"
            />
            {selectedPhoto.caption && (
              <p className={`text-white/90 text-sm font-medium mt-3 text-center px-4 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                {isKhmer ? (selectedPhoto.captionKhmer || selectedPhoto.caption) : selectedPhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
