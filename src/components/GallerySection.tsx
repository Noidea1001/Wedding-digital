'use client';

import React, { useState } from 'react';
import { X, ZoomIn, Heart } from 'lucide-react';
import { GalleryPhoto } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';

interface GallerySectionProps {
  gallery: GalleryPhoto[];
  themeConfig: ThemeConfig;
}

export default function GallerySection({ gallery, themeConfig }: GallerySectionProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-[0.25em] text-rose-700 uppercase block mb-2">
          Galeri Kenangan
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800">
          Our Moments
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Momen-momen indah yang terabadikan dalam setiap langkah perjalanan cinta kami.
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {gallery.map((photo, index) => (
          <div
            key={photo.id || index}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.url}
              alt={photo.caption || `Wedding moment ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 w-10 h-10 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
            {photo.caption && (
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-medium truncate">{photo.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors z-10"
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
              className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            {selectedPhoto.caption && (
              <p className="text-white/90 text-sm font-medium mt-3 text-center px-4">
                {selectedPhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
