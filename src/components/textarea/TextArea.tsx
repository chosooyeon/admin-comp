import { useState, ChangeEvent } from 'react';

interface TextAreaProps {
  maxLength?: number;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  maxLength = 1000,
  placeholder = '',
  value = '',
  onChange
}) => {
  const [text, setText] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setText(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="relative w-full">
      <textarea
        value={text}
        onChange={handleChange}
        maxLength={maxLength}
        placeholder={placeholder}
        className="w-full min-h-[150px] p-3 border border-gray-300 rounded-md resize-vertical 
                 text-sm leading-normal focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
      />
      <div className="absolute bottom-2 right-2 text-xs text-gray-500">
        {text.length}/{maxLength}
      </div>
    </div>
  );
};

export default TextArea;