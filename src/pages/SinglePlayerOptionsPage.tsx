import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface SinglePlayerOptionsPageProps {
  onStart: (pairs: number) => void;
  onSettings?: () => void;
}

const levels = [
  { title: 'Level 1', pairs: 4 },
  { title: 'Level 2', pairs: 6 },
  { title: 'Level 3', pairs: 8 },
  { title: 'Level 4', pairs: 10 },
  { title: 'Level 5', pairs: 12 },
  { title: 'Level 6', pairs: 15 },
];

const difficulties = ['Easy', 'Medium', 'Hard'] as const;

type Difficulty = typeof difficulties[number];

const SinglePlayerOptionsPage: React.FC<SinglePlayerOptionsPageProps> = ({ onStart, onSettings }) => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');

  const start = () => {
    onStart(levels[selectedLevel].pairs);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header onSettings={onSettings} />
      <div className="flex-1 flex flex-col items-center p-4 w-full max-w-xl mx-auto">
        <div className="w-full mb-4">
          <p className="text-2xl font-bold">Single Player</p>
          <p className="text-sm text-[#90adcb]">Choose a level and test your memory skills!</p>
        </div>
        <h3 className="text-lg font-bold mb-2 self-start">Difficulty</h3>
        <div className="flex gap-3 mb-4">
          {difficulties.map(d => (
            <label
              key={d}
              className={`text-sm flex items-center justify-center rounded-xl border px-4 h-11 cursor-pointer ${
                difficulty === d ? 'border-2 border-[#0c7ff2]' : 'border-[#314d68]'
              }`}
            >
              <input type="radio" className="hidden" checked={difficulty === d} onChange={() => setDifficulty(d)} />
              {d}
            </label>
          ))}
        </div>
        <h3 className="text-lg font-bold mb-2 self-start">Levels</h3>
        <div className="grid grid-cols-2 gap-3 mb-6 w-full">
          {levels.map((lvl, idx) => (
            <div
              key={lvl.title}
              onClick={() => setSelectedLevel(idx)}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer border ${
                selectedLevel === idx ? 'border-[#0c7ff2]' : 'border-[#314d68]'
              }`}
            >
              <div className="bg-[#223649] rounded-lg w-10 h-10" />
              <h2 className="text-base font-bold">{lvl.title}</h2>
            </div>
          ))}
        </div>
        <Button onClick={start}>Start Game</Button>
      </div>
      <Footer />
    </div>
  );
};

export default SinglePlayerOptionsPage;
