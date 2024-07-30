/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#000000', 
      'gray': '#1f2937',
    },
    borderRadius: {
      '8': '8px'
    },
    width: {
      '10': '100px',
    },
    extend: {},
  },
  plugins: [],
}

