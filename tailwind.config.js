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
  },
  darkMode: "class",
  plugins: [],
};
