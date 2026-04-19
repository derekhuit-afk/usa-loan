import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0A2540', 50: '#F1F5F9', 100: '#E2E8F0', 200: '#CBD5E1', 700: '#334155', 900: '#0A2540' },
        gold: { DEFAULT: '#C9A962', 600: '#B8924A', 200: '#E5D4A8' },
        cream: '#FAFAF5',
        ink: '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        trackout: '0.18em',
      },
    },
  },
  plugins: [],
};

export default config;
