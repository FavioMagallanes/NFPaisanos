import { useState, useRef, useEffect } from 'react';

export const useRangeInput = (initialValue: number) => {
  const [value, setValue] = useState<number>(initialValue);
  const [showValue, setShowValue] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const rangeInput = document.getElementById('rangeInput');
    if (rangeInput != null) {
      rangeInput.title = `Value: ${value}`;
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value, 10));
  };

  const handleFocus = () => {
    setShowValue(true);
  };

  const handleBlur = () => {
    setShowValue(false);
  };

  useEffect(() => {
    const handleInput = () => {
      const input = inputRef.current;
      if (input != null) {
        const inputValue = Number(input.value);
        setValue(inputValue);
      }
    };

    const input = inputRef.current;
    if (input != null) {
      input.addEventListener('input', handleInput);
    }

    return () => {
      if (input != null) {
        input.removeEventListener('input', handleInput);
      }
    };
  }, [inputRef]);

  return {
    value,
    setValue,
    showValue,
    setShowValue,
    inputRef,
    handleChange,
    handleFocus,
    handleBlur,
  };
};
