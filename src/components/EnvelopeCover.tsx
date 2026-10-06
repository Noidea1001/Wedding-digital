'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Sparkles, ChevronDown } from 'lucide-react';
import { ThemeConfig } from '@/lib/themes';
import { KbachCorner } from './KhmerOrnaments';

interface EnvelopeCoverProps {
  brideNickname: string;
  brideNicknameKhmer?: string;
  groomNickname: string;
  groomNicknameKhmer?: string;
  weddingDateFormatted: string;
  guestName: string;
  guestGroup?: string;
  themeConfig: ThemeConfig;
  onOpenInvitation: () => void;
}

export default function EnvelopeCover({
  brideNickname,
  brideNicknameKhmer,
  groomNickname,
  groomNicknameKhmer,
  weddingDateFormatted,
  guestName,
  guestGroup,
  themeConfig,
  onOpenInvitation
}: EnvelopeCoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    
    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#FCF6BA', '#AA771C', '#FFFFFF', '#F59E0B']
      });
    } catch (e) {
      console.warn('Confetti error:', e);
    }

    onOpenInvitation();
  };

  if (isOpen) return null;

  const displayGroom = groomNicknameKhmer || groomNickname;
  const displayBride = brideNicknameKhmer || brideNickname;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden bg-slate-950/60 backdrop-blur-2xl transition-all duration-700 animate-fadeIn font-khmer">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/25 via-slate-950/80 to-slate-950 -z-10" />

      {/* Floating Stardust Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-80 h-80 rounded-full bg-amber-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full bg-yellow-300/15 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main Glassmorphism Card with Metallic Gold Accents */}
      <div className="relative w-full max-w-md mx-auto rounded-[36px] bg-white/85 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(212,175,55,0.4)] border-2 border-amber-300/80 p-7 sm:p-9 text-center flex flex-col items-center justify-between min-h-[600px] animate-float-slow">
        {/* 4 Ornate Khmer Kbach Filigree Corners */}
        <KbachCorner position="top-left" />
        <KbachCorner position="top-right" />
        <KbachCorner position="bottom-left" />
        <KbachCorner position="bottom-right" />

        {/* Traditional Royal Gold Wax Seal */}
        <div className="flex flex-col items-center pt-2">
          <div className="w-18 h-18 rounded-full gold-foil-bg text-amber-950 flex items-center justify-center shadow-xl shadow-amber-900/30 border-2 border-amber-200/90 animate-pulse-gold p-4 mb-3">
            <svg className="w-10 h-10 fill-amber-950" viewBox="0 0 24 24">
              <path d="M12 2C12 2 13.5 6 15 8C16.5 10 19 11 19 13C19 15.5 17 18 12 20C7 18 5 15.5 5 13C5 11 7.5 10 9 8C10.5 6 12 2 12 2Z" />
              <path d="M12 7C12.8 9.5 14.5 11.5 16.5 12.5C14.5 13.5 13 15 12 17C11 15 9.5 13.5 7.5 12.5C9.5 11.5 11.2 9.5 12 7Z" opacity="0.4" fill="#FFF" />
            </svg>
          </div>
          <span className="font-khmer-moul text-base gold-foil-text tracking-wider">
            សិរីសួស្តី អាពាហ៍ពិពាហ៍
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-0.5">
            Royal Wedding Celebration
          </span>
        </div>

        {/* Couple Big Typography with Metallic Gold Accent */}
        <div className="my-5 w-full">
          <h1 className="font-khmer-koulen text-3xl sm:text-4xl text-slate-900 tracking-wide leading-tight">
            {displayGroom} <span className="gold-foil-text font-serif italic text-3xl sm:text-4xl">&</span> {displayBride}
          </h1>
          <p className="font-playfair text-xs sm:text-sm text-slate-500 uppercase tracking-widest mt-1">
            {groomNickname} & {brideNickname}
          </p>
          <div className="inline-block mt-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border border-amber-300 shadow-xs text-amber-900 text-xs font-bold">
            {weddingDateFormatted}
          </div>
        </div>

        {/* Personalized Guest Badge (Glassmorphism + Gold Hairline) */}
        <div className="w-full bg-white/70 border border-amber-300/80 rounded-2xl p-4 my-2 text-center backdrop-blur-md shadow-xs">
          <div className="flex items-center justify-center gap-1.5 text-slate-600 text-xs font-bold mb-1">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-khmer-koulen text-slate-900 tracking-wide mt-1">
            {guestName || 'ភ្ញៀវកិត្តិយស'}
          </h2>
          {guestGroup && (
            <span className="inline-block mt-1 text-[11px] font-bold px-3 py-0.5 rounded-full gold-foil-bg text-amber-950 shadow-xs">
              {guestGroup}
            </span>
          )}
          <p className="text-[10px] text-slate-400 mt-2 italic font-khmer">
            *សូមអធ្យាស្រ័យចំពោះការខ្វះខាតក្នុងឈ្មោះ ឬងារកិត្តិយស
          </p>
        </div>

        {/* Action Button: Buka Undangan / បើកសំបុត្រអញ្ជើញ */}
        <div className="w-full mt-3 flex flex-col items-center gap-2">
          <button
            onClick={handleOpen}
            className="w-full group relative inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl gold-foil-bg text-amber-950 font-bold text-sm sm:text-base shadow-xl shadow-amber-900/30 hover:shadow-amber-900/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-yellow-200"
          >
            <Sparkles className="w-4 h-4 text-amber-950 group-hover:rotate-12 transition-transform" />
            <span className="font-khmer-koulen tracking-wider text-lg">បើកសំបុត្រអញ្ជើញ (Open Invitation)</span>
            <ChevronDown className="w-4 h-4 ml-1 opacity-70 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <span className="text-[11px] text-slate-500 font-khmer">
            ចុចដើម្បីបើកសំបុត្រ និងចាក់ភ្លេងការ
          </span>
        </div>
      </div>
    </div>
  );
}
