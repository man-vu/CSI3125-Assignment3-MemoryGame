import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface ChooseModePageProps {
  onSinglePlayer: () => void;
  onMultiPlayer: () => void;
  onSettings?: () => void;
}

const ChooseModePage: React.FC<ChooseModePageProps> = ({ onSinglePlayer, onMultiPlayer, onSettings }) => (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header onSettings={onSettings} />
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Choose Game Mode</h1>
      <div className="flex flex-col gap-3 w-60">
        <Button onClick={onSinglePlayer}>Single Player</Button>
        <Button onClick={onMultiPlayer} variant="secondary">Multiplayer</Button>
      </div>
    </div>
    <Footer />
  </div>
);

export default ChooseModePage;
