/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    height:{
      'screen-sidebar' : 'calc(100vh - 6rem)'
    }
  },
  plugins: [],
}

