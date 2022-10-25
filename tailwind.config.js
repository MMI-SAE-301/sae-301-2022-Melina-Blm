const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'reemkufi': ['Reem Kufi'],
        'outfit': ['Outfit']
      },
      fontSize: {
        '24s': '1.5rem',
        '80s': '5rem',
        '35s': '2.188rem',
        '70s': '4.375rem',
        '40s': '2.5rem',
        '50s': '3.125rem',


      },
      colors: {
        'dark-black': '#1F1F1F',
        'grey-dust': '#7E7E7E',
        'light-dark': '#2F2F2F',
        'bg-grey': '#F8F8F8',

      },
      screens: {
        'ipad_mini': '744px',
        'ipad_pro': '1024px',
        'desktop': '1440px'
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
