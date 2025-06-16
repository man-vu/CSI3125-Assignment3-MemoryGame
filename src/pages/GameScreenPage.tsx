import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChessMemoryGame from '../containers/ChessMemoryGame';
import { chessLevels } from '../levels';

interface GameScreenPageProps {
  level: number;
  boardTheme: 'brown' | 'blue';
  pieceTheme: 'unicode' | 'letters';
  onFinish: () => void;
  onSettings?: () => void;
}

const GameScreenPage: React.FC<GameScreenPageProps> = ({ level, boardTheme, pieceTheme, onFinish, onSettings }) => {
  const lvl = chessLevels[level] ?? chessLevels[0];
  return (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header onSettings={onSettings} />
    <div className="flex-1 flex flex-col items-center p-4">
      <ChessMemoryGame
        fen={lvl.fen}
        displayTime={lvl.time}
        boardTheme={boardTheme}
        pieceTheme={pieceTheme}
        onFinish={onFinish}
      />
    </div>
    <Footer />
  </div>
  );
};

export default GameScreenPage;
