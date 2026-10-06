'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Disc } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  songTitle?: string;
  artist?: string;
  autoPlayTrigger?: boolean;
}

export default function AudioPlayer({
  audioUrl,
  songTitle = 'Romantic Wedding Song',
  artist = 'Piano Romance',
  autoPlayTrigger = false,
}: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // When autoPlayTrigger turns true (e.g. user opens envelope)
  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => {
          console.warn('Autoplay prevented by browser policy:', err);
        });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.error(err));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={audioUrl}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 z-40 flex items-center gap-2">
        {/* Floating song pill */}
        <div
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="relative flex items-center"
        >
          {showTooltip && (
            <div className="absolute right-full mr-3 whitespace-nowrap bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm pointer-events-none transition-all duration-200">
              <span className="font-medium">{songTitle}</span> - {artist}
            </div>
          )}

          <button
            onClick={togglePlay}
            aria-label="Toggle background music"
            className={`w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 backdrop-blur-md border ${
              isPlaying
                ? 'bg-rose-900/85 text-rose-100 border-rose-400/40 shadow-rose-900/30'
                : 'bg-white/85 text-slate-700 border-slate-200 hover:bg-white'
            }`}
          >
            <div className={`relative flex items-center justify-center ${isPlaying ? 'animate-spin-slow' : ''}`}>
              <Disc className="w-7 h-7" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-rose-300" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
