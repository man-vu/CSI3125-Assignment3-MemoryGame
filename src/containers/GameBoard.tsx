import React, { useState, useEffect } from 'react';
import Card, { CardData } from '../components/Card';

interface GameBoardProps {
  pairs: number;
  onFinish?: () => void;
}

const shuffle = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const GameBoard: React.FC<GameBoardProps> = ({ pairs, onFinish }) => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flipped, setFlipped] = useState<CardData[]>([]);

  useEffect(() => {
    const data: CardData[] = [];
    for (let i = 1; i <= pairs; i++) {
      data.push({ id: i * 2 - 1, value: i, flipped: false, matched: false });
      data.push({ id: i * 2, value: i, flipped: false, matched: false });
    }
    shuffle(data);
    setCards(data);
  }, [pairs]);

  const onFlip = (card: CardData) => {
    if (flipped.length === 2) return;
    const newCards = cards.map(c => (c.id === card.id ? { ...c, flipped: true } : c));
    setCards(newCards);
    const newFlipped = [...flipped, { ...card, flipped: true }];
    setFlipped(newFlipped);
    if (newFlipped.length === 2) {
      setTimeout(() => {
        handleMatch(newFlipped[0], newFlipped[1]);
      }, 800);
    }
  };

  const handleMatch = (first: CardData, second: CardData) => {
    if (first.value === second.value) {
      const matchedCards = cards.map(c =>
        c.value === first.value ? { ...c, matched: true } : c
      );
      setCards(matchedCards);
      if (matchedCards.every(c => c.matched)) {
        onFinish && onFinish();
      }
    } else {
      setCards(cards.map(c => (c.flipped && !c.matched ? { ...c, flipped: false } : c)));
    }
    setFlipped([]);
  };

  return (
    <div className="grid grid-cols-4 gap-3 justify-center p-4">
      {cards.map(card => (
        <Card key={card.id} card={card} onFlip={onFlip} />
      ))}
    </div>
  );
};

export default GameBoard;
