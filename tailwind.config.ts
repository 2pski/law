import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0f1b2b',
        charcoal: '#1f2937',
        slate: '#4b5563',
        mist: '#f8fafc'
      },
      maxWidth: {
        content: '72rem'
      }
    }
  },
  plugins: []
};

export default config;
