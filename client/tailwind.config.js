/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffff",
        dimWhite: "gray",
      },
      backgroundImage: {
        pinkOrange:
          "linear-gradient(90deg, hsla(324, 91%, 46%, 1) 0%, hsla(18, 100%, 49%, 1) 100%);",
      },
    },
  },
  plugins: [],
};
