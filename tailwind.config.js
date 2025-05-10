/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adapt to your structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Press Start 2P"', 'monospace'], // override default
      },
      fontSize: {
        xs: '0.6rem',
        sm: '0.75rem',
        base: '0.85rem', // ↓ smaller than default
        lg: '1rem',
      },
      colors: {
        background: {
          default: "#FEF3E2", // lightest base
        },
        accent: {
          light: "#F3C623",   // lighter accent
          main: "#FFB22C", // main accent
          dark: "#FA812F",    // hover or deeper accent
        },
      },
    },
  },
  plugins: [],
};


