import Link from 'next/link';
import { Button } from '../Button';

const Navbar = (): JSX.Element => {
  return (
    <div className="container mx-auto items-center px-8 pt-12 sm:pt-3">
      <nav className="grid grid-cols-2  items-center  gap-4 py-3 lg:grid-cols-12">
        <div className="col-span-1 flex items-center gap-4 lg:col-span-6">
          <div>
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-6 w-6 sm:h-5 sm:w-5 md:h-6 md:w-6"
            />
          </div>
          <div>
            <h1 className="font-poppins text-2xl font-semibold text-whitethird sm:text-xl md:text-2xl">
              NFPaisanos
            </h1>
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
        <div className="hidden items-center justify-self-end lg:col-span-6 lg:block">
          <Button>
            <p className="font-dm text-sm font-bold text-graysecondary">
              Connect Wallet
            </p>
          </Button>
        </div>
        <div className="col-span-1  items-center justify-self-end sm:ml-48 lg:hidden">
          <img src="/menu.svg" alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
