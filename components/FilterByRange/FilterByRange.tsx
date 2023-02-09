import { useEffect } from 'react';
import { useRangeInput } from '@/hooks/useRangeInput';
import { type Entity } from '@/interfaces/entity';

interface Props {
  handleChangeRange: (data: Entity[]) => void;
  initialData: Entity[];
}

const Rangefilter = ({ handleChangeRange, initialData }: Props) => {
  const { value, showValue, inputRef, handleChange, handleFocus, handleBlur } =
    useRangeInput(0);

  useEffect(() => {
    const resulTRange = initialData.filter(
      (nft) => parseFloat(nft.instantPrice.replace('ETH', '').trim()) <= value,
    );
    handleChangeRange(resulTRange);
  }, [value, initialData, handleChangeRange]);

  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-6 ">
        {showValue && (
          <span
            style={{ left: `calc(${(value / 10) * 100}% - 0.5rem)` }}
            className="absolute bottom-14 rounded-full bg-white py-1 px-1 font-poppins text-xs font-semibold text-graythird shadow-md"
          >
            {value} ETH
          </span>
        )}
        <input
          className="range"
          type="range"
          name="range"
          min="0"
          max="10"
          step="1"
          value={value}
          onChange={handleChange}
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="mt-3 flex justify-between">
        <span className="font-poppins text-sm text-[14px] font-medium text-white">
          0.01 ETH
        </span>
        <span
          id="rangeValue"
          className="font-poppins text-sm text-[14px] font-medium text-white"
        >
          10 ETH
        </span>
      </div>
    </div>
  );
};

export default Rangefilter;
