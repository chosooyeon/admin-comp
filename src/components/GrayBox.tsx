interface GrayBoxProps {
  children: React.ReactNode;
  className?: string;
}

const GrayBox = ({ children, className = '' }: GrayBoxProps) => {
  return (
    <div
      className={`w-[327px] h-[196px] flex-shrink-0 bg-[#F7F7F7] rounded-[16px] p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default GrayBox; 