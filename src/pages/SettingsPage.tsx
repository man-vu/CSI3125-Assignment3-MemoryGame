import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

interface SettingsPageProps {
  onBack: () => void;
}

const SettingsPage: React.FC<SettingsPageProps> = ({ onBack }) => (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header />
    <div className="flex-1 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-[#90adcb] mb-6 text-center">User profile and game preferences will appear here.</p>
      <Button onClick={onBack}>Back</Button>
    </div>
    <Footer />
  </div>
);

export default SettingsPage;
