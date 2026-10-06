'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';
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
  themeConfig,
  onOpenInvitation
}: EnvelopeCoverProps) {
  // Opening animation stages: 'sealed' -> 'unsealing' -> 'unfolding' -> 'revealing' -> 'opened'
  const [stage, setStage] = useState<'sealed' | 'unsealing' | 'unfolding' | 'revealing' | 'opened'>('sealed');

  const t = DICTIONARIES[locale] || DICTIONARIES.km;
  const isKhmer = locale === 'km';

  const triggerOpen = () => {
    if (stage !== 'sealed') return;

    // 1. Unseal with golden confetti burst
    setStage('unsealing');
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#FCF6BA', '#AA771C', '#FFFFFF']
      });
    } catch {
      // fallback
    }

    // 2. Unfold top flap 3D
    setTimeout(() => {
      setStage('unfolding');
    }, 450);

    // 3. Card slides up & lotus petals burst
    setTimeout(() => {
      setStage('revealing');
      try {
        confetti({
          particleCount: 80,
          spread: 100,
          origin: { y: 0.4 },
          colors: ['#D4AF37', '#F472B6', '#FB7185', '#FFFDF0', '#E2849D']
        });
      } catch {
        // fallback
      }
    }, 1100);

    // 4. Complete transition to invitation
    setTimeout(() => {
      setStage('opened');
      onOpenInvitation();
    }, 2200);
  };

  if (stage === 'opened') return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden bg-slate-950/75 backdrop-blur-2xl select-none"
      >
        {/* Ambient Warm Golden & Rose Gradient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/25 via-rose-950/30 to-slate-950 -z-10" />

        {/* Romantic Sweet Floating Lotus Petals */}
        <SweetFloatingPetals />

        {/* Ambient Starlight Orbs */}
        <div className="absolute top-1/5 left-1/10 w-72 h-72 rounded-full bg-amber-400/15 blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute bottom-1/5 right-1/10 w-80 h-80 rounded-full bg-rose-400/15 blur-3xl pointer-events-none animate-pulse delay-1000" />

        {/* 3D Envelope Wrapper */}
        <div className="relative w-full max-w-[440px] perspective-1200 py-4">
          
          {/* Top Traditional Auspicious Header Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-amber-300 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span className={`text-xs font-bold text-amber-950 ${isKhmer ? 'font-khmer-moul' : 'font-sans'}`}>
                {isKhmer ? 'លិខិតអញ្ជើញអាពាហ៍ពិពាហ៍' : 'ROYAL WEDDING INVITATION'}
              </span>
            </div>
          </motion.div>

          {/* MAIN 3D ENVELOPE BODY */}
          <div className="relative w-full aspect-[4/5.4] max-h-[620px] rounded-[32px] shadow-[0_25px_60px_-10px_rgba(212,175,55,0.45)] preserve-3d">
            
            {/* 1. Envelope Back Plate (The Silk Interior) */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#FFF9E6] via-[#FDF5DA] to-[#F5E2B3] border-2 border-amber-300/80 overflow-hidden shadow-inner">
              {/* Khmer Kbach watermark inside */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#AA771C_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            {/* 2. Sliding Invitation Card (slides out smoothly during stage === 'revealing') */}
            <motion.div
              initial={{ y: 0, scale: 0.95 }}
              animate={
                stage === 'revealing'
                  ? { y: -120, scale: 1.02, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
                  : { y: 0, scale: 0.95 }
              }
              className="absolute inset-x-3 top-3 bottom-12 rounded-[28px] bg-white/95 backdrop-blur-xl border-2 border-amber-300/90 shadow-2xl p-6 sm:p-7 text-center flex flex-col justify-between z-10"
            >
              <KbachCorner position="top-left" />
              <KbachCorner position="top-right" />
              <KbachCorner position="bottom-left" />
              <KbachCorner position="bottom-right" />

              {/* Card Header */}
              <div className="pt-2">
                <span className={`text-[11px] uppercase tracking-widest font-bold text-amber-800 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {isKhmer ? 'សិរីសួស្តី ជ័យមង្គល' : 'AUSPICIOUS CELEBRATION'}
                </span>
                <div className="h-[1px] w-20 mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent my-1.5" />
              </div>

              {/* Couple Typography */}
              <div className="my-auto py-2">
                <p className={`text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {isKhmer ? 'កូនប្រុស & កូនស្រី' : 'The Groom & The Bride'}
                </p>
                <h1 className={`text-2xl sm:text-3xl font-bold text-slate-900 leading-snug ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
                  {groomName}
                </h1>
                <div className="flex items-center justify-center gap-3 my-1">
                  <div className="h-[1px] w-10 bg-amber-300" />
                  <span className="gold-foil-text font-serif italic text-2xl font-bold">&</span>
                  <div className="h-[1px] w-10 bg-amber-300" />
                </div>
                <h1 className={`text-2xl sm:text-3xl font-bold text-slate-900 leading-snug ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
                  {brideName}
                </h1>
                <div className="inline-block mt-3 px-3 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-[11px] font-bold">
                  {weddingDateFormatted}
                </div>
              </div>

              {/* Guest Dedication */}
              <div className="p-3 rounded-2xl bg-amber-50/60 border border-amber-200/80 mb-2">
                <p className={`text-[10px] text-slate-500 font-medium ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {t.invitedGreeting}
                </p>
                <h3 className={`text-base sm:text-lg font-bold text-slate-900 mt-0.5 ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
                  {guestName}
                </h3>
                {guestGroup && (
                  <span className="inline-block mt-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full gold-foil-bg text-amber-950">
                    {guestGroup}
                  </span>
                )}
              </div>
            </motion.div>

            {/* 3. Envelope Front Pocket (Lower triangle / pocket) */}
            <div className="absolute inset-x-0 bottom-0 h-[62%] rounded-b-[32px] bg-gradient-to-t from-[#EED5A1] via-[#F8E5BA] to-[#FBF1D5] border-x-2 border-b-2 border-amber-300/80 shadow-[0_-5px_20px_rgba(212,175,55,0.2)] z-20 overflow-hidden flex flex-col justify-end p-5 text-center">
              
              {/* Pocket Diagonal Fold Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Left diagonal crease */}
                <line x1="0" y1="100" x2="50" y2="35" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.4" />
                {/* Right diagonal crease */}
                <line x1="100" y1="100" x2="50" y2="35" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.4" />
                {/* Pocket V-cut */}
                <polygon points="0,0 50,38 100,0 100,10 50,45 0,10" fill="url(#pocketTrim)" opacity="0.6" />
                <defs>
                  <linearGradient id="pocketTrim" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#AA771C" />
                    <stop offset="50%" stopColor="#FCF6BA" />
                    <stop offset="100%" stopColor="#AA771C" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Corner Kbach decorations on pocket */}
              <KbachCorner position="bottom-left" />
              <KbachCorner position="bottom-right" />

              {/* Guest name badge visible on the front of pocket when sealed */}
              {stage === 'sealed' && (
                <div className="relative z-30 mb-2 px-3 py-2 rounded-2xl bg-white/80 backdrop-blur-md border border-amber-300/90 shadow-xs">
                  <p className={`text-[10px] text-slate-500 font-medium ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                    {t.invitedGreeting}
                  </p>
                  <h2 className={`text-base sm:text-lg font-bold text-slate-900 mt-0.5 ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
                    {guestName}
                  </h2>
                  <p className={`text-[9px] text-slate-400 italic mt-0.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                    {t.apologyNotice}
                  </p>
                </div>
              )}

              {/* Action Button to Open */}
              <div className="relative z-30 pt-1">
                <button
                  onClick={triggerOpen}
                  disabled={stage !== 'sealed'}
                  className="w-full group relative inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl gold-foil-bg text-amber-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-yellow-200 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-950 group-hover:rotate-12 transition-transform" />
                  <span className={`tracking-wide ${isKhmer ? 'font-khmer-koulen text-base sm:text-lg' : 'font-sans font-bold'}`}>
                    {t.openInvitation}
                  </span>
                  <Heart className="w-4 h-4 text-amber-950 fill-amber-950 group-hover:scale-125 transition-transform" />
                </button>
                <p className={`text-[10px] text-slate-500 mt-1.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {t.clickToOpen}
                </p>
              </div>
            </div>

            {/* 4. 3D ENVELOPE TOP FLAP (Folds open backwards with 3D rotation) */}
            <motion.div
              style={{
                transformOrigin: 'top center',
                zIndex: stage === 'unfolding' || stage === 'revealing' ? 5 : 25
              }}
              animate={
                stage === 'unfolding' || stage === 'revealing'
                  ? { rotateX: -180, transition: { duration: 0.9, ease: 'easeInOut' } }
                  : { rotateX: 0 }
              }
              className="absolute inset-x-0 top-0 h-[48%] rounded-t-[32px] preserve-3d"
            >
              {/* Flap Outer (Visible when closed) */}
              <div
                className="w-full h-full bg-gradient-to-b from-[#FDF5DA] via-[#F6E3B7] to-[#E9CB88] border-t-2 border-x-2 border-amber-300 shadow-md flex flex-col items-center justify-end pb-3"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
                }}
              >
                {/* Traditional Kbach border along flap edges */}
                <svg className="w-full h-full absolute inset-0 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <line x1="0" y1="0" x2="50" y2="100" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.7" />
                  <line x1="100" y1="0" x2="50" y2="100" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.7" />
                  <circle cx="50" cy="98" r="2" fill="#D4AF37" />
                </svg>
              </div>

              {/* ROYAL GOLDEN WAX SEAL (Centered right at apex of the flap) */}
              <motion.button
                onClick={triggerOpen}
                disabled={stage !== 'sealed'}
                animate={
                  stage === 'unsealing'
                    ? { scale: [1, 1.3, 0], rotate: [0, -15, 25], opacity: [1, 1, 0], transition: { duration: 0.45 } }
                    : stage === 'unfolding' || stage === 'revealing'
                    ? { opacity: 0, pointerEvents: 'none' }
                    : { scale: 1 }
                }
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-18 h-18 sm:w-20 sm:h-20 rounded-full gold-foil-bg border-2 border-yellow-100 shadow-[0_10px_25px_rgba(170,119,28,0.5)] flex flex-col items-center justify-center p-2 text-amber-950 cursor-pointer z-30 animate-pulse-gold group"
                title={t.openInvitation}
              >
                {/* Embossed Royal Lotus Emblem */}
                <svg className="w-9 h-9 sm:w-10 sm:h-10 fill-current drop-shadow-sm group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24">
                  <path d="M12 2C12 2 13.5 6 15 8C16.5 10 19 11 19 13C19 15.5 17 18 12 20C7 18 5 15.5 5 13C5 11 7.5 10 9 8C10.5 6 12 2 12 2Z" />
                  <path d="M12 7C12.8 9.5 14.5 11.5 16.5 12.5C14.5 13.5 13 15 12 17C11 15 9.5 13.5 7.5 12.5C9.5 11.5 11.2 9.5 12 7Z" opacity="0.4" fill="#FFF" />
                </svg>
                <span className={`text-[8px] font-bold tracking-wider uppercase -mt-0.5 ${isKhmer ? 'font-khmer-moul' : 'font-sans'}`}>
                  {isKhmer ? 'សិរីមង្គល' : 'SEAL'}
                </span>
              </motion.button>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
