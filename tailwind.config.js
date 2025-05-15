// tailwind.config.js
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF5E6',
          100: '#FFEACC',
          200: '#FFD699',
          300: '#FFC266',
          400: '#FFAD33',
          500: '#F39C12', // Primary brand color
          600: '#CC8100',
          700: '#996100',
          800: '#664000',
          900: '#332000',
        },
        amber: {
          50: '#FEF5E7', // Secondary brand color (light)
          100: '#FDF0D3',
          200: '#FBE1A6',
          300: '#F9D37A',
          400: '#F7C44E',
          500: '#F5B621',
          600: '#CF941B',
          700: '#9A6F14',
          800: '#664A0E',
          900: '#332507',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;