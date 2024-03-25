/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['"Playfair Display"', 'serif'] ,// Add the font family here
        'dmsans': ['"DM Sans"', 'serif'] 
      },
      screens: {

        'mobile': {'min': '0px', 'max': '680px'},

        'lg-device': {'min': '681px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
      },
      backgroundImage:{
        backgimage:'./src/assets/bgimg.png'
      }
      
    },
  },
  plugins: [],
}