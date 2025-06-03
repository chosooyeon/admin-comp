interface TextProps {
  children: React.ReactNode;
  className?: string;
}

export const SubText = ({ children, className = '' }: TextProps) => {
  return (
    <p className={`text-xs text-gray-sub font-pretendard font-normal ${className}`}>
      {children}
    </p>
  );
}; 