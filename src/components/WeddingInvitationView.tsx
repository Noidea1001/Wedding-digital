'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, Palette, Globe } from 'lucide-react';
import { WeddingInvitationData, WeddingTheme } from '@/types/wedding';
import { THEME_CONFIGS } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';
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

  const t = DICTIONARIES[currentLocale] || DICTIONARIES.en;
  const themeConfig = THEME_CONFIGS[activeTheme] || THEME_CONFIGS['khmer-royal-gold'];

  const mainEvent = data.events[0] || {
    date: '2026-11-28',
    dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
    startTime: '07:00 ព្រឹក',
    venueName: 'Venue',
    address: ''
  };

  const isKhmerLocale = currentLocale === 'km';
  const displayGroom = (isKhmerLocale && data.groom.fullNameKhmer) ? data.groom.fullNameKhmer : data.groom.fullName;
  const displayBride = (isKhmerLocale && data.bride.fullNameKhmer) ? data.bride.fullNameKhmer : data.bride.fullName;
  const displayGroomNick = (isKhmerLocale && data.groom.nicknameKhmer) ? data.groom.nicknameKhmer : data.groom.nickname;
  const displayBrideNick = (isKhmerLocale && data.bride.nicknameKhmer) ? data.bride.nicknameKhmer : data.bride.nickname;

  const resolvedGuestName = guestName || t.honoredGuest;

  // Group theme keys by category for convenient browsing
  const themeKeys = Object.keys(THEME_CONFIGS) as WeddingTheme[];

  return (
    <div className={`min-h-screen ${themeConfig.bodyBg} ${themeConfig.primaryText} relative selection:bg-amber-200 selection:text-amber-950 overflow-x-hidden pb-24 font-khmer`}>
      {/* 1. Envelope Opening Cover */}
      {!isOpened && (
        <EnvelopeCover
          brideNickname={data.bride.nickname}
          brideNicknameKhmer={data.bride.nicknameKhmer}
          groomNickname={data.groom.nickname}
          groomNicknameKhmer={data.groom.nicknameKhmer}
          weddingDateFormatted={isKhmerLocale ? (mainEvent.dateKhmer || mainEvent.date) : mainEvent.date}
          guestName={resolvedGuestName}
          guestGroup={guestGroup}
          themeConfig={themeConfig}
          onOpenInvitation={() => setIsOpened(true)}
        />
      )}

      {/* Top Floating Control Bar (Language Switcher & Theme Picker) */}
      {isOpened && (
        <div className="fixed top-4 right-4 z-40 flex items-center gap-2">
          {/* Language Switcher */}
          <LanguageSwitcher
            currentLocale={currentLocale}
            onLocaleChange={(loc) => setCurrentLocale(loc)}
          />

          {/* Theme Switcher Button */}
          {allowThemeSwitching && (
            <div className="relative">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 text-slate-800 text-xs font-bold border border-slate-200 shadow-md backdrop-blur-md hover:bg-slate-50 transition-all"
              >
                <Palette className="w-3.5 h-3.5 text-amber-700" />
                <span className="hidden sm:inline">{t.templates}:</span>
                <span className="text-amber-800">{themeConfig.name.split(' ')[0]}</span>
              </button>

              {/* Extended Theme Picker Dropdown */}
              {showThemePicker && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-3 z-50 animate-fadeIn max-h-96 overflow-y-auto">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                    {t.selectTemplate} (12 Choices):
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
                          className={`w-full text-left p-2 rounded-xl text-xs font-bold flex items-center justify-between transition-all ${
                            isCurrent
                              ? 'bg-amber-100 text-amber-950 border border-amber-300'
                              : 'hover:bg-slate-50 text-slate-700'
                          }`}
                        >
                          <div>
                            <span className="block font-bold">{cfg.name}</span>
                            <span className="text-[10px] text-slate-400 font-normal">{cfg.description}</span>
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

      {/* 2. Floating Audio Player */}
      <AudioPlayer
        audioUrl={data.soundtrack.audioUrl}
        songTitle={data.soundtrack.title}
        artist={data.soundtrack.artist}
        autoPlayTrigger={isOpened}
      />

      {/* 3. Hero Section */}
      <section
        id="hero"
        className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 pt-12 pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200/20 via-transparent to-transparent pointer-events-none" />

        {/* Traditional/Modern Ribbon */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 text-slate-800 text-xs font-bold mb-6 shadow-xs font-khmer">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{t.auspiciousBlessing}</span>
        </div>

        {/* Sacred / Grand Title */}
        <h2 className={`${themeConfig.headerFontClass} text-2xl sm:text-3xl text-amber-900 tracking-wider mb-2`}>
          {isKhmerLocale ? data.titleKhmer : t.theWeddingOf}
        </h2>

        {/* Grand Typography Couple Name */}
        <div className="max-w-3xl mx-auto my-4">
          <h1 className={`${themeConfig.titleFontClass} text-4xl sm:text-6xl tracking-wide text-slate-900 leading-tight`}>
            {displayGroom}
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="h-[2px] w-12 sm:w-20 bg-amber-400" />
            <span className="font-serif italic text-3xl sm:text-5xl text-amber-700">{t.and}</span>
            <div className="h-[2px] w-12 sm:w-20 bg-amber-400" />
          </div>
          <h1 className={`${themeConfig.titleFontClass} text-4xl sm:text-6xl tracking-wide text-slate-900 leading-tight`}>
            {displayBride}
          </h1>
        </div>

        {/* Wedding Date Display */}
        <div className="mt-4 px-4 py-1.5 rounded-full bg-white/80 border border-slate-200 shadow-xs inline-block">
          <p className="text-xs sm:text-sm font-bold text-slate-800 font-khmer">
            {isKhmerLocale ? (mainEvent.dateKhmer || mainEvent.date) : mainEvent.date}
          </p>
        </div>

        {/* Countdown Timer Block */}
        <div className="mt-10 w-full max-w-md">
          <CountdownTimer
            targetDate={mainEvent.date}
            targetTime={mainEvent.startTime.includes('07') ? '07:00' : '08:00'}
            weddingTitle={data.title}
            venueName={mainEvent.venueName}
            address={mainEvent.address}
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
      />

      {/* 5. Events Section */}
      <EventsSection
        events={data.events}
        dressCode={data.dressCode}
        themeConfig={themeConfig}
      />

      {/* 6. Love Story Timeline */}
      <LoveStorySection
        stories={data.loveStories}
        themeConfig={themeConfig}
      />

      {/* 7. Gallery Section */}
      <GallerySection
        gallery={data.gallery}
        themeConfig={themeConfig}
      />

      {/* 8. Digital Gift / Cashless Registry */}
      <DigitalGiftSection
        gifts={data.gifts}
        themeConfig={themeConfig}
      />

      {/* 9. RSVP & Guestbook */}
      <RsvpAndWishesSection
        weddingSlug={data.slug}
        initialWishes={data.wishes}
        defaultGuestName={guestName}
        rsvpDeadlineKhmer={data.rsvpDeadlineKhmer}
        themeConfig={themeConfig}
      />

      {/* 10. Closing Section */}
      <section className="py-16 px-4 text-center max-w-2xl mx-auto font-khmer">
        <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto mb-6 shadow-sm border border-amber-300">
          <Heart className="w-7 h-7 fill-current animate-pulse-soft" />
        </div>
        <h3 className={`${themeConfig.headerFontClass} text-xl sm:text-2xl text-amber-900 mb-3`}>
          {t.thankYouGratitude}
        </h3>
        <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-loose">
          {isKhmerLocale 
            ? 'យើងខ្ញុំជាមាតាបិតាទាំងសងខាង និងកូនប្រុស-កូនស្រី សូមគោរពថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុត ចំពោះវត្តមានដ៏ឧត្តុង្គឧត្តម និងពរជ័យដ៏ថ្លៃថ្លារបស់ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា ដែលបានចំណាយពេលវេលាដ៏មានតម្លៃអញ្ជើញចូលរួមជាកិត្តិយសក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ។'
            : 'We would like to express our deepest gratitude to all our families, friends, and honored guests for your warm presence, blessings, and love on our special day.'
          }
        </p>
        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">{t.warmRegards}</p>
          <p className={`${themeConfig.titleFontClass} text-2xl text-slate-900 mt-2`}>
            {displayGroomNick} & {displayBrideNick}
          </p>
          <p className="text-xs text-amber-900 mt-1 font-bold">{t.bothFamilies}</p>
        </div>
      </section>

      {/* 11. Floating Bottom Nav */}
      <BottomNavBar themeConfig={themeConfig} />
    </div>
  );
}
