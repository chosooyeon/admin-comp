// src/components/calendar/Calendar.tsx
import { useCalendar } from '@/hook/useCalendar';
import { isHighlightedDate, getAchievements, hasAchievements } from '@/util/calendar.util';
import { CalendarHeader } from '@/components/calendar/header';
import { WeekdayLabels } from '@/components/calendar/labels';
import { CalendarDay } from '@/components/calendar/day';
import type { CalendarProps } from '@/types/calendar.type';

const Calendar = ({
  highlightedDates = [],
  achievements = [],
  disabled = false
}: CalendarProps) => {
  const {
    currentMonth,
    getDaysInMonth,
    getFirstDayOfMonth,
    handlePreviousMonth,
    handleNextMonth,
  } = useCalendar();

  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const dateAchievements = getAchievements(date, achievements);
      
      days.push(
        <CalendarDay
          key={day}
          day={day}
          date={date}
          isHighlighted={isHighlightedDate(date, highlightedDates)}
          achievements={dateAchievements}
          showAchievements={hasAchievements(date, achievements)}
        />
      );
    }

    return days;
  };

  return (
    <div className="p-4">
      <CalendarHeader
        currentMonth={currentMonth}
        onPrevMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
        disabled={disabled}
      />
      <div className="grid grid-cols-7 gap-1">
        <WeekdayLabels />
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;