import React from 'react';
import { FriendReveal } from './FriendReveal';
import { friends } from '../data/friends';

interface FriendsListProps {
  currentIndex: number;
  cycleCount: number;
}

export function FriendsList({ currentIndex, cycleCount }: FriendsListProps) {
  return (
    <div className="space-y-4 min-h-[50vh] flex flex-col items-center justify-center">
      {friends.map((friend, index) => (
        <FriendReveal 
          key={`${friend}-${cycleCount}`}
          name={friend}
          isVisible={index <= currentIndex}
        />
      ))}
    </div>
  );
}