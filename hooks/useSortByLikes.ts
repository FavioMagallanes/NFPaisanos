import { useState, useMemo, useEffect } from 'react';
import { type Mockup } from '@/interfaces/mockup';

const useSortByLikes = (mockup: Mockup[]) => {
  const [selectedOption, setSelectedOption] = useState<
    'most' | 'least' | 'reset' | null
  >(null);
  const [data, setData] = useState<Mockup[]>([]);

  const filteredData = useMemo(() => {
    if (selectedOption === 'most') {
      return mockup.sort((a, b) => b.likes - a.likes);
    }

    if (selectedOption === 'least') {
      return mockup.sort((a, b) => a.likes - b.likes);
    }

    return [];
  }, [selectedOption, mockup]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value as 'most' | 'least' | 'reset');
  };

  useEffect(() => {
    setData(filteredData);
  }, [filteredData]);

  return {
    data,
    handleOptionChange,
    selectedOption,
  };
};

export default useSortByLikes;
