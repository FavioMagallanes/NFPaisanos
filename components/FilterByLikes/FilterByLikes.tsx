import { Icon } from '@iconify/react';

interface FilterByLikesProps {
  handleOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterByLikes = ({ handleOptionChange }: FilterByLikesProps) => {
  return (
    <div>
      <select
        className="select focus:shadow-none focus:outline-none"
        onChange={handleOptionChange}
        defaultValue=""
      >
        <option value="" disabled selected hidden>
          Most Liked
        </option>
        <option value="most">Most Liked</option>
        <option value="least">Least Liked</option>
      </select>
      <div className="absolute inset-y-8 right-0 mr-5 mt-2 flex h-8 cursor-pointer items-center rounded-full border-2 border-gray px-2.5 text-gray">
        <Icon
          icon="material-symbols:arrow-forward-ios-rounded"
          color="#777e91"
          width="10"
          height="10"
          rotate={1}
        />
      </div>
    </div>
  );
};

export default FilterByLikes;
