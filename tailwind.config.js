/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '129': '43rem',
        '29': '29rem',
       
      },
       width: {
        '129': '42rem',
        '29': '39rem',
      },
       translate: {
        '96': '26rem',
        '19': '19rem',
      }

    },
  },
  plugins: [],
}
