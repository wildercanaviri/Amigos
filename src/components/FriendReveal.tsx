import React, { useEffect, useState } from 'react';
import { Sparkle } from 'lucide-react';
import { getRandomEmoji } from '../utils/emojis';
import './styles.css';

interface FriendRevealProps {
  name: string;
  isVisible: boolean;
}

export function FriendReveal({ name, isVisible }: FriendRevealProps) {
  const [show, setShow] = useState(false);
  const [emoji] = useState(getRandomEmoji());

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  if (!show) return null;
  
  return (
    <div className="flex items-center justify-center gap-2 animate-pop-and-fade px-4">
      <Sparkle className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
      <span className="text-xl md:text-2xl font-bold text-purple-200">
        {emoji} {name} {emoji}
      </span>
      <Sparkle className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
    </div>
  );
}