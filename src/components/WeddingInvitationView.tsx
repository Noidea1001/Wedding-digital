'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, MapPin, Calendar as CalendarIcon, Volume2 } from 'lucide-react';
import { WeddingInvitationData } from '@/types/wedding';
import { THEME_CONFIGS } from '@/lib/themes';
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
}

export default function WeddingInvitationView({
  data,
  guestName = 'Tamu Undangan',
  guestGroup
}: WeddingInvitationViewProps) {
  const [isOpened, setIsOpened] = useState(false);
  const themeConfig = THEME_CONFIGS[data.theme] || THEME_CONFIGS['floral-rose'];

  // Format primary event date
  const mainEvent = data.events[0] || {
    date: '2026-12-12',
    startTime: '08:00',
    venueName: 'Venue',
    address: ''
  };

  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(mainEvent.date));

  return (
    <div className={`min-h-screen ${themeConfig.bodyBg} ${themeConfig.primaryText} relative selection:bg-rose-200 selection:text-rose-900 overflow-x-hidden pb-24`}>
      {/* 1. Envelope Opening Cover */}
      {!isOpened && (
        <EnvelopeCover
          brideNickname={data.bride.nickname}
          groomNickname={data.groom.nickname}
          weddingDateFormatted={formattedDate}
          guestName={guestName}
          guestGroup={guestGroup}
          themeConfig={themeConfig}
          onOpenInvitation={() => setIsOpened(true)}
        />
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
        {/* Soft background ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-rose-200/25 via-transparent to-transparent pointer-events-none" />

        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-xs uppercase tracking-[0.2em] font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>The Wedding Celebration</span>
        </div>

        {/* Grand Typography Couple Name */}
        <div className="max-w-3xl mx-auto my-4">
          <h1 className="font-playfair text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
            {data.groom.nickname}
          </h1>
          <div className="flex items-center justify-center gap-4 my-2">
            <div className="h-[1px] w-12 sm:w-20 bg-rose-300" />
            <span className="font-cormorant italic text-3xl sm:text-5xl text-rose-700">&</span>
            <div className="h-[1px] w-12 sm:w-20 bg-rose-300" />
          </div>
          <h1 className="font-playfair text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
            {data.bride.nickname}
          </h1>
        </div>

        {/* Wedding Date Display */}
        <p className="mt-4 text-sm sm:text-base tracking-widest text-slate-600 font-medium uppercase font-serif">
          {formattedDate}
        </p>

        {/* Countdown Timer Block */}
        <div className="mt-10 w-full max-w-md">
          <CountdownTimer
            targetDate={mainEvent.date}
            targetTime={mainEvent.startTime}
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

      {/* 8. Digital Gift / Cashless Envelope */}
      <DigitalGiftSection
        gifts={data.gifts}
        themeConfig={themeConfig}
      />

      {/* 9. RSVP & Guestbook */}
      <RsvpAndWishesSection
        weddingSlug={data.slug}
        initialWishes={data.wishes}
        defaultGuestName={guestName !== 'Tamu Undangan' ? guestName : ''}
        rsvpDeadline={data.rsvpDeadline}
        themeConfig={themeConfig}
      />

      {/* 10. Closing Section */}
      <section className="py-16 px-4 text-center max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Heart className="w-6 h-6 fill-current animate-pulse-soft" />
        </div>
        <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-800">
          Ungkapan Terima Kasih
        </h3>
        <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kami. Atas kehadiran dan doa restunya, kami ucapkan terima kasih yang tulus.
        </p>
        <div className="mt-8">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Kami yang berbahagia,</p>
          <p className="font-playfair text-2xl font-bold text-slate-900 mt-2">
            {data.groom.nickname} & {data.bride.nickname}
          </p>
          <p className="text-xs text-slate-500 mt-1">Beserta Keluarga Besar Kedua Mempelai</p>
        </div>
      </section>

      {/* 11. Floating Bottom Nav */}
      <BottomNavBar themeConfig={themeConfig} />
    </div>
  );
}
