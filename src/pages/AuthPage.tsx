import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface AuthPageProps {
  onLogin: (name: string) => void;
  onGuest: () => void;
  onSettings?: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin, onGuest, onSettings }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) onLogin(name.trim());
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
      <Header onSettings={onSettings} />
      <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-60">
          <input
            className="rounded-xl px-3 py-2 text-black"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button type="submit">Log In</Button>
          <Button variant="secondary" onClick={onGuest}>Continue as Guest</Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;
