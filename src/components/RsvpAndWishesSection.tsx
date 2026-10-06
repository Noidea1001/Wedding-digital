'use client';

import React, { useState } from 'react';
import { CheckCircle2, HeartHandshake, UserCheck, UserX, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WishMessage } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';
import { addWish } from '@/lib/storage';

interface RsvpAndWishesSectionProps {
  weddingSlug: string;
  initialWishes: WishMessage[];
  defaultGuestName?: string;
  rsvpDeadlineKhmer?: string;
  rsvpDeadline?: string;
  themeConfig: ThemeConfig;
  locale?: SupportedLocale;
}

export default function RsvpAndWishesSection({
  weddingSlug,
  initialWishes,
  defaultGuestName = '',
  rsvpDeadlineKhmer,
  rsvpDeadline,
  themeConfig,
  locale = 'km'
}: RsvpAndWishesSectionProps) {
  const [wishesList, setWishesList] = useState<WishMessage[]>(initialWishes || []);
  const [guestName, setGuestName] = useState(defaultGuestName);
  const [attendance, setAttendance] = useState<'attending' | 'declined' | 'tentative'>('attending');
  const [pax, setPax] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newWish = addWish(weddingSlug, {
        guestName: guestName.trim(),
        attendance,
        pax,
        message: message.trim()
      });

      setWishesList((prev) => [newWish, ...prev]);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setMessage('');

      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#D4AF37', '#B8860B', '#E2849D', '#FFFFFF']
        });
      } catch (err) {
        console.warn(err);
      }
    }, 400);
  };

  const deadlineText = isKhmer
    ? (rsvpDeadlineKhmer ? ` មុន${rsvpDeadlineKhmer}` : '')
    : (rsvpDeadline ? ` before ${rsvpDeadline}` : '');

  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      <div className="text-center mb-14">
        <h2 className={`text-2xl sm:text-3xl text-amber-950 mb-2 ${isKhmer ? 'font-khmer-moul' : 'font-playfair font-bold'}`}>
          {t.rsvpTitle}
        </h2>
        <span className={`text-xs uppercase tracking-[0.25em] font-bold text-amber-800/70 block mb-3 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {isKhmer ? 'ការឆ្លើយតប និងពរជ័យសិរីមង្គល' : 'RSVP & Guestbook'}
        </span>
        <p className={`mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {t.rsvpDesc}{deadlineText}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RSVP Form Card */}
        <div className={`lg:col-span-6 p-6 sm:p-8 rounded-[32px] ${themeConfig.cardBg} border-2 border-amber-300/80 shadow-md`}>
          <div className="flex items-center gap-2 mb-6 text-amber-950 font-bold text-base">
            <HeartHandshake className="w-5 h-5 text-amber-600" />
            <span className={`text-lg tracking-wide ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
              {t.sendRsvp}
            </span>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className={`font-bold text-emerald-950 text-base tracking-wide ${isKhmer ? 'font-khmer-koulen' : 'font-sans'}`}>
                {t.thankYouMessage}
              </h4>
              <p className={`text-xs text-emerald-800 leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                {isKhmer
                  ? 'ការបញ្ជាក់វត្តមាន និងពាក្យជូនពរដ៏មានអត្ថន័យរបស់លោកអ្នកត្រូវបានកត់ត្រារួចរាល់ហើយ។'
                  : 'Your RSVP response and heartfelt blessings have been successfully recorded.'}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className={`mt-2 text-xs font-bold text-emerald-900 underline hover:text-emerald-950 cursor-pointer ${isKhmer ? 'font-khmer' : 'font-sans'}`}
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Name */}
              <div>
                <label className={`block text-xs font-bold text-slate-700 mb-1.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {t.yourName}
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200/50 outline-none text-xs sm:text-sm transition-all bg-white ${isKhmer ? 'font-khmer' : 'font-sans'}`}
                />
              </div>

              {/* Attendance confirmation */}
              <div>
                <label className={`block text-xs font-bold text-slate-700 mb-2 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {t.confirmation}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      attendance === 'attending'
                        ? 'bg-amber-100/80 border-amber-400 text-amber-950 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5 text-amber-700" />
                    <span className={isKhmer ? 'font-khmer' : 'font-sans'}>{t.attending}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('declined')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      attendance === 'declined'
                        ? 'bg-rose-50 border-rose-300 text-rose-900 shadow-xs'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <UserX className="w-3.5 h-3.5 text-rose-600" />
                    <span className={isKhmer ? 'font-khmer' : 'font-sans'}>{t.declined}</span>
                  </button>
                </div>
              </div>

              {/* Number of Pax */}
              {attendance === 'attending' && (
                <div>
                  <label className={`block text-xs font-bold text-slate-700 mb-1.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                    {t.numberOfPax}
                  </label>
                  <select
                    value={pax}
                    onChange={(e) => setPax(Number(e.target.value))}
                    className={`w-full px-4 py-2.5 rounded-xl border border-amber-200 focus:border-amber-500 outline-none text-xs sm:text-sm bg-white font-medium ${isKhmer ? 'font-khmer' : 'font-sans'}`}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {isKhmer ? `${n} នាក់` : `${n} Guest${n > 1 ? 's' : ''}`}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Blessing Message */}
              <div>
                <label className={`block text-xs font-bold text-slate-700 mb-1.5 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {t.blessingMessage}
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.messagePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border border-amber-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200/50 outline-none text-xs sm:text-sm transition-all bg-white ${isKhmer ? 'font-khmer' : 'font-sans'}`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-2xl gold-foil-bg text-amber-950 font-bold text-sm shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer border border-yellow-200"
              >
                <span className={isKhmer ? 'font-khmer-koulen text-base tracking-wide' : 'font-sans'}>
                  {isSubmitting ? t.sending : t.sendRsvp}
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Guestbook List Card */}
        <div className={`lg:col-span-6 p-6 sm:p-8 rounded-[32px] ${themeConfig.cardBg} border-2 border-amber-300/80 shadow-md`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
              <MessageSquare className="w-5 h-5 text-amber-600" />
              <span className={`text-lg tracking-wide ${isKhmer ? 'font-khmer-koulen' : 'font-playfair'}`}>
                {t.guestbookTitle}
              </span>
            </div>
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {wishesList.length}
            </span>
          </div>

          <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
            {wishesList.length === 0 ? (
              <p className={`text-xs text-slate-400 text-center py-10 italic ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                {t.noWishesYet}
              </p>
            ) : (
              wishesList.map((w) => (
                <div
                  key={w.id}
                  className="p-4 rounded-2xl bg-white/80 border border-amber-200/70 shadow-xs space-y-1.5 transition-all hover:border-amber-300"
                >
                  <div className="flex items-center justify-between">
                    <h5 className={`font-bold text-slate-900 text-xs sm:text-sm ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {w.guestName}
                    </h5>
                    <span className="text-[10px] text-slate-400">{w.createdAt}</span>
                  </div>
                  <p className={`text-xs text-slate-700 leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                    {w.message}
                  </p>
                  <div className="pt-1 flex items-center gap-2">
                    <span
                      className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                        w.attendance === 'attending'
                          ? 'bg-amber-100 text-amber-900'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {w.attendance === 'attending' ? t.attending : t.declined}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
