import { useCallback, useState } from 'react';
import useFilterData from '@/hooks/useFilterData';
import { FilterByRange } from '../FilterByRange';
import { Select } from '../Select';
import { FilterByLikes } from '../FilterByLikes';
import { FilterByColor } from '../FilterByColor';
import { Card } from '../Card';
import { Icon } from '@iconify/react';
import { FilterByCategories } from '../FilterByCategories';
import { Button } from '../Button';
import { type Props } from '@/pages';
import { type Entity } from '@/interfaces/entity';
import { motion } from 'framer-motion';

const Filterdashboard = ({
  initialData,
}: Omit<Props, 'ethPriceData' | 'auctionData' | 'endsAt'>) => {
  const { handleOptionChange, selectedOption, data, setData } =
    useFilterData(initialData);
  const [showCount, setShowCount] = useState<number>(6);

  const handleResertFilter = () => {
    setData([]);
  };

  const handleLoadMore = () => {
    setShowCount(showCount + 6);
  };

  const handleChangeRange = useCallback(
    (dataRange: Entity[]) => {
      const resultFilterRange = dataRange.length > 0 ? dataRange : initialData;
      setData(resultFilterRange);
    },
    [initialData, setData],
  );

  return (
    <>
      <div className="container mx-auto mt-20 mb-24 flex items-center justify-between md:flex-row">
        <div className="relative w-full md:w-[256px]">
          <Select handleOptionChange={handleOptionChange} />
        </div>
        <div className="mr-48 w-full md:w-[256px] ">
          <FilterByCategories />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-6 mt-8 w-[375px] pr-8 md:col-span-3 md:w-[256px] lg:col-span-1">
          <div className="relative min-w-[256px] md:w-[375]">
            <div className="flex flex-col gap-y-6">
              <div>
                <p className="mb-3 font-poppins text-[12px] font-bold uppercase text-whitethird">
                  Price range
                </p>
                <FilterByRange
                  handleChangeRange={handleChangeRange}
                  initialData={initialData}
                />
              </div>
              <div className="mt-[26px] border border-blacksecondary"></div>
              <div className="relative">
                <p className="mb-4 ml-1 font-poppins text-xs font-bold uppercase text-whitethird">
                  Likes
                </p>
                <FilterByLikes handleOptionChange={handleOptionChange} />
              </div>
              <div className="relative">
                <p className="mb-4 ml-1 font-poppins text-xs font-bold uppercase text-whitethird">
                  Open
                </p>
                <FilterByColor />
              </div>
              <div className="mt-[26px] border  border-blacksecondary"></div>
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-white">
                  <Icon icon="ion:close" width="18" height="18" />
                </div>
                <div className="cursor-pointer">
                  <button
                    onClick={handleResertFilter}
                    className="font-dm text-sm font-bold text-white outline-none"
                  >
                    Reset filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-6 mt-[30px] ml-20 flex flex-wrap md:col-span-3 lg:col-span-5">
          <div>
            {selectedOption !== null && (
              <div className="flex flex-wrap gap-4">
                {data.slice(0, showCount).map((item) => (
                  <motion.div whileHover={{ scale: 1.05 }} key={item.id}>
                    <Card item={item} />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          {data.length > showCount && (
            <div
              className={
                data.length > showCount
                  ? 'mx-auto mt-10 flex justify-center'
                  : 'hidden'
              }
            >
              <Button
                className=" mt-8 flex items-center justify-center  rounded-full border border-graysecondary py-2 px-4 font-dm text-sm font-bold text-white outline-none"
                callback={handleLoadMore}
              >
                <img src="/load.svg" alt="icon load" className="mr-2" />
                <span>Load more</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filterdashboard;
