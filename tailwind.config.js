/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CustomYellow: "#F7C133",
        CustomPurple: "#7F63F4",
        CustomGray: "#24303F",
      },
      backgroundImage: {
        "background-img": "url('src/assets/Img/background.png')",
      },
    },
    screens:{
      sm: '640px',
      // =>@media (min-width: 640px)
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  darkMode: "class",
  variants:{},
  plugins: [],
};
