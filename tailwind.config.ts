import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand greens — pulled from the Allscape logo. Swap exact hex
        // here if you have brand spec values.
        green: {
          DEFAULT: '#4ea03c',  // brand green (logo letter fill)
          deep: '#1a4d2a',     // dark forest (logo outline)
          ink: '#0d2818',      // near-black green (header bg, body text)
          soft: '#c5e2b3',     // mint (subtle accents, hover bg)
          paper: '#f0f7ec',    // pale green cream
        },
        sky: {
          DEFAULT: '#5fb8e0',  // logo river blue, used sparingly
        },
        // Kept as supporting tokens so existing styles don't break.
        gold: {
          DEFAULT: '#c9a449',
          soft: '#e9d4a3',
        },
        paper: {
          DEFAULT: '#fcfbf7',
          warm: '#f4f0e8',
        },
        line: '#dde7d4',
        ink: '#1f1f1f',
        gray: {
          warm: '#5b6b5b',
        },
      },
      fontFamily: {
        // Single-family system: Plus Jakarta Sans across the whole site.
        // Clean, modern, professional without feeling generic.
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
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
