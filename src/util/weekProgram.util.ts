/**
 * 주차 프로그램 리스트를 생성하는 유틸리티
 */

export interface WeekProgram {
  week: number;
  month: number;
  weekOfMonth: number;
  label: string;
}

/**
 * 특정 날짜부터 시작하여 지정된 주차 수만큼의 프로그램 리스트를 생성하는 함수
 * @param startDate - 시작 날짜 (예: "2024-04-01")
 * @param totalWeeks - 총 주차 수 (예: 8)
 * @returns 주차 프로그램 리스트
 */
export const generateWeekProgramList = (startDate: string, totalWeeks: number): WeekProgram[] => {
  const start = new Date(startDate);
  const programs: WeekProgram[] = [];
  
  for (let i = 0; i < totalWeeks; i++) {
    const currentDate = new Date(start);
    currentDate.setDate(start.getDate() + (i * 7));
    
    const month = currentDate.getMonth() + 1; // 0-based index를 1-based로 변환
    const weekOfMonth = getWeekOfMonth(currentDate);
    
    programs.push({
      week: i + 1,
      month,
      weekOfMonth,
      label: `${month}월 ${weekOfMonth}주차`
    });
  }
  
  return programs;
};

/**
 * 특정 날짜가 해당 월의 몇 번째 주차인지 계산하는 함수
 * @param date - 계산할 날짜
 * @returns 해당 월의 주차 (1-5)
 */
const getWeekOfMonth = (date: Date): number => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay(); // 0: 일요일, 1: 월요일, ...
  
  // 해당 월의 첫 번째 주의 시작일 (월요일 기준)
  const firstMonday = new Date(firstDayOfMonth);
  const daysToAdd = dayOfWeek === 0 ? 1 : 8 - dayOfWeek; // 일요일이면 다음 주 월요일로
  firstMonday.setDate(1 + daysToAdd);
  
  // 현재 날짜가 첫 번째 월요일보다 이전이면 이전 달의 마지막 주차
  if (date < firstMonday) {
    return 1;
  }
  
  // 현재 날짜와 첫 번째 월요일의 차이를 계산
  const diffTime = date.getTime() - firstMonday.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const weekOfMonth = Math.floor(diffDays / 7) + 1;
  
  return Math.min(weekOfMonth, 5); // 최대 5주차로 제한
};

/**
 * 사용 예시를 위한 헬퍼 함수들
 */

/**
 * 2024년 4월 1일부터 8주차 프로그램 리스트 생성
 */
export const generate8WeekProgram = (): WeekProgram[] => {
  return generateWeekProgramList("2024-04-01", 8);
};

/**
 * 2024년 4월 3일부터 12주차 프로그램 리스트 생성
 */
export const generate12WeekProgram = (): WeekProgram[] => {
  return generateWeekProgramList("2024-04-03", 12);
};

/**
 * 주차 프로그램 리스트를 콘솔에 출력하는 함수 (디버깅용)
 */
export const printWeekProgramList = (programs: WeekProgram[]): void => {
  console.log("주차 프로그램 리스트:");
  programs.forEach(program => {
    console.log(`${program.week}주차: ${program.label}`);
  });
}; 