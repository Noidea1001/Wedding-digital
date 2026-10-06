'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Heart, 
  Sparkles, 
  Sliders, 
  Share2, 
  Music, 
  CreditCard, 
  MessageSquare, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  Smartphone,
  Gift
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAF7F5] text-slate-800 flex flex-col selection:bg-rose-200 selection:text-rose-900">
      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-700 to-rose-500 text-white flex items-center justify-center shadow-md shadow-rose-900/20 group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <span className="font-playfair text-xl font-bold tracking-tight text-slate-900">
              Vows & Bloom
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/invite/sarah-david"
              target="_blank"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-rose-50/70 transition-all"
            >
              <span>Demo Undangan</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-rose-900/15 transition-all"
            >
              <span>Dashboard Host</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-32 px-4 overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-rose-200/40 via-amber-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-xs uppercase tracking-widest font-semibold mb-6 shadow-xs animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Platform Undangan Pernikahan Digital Masa Depan</span>
          </div>

          <h1 className="font-playfair text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.15]">
            Momen Abadi, Disampaikan dengan{' '}
            <span className="italic font-cormorant text-rose-700 underline decoration-rose-300 decoration-wavy">
              Elegan & Berkesan
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Buat undangan digital interaktif dengan pembuka amplop eksklusif, sebar undangan via WhatsApp 1-klik, putar musik romantis, dan kelola konfirmasi kehadiran tamu dalam satu dashboard cerdas.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/dashboard/builder"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl bg-rose-700 hover:bg-rose-800 text-white font-semibold text-sm sm:text-base shadow-lg shadow-rose-900/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Buka Editor Undangan</span>
            </Link>

            <Link
              href="/invite/sarah-david"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-2xl bg-white hover:bg-rose-50/50 border border-slate-200 text-slate-800 font-semibold text-sm sm:text-base shadow-sm transition-all"
            >
              <span>Lihat Demo Interaktif</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="max-w-6xl mx-auto mt-20 sm:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mb-5">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">
              Sebar WhatsApp 1-Klik
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tulis nama tamu, sistem otomatis menghasilkan tautan personal khusus nama tamu dan membuka aplikasi WhatsApp dengan pesan undangan yang tersusun rapi.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
              <Music className="w-6 h-6" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">
              Musik Romantis & Amplop Interaktif
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Sensasi membuka amplop dengan segel lilin digital, semburan confetti ceria, dan lagu pernikahan romantis yang otomatis berputar lembut.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-playfair text-xl font-bold text-slate-900 mb-2">
              Amplop Digital & Rekap RSVP
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Memudahkan tamu memberikan tanda kasih cashless dengan fitur salin nomor rekening 1-klik, serta rekap jumlah pax kehadiran tamu secara real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Feature List Showcase */}
      <section className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] text-rose-700 uppercase block mb-2">
              Lengkap & Praktis
            </span>
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-900">
              Segala Kebutuhan Undangan Digital Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Hitung Mundur Acara',
                desc: 'Countdown timer real-time menuju akad dan resepsi dengan tombol simpan ke Google Calendar.',
                icon: Clock
              },
              {
                title: 'Petunjuk Lokasi Maps',
                desc: 'Navigasi langsung ke Google Maps & rute jalan agar tamu tidak tersesat.',
                icon: CheckCircle2
              },
              {
                title: 'Buku Tamu Interaktif',
                desc: 'Tamu dapat menuliskan doa restu yang langsung tayang pada halaman undangan.',
                icon: MessageSquare
              },
              {
                title: 'Galeri Foto & Kisah Cinta',
                desc: 'Tampilkan perjalanan cinta dan foto pre-wedding dengan lightbox interaktif.',
                icon: Sparkles
              }
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-[#FAF7F5] border border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1.5">{f.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-10 bg-[#FAF7F5] text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rose-600 fill-current" />
            <span className="font-semibold text-slate-800">Vows & Bloom</span>
            <span>— Platform Undangan Digital</span>
          </div>
          <p>© 2026 Vows & Bloom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
