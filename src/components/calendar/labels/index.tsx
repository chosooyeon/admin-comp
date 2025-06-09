// src/components/calendar/components/WeekdayLabels.tsx
export const WeekdayLabels = () => (
    <>
      {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
        <div key={day} className="h-10 w-10 flex items-center justify-center text-sm text-gray-500">
          {day}
        </div>
      ))}
    </>
  );