import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button
      className={`
        flex w-full justify-center items-center
        px-5 py-3.5 gap-2.5
        rounded-xl border border-[#B7BABF]
        bg-white
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 