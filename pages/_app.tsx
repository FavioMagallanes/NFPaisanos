import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Poppins, DM_Sans } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  variable: '--font-poppins',
});

const dm = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal'],
  variable: '--font-dm',
});

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>NFPaisanos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${poppins.variable} ${dm.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
