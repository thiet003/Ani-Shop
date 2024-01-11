/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'key-primary-color': '#FE8572',
        'key-secondary-color': '#98D7E6',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    }
  },
  plugins: [],
}

