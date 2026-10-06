import { WeddingInvitationData } from '@/types/wedding';

// 1. Template: Traditional Khmer Royal Gold (រាជវង្សបុរាណ)
export const KHMER_ROYAL_WEDDING: WeddingInvitationData = {
  id: 'visal-thida',
  slug: 'visal-thida',
  templateId: 'khmer-royal-gold',
  title: 'The Wedding of Visal & Thida',
  titleKhmer: 'សិរីសួស្តី អាពាហ៍ពិពាហ៍',
  greetingText: 'We cordially invite you to celebrate the traditional wedding ceremony and auspicious union of our children:',
  greetingTextKhmer: 'យើងខ្ញុំជាមាតាបិតាទាំងសងខាង មានកិត្តិយសដ៏ខ្ពង់ខ្ពស់សូមគោរពអញ្ជើញ ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្តជិតឆ្ងាយ អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរីមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍កូនប្រុស-កូនស្រីរបស់យើងខ្ញុំ៖',
  quote: {
    text: 'A great marriage is not when the perfect couple comes together. It is when an imperfect couple learns to enjoy their differences.',
    textKhmer: '«សេចក្តីស្រឡាញ់ គឺជាចំណងមាសដែលចងភ្ជាប់បេះដូងពីរឱ្យរួមរស់ជាមួយគ្នាដោយសុភមង្គល យោគយល់ និងការគោរពគ្នាទៅវិញទៅមកអស់មួយជីវិត»',
    source: 'Khmer Blessing',
    sourceKhmer: 'ពរជ័យជ័យមង្គលខ្មែរ'
  },
  theme: 'khmer-royal-gold',
  fontStyle: 'khmer-moul',
  soundtrack: {
    title: 'ភ្លេងការខ្មែរ - របាំជូនពរ & កាត់សក់បង្កក់សិរី',
    artist: 'Traditional Khmer Wedding Music',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_c976932a39.mp3?filename=romantic-piano-wedding-111883.mp3'
  },
  groom: {
    fullName: 'SOK VISAL',
    fullNameKhmer: 'សុខ វិសាល',
    nickname: 'Visal',
    nicknameKhmer: 'វិសាល',
    fatherName: 'Mr. SOK CHANTHA',
    fatherNameKhmer: 'លោកឪពុក សុខ ចាន់ថា',
    motherName: 'Mrs. HENG SOPHEAP',
    motherNameKhmer: 'អ្នកម្តាយ ហេង សុភាព',
    childOrderText: 'Eldest Son of',
    childOrderTextKhmer: 'កូនប្រុសច្បង',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    telegram: 'visal_sok',
    instagram: 'visal_sok'
  },
  bride: {
    fullName: 'CHAN THIDA',
    fullNameKhmer: 'ចាន់ ធីតា',
    nickname: 'Thida',
    nicknameKhmer: 'ធីតា',
    fatherName: 'Mr. CHAN RITHY',
    fatherNameKhmer: 'លោកឪពុក ចាន់ រិទ្ធី',
    motherName: 'Mrs. OUM VANDY',
    motherNameKhmer: 'អ្នកម្តាយ អ៊ុំ វ៉ាន់ឌី',
    childOrderText: 'Second Daughter of',
    childOrderTextKhmer: 'កូនស្រីទី២',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    telegram: 'thida_chan',
    instagram: 'thida_chan'
  },
  events: [
    {
      id: 'event-1',
      title: 'ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត & ពិធីហែជំនូន',
      titleKhmer: 'ពិធីសូត្រមន្ត & ពិធីហែជំនូន (Groom Procession)',
      date: '2026-11-28',
      dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      startTime: '07:00 ព្រឹក',
      endTime: '09:30 ព្រឹក',
      timeZone: 'ICT',
      venueName: 'គេហដ្ឋានខាងស្រី (Bride Residence)',
      address: 'ផ្ទះលេខ ៨៨ ផ្លូវលេខ ៣១០ សង្កាត់បឹងកេងកង១ ខណ្ឌបឹងកេងកង រាជធានីភ្នំពេញ',
      mapsUrl: 'https://maps.google.com/?q=Phnom+Penh',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125139.73977328966!2d104.81971775!3d11.57966395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh'
    },
    {
      id: 'event-2',
      title: 'ពិធីកាត់សក់បង្កក់សិរី & ចងដៃជូនពរ',
      titleKhmer: 'ពិធីកាត់សក់បង្កក់សិរី & ចងដៃ (Hair Cutting & Khat Dai)',
      date: '2026-11-28',
      dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      startTime: '09:30 ព្រឹក',
      endTime: '11:30 ព្រឹក',
      timeZone: 'ICT',
      venueName: 'គេហដ្ឋានខាងស្រី (Bride Residence)',
      address: 'ផ្ទះលេខ ៨៨ ផ្លូវលេខ ៣១០ សង្កាត់បឹងកេងកង១ ខណ្ឌបឹងកេងកង រាជធានីភ្នំពេញ',
      mapsUrl: 'https://maps.google.com/?q=Phnom+Penh'
    },
    {
      id: 'event-3',
      title: 'ពិធីពិសាភោជនាហារ និងរាំកម្សាន្ត',
      titleKhmer: 'ពិធីពិសាភោជនាហារ (Wedding Reception Banquet)',
      date: '2026-11-28',
      dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      startTime: '05:00 ល្ងាច',
      endTime: '10:00 យប់',
      timeZone: 'ICT',
      venueName: 'មជ្ឈមណ្ឌលសន្និបាត និងពិព័រណ៍ The Premier Centre Sen Sok (អាគារ F)',
      address: 'ផ្លូវ ១០០៣ សង្កាត់ភ្នំពេញថ្មី ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ',
      mapsUrl: 'https://maps.google.com/?q=The+Premier+Centre+Sen+Sok+Phnom+Penh',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125139.73977328966!2d104.81971775!3d11.57966395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh'
    }
  ],
  loveStories: [
    {
      id: 'story-1',
      year: '២០២០',
      title: 'ថ្ងៃជួបគ្នាដំបូង (First Meeting)',
      titleKhmer: 'ថ្ងៃជួបគ្នាដំបូងនៅសាកលវិទ្យាល័យ',
      description: 'ពួកយើងបានជួបគ្នាជាលើកដំបូងនៅក្នុងបណ្ណាល័យសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)។ ស្នាមញញឹមដ៏ស្រទន់ និងការជជែកគ្នាយ៉ាងស្និទ្ធស្នាលបានក្លាយជាចំណុចចាប់ផ្តើមនៃរឿងរ៉ាវដ៏ស្រស់ស្អាត។',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'story-2',
      year: '២០២៣',
      title: 'ដំណើរកម្សាន្តនៅប្រាសាទអង្គរវត្ត (Journey of Love)',
      titleKhmer: 'ដំណើរកម្សាន្តនៅប្រាសាទអង្គរវត្ត',
      description: 'ដំណើរកម្សាន្តរួមគ្នាទៅកាន់ខេត្តសៀមរាប។ នៅពីមុខប្រាសាទអង្គរវត្តដ៏ពិសិដ្ឋ ពួកយើងបានសន្យាថានឹងកាន់ដៃគ្នាក្នុងគ្រប់កាលៈទេសៈនៃជីវិត។',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'story-3',
      year: '២០២៥',
      title: 'ពាក្យថាយល់ព្រម (She Said Yes!)',
      titleKhmer: 'ពាក្យសន្យាអនាគតរួមគ្នា',
      description: 'នៅមាត់ឆ្នេរកោះរ៉ុង ខេត្តព្រះសីហនុ វិសាលបានលុតជង្គង់សុំធីតារៀបការ។ ធីតាបានឆ្លើយយល់ព្រមទាំងទឹកភ្នែកនៃក្តីរំភើប និងស្នាមញញឹមយ៉ាងមានសុភមង្គល។',
      imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop'
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      caption: 'ស្នេហ៍ពិតស្ថិតនៅជាមួយគ្នាជានិច្ច'
    },
    {
      id: 'gal-2',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      caption: 'ស្នាមញញឹមនៃក្តីសង្ឃឹម'
    },
    {
      id: 'gal-3',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      caption: 'ក្តីស្រឡាញ់ដ៏បរិសុទ្ធ'
    },
    {
      id: 'gal-4',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
      caption: 'ថ្ងៃដ៏វិសេសវិសាលរបស់យើង'
    },
    {
      id: 'gal-5',
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      caption: 'ពន្លឺព្រះអាទិត្យអស្តង្គតនៅកោះរ៉ុង'
    },
    {
      id: 'gal-6',
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
      caption: 'សេចក្តីសុខក្នុងបេះដូង'
    }
  ],
  gifts: [
    {
      id: 'gift-1',
      type: 'aba_khqr',
      providerName: 'ABA Bank KHQR (Bakong)',
      accountNumber: '001 892 345 (USD / KHR)',
      accountHolder: 'SOK VISAL',
      note: 'ស្កេន KHQR តាមកម្មវិធីធនាគារណាក៏បាន (Any Banking App)'
    },
    {
      id: 'gift-2',
      type: 'wing_khqr',
      providerName: 'Wing Bank KHQR',
      accountNumber: '098 765 432',
      accountHolder: 'CHAN THIDA',
      note: 'វេរប្រាក់តាម Wing Bank'
    },
    {
      id: 'gift-3',
      type: 'acleda_khqr',
      providerName: 'ACLEDA Bank KHQR',
      accountNumber: '2400-01928374-1',
      accountHolder: 'SOK VISAL & CHAN THIDA',
      note: 'អេស៊ីលីដាទាន់ចិត្ត ACLEDA Mobile'
    }
  ],
  dressCode: {
    title: 'សម្លៀកបំពាក់ & ពណ៌ប្រពៃណី (Dress Code)',
    titleKhmer: 'ពណ៌សម្លៀកបំពាក់កិត្តិយស',
    description: 'ភ្ញៀវកិត្តិយសអាចស្លៀកសម្លៀកបំពាក់ប្រពៃណីខ្មែរ ឬឈុតសមរម្យតាមពណ៌មាស ពណ៌ផ្កាឈូក ឬពណ៌ធម្មជាតិ៖',
    colors: ['#D4AF37', '#F5E1B5', '#E2849D', '#2C3E50', '#8F9779']
  },
  rsvpDeadline: '20 November 2026',
  rsvpDeadlineKhmer: 'ថ្ងៃទី២០ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
  wishes: [
    {
      id: 'wish-1',
      guestName: 'ឯកឧត្តម លី ចាន់ថន & លោកជំទាវ',
      attendance: 'attending',
      pax: 2,
      message: 'សូមប្រសិទ្ធពរជ័យសិរីមង្គល វិបុលសុខ មហាប្រសើរ ជូនដល់ក្មួយប្រុសវិសាល និងក្មួយស្រីធីតា ស្រឡាញ់គ្នារហូតដល់ចាស់កោងខ្នង រកស៊ីមានបាន ត្រជាក់ត្រជុំដូចទឹកអង្គរ!',
      createdAt: '១ ម៉ោងមុន'
    },
    {
      id: 'wish-2',
      guestName: 'បងប្អូន និងមិត្តរួមការងារ Smart Axiata',
      attendance: 'attending',
      pax: 4,
      message: 'អបអរសាទរមង្គលការបងវិសាល និងប្អូនស្រីធីតា! សុំឱ្យប្តីប្រពន្ធថ្មីទទួលបានសុភមង្គលពេញលេញ ឆាប់បានកូនប្រុសស្រីគួរឱ្យស្រឡាញ់!',
      createdAt: '៣ ម៉ោងមុន'
    },
    {
      id: 'wish-3',
      guestName: 'កញ្ញា សុខ ស្រីពេជ្រ',
      attendance: 'attending',
      pax: 1,
      message: 'Happy Wedding idol Thida! ស្អាតខ្លាំងណាស់ថ្ងៃនេះ សូមជូនពរឱ្យមានសុភមង្គលជារៀងរហូតណា ❤️',
      createdAt: 'ម្សិលមិញ'
    }
  ],
  guests: [
    {
      id: 'guest-1',
      name: 'ឯកឧត្តម លី ចាន់ថន & លោកជំទាវ',
      nameKhmer: 'ឯកឧត្តម លី ចាន់ថន & លោកជំទាវ',
      phone: '012999888',
      telegram: 'ly_chanthorn',
      group: 'VIP',
      slug: 'ly-chanthorn',
      status: 'attending',
      pax: 2,
      message: 'នឹងអញ្ជើញចូលរួមជាកិត្តិយស',
      updatedAt: '2026-10-06'
    },
    {
      id: 'guest-2',
      name: 'លោក ហេង ពិសិដ្ឋ និងភរិយា',
      nameKhmer: 'លោក ហេង ពិសិដ្ឋ និងភរិយា',
      phone: '010555666',
      telegram: 'piseth_heng',
      group: 'Family',
      slug: 'heng-piseth',
      status: 'pending',
      pax: 2,
      updatedAt: '2026-10-05'
    },
    {
      id: 'guest-3',
      name: 'កញ្ញា សុខ ស្រីពេជ្រ',
      nameKhmer: 'កញ្ញា សុខ ស្រីពេជ្រ',
      phone: '098123456',
      telegram: 'sreypech_sok',
      group: 'Friends',
      slug: 'sok-sreypech',
      status: 'attending',
      pax: 1,
      updatedAt: '2026-10-04'
    },
    {
      id: 'guest-4',
      name: 'ក្រុមការងារ ABA Bank Head Office',
      nameKhmer: 'ក្រុមការងារ ABA Bank Head Office',
      phone: '077889900',
      telegram: 'aba_colleagues',
      group: 'Colleague',
      slug: 'aba-colleagues',
      status: 'pending',
      pax: 5,
      updatedAt: '2026-10-03'
    }
  ]
};

