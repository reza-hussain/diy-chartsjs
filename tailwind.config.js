/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        myGray: {
          DEFAULT: '#F1F1F1'
        },
        lightBlue: {
          DEFAULT: '#1CBEF5'
        },
        darkBlue: {
          DEFAULT: '#0B1E51'
        }
      },
      fontFamily: {
        heading: ['Satoshi-Variable', 'sans-serif']
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}