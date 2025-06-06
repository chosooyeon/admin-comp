import React from 'react';

interface InputProps {
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false
}:InputProps) => {
  return (
    <div className="space-y-1">
      <div className="relative">
        {label && (
          <span className="absolute left-3 top-2 text-xs text-gray-500">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            w-full px-3 pt-6 pb-2 border rounded-md shadow-sm
            focus:outline-none focus:ring-1
            ${error 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            }
            ${disabled ? 'bg-gray-100 text-gray-500' : 'bg-white'}
          `}
        />
      </div>
      {error && (
        <p className="text-sm text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;