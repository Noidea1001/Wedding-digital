import { WeddingTheme } from '@/types/wedding';

export interface ThemeConfig {
  name: string;
  bodyBg: string;
  cardBg: string;
  headerBg: string;
  primaryText: string;
  secondaryText: string;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  navBg: string;
  envelopeBg: string;
  envelopeFlap: string;
  badgeBg: string;
  dividerColor: string;
  glowColor: string;
}

export const THEME_CONFIGS: Record<WeddingTheme, ThemeConfig> = {
  'floral-rose': {
    name: 'Floral Rose & Gold',
    bodyBg: 'bg-[#FAF5F5]',
    cardBg: 'bg-white/90 backdrop-blur-md shadow-sm border border-rose-100',
    headerBg: 'bg-gradient-to-b from-[#FFF0F3] to-[#FAF5F5]',
    primaryText: 'text-[#4A1521]',
    secondaryText: 'text-[#7D535E]',
    accentText: 'text-[#B85064]',
    accentBg: 'bg-[#B85064] text-white hover:bg-[#A04255]',
    accentBorder: 'border-[#F0C4CE]',
    navBg: 'bg-white/80 border-rose-200/60 shadow-lg text-[#4A1521]',
    envelopeBg: 'from-[#FFF0F3] via-[#FCE4E8] to-[#F7D6DC]',
    envelopeFlap: 'bg-[#F2BDC9]',
    badgeBg: 'bg-rose-100 text-rose-800',
    dividerColor: 'border-rose-200',
    glowColor: 'rgba(224, 141, 157, 0.25)'
  },
  'modern-sage': {
    name: 'Modern Sage & Olive',
    bodyBg: 'bg-[#F4F7F4]',
    cardBg: 'bg-white/90 backdrop-blur-md shadow-sm border border-emerald-100',
    headerBg: 'bg-gradient-to-b from-[#EAF0EB] to-[#F4F7F4]',
    primaryText: 'text-[#1F3A2B]',
    secondaryText: 'text-[#4A6354]',
    accentText: 'text-[#3E6B48]',
    accentBg: 'bg-[#3E6B48] text-white hover:bg-[#315739]',
    accentBorder: 'border-[#C2D6C6]',
    navBg: 'bg-white/80 border-emerald-200/60 shadow-lg text-[#1F3A2B]',
    envelopeBg: 'from-[#EAF0EB] via-[#DCE6DE] to-[#CFDDD2]',
    envelopeFlap: 'bg-[#BACFBF]',
    badgeBg: 'bg-emerald-100 text-emerald-800',
    dividerColor: 'border-emerald-200',
    glowColor: 'rgba(74, 107, 86, 0.25)'
  },
  'royal-gold': {
    name: 'Royal Navy & Gold',
    bodyBg: 'bg-[#0B132B]',
    cardBg: 'bg-[#1C2541]/90 backdrop-blur-md shadow-md border border-amber-500/20 text-slate-100',
    headerBg: 'bg-gradient-to-b from-[#0B132B] via-[#1C2541] to-[#0B132B]',
    primaryText: 'text-[#F8F9FA]',
    secondaryText: 'text-[#CBD5E1]',
    accentText: 'text-[#E0A96D]',
    accentBg: 'bg-gradient-to-r from-[#D4AF37] to-[#E0A96D] text-slate-900 font-semibold hover:opacity-90',
    accentBorder: 'border-amber-500/30',
    navBg: 'bg-[#1C2541]/90 border-amber-500/30 shadow-lg text-[#F8F9FA]',
    envelopeBg: 'from-[#1C2541] via-[#131E3A] to-[#0B132B]',
    envelopeFlap: 'bg-[#293556]',
    badgeBg: 'bg-amber-950/80 text-amber-300 border border-amber-500/30',
    dividerColor: 'border-amber-500/30',
    glowColor: 'rgba(212, 175, 55, 0.25)'
  },
  'celestial-midnight': {
    name: 'Celestial Midnight',
    bodyBg: 'bg-[#0F172A]',
    cardBg: 'bg-[#1E293B]/90 backdrop-blur-md shadow-md border border-indigo-500/20 text-slate-100',
    headerBg: 'bg-gradient-to-b from-[#0B0F19] to-[#0F172A]',
    primaryText: 'text-[#F1F5F9]',
    secondaryText: 'text-[#94A3B8]',
    accentText: 'text-[#818CF8]',
    accentBg: 'bg-[#6366F1] text-white hover:bg-[#4F46E5]',
    accentBorder: 'border-indigo-400/30',
    navBg: 'bg-[#1E293B]/90 border-indigo-500/30 shadow-lg text-[#F1F5F9]',
    envelopeBg: 'from-[#1E293B] via-[#151D2F] to-[#0F172A]',
    envelopeFlap: 'bg-[#2D3B55]',
    badgeBg: 'bg-indigo-950 text-indigo-300 border border-indigo-500/30',
    dividerColor: 'border-indigo-500/30',
    glowColor: 'rgba(99, 102, 241, 0.25)'
  },
  'rustic-terracotta': {
    name: 'Rustic Terracotta',
    bodyBg: 'bg-[#FAF6F0]',
    cardBg: 'bg-white/90 backdrop-blur-md shadow-sm border border-amber-100',
    headerBg: 'bg-gradient-to-b from-[#F7EFE5] to-[#FAF6F0]',
    primaryText: 'text-[#4A2818]',
    secondaryText: 'text-[#7D533E]',
    accentText: 'text-[#B85D38]',
    accentBg: 'bg-[#B85D38] text-white hover:bg-[#A04E2B]',
    accentBorder: 'border-[#E8C2B0]',
    navBg: 'bg-white/80 border-amber-200/60 shadow-lg text-[#4A2818]',
    envelopeBg: 'from-[#F7EFE5] via-[#EEDCCE] to-[#E3C9B8]',
    envelopeFlap: 'bg-[#D9B5A0]',
    badgeBg: 'bg-amber-100 text-amber-900',
    dividerColor: 'border-amber-200',
    glowColor: 'rgba(184, 93, 56, 0.25)'
  }
};
