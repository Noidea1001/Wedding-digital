'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Music2 } from 'lucide-react';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';
import { SweetFloatingPetals } from './KhmerOrnaments';

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

  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    try {
      confetti({
        particleCount: 90,
        spread: 100,
        origin: { y: 0.55 },
        colors: ['#D4AF37', '#FCF6BA', '#FFFFFF', '#FBCFE8', '#F472B6'],
        gravity: 0.8,
        scalar: 0.9,
      });
    } catch { /* ignore */ }

    setTimeout(() => {
      try {
        confetti({
          particleCount: 60,
          spread: 140,
          origin: { y: 0.4 },
          colors: ['#D4AF37', '#FFE082', '#E2849D', '#FFFFFF'],
          gravity: 0.7,
          scalar: 1.1,
        });
      } catch { /* ignore */ }
    }, 350);

    setTimeout(() => {
      onOpenInvitation();
    }, 950);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="cover"
        initial={{ opacity: 1 }}
        animate={isOpening ? { opacity: 0, scale: 1.04, y: -24 } : { opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto"
        style={{
          background: 'linear-gradient(155deg, #1A0A1E 0%, #2D0B1F 30%, #1B050D 60%, #0D0308 100%)',
        }}
      >
        {/* Ambient bokeh orbs */}
        <div className="absolute top-[-5%] left-[-5%] w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }} />
        <div className="absolute bottom-[-5%] right-[-5%] w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #F472B6 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[80px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, #AA771C 0%, transparent 65%)' }} />

        {/* Falling petals */}
        <SweetFloatingPetals />

        {/* ===== CARD ===== */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative w-full max-w-[390px] mx-auto my-auto px-4 py-6 sm:py-8 select-none"
        >
          {/* Card body */}
          <div className="relative rounded-[32px] overflow-hidden text-center"
            style={{
              background: 'linear-gradient(160deg, #FFFDF8 0%, #FFF8EC 50%, #FFFBF2 100%)',
              boxShadow: '0 40px 100px -20px rgba(140,90,10,0.45), 0 0 0 1.5px rgba(212,175,55,0.5)',
            }}
          >
            {/* Top decorative arch band */}
            <div className="h-2 w-full"
              style={{ background: 'linear-gradient(90deg, #AA771C 0%, #FCF6BA 30%, #D4AF37 50%, #FCF6BA 70%, #AA771C 100%)' }} />

            {/* Corner ornaments */}
            <CornerFlourish position="top-left" />
            <CornerFlourish position="top-right" />
            <CornerFlourish position="bottom-left" />
            <CornerFlourish position="bottom-right" />

            {/* ─── Content Area ─── */}
            <div className="px-6 pt-6 pb-8 flex flex-col items-center gap-5">

              {/* 1. Blessing badge */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border"
                style={{
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(255,253,240,0.95) 100%)',
                  borderColor: 'rgba(212,175,55,0.5)',
                  boxShadow: '0 2px 10px rgba(212,175,55,0.15)',
                }}
              >
                {/* Lotus icon */}
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3C12 3 14 8 16.5 10C19 12 21 13 21 15.5C21 18.5 18 21 12 22C6 21 3 18.5 3 15.5C3 13 5 12 7.5 10C10 8 12 3 12 3Z"
                    fill="url(#lotusGold)" />
                  <path d="M12 8C12.5 11 14.5 13 17 14.5C14.5 16 13 18 12 20C11 18 9.5 16 7 14.5C9.5 13 11.5 11 12 8Z"
                    fill="rgba(255,255,255,0.5)" />
                  <defs>
                    <linearGradient id="lotusGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#AA771C" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className={`text-xs font-bold tracking-wide`}
                  style={{ color: '#8B6914', fontFamily: isKhmer ? 'Koulen, cursive' : 'inherit' }}>
                  {isKhmer ? 'ជ័យមង្គល ✦ វិបុលសុខ' : 'LOVE & AUSPICIOUS BLESSINGS'}
                </span>
              </motion.div>

              {/* 2. Couple photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                className="relative"
              >
                {/* Outer glow ring */}
                <div className="absolute inset-[-6px] rounded-full animate-glow-pulse opacity-70"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #FCF6BA, #AA771C)' }} />
                {/* Photo frame */}
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[3px] border-white shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverPhotoUrl}
                    alt="Couple"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                </div>
                {/* Heart badge */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shadow-md animate-heartbeat"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #AA771C)' }}>
                  <Heart className="w-3.5 h-3.5 fill-white text-white" />
                </div>
              </motion.div>

              {/* 3. Couple names */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.55 }}
                className="w-full"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2"
                  style={{ color: '#9B7920', fontFamily: isKhmer ? 'Kantumruy Pro, sans-serif' : 'inherit' }}>
                  {isKhmer ? 'កូនប្រុស & កូនស្រី' : 'Groom & Bride'}
                </p>

                <h1 className={`leading-tight text-[#1C1008]`}
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 1.875rem)',
                    fontFamily: isKhmer ? 'Koulen, cursive' : 'var(--font-playfair), Georgia, serif',
                    fontWeight: isKhmer ? 400 : 700,
                    letterSpacing: isKhmer ? '0.02em' : '-0.01em',
                  }}>
                  {groomName}
                </h1>

                {/* Ampersand divider */}
                <div className="flex items-center justify-center gap-3 my-1.5">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-400/60" />
                  <span className="text-2xl font-bold italic" style={{
                    fontFamily: 'Georgia, serif',
                    background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    &amp;
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-400/60" />
                </div>

                <h1 className={`leading-tight text-[#1C1008]`}
                  style={{
                    fontSize: 'clamp(1.5rem, 5vw, 1.875rem)',
                    fontFamily: isKhmer ? 'Koulen, cursive' : 'var(--font-playfair), Georgia, serif',
                    fontWeight: isKhmer ? 400 : 700,
                    letterSpacing: isKhmer ? '0.02em' : '-0.01em',
                  }}>
                  {brideName}
                </h1>

                {/* Wedding date pill */}
                <div className="inline-flex items-center gap-1.5 mt-3 px-4 py-1.5 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(255,248,220,0.9))',
                    border: '1px solid rgba(212,175,55,0.45)',
                  }}>
                  <svg className="w-3 h-3 text-amber-600 shrink-0" viewBox="0 0 16 16" fill="currentColor">
                    <rect x="1" y="3" width="14" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span className="text-[11px] font-bold text-amber-950"
                    style={{ fontFamily: isKhmer ? 'Kantumruy Pro, sans-serif' : 'inherit' }}>
                    {weddingDateFormatted}
                  </span>
                </div>
              </motion.div>

              {/* Thin gold divider */}
              <div className="w-full flex items-center gap-2">
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="3" fill="#D4AF37" />
                  <circle cx="10" cy="10" r="6" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.5" fill="none"/>
                  <circle cx="10" cy="10" r="9" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3" fill="none"/>
                </svg>
                <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
              </div>

              {/* 4. Guest card */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="w-full rounded-2xl p-4 text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,248,230,0.8) 0%, rgba(255,253,246,0.95) 100%)',
                  border: '1px solid rgba(212,175,55,0.35)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9)',
                }}
              >
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1"
                  style={{ color: '#9B7920', fontFamily: isKhmer ? 'Kantumruy Pro, sans-serif' : 'inherit' }}>
                  {t.invitedGreeting}
                </p>
                <p className="font-bold text-slate-900"
                  style={{
                    fontSize: 'clamp(1rem, 3.5vw, 1.25rem)',
                    fontFamily: isKhmer ? 'Koulen, cursive' : 'var(--font-playfair), Georgia, serif',
                    lineHeight: 1.3,
                  }}>
                  {guestName}
                </p>
                {guestGroup && (
                  <span className="inline-block mt-1.5 px-3 py-0.5 rounded-full text-[10px] font-bold text-amber-950"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #FCF6BA)' }}>
                    {guestGroup}
                  </span>
                )}
              </motion.div>

              {/* 5. CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="w-full"
              >
                <button
                  onClick={handleOpen}
                  disabled={isOpening}
                  className="w-full relative overflow-hidden flex items-center justify-center gap-3 rounded-2xl font-bold transition-all duration-300 cursor-pointer disabled:opacity-60"
                  style={{
                    minHeight: '52px',
                    background: 'linear-gradient(135deg, #C9A227 0%, #E8CF6A 40%, #B38728 70%, #D4AF37 100%)',
                    color: '#3D2400',
                    border: '1px solid rgba(255,235,150,0.5)',
                    boxShadow: '0 1px 0 rgba(255,255,255,0.4) inset, 0 8px 24px -4px rgba(180,130,20,0.5)',
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                  }}
                >
                  {/* Shimmer */}
                  <div className="absolute inset-0 w-1/3 bg-white/30 blur-sm pointer-events-none animate-shimmer-sweep" />

                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2L12.5 7.5H18L13.5 11L15.5 17L10 13.5L4.5 17L6.5 11L2 7.5H7.5L10 2Z" />
                  </svg>
                  <span style={{ fontFamily: isKhmer ? 'Koulen, cursive' : 'inherit', letterSpacing: isKhmer ? '0.04em' : '0.02em' }}>
                    {t.openInvitation}
                  </span>
                  <Heart className="w-4 h-4 fill-current shrink-0" />
                </button>

                {/* Music hint */}
                <div className="flex items-center justify-center gap-1.5 mt-2.5">
                  <Music2 className="w-3 h-3 text-amber-700 animate-pulse" />
                  <span className="text-[10px] font-semibold text-amber-800/70"
                    style={{ fontFamily: isKhmer ? 'Kantumruy Pro, sans-serif' : 'inherit' }}>
                    {t.clickToOpen}
                  </span>
                </div>
              </motion.div>

            </div>

            {/* Bottom decorative band */}
            <div className="h-2 w-full"
              style={{ background: 'linear-gradient(90deg, #AA771C 0%, #FCF6BA 30%, #D4AF37 50%, #FCF6BA 70%, #AA771C 100%)' }} />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Corner Flourish SVG ─── */
