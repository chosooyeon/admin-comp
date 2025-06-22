import React, { useState, useRef, useEffect } from 'react';

type ScaleRulerProps = {
  minValue?: number;
  maxValue?: number;
  initialValue?: number;
  onValueChange?: (value: number) => void;
};

const ScaleRuler: React.FC<ScaleRulerProps> = ({
  minValue = 0,
  maxValue = 100,
  initialValue = 50,
  onValueChange
}) => {
  const [currentValue, setCurrentValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 눈금 생성
  const generateScaleMarks = () => {
    const marks = [];
    const totalUnits = maxValue - minValue + 1;
    
    for (let i = 0; i <= totalUnits; i++) {
      const value = minValue + i;
      let height = 19; // 1단위 기본 높이
      let backgroundColor = '#DADCDF'; // 1단위 기본 색상
      
      if (value % 10 === 0) {
        height = 52; // 10단위 높이
        backgroundColor = '#999EAA'; // 10단위 색상
      } else if (value % 5 === 0) {
        height = 36; // 5단위 높이
        backgroundColor = '#DADCDF'; // 5단위 색상
      }
      
      marks.push({
        value,
        height,
        backgroundColor,
        isMajor: value % 10 === 0
      });
    }
    
    return marks;
  };

  const marks = generateScaleMarks();

  // 스크롤 위치를 값으로 변환
  const scrollToValue = (scrollLeft: number) => {
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const centerOffset = containerWidth / 2;
    const unitWidth = 20; // 각 단위의 너비
    const scrollOffset = scrollLeft + centerOffset;
    const value = Math.round(scrollOffset / unitWidth) + minValue;
    return Math.max(minValue, Math.min(maxValue, value));
  };

  // 값을 스크롤 위치로 변환
  const valueToScroll = (value: number) => {
    const unitWidth = 20;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const centerOffset = containerWidth / 2;
    return (value - minValue) * unitWidth - centerOffset;
  };

  // 마우스/터치 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startX;
    const newScrollLeft = startScrollLeft - deltaX;
    
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = newScrollLeft;
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // 스냅 기능: 가장 가까운 1단위로 스냅
    if (scrollContainerRef.current) {
      const currentScrollLeft = scrollContainerRef.current.scrollLeft;
      const snappedValue = scrollToValue(currentScrollLeft);
      const snappedScrollLeft = valueToScroll(snappedValue);
      
      scrollContainerRef.current.scrollTo({
        left: snappedScrollLeft,
        behavior: 'smooth'
      });
      
      setCurrentValue(snappedValue);
      onValueChange?.(snappedValue);
    }
  };

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setStartScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.touches[0].clientX - startX;
    const newScrollLeft = startScrollLeft - deltaX;
    
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = newScrollLeft;
    }
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && !isDragging) {
        const scrollLeft = scrollContainerRef.current.scrollLeft;
        const value = scrollToValue(scrollLeft);
        setCurrentValue(value);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isDragging, minValue, maxValue]);

  // 초기값으로 스크롤 위치 설정
  useEffect(() => {
    if (scrollContainerRef.current) {
      const initialScrollLeft = valueToScroll(initialValue);
      scrollContainerRef.current.scrollLeft = initialScrollLeft;
    }
  }, [initialValue]);

  return (
    <div className="relative w-full h-[120px] flex items-center justify-center">
      {/* 가운데 고정된 선 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className="w-[5px] h-[102px] bg-[#FFBE1C]"
          style={{ transform: 'translateX(-50%)' }}
        />
      </div>

      {/* 현재 값 표시 */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-[#FFBE1C] text-white px-3 py-1 rounded-full text-sm font-medium">
          {currentValue}
        </div>
      </div>

      {/* 눈금 컨테이너 */}
      <div 
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
      >
        <div
          ref={scrollContainerRef}
          className="flex items-end h-full overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* 왼쪽 여백 */}
          <div className="flex-shrink-0 w-1/2" />
          
          {/* 눈금들 */}
          {marks.map((mark, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center"
              style={{ width: '20px' }}
            >
              <div
                className="w-[2px]"
                style={{
                  height: `${mark.height}px`,
                  backgroundColor: mark.backgroundColor
                }}
              />
              {mark.isMajor && (
                <span className="text-xs text-[#666C77] mt-1">
                  {mark.value}
                </span>
              )}
            </div>
          ))}
          
          {/* 오른쪽 여백 */}
          <div className="flex-shrink-0 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ScaleRuler;