import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: { DEFAULT: '#0B1437', 900: '#070D26', 700: '#16215A' },
        violet: { DEFAULT: '#6D4AFF', soft: '#A99BFF' },
        turq: { DEFAULT: '#14C9A8', soft: '#7CE8D3' },
        bg: 'var(--bg)', card: 'var(--card)', fg: 'var(--fg)', muted: 'var(--muted)', line: 'var(--line)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem' },
    },
  },
  plugins: [],
};
export default config;
