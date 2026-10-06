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
    <div
      className="relative rounded-[32px] sm:rounded-[40px] overflow-visible"
      style={{
        background: 'linear-gradient(160deg, rgba(255,253,248,0.97) 0%, rgba(255,250,235,0.95) 100%)',
        boxShadow: '0 24px 64px -12px rgba(180,140,30,0.22), 0 0 0 1.5px rgba(212,175,55,0.45), 0 1px 0 rgba(255,255,255,0.9) inset',
      }}
    >
      {/* Top crown ornament */}
      <div
        className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full z-10"
        style={{
          background: 'linear-gradient(135deg, #C9A227 0%, #E8CF6A 40%, #B38728 70%, #D4AF37 100%)',
          boxShadow: '0 4px 14px rgba(180,130,20,0.4), inset 0 1px 0 rgba(255,255,255,0.4)',
          border: '1px solid rgba(255,235,150,0.5)',
        }}
      >
        {/* Lotus icon */}
        <svg className="w-3.5 h-3.5 fill-amber-950 shrink-0" viewBox="0 0 24 24">
          <path d="M12 3C12 3 14 8 16.5 10C19 12 21 13 21 15.5C21 18.5 18 21 12 22C6 21 3 18.5 3 15.5C3 13 5 12 7.5 10C10 8 12 3 12 3Z" />
        </svg>
        <span
          className="text-amber-950"
          style={{ fontFamily: 'Koulen, cursive', fontSize: '11px', letterSpacing: '0.08em' }}
        >
          សិរីមង្គល
        </span>
        <svg className="w-3.5 h-3.5 fill-amber-950 shrink-0" viewBox="0 0 24 24">
          <path d="M12 3C12 3 14 8 16.5 10C19 12 21 13 21 15.5C21 18.5 18 21 12 22C6 21 3 18.5 3 15.5C3 13 5 12 7.5 10C10 8 12 3 12 3Z" />
        </svg>
      </div>

      <KbachCorner position="top-left" />
      <KbachCorner position="top-right" />
      <KbachCorner position="bottom-left" />
      <KbachCorner position="bottom-right" />

      <div className="px-6 sm:px-10 pt-8 pb-7">
        {children}
      </div>
    </div>
  );
}

// Sweet Floating Lotus & Rose Petals (ផ្កាឈូករោយ)
export function SweetFloatingPetals() {
  const petals = [
    { left: '6%', top: '-8%', delay: '0s', duration: '11s', size: 'w-6 h-7', rotate: 15 },
    { left: '18%', top: '25%', delay: '2s', duration: '13s', size: 'w-5 h-6', rotate: -30 },
    { left: '32%', top: '65%', delay: '4s', duration: '12s', size: 'w-7 h-8', rotate: 45 },
    { left: '50%', top: '-5%', delay: '1.5s', duration: '14s', size: 'w-5 h-6', rotate: -15 },
    { left: '68%', top: '40%', delay: '3.5s', duration: '12s', size: 'w-6 h-7', rotate: 60 },
    { left: '82%', top: '15%', delay: '0.8s', duration: '15s', size: 'w-5 h-6', rotate: -45 },
    { left: '92%', top: '80%', delay: '5s', duration: '13s', size: 'w-6 h-7', rotate: 25 },
    { left: '40%', top: '-12%', delay: '6s', duration: '16s', size: 'w-7 h-8', rotate: -20 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {petals.map((petal, i) => (
        <div
          key={i}
          className={`absolute opacity-75 ${petal.size} animate-petal-fall`}
          style={{
            left: petal.left,
            top: petal.top,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
            transform: `rotate(${petal.rotate}deg)`,
          }}
        >
          <svg viewBox="0 0 32 38" className="w-full h-full drop-shadow-md">
            {/* Natural curved sweet lotus petal */}
            <path
              d="M 16 2 C 24 8, 30 19, 28 28 C 26 34, 19 36, 16 36 C 13 36, 6 34, 4 28 C 2 19, 8 8, 16 2 Z"
              fill={`url(#petalGrad-${i % 2})`}
            />
            <path
              d="M 16 6 C 18 14, 18 24, 16 32"
              stroke="#FFF"
              strokeWidth="0.8"
              strokeOpacity="0.4"
              fill="none"
            />
            <defs>
              <linearGradient id="petalGrad-0" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDA4AF" stopOpacity="0.9" />
                <stop offset="60%" stopColor="#FB7185" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E11D48" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="petalGrad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#F472B6" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#DB2777" stopOpacity="0.75" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  );
}
