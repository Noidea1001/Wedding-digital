export type SupportedLocale = 'km' | 'en';

export interface TranslationDictionary {
  theWeddingOf: string;
  auspiciousBlessing: string;
  openInvitation: string;
  clickToOpen: string;
  honoredGuest: string;
  invitedGreeting: string;
  apologyNotice: string;
  saveTheDate: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  saveToCalendar: string;
  dayHasArrived: string;
  groomTitle: string;
  brideTitle: string;
  sonOf: string;
  daughterOf: string;
  parentsOfBoth: string;
  and: string;
  eventsSchedule: string;
  scheduleDesc: string;
  date: string;
  time: string;
  venue: string;
  getDirections: string;
  dressCode: string;
  loveStoryTitle: string;
  loveStoryDesc: string;
  galleryTitle: string;
  galleryDesc: string;
  weddingGiftTitle: string;
  weddingGiftDesc: string;
  accountNumber: string;
  accountHolder: string;
  copied: string;
  copyNumber: string;
  copyAddress: string;
  scanQrText: string;
  rsvpTitle: string;
  rsvpDesc: string;
  yourName: string;
  namePlaceholder: string;
  confirmation: string;
  attending: string;
  declined: string;
  numberOfPax: string;
  blessingMessage: string;
  messagePlaceholder: string;
  sendRsvp: string;
  sending: string;
  thankYouMessage: string;
  sendAnother: string;
  guestbookTitle: string;
  noWishesYet: string;
  thankYouGratitude: string;
  warmRegards: string;
  bothFamilies: string;
  templates: string;
  selectTemplate: string;
  shareVia: string;
  navHome: string;
  navCouple: string;
  navEvents: string;
  navStory: string;
  navGallery: string;
  navGift: string;
  navRsvp: string;
  father: string;
  mother: string;
  groomResidence: string;
  brideResidence: string;
}

