import { Achievement } from "@/types/calendar.type";

export const isHighlightedDate = (date: Date, highlightedDates: Date[]) => {
    return highlightedDates.some(highlightedDate => 
      highlightedDate.toDateString() === date.toDateString()
    );
  };
  
  export const getAchievements = (date: Date, achievements: Achievement[]) => {
    return achievements.find(achievement => 
      achievement.date.toDateString() === date.toDateString()
    )?.completed || [false, false, false];
  };
  
  export const hasAchievements = (date: Date, achievements: Achievement[]) => {
    return achievements.some(achievement => 
      achievement.date.toDateString() === date.toDateString()
    );
  };