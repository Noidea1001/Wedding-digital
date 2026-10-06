'use client';

import React, { useState, useEffect } from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';
import WeddingInvitationView from '@/components/WeddingInvitationView';
import { getWeddingData, saveWeddingData } from '@/lib/storage';
import { WeddingInvitationData, WeddingTheme } from '@/types/wedding';
import { DEFAULT_WEDDING } from '@/lib/mockData';
import { THEME_CONFIGS } from '@/lib/themes';
import {
  Save,
  Check,
  RefreshCw,
  ExternalLink,
  Smartphone,
  Monitor,
  Heart,
  Calendar,
  BookOpen,
  Image as ImageIcon,
  Gift,
  Palette,
  Plus,
  Trash2
} from 'lucide-react';

export default function BuilderPage() {
  const [data, setData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [activeTab, setActiveTab] = useState<'couple' | 'events' | 'story' | 'gallery' | 'gifts' | 'theme'>('couple');
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [saveToast, setSaveToast] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const existing = getWeddingData('sarah-david');
    setData(existing);
  }, []);

  const handleSave = () => {
    saveWeddingData(data);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleReset = () => {
    if (confirm('Apakah Anda yakin ingin mengembalikan data ke template awal?')) {
      setData(DEFAULT_WEDDING);
      saveWeddingData(DEFAULT_WEDDING);
    }
  };

  const updateGroom = (field: string, val: string) => {
    setData(prev => ({
      ...prev,
      groom: { ...prev.groom, [field]: val }
    }));
  };

  const updateBride = (field: string, val: string) => {
    setData(prev => ({
      ...prev,
      bride: { ...prev.bride, [field]: val }
    }));
  };

  const updateEvent = (index: number, field: string, val: string) => {
    setData(prev => {
      const nextEvents = [...prev.events];
      nextEvents[index] = { ...nextEvents[index], [field]: val };
      return { ...prev, events: nextEvents };
    });
  };

  const updateTheme = (theme: WeddingTheme) => {
    setData(prev => ({ ...prev, theme }));
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <DashboardNavbar />

      {/* Builder Subheader */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-16 z-20 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="font-playfair font-bold text-slate-800 text-lg">
            Editor Undangan
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 font-medium">
            Live Preview
          </span>
        </div>

        {/* Device Switcher & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setPreviewDevice('mobile')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                previewDevice === 'mobile' ? 'bg-white shadow-xs text-rose-800' : 'text-slate-600'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
            <button
              onClick={() => setPreviewDevice('desktop')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                previewDevice === 'desktop' ? 'bg-white shadow-xs text-rose-800' : 'text-slate-600'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
          </div>

          <button
            onClick={handleReset}
            title="Reset ke default"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-700 hover:bg-rose-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-rose-900/15 transition-all"
          >
            {saveToast ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
            <span>{saveToast ? 'Tersimpan!' : 'Simpan Perubahan'}</span>
          </button>
        </div>
      </div>

      {/* Main Dual-Pane Content */}
      <div className="flex-1 max-w-[1600px] w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT PANE: Editor Tabs & Forms */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 overflow-hidden">
          {/* Editor Tabs */}
          <div className="flex items-center gap-1 border-b border-slate-100 pb-3 overflow-x-auto scrollbar-none mb-6">
            {[
              { id: 'couple', label: 'Mempelai', icon: Heart },
              { id: 'events', label: 'Acara', icon: Calendar },
              { id: 'story', label: 'Cerita Cinta', icon: BookOpen },
              { id: 'gallery', label: 'Galeri', icon: ImageIcon },
              { id: 'gifts', label: 'Amplop', icon: Gift },
              { id: 'theme', label: 'Tema & Musik', icon: Palette },
            ].map((tab) => {
              const Icon = tab.icon;
              const isCurrent = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    isCurrent
                      ? 'bg-rose-50 text-rose-800 border border-rose-200'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Form Content by Tab */}
          <div className="space-y-6 max-h-[720px] overflow-y-auto pr-2">
            {/* 1. COUPLE TAB */}
            {activeTab === 'couple' && (
              <div className="space-y-6 animate-fadeIn">
                <h4 className="font-playfair text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">
                  Data Mempelai Pria (Groom)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Lengkap & Gelar</label>
                    <input
                      type="text"
                      value={data.groom.fullName}
                      onChange={(e) => updateGroom('fullName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Panggilan</label>
                    <input
                      type="text"
                      value={data.groom.nickname}
                      onChange={(e) => updateGroom('nickname', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Ayah</label>
                    <input
                      type="text"
                      value={data.groom.fatherName}
                      onChange={(e) => updateGroom('fatherName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Ibu</label>
                    <input
                      type="text"
                      value={data.groom.motherName}
                      onChange={(e) => updateGroom('motherName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-1">URL Foto Profil Pria</label>
                    <input
                      type="text"
                      value={data.groom.photoUrl}
                      onChange={(e) => updateGroom('photoUrl', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Instagram (@username)</label>
                    <input
                      type="text"
                      value={data.groom.instagram || ''}
                      onChange={(e) => updateGroom('instagram', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                </div>

                <h4 className="font-playfair text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 pt-4">
                  Data Mempelai Wanita (Bride)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Lengkap & Gelar</label>
                    <input
                      type="text"
                      value={data.bride.fullName}
                      onChange={(e) => updateBride('fullName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Panggilan</label>
                    <input
                      type="text"
                      value={data.bride.nickname}
                      onChange={(e) => updateBride('nickname', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Ayah</label>
                    <input
                      type="text"
                      value={data.bride.fatherName}
                      onChange={(e) => updateBride('fatherName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Nama Ibu</label>
                    <input
                      type="text"
                      value={data.bride.motherName}
                      onChange={(e) => updateBride('motherName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-slate-600 mb-1">URL Foto Profil Wanita</label>
                    <input
                      type="text"
                      value={data.bride.photoUrl}
                      onChange={(e) => updateBride('photoUrl', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Instagram (@username)</label>
                    <input
                      type="text"
                      value={data.bride.instagram || ''}
                      onChange={(e) => updateBride('instagram', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-rose-400 outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. EVENTS TAB */}
            {activeTab === 'events' && (
              <div className="space-y-6 animate-fadeIn">
                {data.events.map((event, index) => (
                  <div key={event.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <h5 className="font-bold text-slate-800 text-sm flex items-center justify-between">
                      <span>Acara #{index + 1}: {event.title}</span>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Judul Acara</label>
                        <input
                          type="text"
                          value={event.title}
                          onChange={(e) => updateEvent(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Tanggal (YYYY-MM-DD)</label>
                        <input
                          type="date"
                          value={event.date}
                          onChange={(e) => updateEvent(index, 'date', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Waktu Mulai</label>
                        <input
                          type="text"
                          value={event.startTime}
                          onChange={(e) => updateEvent(index, 'startTime', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Waktu Selesai</label>
                        <input
                          type="text"
                          value={event.endTime}
                          onChange={(e) => updateEvent(index, 'endTime', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Nama Tempat / Venue</label>
                        <input
                          type="text"
                          value={event.venueName}
                          onChange={(e) => updateEvent(index, 'venueName', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Alamat Lengkap</label>
                        <input
                          type="text"
                          value={event.address}
                          onChange={(e) => updateEvent(index, 'address', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Link Google Maps</label>
                        <input
                          type="text"
                          value={event.mapsUrl}
                          onChange={(e) => updateEvent(index, 'mapsUrl', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. LOVE STORY TAB */}
            {activeTab === 'story' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-playfair text-lg font-bold text-slate-800">
                    Milestone Perjalanan Cinta
                  </h4>
                  <button
                    onClick={() => {
                      setData(prev => ({
                        ...prev,
                        loveStories: [
                          ...prev.loveStories,
                          {
                            id: `story-${Date.now()}`,
                            year: '2026',
                            title: 'Momen Baru',
                            description: 'Deskripsi kisah cinta...',
                            imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'
                          }
                        ]
                      }));
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Momen</span>
                  </button>
                </div>

                {data.loveStories.map((story, idx) => (
                  <div key={story.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 relative">
                    <button
                      onClick={() => {
                        setData(prev => ({
                          ...prev,
                          loveStories: prev.loveStories.filter((_, i) => i !== idx)
                        }));
                      }}
                      className="absolute top-3 right-3 text-slate-400 hover:text-red-600"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Tahun</label>
                        <input
                          type="text"
                          value={story.year}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const s = [...prev.loveStories];
                              s[idx].year = val;
                              return { ...prev, loveStories: s };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Judul Momen</label>
                        <input
                          type="text"
                          value={story.title}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const s = [...prev.loveStories];
                              s[idx].title = val;
                              return { ...prev, loveStories: s };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Deskripsi Cerita</label>
                        <textarea
                          rows={2}
                          value={story.description}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const s = [...prev.loveStories];
                              s[idx].description = val;
                              return { ...prev, loveStories: s };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. GALLERY TAB */}
            {activeTab === 'gallery' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-playfair text-lg font-bold text-slate-800">
                    Foto Galeri ({data.gallery.length} Foto)
                  </h4>
                  <button
                    onClick={() => {
                      setData(prev => ({
                        ...prev,
                        gallery: [
                          ...prev.gallery,
                          {
                            id: `gal-${Date.now()}`,
                            url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800',
                            caption: 'Our Special Day'
                          }
                        ]
                      }));
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-700 text-xs font-semibold hover:bg-rose-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Foto</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.gallery.map((photo, idx) => (
                    <div key={photo.id || idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200 relative flex gap-3">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={photo.url} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0 pr-6">
                        <input
                          type="text"
                          placeholder="Image URL"
                          value={photo.url}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const g = [...prev.gallery];
                              g[idx].url = val;
                              return { ...prev, gallery: g };
                            });
                          }}
                          className="w-full px-2 py-1 rounded border border-slate-200 text-[11px] mb-1 bg-white truncate"
                        />
                        <input
                          type="text"
                          placeholder="Caption Foto"
                          value={photo.caption || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const g = [...prev.gallery];
                              g[idx].caption = val;
                              return { ...prev, gallery: g };
                            });
                          }}
                          className="w-full px-2 py-1 rounded border border-slate-200 text-[11px] bg-white"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setData(prev => ({
                            ...prev,
                            gallery: prev.gallery.filter((_, i) => i !== idx)
                          }));
                        }}
                        className="absolute top-2 right-2 text-slate-400 hover:text-red-600"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. GIFTS TAB */}
            {activeTab === 'gifts' && (
              <div className="space-y-4 animate-fadeIn">
                <h4 className="font-playfair text-lg font-bold text-slate-800">
                  Amplop Digital & Rekening Bank
                </h4>
                {data.gifts.map((gift, idx) => (
                  <div key={gift.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Bank / Penyedia</label>
                        <input
                          type="text"
                          value={gift.providerName}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const g = [...prev.gifts];
                              g[idx].providerName = val;
                              return { ...prev, gifts: g };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Nomor Rekening / Alamat</label>
                        <input
                          type="text"
                          value={gift.accountNumber}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const g = [...prev.gifts];
                              g[idx].accountNumber = val;
                              return { ...prev, gifts: g };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-500 mb-1">Atas Nama (A.N.)</label>
                        <input
                          type="text"
                          value={gift.accountHolder}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const g = [...prev.gifts];
                              g[idx].accountHolder = val;
                              return { ...prev, gifts: g };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 6. THEME & AUDIO TAB */}
            {activeTab === 'theme' && (
              <div className="space-y-6 animate-fadeIn">
                <div>
                  <h4 className="font-playfair text-lg font-bold text-slate-800 mb-3">
                    Pilih Palet Tema Warna
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {(Object.keys(THEME_CONFIGS) as WeddingTheme[]).map((themeKey) => {
                      const cfg = THEME_CONFIGS[themeKey];
                      const isSelected = data.theme === themeKey;
                      return (
                        <button
                          key={themeKey}
                          onClick={() => updateTheme(themeKey)}
                          className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? 'border-rose-600 bg-rose-50/70 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div>
                            <span className="font-bold text-xs text-slate-900 block">{cfg.name}</span>
                            <span className="text-[10px] text-slate-400 capitalize">{themeKey}</span>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-rose-700 text-white flex items-center justify-center">
                              <Check className="w-3 h-3" />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-playfair text-lg font-bold text-slate-800 mb-3">
                    Audio & Musik Latar Belakang
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Judul Lagu</label>
                      <input
                        type="text"
                        value={data.soundtrack.title}
                        onChange={(e) => {
                          const val = e.target.value;
                          setData(prev => ({
                            ...prev,
                            soundtrack: { ...prev.soundtrack, title: val }
                          }));
                        }}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Penyanyi / Artist</label>
                      <input
                        type="text"
                        value={data.soundtrack.artist}
                        onChange={(e) => {
                          const val = e.target.value;
                          setData(prev => ({
                            ...prev,
                            soundtrack: { ...prev.soundtrack, artist: val }
                          }));
                        }}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">URL Audio MP3 (Direct link)</label>
                      <input
                        type="text"
                        value={data.soundtrack.audioUrl}
                        onChange={(e) => {
                          const val = e.target.value;
                          setData(prev => ({
                            ...prev,
                            soundtrack: { ...prev.soundtrack, audioUrl: val }
                          }));
                        }}
                        className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANE: Live Interactive Preview Frame */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Pratinjau Langsung
            </span>
            <a
              href={`/invite/${data.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 hover:underline"
            >
              <span>Buka Tab Baru</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Smartphone mockup frame */}
          <div
            className={`w-full transition-all duration-300 ${
              previewDevice === 'mobile'
                ? 'max-w-[420px] rounded-[48px] border-[10px] border-slate-900 shadow-2xl overflow-hidden bg-white ring-1 ring-slate-800/20'
                : 'max-w-full rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white'
            }`}
          >
            {/* Phone speaker notch if mobile */}
            {previewDevice === 'mobile' && (
              <div className="bg-slate-900 h-6 w-full flex items-center justify-center">
                <div className="w-20 h-3.5 bg-slate-950 rounded-full" />
              </div>
            )}

            {/* Scrollable preview container */}
            <div className="h-[740px] overflow-y-auto scrollbar-thin relative bg-white">
              {isClient && (
                <WeddingInvitationView
                  data={data}
                  guestName="Tamu Undangan (Preview)"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
