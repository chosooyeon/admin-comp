interface ProgressBarProps {
    percent: number; // 0-100 사이의 값
    variant?: 'gray' | 'burning';
  }
  
  const ProgressBar = ({ percent, variant = 'gray' }: ProgressBarProps) => {
    // 퍼센트 값을 0-100 사이로 제한
    const clampedPercent = Math.min(100, Math.max(0, percent));
    
    const barStyle = variant === 'burning' 
      ? 'bg-gradient-to-r from-[#FFD700] to-[#FF0101]' 
      : 'bg-[#979797]';
    
    return (
      <div className="relative w-full h-[14px] flex-shrink-0 bg-white rounded-[22.88px]">
        {/* Progress Bar 내부 채워지는 부분 */}
        <div 
          className={`absolute left-0 h-[14px] flex-shrink-0 ${barStyle} rounded-[24px] transition-width duration-300 ease-in-out`}
          style={{ width: `${clampedPercent}%` }}
        >
          {/* 퍼센트 표시 동그라미 */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[5.859px] h-[6px] flex-shrink-0 rounded-[90px] bg-white" />
        </div>
      </div>
    );
  };
  
  export default ProgressBar;