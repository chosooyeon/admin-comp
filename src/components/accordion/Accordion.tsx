'use client';
import { useState } from 'react';
import { Icon } from '@/components/icons';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white rounded-[12px] h-[109px]">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium">{title}</h3>
        <Icon 
          name="chevron-right" 
          size={18} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        />
      </div>
      <div 
        className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-sm text-gray-600">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;