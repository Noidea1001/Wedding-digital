'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, Palette } from 'lucide-react';
import { WeddingInvitationData, WeddingTheme } from '@/types/wedding';
import { THEME_CONFIGS } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES, formatLocalizedWeddingDate } from '@/lib/i18n';
import LanguageSwitcher from './LanguageSwitcher';
import EnvelopeCover from './EnvelopeCover';
import AudioPlayer from './AudioPlayer';
import CountdownTimer from './CountdownTimer';
import CoupleSection from './CoupleSection';
import EventsSection from './EventsSection';
import LoveStorySection from './LoveStorySection';
import GallerySection from './GallerySection';
import DigitalGiftSection from './DigitalGiftSection';
import RsvpAndWishesSection from './RsvpAndWishesSection';
import BottomNavBar from './BottomNavBar';
import SparkleParticles from './SparkleParticles';
import { GoldDivider, SweetFloatingPetals, KhmerArchFrame } from './KhmerOrnaments';

interface WeddingInvitationViewProps {
  data: WeddingInvitationData;
  guestName?: string;
  guestGroup?: string;
  allowThemeSwitching?: boolean;
}

export default function WeddingInvitationView({
  data,
  guestName = '',
  guestGroup,
  allowThemeSwitching = true
}: WeddingInvitationViewProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [activeTheme, setActiveTheme] = useState<WeddingTheme>(data.theme || 'khmer-royal-gold');
  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>(data.locale || 'km');
  const [showThemePicker, setShowThemePicker] = useState(false);

  const t = DICTIONARIES[currentLocale] || DICTIONARIES.km;
  const themeConfig = THEME_CONFIGS[activeTheme] || THEME_CONFIGS['khmer-royal-gold'];

  const mainEvent = data.events[0] || {
    date: '2026-11-28',
    dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
    startTime: '07:00 ព្រឹក',
    venueName: 'គេហដ្ឋានខាងស្រី',
    address: 'រាជធានីភ្នំពេញ'
  };

  const isKhmerLocale = currentLocale === 'km';
  const displayGroom = (isKhmerLocale && data.groom.fullNameKhmer) ? data.groom.fullNameKhmer : data.groom.fullName;
  const displayBride = (isKhmerLocale && data.bride.fullNameKhmer) ? data.bride.fullNameKhmer : data.bride.fullName;
  const displayGroomNick = (isKhmerLocale && data.groom.nicknameKhmer) ? data.groom.nicknameKhmer : data.groom.nickname;
  const displayBrideNick = (isKhmerLocale && data.bride.nicknameKhmer) ? data.bride.nicknameKhmer : data.bride.nickname;

  const formattedDate = formatLocalizedWeddingDate(mainEvent.date, currentLocale);
  const resolvedGuestName = guestName || t.honoredGuest;
  const themeKeys = Object.keys(THEME_CONFIGS) as WeddingTheme[];

  return (
    <div className={`min-h-screen ${themeConfig.bodyBg} ${themeConfig.primaryText} relative selection:bg-amber-200 selection:text-amber-950 overflow-x-hidden pb-24 ${isKhmerLocale ? 'font-khmer' : 'font-sans'}`}>
      {/* Ambient Floating Golden Sparkle Particles */}
      <SparkleParticles />

      {/* Sweet Falling Lotus Petals across the background */}
      <SweetFloatingPetals />

      {/* 1. Legendary 3D Envelope Opening Cover */}
      {!isOpened && (
        <EnvelopeCover
          locale={currentLocale}
          brideName={displayBride}
          groomName={displayGroom}
          weddingDateFormatted={formattedDate}
          guestName={resolvedGuestName}
          guestGroup={guestGroup}
          coverPhotoUrl={data.coverPhotoUrl || data.gallery[0]?.url || data.bride.photoUrl}
          themeConfig={themeConfig}
          onOpenInvitation={() => setIsOpened(true)}
        />
      )}

      {/* Top Floating Controls Bar */}
      {isOpened && (
        <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
          {/* Language Switcher (Strictly Khmer & English) */}
          <LanguageSwitcher
            currentLocale={currentLocale}
            onLocaleChange={(loc) => setCurrentLocale(loc)}
          />

          {/* Theme Switcher Button */}
          {allowThemeSwitching && (
            <div className="relative">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-slate-800 text-xs font-bold border-2 border-amber-300 shadow-md backdrop-blur-md hover:bg-amber-50 active:scale-95 transition-all cursor-pointer"
              >
                <Palette className="w-3.5 h-3.5 text-amber-700" />
                <span className="hidden sm:inline">{t.templates}:</span>
                <span className="text-amber-900 font-bold">{isKhmerLocale ? (themeConfig.nameKhmer.split(' ')[0] || themeConfig.name) : themeConfig.name.split(' ')[0]}</span>
              </button>

              {/* Extended Theme Picker Dropdown */}
              {showThemePicker && (
                <div className="absolute right-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-amber-300 p-3 z-50 animate-fadeIn max-h-96 overflow-y-auto">
                  <p className="text-[10px] font-bold text-amber-800 uppercase tracking-wider mb-2 px-1">
                    {t.selectTemplate}:
                  </p>
                  <div className="space-y-1">
                    {themeKeys.map((tKey) => {
                      const cfg = THEME_CONFIGS[tKey];
                      const isCurrent = activeTheme === tKey;
                      return (
                        <button
                          key={tKey}
                          onClick={() => {
                            setActiveTheme(tKey);
                            setShowThemePicker(false);
                          }}
                          className={`w-full text-left p-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                            isCurrent
                              ? 'bg-amber-100 text-amber-950 border border-amber-400 shadow-xs'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div>
                            <span className="block font-bold">{isKhmerLocale ? (cfg.nameKhmer || cfg.name) : cfg.name}</span>
                            <span className="text-[10px] text-slate-500 font-normal">{cfg.description}</span>
                          </div>
                          {isCurrent && <span className="text-amber-700 font-bold">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* 2. Floating Audio Player with Khmer Wedding Soundtrack */}
      <AudioPlayer
        audioUrl={data.soundtrack.audioUrl}
        songTitle={data.soundtrack.title}
        artist={data.soundtrack.artist}
        autoPlayTrigger={isOpened}
      />

      {/* 3. Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-28 overflow-hidden"
      >
        {/* Soft ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.14) 0%, transparent 70%)' }} />

        {/* Auspicious blessing tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 animate-fade-in"
          style={{
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(212,175,55,0.5)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 2px 12px rgba(212,175,55,0.12)',
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
          <span
            className="text-xs font-bold text-amber-900"
            style={{ fontFamily: isKhmerLocale ? 'Koulen, cursive' : 'inherit', letterSpacing: '0.08em' }}
          >
            {t.auspiciousBlessing}
          </span>
        </div>

        {/* Arch Frame */}
        <div className="w-full max-w-xl mx-auto animate-fade-in delay-100">
          <KhmerArchFrame>
            {/* Section label */}
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-bold mb-3 animate-fade-in-up delay-200"
              style={{ color: '#9B7920', fontFamily: isKhmerLocale ? 'Kantumruy Pro, sans-serif' : 'inherit' }}
            >
              {isKhmerLocale ? (data.titleKhmer || t.theWeddingOf) : t.theWeddingOf}
            </p>

            {/* Groom name */}
            <h1
              className="animate-fade-in-up delay-200"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: 1.15,
                fontFamily: isKhmerLocale ? 'Koulen, cursive' : 'var(--font-playfair), Georgia, serif',
                fontWeight: isKhmerLocale ? 400 : 700,
                letterSpacing: isKhmerLocale ? '0.03em' : '-0.01em',
                color: '#1C1008',
              }}
            >
              {displayGroom}
            </h1>

            {/* & divider */}
            <div className="flex items-center justify-center gap-4 my-3 animate-fade-in delay-300">
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.6))' }} />
              <span
                className="text-3xl font-bold italic"
                style={{
                  fontFamily: 'Georgia, serif',
                  background: 'linear-gradient(135deg, #BF953F, #FCF6BA, #AA771C)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                &amp;
              </span>
              <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to left, transparent, rgba(212,175,55,0.6))' }} />
            </div>

            {/* Bride name */}
            <h1
              className="animate-fade-in-up delay-300"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: 1.15,
                fontFamily: isKhmerLocale ? 'Koulen, cursive' : 'var(--font-playfair), Georgia, serif',
                fontWeight: isKhmerLocale ? 400 : 700,
                letterSpacing: isKhmerLocale ? '0.03em' : '-0.01em',
                color: '#1C1008',
              }}
            >
              {displayBride}
            </h1>

            {/* Lotus divider */}
            <GoldDivider />

            {/* Wedding date */}
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full mt-1 animate-scale-in delay-500"
              style={{
                background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(255,248,220,0.85) 100%)',
                border: '1px solid rgba(212,175,55,0.4)',
              }}
            >
              <svg className="w-3 h-3 text-amber-600 shrink-0" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="3" width="14" height="12" rx="2"/>
                <path d="M1 7h14"/>
                <path d="M5 1v4M11 1v4" strokeLinecap="round"/>
              </svg>
              <p
                className="text-xs sm:text-sm font-bold text-amber-950"
                style={{ fontFamily: isKhmerLocale ? 'Kantumruy Pro, sans-serif' : 'inherit' }}
              >
                {formattedDate}
              </p>
            </div>
          </KhmerArchFrame>
        </div>

        {/* Countdown Timer */}
        <div className="mt-10 w-full max-w-md animate-fade-in delay-500">
          <CountdownTimer
            targetDate={mainEvent.date}
            targetTime={mainEvent.startTime.includes('07') ? '07:00' : '08:00'}
            weddingTitle={data.title}
            venueName={isKhmerLocale ? (mainEvent.venueNameKhmer || mainEvent.venueName) : mainEvent.venueName}
            address={isKhmerLocale ? (mainEvent.addressKhmer || mainEvent.address) : mainEvent.address}
            locale={currentLocale}
          />
        </div>
      </section>

      {/* 4. Couple Section */}
      <CoupleSection
        groom={data.groom}
        bride={data.bride}
        quote={data.quote}
        greetingText={data.greetingText}
        greetingTextKhmer={data.greetingTextKhmer}
        themeConfig={themeConfig}
        locale={currentLocale}
      />

      {/* 5. Events Section */}
      <EventsSection
        events={data.events}
        dressCode={data.dressCode}
        themeConfig={themeConfig}
        locale={currentLocale}
      />

      {/* 6. Love Story Timeline */}
      <LoveStorySection
        stories={data.loveStories}
        themeConfig={themeConfig}
        locale={currentLocale}
      />

      {/* 7. Gallery Section */}
      <GallerySection
        gallery={data.gallery}
        themeConfig={themeConfig}
        locale={currentLocale}
      />

      {/* 8. Digital Gift / Cashless KHQR Registry */}
      <DigitalGiftSection
        gifts={data.gifts}
        themeConfig={themeConfig}
        locale={currentLocale}
      />

      {/* 9. RSVP & Guestbook */}
      <RsvpAndWishesSection
        weddingSlug={data.slug}
        initialWishes={data.wishes}
        defaultGuestName={guestName}
        rsvpDeadlineKhmer={data.rsvpDeadlineKhmer}
        rsvpDeadline={data.rsvpDeadline}
        themeConfig={themeConfig}
        locale={currentLocale}
      />

      {/* 10. Closing Gratitude Section */}
      <section className="py-16 px-4 text-center max-w-2xl mx-auto relative">
        <div className="w-16 h-16 rounded-full gold-foil-bg text-amber-950 flex items-center justify-center mx-auto mb-6 shadow-xl border-2 border-yellow-200 animate-pulse-gold">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <h3 className={`text-2xl sm:text-3xl gold-foil-text mb-3 ${isKhmerLocale ? 'font-khmer-moul' : 'font-playfair font-bold'}`}>
          {t.thankYouGratitude}
        </h3>
        <p className={`mt-4 text-xs sm:text-sm text-slate-700 leading-loose ${isKhmerLocale ? 'font-khmer' : 'font-sans'}`}>
          {isKhmerLocale 
            ? 'យើងខ្ញុំជាមាតាបិតាទាំងសងខាង និងកូនប្រុស-កូនស្រី សូមគោរពថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុត ចំពោះវត្តមានដ៏ឧត្តុង្គឧត្តម និងពរជ័យដ៏ថ្លៃថ្លារបស់ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ដែលបានចំណាយពេលវេលាដ៏មានតម្លៃអញ្ជើញចូលរួមជាកិត្តិយសក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ។'
            : 'Together with our families, we express our heartfelt gratitude for your warm presence, blessings, and love on our special day. May peace, happiness, and joy be with you always.'
          }
        </p>
        <div className="mt-8 pt-6 border-t border-amber-300">
          <p className="text-xs uppercase tracking-widest text-amber-800/80 font-bold">{t.warmRegards}</p>
          <p className={`text-2xl text-slate-900 mt-2 ${isKhmerLocale ? 'font-khmer-koulen' : 'font-playfair font-bold'}`}>
            {displayGroomNick} & {displayBrideNick}
          </p>
          <p className="text-xs text-amber-900 mt-1 font-bold">{t.bothFamilies}</p>
        </div>
      </section>

      {/* 11. Floating Bottom Nav */}
      <BottomNavBar themeConfig={themeConfig} locale={currentLocale} />
    </div>
  );
}
