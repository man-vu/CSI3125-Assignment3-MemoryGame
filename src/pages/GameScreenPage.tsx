import React from 'react';
import PageLayout from '../components/PageLayout';
import GameBoard from '../containers/GameBoard';

interface GameScreenPageProps {
  pairs: number;
  onFinish: () => void;
  onSettings?: () => void;
}

const GameScreenPage: React.FC<GameScreenPageProps> = ({ pairs, onFinish, onSettings }) => (
  <PageLayout onSettings={onSettings}>
    <div className="flex-1 flex flex-col items-center p-4">
      <GameBoard pairs={pairs} onFinish={onFinish} />
    </div>
  </PageLayout>
);

export default GameScreenPage;
