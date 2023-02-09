const Filterbycategories = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="py-2 px-3 hover:cursor-pointer hover:rounded-full hover:bg-white hover:text-black">
        <button className="font-dm text-sm font-bold text-graysecondary">
          All items
        </button>
      </div>
      <div className="py-2 px-3 hover:cursor-pointer hover:rounded-full hover:bg-white hover:text-black">
        <button className="font-dm text-sm font-bold text-graysecondary">
          Art
        </button>
      </div>
      <div className="py-2 px-3 hover:cursor-pointer hover:rounded-full hover:bg-white hover:text-black">
        <button className="font-dm text-sm font-bold text-graysecondary">
          Photography
        </button>
      </div>
    </div>
  );
};

export default Filterbycategories;
