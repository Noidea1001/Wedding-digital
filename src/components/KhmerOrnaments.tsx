'use client';

import React from 'react';

// Ornate Royal Gold Khmer Kbach Corner
export function KbachCorner({ position = 'top-left' }: { position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const getTransforms = () => {
    switch (position) {
      case 'top-right':
        return 'top-1.5 right-1.5 rotate-90';
      case 'bottom-right':
        return 'bottom-1.5 right-1.5 rotate-180';
      case 'bottom-left':
        return 'bottom-1.5 left-1.5 -rotate-90';
      default:
        return 'top-1.5 left-1.5';
    }
  };

  return (
    <svg
      className={`absolute w-7 h-7 sm:w-9 sm:h-9 text-amber-500/80 pointer-events-none transition-opacity ${getTransforms()}`}
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
    >
      {/* Outer corner line */}
      <path
        d="M 2 38 L 2 12 C 2 6 6 2 12 2 L 38 2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Inner decorative filigree loop */}
      <path
        d="M 6 32 L 6 14 C 6 9.5 9.5 6 14 6 L 32 6"
        strokeWidth="1"
        strokeOpacity="0.6"
      />
      {/* Sacred lotus petal node */}
      <circle cx="12" cy="12" r="2.5" fill="#D4AF37" />
      <path
        d="M 12 6 C 14 8 16 10 16 12 C 16 14 14 16 12 16"
        strokeWidth="1"
        strokeOpacity="0.7"
      />
      <circle cx="2" cy="2" r="1.5" fill="#F59E0B" />
    </svg>
  );
}

// Royal Khmer Sacred Lotus Gold Divider
export function GoldDivider({ title }: { title?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 my-6 w-full max-w-sm mx-auto">
      {/* Left filigree wing */}
      <div className="flex-1 flex items-center">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-amber-400 to-amber-600" />
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
      </div>

      {/* Center Sacred Lotus Icon */}
      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center shadow-md shadow-amber-900/20 shrink-0 p-1">
        <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
          <path d="M12 2C12 2 13.5 6 15 8C16.5 10 19 11 19 13C19 15.5 17 18 12 20C7 18 5 15.5 5 13C5 11 7.5 10 9 8C10.5 6 12 2 12 2Z" />
        </svg>
      </div>

      {/* Right filigree wing */}
      <div className="flex-1 flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-amber-400 to-amber-600" />
      </div>
    </div>
  );
}
