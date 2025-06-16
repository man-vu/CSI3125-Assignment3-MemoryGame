import React, { useEffect, useMemo, useState } from 'react';

interface ChessMemoryGameProps {
  fen: string;
  displayTime: number; // milliseconds
  boardTheme: 'brown' | 'blue';
  pieceTheme: 'unicode' | 'letters';
  onFinish?: () => void;
}

type PieceType = 'Pawn' | 'Knight' | 'Bishop' | 'Rook' | 'Queen' | 'King';

const unicodeMap: Record<string, string> = {
  P: '♙',
  N: '♘',
  B: '♗',
  R: '♖',
  Q: '♕',
  K: '♔',
  p: '♟',
  n: '♞',
  b: '♝',
  r: '♜',
  q: '♛',
  k: '♚',
};

const letterMap: Record<string, string> = {
  P: 'P',
  N: 'N',
  B: 'B',
  R: 'R',
  Q: 'Q',
  K: 'K',
  p: 'p',
  n: 'n',
  b: 'b',
  r: 'r',
  q: 'q',
  k: 'k',
};

const pieceTypeByChar: Record<string, PieceType> = {
  P: 'Pawn',
  N: 'Knight',
  B: 'Bishop',
  R: 'Rook',
  Q: 'Queen',
  K: 'King',
  p: 'Pawn',
  n: 'Knight',
  b: 'Bishop',
  r: 'Rook',
  q: 'Queen',
  k: 'King',
};

const parseFEN = (fen: string, theme: 'unicode' | 'letters'): string[][] => {
  const map = theme === 'letters' ? letterMap : unicodeMap;
  const rows = fen.split(' ')[0].split('/');
  return rows.map(row => {
    const cells: string[] = [];
    for (const c of row) {
      if (/[1-8]/.test(c)) {
        for (let i = 0; i < parseInt(c); i++) cells.push('');
      } else {
        cells.push(map[c] || '');
      }
    }
    return cells;
  });
};

const getPieceTypes = (fen: string) => {
  const types = { white: new Set<PieceType>(), black: new Set<PieceType>() };
  for (const c of fen.split(' ')[0]) {
    if (pieceTypeByChar[c]) {
      const isWhite = c === c.toUpperCase();
      (isWhite ? types.white : types.black).add(pieceTypeByChar[c]);
    }
  }
  return types;
};

const pieceTypes: PieceType[] = ['Pawn', 'Knight', 'Bishop', 'Rook', 'Queen', 'King'];

const ChessMemoryGame: React.FC<ChessMemoryGameProps> = ({
  fen,
  displayTime,
  boardTheme,
  pieceTheme,
  onFinish,
}) => {
  const board = useMemo(() => parseFEN(fen, pieceTheme), [fen, pieceTheme]);
  const types = useMemo(() => getPieceTypes(fen), [fen]);
  const [showTest, setShowTest] = useState(false);
  const [selectedWhite, setSelectedWhite] = useState<PieceType[]>([]);
  const [selectedBlack, setSelectedBlack] = useState<PieceType[]>([]);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowTest(true), displayTime);
    return () => clearTimeout(timer);
  }, [displayTime]);

  const toggle = (
    value: PieceType,
    selected: PieceType[],
    setter: React.Dispatch<React.SetStateAction<PieceType[]>>,
  ) => {
    setter(
      selected.includes(value)
        ? selected.filter(v => v !== value)
        : [...selected, value],
    );
  };

  const check = () => {
    const correctWhite = pieceTypes.every(t => types.white.has(t) === selectedWhite.includes(t));
    const correctBlack = pieceTypes.every(t => types.black.has(t) === selectedBlack.includes(t));
    if (correctWhite && correctBlack) setResult('Correct!');
    else setResult('Try again.');
    onFinish && onFinish();
  };

  const squareColors = boardTheme === 'blue'
    ? ['bg-blue-200', 'bg-blue-500']
    : ['bg-amber-200', 'bg-amber-600'];

  return (
    <div className="flex flex-col items-center gap-4">
      {!showTest && (
        <button
          onClick={() => setShowTest(true)}
          className="self-end bg-[#223649] text-white px-3 py-1 rounded"
        >
          Skip
        </button>
      )}
      {!showTest ? (
        <div className="grid grid-cols-8 border">
          {board.map((row, i) =>
            row.map((piece, j) => (
              <div
                key={`${i}-${j}`}
                className={`w-8 h-8 flex items-center justify-center text-xl ${
                  (i + j) % 2 === 0 ? squareColors[0] : squareColors[1]
                }`}
              >
                {piece}
              </div>
            )),
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-4 w-full max-w-md">
          <div>
            <h3 className="font-bold mb-2">White Pieces</h3>
            <div className="grid grid-cols-3 gap-2">
              {pieceTypes.map(t => (
                <label key={t} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={selectedWhite.includes(t)}
                    onChange={() => toggle(t, selectedWhite, setSelectedWhite)}
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Black Pieces</h3>
            <div className="grid grid-cols-3 gap-2">
              {pieceTypes.map(t => (
                <label key={t} className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    checked={selectedBlack.includes(t)}
                    onChange={() => toggle(t, selectedBlack, setSelectedBlack)}
                  />
                  {t}
                </label>
              ))}
            </div>
          </div>
          <button
            onClick={check}
            className="bg-[#0c7ff2] text-white rounded-xl px-3 py-2"
          >
            Submit
          </button>
          {result && <p className="font-bold text-center">{result}</p>}
        </div>
      )}
    </div>
  );
};

export default ChessMemoryGame;
