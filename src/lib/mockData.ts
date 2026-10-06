import { WeddingInvitationData } from '@/types/wedding';

// 1. Template: Traditional Khmer Royal Gold (រាជវង្សបុរាណ) - Cambodia
export const KHMER_ROYAL_WEDDING: WeddingInvitationData = {
  id: 'visal-thida',
  slug: 'visal-thida',
  templateId: 'khmer-royal-gold',
  locale: 'km',
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
  coverPhotoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
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
      title: "Buddhist Blessing & Groom's Procession",
      titleKhmer: 'ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត & ពិធីហែជំនូន',
      date: '2026-11-28',
      dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      startTime: '07:00 AM',
      endTime: '09:30 AM',
      timeZone: 'ICT',
      venueName: "Bride's Residence",
      venueNameKhmer: 'គេហដ្ឋានខាងស្រី',
      address: 'House #88, Street 310, Boeung Keng Kang 1, Phnom Penh',
      addressKhmer: 'ផ្ទះលេខ ៨៨ ផ្លូវលេខ ៣១០ សង្កាត់បឹងកេងកង១ រាជធានីភ្នំពេញ',
      mapsUrl: 'https://maps.google.com/?q=Phnom+Penh',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125139.73977328966!2d104.81971775!3d11.57966395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh'
    },
    {
      id: 'event-2',
      title: 'Traditional Hair-Cutting & Sacred Knot-Tying',
      titleKhmer: 'ពិធីកាត់សក់បង្កក់សិរី & សំពះផ្ទឹម ចងដៃ',
      date: '2026-11-28',
      dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      startTime: '09:30 AM',
      endTime: '11:30 AM',
      timeZone: 'ICT',
      venueName: "Bride's Residence",
      venueNameKhmer: 'គេហដ្ឋានខាងស្រី',
      address: 'House #88, Street 310, Boeung Keng Kang 1, Phnom Penh',
      addressKhmer: 'ផ្ទះលេខ ៨៨ ផ្លូវលេខ ៣១០ សង្កាត់បឹងកេងកង១ រាជធានីភ្នំពេញ',
      mapsUrl: 'https://maps.google.com/?q=Phnom+Penh'
    },
    {
      id: 'event-3',
      title: 'Wedding Banquet Reception & Celebration',
      titleKhmer: 'ពិធីពិសាភោជនាហារ និងរាំកម្សាន្ត',
      date: '2026-11-28',
      dateKhmer: 'ថ្ងៃសៅរ៍ ទី២៨ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      startTime: '05:00 PM',
      endTime: '10:00 PM',
      timeZone: 'ICT',
      venueName: 'The Premier Centre Sen Sok (Building F)',
      venueNameKhmer: 'មជ្ឈមណ្ឌល The Premier Centre Sen Sok (អាគារ F)',
      address: 'Street 1003, Sangkat Phnom Penh Thmey, Khan Sen Sok, Phnom Penh',
      addressKhmer: 'ផ្លូវ ១០០៣ សង្កាត់ភ្នំពេញថ្មី ខណ្ឌសែនសុខ រាជធានីភ្នំពេញ',
      mapsUrl: 'https://maps.google.com/?q=The+Premier+Centre+Sen+Sok+Phnom+Penh',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125139.73977328966!2d104.81971775!3d11.57966395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh'
    }
  ],
  loveStories: [
    {
      id: 'story-1',
      year: '២០២០',
      title: 'First Meeting in Phnom Penh',
      titleKhmer: 'ថ្ងៃជួបគ្នាដំបូងនៅសាកលវិទ្យាល័យ',
      description: 'ពួកយើងបានជួបគ្នាជាលើកដំបូងនៅក្នុងបណ្ណាល័យសាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ (RUPP)។ ស្នាមញញឹមដ៏ស្រទន់ និងការជជែកគ្នាយ៉ាងស្និទ្ធស្នាលបានក្លាយជាចំណុចចាប់ផ្តើមនៃរឿងរ៉ាវដ៏ស្រស់ស្អាត។',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'story-2',
      year: '២០២៣',
      title: 'Journey to Angkor Wat',
      titleKhmer: 'ដំណើរកម្សាន្តនៅប្រាសាទអង្គរវត្ត',
      description: 'ដំណើរកម្សាន្តរួមគ្នាទៅកាន់ខេត្តសៀមរាប។ នៅពីមុខប្រាសាទអង្គរវត្តដ៏ពិសិដ្ឋ ពួកយើងបានសន្យាថានឹងកាន់ដៃគ្នាក្នុងគ្រប់កាលៈទេសៈនៃជីវិត។',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'story-3',
      year: '២០២៥',
      title: 'She Said Yes on Koh Rong Beach',
      titleKhmer: 'ពាក្យសន្យាអនាគតរួមគ្នា',
      description: 'នៅមាត់ឆ្នេរកោះរ៉ុង វិសាលបានលុតជង្គង់សុំធីតារៀបការ។ ធីតាបានឆ្លើយយល់ព្រមទាំងទឹកភ្នែកនៃក្តីរំភើប និងស្នាមញញឹមយ៉ាងមានសុភមង្គល។',
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
    }
  ],
  gifts: [
    {
      id: 'gift-1',
      type: 'aba_khqr',
      providerName: 'ABA Bank KHQR',
      providerNameKhmer: 'ធនាគារ អេប៊ីអេ (ABA KHQR)',
      accountNumber: '001 892 345',
      accountHolder: 'SOK VISAL',
      note: 'Scan with any Cambodian banking app (Bakong)',
      noteKhmer: 'ស្កេនទូទាត់តាមកម្មវិធីធនាគារគ្រប់ស្ថាប័ន (បាគង)'
    },
    {
      id: 'gift-2',
      type: 'paypal',
      providerName: 'PayPal International',
      providerNameKhmer: 'គណនី ផេផល (PayPal)',
      accountNumber: 'paypal.me/visalthida',
      accountHolder: 'Visal & Thida',
      note: 'International transfer via PayPal',
      noteKhmer: 'ផ្ញើចំណងដៃអន្តរជាតិតាម PayPal'
    },
    {
      id: 'gift-3',
      type: 'wise',
      providerName: 'Wise Multi-Currency Wire',
      providerNameKhmer: 'គណនី វ៉ាយស៍ (Wise)',
      accountNumber: 'wise.com/pay/me/visalsok',
      accountHolder: 'SOK VISAL',
      note: 'Direct transfer in USD, EUR or GBP',
      noteKhmer: 'ផ្ទេរប្រាក់អន្តរជាតិជារូបិយប័ណ្ណ USD, EUR ឬ GBP'
    }
  ],
  dressCode: {
    title: 'Dress Code & Nuances',
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
      guestName: 'David & Catherine (Singapore)',
      attendance: 'attending',
      pax: 2,
      message: 'Huge congratulations Visal & Thida! So excited to fly over to Phnom Penh for your big day!',
      createdAt: '3 hours ago'
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
      message: 'នឹងអញ្ជើញចូលរួមជាកិត្តិយស'
    },
    {
      id: 'guest-2',
      name: 'David Wong & Partner',
      phone: '+6591234567',
      email: 'david.wong@gmail.com',
      group: 'Colleague',
      slug: 'david-wong',
      status: 'attending',
      pax: 2
    }
  ]
};

