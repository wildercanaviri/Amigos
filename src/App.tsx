import React, { useState } from 'react';
import { Header } from './components/Header';
import { FriendsList } from './components/FriendsList';
import { ClickPrompt } from './components/ClickPrompt';
import { Footer } from './components/Footer';
import { friends } from './data/friends';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [cycleCount, setCycleCount] = useState(0);

  const handleScreenClick = () => {
    if (currentIndex >= friends.length - 1) {
      setCurrentIndex(-1);
      setCycleCount(prev => prev + 1);
    } else {
      setCurrentIndex(prev => prev + 1);
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white cursor-pointer flex flex-col relative"
      onClick={handleScreenClick}
    >
      <div className="container mx-auto px-2 md:px-4 py-8 md:py-16 flex-grow relative z-10">
        <div className="text-center space-y-6 md:space-y-8">
          <Header />
          <FriendsList 
            currentIndex={currentIndex} 
            cycleCount={cycleCount}
          />
          <ClickPrompt isComplete={currentIndex >= friends.length - 1} />
        </div>
      </div>
      <Footer />
    </div>
  );
}