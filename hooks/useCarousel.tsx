import { type Entity } from '@/interfaces/entity';
import { useState } from 'react';

const useCarousel = (data: Entity[]) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlePrev = () => {
    if (currentPage === 0) {
      setCurrentPage(data.length - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage === data.length - 1) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    currentPage,
    handlePrev,
    handleNext,
  };
};

export default useCarousel;
