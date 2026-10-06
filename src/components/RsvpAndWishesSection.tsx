'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, HeartHandshake, UserCheck, UserX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WishMessage } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { addWish } from '@/lib/storage';

interface RsvpAndWishesSectionProps {
  weddingSlug: string;
  initialWishes: WishMessage[];
  defaultGuestName?: string;
  rsvpDeadlineKhmer?: string;
  themeConfig: ThemeConfig;
}

export default function RsvpAndWishesSection({
  weddingSlug,
  initialWishes,
  defaultGuestName = '',
  rsvpDeadlineKhmer,
  themeConfig
}: RsvpAndWishesSectionProps) {
  const [wishesList, setWishesList] = useState<WishMessage[]>(initialWishes || []);
  const [guestName, setGuestName] = useState(defaultGuestName);
  const [attendance, setAttendance] = useState<'attending' | 'declined' | 'tentative'>('attending');
  const [pax, setPax] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12 font-khmer">
      <div className="text-center mb-14">
        <h2 className="font-khmer-moul text-xl sm:text-2xl text-amber-900 mb-2">
          បញ្ជាក់វត្តមាន & សៀវភៅជូនពរ
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-3">
          RSVP & Guestbook
        </span>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          សូមមេត្តាបញ្ជាក់វត្តមានរបស់លោកអ្នក
          {rsvpDeadlineKhmer && ` មុនថ្ងៃទី ${rsvpDeadlineKhmer}`} ដើម្បីភាពងាយស្រួលក្នុងការរៀបចំទទួលបដិសណ្ឋារកិច្ច។
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RSVP Form Card */}
        <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} border border-amber-200/90 shadow-md`}>
          <div className="flex items-center gap-2 mb-6 text-amber-950 font-bold text-base">
            <HeartHandshake className="w-5 h-5 text-amber-600" />
            <span className="font-khmer-koulen text-lg tracking-wide">ផ្ញើការបញ្ជាក់វត្តមាន & ពរជ័យ</span>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-emerald-950 text-base font-khmer-koulen tracking-wide">
                សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅ!
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed">
                ការបញ្ជាក់វត្តមាន និងពាក្យជូនពរដ៏មានអត្ថន័យរបស់លោកអ្នកត្រូវបានកត់ត្រារួចរាល់ហើយ។
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-bold text-emerald-900 underline hover:text-emerald-950"
              >
                ផ្ញើសារជូនពរបន្ថែម
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  ឈ្មោះរបស់លោកអ្នក (Your Name) *
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="ឧទាហរណ៍៖ ឯកឧត្តម សុខ ចាន់ថន ឬ លោក ហេង ពិសិដ្ឋ"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200/50 outline-none text-xs sm:text-sm transition-all bg-white font-khmer"
                />
              </div>

              {/* Attendance Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  ការបញ្ជាក់វត្តមាន (RSVP Status) *
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                      attendance === 'attending'
                        ? 'bg-amber-700 text-white border-amber-700 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>ចូលរួម (Attending)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('declined')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                      attendance === 'declined'
                        ? 'bg-slate-800 text-white border-slate-800 shadow-xs'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <UserX className="w-4 h-4" />
                    <span>អវត្តមាន (Decline)</span>
                  </button>
                </div>
              </div>

              {/* Number of Pax if attending */}
              {attendance === 'attending' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    ចំនួនភ្ញៀវចូលរួម (Number of Pax)
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPax(num)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                          pax === num
                            ? 'bg-amber-100 border-amber-400 text-amber-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {num} នាក់
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  ពាក្យជូនពរសិរីមង្គល (Blessing Message) *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="សូមសរសេរពាក្យជូនពរជ័យសិរីមង្គលដល់គូស្វាមីភរិយាថ្មី..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200/50 outline-none text-xs sm:text-sm transition-all bg-white resize-none font-khmer"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-900/15 hover:shadow-lg transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'កំពុងផ្ញើ...' : 'ផ្ញើការបញ្ជាក់វត្តមាន & ពរជ័យ'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Wishes Feed */}
        <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} border border-amber-200/90 shadow-md flex flex-col h-[540px]`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
              <MessageSquare className="w-5 h-5 text-amber-600" />
              <span className="font-khmer-koulen text-lg tracking-wide">សៀវភៅពរជ័យមង្គល</span>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-950 font-khmer">
              {wishesList.length} ពរជ័យ
            </span>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-1 mt-4 scrollbar-thin">
            {wishesList.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-xs sm:text-sm">
                មិនទាន់មានពាក្យជូនពរនៅឡើយទេ។ សូមក្លាយជាអ្នកដំបូងដែលផ្តល់ពរជ័យ!
              </div>
            ) : (
              wishesList.map((wish) => (
                <div
                  key={wish.id}
                  className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/60 text-left transition-all hover:bg-amber-50/80"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-200 text-amber-950 font-bold text-xs flex items-center justify-center">
                        {wish.guestName.charAt(0)}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 text-xs sm:text-sm">
                          {wish.guestName}
                        </h5>
                        <span className="text-[10px] text-slate-400">{wish.createdAt}</span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        wish.attendance === 'attending'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {wish.attendance === 'attending' ? `ចូលរួម (${wish.pax || 1} នាក់)` : 'អវត្តមាន'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-khmer mt-1">
                    {wish.message}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
