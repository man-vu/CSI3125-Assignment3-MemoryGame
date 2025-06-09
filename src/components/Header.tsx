import React from 'react';

interface HeaderProps {
  onSettings?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSettings }) => {
  return (
    <header className="flex items-center justify-between border-b border-[#223649] px-4 py-3 text-white">
      <h2 className="text-lg font-bold">Memory Match</h2>
      <button onClick={onSettings} className="bg-[#223649] rounded-xl px-3 py-1">
        Settings
      </button>
    </header>
  );
};

export default Header;