export const DICTIONARIES: Record<SupportedLocale, TranslationDictionary> = {
  // 1. Pure Traditional Khmer (ភាសាខ្មែរ) - Strictly 100% Khmer
  km: {
    theWeddingOf: 'ពិធីមង្គលការរបស់',
    auspiciousBlessing: 'សិរីសួស្តី ជ័យមង្គល វិបុលសុខ មហាប្រសើរ',
    openInvitation: 'បើកសំបុត្រអញ្ជើញ',
    clickToOpen: 'ចុចដើម្បីបើកសំបុត្រ និងចាក់ភ្លេងការ',
    honoredGuest: 'ភ្ញៀវកិត្តិយស',
    invitedGreeting: 'សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា',
    apologyNotice: '*សូមអធ្យាស្រ័យចំពោះការខ្វះខាតក្នុងឈ្មោះ ឬងារកិត្តិយស',
    saveTheDate: 'កាលបរិច្ឆេទមង្គល',
    days: 'ថ្ងៃ',
    hours: 'ម៉ោង',
    minutes: 'នាទី',
    seconds: 'វិនាទី',
    saveToCalendar: 'កត់ត្រាក្នុងប្រតិទិន Google',
    dayHasArrived: 'ថ្ងៃមង្គលដ៏វិសេសវិសាលបានមកដល់ហើយ!',
    groomTitle: 'កូនកំលោះ',
    brideTitle: 'កូនក្រមុំ',
    sonOf: 'កូនប្រុសរបស់',
    daughterOf: 'កូនស្រីរបស់',
    parentsOfBoth: 'មាតាបិតាទាំងសងខាង',
    and: '&',
    eventsSchedule: 'កម្មវិធីបុណ្យអាពាហ៍ពិពាហ៍',
    scheduleDesc: 'យើងខ្ញុំសូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមតាមពេលវេលា និងទីកន្លែងដូចខាងក្រោម៖',
    date: 'កាលបរិច្ឆេទ',
    time: 'ពេលវេលា',
    venue: 'ទីតាំង',
    getDirections: 'មើលទីតាំងលើផែនទី',
    dressCode: 'សម្លៀកបំពាក់ និងពណ៌ប្រពៃណី',
    loveStoryTitle: 'ប្រវត្តិដំណើររឿងស្នេហ៍',
    loveStoryDesc: 'រាល់ជំហាននៃក្តីស្រឡាញ់ គឺជាអនុស្សាវរីយ៍ដ៏មានតម្លៃមិនអាចកាត់ថ្លៃបាន',
    galleryTitle: 'រូបថតអនុស្សាវរីយ៍',
    galleryDesc: 'ពេលវេលាដ៏ស្រស់ស្អាតបំផុតក្នុងជីវិតរបស់យើងខ្ញុំ',
    weddingGiftTitle: 'ចំណងដៃអាពាហ៍ពិពាហ៍',
    weddingGiftDesc: 'វត្តមាន និងពរជ័យដ៏ថ្លៃថ្លារបស់លោកអ្នក គឺជាកាដូដ៏មានតម្លៃបំផុតសម្រាប់យើងខ្ញុំ។ ប្រសិនបើលោកអ្នកមានបំណងចងដៃតាមប្រព័ន្ធឌីជីថល៖',
    accountNumber: 'លេខគណនីធនាគារ',
    accountHolder: 'ឈ្មោះម្ចាស់គណនី',
    copied: 'បានចម្លងរួចរាល់!',
    copyNumber: 'ចម្លងលេខគណនី',
    copyAddress: 'ចម្លងអាសយដ្ឋាន',
    scanQrText: 'ស្កេន KHQR គ្រប់ធនាគារទាំងអស់នៅកម្ពុជា',
    rsvpTitle: 'បញ្ជាក់វត្តមាន និងសៀវភៅជូនពរ',
    rsvpDesc: 'សូមមេត្តាបញ្ជាក់វត្តមានរបស់លោកអ្នក ដើម្បីភាពងាយស្រួលក្នុងការរៀបចំទទួលបដិសណ្ឋារកិច្ច',
    yourName: 'ឈ្មោះរបស់លោកអ្នក *',
    namePlaceholder: 'ឧទាហរណ៍៖ ឯកឧត្តម សុខ ចាន់ថន ឬ លោក ហេង ពិសិដ្ឋ',
    confirmation: 'ការបញ្ជាក់វត្តមាន *',
    attending: 'ចូលរួមដោយសេចក្តីសោមនស្ស',
    declined: 'មិនអាចចូលរួមបានដោយអភ័យទោស',
    numberOfPax: 'ចំនួនភ្ញៀវចូលរួម',
    blessingMessage: 'ពាក្យជូនពរសិរីមង្គល *',
    messagePlaceholder: 'សូមសរសេរពាក្យជូនពរជ័យសិរីមង្គលដល់គូស្វាមីភរិយាថ្មី...',
    sendRsvp: 'ផ្ញើការបញ្ជាក់វត្តមាន & ពរជ័យ',
    sending: 'កំពុងផ្ញើ...',
    thankYouMessage: 'សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅ!',
    sendAnother: 'ផ្ញើសារជូនពរបន្ថែម',
    guestbookTitle: 'សៀវភៅពរជ័យមង្គល',
    noWishesYet: 'មិនទាន់មានពាក្យជូនពរនៅឡើយទេ។ សូមក្លាយជាអ្នកដំបូងដែលផ្តល់ពរជ័យ!',
    thankYouGratitude: 'ថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅ',
    warmRegards: 'ដោយក្តីគោរពរាប់អានដ៏ខ្ពង់ខ្ពស់ពី',
    bothFamilies: 'ព្រមទាំងមាតាបិតាទាំងសងខាង',
    templates: 'រចនាប័ទ្មសំបុត្រ',
    selectTemplate: 'ជ្រើសរើសរចនាប័ទ្ម',
    shareVia: 'ផ្ញើសំបុត្រតាម',
    navHome: 'ទំព័រដើម',
    navCouple: 'គូស្នេហ៍',
    navEvents: 'កម្មវិធី',
    navStory: 'ប្រវត្តិ',
    navGallery: 'រូបថត',
    navGift: 'ចំណងដៃ',
    navRsvp: 'ជូនពរ',
    father: 'លោកឪពុក',
    mother: 'អ្នកម្តាយ',
    groomResidence: 'គេហដ្ឋានខាងប្រុស',
    brideResidence: 'គេហដ្ឋានខាងស្រី'
  },

  // 2. Pure International English (English) - Strictly 100% English
  en: {
    theWeddingOf: 'The Wedding Celebration of',
    auspiciousBlessing: 'Love, Joy & Forever Together',
    openInvitation: 'Open Invitation',
    clickToOpen: 'Tap to open the invitation & play romantic music',
    honoredGuest: 'Honored Guest',
    invitedGreeting: 'Cordially Inviting',
    apologyNotice: '*Please excuse any unintentional typographical errors in names or titles',
    saveTheDate: 'Save The Date',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Mins',
    seconds: 'Secs',
    saveToCalendar: 'Save to Google Calendar',
    dayHasArrived: 'The Joyful Day Has Arrived!',
    groomTitle: 'The Groom',
    brideTitle: 'The Bride',
    sonOf: 'Son of',
    daughterOf: 'Daughter of',
    parentsOfBoth: 'Parents of the Couple',
    and: '&',
    eventsSchedule: 'Wedding Day Schedule',
    scheduleDesc: 'Together with our families, we joyfully invite you to celebrate with us:',
    date: 'Date',
    time: 'Time',
    venue: 'Venue',
    getDirections: 'Get Directions (Google Maps)',
    dressCode: 'Dress Code & Attire',
    loveStoryTitle: 'Our Love Story',
    loveStoryDesc: 'Every step together has brought us to this unforgettable beginning.',
    galleryTitle: 'Photo Moments',
    galleryDesc: 'Captured memories of our journey toward forever.',
    weddingGiftTitle: 'Wedding Gift & Blessings',
    weddingGiftDesc: 'Your presence and prayers are our greatest gift. Should you wish to honor us with a token of love:',
    accountNumber: 'Account / Card / IBAN',
    accountHolder: 'Account Holder',
    copied: 'Copied Successfully!',
    copyNumber: 'Copy Number',
    copyAddress: 'Copy Address',
    scanQrText: 'Scan QR Code via any banking or payment app',
    rsvpTitle: 'RSVP & Guestbook',
    rsvpDesc: 'Kindly let us know if you can make it so we may plan our banquet seamlessly.',
    yourName: 'Your Full Name *',
    namePlaceholder: 'e.g. John Doe & Guest',
    confirmation: 'Attendance Confirmation *',
    attending: 'Accepts with Pleasure',
    declined: 'Declines with Regret',
    numberOfPax: 'Number of Guests',
    blessingMessage: 'Warm Wishes & Blessings *',
    messagePlaceholder: 'Share your warm wishes and words of congratulations...',
    sendRsvp: 'Submit RSVP & Wishes',
    sending: 'Sending...',
    thankYouMessage: 'Thank You So Much!',
    sendAnother: 'Send another wish',
    guestbookTitle: 'Live Guestbook',
    noWishesYet: 'No wishes yet. Be the first to share your blessing!',
    thankYouGratitude: 'With Our Sincerest Gratitude',
    warmRegards: 'With all our love,',
    bothFamilies: 'Together with Our Families',
    templates: 'Templates',
    selectTemplate: 'Choose Theme Template',
    shareVia: 'Share via',
    navHome: 'Home',
    navCouple: 'Couple',
    navEvents: 'Events',
    navStory: 'Story',
    navGallery: 'Gallery',
    navGift: 'Gifts',
    navRsvp: 'RSVP',
    father: 'Father',
    mother: 'Mother',
    groomResidence: "Groom's Residence",
    brideResidence: "Bride's Residence"
  }
};

/** Convert western digits to Khmer digits */
export function toKhmerNumber(num: number | string): string {
  const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return String(num).replace(/[0-9]/g, (d) => khmerDigits[parseInt(d, 10)] ?? d);
}

/** Format a date string strictly in Khmer or strictly in English */
export function formatLocalizedWeddingDate(dateStr: string, locale: SupportedLocale): string {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;

  if (locale === 'km') {
    const months = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
    const days = ['ថ្ងៃអាទិត្យ', 'ថ្ងៃចន្ទ', 'ថ្ងៃអង្គារ', 'ថ្ងៃពុធ', 'ថ្ងៃព្រហស្បតិ៍', 'ថ្ងៃសុក្រ', 'ថ្ងៃសៅរ៍'];
    const dayName = days[d.getDay()];
    const dateNum = toKhmerNumber(d.getDate());
    const monthName = months[d.getMonth()];
    const yearNum = toKhmerNumber(d.getFullYear());
    return `${dayName} ទី${dateNum} ខែ${monthName} ឆ្នាំ${yearNum}`;
  } else {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}
