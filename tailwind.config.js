/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      background : {
        'gradient' : 'linear-gradient(338deg, rgba(245, 180, 0, 1) 20%, rgba(244, 116, 69, 1) 75%)' ,
    },
  },
},
  plugins: [],
}

