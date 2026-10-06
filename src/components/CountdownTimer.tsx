'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string; // "2026-12-12"
  targetTime?: string; // "08:00"
  weddingTitle: string;
  venueName?: string;
  address?: string;
  themeAccent?: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export default function CountdownTimer({
  targetDate,
  targetTime = '08:00',
  weddingTitle,
  venueName = 'Wedding Venue',
  address = '',
  themeAccent = 'bg-rose-700'
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const destination = new Date(`${targetDate}T${targetTime}:00`).getTime();
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate, targetTime]);

  const handleAddToCalendar = () => {
    // Generate Google Calendar Link
    // Date format for Google Calendar: YYYYMMDDTHHMMSSZ
    const cleanDate = targetDate.replace(/-/g, '');
    const cleanTime = targetTime.replace(/:/g, '') + '00';
    const startIso = `${cleanDate}T${cleanTime}`;
    // Assuming 4 hour duration
    const endHour = String(parseInt(targetTime.split(':')[0], 10) + 4).padStart(2, '0');
    const endIso = `${cleanDate}T${endHour}${targetTime.split(':')[1]}00`;

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      weddingTitle
    )}&dates=${startIso}/${endIso}&details=${encodeURIComponent(
      `Pernikahan yang berbahagia: ${weddingTitle}. Bertempat di ${venueName}`
    )}&location=${encodeURIComponent(`${venueName}, ${address}`)}`;

    window.open(gcalUrl, '_blank');
  };

  const timeBlocks = [
    { label: 'HARI', value: timeLeft.days },
    { label: 'JAM', value: timeLeft.hours },
    { label: 'MENIT', value: timeLeft.minutes },
    { label: 'DETIK', value: timeLeft.seconds }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {timeLeft.isPast ? (
        <div className="py-4 px-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-serif text-center">
          <p className="text-lg font-medium">Hari Bahagia Telah Tiba!</p>
          <p className="text-sm text-amber-700 mt-1">Terima kasih atas segala doa restu dan kebahagiaan yang telah dibagikan.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full max-w-md">
            {timeBlocks.map((block, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-xl shadow-lg border-2 border-amber-300/80 transition-transform hover:-translate-y-1 hover:border-amber-400 group"
              >
                <span className="text-2xl sm:text-3xl font-bold font-cormorant tracking-tight gold-foil-text">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-slate-500 uppercase mt-0.5">
                  {block.label}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleAddToCalendar}
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-amber-950 shadow-xl shadow-amber-900/20 hover:opacity-95 transition-all gold-foil-bg hover:scale-105 active:scale-95 border border-yellow-200"
          >
            <Calendar className="w-4 h-4 text-amber-950" />
            <span>Save to Google Calendar</span>
          </button>
        </>
      )}
    </div>
  );
}
