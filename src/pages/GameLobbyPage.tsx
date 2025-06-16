import React from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { rooms } from '../data/lobby';

interface GameLobbyPageProps {
  onCreate: () => void;
  onJoin: (id: string) => void;
  onSettings?: () => void;
}

const GameLobbyPage: React.FC<GameLobbyPageProps> = ({ onCreate, onJoin, onSettings }) => {
  return (
    <PageLayout onSettings={onSettings}>
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Game Lobby</h1>
        <ul className="mb-4">
          {rooms.map(r => (
            <li key={r} className="flex justify-between bg-[#223649] rounded-lg p-2 mb-2">
              <span>{r}</span>
              <Button variant="secondary" onClick={() => onJoin(r)}>Join</Button>
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <Button onClick={onCreate}>Create New Game</Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default GameLobbyPage;
