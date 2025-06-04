import { ReactNode } from 'react';

interface SmallButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const SmallButton = ({ children, onClick, className = '' }: SmallButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex px-3 py-[5px] justify-center items-center gap-[10px] rounded-lg bg-[#BEBEBE] ${className}`}
    >
      {children}
    </button>
  );
};

export default SmallButton; 