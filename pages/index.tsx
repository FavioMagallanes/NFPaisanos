// Home.tsx
import { MainContent } from '@/components/MainContent';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { type Entity } from '@/interfaces/entity';
import { getEthPriceData, getAuctionData } from '@/services/services';
import { SearchInput } from '@/components/SearchInput';
import { FiltersContent } from '@/components/FiltersContent';
import { getInitialData } from '../services/services';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';

export interface Props {
  auctionData: Entity[];
  ethPriceData: {
    eth: number;
    usd: number;
  };
  endsAt: Date;
  initialData: Entity[];
}

export default function Home({
  auctionData,
  ethPriceData,
  initialData,
}: Props): JSX.Element {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <Navbar />
      <div className="max-w-1xl mx-auto px-6">
        <Hero />
        <MainContent auctionData={auctionData} ethPriceData={ethPriceData} />
        <SearchInput />
        <FiltersContent initialData={initialData} />
        <Footer />
      </div>
    </motion.div>
  );
}

export const getServerSideProps = async () => {
  const auctionData = await getAuctionData();
  const ethPriceData = await getEthPriceData();
  const initialData = await getInitialData();

  return {
    props: {
      auctionData,
      ethPriceData,
      initialData,
    },
  };
};
