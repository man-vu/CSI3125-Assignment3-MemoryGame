import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  onSettings?: () => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, onSettings }) => (
  <div className="min-h-screen flex flex-col bg-[#101a23] text-white">
    <Header onSettings={onSettings} />
    {children}
    <Footer />
  </div>
);

export default PageLayout;
