// Famous game positions encoded as FEN strings

export interface ChessLevel {
  title: string;
  fen: string;
  time: number; // milliseconds
}

export const chessLevels: ChessLevel[] = [
  {
    title: "Fool's Mate",
    // After 1.f3 e5 2.g4 Qh4#
    fen: 'rnb1kbnr/pppp1ppp/8/4p3/6Pq/5P2/PPPPP2P/RNBQKBNR w KQkq - 0 3',
    time: 3000,
  },
  {
    title: "Scholar's Mate",
    // After 1.e4 e5 2.Bc4 Nc6 3.Qh5 Nf6 4.Qxf7#
    fen: 'r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4',
    time: 2500,
  },
  {
    title: 'Ruy Lopez (Kasparov - Karpov 1985)',
    // Position after 3...a6
    fen: 'r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/8/PPPP1PPP/RNBQK1NR w KQkq - 0 4',
    time: 2000,
  },
];
