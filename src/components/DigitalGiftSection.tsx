'use client';

import React, { useState } from 'react';
import { Gift, CreditCard, Copy, Check, QrCode, Sparkles } from 'lucide-react';
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
    <section id="gift" className="py-16 sm:py-24 px-4 max-w-4xl mx-auto scroll-mt-12 font-khmer">
      <div className="text-center mb-14">
        <h2 className="font-khmer-moul text-xl sm:text-2xl text-amber-900 mb-2">
          ចំណងដៃអាពាហ៍ពិពាហ៍ (Digital Gift)
        </h2>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-slate-400 block mb-3">
          KHQR & Cashless Blessing
        </span>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          វត្តមាន និងពរជ័យដ៏ថ្លៃថ្លារបស់លោកអ្នក គឺជាកាដូដ៏មានតម្លៃបំផុតសម្រាប់យើងខ្ញុំ។ ប្រសិនបើលោកអ្នកមានបំណងចងដៃតាមប្រព័ន្ធឌីជីថល លោកអ្នកអាចស្កេន KHQR ខាងក្រោមបាន៖
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {gifts.map((gift) => {
          const isCopied = copiedId === gift.id;
          const isABA = gift.providerName.toLowerCase().includes('aba');

          return (
            <div
              key={gift.id}
              className={`p-6 rounded-3xl ${themeConfig.cardBg} flex flex-col justify-between border-2 ${
                isABA ? 'border-sky-400 shadow-md bg-white' : 'border-amber-200/90 shadow-sm'
              } hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* KHQR Header Ribbon */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                    isABA ? 'bg-sky-600 text-white' : 'bg-amber-100 text-amber-900'
                  }`}>
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {gift.providerName}
                    </h3>
                    <span className="text-[10px] text-red-600 font-bold uppercase tracking-wider">
                      ● KHQR Bakong
                    </span>
                  </div>
                </div>
              </div>

              {/* KHQR visual badge */}
              <div className="my-2 p-4 rounded-2xl bg-gradient-to-b from-slate-50 to-amber-50/40 border border-slate-200/70 text-center flex flex-col items-center">
                {/* Mock QR graphic */}
                <div className="w-28 h-28 bg-white p-2 rounded-xl shadow-xs border border-slate-200 flex flex-col items-center justify-center relative mb-2">
                  <div className="absolute top-1 right-1 bg-red-600 text-white text-[8px] font-bold px-1 rounded">
                    KHQR
                  </div>
                  <QrCode className="w-20 h-20 text-slate-800" />
                </div>

                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  លេខគណនី (Account No.)
                </p>
                <p className="font-mono font-bold text-slate-900 text-sm tracking-wide mt-0.5 select-all">
                  {gift.accountNumber}
                </p>
                <p className="text-xs text-amber-950 font-bold mt-1">
                  {gift.accountHolder}
                </p>
              </div>

              {/* Copy Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => handleCopy(gift.id, gift.accountNumber)}
                  className={`w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    isCopied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-700 hover:bg-amber-800 text-white shadow-xs'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>បានចម្លងរួចរាល់! (Copied)</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>ចម្លងលេខគណនី (Copy Number)</span>
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
