'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardNavbar from '@/components/DashboardNavbar';
import { getWeddingData } from '@/lib/storage';
import { WeddingInvitationData } from '@/types/wedding';
import { DEFAULT_WEDDING } from '@/lib/mockData';
import { 
  Users, 
  UserCheck, 
  UserX, 
  Clock, 
  MessageSquare, 
  Sliders, 
  Share2, 
  Copy, 
  Check, 
  ExternalLink,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function DashboardOverviewPage() {
  const [data, setData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [copiedGeneral, setCopiedGeneral] = useState(false);

  useEffect(() => {
    setData(getWeddingData('sarah-david'));

    const handleUpdate = () => {
      setData(getWeddingData('sarah-david'));
    };

    window.addEventListener('wedding-data-updated', handleUpdate);
    return () => window.removeEventListener('wedding-data-updated', handleUpdate);
  }, []);

  const guests = data.guests || [];
  const wishes = data.wishes || [];

  const attendingGuests = guests.filter(g => g.status === 'attending');
  const declinedGuests = guests.filter(g => g.status === 'declined');
  const pendingGuests = guests.filter(g => g.status === 'pending');
  const totalPaxAttending = attendingGuests.reduce((acc, g) => acc + (g.pax || 1), 0);

  const generalUrl = typeof window !== 'undefined' ? `${window.location.origin}/invite/${data.slug}` : `/invite/${data.slug}`;

  const copyGeneralLink = () => {
    navigator.clipboard.writeText(generalUrl);
    setCopiedGeneral(true);
    setTimeout(() => setCopiedGeneral(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-rose-900 via-rose-800 to-amber-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-rose-100 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Platform Undangan Aktif</span>
            </div>
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold">
              {data.title}
            </h1>
            <p className="text-rose-100 text-xs sm:text-sm mt-1 max-w-xl">
              Kelola undangan, pantau konfirmasi kehadiran tamu secara langsung, dan kirimkan tautan personal via WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={copyGeneralLink}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-medium transition-all"
            >
              {copiedGeneral ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copiedGeneral ? 'Tautan Tersalin' : 'Salin Tautan Undangan'}</span>
            </button>

            <Link
              href={`/invite/${data.slug}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-rose-900 hover:bg-rose-50 text-xs sm:text-sm font-semibold transition-all shadow-md"
            >
              <span>Buka Undangan</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {/* Total Guests */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Tamu</span>
              <Users className="w-4 h-4 text-slate-400" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-cormorant text-slate-900">
                {guests.length}
              </span>
              <span className="text-xs text-slate-500 ml-1">Nama</span>
            </div>
          </div>

          {/* Attending */}
          <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-emerald-700 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Hadir</span>
              <UserCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-cormorant text-emerald-700">
                {attendingGuests.length}
              </span>
              <span className="text-xs text-emerald-600 ml-1">({totalPaxAttending} Pax)</span>
            </div>
          </div>

          {/* Declined */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-600 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Berhalangan</span>
              <UserX className="w-4 h-4 text-slate-500" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-cormorant text-slate-700">
                {declinedGuests.length}
              </span>
              <span className="text-xs text-slate-500 ml-1">Tamu</span>
            </div>
          </div>

          {/* Pending */}
          <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-700 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Menunggu</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-cormorant text-amber-700">
                {pendingGuests.length}
              </span>
              <span className="text-xs text-amber-600 ml-1">Tamu</span>
            </div>
          </div>

          {/* Wishes */}
          <div className="col-span-2 lg:col-span-1 bg-white p-5 rounded-2xl border border-rose-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between text-rose-700 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Buku Doa</span>
              <MessageSquare className="w-4 h-4 text-rose-600" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-cormorant text-rose-800">
                {wishes.length}
              </span>
              <span className="text-xs text-rose-700 ml-1">Ucapan</span>
            </div>
          </div>
        </div>

        {/* Quick Actions & Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/dashboard/builder"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-slate-800">
                Editor Undangan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Ubah profil mempelai, waktu & lokasi acara, cerita cinta, galeri foto, amplop digital, dan pilihan tema warna.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-rose-700 group-hover:translate-x-1 transition-transform">
              <span>Buka Editor</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/dashboard/guests"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-slate-800">
                Daftar Tamu & WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Buat tautan personal untuk setiap nama tamu dan kirim undangan langsung via WhatsApp dengan 1 kali klik.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
              <span>Kelola Tamu</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/dashboard/wishes"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-playfair text-xl font-bold text-slate-800">
                Buku Tamu & RSVP
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                Pantau setiap ucapan selamat dan konfirmasi jumlah pax secara real-time, lengkap dengan fitur ekspor data.
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
              <span>Lihat Semua Doa</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Recent Guests & Wishes Snapshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Guests */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-playfair text-lg font-bold text-slate-800">
                Daftar Tamu Terbaru
              </h3>
              <Link href="/dashboard/guests" className="text-xs font-semibold text-rose-700 hover:underline">
                Lihat Semua
              </Link>
            </div>
            <div className="divide-y divide-slate-100">
              {guests.slice(0, 4).map((g) => (
                <div key={g.id} className="py-3 flex items-center justify-between">
                  <div>
                    <h5 className="font-semibold text-slate-800 text-sm">{g.name}</h5>
                    <span className="text-[11px] text-slate-400">{g.group} • {g.phone || 'Tanpa no. HP'}</span>
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      g.status === 'attending'
                        ? 'bg-emerald-100 text-emerald-800'
                        : g.status === 'declined'
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {g.status === 'attending' ? 'Hadir' : g.status === 'declined' ? 'Berhalangan' : 'Pending'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Wishes */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-playfair text-lg font-bold text-slate-800">
                Ucapan Doa Masuk
              </h3>
              <Link href="/dashboard/wishes" className="text-xs font-semibold text-rose-700 hover:underline">
                Lihat Semua
              </Link>
            </div>
            <div className="space-y-3">
              {wishes.slice(0, 3).map((w) => (
                <div key={w.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-left">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-slate-800">{w.guestName}</span>
                    <span className="text-[10px] text-slate-400">{w.createdAt}</span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">{w.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
