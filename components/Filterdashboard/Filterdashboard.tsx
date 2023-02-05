import { FilterByRange } from '../FilterByRange';
import { Select } from '../Select';
import { FilterByLikes } from '../FilterByLikes';
import { Filterbycolor } from '../Filterbycolor';

const Filterdashboard = () => {
  return (
    <div className="container mx-auto mt-32 grid w-3/4 grid-cols-1 md:grid-cols-12 xl:px-40 xl:pr-64 2xl:px-24 2xl:pr-60">
      <div className=" relative col-span-1 mb-6 md:col-span-6 md:justify-start xl:w-72">
        <Select />
      </div>
      <div className="mt-3 md:col-span-6">
        <ul className=" hover:px3 flex gap-12 font-dm text-sm font-bold text-graysecondary  md:justify-end">
          <li className="rounded-xl py-1 px-3 hover:cursor-pointer hover:bg-white hover:text-black">
            All items
          </li>
          <li className="rounded-xl py-1 px-3 hover:cursor-pointer hover:bg-white hover:text-black">
            Art
          </li>
          <li className="rounded-xl py-1 px-3 hover:cursor-pointer hover:bg-white hover:text-black">
            Photography
          </li>
        </ul>
      </div>
      <div className="container mt-6  w-full grid-cols-12 md:w-72 md:justify-start">
        <p className="mb-3 font-poppins text-[12px] font-bold uppercase text-whitethird">
          Price range
        </p>
        <div className="col-span-12 mx-auto md:col-span-6">
          <div>
            <FilterByRange />
            <div className="mt-[26px] mb-[24px] border  border-blacksecondary"></div>
            <div className="relative">
              <p className="mb-4 ml-1 font-poppins text-xs font-bold uppercase text-whitethird">
                Likes
              </p>
              <FilterByLikes />
            </div>
            <div className="relative">
              <p className="mb-4 ml-1 mt-4 font-poppins text-xs font-bold uppercase text-whitethird">
                Open
              </p>
              <Filterbycolor />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterdashboard;
