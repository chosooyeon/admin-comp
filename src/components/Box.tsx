interface BoxProps {
  children: React.ReactNode;
  className?: string;
  height?: string;
}

const Box = ({ children, className = '', height = '42px' }: BoxProps) => {
  return (
    <div className={`w-[316px] h-[${height}] rounded-md border-[0.3px] border-black bg-white flex items-center py-2 px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Box; 