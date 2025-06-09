// src/components/calendar/components/AchievementDots.tsx
interface AchievementDotsProps {
    achievements: boolean[];
  }
  
  export const AchievementDots = ({ achievements }: AchievementDotsProps) => (
    <div className="flex gap-1 mt-1">
      {achievements.map((achieved, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <circle
            cx="8"
            cy="8"
            r="4"
            fill={achieved ? '#FFCD1E' : 'white'}
            stroke="#FFCD1E"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );