interface ChipProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outlined';
}

const Chip = ({ children, className = '', variant = 'filled' }: ChipProps) => {
  const baseStyles = 'inline-flex h-[26px] px-2 py-[6px] flex-col justify-center items-center gap-[10px] flex-shrink-0 rounded-[38px]';
  const variantStyles = {
    filled: 'bg-[#333A44] text-white',
    outlined: 'border border-[#333A44] bg-white text-[#333A44]'
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Chip; 