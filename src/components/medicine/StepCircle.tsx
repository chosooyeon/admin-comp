import React, { useState } from "react";

type DateInfo = {
  date: string;  // "8/1" 형식
  dayOfWeek: string;  // "월", "화" 등
  progress: number;  // 0-4 사이의 값 (0, 1, 2, 3, 4)
  isToday?: boolean; // 오늘 날짜 여부
};

type StepCircleProps = {
  dateInfo: DateInfo;
  isSelected?: boolean;
  onClick?: () => void;
};

const StepCircle = ({ dateInfo, isSelected, onClick }:StepCircleProps) => {
  console.log(dateInfo);
  // 4등분된 원의 각 부분의 채워짐 여부를 계산
  const getSegmentFill = (segment: number) => {
    return dateInfo.progress >= segment ? 100 : 0;
  };
  
  return (
    <div
      className={`flex flex-col items-center gap-1 cursor-pointer text-center ${
        dateInfo.isToday ? 'bg-[#F7F7F7] rounded-[44px] w-[42px] h-[76px] ' : 
        isSelected ? 'bg-[rgba(255,237,148,0.50)] rounded-[44px] w-[42px] h-[76px] ' : ''
      }`}
      
      onClick={onClick}>
        {dateInfo.isToday}
      <span className="text-sm text-[#666C77]">
          {dateInfo.dayOfWeek}
        </span>
      <div className="relative w-9 h-9">
        {/* 배경 원 (회색) */}
        <div className="absolute inset-0 rounded-full border-2 border-[#EDEDEE] transition-colors duration-300" />
        
        {/* 4등분된 원 (노란색) */}
        <div className="absolute inset-0">
          {[0, 1, 2, 3].map((segment) => (
            <div
              key={segment}
              className="absolute inset-0 rounded-full border-2 border-[#FFD700] transition-all duration-300"
              style={{
                clipPath: `polygon(
                  50% 50%,
                  50% 0%,
                  ${getSegmentFill(segment + 1) === 100 ? '100%' : '50%'} 0%,
                  ${getSegmentFill(segment + 1) === 100 ? '100%' : '50%'} ${getSegmentFill(segment + 1) === 100 ? '100%' : '50%'},
                  50% ${getSegmentFill(segment + 1) === 100 ? '100%' : '50%'}
                )`,
                transform: `rotate(${segment * 90}deg)`,
                transformOrigin: 'center',
              }}
            />
          ))}

          <span className="text-lg text-[#999EAA]">
            {dateInfo.date.split('/')[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

type StepCirclesProps = {
  startDate: Date;  // 시작 날짜
  duration: number; // 일 단위 기간
  progressData: number[]; // 각 일자별 진행도 (0-4 사이의 값)
  onDateSelect?: (date: Date) => void;
};

const StepCircles: React.FC<StepCirclesProps> = ({ startDate, duration, progressData, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 시작 날짜로부터 duration 일 동안의 날짜 정보 생성
  const generateDateInfo = (): DateInfo[] => {
    const dateInfos: DateInfo[] = [];
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    const today = new Date();
    const todayString = `${today.getMonth() + 1}/${today.getDate()}`;
    
    for (let i = 0; i < duration; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i); // 1일씩 증가
      
      const month = currentDate.getMonth() + 1;
      const date = currentDate.getDate();
      const dayOfWeek = daysOfWeek[currentDate.getDay()];
      
      // 오늘 날짜인지 확인 (월/일 형식으로 비교)
      const currentDateString = `${month}/${date}`;
      const isToday = currentDateString === todayString;
      
      dateInfos.push({
        date: currentDateString,
        dayOfWeek,
        progress: progressData[i] || 0,
        isToday
      });
    }
    
    return dateInfos;
  };

  const dateInfos = generateDateInfo();

  const handleDateClick = (index: number) => {
    const clickedDate = new Date(startDate);
    clickedDate.setDate(startDate.getDate() + index);
    setSelectedDate(clickedDate);
    onDateSelect?.(clickedDate);
  };

  return (
    <div
      style={{
        width: 'calc(100vw - var(--removed-body-scroll-bar-size, 0px))'
      }}
     className="relative left-1/2 -translate-x-1/2 w-[calc(100vw)] md:w-[calc(100vw-40px)] 
    w-full overflow-x-auto">
      <div className="flex gap-3 items-center">
        {dateInfos.map((dateInfo, index) => {
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + index);
          const isSelected = selectedDate?.getTime() === currentDate.getTime();

          return (
            <StepCircle 
              key={index} 
              dateInfo={dateInfo}
              isSelected={isSelected}
              onClick={() => handleDateClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StepCircles;