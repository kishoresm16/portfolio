/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#0C0C0C',
        'terminal-green': '#00FF00',
        'terminal-gray': '#808080',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Consolas', 'Monaco', 'Menlo', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        typing: 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
};