import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import AuthPage from './pages/AuthPage';
import ChooseModePage from './pages/ChooseModePage';
import SinglePlayerOptionsPage from './pages/SinglePlayerOptionsPage';
import GameLobbyPage from './pages/GameLobbyPage';
import GameScreenPage from './pages/GameScreenPage';
import JoinGamePage from './pages/JoinGamePage';
import SettingsPage from './pages/SettingsPage';
import './App.css';

export type Page =
  | 'welcome'
  | 'auth'
  | 'mode'
  | 'single-options'
  | 'join'
  | 'lobby'
  | 'game'
  | 'settings';

function App() {
  const [page, setPage] = useState<Page>('welcome');
  const [user, setUser] = useState<string>('');
  const [pairs, setPairs] = useState<number>(4);
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const goAuth = () => setPage('auth');
  const goMode = () => setPage('mode');
  const goSingleOptions = () => setPage('single-options');
  const goJoin = () => setPage('join');
  const goLobby = () => setPage('lobby');
  const goSettings = () => setPage('settings');
  const startGame = (p: number) => { setPairs(p); setPage('game'); };

  const renderPage = () => {
    switch (page) {
      case 'auth':
        return (
          <AuthPage
            onLogin={(name) => { setUser(name); goMode(); }}
            onGuest={goMode}
            onSettings={goSettings}
          />
        );
      case 'mode':
        return (
          <ChooseModePage
            onSinglePlayer={goSingleOptions}
            onMultiPlayer={goJoin}
            onSettings={goSettings}
          />
        );
      case 'single-options':
        return <SinglePlayerOptionsPage onStart={startGame} onSettings={goSettings} />;
      case 'join':
        return (
          <JoinGamePage
            onCreate={() => startGame(4)}
            onJoin={() => startGame(4)}
            onSettings={goSettings}
          />
        );
      case 'lobby':
        return (
          <GameLobbyPage
            onCreate={() => startGame(4)}
            onJoin={() => startGame(4)}
            onSettings={goSettings}
          />
        );
      case 'game':
        return <GameScreenPage pairs={pairs} onFinish={goMode} onSettings={goSettings} />;
      case 'settings':
        return (
          <SettingsPage
            user={user}
            onUserChange={setUser}
            soundOn={soundOn}
            onToggleSound={() => setSoundOn(prev => !prev)}
            theme={theme}
            onThemeChange={setTheme}
            onBack={goMode}
          />
        );
      default:
        return <WelcomePage onSinglePlayer={goAuth} onMultiPlayer={goAuth} onSettings={goSettings} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
