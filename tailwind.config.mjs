/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8FAFC',
        panel: '#FFFFFF',
        primary: '#0F172A',
        muted: '#64748B',
        border: '#E2E8F0',
        accent: '#0EA5E9',
        success: '#22C55E',
        'accent-light': '#E0F2FE',
        'success-light': '#DCFCE7',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 3px 0 rgba(15,23,42,0.06), 0 1px 2px -1px rgba(15,23,42,0.04)',
        'panel-hover': '0 4px 12px 0 rgba(15,23,42,0.10), 0 2px 4px -1px rgba(15,23,42,0.06)',
      },
    },
  },
  plugins: [],
}
