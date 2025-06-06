'use client'
import { useState, useEffect } from "react";
import Button from "./Button";

interface ButtonGroupProps {
    options: { id: string; label: string }[];
    maxSelect?: number; // 최대 선택 가능한 개수
    onChange: (selectedValues: string[]) => void;
  }
  
  export const MultiButtonGroup = ({
    options,
    maxSelect = 2,
    onChange
  }:ButtonGroupProps) => {
    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
  
    const handleButtonClick = (id: string) => {
      setSelectedButtons(prev => {
        if (prev.includes(id)) {
          // 이미 선택된 버튼을 클릭하면 제거
          return prev.filter(buttonId => buttonId !== id);
        } else if (prev.length < maxSelect) {
          // 최대 선택 개수보다 적으면 추가
          return [...prev, id];
        }
        return prev;
      });
    };
  
    useEffect(() => {
      onChange(selectedButtons);
    }, [selectedButtons, onChange]);
  
    return (
      <div className="flex gap-2">
        {options.map(option => (
          <Button
            key={option.id}
            onClick={() => handleButtonClick(option.id)}
            variant={selectedButtons.includes(option.id) ? "filled" : "outlined"}
          >
            {option.label}
          </Button>
        ))}
      </div>
    );
  };