// 2. Preset: Angkor Lotus Romance (ផ្កាឈូកអង្គរ)
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
    nicknameKhmer: 'ដារ៉ា'
  },
  bride: {
    ...KHMER_ROYAL_WEDDING.bride,
    fullName: 'KONG BOPHA',
    fullNameKhmer: 'គង់ បុប្ផា',
    nickname: 'Bopha',
    nicknameKhmer: 'បុប្ផា'
  }
};

// 3. Preset: French Rose Gold & Lace (Paris Romance) - Europe
export const PRESET_FRENCH_ROSE: WeddingInvitationData = {
  id: 'julien-charlotte',
  slug: 'julien-charlotte',
  templateId: 'french-rose-gold',
  locale: 'en',
  title: 'The Wedding of Julien & Charlotte',
  titleKhmer: 'អាពាហ៍ពិពាហ៍ Julien & Charlotte',
  greetingText: 'M. et Mme Laurent Dubois ainsi que M. et Mme Henri Moreau ont le plaisir de vous faire part du mariage de leurs enfants :',
  quote: {
    text: 'Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction.',
    source: 'Antoine de Saint-Exupéry'
  },
  theme: 'french-rose-gold',
  fontStyle: 'playfair',
  soundtrack: {
    title: 'La Vie en Rose (Romantic Piano Acoustic)',
    artist: 'Parisian Strings Ensemble',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_c976932a39.mp3?filename=romantic-piano-wedding-111883.mp3'
  },
  groom: {
    fullName: 'Julien Laurent Dubois',
    nickname: 'Julien',
    fatherName: 'Laurent Dubois',
    motherName: 'Élisabeth Dubois',
    childOrderText: 'Fils de',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    instagram: 'julien.dubois'
  },
  bride: {
    fullName: 'Charlotte Amélie Moreau',
    nickname: 'Charlotte',
    fatherName: 'Henri Moreau',
    motherName: 'Camille Moreau',
    childOrderText: 'Fille de',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    instagram: 'charlotte_moreau'
  },
  events: [
    {
      id: 'event-fr-1',
      title: 'Cérémonie Religieuse & Bénédiction',
      date: '2026-09-19',
      startTime: '14:30',
      endTime: '16:00',
      timeZone: 'CET',
      venueName: 'Basilique Sainte-Clotilde',
      address: '23 bis Rue Las Cases, 75007 Paris, France',
      mapsUrl: 'https://maps.google.com/?q=Paris'
    },
    {
      id: 'event-fr-2',
      title: 'Cocktail & Dîner de Réception',
      date: '2026-09-19',
      startTime: '18:00',
      endTime: '02:00',
      timeZone: 'CET',
      venueName: 'Château de Villette',
      address: 'Rue de la Maison Blanche, 95450 Condécourt, France',
      mapsUrl: 'https://maps.google.com/?q=Chateau+de+Villette+France'
    }
  ],
  loveStories: [
    {
      id: 'story-fr-1',
      year: '2021',
      title: 'Première Rencontre à Montmartre',
      description: 'Une après-midi pluvieuse dans un café parisien près du Sacré-Cœur, un café partagé et des heures de conversation passionnée.'
    },
    {
      id: 'story-fr-2',
      year: '2025',
      title: 'La Demande au Bord de la Seine',
      description: 'Sous les étoiles le long des quais de la Seine, avec la Tour Eiffel illuminée en arrière-plan, Julien a posé un genou à terre.'
    }
  ],
  gallery: [
    {
      id: 'gal-fr-1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
      caption: 'Pour toujours et à jamais'
    },
    {
      id: 'gal-fr-2',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200',
      caption: 'Notre amour à Paris'
    }
  ],
  gifts: [
    {
      id: 'gift-fr-1',
      type: 'paypal',
      providerName: 'Cagnotte de Mariage (PayPal)',
      accountNumber: 'paypal.me/juliencharlotte',
      accountHolder: 'Julien & Charlotte',
      note: 'Paiement sécurisé par carte ou PayPal'
    },
    {
      id: 'gift-fr-2',
      type: 'bank',
      providerName: 'Virement Bancaire (IBAN / SEPA)',
      accountNumber: 'FR76 3000 4000 5000 6000 7000 123',
      accountHolder: 'Julien Dubois',
      note: 'Virement compte à compte sans frais'
    }
  ],
  dressCode: {
    title: 'Code Vestimentaire',
    description: 'Tenue de cocktail élégante / Nuances pastel & rose poudré :',
    colors: ['#FCECEF', '#E398A8', '#D87088', '#2B2D42']
  },
  wishes: [
    {
      id: 'wish-fr-1',
      guestName: 'Antoine et Marie',
      attendance: 'attending',
      pax: 2,
      message: 'Toutes nos félicitations aux futurs mariés ! Nous avons tellement hâte de fêter ce moment magique avec vous !',
      createdAt: 'Il y a 2 jours'
    }
  ],
  guests: [
    {
      id: 'guest-fr-1',
      name: 'Antoine & Marie Lefèvre',
      phone: '+33612345678',
      group: 'Friends',
      slug: 'antoine-marie',
      status: 'attending',
      pax: 2
    }
  ]
};

