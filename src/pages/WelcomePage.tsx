import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface WelcomePageProps {
  onSinglePlayer: () => void;
  onMultiPlayer: () => void;
  onSettings?: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onSinglePlayer, onMultiPlayer, onSettings }) => (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header onSettings={onSettings} />
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
    <Footer />
  </div>
);

export default WelcomePage;
