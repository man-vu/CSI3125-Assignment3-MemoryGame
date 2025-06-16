export interface GameInfo {
  id: string;
  players: string;
  status: string;
}

export const games: GameInfo[] = [
  { id: 'Game-123', players: '2/4', status: 'Waiting' },
  { id: 'Game-456', players: '1/2', status: 'Waiting' },
  { id: 'Game-789', players: '3/4', status: 'In Progress' },
  { id: 'Game-012', players: '2/2', status: 'In Progress' },
  { id: 'Game-345', players: '1/4', status: 'Waiting' },
];
