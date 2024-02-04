/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rowdies: ['Rowdies'],
      },
      colors: {
        'header-green': '#7ED957',
      },
    },
  },
  plugins: [],
};
