import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GameBoard from '../containers/GameBoard';

interface GameScreenPageProps {
  pairs: number;
  onFinish: () => void;
  onSettings?: () => void;
}

const GameScreenPage: React.FC<GameScreenPageProps> = ({ pairs, onFinish, onSettings }) => (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header onSettings={onSettings} />
    <div className="flex-1 flex flex-col items-center p-4">
      <GameBoard pairs={pairs} onFinish={onFinish} />
    </div>
    <Footer />
  </div>
);

export default GameScreenPage;
