'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import WeddingInvitationView from '@/components/WeddingInvitationView';
import { getWeddingData } from '@/lib/storage';
import { WeddingInvitationData } from '@/types/wedding';
import { DEFAULT_WEDDING } from '@/lib/mockData';
import Link from 'next/link';
import { Settings, ArrowLeft } from 'lucide-react';

export default function InvitePage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const slug = (params?.slug as string) || 'sarah-david';
  const guestName = searchParams.get('to') || 'Tamu Undangan';
  const guestGroup = searchParams.get('group') || undefined;

  const [weddingData, setWeddingData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const data = getWeddingData(slug);
    setWeddingData(data);

    const handleUpdate = () => {
      setWeddingData(getWeddingData(slug));
    };

    window.addEventListener('wedding-data-updated', handleUpdate);
    return () => window.removeEventListener('wedding-data-updated', handleUpdate);
  }, [slug]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#FAF5F5] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-rose-300 border-t-rose-700 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Small floating quick link back to dashboard/builder for the host */}
      <div className="fixed top-4 left-4 z-40 flex items-center gap-2">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white text-xs font-medium backdrop-blur-md shadow-lg transition-all"
        >
          <Settings className="w-3.5 h-3.5" />
          <span>Dashboard Host</span>
        </Link>
      </div>

      <WeddingInvitationView
        data={weddingData}
        guestName={guestName}
        guestGroup={guestGroup}
      />
    </div>
  );
}
