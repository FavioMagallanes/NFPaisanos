import Link from 'next/link';
import { Button } from '../Button';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = (): JSX.Element => {
  return (
    <div className=" pb-4 lg:border lg:border-b-graysecondary">
      <header className="container mx-auto  max-w-[1440px] items-center px-8 pt-12 sm:pt-3">
        <nav className="grid grid-cols-2  items-center  gap-4 py-3 lg:grid-cols-12">
          <div className="col-span-1 flex items-center gap-4 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image src="/logo.svg" width={24} height={24} alt="Logo" />
            </motion.div>
            <div>
              <motion.h1
                className=" font-poppins text-2xl font-semibold text-whitethird sm:text-xl md:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                NFPaisanos
              </motion.h1>
            </div>
            <div className="mx-8 hidden h-10 border border-l-0 border-graysecondary lg:block"></div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <Link
                    href={'#'}
                    className="hidden font-dm text-sm font-bold text-graysecondary lg:block"
                  >
                    Discover
                  </Link>
                </li>
                <li>
                  <Link
                    href={'#'}
                    className="ml-8 hidden font-dm text-sm font-bold text-graysecondary lg:block"
                  >
                    What we do
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-20 hidden items-center justify-self-end lg:col-span-6 lg:block">
            <Button className='"text-center" rounded-full border border-graysecondary py-2 px-3'>
              <p className="font-dm text-sm font-bold text-graysecondary">
                Connect Wallet
              </p>
            </Button>
          </div>
          <div className="col-span-1  items-center justify-self-end sm:ml-48 lg:hidden">
            <Icon
              icon="material-symbols:menu-rounded"
              color="#777e91"
              width="20"
              height="20"
            />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
