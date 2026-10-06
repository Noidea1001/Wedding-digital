'use client';

import React, { useState, useEffect } from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';
import { getWeddingData, addGuest, deleteGuest, generateWhatsAppLink, generateTelegramLink } from '@/lib/storage';
import { WeddingInvitationData, GuestItem } from '@/types/wedding';
import { DEFAULT_WEDDING } from '@/lib/mockData';
import {
  Users,
  UserPlus,
  Search,
  Copy,
  Check,
  Trash2,
  ExternalLink,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  XCircle,
  Mail
} from 'lucide-react';

export default function GuestsPage() {
  const [data, setData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newTelegram, setNewTelegram] = useState('');
  const [newGroup, setNewGroup] = useState<'VIP' | 'Family' | 'Colleague' | 'Friends'>('Friends');

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    setData(getWeddingData('visal-thida'));

    const handleUpdate = () => {
      setData(getWeddingData('visal-thida'));
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
      telegram: newTelegram.trim(),
      group: newGroup,
      slug: slug || `guest-${Date.now()}`,
      status: 'pending',
      pax: 1
    });

    setNewName('');
    setNewPhone('');
    setNewTelegram('');
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('តើលោកអ្នកពិតជាចង់លុបឈ្មោះភ្ញៀវនេះចេញមែនទេ?')) {
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

  const coupleKhmer = `${data.groom.fullNameKhmer || data.groom.fullName} & ${data.bride.fullNameKhmer || data.bride.fullName}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-khmer">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="font-khmer-koulen text-2xl sm:text-3xl text-slate-800 tracking-wide">
              បញ្ជីឈ្មោះភ្ញៀវ & ផ្ញើ Telegram / WhatsApp
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              កំណត់ឈ្មោះភ្ញៀវលើសំបុត្រអញ្ជើញ និងផ្ញើសារអញ្ជើញជាផ្លូវការតាម Telegram & WhatsApp ដោយចុចតែ ១ ដង។
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-900/15 transition-all self-start sm:self-auto"
          >
            <UserPlus className="w-4 h-4" />
            <span>បន្ថែមឈ្មោះភ្ញៀវថ្មី</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs mb-6 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <div className="sm:col-span-6 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ស្វែងរកឈ្មោះភ្ញៀវ ឬលេខទូរស័ព្ទ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-amber-500 font-khmer"
            />
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-amber-500 bg-white font-khmer"
            >
              <option value="All">គ្រប់ក្រុមភ្ញៀវទាំងអស់</option>
              <option value="VIP">ភ្ញៀវកិត្តិយស VIP</option>
              <option value="Family">សាច់ញាតិ/គ្រួសារ (Family)</option>
              <option value="Colleague">មិត្តរួមការងារ (Colleague)</option>
              <option value="Friends">មិត្តភក្តិ (Friends)</option>
            </select>
          </div>

          <div className="sm:col-span-3">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-amber-500 bg-white font-khmer"
            >
              <option value="All">គ្រប់ស្ថានភាពវត្តមាន</option>
              <option value="attending">បានបញ្ជាក់៖ ចូលរួម</option>
              <option value="declined">បានបញ្ជាក់៖ អវត្តមាន</option>
              <option value="pending">មិនទាន់បញ្ជាក់</option>
            </select>
          </div>
        </div>

        {/* Guest Table Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3.5 px-4 sm:px-6">ឈ្មោះភ្ញៀវកិត្តិយស</th>
                  <th className="py-3.5 px-4">ក្រុម</th>
                  <th className="py-3.5 px-4">វត្តមាន (RSVP)</th>
                  <th className="py-3.5 px-4">ទំនាក់ទំនង</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">ផ្ញើសំបុត្រ (Telegram / WA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {filteredGuests.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-400 text-sm">
                      មិនមានឈ្មោះភ្ញៀវដែលត្រូវនឹងការស្វែងរកឡើយ។
                    </td>
                  </tr>
                ) : (
                  filteredGuests.map((guest) => {
                    const personalizedUrl = getPersonalizedUrl(guest);
                    const tgLink = generateTelegramLink(guest.name, coupleKhmer, personalizedUrl);
                    const waLink = generateWhatsAppLink(guest.phone, guest.name, coupleKhmer, personalizedUrl);
                    const isCopied = copiedId === guest.id;

                    return (
                      <tr key={guest.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 sm:px-6">
                          <div className="font-bold text-slate-900 font-khmer">{guest.name}</div>
                          {guest.message && (
                            <p className="text-[11px] text-slate-400 truncate max-w-xs mt-0.5">
                              "{guest.message}"
                            </p>
                          )}
                        </td>

                        <td className="py-4 px-4">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200">
                            {guest.group}
                          </span>
                        </td>

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
                                ? `ចូលរួម (${guest.pax || 1} នាក់)`
                                : guest.status === 'declined'
                                ? 'អវត្តមាន'
                                : 'រង់ចាំ'}
                            </span>
                          </span>
                        </td>

                        <td className="py-4 px-4 font-mono text-xs text-slate-600">
                          {guest.phone || <span className="text-slate-400 italic">គ្មានលេខ</span>}
                        </td>

                        <td className="py-4 px-4 sm:px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {/* Copy Link Button */}
                            <button
                              onClick={() => handleCopyLink(guest)}
                              title="ចម្លងតំណភ្ជាប់ផ្ទាល់ខ្លួន"
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
                              title="មើលសំបុត្រភ្ញៀវនេះ"
                              className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>

                            {/* Telegram Button */}
                            <a
                              href={tgLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs shadow-xs transition-all"
                              title="ផ្ញើតាម Telegram"
                            >
                              <Send className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Telegram</span>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                              href={waLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all"
                              title="Send via WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">WhatsApp</span>
                            </a>

                            {/* Email Button */}
                            <a
                              href={`mailto:${guest.email || ''}?subject=${encodeURIComponent(`Wedding Invitation: ${data.title}`)}&body=${encodeURIComponent(`Dear ${guest.name},\n\nYou are cordially invited to celebrate our wedding!\n\nPlease open your personalized digital invitation here:\n${personalizedUrl}\n\nWarm regards,\n${data.title}`)}`}
                              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs shadow-xs transition-all"
                              title="Send via Email"
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </a>

                            {/* Delete */}
                            <button
                              onClick={() => handleDelete(guest.id)}
                              title="លុប"
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
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 font-khmer">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-fadeIn">
            <h3 className="font-khmer-koulen text-xl text-slate-900 mb-1">
              បន្ថែមឈ្មោះភ្ញៀវកិត្តិយស
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              បញ្ចូលឈ្មោះ និងលេខទូរស័ព្ទដើម្បីបង្កើតតំណភ្ជាប់សំបុត្រផ្ទាល់ខ្លួន។
            </p>

            <form onSubmit={handleAddGuest} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះភ្ញៀវ *</label>
                <input
                  type="text"
                  required
                  placeholder="ឧទាហរណ៍៖ ឯកឧត្តម លី ចាន់ថន & លោកជំទាវ"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-amber-500 font-khmer"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">លេខទូរស័ព្ទ / WhatsApp</label>
                <input
                  type="text"
                  placeholder="ឧទាហរណ៍៖ 012 999 888"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">ក្រុមភ្ញៀវ</label>
                <select
                  value={newGroup}
                  onChange={(e) => setNewGroup(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm outline-none focus:border-amber-500 bg-white font-khmer"
                >
                  <option value="VIP">ភ្ញៀវកិត្តិយស VIP</option>
                  <option value="Family">សាច់ញាតិ/គ្រួសារ (Family)</option>
                  <option value="Colleague">មិត្តរួមការងារ (Colleague)</option>
                  <option value="Friends">មិត្តភក្តិ (Friends)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all"
                >
                  បោះបង់
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white shadow-md shadow-amber-900/15 transition-all"
                >
                  រក្សាទុក
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
