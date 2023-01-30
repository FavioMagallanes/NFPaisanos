// import type { Intity } from '@/interfaces/intity';
import Image from 'next/image';
// import axios from 'axios';
// import { useQuery } from 'react-query';
import { mockup } from '@/mockup';
import { Currentbid } from '../Currentbid';

const Auction = (): JSX.Element => {
  // const getMainDataContent = async (): Promise<Intity> => {
  //   const { data } = await axios.get(
  //     'http://challenges.us-east-1.elasticbeanstalk.com/nfpaisanos/popular',
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         apiKey: 'YiAevvfKl8MCOF5Lo074dWdfRE8c1iGFX0WskgtO/KI=',
  //       },
  //     },
  //   );
  //   return data;
  // };

  // const { data } = useQuery('mainData', getMainDataContent);

  return (
    <section className="container mx-auto w-3/4 grid-cols-12 justify-center xl:flex xl:items-center xl:gap-28">
      <article className="col-span-1  mt-20 md:col-span-8">
        <Image
          src={mockup[1].media.image}
          alt="mockup"
          width={650}
          height={500}
          className="mx-auto rounded-lg text-center"
        />
      </article>
      <div className="col-span-1 mt-20 md:col-span-2 md:items-start xl:w-1/3 xl:self-start">
        <h2 className="font-dm text-[72px] font-bold leading-[64px] text-white">
          {mockup[1].author} <span className="text-white">®</span>
        </h2>
        <div className="mt-6 flex items-center gap-12 ">
          <div className="flex items-center gap-3">
            <div className="mt-3 flex">
              <img
                src={mockup[1].authorAvatar}
                className="inline-block h-12 w-12 rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col">
              <p className="font-poppins text-xs font-normal text-graysecondary">
                Creator
              </p>
              <p className="font-poppins text-sm font-medium leading-[24px] text-white">
                {mockup[1].author}
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
                {mockup[1].instantPrice}
              </p>
            </div>
          </div>
        </div>
        <Currentbid />
      </div>
    </section>
  );
};

export default Auction;
