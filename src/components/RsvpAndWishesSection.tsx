'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Users, HeartHandshake, UserCheck, UserX } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WishMessage } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { addWish } from '@/lib/storage';

interface RsvpAndWishesSectionProps {
  weddingSlug: string;
  initialWishes: WishMessage[];
  defaultGuestName?: string;
  rsvpDeadline?: string;
  themeConfig: ThemeConfig;
}

export default function RsvpAndWishesSection({
  weddingSlug,
  initialWishes,
  defaultGuestName = '',
  rsvpDeadline,
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

      // Confetti feedback
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#E08D9D', '#D4AF37', '#8F9779']
        });
      } catch (err) {
        console.warn(err);
      }
    }, 400);
  };

  return (
    <section id="rsvp" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-[0.25em] text-rose-700 uppercase block mb-2">
          Konfirmasi & Doa
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800">
          RSVP & Buku Tamu
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
          Mohon konfirmasi kehadiran Anda demi kelancaran jamuan kami
          {rsvpDeadline && ` sebelum ${rsvpDeadline}`}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* RSVP Form Card */}
        <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} border border-slate-200/80 shadow-md`}>
          <div className="flex items-center gap-2 mb-6 text-rose-800 font-semibold text-base">
            <HeartHandshake className="w-5 h-5 text-rose-600" />
            <span>Kirim Konfirmasi & Ucapan</span>
          </div>

          {isSubmitted ? (
            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-emerald-900 text-lg">Terima Kasih Banyak!</h4>
              <p className="text-xs text-emerald-700 leading-relaxed">
                Konfirmasi kehadiran dan untaian doa Anda telah berhasil kami terima.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                Kirim pesan lainnya
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Nama Anda *
                </label>
                <input
                  type="text"
                  required
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Contoh: Budi Santoso & Partner"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 outline-none text-sm transition-all bg-white"
                />
              </div>

              {/* Attendance Selection */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setAttendance('attending')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                      attendance === 'attending'
                        ? 'bg-rose-700 text-white border-rose-700 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <UserCheck className="w-4 h-4" />
                    <span>Hadir</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('declined')}
                    className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                      attendance === 'declined'
                        ? 'bg-slate-800 text-white border-slate-800 shadow-sm'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <UserX className="w-4 h-4" />
                    <span>Berhalangan</span>
                  </button>
                </div>
              </div>

              {/* Number of Pax if attending */}
              {attendance === 'attending' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Jumlah Tamu (Pax)
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPax(num)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                          pax === num
                            ? 'bg-rose-100 border-rose-400 text-rose-900'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {num} Orang
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Ucapan & Doa Restu *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan selamat dan doa terbaik untuk kedua mempelai..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-rose-400 focus:ring-2 focus:ring-rose-200/50 outline-none text-sm transition-all bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white font-medium text-sm shadow-md shadow-rose-900/15 hover:shadow-lg transition-all disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Mengirim...' : 'Kirim RSVP & Ucapan'}</span>
              </button>
            </form>
          )}
        </div>

        {/* Wishes Feed */}
        <div className={`lg:col-span-6 p-6 sm:p-8 rounded-3xl ${themeConfig.cardBg} border border-slate-200/80 shadow-md flex flex-col h-[520px]`}>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2 text-rose-800 font-semibold text-base">
              <MessageSquare className="w-5 h-5 text-rose-600" />
              <span>Buku Doa Tamu</span>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
              {wishesList.length} Doa
            </span>
          </div>

          {/* Scrollable wishes */}
          <div className="flex-1 overflow-y-auto space-y-4 pr-1 mt-4 scrollbar-thin">
            {wishesList.length === 0 ? (
              <div className="text-center py-12 text-slate-400 text-sm">
                Belum ada ucapan. Jadilah yang pertama memberikan doa restu!
              </div>
            ) : (
              wishesList.map((wish) => (
                <div
                  key={wish.id}
                  className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/70 text-left transition-all hover:bg-slate-50"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-rose-200/80 text-rose-900 font-bold text-xs flex items-center justify-center">
                        {wish.guestName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-800 text-xs sm:text-sm">
                          {wish.guestName}
                        </h5>
                        <span className="text-[10px] text-slate-400">{wish.createdAt}</span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        wish.attendance === 'attending'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {wish.attendance === 'attending' ? `Hadir (${wish.pax || 1} Pax)` : 'Berhalangan'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans mt-1">
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
