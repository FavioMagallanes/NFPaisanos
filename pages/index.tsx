// Home.tsx
import { MainContent } from '@/components/MainContent';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { type Entity } from '@/interfaces/entity';
import { getEthData, getPopularData } from '@/services/services';

export interface Props {
  popularData: Entity[];
  ethData: {
    eth: number;
    usd: number;
  };
}

export default function Home({ popularData, ethData }: Props): JSX.Element {
  return (
    <>
      <div className="pb-4 lg:border lg:border-b-graysecondary">
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <MainContent popularData={popularData} ethData={ethData} />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const popularData = await getPopularData();
  const ethData = await getEthData();

  return {
    props: {
      popularData,
      ethData,
    },
  };
};
