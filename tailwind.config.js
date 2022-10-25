const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      'dark-black': '#1F1F1F',
      'grey-dust': '#7E7E7E',

    },
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'reemkufi': ['Reem Kufi']
      },
      fontSize: {
        '24s': '1.5rem',
        '80s': '5rem',
        '35s': '2.188rem',
        '70s': '4.375rem',
        '40s': '2.5rem',



      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
