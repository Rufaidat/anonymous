/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#ec1efd",
          200: "#b31efe",
          300: "#290042",
          400: "#200041",
          800: "#190028",
          900: "#080010",
        },
      },
      fontFamily: {
        silkscreen: ["Silkscreen", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["active"],
    },
  },
  plugins: [],
};