// 4. Preset: Black Tie Luxury Onyx & Gold (New York / London)
export const PRESET_BLACK_TIE: WeddingInvitationData = {
  id: 'alexander-victoria',
  slug: 'alexander-victoria',
  templateId: 'black-tie-luxury',
  locale: 'en',
  title: 'The Wedding of Alexander & Victoria',
  titleKhmer: 'អាពាហ៍ពិពាហ៍ Alexander & Victoria',
  greetingText: 'Together with their families, Alexander Vance and Victoria Sterling request the honour of your presence at their marriage:',
  quote: {
    text: 'Whatever our souls are made of, his and mine are the same.',
    source: 'Emily Brontë'
  },
  theme: 'black-tie-luxury',
  fontStyle: 'cinzel',
  soundtrack: {
    title: 'Pachelbel Canon in D (Grand Symphony Orchestral)',
    artist: 'Metropolitan Strings NYC',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_2753229b38.mp3?filename=wedding-piano-10708.mp3'
  },
  groom: {
    fullName: 'Alexander James Vance',
    nickname: 'Alexander',
    fatherName: 'Lord Edward Vance',
    motherName: 'Lady Catherine Vance',
    childOrderText: 'Son of',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop'
  },
  bride: {
    fullName: 'Victoria Rose Sterling',
    nickname: 'Victoria',
    fatherName: 'Charles Sterling, Esq.',
    motherName: 'Eleanor Sterling',
    childOrderText: 'Daughter of',
    photoUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop'
  },
  events: [
    {
      id: 'event-bt-1',
      title: 'Solemn Matrimony Ceremony',
      date: '2026-10-24',
      startTime: '16:00',
      endTime: '17:30',
      timeZone: 'EST',
      venueName: 'The Plaza Hotel - Grand Ballroom',
      address: '768 5th Ave, New York, NY 10019, USA',
      mapsUrl: 'https://maps.google.com/?q=The+Plaza+New+York'
    },
    {
      id: 'event-bt-2',
      title: 'Black Tie Gala Dinner & Dancing',
      date: '2026-10-24',
      startTime: '18:30',
      endTime: '01:00',
      timeZone: 'EST',
      venueName: 'The Metropolitan Club',
      address: '1 E 60th St, New York, NY 10022, USA',
      mapsUrl: 'https://maps.google.com/?q=The+Metropolitan+Club+New+York'
    }
  ],
  loveStories: [
    {
      id: 'story-bt-1',
      year: '2022',
      title: 'Autumn in Central Park',
      description: 'A serendipitous encounter during the annual charity gala, sparked by a shared love for contemporary art and architecture.'
    }
  ],
  gallery: [
    {
      id: 'gal-bt-1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200',
      caption: 'A Night to Remember'
    }
  ],
  gifts: [
    {
      id: 'gift-bt-1',
      type: 'zelle',
      providerName: 'Zelle (US Bank Direct)',
      accountNumber: 'alex.vance@nycvance.com / (212) 555-0199',
      accountHolder: 'Alexander Vance',
      note: 'Instant fee-free US bank transfer'
    },
    {
      id: 'gift-bt-2',
      type: 'wise',
      providerName: 'International Wire (Wise)',
      accountNumber: 'US89 0000 1234 5678 9000 11',
      accountHolder: 'Alexander & Victoria Vance',
      note: 'USD / GBP / EUR Wire'
    }
  ],
  dressCode: {
    title: 'Dress Code',
    description: 'Strict Black Tie Attire (Tuxedos & Floor-Length Evening Gowns):',
    colors: ['#0E0E10', '#D4AF37', '#1A1A1E', '#FFFFFF']
  },
  wishes: [],
  guests: []
};

