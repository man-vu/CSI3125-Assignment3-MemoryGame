import React from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';
import { games } from '../data/games';

interface JoinGamePageProps {
  onCreate: () => void;
  onJoin: (id: string) => void;
  onSettings?: () => void;
}

const JoinGamePage: React.FC<JoinGamePageProps> = ({ onCreate, onJoin, onSettings }) => {

  return (
    <PageLayout onSettings={onSettings}>
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
    </PageLayout>
  );
};

export default JoinGamePage;
