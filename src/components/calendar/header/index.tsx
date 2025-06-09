interface CalendarHeaderProps {
    currentMonth: Date;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    disabled?: boolean;
  }
  
  export const CalendarHeader = ({
    currentMonth,
    onPrevMonth,
    onNextMonth,
    disabled
  }: CalendarHeaderProps) => (
    <div className="flex justify-between items-center mb-4">
      <button
        onClick={onPrevMonth}
        disabled={disabled}
        className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
      >
        ←
      </button>
      <span className="font-semibold">
        {new Intl.DateTimeFormat('ko-KR', { 
          year: 'numeric',
          month: 'long'
        }).format(currentMonth)}
      </span>
      <button
        onClick={onNextMonth}
        disabled={disabled}
        className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
      >
        →
      </button>
    </div>
  );