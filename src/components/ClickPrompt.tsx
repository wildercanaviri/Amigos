import React from 'react';

interface ClickPromptProps {
  isComplete: boolean;
}

export function ClickPrompt({ isComplete }: ClickPromptProps) {
  if (isComplete) {
    return (
      <div className="mt-8 md:mt-16 text-lg md:text-xl text-purple-200 animate-bounce px-4">
        ¡Feliz Año Nuevo a todos! 🎊
        <p className="mt-2 text-xs md:text-sm">Toca para comenzar de nuevo...</p>
      </div>
    );
  }

  return (
    <p className="text-lg md:text-xl text-purple-200 animate-pulse px-4">
      Toca la pantalla para revelar más amigos...
    </p>
  );
}