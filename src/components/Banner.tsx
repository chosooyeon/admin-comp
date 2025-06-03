interface BannerProps {
  children: React.ReactNode;
  className?: string;
}

const Banner = ({ children, className = '' }: BannerProps) => {
  return (
    <div 
      className={`relative left-1/2 -translate-x-1/2 w-[calc(100vw)] md:w-[calc(100vw-40px)] 
      py-[26px] flex justify-center items-center gap-[34px] bg-[#8F8F8F] ${className}`}
      style={{
        width: 'calc(100vw - var(--removed-body-scroll-bar-size, 0px))'
      }}
    >
      {children}
    </div>
  );
};

export default Banner;