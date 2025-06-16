import React from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';

interface SettingsPageProps {
  user: string;
  onUserChange: (name: string) => void;
  soundOn: boolean;
  onToggleSound: () => void;
  theme: 'dark' | 'light';
  onThemeChange: (theme: 'dark' | 'light') => void;
  onBack: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({
  user,
  onUserChange,
  soundOn,
  onToggleSound,
  theme,
  onThemeChange,
  onBack,
}) => (
  <PageLayout>
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
      </div>
      <div className="mt-6">
        <Button onClick={onBack}>Back</Button>
      </div>
    </div>
  </PageLayout>
);

export default SettingsPage;
