import Image from 'next/image';
import { Button } from '../Button';
import { CurrentbidCard } from '../CurrentbidCard';
import useCarousel from '@/hooks/useCarousel';
import { type Props } from '@/pages';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const MainContent = ({
  auctionData,
  ethPriceData,
}: Omit<Props, 'endsAt' | 'initialData'>): JSX.Element => {
  const { currentPage, handlePrev, handleNext } = useCarousel(auctionData);
  const { media, author, authorAvatar, instantPrice, endsAt } =
    auctionData[currentPage];

  return (
    <>
      <motion.section
        className="container mx-auto mb-32 grid-cols-12 justify-between xl:flex xl:items-center xl:gap-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.picture
          className="col-span-1 md:col-span-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={media.image}
            width={783}
            height={1024}
            alt="Picture of the author"
            priority
            className="mx-auto rounded-lg text-center"
          />
        </motion.picture>
        <div className="col-span-1  mt-8  max-w-[1440px] md:col-span-2 md:items-start xl:mt-0 xl:w-1/3 xl:self-start">
          <motion.h2
            className="w-[352px] font-dm text-[51px] font-bold leading-[64px] text-white md:text-[72px]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {author} <span className="text-white">®</span>
          </motion.h2>
          <div className="mt-6 flex items-center gap-8 ">
            <div className="flex items-center gap-3">
              <div className="mt-3 flex">
                <Image
                  src={authorAvatar}
                  className="inline-block rounded-full"
                  width={36}
                  height={36}
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
            <div className="flex items-center gap-2">
              <Image width={24} height={24} alt="icon" src={'/user.svg'} />

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
          <CurrentbidCard
            ethPriceData={ethPriceData}
            auctionData={auctionData}
            endsAt={endsAt}
          />
          <div className="flex flex-col">
            <div>
              <Button className="mt-10 w-full rounded-full bg-blue py-4 px-6 transition delay-150 ease-in-out hover:bg-bluedark xl:w-3/4">
                <p className="font-dm text-base font-bold leading-4 text-white">
                  Place a bid
                </p>
              </Button>
            </div>
            <div>
              <Button className="mt-2 w-full rounded-full border border-graysecondary py-4 px-6 transition delay-150 ease-in-out hover:bg-gray xl:w-3/4">
                <p className="font-dm text-base font-bold leading-4 text-white">
                  View item
                </p>
              </Button>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 md:justify-start">
            <Button
              callback={handlePrev}
              className="py-3 px-3 text-graysecondary hover:rounded-full hover:border hover:border-graysecondary"
            >
              <Icon
                icon="tabler:arrow-narrow-right"
                color="#777e91"
                width="24"
                height="24"
                rotate={2}
              />
            </Button>
            <Button
              callback={handleNext}
              className="py-3 px-3 text-graysecondary hover:rounded-full hover:border hover:border-graysecondary"
            >
              <Icon
                icon="tabler:arrow-narrow-right"
                color="#777e91"
                width="24"
                height="24"
              />
            </Button>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default MainContent;
