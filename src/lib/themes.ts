import { WeddingTheme } from '@/types/wedding';

export interface ThemeConfig {
  name: string;
  nameKhmer: string;
  description: string;
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
  headerFontClass: string;
  titleFontClass: string;
  sealColor: string;
}

export const THEME_CONFIGS: Record<WeddingTheme, ThemeConfig> = {
  // 1. Khmer Royal Gold Heritage (Traditional Palace Gold & Crimson)
  'khmer-royal-gold': {
    name: 'Khmer Royal Gold',
    nameKhmer: 'រាជវង្សបុរាណ (មាស & ក្រហម)',
    description: 'រចនាបថប្រពៃណីខ្មែរបុរាណ ក្បាច់រាជវាំង ពណ៌មាស និងក្រហមឆ្អៅ',
    bodyBg: 'bg-[#FFFDF7]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-md border-2 border-amber-300/80',
    headerBg: 'bg-gradient-to-b from-[#FEF9E7] via-[#FFFDF7] to-[#FEF9E7]',
    primaryText: 'text-[#4A0E17]',
    secondaryText: 'text-[#7A3E2D]',
    accentText: 'text-[#B8860B]',
    accentBg: 'bg-gradient-to-r from-[#D4AF37] via-[#C59B27] to-[#996515] text-amber-950 font-bold shadow-md hover:opacity-95',
    accentBorder: 'border-[#D4AF37]',
    navBg: 'bg-white/90 border-amber-400/50 shadow-xl text-[#4A0E17]',
    envelopeBg: 'from-[#FAF0D7] via-[#F5E1B5] to-[#EBD095]',
    envelopeFlap: 'bg-[#D4AF37]',
    badgeBg: 'bg-amber-100/90 text-amber-900 border border-amber-300',
    dividerColor: 'border-amber-400/60',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    headerFontClass: 'font-khmer-moul',
    titleFontClass: 'font-khmer-koulen',
    sealColor: 'from-amber-600 to-amber-700'
  },

  // 2. Angkor Lotus Romance (Blush Pink & Ivory Sacred Lotus)
  'khmer-angkor-lotus': {
    name: 'Angkor Lotus Romance',
    nameKhmer: 'ផ្កាឈូកអង្គរ (ផ្កាឈូក & មាស)',
    description: 'ផ្កាឈូកពិសិដ្ឋអង្គរ ស្រទន់ រ៉ូមែនទិក ជាមួយពណ៌ផ្កាឈូក និងមាស',
    bodyBg: 'bg-[#FCF8F9]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-sm border border-rose-200/80',
    headerBg: 'bg-gradient-to-b from-[#FDF0F3] via-[#FCF8F9] to-[#FDF0F3]',
    primaryText: 'text-[#4A1525]',
    secondaryText: 'text-[#844D5B]',
    accentText: 'text-[#C24B66]',
    accentBg: 'bg-gradient-to-r from-[#C24B66] to-[#A0354E] text-white font-medium hover:opacity-95',
    accentBorder: 'border-[#F2B6C3]',
    navBg: 'bg-white/90 border-rose-200/80 shadow-xl text-[#4A1525]',
    envelopeBg: 'from-[#FDF0F3] via-[#F8DAE2] to-[#F2C4D1]',
    envelopeFlap: 'bg-[#E39CB0]',
    badgeBg: 'bg-rose-100 text-rose-900 border border-rose-200',
    dividerColor: 'border-rose-200',
    glowColor: 'rgba(194, 75, 102, 0.3)',
    headerFontClass: 'font-khmer-moul',
    titleFontClass: 'font-khmer-koulen',
    sealColor: 'from-rose-600 to-rose-700'
  },

  // 3. Modern Emerald Jade (Luxury Jade Green & Champagne Gold)
  'khmer-modern-emerald': {
    name: 'Modern Emerald Jade',
    nameKhmer: 'ត្បូងមរកត (បៃតងត្បូង & មាស)',
    description: 'ភាពថ្លៃថ្នូរទំនើប ត្បូងមរកតបៃតងខ្ចី និងពណ៌ទឹកមាសស្រាល',
    bodyBg: 'bg-[#F4F8F5]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-md border border-emerald-200/90',
    headerBg: 'bg-gradient-to-b from-[#E6EFE8] to-[#F4F8F5]',
    primaryText: 'text-[#123824]',
    secondaryText: 'text-[#3B634E]',
    accentText: 'text-[#1E5637]',
    accentBg: 'bg-gradient-to-r from-[#1E5637] to-[#123824] text-amber-200 font-medium hover:opacity-95',
    accentBorder: 'border-[#94C9A9]',
    navBg: 'bg-white/90 border-emerald-300/60 shadow-xl text-[#123824]',
    envelopeBg: 'from-[#E6EFE8] via-[#D2E4D6] to-[#BDD8C3]',
    envelopeFlap: 'bg-[#98C2A3]',
    badgeBg: 'bg-emerald-100 text-emerald-900 border border-emerald-300',
    dividerColor: 'border-emerald-300',
    glowColor: 'rgba(30, 86, 55, 0.3)',
    headerFontClass: 'font-khmer-moul',
    titleFontClass: 'font-khmer-koulen',
    sealColor: 'from-emerald-700 to-emerald-900'
  },

  // 4. Majestic Midnight Starlight (Evening Ballroom Deep Navy)
  'khmer-midnight-star': {
    name: 'Midnight Starlight',
    nameKhmer: 'រាត្រីតារា (ខៀវរាត្រី & ពេជ្រទឹកមាស)',
    description: 'រចនាបថកម្មវិធីពេលល្ងាចដ៏ប្រណិត ពន្លឺផ្កាយ និងពេជ្រភ្លឺផ្លេក',
    bodyBg: 'bg-[#0A1128]',
    cardBg: 'bg-[#141F3D]/95 backdrop-blur-md shadow-xl border border-amber-400/30 text-slate-100',
    headerBg: 'bg-gradient-to-b from-[#060B1C] via-[#0A1128] to-[#0A1128]',
    primaryText: 'text-[#FFFFFF]',
    secondaryText: 'text-[#CBD5E1]',
    accentText: 'text-[#F1C40F]',
    accentBg: 'bg-gradient-to-r from-[#D4AF37] via-[#F1C40F] to-[#E67E22] text-slate-950 font-bold hover:opacity-95',
    accentBorder: 'border-amber-400/40',
    navBg: 'bg-[#141F3D]/95 border-amber-400/30 shadow-2xl text-slate-100',
    envelopeBg: 'from-[#141F3D] via-[#0E172F] to-[#080D1D]',
    envelopeFlap: 'bg-[#1C2C55]',
    badgeBg: 'bg-amber-950/80 text-amber-300 border border-amber-500/40',
    dividerColor: 'border-amber-400/30',
    glowColor: 'rgba(241, 196, 15, 0.35)',
    headerFontClass: 'font-khmer-moul',
    titleFontClass: 'font-khmer-koulen',
    sealColor: 'from-amber-500 to-amber-700'
  },

  // 5. Traditional Khmer Silk (Golden Raw Silk & Amber)
  'khmer-silk-terracotta': {
    name: 'Khmer Silk & Amber',
    nameKhmer: 'សូត្រខ្មែរ (សូត្រមាស & ដីឥដ្ឋ)',
    description: 'ក្បាច់សំពត់ចងក្បិនសូត្រខ្មែរ ពណ៌មាសលឿងទុំ និងកក់ក្តៅ',
    bodyBg: 'bg-[#FDF9F2]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-md border border-amber-200/90',
    headerBg: 'bg-gradient-to-b from-[#F8EFE0] to-[#FDF9F2]',
    primaryText: 'text-[#4E2B15]',
    secondaryText: 'text-[#875535]',
    accentText: 'text-[#B86228]',
    accentBg: 'bg-gradient-to-r from-[#B86228] to-[#8C4314] text-amber-100 font-medium hover:opacity-95',
    accentBorder: 'border-[#E0B99B]',
    navBg: 'bg-white/90 border-amber-300/70 shadow-xl text-[#4E2B15]',
    envelopeBg: 'from-[#F8EFE0] via-[#EEDCC4] to-[#E3C8A7]',
    envelopeFlap: 'bg-[#CFA881]',
    badgeBg: 'bg-amber-100 text-amber-900 border border-amber-300',
    dividerColor: 'border-amber-300/60',
    glowColor: 'rgba(184, 98, 40, 0.3)',
    headerFontClass: 'font-khmer-moul',
    titleFontClass: 'font-khmer-koulen',
    sealColor: 'from-amber-700 to-amber-900'
  },

  // 6. Minimalist Ivory & Champagne
  'khmer-minimal-ivory': {
    name: 'Minimalist Ivory',
    nameKhmer: 'សាមញ្ញប្រណិត (ភ្លុក & មាសស្រាល)',
    description: 'រចនាបថទាន់សម័យ សាមញ្ញ ស្អាតស្អំ ពណ៌ភ្លុក និងមាសស្រាល',
    bodyBg: 'bg-[#FAFAF9]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-xs border border-stone-200',
    headerBg: 'bg-gradient-to-b from-[#F5F5F4] to-[#FAFAF9]',
    primaryText: 'text-[#1C1917]',
    secondaryText: 'text-[#57534E]',
    accentText: 'text-[#78716C]',
    accentBg: 'bg-[#292524] text-white hover:bg-[#1C1917]',
    accentBorder: 'border-stone-300',
    navBg: 'bg-white/90 border-stone-200 shadow-xl text-[#1C1917]',
    envelopeBg: 'from-[#F5F5F4] via-[#E7E5E4] to-[#D6D3D1]',
    envelopeFlap: 'bg-[#C7C2BE]',
    badgeBg: 'bg-stone-100 text-stone-800 border border-stone-200',
    dividerColor: 'border-stone-200',
    glowColor: 'rgba(120, 113, 108, 0.2)',
    headerFontClass: 'font-khmer-moul',
    titleFontClass: 'font-khmer-koulen',
    sealColor: 'from-stone-700 to-stone-900'
  },

  // Legacy fallback themes
  'floral-rose': {
    name: 'Floral Rose & Gold',
    nameKhmer: 'ផ្ការ៉ូស & មាស',
    description: 'Blush pink floral romance',
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
    glowColor: 'rgba(224, 141, 157, 0.25)',
    headerFontClass: 'font-playfair',
    titleFontClass: 'font-playfair',
    sealColor: 'from-rose-700 to-rose-900'
  },
  'modern-sage': {
    name: 'Modern Sage & Olive',
    nameKhmer: 'ស្លឹកអូលីវ & បៃតងខ្ចី',
    description: 'Modern sage botanical',
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
    glowColor: 'rgba(74, 107, 86, 0.25)',
    headerFontClass: 'font-playfair',
    titleFontClass: 'font-playfair',
    sealColor: 'from-emerald-700 to-emerald-900'
  },
  'royal-gold': {
    name: 'Royal Navy & Gold',
    nameKhmer: 'ខៀវរាជវង្ស & មាស',
    description: 'Navy and champagne gold',
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
    glowColor: 'rgba(212, 175, 55, 0.25)',
    headerFontClass: 'font-playfair',
    titleFontClass: 'font-playfair',
    sealColor: 'from-amber-600 to-amber-800'
  }
};
