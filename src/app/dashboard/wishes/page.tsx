'use client';

import React, { useState, useEffect } from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';
import { getWeddingData } from '@/lib/storage';
import { WeddingInvitationData, WishMessage } from '@/types/wedding';
import { DEFAULT_WEDDING } from '@/lib/mockData';
import {
  MessageSquare,
  Search,
  Download,
  CheckCircle2,
  XCircle,
  Users,
  Heart
} from 'lucide-react';

export default function WishesDashboardPage() {
  const [data, setData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  useEffect(() => {
    setData(getWeddingData('sarah-david'));

    const handleUpdate = () => {
      setData(getWeddingData('sarah-david'));
    };

    window.addEventListener('wedding-data-updated', handleUpdate);
    return () => window.removeEventListener('wedding-data-updated', handleUpdate);
  }, []);

  const wishes = data.wishes || [];

  const filteredWishes = wishes.filter((w) => {
    const matchesSearch = w.guestName.toLowerCase().includes(search.toLowerCase()) || w.message.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'All' || w.attendance === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportCSV = () => {
    const headers = ['Nama Tamu', 'Konfirmasi Kehadiran', 'Jumlah Pax', 'Pesan Doa Restu', 'Waktu Kirim'];
    const rows = wishes.map(w => [
      `"${w.guestName}"`,
      `"${w.attendance === 'attending' ? 'Hadir' : 'Berhalangan'}"`,
      w.pax || 1,
      `"${w.message.replace(/"/g, '""')}"`,
      `"${w.createdAt}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `buku-tamu-${data.slug}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-800">
              Buku Tamu & RSVP Masuk
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Pantau seluruh ucapan selamat, doa restu, dan konfirmasi kehadiran tamu secara langsung.
            </p>
          </div>

          <button
            onClick={exportCSV}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold shadow-xs transition-all self-start sm:self-auto"
          >
            <Download className="w-4 h-4" />
            <span>Ekspor ke CSV</span>
          </button>
        </div>

        {/* Filter bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-6 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama tamu atau kata kunci ucapan..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400 bg-white"
            >
              <option value="All">Semua Kehadiran</option>
              <option value="attending">Hanya yang Hadir</option>
              <option value="declined">Hanya yang Berhalangan</option>
            </select>
          </div>
        </div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredWishes.length === 0 ? (
            <div className="col-span-full py-16 text-center text-slate-400 bg-white rounded-3xl border border-slate-200">
              Belum ada ucapan doa yang cocok.
            </div>
          ) : (
            filteredWishes.map((w) => (
              <div
                key={w.id}
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow text-left"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-800 font-bold text-xs flex items-center justify-center">
                        {w.guestName.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-xs sm:text-sm">{w.guestName}</h4>
                        <span className="text-[10px] text-slate-400">{w.createdAt}</span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        w.attendance === 'attending'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      {w.attendance === 'attending' ? `Hadir (${w.pax || 1} Pax)` : 'Berhalangan'}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {w.message}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
