import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface JoinGamePageProps {
  onCreate: () => void;
  onJoin: (id: string) => void;
  onSettings?: () => void;
}

const JoinGamePage: React.FC<JoinGamePageProps> = ({ onCreate, onJoin, onSettings }) => {
  const games = [
    { id: 'Game-123', players: '2/4', status: 'Waiting' },
    { id: 'Game-456', players: '1/2', status: 'Waiting' },
    { id: 'Game-789', players: '3/4', status: 'In Progress' },
    { id: 'Game-012', players: '2/2', status: 'In Progress' },
    { id: 'Game-345', players: '1/4', status: 'Waiting' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header onSettings={onSettings} />
      <div className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-2">Join a Game</h1>
        <p className="text-[#90adcb] mb-4">Browse available games or create your own.</p>
        <table className="w-full mb-4">
          <thead className="bg-[#182634]">
            <tr>
              <th className="px-4 py-2 text-left">Game ID</th>
              <th className="px-4 py-2 text-left">Players</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {games.map(g => (
              <tr key={g.id} className="border-t border-[#314d68]">
                <td className="px-4 py-2">{g.id}</td>
                <td className="px-4 py-2 text-[#90adcb]">{g.players}</td>
                <td className="px-4 py-2">
                  <Button variant="secondary" onClick={() => onJoin(g.id)}>
                    {g.status}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end">
          <Button onClick={onCreate}>Create New Game</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinGamePage;
