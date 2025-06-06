import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'filled' | 'outlined';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

const Button = ({ children, className = '', variant = 'outlined', ...props }: ButtonProps) => {
  const getVariantStyles = (variant: ButtonVariant) => {
    switch (variant) {
      case 'filled':
        return `
          bg-[#4E5968] 
          text-white 
          border-[#4E5968]
          hover:bg-[#333B47]
          active:bg-[#333B47]
        `;
      case 'outlined':
      default:
        return `
          bg-white 
          text-[#4E5968]
          border-[#B7BABF]
          hover:border-[#4E5968]
          active:bg-[#F2F4F6]
        `;
    }
  };

  return (
    <button
      className={`
        flex w-full justify-center items-center
        px-5 py-3.5 gap-2.5
        rounded-xl border
        transition-colors duration-200
        ${getVariantStyles(variant)}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;