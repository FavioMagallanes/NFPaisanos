import { Button } from '../Button';

const Hero = (): JSX.Element => {
  return (
    <div className="container mx-auto mt-16 flex flex-col  items-center justify-center">
      <div>
        <p className="text-center font-poppins text-[10px] font-bold uppercase text-graysecondary lg:text-[14px]">
          Create, explore, & sell digital art nfts.
        </p>
      </div>
      <div className="mt-2 mb-6">
        <h2 className="text-center font-dm text-[38px] font-bold leading-8 text-white lg:text-[40px] lg:leading-[48px]">
          The new creative <br className="xl:hidden" /> economy.
        </h2>
      </div>
      <Button>
        <p className="px-3 py-1 font-dm text-sm font-bold text-graysecondary">
          Explore
        </p>
      </Button>
    </div>
  );
};

export default Hero;
