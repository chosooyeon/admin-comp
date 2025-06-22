'use client';

import { useState, useEffect } from 'react';
import { getRemainingTimeWithColor } from '@/util/time.util';

export default function RemainingTimeDisplay() {
  const [timeInfo, setTimeInfo] = useState({ text: '', isRed: false });

  useEffect(() => {
    // 초기 로드
    updateTimeInfo();
    
    // 1분마다 업데이트
    const interval = setInterval(updateTimeInfo, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const updateTimeInfo = () => {
    const info = getRemainingTimeWithColor();
    setTimeInfo(info);
  };

  return (
    <div className="p-4">
      <span 
        className={`text-lg font-semibold ${
          timeInfo.isRed ? 'text-red-500' : 'text-gray-700'
        }`}
      >
        {timeInfo.text}
      </span>
    </div>
  );
} 