'use client';

import React, { useState, useEffect } from 'react';
import DashboardNavbar from '@/components/DashboardNavbar';
import WeddingInvitationView from '@/components/WeddingInvitationView';
import { getWeddingData, saveWeddingData } from '@/lib/storage';
import { WeddingInvitationData, WeddingTheme } from '@/types/wedding';
import { DEFAULT_WEDDING, ALL_PRESET_WEDDINGS } from '@/lib/mockData';
import { THEME_CONFIGS } from '@/lib/themes';
import { SOUNDTRACK_PRESETS } from '@/lib/soundtracks';
import { SupportedLocale } from '@/lib/i18n';
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
  Trash2,
  Sparkles,
  Music,
  Globe
} from 'lucide-react';

export default function BuilderPage() {
  const [data, setData] = useState<WeddingInvitationData>(DEFAULT_WEDDING);
  const [activeTab, setActiveTab] = useState<'couple' | 'events' | 'story' | 'gallery' | 'gifts' | 'theme'>('couple');
  const [previewDevice, setPreviewDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [saveToast, setSaveToast] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [themeFilter, setThemeFilter] = useState<string>('All');

  useEffect(() => {
    setIsClient(true);
    const existing = getWeddingData('visal-thida');
    setData(existing);
  }, []);

  const handleSave = () => {
    saveWeddingData(data);
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2500);
  };

  const handleLoadPreset = (slug: string) => {
    const preset = ALL_PRESET_WEDDINGS[slug];
    if (preset) {
      setData(preset);
      saveWeddingData(preset);
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 2000);
    }
  };

  const handleReset = () => {
    if (confirm('តើអ្នកពិតជាចង់កំណត់ទិន្នន័យឡើងវិញទៅគំរូដើមមែនទេ? (Reset to default?)')) {
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

  const handleSelectSoundtrack = (st: typeof SOUNDTRACK_PRESETS[0]) => {
    setData(prev => ({
      ...prev,
      soundtrack: {
        title: st.title,
        artist: st.artist,
        audioUrl: st.audioUrl
      }
    }));
  };

  const worldwidePresets = [
    { slug: 'visal-thida', label: '🇰🇭 វិសាល & ធីតា (Khmer Royal Gold)' },
    { slug: 'dara-bopha', label: '🇰🇭 ដារ៉ា & បុប្ផា (Angkor Lotus)' },
    { slug: 'julien-charlotte', label: '🇫🇷 Julien & Charlotte (Paris French Rose)' },
    { slug: 'alexander-victoria', label: '🇺🇸 Alexander & Victoria (NYC Black Tie)' },
    { slug: 'oliver-sophia', label: '🇮🇹 Oliver & Sophia (Tuscany Sage Botanical)' },
    { slug: 'leo-maya', label: '🌴 Leo & Maya (Tropical Beach Sunset)' }
  ];

  const allThemes = Object.keys(THEME_CONFIGS) as WeddingTheme[];
  const themeCategories = ['All', 'Khmer Heritage', 'Modern Luxury', 'Romantic Floral', 'Boho & Nature', 'Minimalist'];

  const filteredThemes = themeFilter === 'All'
    ? allThemes
    : allThemes.filter((t) => THEME_CONFIGS[t].category === themeFilter);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-khmer">
      <DashboardNavbar />

      {/* Worldwide Preset Templates Bar */}
      <div className="bg-slate-900 text-white px-4 sm:px-8 py-2.5 flex items-center gap-2 overflow-x-auto scrollbar-none text-xs">
        <span className="font-bold whitespace-nowrap text-amber-400 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ម៉ូតគំរូពិភពលោក (Presets):</span>
        </span>
        <div className="flex items-center gap-1.5">
          {worldwidePresets.map((p) => (
            <button
              key={p.slug}
              onClick={() => handleLoadPreset(p.slug)}
              className={`whitespace-nowrap px-3 py-1 rounded-full font-bold transition-all ${
                data.slug === p.slug
                  ? 'bg-amber-400 text-amber-950 shadow-xs'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Builder Subheader */}
      <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4 sticky top-16 z-20 shadow-xs">
        <div className="flex items-center gap-3">
          <span className="font-bold text-slate-900 text-lg">
            កែសម្រួលសំបុត្រ (Builder & Customizer)
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-950 font-bold">
            Live Preview
          </span>
        </div>

        {/* Device Switcher & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setPreviewDevice('mobile')}
              className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                previewDevice === 'mobile' ? 'bg-white shadow-xs text-amber-900' : 'text-slate-600'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
            <button
              onClick={() => setPreviewDevice('desktop')}
              className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                previewDevice === 'desktop' ? 'bg-white shadow-xs text-amber-900' : 'text-slate-600'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
          </div>

          <button
            onClick={handleReset}
            title="Reset to default"
            className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all"
          >
            <RefreshCw className="w-4 h-4" />
          </button>

          <button
            onClick={handleSave}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-900/15 transition-all"
          >
            {saveToast ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
            <span>{saveToast ? 'បានរក្សាទុក!' : 'រក្សាទុកការកែប្រែ'}</span>
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
              { id: 'couple', label: 'មង្គលការ (Couple)', icon: Heart },
              { id: 'events', label: 'កម្មវិធីបុណ្យ (Events)', icon: Calendar },
              { id: 'story', label: 'ប្រវត្តិស្នេហ៍ (Story)', icon: BookOpen },
              { id: 'gallery', label: 'រូបថត (Gallery)', icon: ImageIcon },
              { id: 'gifts', label: 'ចំណងដៃ (Gifts & KHQR)', icon: Gift },
              { id: 'theme', label: 'ម៉ូត & ភ្លេង (Themes & Music)', icon: Palette },
            ].map((tab) => {
              const Icon = tab.icon;
              const isCurrent = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isCurrent
                      ? 'bg-amber-50 text-amber-950 border border-amber-300'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-amber-700" />
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
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="font-bold text-base text-slate-900">
                    ព័ត៌មានកូនកំលោះ (Groom Information)
                  </h4>
                  {/* Language selector */}
                  <div className="flex items-center gap-1.5 text-xs">
                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                    <select
                      value={data.locale || 'km'}
                      onChange={(e) => setData(prev => ({ ...prev, locale: e.target.value as SupportedLocale }))}
                      className="px-2 py-1 rounded-lg border border-slate-200 text-xs bg-white font-bold"
                    >
                      <option value="km">🇰🇭 ភាសាខ្មែរ (Khmer)</option>
                      <option value="en">🇬🇧 English (Global)</option>
                      <option value="fr">🇫🇷 Français (French)</option>
                      <option value="zh">🇨🇳 中文 (Chinese)</option>
                      <option value="id">🇮🇩 Bahasa Indonesia</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះកូនកំលោះ (Full Name) *</label>
                    <input
                      type="text"
                      value={data.groom.fullNameKhmer || data.groom.fullName}
                      onChange={(e) => updateGroom('fullNameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះឡាតាំង (English Name)</label>
                    <input
                      type="text"
                      value={data.groom.fullName}
                      onChange={(e) => updateGroom('fullName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះហៅក្រៅ (Nickname)</label>
                    <input
                      type="text"
                      value={data.groom.nicknameKhmer || data.groom.nickname}
                      onChange={(e) => updateGroom('nicknameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឋានៈក្នុងគ្រួសារ (Child Order)</label>
                    <input
                      type="text"
                      value={data.groom.childOrderTextKhmer || data.groom.childOrderText}
                      onChange={(e) => updateGroom('childOrderTextKhmer', e.target.value)}
                      placeholder="e.g. Eldest Son of / កូនប្រុសច្បង"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះឪពុក (Father's Name)</label>
                    <input
                      type="text"
                      value={data.groom.fatherNameKhmer || data.groom.fatherName}
                      onChange={(e) => updateGroom('fatherNameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះម្តាយ (Mother's Name)</label>
                    <input
                      type="text"
                      value={data.groom.motherNameKhmer || data.groom.motherName}
                      onChange={(e) => updateGroom('motherNameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">URL រូបថតកូនកំលោះ (Photo URL)</label>
                    <input
                      type="text"
                      value={data.groom.photoUrl}
                      onChange={(e) => updateGroom('photoUrl', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                </div>

                <h4 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-2 pt-4">
                  ព័ត៌មានកូនក្រមុំ (Bride Information)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះកូនក្រមុំ (Full Name) *</label>
                    <input
                      type="text"
                      value={data.bride.fullNameKhmer || data.bride.fullName}
                      onChange={(e) => updateBride('fullNameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះឡាតាំង (English Name)</label>
                    <input
                      type="text"
                      value={data.bride.fullName}
                      onChange={(e) => updateBride('fullName', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះហៅក្រៅ (Nickname)</label>
                    <input
                      type="text"
                      value={data.bride.nicknameKhmer || data.bride.nickname}
                      onChange={(e) => updateBride('nicknameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឋានៈក្នុងគ្រួសារ (Child Order)</label>
                    <input
                      type="text"
                      value={data.bride.childOrderTextKhmer || data.bride.childOrderText}
                      onChange={(e) => updateBride('childOrderTextKhmer', e.target.value)}
                      placeholder="e.g. Second Daughter of / កូនស្រីទី២"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះឪពុក (Father's Name)</label>
                    <input
                      type="text"
                      value={data.bride.fatherNameKhmer || data.bride.fatherName}
                      onChange={(e) => updateBride('fatherNameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">ឈ្មោះម្តាយ (Mother's Name)</label>
                    <input
                      type="text"
                      value={data.bride.motherNameKhmer || data.bride.motherName}
                      onChange={(e) => updateBride('motherNameKhmer', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-slate-700 mb-1">URL រូបថតកូនក្រមុំ (Photo URL)</label>
                    <input
                      type="text"
                      value={data.bride.photoUrl}
                      onChange={(e) => updateBride('photoUrl', e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:border-amber-500 outline-none"
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
                      <span>Event #{index + 1}: {event.titleKhmer || event.title}</span>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Event Title</label>
                        <input
                          type="text"
                          value={event.titleKhmer || event.title}
                          onChange={(e) => updateEvent(index, 'titleKhmer', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white font-khmer"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Date (YYYY-MM-DD)</label>
                        <input
                          type="date"
                          value={event.date}
                          onChange={(e) => updateEvent(index, 'date', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Time (e.g. 08:00 - 11:30)</label>
                        <input
                          type="text"
                          value={event.startTime}
                          onChange={(e) => updateEvent(index, 'startTime', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Venue Name</label>
                        <input
                          type="text"
                          value={event.venueName}
                          onChange={(e) => updateEvent(index, 'venueName', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white font-khmer"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Full Address</label>
                        <input
                          type="text"
                          value={event.address}
                          onChange={(e) => updateEvent(index, 'address', e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-slate-200 text-xs bg-white font-khmer"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Google Maps Link</label>
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
                  <h4 className="font-bold text-base text-slate-900">
                    Love Story Milestones
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
                            title: 'New Milestone',
                            description: 'Our love story narrative...',
                            imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800'
                          }
                        ]
                      }));
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Milestone</span>
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
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">Year</label>
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
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-khmer"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">Title</label>
                        <input
                          type="text"
                          value={story.titleKhmer || story.title}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const s = [...prev.loveStories];
                              s[idx].title = val;
                              s[idx].titleKhmer = val;
                              return { ...prev, loveStories: s };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-khmer"
                        />
                      </div>
                      <div className="sm:col-span-3">
                        <label className="block text-[11px] font-bold text-slate-500 mb-1">Description</label>
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
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-khmer"
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
                  <h4 className="font-bold text-base text-slate-900">
                    Wedding Photo Gallery ({data.gallery.length} Photos)
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
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Photo</span>
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
                          placeholder="Caption"
                          value={photo.caption || ''}
                          onChange={(e) => {
                            const val = e.target.value;
                            setData(prev => {
                              const g = [...prev.gallery];
                              g[idx].caption = val;
                              return { ...prev, gallery: g };
                            });
                          }}
                          className="w-full px-2 py-1 rounded border border-slate-200 text-[11px] bg-white font-khmer"
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
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900">
                    Worldwide Gifts & Cashless Registry
                  </h4>
                  <button
                    onClick={() => {
                      setData(prev => ({
                        ...prev,
                        gifts: [
                          ...prev.gifts,
                          {
                            id: `gift-${Date.now()}`,
                            type: 'paypal',
                            providerName: 'PayPal Worldwide',
                            accountNumber: 'paypal.me/yourusername',
                            accountHolder: 'Your Name',
                            note: 'Direct digital gift'
                          }
                        ]
                      }));
                    }}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-bold hover:bg-amber-100"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Payment</span>
                  </button>
                </div>

                {data.gifts.map((gift, idx) => (
                  <div key={gift.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative">
                    <button
                      onClick={() => {
                        setData(prev => ({
                          ...prev,
                          gifts: prev.gifts.filter((_, i) => i !== idx)
                        }));
                      }}
                      className="absolute top-3 right-3 text-slate-400 hover:text-red-600"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Provider Type</label>
                        <select
                          value={gift.type}
                          onChange={(e) => {
                            const val = e.target.value as any;
                            setData(prev => {
                              const g = [...prev.gifts];
                              g[idx].type = val;
                              return { ...prev, gifts: g };
                            });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-bold"
                        >
                          <option value="aba_khqr">🇰🇭 ABA Bank KHQR (Bakong)</option>
                          <option value="wing_khqr">🇰🇭 Wing Bank KHQR</option>
                          <option value="acleda_khqr">🇰🇭 ACLEDA Bank KHQR</option>
                          <option value="paypal">🌐 PayPal Global</option>
                          <option value="wise">🌐 Wise Multi-Currency</option>
                          <option value="zelle">🇺🇸 Zelle Pay (US)</option>
                          <option value="venmo">🇺🇸 Venmo</option>
                          <option value="bank">🏦 Bank Wire / IBAN</option>
                          <option value="gift_address">📦 Physical Gift Address</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Display Label</label>
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
                        <label className="block text-[11px] font-bold text-slate-600 mb-1">Account No. / Handle</label>
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
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-mono"
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
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-base text-slate-900">
                      Choose From 12 Worldwide Wedding Themes
                    </h4>
                  </div>

                  {/* Category filters */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-3 scrollbar-none">
                    {themeCategories.map((c) => (
                      <button
                        key={c}
                        onClick={() => setThemeFilter(c)}
                        className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                          themeFilter === c
                            ? 'bg-amber-700 text-white'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {filteredThemes.map((themeKey) => {
                      const cfg = THEME_CONFIGS[themeKey];
                      const isSelected = data.theme === themeKey;
                      return (
                        <button
                          key={themeKey}
                          onClick={() => updateTheme(themeKey)}
                          className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                            isSelected
                              ? 'border-amber-600 bg-amber-50 shadow-xs'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div>
                            <span className="font-bold text-xs text-slate-900 block">{cfg.name}</span>
                            <span className="text-[10px] text-slate-400 font-normal">{cfg.description}</span>
                          </div>
                          {isSelected && (
                            <div className="w-5 h-5 rounded-full bg-amber-700 text-white flex items-center justify-center font-bold text-xs">
                              ✓
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Music Library Presets */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                    <Music className="w-4 h-4 text-amber-600" />
                    <span>Curated Wedding Soundtracks</span>
                  </h4>
                  <p className="text-xs text-slate-500 mb-3">
                    Pick a romantic melody from our royalty-free wedding music catalog:
                  </p>

                  <div className="space-y-2 mb-4">
                    {SOUNDTRACK_PRESETS.map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => handleSelectSoundtrack(st)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                          data.soundtrack.audioUrl === st.audioUrl
                            ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold'
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div>
                          <span>{st.title}</span>
                          <span className="block text-[10px] text-slate-400 font-normal">{st.artist} • {st.category}</span>
                        </div>
                        {data.soundtrack.audioUrl === st.audioUrl && (
                          <span className="text-amber-700 font-bold">Selected ✓</span>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Custom audio link */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <label className="block text-xs font-bold text-slate-600 mb-1">Or Paste Custom Audio MP3 URL:</label>
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
                      className="w-full px-3 py-1.5 rounded-lg border border-slate-200 text-xs bg-white font-mono"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANE: Live Interactive Preview Frame */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Live Interactive Preview
            </span>
            <a
              href={`/invite/${data.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 hover:underline"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div
            className={`w-full transition-all duration-300 ${
              previewDevice === 'mobile'
                ? 'max-w-[420px] rounded-[48px] border-[10px] border-slate-900 shadow-2xl overflow-hidden bg-white ring-1 ring-slate-800/20'
                : 'max-w-full rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white'
            }`}
          >
            {previewDevice === 'mobile' && (
              <div className="bg-slate-900 h-6 w-full flex items-center justify-center">
                <div className="w-20 h-3.5 bg-slate-950 rounded-full" />
              </div>
            )}

            <div className="h-[740px] overflow-y-auto scrollbar-thin relative bg-white">
              {isClient && (
                <WeddingInvitationView
                  data={data}
                  guestName="Honored Guest (Preview)"
                  allowThemeSwitching={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
