/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adapt to your structure
  ],
  theme: {
    extend: {
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


