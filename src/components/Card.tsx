import React from 'react';

export interface CardData {
  id: number;
  value: number;
  flipped: boolean;
  matched: boolean;
}

interface CardProps {
  card: CardData;
  onFlip: (card: CardData) => void;
}

const Card: React.FC<CardProps> = ({ card, onFlip }) => {
  return (
    <div
      className={`w-20 h-24 flex items-center justify-center rounded-lg bg-[#223649] text-white text-xl font-bold cursor-pointer ${card.flipped || card.matched ? 'bg-[#0c7ff2]' : ''}`}
      onClick={() => !card.flipped && !card.matched && onFlip(card)}
    >
      {(card.flipped || card.matched) && card.value}
    </div>
  );
};

export default Card;
