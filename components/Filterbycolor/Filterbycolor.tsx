import { useState } from 'react';
import { Icon } from '@iconify/react';

const Filterbycolor = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <input
        type="text"
        placeholder="Colors"
        readOnly
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        className="focus:shadow-outline  w-full cursor-pointer appearance-none  rounded-lg border-2 border-gray bg-black py-3.5 px-5 pr-8 font-poppins text-sm font-medium leading-tight text-white placeholder:font-poppins placeholder:text-sm placeholder:font-medium placeholder:text-white focus:outline-none"
      ></input>
      {isVisible && (
        <div className="mt-3 flex  flex-col gap-y-6 rounded-xl border-2 border-gray bg-graythird p-4 shadow-lg">
          <div className=" flex gap-3 p-2 text-white hover:cursor-pointer hover:rounded-lg hover:bg-black ">
            <div className="h-5 w-5 rounded-full border-2 border-blue bg-graythird"></div>
            <p className="font-poppins text-sm font-normal text-white">
              All colors
            </p>
          </div>
          <div className="flex gap-3 p-2 text-white hover:cursor-pointer hover:rounded-lg hover:bg-black">
            <span className="h-5 w-5 rounded-full bg-black"></span>
            <p className="font-poppins text-sm font-normal text-white">Black</p>
          </div>
          <div className="flex gap-3 p-2 text-white hover:cursor-pointer hover:rounded-lg hover:bg-black">
            <span className="h-5 w-5 rounded-full bg-green"></span>
            <p className="font-poppins text-sm font-normal text-white">Green</p>
          </div>
          <div className="flex gap-3 p-2 text-white hover:cursor-pointer hover:rounded-lg hover:bg-black">
            <span className="h-5 w-5 rounded-full bg-pink"></span>
            <p className="font-poppins text-sm font-normal text-white">Pink</p>
          </div>
          <div className="  flex gap-3 p-2 text-white hover:cursor-pointer hover:rounded-lg hover:bg-black">
            <span className="h-5 w-5 rounded-full bg-purple"></span>
            <p className="font-poppins text-sm font-normal text-white">
              Purple
            </p>
          </div>
        </div>
      )}
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

export default Filterbycolor;
