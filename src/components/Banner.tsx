interface BannerProps {
  children: React.ReactNode;
  className?: string;
}

const Banner = ({ children, className = '' }: BannerProps) => {
  return (
    <div 
      className={`flex w-full py-[26px] justify-center items-center gap-[34px] bg-[#8F8F8F] ${className}`}
    >
      {children}
    </div>
  );
};

export default Banner; 