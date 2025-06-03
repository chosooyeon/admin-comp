import { ChevronLeftIcon, HomeIcon, PlusIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// 필요한 아이콘들을 import 해주세요

interface IconProps {
  name: 'chevron-left' | 'home' | 'plus' | 'chevron-right';  // 사용할 아이콘 이름들을 타입으로 정의
  className?: string;
  size?: number;
  color?: string;
}

const iconComponents = {
  'chevron-left': ChevronLeftIcon,
  'home': HomeIcon,
  'plus': PlusIcon,
  'chevron-right': ChevronRightIcon,
};

export const Icon = ({ name, className, size = 24, color }: IconProps) => {
  const IconComponent = iconComponents[name];
  
  return (
    <IconComponent
      className={className}
      width={size}
      height={size}
      color={color}
    />
  );
};

// 필요한 아이콘들을 추가로 만들어주세요 