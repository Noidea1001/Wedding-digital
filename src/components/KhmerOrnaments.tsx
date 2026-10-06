'use client';

import React from 'react';

// Ornate Royal Gold Khmer Kbach Corner (ក្បាច់ផ្កាច័ន្ទជ្រុង)
export function KbachCorner({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const getTransforms = () => {
    switch (position) {
      case 'top-right':
        return 'top-2 right-2 rotate-90';
      case 'bottom-right':
        return 'bottom-2 right-2 rotate-180';
      case 'bottom-left':
        return 'bottom-2 left-2 -rotate-90';
      default:
        return 'top-2 left-2';
    }
  };

  return (
    <svg
      className={`absolute w-8 h-8 sm:w-10 sm:h-10 text-amber-500/80 pointer-events-none transition-opacity ${getTransforms()}`}
      viewBox="0 0 44 44"
      fill="none"
      stroke="currentColor"
    >
      {/* Outer corner line */}
      <path
        d="M 3 41 L 3 14 C 3 7 7 3 14 3 L 41 3"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      {/* Inner decorative filigree loop */}
      <path
        d="M 7 35 L 7 16 C 7 10.5 10.5 7 16 7 L 35 7"
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      {/* Sacred lotus petal node */}
      <circle cx="14" cy="14" r="3" fill="#D4AF37" />
      <path
        d="M 14 7 C 16.5 9.5 18.5 11.5 18.5 14 C 18.5 16.5 16.5 18.5 14 18.5"
        strokeWidth="1.2"
        strokeOpacity="0.8"
      />
      <circle cx="3" cy="3" r="1.8" fill="#F59E0B" />
      <circle cx="26" cy="7" r="1.5" fill="#D4AF37" />
      <circle cx="7" cy="26" r="1.5" fill="#D4AF37" />
    </svg>
  );
}

// Royal Khmer Sacred Lotus Gold Divider (ក្បាច់ផ្កាឈូកខណ្ឌកណ្តាល)
export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6 w-full max-w-xs sm:max-w-sm mx-auto">
      {/* Left filigree wing */}
      <div className="flex-1 flex items-center">
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-amber-300 to-amber-500" />
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
      </div>

      {/* Center Sacred Lotus Icon */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center shadow-md shadow-amber-900/20 shrink-0 p-1.5 border border-yellow-200">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M12 2C12 2 13.5 6 15 8C16.5 10 19 11 19 13C19 15.5 17 18 12 20C7 18 5 15.5 5 13C5 11 7.5 10 9 8C10.5 6 12 2 12 2Z" />
          <path d="M12 7C12.8 9.5 14.5 11.5 16.5 12.5C14.5 13.5 13 15 12 17C11 15 9.5 13.5 7.5 12.5C9.5 11.5 11.2 9.5 12 7Z" opacity="0.4" fill="#FFF" />
        </svg>
      </div>

      {/* Right filigree wing */}
      <div className="flex-1 flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
        <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent via-amber-300 to-amber-500" />
      </div>
    </div>
  );
}

// Traditional Khmer Temple Arch Frame (ក្លោងទ្វារបុរាណ)
export function KhmerArchFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-6 sm:p-10 rounded-[40px] bg-white/90 backdrop-blur-xl border-2 border-amber-300/80 shadow-[0_20px_50px_rgba(212,175,55,0.2)]">
      {/* Top ornamental crown */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-amber-950 border border-yellow-200 shadow-md">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
        </svg>
        <span className="font-khmer-moul text-xs tracking-wider">សិរីមង្គល</span>
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L15 8L21 9L16.5 14L18 20L12 17L6 20L7.5 14L3 9L9 8L12 2Z" />
        </svg>
      </div>

      <KbachCorner position="top-left" />
      <KbachCorner position="top-right" />
      <KbachCorner position="bottom-left" />
      <KbachCorner position="bottom-right" />

      {children}
    </div>
  );
}

// Sweet Floating Lotus & Rose Petals (ផ្កាឈូករោយ)
export function SweetFloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* 8 Floating Petals with CSS animations */}
      {[
        { left: '8%', delay: '0s', duration: '14s', size: 'w-5 h-6' },
        { left: '22%', delay: '2.5s', duration: '16s', size: 'w-4 h-5' },
        { left: '42%', delay: '5s', duration: '18s', size: 'w-6 h-7' },
        { left: '60%', delay: '1s', duration: '15s', size: 'w-4 h-5' },
        { left: '78%', delay: '3.8s', duration: '17s', size: 'w-5 h-6' },
        { left: '92%', delay: '6.2s', duration: '19s', size: 'w-4 h-5' },
      ].map((petal, i) => (
        <div
          key={i}
          className={`absolute -top-10 opacity-75 ${petal.size} animate-petal-fall`}
          style={{
            left: petal.left,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        >
          <svg viewBox="0 0 30 35" className="w-full h-full drop-shadow-sm">
            {/* Romantic pink lotus petal shape */}
            <path
              d="M 15 2 C 22 8, 28 18, 26 26 C 24 32, 18 34, 15 34 C 12 34, 6 32, 4 26 C 2 18, 8 8, 15 2 Z"
              fill="url(#petalGradient)"
            />
            <defs>
              <linearGradient id="petalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F9A8D4" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#F472B6" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#FB7185" stopOpacity="0.85" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
