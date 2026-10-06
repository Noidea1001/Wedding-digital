'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Music2 } from 'lucide-react';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';
import { KbachCorner, SweetFloatingPetals } from './KhmerOrnaments';

interface EnvelopeCoverProps {
  locale: SupportedLocale;
  brideName: string;
  groomName: string;
  weddingDateFormatted: string;
  guestName: string;
  guestGroup?: string;
  coverPhotoUrl?: string;
  themeConfig: ThemeConfig;
  onOpenInvitation: () => void;
}

export default function EnvelopeCover({
  locale,
  brideName,
  groomName,
  weddingDateFormatted,
  guestName,
  guestGroup,
  coverPhotoUrl = 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
  themeConfig,
  onOpenInvitation
}: EnvelopeCoverProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  const handleOpen = () => {
    if (isOpening || isOpened) return;
    setIsOpening(true);

    // 1. Royal golden & rose confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FCF6BA', '#AA771C', '#FFFFFF', '#F472B6', '#FB7185']
      });
    } catch {
      // ignore
    }

    // 2. Second burst for layered luxury feel
    setTimeout(() => {
      try {
        confetti({
          particleCount: 60,
          spread: 120,
          origin: { y: 0.45 },
          colors: ['#D4AF37', '#FFE082', '#E2849D', '#FFFFFF']
        });
      } catch {
        // ignore
      }
    }, 300);

    // 3. Smooth transition to invitation view
    setTimeout(() => {
      setIsOpened(true);
      onOpenInvitation();
    }, 1100);
  };

  if (isOpened) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={isOpening ? { opacity: 0, scale: 1.06, y: -30 } : { opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto select-none bg-gradient-to-b from-[#2E0916] via-[#1B050D] to-[#0D0206]"
      >
        {/* Deep Romantic Warm Glow Rays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/20 via-rose-950/40 to-transparent pointer-events-none -z-10" />

        {/* Ambient Warm Golden Stardust Orbs */}
        <div className="absolute top-1/4 left-1/12 w-80 h-80 rounded-full bg-amber-400/15 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/4 right-1/12 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl pointer-events-none animate-pulse delay-1000" />

        {/* Romantic Sweet Floating Lotus Petals */}
        <SweetFloatingPetals />

        {/* MAIN LUXURY INVITATION PRESENTATION FOLIO */}
        <div className="relative w-full max-w-[430px] my-auto">
          
          {/* Card Body with Multi-layered Drop Shadow */}
          <div className="relative rounded-[36px] bg-[#FFFDF9] border-2 border-amber-300/90 shadow-[0_30px_90px_rgba(212,175,55,0.45)] p-6 sm:p-8 text-center flex flex-col items-center overflow-hidden">
            
            {/* 4 Traditional Cambodian Kbach Corner Filigree */}
            <KbachCorner position="top-left" />
            <KbachCorner position="top-right" />
            <KbachCorner position="bottom-left" />
            <KbachCorner position="bottom-right" />

            {/* Subtle Royal Damask Watermark Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#AA771C_1.5px,transparent_1.5px)] [background-size:18px_18px] pointer-events-none" />

            {/* 1. TOP ROYAL LOTUS MEDALLION & AUSPICIOUS BLESSING */}
            <div className="flex flex-col items-center pt-1 mb-2">
              <div className="w-12 h-12 rounded-full gold-foil-bg text-amber-950 flex items-center justify-center shadow-lg shadow-amber-900/30 border-2 border-yellow-200 mb-2">
                <svg className="w-7 h-7 fill-amber-950 drop-shadow-xs" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 13.5 6 15 8C16.5 10 19 11 19 13C19 15.5 17 18 12 20C7 18 5 15.5 5 13C5 11 7.5 10 9 8C10.5 6 12 2 12 2Z" />
                  <path d="M12 7C12.8 9.5 14.5 11.5 16.5 12.5C14.5 13.5 13 15 12 17C11 15 9.5 13.5 7.5 12.5C9.5 11.5 11.2 9.5 12 7Z" opacity="0.4" fill="#FFF" />
                </svg>
              </div>

              <span className={`text-xs uppercase tracking-widest gold-foil-text font-bold ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                {isKhmer ? 'សិរីសួស្តី ជ័យមង្គល វិបុលសុខ' : 'LOVE & AUSPICIOUS HARMONY'}
              </span>

              <h2 className={`text-xl sm:text-2xl text-amber-950 tracking-wide mt-1 ${isKhmer ? 'font-khmer-moul' : 'font-playfair font-bold'}`}>
                {isKhmer ? 'លិខិតអញ្ជើញ អាពាហ៍ពិពាហ៍' : 'Royal Wedding Invitation'}
              </h2>
            </div>

            {/* 2. ROMANTIC COUPLE FRAMED LOCKET PORTRAIT */}
            <div className="relative my-3 w-36 h-36 sm:w-44 sm:h-44 rounded-full p-2 border-3 border-amber-300 shadow-xl bg-gradient-to-tr from-amber-200 via-white to-amber-200 group">
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverPhotoUrl}
                  alt="Couple Pre-wedding"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative Little Heart Badge */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gold-foil-bg text-amber-950 flex items-center justify-center shadow-md border-2 border-white">
                <Heart className="w-4 h-4 fill-current text-amber-950" />
              </div>
            </div>

            {/* 3. COUPLE TYPOGRAPHY */}
            <div className="my-2 w-full">
              <p className={`text-[11px] uppercase tracking-wider text-amber-800/80 font-bold mb-1 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                {isKhmer ? 'កូនប្រុស និង កូនស្រី' : 'The Groom & The Bride'}
              </p>
              <h1 className={`text-2xl sm:text-3xl text-slate-900 tracking-wide leading-tight ${isKhmer ? 'font-khmer-koulen' : 'font-playfair font-bold'}`}>
                {groomName}
              </h1>
              <div className="flex items-center justify-center gap-3 my-1">
                <div className="h-[1.5px] w-12 bg-gradient-to-r from-transparent to-amber-400" />
                <span className="gold-foil-text font-serif italic text-2xl font-bold">&</span>
                <div className="h-[1.5px] w-12 bg-gradient-to-l from-transparent to-amber-400" />
              </div>
              <h1 className={`text-2xl sm:text-3xl text-slate-900 tracking-wide leading-tight ${isKhmer ? 'font-khmer-koulen' : 'font-playfair font-bold'}`}>
                {brideName}
              </h1>

              {/* Auspicious Date Ribbon */}
              <div className="inline-block mt-3 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-950 text-xs font-bold shadow-xs">
                {weddingDateFormatted}
              </div>
            </div>

            {/* 4. PERSONALIZED VIP HONORED GUEST PLAQUE */}
            <div className="w-full my-3 p-4 rounded-2xl bg-gradient-to-b from-amber-50/70 via-white to-amber-50/70 border border-amber-300/90 shadow-sm backdrop-blur-md text-center relative">
              <div className="flex items-center justify-center gap-1.5 text-slate-600 text-[11px] font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span className={isKhmer ? 'font-khmer' : 'font-sans'}>{t.invitedGreeting}</span>
              </div>
              <h3 className={`text-lg sm:text-xl font-bold text-slate-900 mt-1 ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
                {guestName}
              </h3>
              {guestGroup && (
                <span className="inline-block mt-1 text-[10px] font-bold px-3 py-0.5 rounded-full gold-foil-bg text-amber-950 shadow-xs">
                  {guestGroup}
                </span>
              )}
              <p className={`text-[10px] text-slate-400 mt-2 italic ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                {t.apologyNotice}
              </p>
            </div>

            {/* 5. ROYAL SATIN RIBBON WITH 3D WAX SEAL & OPEN ACTION */}
            <div className="w-full mt-3 flex flex-col items-center relative">
              
              {/* Horizontal Satin Ribbon bar */}
              <div className="w-full h-3 gold-ribbon-satin rounded-full my-1 relative flex items-center justify-center">
                {/* 3D Royal Wax Seal Button sitting on the ribbon */}
                <button
                  onClick={handleOpen}
                  disabled={isOpening}
                  className="w-16 h-16 rounded-full wax-seal-luxury text-amber-950 flex flex-col items-center justify-center border-2 border-yellow-100 shadow-xl hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer animate-pulse-gold group"
                  title={t.openInvitation}
                  aria-label={t.openInvitation}
                >
                  <svg className="w-8 h-8 fill-amber-950 group-hover:rotate-12 transition-transform duration-300 drop-shadow-xs" viewBox="0 0 24 24">
                    <path d="M12 2C12 2 13.5 6 15 8C16.5 10 19 11 19 13C19 15.5 17 18 12 20C7 18 5 15.5 5 13C5 11 7.5 10 9 8C10.5 6 12 2 12 2Z" />
                    <path d="M12 7C12.8 9.5 14.5 11.5 16.5 12.5C14.5 13.5 13 15 12 17C11 15 9.5 13.5 7.5 12.5C9.5 11.5 11.2 9.5 12 7Z" opacity="0.4" fill="#FFF" />
                  </svg>
                  <span className={`text-[7px] font-bold uppercase tracking-wider text-amber-950 -mt-0.5 ${isKhmer ? 'font-khmer-moul' : 'font-sans'}`}>
                    {isKhmer ? 'សិរីមង្គល' : 'ROYAL'}
                  </span>
                </button>
              </div>

              {/* Grand Glowing Call-to-Action Button */}
              <button
                onClick={handleOpen}
                disabled={isOpening}
                className="w-full mt-8 group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl gold-foil-bg text-amber-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-900/35 hover:shadow-amber-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-yellow-200 cursor-pointer"
              >
                {/* Internal Shimmer Sweep Reflection */}
                <div className="absolute inset-0 w-1/3 bg-white/40 blur-sm pointer-events-none animate-shimmer-sweep" />

                <Sparkles className="w-4 h-4 text-amber-950 group-hover:rotate-12 transition-transform shrink-0" />
                <span className={`tracking-wider ${isKhmer ? 'font-khmer-koulen text-lg' : 'font-sans font-bold'}`}>
                  {t.openInvitation}
                </span>
                <Heart className="w-4 h-4 text-amber-950 fill-amber-950 group-hover:scale-125 transition-transform shrink-0" />
              </button>

              {/* Audio & Opening Hint */}
              <div className="flex items-center gap-1.5 text-xs text-amber-900/80 mt-2">
                <Music2 className="w-3.5 h-3.5 text-amber-700 animate-pulse" />
                <span className={`text-[11px] font-semibold ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {t.clickToOpen}
                </span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
