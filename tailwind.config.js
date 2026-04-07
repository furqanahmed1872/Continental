/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fdf5e0', 100: '#f9e8b0', 200: '#f2d070', 300: '#e8b53a',
          400: '#e09b20', 500: '#c8860a', 600: '#a36808', 700: '#7d4e07',
          800: '#5a3806', 900: '#3a2404', 950: '#1e1202',
        },
        crimson: {
          50:  '#fff0f0', 100: '#ffd6d6', 200: '#ffaaaa', 300: '#ff6666',
          400: '#ff3333', 500: '#e01414', 600: '#c0392b', 700: '#8b1a1a',
          800: '#5c1010', 900: '#300808', 950: '#160303',
        },
        obsidian: {
          900: '#020203', 800: '#05050a', 700: '#0a0a12',
          600: '#0f0f18', 500: '#141420', 400: '#1c1c2e',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'flicker':    'flicker 5s linear infinite',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite alternate',
        'slide-up':   'slideUp 0.7s cubic-bezier(0.23,1,0.32,1) forwards',
        'fade-in':    'fadeIn 0.6s ease forwards',
        'scan':       'scan 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        flicker: {
          '0%,92%,96%,100%': { opacity: '1' },
          '93%': { opacity: '0.6' }, '94%': { opacity: '1' },
          '95%': { opacity: '0.3' }, '97%': { opacity: '0.9' },
        },
        glowPulse: {
          '0%':   { textShadow: '0 0 8px rgba(192,57,43,0.4)' },
          '100%': { textShadow: '0 0 24px rgba(192,57,43,0.9), 0 0 48px rgba(139,26,26,0.4)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        scan: {
          '0%':   { transform: 'translateY(-2%)', opacity: '0' },
          '5%':   { opacity: '1' }, '95%': { opacity: '1' },
          '100%': { transform: 'translateY(102vh)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
