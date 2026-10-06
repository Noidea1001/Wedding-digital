import { SupportedLocale } from '@/lib/i18n';

export type WeddingTheme = 
  // 1. Khmer Dedicated Heritage Collection
  | 'khmer-royal-gold'      // Traditional Royal Golden Heritage (រាជវង្សបុរាណ)
  | 'khmer-angkor-lotus'     // Angkor Lotus Romance (ផ្កាឈូកអង្គរ)
  | 'khmer-modern-emerald'   // Modern Emerald Jade & Gold (ត្បូងមរកត)
  | 'khmer-midnight-star'    // Majestic Midnight Starlight (រាត្រីតារា)
  | 'khmer-silk-terracotta'  // Traditional Khmer Silk & Amber (សូត្រខ្មែរ)
  | 'khmer-minimal-ivory'    // Pure Minimalist Ivory & Gold (សាមញ្ញប្រណិត)
  // 2. Global World Collections
  | 'french-rose-gold'       // Paris French Romantic Rose Gold & Lace
  | 'modern-sage-botanical'  // Tuscany Modern Sage Green & Botanical Garden
  | 'black-tie-luxury'       // NYC Black Tie Luxury Onyx & Champagne Gold
  | 'boho-terracotta'        // Bohemian Terracotta & Sunburst Pampas Grass
  | 'tropical-beach'         // Bali / Hawaii Ocean Breeze & Tropical Coral
  | 'zen-cherry-blossom'     // Tokyo Zen Garden & Soft Cherry Blossom
  // Legacy
  | 'floral-rose'
  | 'modern-sage'
  | 'royal-gold';

export type FontStyle = 'khmer-moul' | 'khmer-koulen' | 'khmer-sans' | 'playfair' | 'cormorant' | 'cinzel';

export interface CouplePerson {
  fullName: string;
  fullNameKhmer?: string;
  nickname: string;
  nicknameKhmer?: string;
  fatherName: string;
  fatherNameKhmer?: string;
  motherName: string;
  motherNameKhmer?: string;
  photoUrl: string;
  instagram?: string;
  telegram?: string;
  childOrderText: string;
  childOrderTextKhmer?: string;
}

export interface WeddingEvent {
  id: string;
  title: string;          // e.g. "Holy Matrimony" / "ពិធីហែជំនូន"
  titleKhmer?: string;
  date: string;           // "2026-11-28"
  dateKhmer?: string;
  startTime: string;      // "07:30"
  endTime: string;        // "11:00"
  timeZone: string;       // "ICT" | "EST" | "CET" | "GMT+7"
  venueName: string;
  address: string;
  mapsUrl: string;
  mapsEmbedUrl?: string;
  livestreamUrl?: string;
}

export interface LoveStoryItem {
  id: string;
  year: string;
  title: string;
  titleKhmer?: string;
  description: string;
  descriptionKhmer?: string;
  imageUrl?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption?: string;
}

export interface DigitalGift {
  id: string;
  type: 
    | 'aba_khqr' 
    | 'wing_khqr' 
    | 'acleda_khqr' 
    | 'paypal' 
    | 'wise' 
    | 'zelle' 
    | 'venmo' 
    | 'bank' 
    | 'gift_address';
  providerName: string;   // "ABA Bank KHQR", "PayPal", "Wise Transfer", "Zelle", "Venmo", "Bank Wire"
  accountNumber: string;  // "paypal.me/couple" or account number / IBAN
  accountHolder: string;  // "Visal & Thida"
  qrCodeUrl?: string;
  note?: string;
}

export interface GuestItem {
  id: string;
  name: string;
  nameKhmer?: string;
  phone?: string;
  telegram?: string;
  email?: string;
  group: 'VIP' | 'Family' | 'Colleague' | 'Friends';
  slug: string;
  status: 'pending' | 'attending' | 'declined';
  pax?: number;
  message?: string;
  updatedAt?: string;
}

export interface WishMessage {
  id: string;
  guestName: string;
  attendance: 'attending' | 'declined' | 'tentative';
  pax: number;
  message: string;
  createdAt: string;
}

export interface WeddingInvitationData {
  id: string;
  slug: string;
  templateId: string;
  locale?: SupportedLocale;
  title: string;
  titleKhmer: string;
  greetingText: string;
  greetingTextKhmer?: string;
  quote: {
    text: string;
    textKhmer?: string;
    source: string;
    sourceKhmer?: string;
  };
  theme: WeddingTheme;
  fontStyle: FontStyle;
  soundtrack: {
    title: string;
    artist: string;
    audioUrl: string;
  };
  groom: CouplePerson;
  bride: CouplePerson;
  events: WeddingEvent[];
  loveStories: LoveStoryItem[];
  gallery: GalleryPhoto[];
  gifts: DigitalGift[];
  dressCode?: {
    title: string;
    titleKhmer?: string;
    description: string;
    descriptionKhmer?: string;
    colors: string[];
  };
  rsvpDeadline?: string;
  rsvpDeadlineKhmer?: string;
  wishes: WishMessage[];
  guests: GuestItem[];
}
