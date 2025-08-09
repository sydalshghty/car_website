/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        headerBG: '#8A8C8F', 
        whitecolor: "#FFFFFF",
        borderColor: "#A4A5A8",
        textcolor: "#8A8C8F",
        orangeColor: "#F26122",
        bgIcon: "#F2F2F3",
        orangeText: "#F26426",
        blackcolor: "#0C0D0D",
        deliveryColor1: "#57595B",
        colorblack: "#000000",
        registerBG: "#FEEEE7",
        riyadhColor: "#0B0B0B"
      },
    },
  },
  plugins: [],
}