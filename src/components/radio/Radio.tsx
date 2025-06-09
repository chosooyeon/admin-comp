interface RadioOption {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
}

const RadioButtonGroup = ({
  options,
  value,
  onChange,
  name,
}:RadioButtonGroupProps) => {
  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="cursor-pointer w-4 h-4 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;