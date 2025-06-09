import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface SinglePlayerOptionsPageProps {
  onStart: (pairs: number) => void;
  onSettings?: () => void;
}

const levels = [4, 6, 8, 10, 12, 15];

const SinglePlayerOptionsPage: React.FC<SinglePlayerOptionsPageProps> = ({ onStart, onSettings }) => (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header onSettings={onSettings} />
    <div className="flex-1 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Select Level</h1>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {levels.map(l => (
          <button
            key={l}
            className="bg-[#223649] rounded-lg w-24 h-24 flex items-center justify-center"
            onClick={() => onStart(l)}
          >
            {l}
          </button>
        ))}
      </div>
      <Button onClick={() => onStart(levels[0])}>Start Game</Button>
    </div>
    <Footer />
  </div>
);

export default SinglePlayerOptionsPage;
