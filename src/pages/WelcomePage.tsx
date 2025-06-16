import React from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';

interface WelcomePageProps {
  onSinglePlayer: () => void;
  onMultiPlayer: () => void;
  onSettings?: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onSinglePlayer, onMultiPlayer, onSettings }) => (
  <PageLayout onSettings={onSettings}>
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-2">Welcome to Memory Match</h1>
      <p className="mb-4 text-center max-w-lg">
        Challenge your memory skills with our engaging card game. Play solo or compete with friends in multiplayer mode.
      </p>
      <div className="flex flex-col gap-3 w-60">
        <Button onClick={onSinglePlayer}>Single Player</Button>
        <Button onClick={onMultiPlayer} variant="secondary">Multiplayer</Button>
      </div>
    </div>
  </PageLayout>
);

export default WelcomePage;
