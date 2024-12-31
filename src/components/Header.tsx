import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export function Header() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold mb-8 animate-pulse">
        <Sparkles className="inline-block mr-2 md:mr-4 h-8 w-8 md:h-12 md:w-12" />
        Adiós 2024
        <Sparkles className="inline-block ml-2 md:ml-4 h-8 w-8 md:h-12 md:w-12" />
      </h1>
      
      <p className="text-xl md:text-2xl text-purple-200 mb-8 md:mb-12">
        Bienvenido 2025 
        <Heart className="inline-block ml-2 text-red-400 animate-bounce" />
      </p>
    </>
  );
}