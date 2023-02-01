// import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../Button';
import { CurrentbidCard } from '../CurrentbidCard';
import { type Props } from '@/pages';

const MainContent = ({ popularData, ethData }: Props): JSX.Element => {
  // const [currentSlide, setCurrentSlide] = useState<number>(0);
  // const currentData = popularData[currentSlide];
  const { media, author, authorAvatar, instantPrice } = popularData[0];

  // const handleNext = () => {
  //   if (currentSlide < popularData.length - 1) {
  //     setCurrentSlide(currentSlide + 1);
  //   }
  // };

  // const handlePrev = () => {
  //   if (currentSlide > 0) {
  //     setCurrentSlide(currentSlide - 1);
  //   }
  // };

  return (
    <section className="container mx-auto mb-32 w-3/4 grid-cols-12 justify-center xl:flex xl:items-center xl:gap-28">
      <picture className="col-span-1 md:col-span-8">
        <Image
          src={media.image}
          width={600}
          height={500}
          alt="Picture of the author"
          priority
          className="mx-auto rounded-lg text-center"
        />
      </picture>
      <div className="col-span-1 mt-8 md:col-span-2 md:items-start xl:mt-0 xl:w-1/3 xl:self-start">
        <h2 className="font-dm text-[72px] font-bold leading-[64px] text-white">
          {author} <span className="text-white">®</span>
        </h2>
        <div className="mt-6 flex items-center gap-12 ">
          <div className="flex items-center gap-3">
            <div className="mt-3 flex">
              <img
                src={authorAvatar}
                className="inline-block h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <p className="font-poppins text-xs font-normal text-graysecondary">
                Creator
              </p>
              <p className="font-poppins text-sm font-medium leading-[24px] text-white">
                {author}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="mt-3 flex">
              <img
                src="/user.svg"
                className="inline-block h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <p className="font-poppins text-xs font-normal text-graysecondary">
                Instant price
              </p>
              <p className="font-poppins text-sm font-medium leading-[24px] text-white">
                {instantPrice}
              </p>
            </div>
          </div>
        </div>
        <CurrentbidCard ethData={ethData} popularData={popularData} />
        <div className="flex flex-col">
          <div className="">
            <Button className="mt-10 w-full rounded-full bg-blue py-3 px-6 transition delay-150 ease-in-out hover:bg-bluedark xl:w-3/4">
              <p className="font-dm text-base font-bold leading-4 text-white">
                Place a bid
              </p>
            </Button>
          </div>
          <div>
            <Button className="mt-2 w-full rounded-full border border-graysecondary py-3 px-6 transition delay-150 ease-in-out hover:bg-gray xl:w-3/4">
              <p className="font-dm text-base font-bold leading-4 text-white">
                Place a bid
              </p>
            </Button>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-6">
          <Button className="py-4 px-4 text-graysecondary hover:rounded-full hover:border hover:border-graysecondary">
            <img src="/row_left.svg" alt="arrow icon" className="h-4 w-4 " />
          </Button>
          <Button className="py-4 px-4 text-graysecondary hover:rounded-full hover:border hover:border-graysecondary">
            <img src="/row_right.svg" alt="arrow icon" className="h-4 w-4 " />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
