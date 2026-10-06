import { WeddingTheme } from '@/types/wedding';

export interface ThemeConfig {
  name: string;
  nameKhmer: string;
  category: 'Khmer Heritage' | 'Modern Luxury' | 'Romantic Floral' | 'Boho & Nature' | 'Minimalist';
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
  // 1. Khmer Royal Gold Heritage
  'khmer-royal-gold': {
    name: 'Khmer Royal Gold',
    nameKhmer: 'រាជវង្សបុរាណ (មាស & ក្រហម)',
    category: 'Khmer Heritage',
    description: 'Traditional Royal Palace gold with sacred lotus motifs & burgundy accents',
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

  // 2. Angkor Lotus Romance
  'khmer-angkor-lotus': {
    name: 'Angkor Lotus Romance',
    nameKhmer: 'ផ្កាឈូកអង្គរ (ផ្កាឈូក & មាស)',
    category: 'Khmer Heritage',
    description: 'Sacred Angkor lotus blossoms with blush pink & champagne gold',
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

  // 3. Modern Emerald Jade
  'khmer-modern-emerald': {
    name: 'Modern Emerald Jade',
    nameKhmer: 'ត្បូងមរកត (បៃតងត្បូង & មាស)',
    category: 'Modern Luxury',
    description: 'Regal emerald jade tones paired with luminous champagne gold',
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

  // 4. Midnight Starlight
  'khmer-midnight-star': {
    name: 'Midnight Starlight',
    nameKhmer: 'រាត្រីតារា (ខៀវរាត្រី & ពេជ្រ)',
    category: 'Modern Luxury',
    description: 'Grand evening ballroom glamour with deep navy and starlight gold',
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

  // 5. Traditional Khmer Silk
  'khmer-silk-terracotta': {
    name: 'Khmer Silk & Amber',
    nameKhmer: 'សូត្រខ្មែរ (សូត្រមាស & ដីឥដ្ឋ)',
    category: 'Khmer Heritage',
    description: 'Golden Cambodian raw silk textures and warm amber earth hues',
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

  // 6. Minimalist Ivory & Gold
  'khmer-minimal-ivory': {
    name: 'Minimalist Ivory',
    nameKhmer: 'សាមញ្ញប្រណិត (ភ្លុក & មាស)',
    category: 'Minimalist',
    description: 'Clean luxury ivory linen, subtle hairline gold borders, timeless chic',
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

  // 7. French Rose Gold & Lace (Paris Romantic)
  'french-rose-gold': {
    name: 'French Rose Gold & Lace',
    nameKhmer: 'ផ្ការ៉ូសមាសប៉ារីស (Paris Romance)',
    category: 'Romantic Floral',
    description: 'Parisian bridal romance with delicate rose gold, cream lace & peony blooms',
    bodyBg: 'bg-[#FCF7F8]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-md border border-rose-200',
    headerBg: 'bg-gradient-to-b from-[#FCECEF] via-[#FCF7F8] to-[#FCF7F8]',
    primaryText: 'text-[#461220]',
    secondaryText: 'text-[#783D4F]',
    accentText: 'text-[#C95D76]',
    accentBg: 'bg-gradient-to-r from-[#D87088] to-[#B8526A] text-white font-medium hover:opacity-95',
    accentBorder: 'border-[#F4C2CD]',
    navBg: 'bg-white/90 border-rose-200 shadow-xl text-[#461220]',
    envelopeBg: 'from-[#FCECEF] via-[#F8D5DC] to-[#F1B9C4]',
    envelopeFlap: 'bg-[#E398A8]',
    badgeBg: 'bg-rose-100 text-rose-900 border border-rose-200',
    dividerColor: 'border-rose-200',
    glowColor: 'rgba(216, 112, 136, 0.3)',
    headerFontClass: 'font-playfair',
    titleFontClass: 'font-cormorant',
    sealColor: 'from-rose-600 to-rose-800'
  },

  // 8. Modern Sage Botanical (Tuscany / California)
  'modern-sage-botanical': {
    name: 'Tuscany Sage Botanical',
    nameKhmer: 'សួនរុក្ខសាស្ត្រ (Sage Botanical)',
    category: 'Boho & Nature',
    description: 'Earthy Italian olive branches, calming sage green & sun-bleached linen',
    bodyBg: 'bg-[#F5F7F5]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-md border border-emerald-200',
    headerBg: 'bg-gradient-to-b from-[#E9EFE9] to-[#F5F7F5]',
    primaryText: 'text-[#20392B]',
    secondaryText: 'text-[#486855]',
    accentText: 'text-[#3E6B48]',
    accentBg: 'bg-gradient-to-r from-[#4E7D5A] to-[#34593E] text-white font-medium hover:opacity-95',
    accentBorder: 'border-[#BDD6C2]',
    navBg: 'bg-white/90 border-emerald-200 shadow-xl text-[#20392B]',
    envelopeBg: 'from-[#E9EFE9] via-[#D7E3D8] to-[#C3D4C4]',
    envelopeFlap: 'bg-[#A8C2AA]',
    badgeBg: 'bg-emerald-100 text-emerald-900 border border-emerald-200',
    dividerColor: 'border-emerald-200',
    glowColor: 'rgba(78, 125, 90, 0.25)',
    headerFontClass: 'font-cormorant',
    titleFontClass: 'font-playfair',
    sealColor: 'from-emerald-700 to-emerald-900'
  },

  // 9. Black Tie Luxury (NYC & Hollywood Chic)
  'black-tie-luxury': {
    name: 'Black Tie Luxury Onyx',
    nameKhmer: 'រាត្រីអភិជន (Black Tie Onyx)',
    category: 'Modern Luxury',
    description: 'High-fashion editorial aesthetic with deep onyx black & metallic champagne gold',
    bodyBg: 'bg-[#0E0E10]',
    cardBg: 'bg-[#1A1A1E]/95 backdrop-blur-md shadow-2xl border border-amber-400/40 text-slate-100',
    headerBg: 'bg-gradient-to-b from-[#050507] via-[#0E0E10] to-[#0E0E10]',
    primaryText: 'text-[#F5F5F7]',
    secondaryText: 'text-[#A1A1A6]',
    accentText: 'text-[#D4AF37]',
    accentBg: 'bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#C49B28] text-black font-bold hover:opacity-95',
    accentBorder: 'border-amber-400/50',
    navBg: 'bg-[#1A1A1E]/95 border-amber-400/30 shadow-2xl text-slate-100',
    envelopeBg: 'from-[#1A1A1E] via-[#121215] to-[#08080A]',
    envelopeFlap: 'bg-[#26262B]',
    badgeBg: 'bg-amber-950/90 text-amber-300 border border-amber-500/50',
    dividerColor: 'border-amber-400/40',
    glowColor: 'rgba(212, 175, 55, 0.4)',
    headerFontClass: 'font-cinzel',
    titleFontClass: 'font-playfair',
    sealColor: 'from-amber-600 to-amber-800'
  },

  // 10. Boho Terracotta Chic (Bohemian Sunset & Pampas)
  'boho-terracotta': {
    name: 'Boho Terracotta Chic',
    nameKhmer: 'រចនាបថបូហូ (Boho Terracotta)',
    category: 'Boho & Nature',
    description: 'Warm desert sunset, bohemian terracotta clay & natural pampas grass tones',
    bodyBg: 'bg-[#FAF6F2]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-md border border-amber-200',
    headerBg: 'bg-gradient-to-b from-[#F6EDE4] to-[#FAF6F2]',
    primaryText: 'text-[#4A2511]',
    secondaryText: 'text-[#875034]',
    accentText: 'text-[#C05D2D]',
    accentBg: 'bg-gradient-to-r from-[#C05D2D] to-[#99431B] text-white font-medium hover:opacity-95',
    accentBorder: 'border-[#ECC2AB]',
    navBg: 'bg-white/90 border-amber-200 shadow-xl text-[#4A2511]',
    envelopeBg: 'from-[#F6EDE4] via-[#EED8C6] to-[#E2BEA5]',
    envelopeFlap: 'bg-[#D2A083]',
    badgeBg: 'bg-amber-100 text-amber-900 border border-amber-200',
    dividerColor: 'border-amber-200',
    glowColor: 'rgba(192, 93, 45, 0.3)',
    headerFontClass: 'font-cormorant',
    titleFontClass: 'font-playfair',
    sealColor: 'from-amber-700 to-amber-900'
  },

  // 11. Tropical Beach Sunset (Bali / Koh Rong)
  'tropical-beach': {
    name: 'Tropical Beach Sunset',
    nameKhmer: 'ឆ្នេរសមុទ្រត្រូពិក (Tropical Beach)',
    category: 'Boho & Nature',
    description: 'Turquoise ocean waters, warm golden beach sand & tropical coral vibes',
    bodyBg: 'bg-[#F5F9FA]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-md border border-cyan-200',
    headerBg: 'bg-gradient-to-b from-[#E3F2F5] to-[#F5F9FA]',
    primaryText: 'text-[#123942]',
    secondaryText: 'text-[#3E6C77]',
    accentText: 'text-[#0E7A8A]',
    accentBg: 'bg-gradient-to-r from-[#0E7A8A] to-[#0A5661] text-cyan-50 font-medium hover:opacity-95',
    accentBorder: 'border-[#9FD4DE]',
    navBg: 'bg-white/90 border-cyan-200 shadow-xl text-[#123942]',
    envelopeBg: 'from-[#E3F2F5] via-[#C9E7EC] to-[#A8D8E0]',
    envelopeFlap: 'bg-[#7EC1CD]',
    badgeBg: 'bg-cyan-100 text-cyan-900 border border-cyan-300',
    dividerColor: 'border-cyan-300',
    glowColor: 'rgba(14, 122, 138, 0.3)',
    headerFontClass: 'font-cormorant',
    titleFontClass: 'font-playfair',
    sealColor: 'from-cyan-700 to-cyan-900'
  },

  // 12. Zen Cherry Blossom (Sakura & Soft Stone)
  'zen-cherry-blossom': {
    name: 'Zen Cherry Blossom',
    nameKhmer: 'ផ្កាសាគូរ៉ាជប៉ុន (Zen Sakura)',
    category: 'Minimalist',
    description: 'Serene Japanese minimalist aesthetic with soft sakura petal pink & pebble grey',
    bodyBg: 'bg-[#FAF8F8]',
    cardBg: 'bg-white/95 backdrop-blur-md shadow-sm border border-pink-200',
    headerBg: 'bg-gradient-to-b from-[#FDF0F3] to-[#FAF8F8]',
    primaryText: 'text-[#2D2326]',
    secondaryText: 'text-[#68555A]',
    accentText: 'text-[#B8576E]',
    accentBg: 'bg-gradient-to-r from-[#B8576E] to-[#963E53] text-white font-medium hover:opacity-95',
    accentBorder: 'border-[#F5C7D2]',
    navBg: 'bg-white/90 border-pink-200 shadow-xl text-[#2D2326]',
    envelopeBg: 'from-[#FDF0F3] via-[#F8DEE4] to-[#F2CAD2]',
    envelopeFlap: 'bg-[#E3A9B5]',
    badgeBg: 'bg-pink-100 text-pink-900 border border-pink-200',
    dividerColor: 'border-pink-200',
    glowColor: 'rgba(184, 87, 110, 0.25)',
    headerFontClass: 'font-cormorant',
    titleFontClass: 'font-cormorant',
    sealColor: 'from-pink-700 to-rose-900'
  },

  // Fallbacks
  'floral-rose': {
    name: 'Floral Rose & Gold',
    nameKhmer: 'ផ្ការ៉ូស & មាស',
    category: 'Romantic Floral',
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
    category: 'Boho & Nature',
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
    category: 'Modern Luxury',
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
