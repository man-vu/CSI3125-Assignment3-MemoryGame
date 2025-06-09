import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import AuthPage from './pages/AuthPage';
import ChooseModePage from './pages/ChooseModePage';
import SinglePlayerOptionsPage from './pages/SinglePlayerOptionsPage';
import GameLobbyPage from './pages/GameLobbyPage';
import GameScreenPage from './pages/GameScreenPage';
import './App.css';

export type Page = 'welcome' | 'auth' | 'mode' | 'single-options' | 'lobby' | 'game';

function App() {
  const [page, setPage] = useState<Page>('welcome');
  const [user, setUser] = useState<string>('');
  const [pairs, setPairs] = useState<number>(4);

  const goAuth = () => setPage('auth');
  const goMode = () => setPage('mode');
  const goSingleOptions = () => setPage('single-options');
  const goLobby = () => setPage('lobby');
  const startGame = (p: number) => { setPairs(p); setPage('game'); };

  const renderPage = () => {
    switch (page) {
      case 'auth':
        return <AuthPage onLogin={(name) => { setUser(name); goMode(); }} onGuest={goMode} />;
      case 'mode':
        return <ChooseModePage onSinglePlayer={goSingleOptions} onMultiPlayer={goLobby} />;
      case 'single-options':
        return <SinglePlayerOptionsPage onStart={startGame} />;
      case 'lobby':
        return <GameLobbyPage onCreate={() => startGame(4)} onJoin={() => startGame(4)} />;
      case 'game':
        return <GameScreenPage pairs={pairs} onFinish={goMode} />;
      default:
        return <WelcomePage onSinglePlayer={goAuth} onMultiPlayer={goAuth} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