// 5. Preset: Tuscany Sage Botanical (Italy / California)
export const PRESET_SAGE_BOTANICAL: WeddingInvitationData = {
  ...PRESET_BLACK_TIE,
  id: 'oliver-sophia',
  slug: 'oliver-sophia',
  templateId: 'modern-sage-botanical',
  locale: 'en',
  title: 'The Wedding of Oliver & Sophia',
  theme: 'modern-sage-botanical',
  groom: {
    ...PRESET_BLACK_TIE.groom,
    fullName: 'Oliver William Hayes',
    nickname: 'Oliver'
  },
  bride: {
    ...PRESET_BLACK_TIE.bride,
    fullName: 'Sophia Grace Bennett',
    nickname: 'Sophia'
  }
};

// 6. Preset: Tropical Beach Sunset (Bali / Koh Rong)
export const PRESET_TROPICAL_BEACH: WeddingInvitationData = {
  ...KHMER_ROYAL_WEDDING,
  id: 'leo-maya',
  slug: 'leo-maya',
  templateId: 'tropical-beach',
  locale: 'en',
  title: 'The Wedding of Leo & Maya',
  theme: 'tropical-beach',
  groom: {
    ...KHMER_ROYAL_WEDDING.groom,
    fullName: 'Leo Alexander Smith',
    nickname: 'Leo'
  },
  bride: {
    ...KHMER_ROYAL_WEDDING.bride,
    fullName: 'Maya Linh Chen',
    nickname: 'Maya'
  }
};

// Registry of all worldwide presets
export const ALL_PRESET_WEDDINGS: Record<string, WeddingInvitationData> = {
  'visal-thida': KHMER_ROYAL_WEDDING,
  'dara-bopha': PRESET_ANGKOR_LOTUS,
  'julien-charlotte': PRESET_FRENCH_ROSE,
  'alexander-victoria': PRESET_BLACK_TIE,
  'oliver-sophia': PRESET_SAGE_BOTANICAL,
  'leo-maya': PRESET_TROPICAL_BEACH
};

export const DEFAULT_WEDDING = KHMER_ROYAL_WEDDING;
