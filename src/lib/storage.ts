import { WeddingInvitationData, WishMessage, GuestItem } from '@/types/wedding';
import { DEFAULT_WEDDING } from './mockData';

const STORAGE_KEY_PREFIX = 'digital_wedding_app_';

export function getWeddingData(slug: string = 'sarah-david'): WeddingInvitationData {
  if (typeof window === 'undefined') {
    return DEFAULT_WEDDING;
  }

  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${slug}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed reading wedding data from localStorage:', e);
  }

  return DEFAULT_WEDDING;
}

export function saveWeddingData(data: WeddingInvitationData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${data.slug}`, JSON.stringify(data));
    // Trigger custom event so any active hook/subscriber can update immediately
    window.dispatchEvent(new Event('wedding-data-updated'));
  } catch (e) {
    console.error('Failed saving wedding data:', e);
  }
}

export function addWish(slug: string, wish: { guestName: string; attendance: 'attending' | 'declined' | 'tentative'; pax: number; message: string }): WishMessage {
  const current = getWeddingData(slug);
  const newWish: WishMessage = {
    id: `wish-${Date.now()}`,
    guestName: wish.guestName,
    attendance: wish.attendance,
    pax: wish.pax,
    message: wish.message,
    createdAt: 'Baru saja'
  };

  const updated: WeddingInvitationData = {
    ...current,
    wishes: [newWish, ...(current.wishes || [])]
  };

  // If matching guest exists in guest list, update their status as well
  if (updated.guests) {
    const matchedGuestIndex = updated.guests.findIndex(
      g => g.name.toLowerCase().trim() === wish.guestName.toLowerCase().trim()
    );
    if (matchedGuestIndex >= 0) {
      updated.guests[matchedGuestIndex] = {
        ...updated.guests[matchedGuestIndex],
        status: wish.attendance === 'attending' ? 'attending' : 'declined',
        pax: wish.pax,
        message: wish.message,
        updatedAt: new Date().toISOString().split('T')[0]
      };
    }
  }

  saveWeddingData(updated);
  return newWish;
}

export function addGuest(slug: string, guest: Omit<GuestItem, 'id'>): GuestItem {
  const current = getWeddingData(slug);
  const newGuest: GuestItem = {
    ...guest,
    id: `guest-${Date.now()}`
  };

  const updated: WeddingInvitationData = {
    ...current,
    guests: [...(current.guests || []), newGuest]
  };

  saveWeddingData(updated);
  return newGuest;
}

export function updateGuest(slug: string, guestId: string, updates: Partial<GuestItem>): void {
  const current = getWeddingData(slug);
  const updatedGuests = (current.guests || []).map(g => (g.id === guestId ? { ...g, ...updates } : g));

  const updated: WeddingInvitationData = {
    ...current,
    guests: updatedGuests
  };

  saveWeddingData(updated);
}

export function deleteGuest(slug: string, guestId: string): void {
  const current = getWeddingData(slug);
  const updatedGuests = (current.guests || []).filter(g => g.id !== guestId);

  const updated: WeddingInvitationData = {
    ...current,
    guests: updatedGuests
  };

  saveWeddingData(updated);
}

export function generateWhatsAppMessage(guestName: string, coupleName: string, inviteUrl: string): string {
  const msg = `Kepada Yth.
*${guestName}*

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:

💍 *${coupleName}*

Untuk informasi lengkap mengenai jadwal acara, lokasi, dan konfirmasi kehadiran, silakan kunjungi tautan undangan digital berikut:
${inviteUrl}

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.

Terima kasih.
Salam hangat,
*${coupleName}*`;

  return encodeURIComponent(msg);
}

export function generateWhatsAppLink(phone: string | undefined, guestName: string, coupleName: string, inviteUrl: string): string {
  const cleanPhone = phone ? phone.replace(/[^0-9]/g, '') : '';
  const formattedPhone = cleanPhone.startsWith('0') ? '62' + cleanPhone.slice(1) : cleanPhone;
  const encodedText = generateWhatsAppMessage(guestName, coupleName, inviteUrl);

  if (formattedPhone) {
    return `https://wa.me/${formattedPhone}?text=${encodedText}`;
  }
  return `https://wa.me/?text=${encodedText}`;
}
