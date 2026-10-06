export interface SoundtrackItem {
  id: string;
  title: string;
  artist: string;
  category: 'Khmer Traditional' | 'Romantic Piano' | 'Classical' | 'Acoustic' | 'Lo-Fi Chill';
  audioUrl: string;
}

export const SOUNDTRACK_PRESETS: SoundtrackItem[] = [
  {
    id: 'khmer-wedding-1',
    title: 'ភ្លេងការខ្មែរ - របាំជូនពរ & កាត់សក់បង្កក់សិរី',
    artist: 'Traditional Khmer Wedding Music',
    category: 'Khmer Traditional',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_c976932a39.mp3?filename=romantic-piano-wedding-111883.mp3'
  },
  {
    id: 'piano-canon',
    title: 'Canon in D (Romantic Piano Solo)',
    artist: 'Johann Pachelbel (Acoustic Arr.)',
    category: 'Classical',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_2753229b38.mp3?filename=wedding-piano-10708.mp3'
  },
  {
    id: 'acoustic-guitar-love',
    title: 'Endless Sunshine & Golden Vows',
    artist: 'Acoustic Romance Trio',
    category: 'Acoustic',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2021/08/04/audio_32c0282d1c.mp3?filename=acoustic-guitars-ambient-uplifting-11202.mp3'
  },
  {
    id: 'piano-a-thousand-years',
    title: 'A Thousand Years (Emotional Piano & Cello)',
    artist: 'Wedding Melodies International',
    category: 'Romantic Piano',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/05/16/audio_c976932a39.mp3?filename=romantic-piano-wedding-111883.mp3'
  },
  {
    id: 'lofi-sunset-love',
    title: 'Golden Hour Sunset Lofi Love',
    artist: 'ChillHop Wedding Beats',
    category: 'Lo-Fi Chill',
    audioUrl: 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=lofi-study-112191.mp3'
  }
];
