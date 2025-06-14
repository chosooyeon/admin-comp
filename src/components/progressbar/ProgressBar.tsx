interface ProgressBarProps {
  progress: number; // 0 to 100
  className?: string;
  isDark?: boolean;
}

const ProgressBar = ({ progress, className = '', isDark = false }:ProgressBarProps) => {

  // Ensure progress is between 0 and 100
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  // Calculate the width of the progress bar
  const progressWidth = `${clampedProgress}%`;

  return (
    <div className={`relative w-full h-11 rounded-[22px] ${className}`}>
      {/* Background */}
      <div 
        className={`absolute inset-0 rounded-[22px] ${
          isDark ? 'bg-[#464E59]' : 'bg-[#FCF6EF]'
        }`}
      >
        {/* Diagonal Pattern */}
        <div className="absolute inset-0 overflow-hidden rounded-[22px]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 9px,
                #FFF 9px,
                #FFF 10px
              )`
            }}
          />
        </div>
      </div>

      {/* Progress Fill */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-500 ease-out"
        style={{ width: progressWidth }}
      >
        <div className="absolute inset-0 rounded-l-[22px] bg-gradient-to-r from-[#FFD700] via-[#FFBE1C] to-[#F159A0]" />
      </div>

      {/* Progress Indicator Line */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 w-0.5 h-[63px] bg-black transition-all duration-500 ease-out"
        style={{ left: `calc(${progressWidth} - 1px)` }}
      />

      {/* Progress Chip */}
      <div 
        className="absolute -translate-y-1/2 transition-all duration-500 ease-out"
        style={{ 
          left: `calc(${progressWidth} - 1px)`,
          transform: `translate(-50%, -50%)`
        }}
      >
        <div className="inline-flex h-[26px] px-2 py-1.5 flex-col justify-center items-center gap-2.5 rounded-[38px] bg-[#333A44]">
          <span className="text-xs font-medium text-white">
            {clampedProgress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;