// 2. Preset Template: Angkor Lotus Romance (ផ្កាឈូកអង្គរ)
export const PRESET_ANGKOR_LOTUS: WeddingInvitationData = {
  ...KHMER_ROYAL_WEDDING,
  id: 'dara-bopha',
  slug: 'dara-bopha',
  templateId: 'khmer-angkor-lotus',
  title: 'The Wedding of Meng Dara & Kong Bopha',
  theme: 'khmer-angkor-lotus',
  groom: {
    ...KHMER_ROYAL_WEDDING.groom,
    fullName: 'MENG DARA',
    fullNameKhmer: 'ម៉េង ដារ៉ា',
    nickname: 'Dara',
    nicknameKhmer: 'ដារ៉ា',
    childOrderTextKhmer: 'កូនប្រុសទី២',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop'
  },
  bride: {
    ...KHMER_ROYAL_WEDDING.bride,
    fullName: 'KONG BOPHA',
    fullNameKhmer: 'គង់ បុប្ផា',
    nickname: 'Bopha',
    nicknameKhmer: 'បុប្ផា',
    childOrderTextKhmer: 'កូនស្រីច្បង',
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop'
  }
};

// 3. Preset Template: Modern Emerald Jade (ត្បូងមរកត)
export const PRESET_EMERALD: WeddingInvitationData = {
  ...KHMER_ROYAL_WEDDING,
  id: 'ratanak-socheata',
  slug: 'ratanak-socheata',
  templateId: 'khmer-modern-emerald',
  title: 'The Wedding of Chea Ratanak & Oum Socheata',
  theme: 'khmer-modern-emerald',
  groom: {
    ...KHMER_ROYAL_WEDDING.groom,
    fullName: 'CHEA RATANAK',
    fullNameKhmer: 'ជា រតនៈ',
    nickname: 'Ratanak',
    nicknameKhmer: 'រតនៈ',
    photoUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop'
  },
  bride: {
    ...KHMER_ROYAL_WEDDING.bride,
    fullName: 'OUM SOCHEATA',
    fullNameKhmer: 'អ៊ុំ សុជាតា',
    nickname: 'Socheata',
    nicknameKhmer: 'សុជាតា',
    photoUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop'
  }
};

