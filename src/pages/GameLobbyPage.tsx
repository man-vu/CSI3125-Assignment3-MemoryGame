import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface GameLobbyPageProps {
  onCreate: () => void;
  onJoin: (id: string) => void;
}

const GameLobbyPage: React.FC<GameLobbyPageProps> = ({ onCreate, onJoin }) => {
  const rooms = ['Room 1', 'Room 2'];
  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header />
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
      <Footer />
    </div>
  );
};

export default GameLobbyPage;
