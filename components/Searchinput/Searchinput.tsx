import { Icon } from '@iconify/react';

const SearchInput = () => {
  return (
    <div className="mt-46 mx-auto  max-w-[1440px] grid-cols-1 justify-center md:grid-cols-12">
      <div className="relative">
        <input
          type="text"
          placeholder="Type to find something nice..."
          className="w-full  border-b-2 border-gray bg-black  py-3 pb-8 text-white outline-none placeholder:font-poppins placeholder:text-lg placeholder:font-light placeholder:text-white md:w-[90%] md:placeholder:text-xl"
        />
        <div className="absolute inset-y-0 right-0 mb-10 flex h-[40px] w-[40px] items-center rounded-full  bg-blue px-3 md:mb-6 md:mr-36">
          <Icon
            icon="material-symbols:search"
            color="#fcfcfd"
            width="20"
            height="20"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
