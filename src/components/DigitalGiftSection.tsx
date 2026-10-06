'use client';

import React, { useState } from 'react';
import { Gift, CreditCard, Copy, Check, MapPin } from 'lucide-react';
import { DigitalGift } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';

interface DigitalGiftSectionProps {
  gifts: DigitalGift[];
  themeConfig: ThemeConfig;
}

export default function DigitalGiftSection({ gifts, themeConfig }: DigitalGiftSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  if (!gifts || gifts.length === 0) return null;

  return (
    <section id="gift" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-[0.25em] text-rose-700 uppercase block mb-2">
          Tanda Kasih
        </span>
        <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-slate-800">
          Wedding Gift & Angpao Digital
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda berkenan memberikan tanda kasih, Anda dapat menggunakan amplop digital di bawah ini:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {gifts.map((gift) => {
          const isAddress = gift.type === 'gift_address';
          const isCopied = copiedId === gift.id;

          return (
            <div
              key={gift.id}
              className={`p-6 sm:p-7 rounded-3xl ${themeConfig.cardBg} flex flex-col justify-between border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center border border-rose-200 shrink-0">
                    {isAddress ? <MapPin className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {gift.providerName}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {gift.note || (isAddress ? 'Alamat Pengiriman' : 'Transfer Rekening')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Detail / Address */}
              <div className="my-3 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/60">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                  {isAddress ? 'Alamat Tujuan' : 'Nomor Rekening'}
                </p>
                <p className={`font-mono font-bold text-slate-800 break-all select-all ${isAddress ? 'text-xs sm:text-sm leading-relaxed' : 'text-lg sm:text-xl'}`}>
                  {gift.accountNumber}
                </p>
                <p className="text-xs text-slate-600 mt-2 font-medium">
                  a.n. <span className="font-bold text-slate-800">{gift.accountHolder}</span>
                </p>
              </div>

              {/* Copy Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleCopy(gift.id, gift.accountNumber)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-rose-700 hover:bg-rose-800 text-white shadow-sm'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Berhasil Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{isAddress ? 'Salin Alamat Lengkap' : 'Salin Nomor Rekening'}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
