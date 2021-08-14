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
        sans: ["Recursive", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        light: {
          DEFAULT: "#8892B0",
          50: "#E9EAF0",
          100: "#DEE1E9",
          200: "#C8CDDB",
          300: "#B3B9CC", //light
          400: "#9DA6BE",
          500: "#8892B0", //base
          600: "#69769C", //dark
          700: "#545E7E",
          800: "#3F4760",
          900: "#2B3141",
        },
        dark: {
          DEFAULT: "#0A192F",
          50: "#5A8EDC",
          100: "#437FD7",
          200: "#2863BA",
          300: "#1E4A8C", //light
          400: "#14325D",
          500: "#0A192F", //base
          600: "#071222",
          700: "#050C16", //dark
          800: "#020509",
          900: "#000000",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
