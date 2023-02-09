import { type Props } from '@/pages';
import { FilterDashboard } from '../FilterDashboard';

const Filterscontent = ({
  initialData,
}: Omit<Props, 'ethPriceData' | 'auctionData' | 'endsAt'>) => {
  return (
    <>
      <FilterDashboard initialData={initialData} />
    </>
  );
};

export default Filterscontent;
