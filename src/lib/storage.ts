import { WeddingInvitationData, WishMessage, GuestItem } from '@/types/wedding';
import { DEFAULT_WEDDING, ALL_PRESET_WEDDINGS } from './mockData';

const STORAGE_KEY_PREFIX = 'digital_wedding_khmer_';

export function getWeddingData(slug: string = 'visal-thida'): WeddingInvitationData {
  if (typeof window === 'undefined') {
    return ALL_PRESET_WEDDINGS[slug] || DEFAULT_WEDDING;
  }

  try {
    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${slug}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed reading wedding data from localStorage:', e);
  }

  return ALL_PRESET_WEDDINGS[slug] || DEFAULT_WEDDING;
}

export function saveWeddingData(data: WeddingInvitationData): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${data.slug}`, JSON.stringify(data));
    window.dispatchEvent(new Event('wedding-data-updated'));
  } catch (e) {
    console.error('Failed saving wedding data:', e);
  }
}

export function addWish(
  slug: string,
  wish: { guestName: string; attendance: 'attending' | 'declined' | 'tentative'; pax: number; message: string }
): WishMessage {
  const current = getWeddingData(slug);
  const newWish: WishMessage = {
    id: `wish-${Date.now()}`,
    guestName: wish.guestName,
    attendance: wish.attendance,
    pax: wish.pax,
    message: wish.message,
    createdAt: 'អម្បាញ់មិញ (Just now)'
  };

  const updated: WeddingInvitationData = {
    ...current,
    wishes: [newWish, ...(current.wishes || [])]
  };

  if (updated.guests) {
    const matchedGuestIndex = updated.guests.findIndex(
      (g) => g.name.toLowerCase().trim() === wish.guestName.toLowerCase().trim()
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
  const updatedGuests = (current.guests || []).map((g) => (g.id === guestId ? { ...g, ...updates } : g));

  const updated: WeddingInvitationData = {
    ...current,
    guests: updatedGuests
  };

  saveWeddingData(updated);
}

export function deleteGuest(slug: string, guestId: string): void {
  const current = getWeddingData(slug);
  const updatedGuests = (current.guests || []).filter((g) => g.id !== guestId);

  const updated: WeddingInvitationData = {
    ...current,
    guests: updatedGuests
  };

  saveWeddingData(updated);
}

// Khmer Wedding Invitation Share Messages
export function generateKhmerShareMessage(guestName: string, coupleNameKhmer: string, inviteUrl: string): string {
  const msg = `សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា
*${guestName}*

យើងខ្ញុំមានកិត្តិយសដ៏ខ្ពង់ខ្ពស់សូមគោរពអញ្ជើញ ចូលរួមក្នុងពិធីសិរីសួស្តីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ៖

💍 *${coupleNameKhmer}*

សូមចុចតំណភ្ជាប់ខាងក្រោមដើម្បីមើលសំបុត្រអញ្ជើញ កម្មវិធីបុណ្យ ទីតាំង និងបញ្ជាក់វត្តមាន (RSVP)៖
${inviteUrl}

វត្តមានដ៏ឧត្តុង្គឧត្តមរបស់លោកអ្នក គឺជាកិត្តិយសដ៏ធំធេងសម្រាប់យើងខ្ញុំ និងក្រុមគ្រួសារទាំងសងខាង។

សូមអរគុណយ៉ាងជ្រាលជ្រៅ!
ដោយសេចក្តីគោរពរាប់អានដ៏ខ្ពង់ខ្ពស់,
*${coupleNameKhmer}*`;

  return encodeURIComponent(msg);
}

// 1. Telegram Broadcast Link (Widely used in Cambodia)
export function generateTelegramLink(guestName: string, coupleNameKhmer: string, inviteUrl: string): string {
  const text = generateKhmerShareMessage(guestName, coupleNameKhmer, inviteUrl);
  return `https://t.me/share/url?url=${encodeURIComponent(inviteUrl)}&text=${text}`;
}

// 2. WhatsApp Broadcast Link
export function generateWhatsAppLink(
  phone: string | undefined,
  guestName: string,
  coupleNameKhmer: string,
  inviteUrl: string
): string {
  const cleanPhone = phone ? phone.replace(/[^0-9]/g, '') : '';
  const formattedPhone = cleanPhone.startsWith('0') ? '855' + cleanPhone.slice(1) : cleanPhone;
  const encodedText = generateKhmerShareMessage(guestName, coupleNameKhmer, inviteUrl);

  if (formattedPhone) {
    return `https://wa.me/${formattedPhone}?text=${encodedText}`;
  }
  return `https://wa.me/?text=${encodedText}`;
}
