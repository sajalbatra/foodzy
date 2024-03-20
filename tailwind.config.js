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
      }
    },
  },
  plugins: [],
}