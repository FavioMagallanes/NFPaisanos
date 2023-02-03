import { Icon } from '@iconify/react';

const SearchInput = () => {
  return (
    <div className="mt-46 container mx-auto w-3/4 grid-cols-1 justify-center md:grid-cols-12 xl:px-40 xl:pr-64 2xl:px-32 2xl:pr-56">
      <div className="relative">
        <input
          type="text"
          placeholder="Type to find something nice..."
          className=" w-full border-b-2 border-gray bg-black px-4 py-3 pr-10 pb-8 text-white outline-none placeholder:font-poppins placeholder:text-lg placeholder:font-light placeholder:text-white md:w-full md:placeholder:text-xl"
        />
        <div className="absolute inset-y-0 right-0 mb-10 flex h-[40px] w-[40px] items-center rounded-full  bg-blue px-3 md:mb-6 md:mr-3">
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
