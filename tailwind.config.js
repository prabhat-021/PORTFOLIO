/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8490ff',
        secondary: '#62bdfc',
        background: '#f9f9ff',
        dark: '#04091e',
        gray: '#777777',
        text: '#222222'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 