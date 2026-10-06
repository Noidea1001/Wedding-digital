'use client';

import React, { useState } from 'react';
import { CreditCard, Copy, Check, QrCode, MapPin } from 'lucide-react';
import { DigitalGift } from '@/types/wedding';
import { ThemeConfig } from '@/lib/themes';
import { SupportedLocale, DICTIONARIES } from '@/lib/i18n';

interface DigitalGiftSectionProps {
  gifts: DigitalGift[];
  themeConfig: ThemeConfig;
  locale?: SupportedLocale;
}

export default function DigitalGiftSection({
  gifts,
  themeConfig,
  locale = 'km'
}: DigitalGiftSectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const isKhmer = locale === 'km';
  const t = DICTIONARIES[locale] || DICTIONARIES.km;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  if (!gifts || gifts.length === 0) return null;

  return (
    <section id="gift" className="py-16 sm:py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
      <div className="text-center mb-14">
        <h2 className={`text-2xl sm:text-3xl text-amber-950 mb-2 ${isKhmer ? 'font-khmer-moul' : 'font-playfair font-bold'}`}>
          {t.weddingGiftTitle}
        </h2>
        <span className={`text-xs uppercase tracking-[0.25em] font-bold text-amber-800/70 block mb-3 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {isKhmer ? 'ការជូនពរ & ចំណងដៃឌីជីថល' : 'Digital Registry & Blessings'}
        </span>
        <p className={`mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
          {t.weddingGiftDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {gifts.map((gift) => {
          const isCopied = copiedId === gift.id;
          const isKHQR = gift.type === 'aba_khqr' || gift.type === 'wing_khqr' || gift.type === 'acleda_khqr';
          const isAddress = gift.type === 'gift_address';
          const isPayPal = gift.type === 'paypal';
          const isWise = gift.type === 'wise';

          const providerName = isKhmer ? (gift.providerNameKhmer || gift.providerName) : gift.providerName;
          const note = isKhmer ? (gift.noteKhmer || gift.note) : gift.note;

          return (
            <div
              key={gift.id}
              className={`p-6 rounded-[32px] ${themeConfig.cardBg} flex flex-col justify-between border-2 ${
                isKHQR ? 'border-amber-300 shadow-lg' : 'border-slate-200/90 shadow-sm'
              } hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Header Ribbon */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isKHQR
                        ? 'gold-foil-bg text-amber-950 shadow-xs'
                        : isPayPal
                        ? 'bg-blue-600 text-white'
                        : isWise
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-white'
                    }`}
                  >
                    {isKHQR ? <QrCode className="w-5 h-5" /> : isAddress ? <MapPin className="w-5 h-5" /> : <CreditCard className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className={`font-bold text-slate-900 text-xs sm:text-sm truncate max-w-[170px] ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                      {providerName}
                    </h3>
                    <span className="text-[10px] text-amber-800 font-semibold">
                      {isKHQR ? (isKhmer ? 'បាគង KHQR' : 'Bakong KHQR') : isPayPal ? 'PayPal Global' : isWise ? 'Wise Wire' : 'Direct Transfer'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Account Detail Box */}
              <div className="my-2 p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-amber-50/40 border border-amber-200/70 text-center flex flex-col items-center">
                {isKHQR && (
                  <div className="w-24 h-24 bg-white p-2 rounded-xl shadow-xs border border-amber-200 flex flex-col items-center justify-center relative mb-2">
                    <div className="absolute top-1 right-1 bg-red-600 text-white text-[7px] font-bold px-1 rounded">
                      KHQR
                    </div>
                    <QrCode className="w-16 h-16 text-slate-800" />
                  </div>
                )}

                <p className={`text-[10px] uppercase font-bold text-slate-400 tracking-wider ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {isAddress ? (isKhmer ? 'អាសយដ្ឋាន' : 'Address') : t.accountNumber}
                </p>
                <p className={`font-mono font-bold text-slate-900 tracking-wide mt-0.5 select-all ${isAddress ? 'text-xs text-left' : 'text-sm'}`}>
                  {gift.accountNumber}
                </p>
                <p className={`text-xs text-amber-950 font-bold mt-1 ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                  {isKhmer ? 'ឈ្មោះម្ចាស់គណនី៖' : 'Account Holder:'} {gift.accountHolder}
                </p>
                {note && (
                  <p className={`text-[10px] text-slate-500 mt-1 italic ${isKhmer ? 'font-khmer' : 'font-sans'}`}>
                    {note}
                  </p>
                )}
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(gift.id, gift.accountNumber)}
                className={`w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isCopied
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white hover:bg-amber-50 text-slate-800 border border-amber-300 shadow-xs'
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span className={isKhmer ? 'font-khmer' : 'font-sans'}>{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-amber-700" />
                    <span className={isKhmer ? 'font-khmer' : 'font-sans'}>
                      {isAddress ? t.copyAddress : t.copyNumber}
                    </span>
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
