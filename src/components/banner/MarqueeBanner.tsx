interface MarqueeBannerProps {
  text: string;
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

const MarqueeBanner = ({
  text,
  speed = 'normal',
  className = '',
}:MarqueeBannerProps) => {
  // 속도에 따른 duration 클래스 매핑
  const speedClasses = {
    slow: 'animate-[scroll_30s_linear_infinite]',
    normal: 'animate-[scroll_20s_linear_infinite]',
    fast: 'animate-[scroll_10s_linear_infinite]',
  };

  return (
    <div className={`w-full overflow-hidden bg-gray-100 py-3 ${className}`}>
      <div
        className={`whitespace-nowrap inline-block ${speedClasses[speed]}`}
        style={{
          animation: `scroll ${speed === 'slow' ? 30 : speed === 'fast' ? 10 : 20}s linear infinite`
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default MarqueeBanner;