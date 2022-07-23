/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    letterSpacing: {
      tightest: '2px',
    },

    fontSize: {
      '4xl': ['44px', '58px'],
    },
    extend: {
      margin: {
        '30px': '30px',
      },

      colors: {
        app: '#F8F8F7',
        base: '#ffffff',
        hover: '#FF868E',
        hovered: '#FBE0DC',
        active: '#FF868E',
        backgrounded: '#E5E5E5',
        grey: '#F8F8F7',
        tx: '#8C8C8C',
      },
    },
  },
  plugins: [],
};
