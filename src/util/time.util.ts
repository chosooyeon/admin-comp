/**
 * 오늘이 끝날 때까지 남은 시간과 분을 계산하는 함수
 */
export const getRemainingTimeUntilTodayEnd = (): { hours: number; minutes: number } => {
  const today = new Date();
  
  // 오늘의 마지막 시간 (23:59:59.999)
  const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999);
  
  // 현재 시간과 마지막 시간의 차이 계산
  const timeDifference = endOfDay.getTime() - today.getTime();
  
  // 밀리초를 시간과 분으로 변환
  const totalMinutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  
  return { hours, minutes };
};

/**
 * 남은 시간을 포맷된 텍스트로 반환하는 함수
 */
export const getFormattedRemainingTime = (): string => {
  const { hours, minutes } = getRemainingTimeUntilTodayEnd();
  
  return `미션 만료까지 ${hours}시간 ${minutes}분`;
};

/**
 * 5시간 미만인지 확인하는 함수
 */
export const isLessThan5Hours = (): boolean => {
  const { hours, minutes } = getRemainingTimeUntilTodayEnd();
  const totalHours = hours + minutes / 60;
  return totalHours < 5;
};

/**
 * 남은 시간과 색상 정보를 함께 반환하는 함수
 */
export const getRemainingTimeWithColor = (): {
  text: string;
  isRed: boolean;
} => {
  const text = getFormattedRemainingTime();
  const isRed = isLessThan5Hours();
  
  return { text, isRed };
}; 