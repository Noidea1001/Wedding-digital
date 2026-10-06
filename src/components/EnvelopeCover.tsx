'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, MailOpen, Heart, Sparkles, ChevronDown } from 'lucide-react';
import { ThemeConfig } from '@/lib/themes';

interface EnvelopeCoverProps {
  brideNickname: string;
  groomNickname: string;
  weddingDateFormatted: string;
  guestName: string;
  guestGroup?: string;
  themeConfig: ThemeConfig;
  onOpenInvitation: () => void;
}

export default function EnvelopeCover({
  brideNickname,
  groomNickname,
  weddingDateFormatted,
  guestName,
  guestGroup,
  themeConfig,
  onOpenInvitation
}: EnvelopeCoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
    // Launch celebratory confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E08D9D', '#D4AF37', '#FCE4E8', '#FFFFFF']
      });
    } catch (e) {
      console.warn('Confetti error:', e);
    }

    onOpenInvitation();
  };

  if (isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden bg-slate-950/40 backdrop-blur-xl transition-all duration-700 animate-fadeIn">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-200/30 via-slate-900/60 to-slate-950 -z-10" />

      {/* Decorative floating hearts/sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-rose-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative w-full max-w-md mx-auto rounded-3xl bg-white/95 backdrop-blur-xl shadow-2xl border border-white/60 p-6 sm:p-8 text-center flex flex-col items-center justify-between min-h-[560px] animate-float-slow">
        {/* Header Ribbon / Wax Seal icon */}
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-800 to-rose-600 text-amber-200 flex items-center justify-center shadow-lg shadow-rose-900/20 border-2 border-amber-300/40 mb-3">
            <Heart className="w-6 h-6 fill-current animate-pulse-soft" />
          </div>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-rose-800">
            The Wedding Of
          </span>
        </div>

        {/* Couple Big Calligraphy Title */}
        <div className="my-6">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
            {groomNickname} <span className="text-rose-600 font-cormorant italic text-3xl sm:text-4xl">&</span> {brideNickname}
          </h1>
          <p className="mt-2 text-xs sm:text-sm font-medium tracking-widest text-slate-500 uppercase">
            {weddingDateFormatted}
          </p>
        </div>

        {/* Personalized Guest Badge */}
        <div className="w-full bg-rose-50/70 border border-rose-200/60 rounded-2xl p-4 my-2 text-center backdrop-blur-sm shadow-sm">
          <div className="flex items-center justify-center gap-1.5 text-slate-500 text-xs uppercase tracking-wider mb-1 font-medium">
            <Mail className="w-3.5 h-3.5 text-rose-600" />
            <span>Kepada Yth. Bapak/Ibu/Saudara/i</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-cormorant text-slate-900">
            {guestName || 'Tamu Undangan'}
          </h2>
          {guestGroup && (
            <span className="inline-block mt-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-rose-200/80 text-rose-800">
              {guestGroup}
            </span>
          )}
          <p className="text-[11px] text-slate-400 mt-2 italic">
            *Mohon maaf bila ada kesalahan dalam penulisan nama/gelar
          </p>
        </div>

        {/* Action Button: Buka Undangan */}
        <div className="w-full mt-4 flex flex-col items-center gap-2">
          <button
            onClick={handleOpen}
            className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-700 via-rose-600 to-amber-600 text-white font-medium text-sm sm:text-base shadow-xl shadow-rose-900/25 hover:shadow-rose-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
            <span>Buka Undangan</span>
            <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <span className="text-[11px] text-slate-500 flex items-center gap-1">
            Tekan untuk membuka undangan & memutar audio
          </span>
        </div>
      </div>
    </div>
  );
}
