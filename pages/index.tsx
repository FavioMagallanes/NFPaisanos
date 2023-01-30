import { Auction } from '@/components/Auction';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';

export default function Home(): JSX.Element {
  return (
    <>
      <div className="pb-4 lg:border lg:border-b-graysecondary">
        <Navbar />
      </div>
      <div className="mt-16">
        <Hero />
      </div>
      <div>
        <Auction />
      </div>
    </>
  );
}
