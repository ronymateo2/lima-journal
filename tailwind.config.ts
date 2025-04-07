import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfaf6'
        }
      }
    }
  },
  plugins: []
};

export default config;
