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
  ArrowRight,
  Send
} from 'lucide-react';

export default function DashboardOverviewPage() {
  const [data, setData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [copiedGeneral, setCopiedGeneral] = useState(false);

  useEffect(() => {
    setData(getWeddingData('visal-thida'));

    const handleUpdate = () => {
      setData(getWeddingData('visal-thida'));
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
    <div className="min-h-screen bg-slate-50 flex flex-col font-khmer">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-amber-950 via-amber-900 to-amber-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-2 border-amber-500/40">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-amber-200 text-xs font-bold uppercase tracking-wider mb-2 font-khmer">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>ប្រព័ន្ធគ្រប់គ្រងសំបុត្រមង្គលការ (Khmer Wedding Platform)</span>
            </div>
            <h1 className="font-khmer-koulen text-2xl sm:text-3xl text-amber-200 tracking-wide">
              {data.titleKhmer || data.title} — {data.groom.nicknameKhmer || data.groom.nickname} & {data.bride.nicknameKhmer || data.bride.nickname}
            </h1>
            <p className="text-amber-100/90 text-xs sm:text-sm mt-1 max-w-xl font-khmer">
              គ្រប់គ្រងសំបុត្រអញ្ជើញ តាមដានវត្តមានភ្ញៀវ (RSVP) និងផ្ញើសំបុត្រផ្ទាល់ខ្លួនតាម Telegram & WhatsApp ដោយងាយស្រួល។
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={copyGeneralLink}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all"
            >
              {copiedGeneral ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              <span>{copiedGeneral ? 'បានចម្លង!' : 'ចម្លងតំណភ្ជាប់សំបុត្រ'}</span>
            </button>

            <Link
              href={`/invite/${data.slug}`}
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 text-amber-950 hover:bg-amber-300 text-xs sm:text-sm font-bold transition-all shadow-md"
            >
              <span>មើលសំបុត្រជាក់ស្តែង</span>
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {/* Total Guests */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">ភ្ញៀវក្នុងបញ្ជី</span>
              <Users className="w-4 h-4 text-slate-400" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-khmer-koulen text-slate-900">
                {guests.length}
              </span>
              <span className="text-xs text-slate-500 ml-1">នាក់</span>
            </div>
          </div>

          {/* Attending */}
          <div className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-emerald-700 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">បានបញ្ជាក់៖ ចូលរួម</span>
              <UserCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-khmer-koulen text-emerald-700">
                {attendingGuests.length}
              </span>
              <span className="text-xs text-emerald-600 ml-1">({totalPaxAttending} នាក់)</span>
            </div>
          </div>

          {/* Declined */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-600 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">អវត្តមាន</span>
              <UserX className="w-4 h-4 text-slate-500" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-khmer-koulen text-slate-700">
                {declinedGuests.length}
              </span>
              <span className="text-xs text-slate-500 ml-1">នាក់</span>
            </div>
          </div>

          {/* Pending */}
          <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-800 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">រង់ចាំការបញ្ជាក់</span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-khmer-koulen text-amber-800">
                {pendingGuests.length}
              </span>
              <span className="text-xs text-amber-700 ml-1">នាក់</span>
            </div>
          </div>

          {/* Wishes */}
          <div className="col-span-2 lg:col-span-1 bg-white p-5 rounded-2xl border border-amber-300 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between text-amber-900 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">សៀវភៅពរជ័យ</span>
              <MessageSquare className="w-4 h-4 text-amber-700" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-bold font-khmer-koulen text-amber-950">
                {wishes.length}
              </span>
              <span className="text-xs text-amber-800 ml-1">ពរជ័យ</span>
            </div>
          </div>
        </div>

        {/* Quick Actions & Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link
            href="/dashboard/builder"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="font-khmer-koulen text-xl text-slate-800">
                កែសម្រួលម៉ូតសំបុត្រ (Builder)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                ផ្លាស់ប្តូរម៉ូតគំរូទាំង ៦, កែសម្រួលព័ត៌មានកូនកំលោះ-កូនក្រមុំ, កម្មវិធីបុណ្យ, រូបថត, និងគណនី ABA KHQR។
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-amber-800 group-hover:translate-x-1 transition-transform">
              <span>បើកផ្ទាំងកែសម្រួល</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/dashboard/guests"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Send className="w-6 h-6" />
              </div>
              <h3 className="font-khmer-koulen text-xl text-slate-800">
                បញ្ជីភ្ញៀវ & Telegram / WhatsApp
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                បង្កើតសំបុត្រផ្ទាល់ខ្លួនសម្រាប់ភ្ញៀវនីមួយៗ និងផ្ញើសារអញ្ជើញជាផ្លូវការតាម Telegram និង WhatsApp ភ្លាមៗ។
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-sky-700 group-hover:translate-x-1 transition-transform">
              <span>គ្រប់គ្រងបញ្ជីភ្ញៀវ</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          <Link
            href="/dashboard/wishes"
            className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="font-khmer-koulen text-xl text-slate-800">
                សៀវភៅពរជ័យ & ទិន្នន័យ RSVP
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                អានពាក្យជូនពរ និងដឹងពីចំនួនភ្ញៀវពិតប្រាកដដែលនឹងមកចូលរួម ងាយស្រួលរៀបចំតុទទួលភ្ញៀវ និងអាហារ។
              </p>
            </div>
            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
              <span>មើលពាក្យជូនពរ</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
