'use client'
import { useState, useEffect } from "react";
import Button from "./Button";

interface SingleButtonGroupProps {
    options: { id: string; label: string }[];
    onChange: (selectedValue: string) => void;
  }
  
  export const SingleButtonGroup = ({
    options,
    onChange
  }:SingleButtonGroupProps) => {
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
  
    const handleButtonClick = (id: string) => {
      setSelectedButton(id);
    };
  
    useEffect(() => {
      if (selectedButton) {
        onChange(selectedButton);
      }
    }, [selectedButton, onChange]);
  
    return (
      <div className="flex gap-2">
        {options.map(option => (
          <Button
            key={option.id}
            onClick={() => handleButtonClick(option.id)}
            variant={selectedButton === option.id ? "filled" : "outlined"}
          >
            {option.label}
          </Button>
        ))}
      </div>
    );
  };