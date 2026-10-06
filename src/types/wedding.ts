export type WeddingTheme = 
  | 'floral-rose'      // Romantic blush pink & deep rose
  | 'modern-sage'      // Elegant sage green & gold
  | 'royal-gold'       // Luxurious navy & champagne gold
  | 'celestial-midnight' // Moody starry night & silver
  | 'rustic-terracotta'; // Warm earthy bohemian terracotta

export type FontStyle = 'playfair' | 'cormorant' | 'cinzel' | 'sans';

export interface CouplePerson {
  fullName: string;
  nickname: string;
  fatherName: string;
  motherName: string;
  photoUrl: string;
  instagram?: string;
  childOrderText: string; // e.g. "Putra Pertama dari" / "Son of"
}

export interface WeddingEvent {
  id: string;
  title: string;          // e.g. "Akad Nikah / Holy Matrimony"
  date: string;           // "2026-11-20"
  startTime: string;      // "09:00"
  endTime: string;        // "11:00"
  timeZone: string;       // "WIB" | "WITA" | "WIT" | "GMT+7"
  venueName: string;      // "The Glass House Garden"
  address: string;        // "Jl. Sudirman No. 123, Jakarta"
  mapsUrl: string;        // Google maps navigation link
  mapsEmbedUrl?: string;  // Embed iframe url
  livestreamUrl?: string;
}

export interface LoveStoryItem {
  id: string;
  year: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  caption?: string;
}

export interface DigitalGift {
  id: string;
  type: 'bank' | 'ewallet' | 'gift_address';
  providerName: string;   // "BCA", "Mandiri", "GoPay", "Alamat Penerima"
  accountNumber: string;  // "1234567890" or Address text
  accountHolder: string;  // "Sarah Jenkins"
  qrCodeUrl?: string;
  note?: string;
}

export interface GuestItem {
  id: string;
  name: string;
  phone?: string;
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
  title: string;
  greetingText: string; // "Dengan memohon rahmat dan ridho Tuhan..."
  quote: {
    text: string;
    source: string;
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
    description: string;
    colors: string[];
  };
  rsvpDeadline?: string;
  wishes: WishMessage[];
  guests: GuestItem[];
}
