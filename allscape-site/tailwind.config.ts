import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Direction 2 — Clean & Trustworthy palette
        navy: {
          DEFAULT: '#0f1e2d',
          soft: '#1a2f47',
          deep: '#0a1520',
        },
        gold: {
          DEFAULT: '#c9a449',
          soft: '#e9d4a3',
          dark: '#a08537',
        },
        paper: {
          DEFAULT: '#fcfbf7',
          warm: '#f4f0e8',
        },
        line: '#e2dcd0',
        ink: '#1f1f1f',
        gray: {
          warm: '#6b6b6b',
        },
        // Brand green retained for accent use only (small details, badges)
        green: {
          brand: '#2d5a3d',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.3em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) backwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
