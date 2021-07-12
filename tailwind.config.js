const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      fontFamily: {
        sans: ["Hind Siliguri", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          DEFAULT: "#5CDB95",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#D9F7E6", //light
          300: "#B0EDCB", //base
          400: "#86E4B0", //dark
          500: "#5CDB95",
          600: "#32D27A",
          700: "#26AB62",
          800: "#1D814A",
          900: "#135832",
        },
        dark: {
          DEFAULT: "#0A6BCC",
          50: "#C0DEFC",
          100: "#A7D1FB",
          200: "#77B7F8",
          300: "#469EF6",
          400: "#1584F4",
          500: "#0A6BCC",
          600: "#08519B", //light
          700: "#05386B", //base
          800: "#031E3A", //dark
          900: "#00050A",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
