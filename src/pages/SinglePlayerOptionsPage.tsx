import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { levels, difficulties, Difficulty } from '../data/singlePlayer';

interface SinglePlayerOptionsPageProps {
  onStart: (pairs: number) => void;
  onSettings?: () => void;
}


const SinglePlayerOptionsPage: React.FC<SinglePlayerOptionsPageProps> = ({ onStart, onSettings }) => {
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');

  const start = () => {
    onStart(levels[selectedLevel].pairs);
  };

  return (
    <PageLayout onSettings={onSettings}>
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
              <div
                className="rounded-lg w-10 h-10 bg-center bg-cover"
                style={{ backgroundImage: `url(${lvl.image})` }}
              />
              <h2 className="text-base font-bold">{lvl.title}</h2>
            </div>
          ))}
        </div>
        <Button onClick={start}>Start Game</Button>
      </div>
    </PageLayout>
  );
};

export default SinglePlayerOptionsPage;
