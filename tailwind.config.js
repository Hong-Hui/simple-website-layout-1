/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "house-1": 'url("./src/assets/house-1-1.png")',
        "house-2": 'url("./src/assets/house-1-2.png")',
        "house-3": 'url("./src/assets/house-1-3.png")',
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
