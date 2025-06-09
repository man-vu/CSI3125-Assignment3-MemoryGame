import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', type = 'button' }) => {
  const base = 'rounded-xl h-10 px-4 font-bold text-white cursor-pointer';
  const color = variant === 'primary' ? 'bg-[#0c7ff2]' : 'bg-[#223649]';
  return (
    <button type={type} onClick={onClick} className={`${base} ${color}`}> {children} </button>
  );
};

export default Button;
