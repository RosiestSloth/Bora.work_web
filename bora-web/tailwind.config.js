/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #ff7e5f, #feb47b)',
      },
      backgroundClip: {
        text: 'text',
      },
      textFillColor: {
        transparent: 'transparent',
      },
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'custom-gray': '#1f2937',
      },
      borderRadius: {
        '8': '8px',
        '12': '12px',
      },
      width: {
        '10': '100px',
      },
      height: {
        'max': 'auto',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-transparent': {
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
}
