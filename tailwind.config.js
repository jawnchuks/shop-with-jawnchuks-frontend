const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      background: "#F0F2FF",
      primary: "#242F9B",
      secondary: "#cecece",
      accent: "#2E0249",
      gray: "#F0F0F0",
      danger: "#CA0B00",
      "light-black": "#333333",
      ...defaultTheme.colors,
    },
    extend: {
      fontFamily: {
        sans: ["Darker Grotesque", ...defaultTheme.fontFamily.serif],
        grotesk: ["Darker Grotesque"],
      },
    },
  },
  plugins: [],
};
