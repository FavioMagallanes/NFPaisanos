import Image from 'next/image';

const Footer = () => {
  return (
    <div className="mt-32 flex  flex-col items-center justify-center gap-4 border border-t-graysecondary p-32">
      <div className="flex items-center gap-2">
        <div>
          <Image src="/logo.svg" width={32} height={22} alt="Logo" />
        </div>
        <div>
          <h2 className="font-poppins  text-2xl  font-semibold text-whitethird sm:text-xl md:text-2xl">
            NFPaisanos
          </h2>
        </div>
      </div>
      <h3 className=" mt-5 font-poppins text-2xl font-normal text-whitesecondary">
        The New Creative Economy
      </h3>
      <div className="container mx-auto  mt-6 border border-t-graysecondary p-6 text-center">
        <p className="font-poppins text-xs font-normal text-graysecondary">
          Created with 💕 by Favio
        </p>
      </div>
    </div>
  );
};

export default Footer;
