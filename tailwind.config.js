/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable class-based dark mode
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        dark: {
          primary: "#DAFF3E",
          secondary: "#111111",
          tertiary: "#222222",
        },
        light: {
          primary: "#FE4C55",
          secondary: "#FFFFFF",
          tertiary: "#FEF4E2",
        },
      },
      fontFamily: {
        body: ["Google Sans Text", "sans-serif"],
        heading: ["Google Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
