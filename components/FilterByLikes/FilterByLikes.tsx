import { Icon } from '@iconify/react';

const FilterByLikes = () => {
  return (
    <>
      <select className="focus:shadow-outline w-full cursor-pointer appearance-none rounded-lg border-2 border-gray bg-black py-3.5 px-5 pr-8 font-poppins text-sm font-medium leading-tight text-white focus:outline-none">
        <option value="" disabled selected hidden>
          Most Liked
        </option>
        <option>Most Liked</option>
        <option>Least Liked</option>
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
    </>
  );
};

export default FilterByLikes;
