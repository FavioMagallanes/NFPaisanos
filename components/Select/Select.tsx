// interface SelectProps {
//   options: Array<{ value: string; label: string }>;
//   onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
//   name?: string;
//   value?: string;
// }

const Select = () => {
  return (
    <>
      <select className="focus:shadow-outline w-full cursor-pointer appearance-none rounded-lg border-2 border-gray bg-black py-3.5 px-5 pr-8 font-poppins text-sm font-medium leading-tight text-white focus:outline-none">
        <option value="" disabled selected hidden>
          Newest
        </option>
        <option>Newest</option>
        <option>Oldest</option>
      </select>
      <div className="absolute inset-y-0 right-0 mr-5 mt-2 flex h-8 cursor-pointer items-center rounded-full border-2 border-gray px-2.5 text-gray">
        <img src="/row_down.svg" alt="row icon" className="" />
      </div>
    </>
  );
};

export default Select;
