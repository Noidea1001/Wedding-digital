import { WeddingInvitationData } from '@/types/wedding';

export const DEFAULT_WEDDING: WeddingInvitationData = {
  id: 'sarah-david',
  slug: 'sarah-david',
  title: 'The Wedding of Sarah & David',
  greetingText: 'Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan penuh rasa syukur dan memohon ridho-Nya, kami bermaksud menyelenggarakan syukuran pernikahan putra-putri kami tercinta:',
  quote: {
    text: '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."',
    source: 'QS. Ar-Rum: 21'
  },
  theme: 'floral-rose',
  fontStyle: 'playfair',
  soundtrack: {
    title: 'A Thousand Years (Piano Romantic)',
    artist: 'Wedding Melodies',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_c976932a39.mp3?filename=romantic-piano-wedding-111883.mp3'
  },
  groom: {
    fullName: 'David Pratama, S.Kom.',
    nickname: 'David',
    fatherName: 'Bpk. Ir. H. Bambang Pratama',
    motherName: 'Ibu Hj. Ratna Sari',
    childOrderText: 'Putra Pertama dari',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    instagram: 'davidpratama'
  },
  bride: {
    fullName: 'Sarah Aurelia, B.A.',
    nickname: 'Sarah',
    fatherName: 'Bpk. Drs. H. Hendra Wijaya',
    motherName: 'Ibu Hj. Maya Anggraini',
    childOrderText: 'Putri Kedua dari',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
    instagram: 'sarahaurelia'
  },
  events: [
    {
      id: 'event-1',
      title: 'Akad Nikah / Holy Matrimony',
      date: '2026-12-12',
      startTime: '08:00',
      endTime: '10:00',
      timeZone: 'WIB',
      venueName: 'Masjid Raya Al-Barkah & Grand Ballroom',
      address: 'Jl. Kemang Raya No. 45, Jakarta Selatan',
      mapsUrl: 'https://maps.google.com/?q=Jakarta',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08882046896!2d106.7412852!3d-6.2293867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e49fe3da0d%3A0x6b3060c239454157!2sJakarta%20Selatan!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
      livestreamUrl: 'https://youtube.com/live'
    },
    {
      id: 'event-2',
      title: 'Resepsi Pernikahan / Wedding Reception',
      date: '2026-12-12',
      startTime: '11:30',
      endTime: '15:00',
      timeZone: 'WIB',
      venueName: 'The Glass House Botanical Garden',
      address: 'Jl. Kemang Raya No. 45, Jakarta Selatan',
      mapsUrl: 'https://maps.google.com/?q=Jakarta',
      mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08882046896!2d106.7412852!3d-6.2293867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e49fe3da0d%3A0x6b3060c239454157!2sJakarta%20Selatan!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid'
    }
  ],
  loveStories: [
    {
      id: 'story-1',
      year: '2020',
      title: 'Pertemuan Pertama (First Meeting)',
      description: 'Takdir mempertemukan kami pertama kali di sebuah seminar desain kreatif di Jakarta. Obrolan singkat mengenai seni membawa kami ke percakapan yang tak berujung.',
      imageUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'story-2',
      year: '2022',
      title: 'Menjalin Komitmen (The Journey)',
      description: 'Dua tahun saling belajar memahami, mendukung cita-cita satu sama lain di saat suka maupun duka. Keyakinan untuk melangkah bersama semakin kuat.',
      imageUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'story-3',
      year: '2025',
      title: 'Lamaran Romantis (She Said Yes!)',
      description: 'Di bawah pemandangan matahari terbenam di tepi pantai Uluwatu, David melamar Sarah. Dengan air mata haru dan senyum bahagia, Sarah menjawab "Yes!".',
      imageUrl: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=800&auto=format&fit=crop'
    }
  ],
  gallery: [
    {
      id: 'gal-1',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      caption: 'Forever starts today'
    },
    {
      id: 'gal-2',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      caption: 'Serenity & Love'
    },
    {
      id: 'gal-3',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop',
      caption: 'In your eyes, I found home'
    },
    {
      id: 'gal-4',
      url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
      caption: 'The Promise of a Lifetime'
    },
    {
      id: 'gal-5',
      url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop',
      caption: 'Sunset in Uluwatu'
    },
    {
      id: 'gal-6',
      url: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?q=80&w=1200&auto=format&fit=crop',
      caption: 'Joy and Laughter'
    }
  ],
  gifts: [
    {
      id: 'gift-1',
      type: 'bank',
      providerName: 'BCA (Bank Central Asia)',
      accountNumber: '8410293847',
      accountHolder: 'Sarah Aurelia',
      note: 'Transfer Antar Bank BCA'
    },
    {
      id: 'gift-2',
      type: 'bank',
      providerName: 'Bank Mandiri',
      accountNumber: '1370019283748',
      accountHolder: 'David Pratama',
      note: 'Transfer Antar Bank Mandiri'
    },
    {
      id: 'gift-3',
      type: 'gift_address',
      providerName: 'Kirim Kado Fisik',
      accountNumber: 'Jl. Kemang Timur No. 12A, Mampang Prapatan, Jakarta Selatan 12730 (Penerima: Sarah & David / 081234567890)',
      accountHolder: 'Sarah & David',
      note: 'Alamat Pengiriman Kado Pernikahan'
    }
  ],
  dressCode: {
    title: 'Dress Code & Nuansa Warna',
    description: 'Tamu undangan dimohon mengenakan pakaian bernuansa Formal Pastel / Earth Tone:',
    colors: ['#F3E8EE', '#E2C2C6', '#8F9779', '#D4AF37', '#2C3E50']
  },
  rsvpDeadline: '10 Desember 2026',
  wishes: [
    {
      id: 'wish-1',
      guestName: 'Anisa & Dimas',
      attendance: 'attending',
      pax: 2,
      message: 'Selamat Sarah dan David! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia selalu selamanya!',
      createdAt: '2 jam yang lalu'
    },
    {
      id: 'wish-2',
      guestName: 'Budi Santoso & Partner',
      attendance: 'attending',
      pax: 2,
      message: 'Happy wedding bro David & Sarah! Lancar sampai hari H ya, insya Allah kami hadir meramaikan!',
      createdAt: '5 jam yang lalu'
    },
    {
      id: 'wish-3',
      guestName: 'Clarissa Valerie',
      attendance: 'attending',
      pax: 1,
      message: 'Cantik banget Sarah! Selamat menempuh hidup baru kalian berdua, langgeng sampai kakek nenek ❤️',
      createdAt: '1 hari yang lalu'
    }
  ],
  guests: [
    {
      id: 'guest-1',
      name: 'Budi Santoso & Keluarga',
      phone: '081234567890',
      group: 'VIP',
      slug: 'budi-santoso',
      status: 'attending',
      pax: 2,
      message: 'Insya Allah hadir!',
      updatedAt: '2026-10-05'
    },
    {
      id: 'guest-2',
      name: 'Dr. Michael & Rekan',
      phone: '081987654321',
      group: 'Colleague',
      slug: 'dr-michael',
      status: 'pending',
      pax: 1,
      updatedAt: '2026-10-04'
    },
    {
      id: 'guest-3',
      name: 'Anisa Rahmawati',
      phone: '081345678901',
      group: 'Friends',
      slug: 'anisa-rahmawati',
      status: 'attending',
      pax: 2,
      updatedAt: '2026-10-03'
    },
    {
      id: 'guest-4',
      name: 'Keluarga Besar Oma Rosita',
      phone: '081765432109',
      group: 'Family',
      slug: 'keluarga-oma-rosita',
      status: 'pending',
      pax: 4,
      updatedAt: '2026-10-02'
    }
  ]
};
