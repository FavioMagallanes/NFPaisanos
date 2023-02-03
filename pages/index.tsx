// Home.tsx
import { MainContent } from '@/components/MainContent';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { type Entity } from '@/interfaces/entity';
import { getEthPriceData, getAuctionData } from '@/services/services';
import { Searchinput } from '@/components/Searchinput';
import { Filterscontent } from '@/components/Filterscontent';
// import { getFilterData } from '../services/services';

export interface Props {
  auctionData: Entity[];
  ethPriceData: {
    eth: number;
    usd: number;
  };
  endsAt: Date;
  // filterData: Entity[];
}

export default function Home({
  auctionData,
  ethPriceData,
}: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <Hero />
      <MainContent auctionData={auctionData} ethPriceData={ethPriceData} />
      <Searchinput />
      <Filterscontent />
    </>
  );
}

export const getServerSideProps = async () => {
  const auctionData = await getAuctionData();
  const ethPriceData = await getEthPriceData();
  // const filterData = await getFilterData();

  return {
    props: {
      auctionData,
      ethPriceData,
      // filterData,
    },
  };
};
