/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        CustomPurple: "#7F63F4",
        CustomGray: "#24303F",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
