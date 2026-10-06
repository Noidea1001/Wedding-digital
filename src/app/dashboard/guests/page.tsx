'use client';

import React, { useState, useEffect } from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';
import { getWeddingData, addGuest, deleteGuest, updateGuest, generateWhatsAppLink } from '@/lib/storage';
import { WeddingInvitationData, GuestItem } from '@/types/wedding';
import { DEFAULT_WEDDING } from '@/lib/mockData';
import {
  Users,
  UserPlus,
  Search,
  Share2,
  Copy,
  Check,
  Trash2,
  ExternalLink,
  MessageCircle,
  Filter,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';

export default function GuestsPage() {
  const [data, setData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New guest modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newGroup, setNewGroup] = useState<'VIP' | 'Family' | 'Colleague' | 'Friends'>('Friends');

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    setData(getWeddingData('sarah-david'));

    const handleUpdate = () => {
      setData(getWeddingData('sarah-david'));
    };

    window.addEventListener('wedding-data-updated', handleUpdate);
    return () => window.removeEventListener('wedding-data-updated', handleUpdate);
  }, []);

  const handleAddGuest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const slug = newName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    addGuest(data.slug, {
      name: newName.trim(),
      phone: newPhone.trim(),
      group: newGroup,
      slug: slug || `guest-${Date.now()}`,
      status: 'pending',
      pax: 1
    });

    setNewName('');
    setNewPhone('');
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Hapus tamu ini dari daftar undangan?')) {
      deleteGuest(data.slug, id);
    }
  };

  const getPersonalizedUrl = (guest: GuestItem) => {
    const encodedName = encodeURIComponent(guest.name);
    const groupParam = guest.group ? `&group=${encodeURIComponent(guest.group)}` : '';
    return `${origin}/invite/${data.slug}?to=${encodedName}${groupParam}`;
  };

  const handleCopyLink = (guest: GuestItem) => {
    const url = getPersonalizedUrl(guest);
    navigator.clipboard.writeText(url);
    setCopiedId(guest.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const guests = data.guests || [];

  const filteredGuests = guests.filter((g) => {
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase()) || (g.phone && g.phone.includes(search));
    const matchesGroup = selectedGroup === 'All' || g.group === selectedGroup;
    const matchesStatus = selectedStatus === 'All' || g.status === selectedStatus;
    return matchesSearch && matchesGroup && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-playfair text-2xl sm:text-3xl font-bold text-slate-800">
              Daftar Tamu & Sebar WhatsApp
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Personalisasi nama tamu pada undangan dan kirim tautan via WhatsApp secara instan.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-rose-900/15 transition-all self-start sm:self-auto"
          >
            <UserPlus className="w-4 h-4" />
            <span>Tambah Tamu Baru</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-6 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          {/* Search Input */}
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama atau nomor WhatsApp..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400"
            />
          </div>

          {/* Group Filter */}
          <div className="sm:col-span-3">
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400 bg-white"
            >
              <option value="All">Semua Kategori</option>
              <option value="VIP">VIP</option>
              <option value="Family">Keluarga (Family)</option>
              <option value="Colleague">Kolega / Rekan Kerja</option>
              <option value="Friends">Teman (Friends)</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="sm:col-span-3">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400 bg-white"
            >
              <option value="All">Semua Status RSVP</option>
              <option value="attending">Hadir</option>
              <option value="declined">Berhalangan</option>
              <option value="pending">Belum Konfirmasi</option>
            </select>
          </div>
        </div>

        {/* Guest Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/60 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">Nama Tamu Undangan</th>
                  <th className="py-3.5 px-4">Kategori</th>
                  <th className="py-3.5 px-4">Status RSVP</th>
                  <th className="py-3.5 px-4">Nomor WhatsApp</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Aksi & Kirim</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredGuests.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-400 text-sm">
                      Tidak ada data tamu yang cocok dengan pencarian Anda.
                    </td>
                  </tr>
                ) : (
                  filteredGuests.map((guest) => {
                    const personalizedUrl = getPersonalizedUrl(guest);
                    const waLink = generateWhatsAppLink(
                      guest.phone,
                      guest.name,
                      `${data.groom.nickname} & ${data.bride.nickname}`,
                      personalizedUrl
                    );
                    const isCopied = copiedId === guest.id;

                    return (
                      <tr key={guest.id} className="hover:bg-slate-50/70 transition-colors">
                        {/* Name */}
                        <td className="py-4 px-4 sm:px-6">
                          <div className="font-semibold text-slate-900">{guest.name}</div>
                          {guest.message && (
                            <p className="text-[11px] text-slate-400 truncate max-w-xs mt-0.5">
                              "{guest.message}"
                            </p>
                          )}
                        </td>

                        {/* Category */}
                        <td className="py-4 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                            {guest.group}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="py-4 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                              guest.status === 'attending'
                                ? 'bg-emerald-100 text-emerald-800'
                                : guest.status === 'declined'
                                ? 'bg-slate-200 text-slate-700'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {guest.status === 'attending' && <CheckCircle2 className="w-3 h-3" />}
                            {guest.status === 'declined' && <XCircle className="w-3 h-3" />}
                            {guest.status === 'pending' && <Clock className="w-3 h-3" />}
                            <span>
                              {guest.status === 'attending'
                                ? `Hadir (${guest.pax || 1} Pax)`
                                : guest.status === 'declined'
                                ? 'Berhalangan'
                                : 'Pending'}
                            </span>
                          </span>
                        </td>

                        {/* Phone */}
                        <td className="py-4 px-4 font-mono text-xs text-slate-600">
                          {guest.phone || <span className="text-slate-400 italic">Tidak ada no. HP</span>}
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-4 sm:px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Copy Link Button */}
                            <button
                              onClick={() => handleCopyLink(guest)}
                              title="Salin Tautan Personal"
                              className={`p-2 rounded-xl border transition-all ${
                                isCopied
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                              }`}
                            >
                              {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>

                            {/* Open Personal Link */}
                            <a
                              href={personalizedUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Buka Undangan Tamu Ini"
                              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>

                            {/* WhatsApp Button */}
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-xs transition-all"
                            >
                              <MessageCircle className="w-4 h-4" />
                              <span className="hidden sm:inline">Kirim WA</span>
                            </a>

                            {/* Delete */}
                            <button
                              onClick={() => handleDelete(guest.id)}
                              title="Hapus"
                              className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Add Guest Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fadeIn">
            <h3 className="font-playfair text-xl font-bold text-slate-800 mb-1">
              Tambah Tamu Undangan
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Masukkan nama tamu dan nomor kontak untuk membuat tautan personal.
            </p>

            <form onSubmit={handleAddGuest} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Tamu *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso & Partner"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor WhatsApp (Opsional)</label>
                <input
                  type="text"
                  placeholder="Contoh: 081234567890"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kategori Tamu</label>
                <select
                  value={newGroup}
                  onChange={(e) => setNewGroup(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-rose-400 bg-white"
                >
                  <option value="VIP">VIP</option>
                  <option value="Family">Keluarga (Family)</option>
                  <option value="Colleague">Kolega / Rekan Kerja</option>
                  <option value="Friends">Teman (Friends)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-all"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-rose-700 hover:bg-rose-800 text-white shadow-md shadow-rose-900/15 transition-all"
                >
                  Simpan Tamu
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
