import { AchievementDots } from "@/components/calendar/dots";

interface CalendarDayProps {
    day: number;
    date: Date;
    isHighlighted: boolean;
    achievements: boolean[];
    showAchievements: boolean;
  }
  
  export const CalendarDay = ({
    day,
    isHighlighted,
    achievements,
    showAchievements
  }: CalendarDayProps) => (
    <div className="flex flex-col items-center">
      <div
        className={`
          flex items-center justify-center
          w-10 h-10
          rounded-[24px]
          ${isHighlighted ? 'bg-[#FFCD1E] text-white' : ''}
        `}
      >
        {day}
      </div>
      {showAchievements && <AchievementDots achievements={achievements} />}
    </div>
  );