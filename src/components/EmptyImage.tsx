interface EmptyImageProps {
  variant: 'rectangle' | 'round';
  size: 'large' | 'small';
  className?: string;
}

export default function EmptyImage({ variant, size, className = '' }: EmptyImageProps) {
  const sizeStyles = {
    large: 'w-full h-[222px]',
    small: 'w-[40px] h-[40px]'
  };

  const variantStyles = {
    rectangle: 'rounded-lg',
    round: 'rounded-full'
  };

  const baseStyles = 'flex-shrink-0 bg-white';
  const shadowStyles = 'drop-shadow-[0_3.656px_7.311px_rgba(0,0,0,0.12)]';
  const borderStyles = 'border border-[#DADCDF]';
  const overlayStyles = 'relative after:absolute after:inset-0 after:bg-black/10';

  return (
    <div
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${size === 'small' ? `${shadowStyles} ${borderStyles}` : `${overlayStyles}`}
        ${className}
      `}
    />
  );
} 