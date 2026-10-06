export type SupportedLocale = 'km' | 'en' | 'fr' | 'zh' | 'id';

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
}

export const DICTIONARIES: Record<SupportedLocale, TranslationDictionary> = {
  // 1. Khmer (ភាសាខ្មែរ)
  km: {
    theWeddingOf: 'ពិធីមង្គលការរបស់',
    auspiciousBlessing: 'សិរីសួស្តី ជ័យមង្គល វិបុលសុខ',
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
    saveToCalendar: 'កត់ត្រាក្នុង Google Calendar',
    dayHasArrived: 'ថ្ងៃមង្គលដ៏វិសេសវិសាលបានមកដល់ហើយ!',
    groomTitle: 'កូនកំលោះ',
    brideTitle: 'កូនក្រមុំ',
    sonOf: 'កូនប្រុសរបស់',
    daughterOf: 'កូនស្រីរបស់',
    parentsOfBoth: 'មាតាបិតាទាំងសងខាង',
    and: '&',
    eventsSchedule: 'កម្មវិធីបុណ្យអាពាហ៍ពិពាហ៍',
    scheduleDesc: 'យើងខ្ញុំសូមគោរពអញ្ជើញចូលរួមតាមពេលវេលា និងទីកន្លែងដូចខាងក្រោម៖',
    date: 'កាលបរិច្ឆេទ',
    time: 'ពេលវេលា',
    venue: 'ទីតាំង',
    getDirections: 'មើលផែនទី (Google Maps)',
    dressCode: 'សម្លៀកបំពាក់ & ពណ៌ប្រពៃណី',
    loveStoryTitle: 'ប្រវត្តិដំណើររឿងស្នេហ៍',
    loveStoryDesc: 'រាល់ជំហាននៃក្តីស្រឡាញ់ គឺជាអនុស្សាវរីយ៍ដ៏មានតម្លៃមិនអាចកាត់ថ្លៃបាន',
    galleryTitle: 'រូបថតអនុស្សាវរីយ៍',
    galleryDesc: 'ពេលវេលាដ៏ស្រស់ស្អាតបំផុតក្នុងជីវិតរបស់យើងខ្ញុំ',
    weddingGiftTitle: 'ចំណងដៃអាពាហ៍ពិពាហ៍ (Digital Gift)',
    weddingGiftDesc: 'វត្តមាន និងពរជ័យរបស់លោកអ្នក គឺជាកាដូដ៏មានតម្លៃបំផុត។ ប្រសិនបើលោកអ្នកមានបំណងចងដៃតាមប្រព័ន្ធឌីជីថល៖',
    accountNumber: 'លេខគណនី / KHQR',
    accountHolder: 'ឈ្មោះម្ចាស់គណនី',
    copied: 'បានចម្លងរួចរាល់!',
    copyNumber: 'ចម្លងលេខគណនី',
    copyAddress: 'ចម្លងអាសយដ្ឋាន',
    scanQrText: 'ស្កេន KHQR / PayWay តាមកម្មវិធីធនាគារណាក៏បាន',
    rsvpTitle: 'បញ្ជាក់វត្តមាន & សៀវភៅជូនពរ',
    rsvpDesc: 'សូមមេត្តាបញ្ជាក់វត្តមានរបស់លោកអ្នកដើម្បីភាពងាយស្រួលក្នុងការរៀបចំទទួលបដិសណ្ឋារកិច្ច',
    yourName: 'ឈ្មោះរបស់លោកអ្នក *',
    namePlaceholder: 'ឧទាហរណ៍៖ ឯកឧត្តម សុខ ចាន់ថន ឬ លោក ហេង ពិសិដ្ឋ',
    confirmation: 'ការបញ្ជាក់វត្តមាន *',
    attending: 'ចូលរួម (Attending)',
    declined: 'អវត្តមាន (Decline)',
    numberOfPax: 'ចំនួនភ្ញៀវចូលរួម (Pax)',
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
    templates: 'ម៉ូតសំបុត្រ (Templates)',
    selectTemplate: 'ជ្រើសរើសម៉ូតគំរូ',
    shareVia: 'ផ្ញើសំបុត្រតាម',
    navHome: 'ទំព័រដើម',
    navCouple: 'មង្គលការ',
    navEvents: 'កម្មវិធីបុណ្យ',
    navStory: 'ប្រវត្តិស្នេហ៍',
    navGallery: 'រូបថត',
    navGift: 'ចំណងដៃ',
    navRsvp: 'ជូនពរ'
  },

  // 2. English (Global)
  en: {
    theWeddingOf: 'The Wedding Celebration of',
    auspiciousBlessing: 'Love, Joy & Forever Together',
    openInvitation: 'Open Invitation',
    clickToOpen: 'Tap to open invitation & play romantic music',
    honoredGuest: 'Honored Guest',
    invitedGreeting: 'Cordially Inviting',
    apologyNotice: '*Please excuse any typo in spelling or titles',
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
    weddingGiftTitle: 'Wedding Gift & Registry',
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
    numberOfPax: 'Number of Guests (Pax)',
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
    navRsvp: 'RSVP'
  },

  // 3. French (Français)
  fr: {
    theWeddingOf: 'Le Mariage de',
    auspiciousBlessing: 'Amour, Bonheur et Éternité',
    openInvitation: 'Ouvrir l’Invitation',
    clickToOpen: 'Cliquez pour ouvrir l’invitation et lancer la musique',
    honoredGuest: 'Invité d’Honneur',
    invitedGreeting: 'Nous avons l’honneur d’inviter',
    apologyNotice: '*Veuillez nous excuser pour toute coquille de titre',
    saveTheDate: 'Réservez la Date',
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Min',
    seconds: 'Sec',
    saveToCalendar: 'Enregistrer dans Google Calendar',
    dayHasArrived: 'Le grand jour est enfin arrivé !',
    groomTitle: 'Le Marié',
    brideTitle: 'La Mariée',
    sonOf: 'Fils de',
    daughterOf: 'Fille de',
    parentsOfBoth: 'Les Parents des Mariés',
    and: '&',
    eventsSchedule: 'Programme de la Journée',
    scheduleDesc: 'Avec leurs familles, nous serions ravis de votre présence :',
    date: 'Date',
    time: 'Heure',
    venue: 'Lieu',
    getDirections: 'Itinéraire (Google Maps)',
    dressCode: 'Code Vestimentaire',
    loveStoryTitle: 'Notre Histoire d’Amour',
    loveStoryDesc: 'Chaque pas ensemble nous a guidés vers ce nouveau chapitre.',
    galleryTitle: 'Galerie Photos',
    galleryDesc: 'Instants précieux et souvenirs inoubliables.',
    weddingGiftTitle: 'Liste de Mariage & Enveloppe',
    weddingGiftDesc: 'Votre présence est le plus beau des cadeaux. Si vous souhaitez nous témoigner votre affection :',
    accountNumber: 'Numéro de Compte / IBAN',
    accountHolder: 'Titulaire du Compte',
    copied: 'Copié avec succès !',
    copyNumber: 'Copier le numéro',
    copyAddress: 'Copier l’adresse',
    scanQrText: 'Scannez le QR Code pour envoyer votre cadeau',
    rsvpTitle: 'Confirmation & Livre d’Or',
    rsvpDesc: 'Merci de bien vouloir confirmer votre présence pour nous aider dans l’organisation.',
    yourName: 'Votre Nom Complet *',
    namePlaceholder: 'ex: Julien et Sophie Martin',
    confirmation: 'Votre Présence *',
    attending: 'Participera avec joie',
    declined: 'Empêché avec regret',
    numberOfPax: 'Nombre de personnes (Pax)',
    blessingMessage: 'Vos Meilleurs Vœux *',
    messagePlaceholder: 'Écrivez un mot chaleureux pour les mariés...',
    sendRsvp: 'Envoyer ma Réponse',
    sending: 'Envoi en cours...',
    thankYouMessage: 'Merci infiniment !',
    sendAnother: 'Envoyer un autre mot',
    guestbookTitle: 'Livre d’Or des Invités',
    noWishesYet: 'Aucun message pour l’instant. Soyez le premier à féliciter les mariés !',
    thankYouGratitude: 'Avec Toute Notre Gratitude',
    warmRegards: 'Chaleureusement,',
    bothFamilies: 'Et les familles des mariés',
    templates: 'Thèmes',
    selectTemplate: 'Sélectionner le Thème',
    shareVia: 'Partager via',
    navHome: 'Accueil',
    navCouple: 'Mariés',
    navEvents: 'Programme',
    navStory: 'Histoire',
    navGallery: 'Galerie',
    navGift: 'Cadeaux',
    navRsvp: 'RSVP'
  },

  // 4. Chinese (中文)
  zh: {
    theWeddingOf: '我们结婚啦',
    auspiciousBlessing: '百年好合 永结同心',
    openInvitation: '开启喜帖',
    clickToOpen: '点击开启专属电子喜帖并播放浪漫音乐',
    honoredGuest: '尊贵的贵宾',
    invitedGreeting: '诚挚邀请 阁下',
    apologyNotice: '*如有称谓疏漏之处敬请海涵',
    saveTheDate: '婚礼倒计时',
    days: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒',
    saveToCalendar: '添加至谷歌日历',
    dayHasArrived: '幸福的大喜之日已经到来！',
    groomTitle: '新郎',
    brideTitle: '新娘',
    sonOf: '之长子',
    daughterOf: '之爱女',
    parentsOfBoth: '双方父母敬约',
    and: '&',
    eventsSchedule: '婚礼日程安排',
    scheduleDesc: '谨定于良辰吉日举行结婚典礼，恭候您的光临：',
    date: '日期',
    time: '时间',
    venue: '地点',
    getDirections: '导航路线 (Google Maps)',
    dressCode: '着装要求 (Dress Code)',
    loveStoryTitle: '我们的爱情故事',
    loveStoryDesc: '从相识到相知，愿往后余生与你携手同行。',
    galleryTitle: '甜蜜婚纱照',
    galleryDesc: '定格心动瞬间，见证幸福永恒。',
    weddingGiftTitle: '心意礼金与祝福',
    weddingGiftDesc: '您的到来与祝福是我们最好的礼物。若您想转达心意礼金：',
    accountNumber: '银行账号 / 扫码付款',
    accountHolder: '收款人姓名',
    copied: '已成功复制！',
    copyNumber: '复制账号',
    copyAddress: '复制地址',
    scanQrText: '支持银行扫码或转账付款',
    rsvpTitle: '宾客回执 (RSVP) & 祝福留言',
    rsvpDesc: '为方便统筹酒席与座位，敬请于吉日前确认您的行程。',
    yourName: '您的姓名 *',
    namePlaceholder: '例如：李先生及夫人',
    confirmation: '出席确认 *',
    attending: '准时出席 (Attending)',
    declined: '遗憾缺席 (Decline)',
    numberOfPax: '出席人数 (Pax)',
    blessingMessage: '祝贺留言 *',
    messagePlaceholder: '为新人送上最诚挚的祝福...',
    sendRsvp: '提交出席回执与祝福',
    sending: '正在发送...',
    thankYouMessage: '非常感谢您的祝福！',
    sendAnother: '再留一条祝福',
    guestbookTitle: '宾客祝福墙',
    noWishesYet: '暂无留言，快来成为第一个送上祝福的人吧！',
    thankYouGratitude: '衷心感谢您的光临与见证',
    warmRegards: '新人敬上，',
    bothFamilies: '暨全体家属同鞠躬',
    templates: '模板样式',
    selectTemplate: '选择设计主题',
    shareVia: '分享至',
    navHome: '首页',
    navCouple: '新人',
    navEvents: '日程',
    navStory: '故事',
    navGallery: '相册',
    navGift: '礼金',
    navRsvp: '回执'
  },

  // 5. Indonesian / Malay (Bahasa)
  id: {
    theWeddingOf: 'Pernikahan Bahagia',
    auspiciousBlessing: 'Maha Suci Tuhan yang Menciptakan Cinta',
    openInvitation: 'Buka Undangan',
    clickToOpen: 'Tekan untuk membuka undangan & memutar audio',
    honoredGuest: 'Tamu Undangan',
    invitedGreeting: 'Kepada Yth. Bapak/Ibu/Saudara/i',
    apologyNotice: '*Mohon maaf bila ada kesalahan dalam penulisan nama/gelar',
    saveTheDate: 'Save The Date',
    days: 'Hari',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
    saveToCalendar: 'Simpan ke Google Calendar',
    dayHasArrived: 'Hari Bahagia Telah Tiba!',
    groomTitle: 'Mempelai Pria',
    brideTitle: 'Mempelai Wanita',
    sonOf: 'Putra dari',
    daughterOf: 'Putri dari',
    parentsOfBoth: 'Orang Tua Kedua Mempelai',
    and: '&',
    eventsSchedule: 'Rangkaian Acara',
    scheduleDesc: 'Dengan sukacita kami mengundang kehadiran Bapak/Ibu/Saudara/i pada serangkaian prosesi kami:',
    date: 'Tanggal',
    time: 'Waktu',
    venue: 'Lokasi',
    getDirections: 'Petunjuk Arah (Google Maps)',
    dressCode: 'Dress Code & Nuansa Warna',
    loveStoryTitle: 'Kisah Cinta Kami',
    loveStoryDesc: 'Setiap kisah cinta itu indah, namun kisah cinta kitalah yang paling istimewa.',
    galleryTitle: 'Galeri Kenangan',
    galleryDesc: 'Momen-momen indah yang terabadikan dalam setiap langkah perjalanan cinta kami.',
    weddingGiftTitle: 'Wedding Gift & Amplop Digital',
    weddingGiftDesc: 'Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda berkenan memberikan tanda kasih:',
    accountNumber: 'Nomor Rekening / E-Wallet',
    accountHolder: 'Atas Nama',
    copied: 'Berhasil Tersalin!',
    copyNumber: 'Salin Nomor Rekening',
    copyAddress: 'Salin Alamat Lengkap',
    scanQrText: 'Scan QRIS menggunakan mobile banking atau e-wallet',
    rsvpTitle: 'RSVP & Buku Tamu',
    rsvpDesc: 'Mohon konfirmasi kehadiran Anda demi kelancaran jamuan kami.',
    yourName: 'Nama Anda *',
    namePlaceholder: 'Contoh: Budi Santoso & Partner',
    confirmation: 'Konfirmasi Kehadiran *',
    attending: 'Hadir',
    declined: 'Berhalangan',
    numberOfPax: 'Jumlah Tamu (Pax)',
    blessingMessage: 'Ucapan & Doa Restu *',
    messagePlaceholder: 'Tuliskan ucapan selamat dan doa terbaik untuk kedua mempelai...',
    sendRsvp: 'Kirim RSVP & Ucapan',
    sending: 'Mengirim...',
    thankYouMessage: 'Terima Kasih Banyak!',
    sendAnother: 'Kirim pesan lainnya',
    guestbookTitle: 'Buku Doa Tamu',
    noWishesYet: 'Belum ada ucapan. Jadilah yang pertama memberikan doa restu!',
    thankYouGratitude: 'Ungkapan Terima Kasih',
    warmRegards: 'Kami yang berbahagia,',
    bothFamilies: 'Beserta Keluarga Besar Kedua Mempelai',
    templates: 'Pilihan Tema',
    selectTemplate: 'Pilih Template Undangan',
    shareVia: 'Bagikan Lewat',
    navHome: 'Home',
    navCouple: 'Mempelai',
    navEvents: 'Acara',
    navStory: 'Cerita',
    navGallery: 'Galeri',
    navGift: 'Kado',
    navRsvp: 'RSVP'
  }
};
