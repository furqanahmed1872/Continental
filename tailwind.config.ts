import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A66B',
          bright: '#D4AF37',
          dim: '#7a6235',
          faint: 'rgba(201,166,107,0.08)',
          glow: 'rgba(201,166,107,0.25)',
        },
        continental: {
          red: '#C8102E',
          'red-dim': '#6b0818',
          black: '#0a0a0a',
          'black-2': '#111111',
          'black-3': '#181818',
          white: '#f0ece4',
          'white-dim': '#a09a8e',
          'white-dd': '#555555',
        },
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        cormorant: ['var(--font-cormorant)', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A66B 0%, #D4AF37 50%, #C9A66B 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #0a0a0a, #111111)',
      },
      animation: {
        'coin-pulse': 'coinPulse 3s ease infinite',
        'blink': 'blink 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'scan-line': 'scanLine 8s linear infinite',
      },
      keyframes: {
        coinPulse: {
          '0%,100%': { boxShadow: '0 0 15px rgba(201,166,107,0.2), inset 0 0 15px rgba(201,166,107,0.05)' },
          '50%':      { boxShadow: '0 0 40px rgba(201,166,107,0.5), inset 0 0 25px rgba(201,166,107,0.1)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.2' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%,100%': { opacity: '0.4' },
          '50%':     { opacity: '1' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
