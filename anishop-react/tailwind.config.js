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
        'key-tertiary-color': '#FFD347',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      backgroundImage: {
        'home-texture': "url(https://lh3.googleusercontent.com/pw/ABLVV84Qffg_K-5Z0-HWKGMz8IDujG70f_CE42unJcl1sui_DOQaSlrknAPxBirV8JJwPtVNFBkaiir1yZPsS_oGKL3HHZtgJ8wtDjNqLxs5NkmYzg8sWED2uluIPnqC8-aKk_5SqAZYHa1E_f-kfwadnZPk=w991-h991-s-no-gm?authuser=0)",
      }
    }
  },
  plugins: [],
}

