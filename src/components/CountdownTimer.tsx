'use client';

import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { SupportedLocale, DICTIONARIES, toKhmerNumber } from '@/lib/i18n';

interface CountdownTimerProps {
  targetDate: string; // "2026-11-28"
  targetTime?: string; // "07:00"
  weddingTitle: string;
  venueName?: string;
  address?: string;
  locale?: SupportedLocale;
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
  targetTime = '07:00',
  weddingTitle,
  venueName = 'Wedding Venue',
  address = '',
  locale = 'km'
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  useEffect(() => {
    const calculateTime = () => {
      // Ensure date format "YYYY-MM-DDTHH:mm:00"
      const datePart = targetDate.includes('T') ? targetDate.split('T')[0] : targetDate;
      const cleanTime = targetTime.includes(':') ? targetTime.split(' ')[0] : '07:00';
      const destination = new Date(`${datePart}T${cleanTime.padStart(5, '0')}:00`).getTime();
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
    const cleanDate = targetDate.replace(/-/g, '').slice(0, 8);
    const timeDigits = targetTime.replace(/[^0-9]/g, '').slice(0, 4) || '0700';
    const startIso = `${cleanDate}T${timeDigits.padEnd(4, '0')}00`;
    const endIso = `${cleanDate}T220000`;

    const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      weddingTitle
    )}&dates=${startIso}/${endIso}&details=${encodeURIComponent(
      isKhmer
        ? `ពិធីមង្គលការសិរីសួស្តី៖ ${weddingTitle} នៅ ${venueName}`
        : `Wedding celebration of ${weddingTitle} at ${venueName}`
    )}&location=${encodeURIComponent(`${venueName}, ${address}`)}`;

    window.open(gcalUrl, '_blank');
  };

  const timeBlocks = [
    { label: t.days, value: timeLeft.days },
    { label: t.hours, value: timeLeft.hours },
    { label: t.minutes, value: timeLeft.minutes },
    { label: t.seconds, value: timeLeft.seconds }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {timeLeft.isPast ? (
        <div className="py-4 px-6 rounded-2xl bg-amber-50 border border-amber-300 text-amber-950 text-center shadow-xs">
          <p className={`text-base font-bold ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
            {t.dayHasArrived}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full max-w-sm sm:max-w-md">
            {timeBlocks.map((block, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-amber-300/80 shadow-md transition-all hover:scale-105 duration-300 group"
              >
                <span className={`text-xl sm:text-3xl font-extrabold gold-foil-text tracking-tight group-hover:scale-110 transition-transform ${isKhmer ? 'font-khmer-koulen' : 'font-mono'}`}>
                  {isKhmer ? toKhmerNumber(String(block.value).padStart(2, '0')) : String(block.value).padStart(2, '0')}
                </span>
                <span className={`text-[10px] sm:text-[11px] font-bold text-amber-950 uppercase tracking-wider mt-1 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {block.label}
                </span>
              </div>
            ))}
          </div>

          {/* Add to Google Calendar Button */}
          <button
            onClick={handleAddToCalendar}
            className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 text-amber-950 text-xs font-bold border border-amber-300 shadow-sm hover:bg-amber-50 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            <span className={isKhmer ? 'font-khmer' : 'font-sans'}>
              {t.saveToCalendar}
            </span>
          </button>
        </>
      )}
    </div>
  );
}
