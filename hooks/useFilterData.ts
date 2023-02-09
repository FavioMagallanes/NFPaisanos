import { type Entity } from '@/interfaces/entity';
import { useState, useMemo, useEffect } from 'react';

type Filter = 'most' | 'least' | 'newest' | 'oldest';

const filtered = {
  most: (data: Entity[]) => data.sort((a, b) => b.likes - a.likes),
  least: (data: Entity[]) => data.sort((a, b) => a.likes - b.likes),
  newest: (data: Entity[]) =>
    data.sort(
      (a, b) => (new Date(b.createdAt) as any) - (new Date(a.createdAt) as any),
    ),
  oldest: (data: Entity[]) =>
    data.sort(
      (a, b) => (new Date(a.createdAt) as any) - (new Date(b.createdAt) as any),
    ),
};

const useFilterData = (initialData: Entity[]) => {
  const [selectedOption, setSelectedOption] = useState<Filter>();
  const [data, setData] = useState<Entity[]>([]);

  const filteredData = useMemo(() => {
    const cloneFilterData = [...initialData];

    if (selectedOption === undefined) return initialData;

    if (selectedOption in filtered) {
      return filtered[selectedOption](cloneFilterData);
    } else {
      return initialData;
    }
  }, [selectedOption, initialData]);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(
      event.target.value as 'most' | 'least' | 'newest' | 'oldest',
    );
  };

  useEffect(() => {
    setData(filteredData);
  }, [filteredData, selectedOption]);

  return {
    data,
    handleOptionChange,

    selectedOption,
    setSelectedOption,
    setData,
  };
};

export default useFilterData;
