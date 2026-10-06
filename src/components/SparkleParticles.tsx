'use client';

import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function SparkleParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate 32 ambient floating golden stardust particles
    const items: Particle[] = Array.from({ length: 32 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.6 + 0.3
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-float-slow"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`
          }}
        />
      ))}

      {/* Ambient golden glow orbs */}
      <div className="absolute top-1/6 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-amber-400/10 via-yellow-300/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-amber-500/10 via-rose-300/5 to-transparent blur-3xl pointer-events-none" />
    </div>
  );
}
