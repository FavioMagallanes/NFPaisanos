import { type Props } from '@/pages';
import { dateFormated } from '@/utils/formatedDate';

const CurrentbidCard = ({
  ethPriceData,
  endsAt,
}: Omit<Props, 'filterData'>) => {
  const { hours, minutes, seconds } = dateFormated(endsAt);
  const { eth, usd } = ethPriceData;

  return (
    <section className="mt-12 flex h-[296px] flex-col items-center justify-center rounded-2xl bg-graythird py-8 lg:w-3/4">
      <div>
        <p className="text-center font-poppins text-base font-medium text-white ">
          Current Bid
        </p>
        <h2 className="text-center font-dm text-5xl font-bold leading-[56px] text-white ">
          {eth}ETH
        </h2>
        <p className="text-center font-poppins text-2xl font-semibold leading-8 text-graysecondary">
          ${usd}
        </p>
      </div>
      <div className="mt-6">
        <div>
          <p className="font-poppins font-medium leading-6 text-white">
            Auction ending in
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between space-x-12">
        <div>
          <p className="text-center font-dm text-[32px] font-bold leading-10 text-white">
            {hours}
          </p>
          <span className="font-poppins font-medium text-graysecondary">
            Hrs
          </span>
        </div>
        <div>
          <p className="text-center font-dm text-[32px] font-bold leading-10 text-white">{`${minutes}`}</p>
          <span className="font-poppins font-medium text-graysecondary">
            mins
          </span>
        </div>
        <div>
          <p className="text-center font-dm text-[32px] font-bold leading-10 text-white">{`${seconds}`}</p>
          <span className="font-poppins font-medium text-graysecondary">
            secs
          </span>
        </div>
      </div>
    </section>
  );
};

export default CurrentbidCard;
