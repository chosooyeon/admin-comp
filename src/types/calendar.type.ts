// src/components/calendar/types.ts
export interface Achievement {
    date: Date;
    completed: boolean[];
  }
  
  export interface CalendarProps {
    highlightedDates: Date[];
    achievements: Achievement[];
    disabled?: boolean;
  }