
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-card p-6 rounded-2xl transition-all duration-300 hover:border-[#00ff41]/40 ${className} ${onClick ? 'cursor-pointer active:scale-95' : ''}`}
    >
      {children}
    </div>
  );
};
