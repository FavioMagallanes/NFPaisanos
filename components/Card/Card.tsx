import { type Entity } from '@/interfaces/entity';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CardProps {
  item: Entity;
}

const Card = ({ item }: CardProps) => {
  return (
    <motion.div
      className=" w-[311px] rounded-[20px] bg-graythird p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Image
        className="rounded-[20px]"
        width={256}
        height={256}
        src={item.media.image}
        alt="image"
      />
      <div className="flex flex-col">
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="font-poppins text-base font-normal text-white">
              {item.author}
            </p>
          </div>
          <div className="rounded border-2 border-green">
            <p className="p-1 font-poppins text-xs font-bold uppercase text-green">
              {item.instantPrice}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="mt-2 flex -space-x-2 overflow-hidden">
            {item.bidUsers.map((bidUser, index) => (
              <img
                key={index}
                className="inline-block h-[24px] w-[24px]  rounded-full ring-1 ring-black"
                src={bidUser.avatar}
                alt=""
              />
            ))}
          </div>

          <div>
            <p className="font-poppins text-sm font-medium text-white">
              <span>{item.stock} in stock</span>
            </p>
          </div>
        </div>
        <div className="mt-3 border border-gray"></div>
        <div className="mt-3.5 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={'/shape.svg'} width={14} height={14} alt="icon" />
            <p className="font-poppins text-xs font-normal text-graysecondary ">
              Highest bid{' '}
              <span className="ml-1 font-poppins text-xs font-semibold text-white">
                {item.highestBid}
              </span>
            </p>
          </div>

          <div>
            <span className="font-poppins text-xs font-normal text-graysecondary">
              New bid 🔥
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
