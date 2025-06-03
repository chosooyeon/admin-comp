interface MissionBoxProps {
  children: React.ReactNode;
  variant?: 'gray' | 'burning';
  className?: string;
}

const MissionBox = ({ children, variant = 'gray', className = '' }: MissionBoxProps) => {
  const bgColor = variant === 'burning' ? 'bg-[#FFF3E9]' : 'bg-[#F7F7F7]';
  
  return (
    <div
      className={`h-[196px] flex-shrink-0 ${bgColor} rounded-[16px] p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default MissionBox;