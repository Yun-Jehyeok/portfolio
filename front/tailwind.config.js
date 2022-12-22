/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    backgroundImage: {
      main: 'url("../public/imgs/background.jpg")',
    },
    fontFamily: {
      main: '"Josefin Sans", sans-serif',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
