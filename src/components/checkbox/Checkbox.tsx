import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false
}:CheckboxProps) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 disabled:opacity-50"
      />
      <span className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;