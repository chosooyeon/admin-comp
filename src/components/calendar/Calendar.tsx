'use client'
import { useState } from 'react';

interface CalendarProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
  disabled?: boolean;
}

const Calendar = ({
  selectedDate,
  onChange,
  disabled = false
}:CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const renderCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const isSelected = selectedDate.toDateString() === date.toDateString();

      days.push(
        <button
          key={day}
          onClick={() => onChange(date)}
          disabled={disabled}
          className={`h-8 w-8 rounded-full ${
            isSelected
              ? 'bg-blue-600 text-white'
              : 'hover:bg-gray-100'
          } disabled:opacity-50`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousMonth}
          disabled={disabled}
          className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
        >
          ←
        </button>
        <span className="font-semibold">
          {currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
        </span>
        <button
          onClick={handleNextMonth}
          disabled={disabled}
          className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
        >
          →
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className="h-8 w-8 flex items-center justify-center text-sm text-gray-500">
            {day}
          </div>
        ))}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;