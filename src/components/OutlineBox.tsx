import { ReactNode } from 'react';

interface OutlineBoxProps {
  children: ReactNode;
  className?: string;
}

const OutlineBox = ({ children, className = '' }: OutlineBoxProps) => {
  return (
    <div
      className={`flex h-[378px] p-6 px-4 flex-col items-start gap-[18px] flex-shrink-0 rounded-2xl border border-[#EDEDEE] bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default OutlineBox; 