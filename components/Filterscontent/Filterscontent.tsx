import { Select } from '@/components/Select';

const Filterscontent = () => {
  return (
    <div className="container mx-auto mt-32 grid w-3/4 grid-cols-1 md:grid-cols-12 xl:px-40 xl:pr-64 2xl:px-24 2xl:pr-60">
      <div className=" relative col-span-1 mb-6 md:col-span-6 md:justify-start xl:w-72">
        <Select />
      </div>
      <div className="mt-3 md:col-span-6">
        <ul className=" hover:px3 flex gap-12 font-dm text-sm font-bold text-graysecondary  md:justify-end">
          <li className="rounded-xl py-1  px-3 hover:cursor-pointer hover:bg-white hover:text-black">
            All items
          </li>
          <li className="rounded-xl py-1  px-3 hover:cursor-pointer hover:bg-white hover:text-black">
            Art
          </li>
          <li className="rounded-xl py-1  px-3 hover:cursor-pointer hover:bg-white hover:text-black">
            Photography
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filterscontent;
