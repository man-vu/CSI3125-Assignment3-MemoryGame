import React from 'react';
import PageLayout from '../components/PageLayout';
import Button from '../components/Button';

interface ChooseModePageProps {
  onSinglePlayer: () => void;
  onMultiPlayer: () => void;
  onSettings?: () => void;
}

const ChooseModePage: React.FC<ChooseModePageProps> = ({ onSinglePlayer, onMultiPlayer, onSettings }) => (
  <PageLayout onSettings={onSettings}>
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Choose Game Mode</h1>
      <div className="flex flex-col gap-3 w-60">
        <Button onClick={onSinglePlayer}>Single Player</Button>
        <Button onClick={onMultiPlayer} variant="secondary">Multiplayer</Button>
      </div>
    </div>
  </PageLayout>
);

export default ChooseModePage;
