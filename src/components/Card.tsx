import React from 'react';

export interface CardData {
  id: number;
  value: number;
  image: string;
  flipped: boolean;
  matched: boolean;
}

interface CardProps {
  card: CardData;
  onFlip: (card: CardData) => void;
}

const Card: React.FC<CardProps> = ({ card, onFlip }) => {
  const frontStyle = {
    backgroundImage: `url(${card.image})`,
  } as React.CSSProperties;

  return (
    <div
      className="w-20 h-24 rounded-lg cursor-pointer overflow-hidden"
      onClick={() => !card.flipped && !card.matched && onFlip(card)}
    >
      <div
        className={`w-full h-full bg-[#223649] flex items-center justify-center text-white text-xl font-bold ${
          card.flipped || card.matched ? 'bg-cover bg-center' : ''
        }`}
        style={card.flipped || card.matched ? frontStyle : undefined}
      >
        {card.flipped || card.matched ? '' : ''}
      </div>
    </div>
  );
};

export default Card;
