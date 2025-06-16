import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface SettingsPageProps {
  user: string;
  onUserChange: (name: string) => void;
  soundOn: boolean;
  onToggleSound: () => void;
  theme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
  boardTheme: 'brown' | 'blue';
  onBoardThemeChange: (t: 'brown' | 'blue') => void;
  pieceTheme: 'unicode' | 'letters';
  onPieceThemeChange: (t: 'unicode' | 'letters') => void;
  onBack: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({
  user,
  onUserChange,
  soundOn,
  onToggleSound,
  theme,
  onThemeChange,
  boardTheme,
  onBoardThemeChange,
  pieceTheme,
  onPieceThemeChange,
  onBack,
}) => (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header />
    <div className="flex-1 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="w-full max-w-xs flex flex-col gap-4">
        <label className="flex flex-col text-left">
          <span className="mb-1 font-bold">User Name</span>
          <input
            className="rounded-xl px-3 py-2 text-black"
            value={user}
            onChange={(e) => onUserChange(e.target.value)}
          />
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={soundOn} onChange={onToggleSound} />
          <span>Sound</span>
        </label>
        <label className="flex flex-col text-left">
          <span className="mb-1 font-bold">Theme</span>
          <select
            className="rounded-xl px-3 py-2 text-black"
            value={theme}
            onChange={(e) =>
              onThemeChange(e.target.value as 'dark' | 'light')
            }
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
        <label className="flex flex-col text-left">
          <span className="mb-1 font-bold">Board Theme</span>
          <select
            className="rounded-xl px-3 py-2 text-black"
            value={boardTheme}
            onChange={(e) =>
              onBoardThemeChange(e.target.value as 'brown' | 'blue')
            }
          >
            <option value="brown">Brown</option>
            <option value="blue">Blue</option>
          </select>
        </label>
        <label className="flex flex-col text-left">
          <span className="mb-1 font-bold">Piece Theme</span>
          <select
            className="rounded-xl px-3 py-2 text-black"
            value={pieceTheme}
            onChange={(e) =>
              onPieceThemeChange(e.target.value as 'unicode' | 'letters')
            }
          >
            <option value="unicode">Unicode</option>
            <option value="letters">Letters</option>
          </select>
        </label>
      </div>
      <div className="mt-6">
        <Button onClick={onBack}>Back</Button>
      </div>
    </div>
    <Footer />
  </div>
);

export default SettingsPage;
