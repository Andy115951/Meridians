/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'zen-bg': '#F5F5F0',
        'zen-paper': '#FAFAF5',
        'zen-text': '#2D2D2D',
        'meridian-lung': '#8B8680',
        'meridian-stomach': '#D4A574',
        'meridian-heart': '#C41E3A',
        'meridian-spleen': '#E8B4B8',
        'meridian-kidney': '#1E90FF',
        'meridian-liver': '#228B22',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { filter: 'drop-shadow(0 0 2px rgba(212, 165, 116, 0.6))' },
          '100%': { filter: 'drop-shadow(0 0 8px rgba(212, 165, 116, 1))' },
        },
      },
    },
  },
  plugins: [],
}
