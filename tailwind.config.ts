import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'Pretendard', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
