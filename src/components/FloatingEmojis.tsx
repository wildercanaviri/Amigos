import React from 'react';
import { funEmojis } from '../utils/emojis';

export function FloatingEmojis() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {funEmojis.map((emoji, index) => {
        const txStart = Math.random() * 100 - 50; // Random start position
        const txEnd = (Math.random() - 0.5) * 200; // Random end position
        
        return (
          <div
            key={index}
            className="absolute animate-float"
            style={{
              '--tx-start': `${txStart}px`,
              '--tx-end': `${txEnd}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
              fontSize: `${1 + Math.random() * 2}rem`
            } as React.CSSProperties}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
}