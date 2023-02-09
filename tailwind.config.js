/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1xl': '1440px',
      // => @media (min-width: 1440px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      black: '#141416',
      blacksecondary: '#23262F',
      white: '#FCFCFD',
      whitesecondary: '#E6E8EC',
      whitethird: '#F4F5F6',
      gray: ' #353945',
      graysecondary: '#777E91',
      graythird: '#23262F',
      blue: '#3772FF',
      bluedark: '#00337C',
      green: '#45B36B',
      pink: '#EF466F',
      purple: '#9757D7',
      orange: '#FFA500',
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        dm: ['var(--font-dm)'],
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