function CornerFlourish({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const transforms: Record<string, string> = {
    'top-left':     'top-3 left-3',
    'top-right':    'top-3 right-3 rotate-90',
    'bottom-left':  'bottom-3 left-3 -rotate-90',
    'bottom-right': 'bottom-3 right-3 rotate-180',
  };

  return (
    <svg
      className={`absolute w-9 h-9 pointer-events-none ${transforms[position]}`}
      viewBox="0 0 36 36"
      fill="none"
    >
      {/* Outer L-frame */}
      <path d="M 2 34 L 2 10 Q 2 2 10 2 L 34 2"
        stroke="url(#cornerGold)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Inner L-frame */}
      <path d="M 6 30 L 6 12 Q 6 6 12 6 L 30 6"
        stroke="url(#cornerGold)" strokeWidth="0.9" strokeLinecap="round" strokeOpacity="0.55" fill="none" />
      {/* Corner node lotus */}
      <circle cx="10" cy="10" r="2.5" fill="#D4AF37" />
      <circle cx="2"  cy="2"  r="1.5" fill="#F5C842" />
      {/* Wing dots */}
      <circle cx="20" cy="6" r="1.2" fill="#D4AF37" fillOpacity="0.7" />
      <circle cx="6"  cy="20" r="1.2" fill="#D4AF37" fillOpacity="0.7" />
      <defs>
        <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#AA771C" />
        </linearGradient>
      </defs>
    </svg>
  );
}
