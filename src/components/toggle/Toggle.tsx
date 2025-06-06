interface ToggleProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
  }
  
  export default function Toggle({
    checked,
    onChange,
    label,
    disabled
  }: ToggleProps) {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            disabled={disabled}
          />
          <div
            className={`
              w-10 h-6 rounded-full transition-colors
              ${checked ? 'bg-blue-600' : 'bg-gray-200'}
              ${disabled ? 'opacity-50' : ''}
            `}
          >
            <div
              className={`
                absolute w-4 h-4 bg-white rounded-full transition-transform
                transform ${checked ? 'translate-x-5' : 'translate-x-1'}
                top-1
              `}
            />
          </div>
        </div>
        {label && (
          <span className={`ml-3 ${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
            {label}
          </span>
        )}
      </label>
    );
  }