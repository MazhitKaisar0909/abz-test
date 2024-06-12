/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgba(244, 224, 65, 1)',
        hover: 'rgba(255, 227, 2, 1)',
        label: 'rgba(126, 126, 126, 1)',
      },
      height: {
        '650px': '650px',
      },
    },
  },
  plugins: [],
}
