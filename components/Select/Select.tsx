import { Icon } from '@iconify/react';

interface SelectProps {
  handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ handleOptionChange }: SelectProps) => {
  return (
    <>
      <select
        className="select focus:shadow-none focus:outline-none"
        onChange={handleOptionChange}
        defaultValue=""
      >
        <option value="" disabled selected hidden>
          Newest
        </option>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <div className="absolute inset-y-0 right-0 mr-5 mt-2 flex h-8 cursor-pointer items-center rounded-full border-2 border-gray px-2.5 text-gray">
        <Icon
          icon="material-symbols:arrow-forward-ios-rounded"
          color="#777e91"
          width="10"
          height="10"
          rotate={1}
        />
      </div>
    </>
  );
};

export default Select;