// 4. Preset Template: Midnight Starlight (រាត្រីតារា)
export const PRESET_MIDNIGHT: WeddingInvitationData = {
  ...KHMER_ROYAL_WEDDING,
  id: 'seyha-muniroth',
  slug: 'seyha-muniroth',
  templateId: 'khmer-midnight-star',
  title: 'The Wedding of Tae Seyha & Heng Muniroth',
  theme: 'khmer-midnight-star',
  groom: {
    ...KHMER_ROYAL_WEDDING.groom,
    fullName: 'TAE SEYHA',
    fullNameKhmer: 'តែ សីហា',
    nickname: 'Seyha',
    nicknameKhmer: 'សីហា',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
  },
  bride: {
    ...KHMER_ROYAL_WEDDING.bride,
    fullName: 'HENG MUNIROTH',
    fullNameKhmer: 'ហេង មុន្នីរ័ត្ន',
    nickname: 'Muniroth',
    nicknameKhmer: 'មុន្នីរ័ត្ន',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop'
  }
};

// 5. Preset Template: Traditional Khmer Silk (សូត្រខ្មែរ)
export const PRESET_SILK: WeddingInvitationData = {
  ...KHMER_ROYAL_WEDDING,
  id: 'vibol-devi',
  slug: 'vibol-devi',
  templateId: 'khmer-silk-terracotta',
  title: 'The Wedding of Ouk Vibol & Sorn Devi',
  theme: 'khmer-silk-terracotta',
  groom: {
    ...KHMER_ROYAL_WEDDING.groom,
    fullName: 'OUK VIBOL',
    fullNameKhmer: 'អ៊ុក វិបុល',
    nickname: 'Vibol',
    nicknameKhmer: 'វិបុល'
  },
  bride: {
    ...KHMER_ROYAL_WEDDING.bride,
    fullName: 'SORN DEVI',
    fullNameKhmer: 'ស៊ន ទេវី',
    nickname: 'Devi',
    nicknameKhmer: 'ទេវី'
  }
};

// All available templates registry for easy selection
export const ALL_PRESET_WEDDINGS: Record<string, WeddingInvitationData> = {
  'visal-thida': KHMER_ROYAL_WEDDING,
  'dara-bopha': PRESET_ANGKOR_LOTUS,
  'ratanak-socheata': PRESET_EMERALD,
  'seyha-muniroth': PRESET_MIDNIGHT,
  'vibol-devi': PRESET_SILK
};

export const DEFAULT_WEDDING = KHMER_ROYAL_WEDDING;
