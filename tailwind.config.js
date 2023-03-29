/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins'
      },
      content: {
        'NavArrow': 'url("./assets/nav-arrow-icon.svg")',
      },
    },
  },
  plugins: [],
}
