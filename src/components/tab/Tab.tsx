interface TabOption {
  id: string;
  label: string;
}

interface TabProps {
  options: TabOption[];
  selectedId: string;
  onChange: (id: string) => void;
}

const Tab = ({ options, selectedId, onChange }:TabProps) => {
  return (
    <div className="inline-flex items-center rounded-[112px] bg-[#F7F7F7]">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`h-[38px] px-[40px] flex justify-center items-center rounded-[112px] transition-all
            ${selectedId === option.id 
              ? 'bg-[#FFD700]' 
              : 'hover:bg-opacity-10 hover:bg-gray-500'
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default Tab;