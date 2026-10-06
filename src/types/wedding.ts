export type WeddingTheme = 
  // Khmer Dedicated Templates
  | 'khmer-royal-gold'      // Traditional Royal Golden Heritage (រាជវង្សបុរាណ)
  | 'khmer-angkor-lotus'     // Angkor Lotus Romance (ផ្កាឈូកអង្គរ)
  | 'khmer-modern-emerald'   // Modern Emerald Jade & Gold (ត្បូងមរកត)
  | 'khmer-midnight-star'    // Majestic Midnight Starlight (រាត្រីតារា)
  | 'khmer-silk-terracotta'  // Traditional Khmer Silk & Amber (សូត្រខ្មែរ)
  | 'khmer-minimal-ivory'    // Pure Minimalist Ivory & Gold (សាមញ្ញប្រណិត)
  // Additional Modern International
  | 'floral-rose'
  | 'modern-sage'
  | 'royal-gold';

export type FontStyle = 'khmer-moul' | 'khmer-koulen' | 'khmer-sans' | 'playfair';

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
  childOrderTextKhmer?: string; // e.g. "កូនប្រុសច្បងរបស់" / "កូនស្រីពៅរបស់"
}

export interface WeddingEvent {
  id: string;
  title: string;          // e.g. "ពិធីហែជំនូន & កាត់សក់បង្កក់សិរី"
  titleKhmer?: string;
  date: string;           // "2026-11-28"
  dateKhmer?: string;     // e.g. "ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦"
  startTime: string;      // "07:30"
  endTime: string;        // "11:00"
  timeZone: string;       // "ICT" | "GMT+7"
  venueName: string;      // e.g. "The Premier Centre Sen Sok"
  address: string;        // e.g. "រាជធានីភ្នំពេញ (Phnom Penh)"
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
  type: 'aba_khqr' | 'wing_khqr' | 'acleda_khqr' | 'bank' | 'gift_address';
  providerName: string;   // "ABA Bank KHQR", "Wing Bank", "ACLEDA Bank"
  accountNumber: string;  // "000 123 456"
  accountHolder: string;  // "SOK VISAL"
  qrCodeUrl?: string;
  note?: string;
}

export interface GuestItem {
  id: string;
  name: string;
  nameKhmer?: string;
  phone?: string;
  telegram?: string;
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
  title: string;
  titleKhmer: string; // "សិរីសួស្តី អាពាហ៍ពិពាហ៍"
  greetingText: string;
  greetingTextKhmer: string;
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
