/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla", "sans-serif"],
      },
      // đinh nghĩa các thuộc tính css và cho phép tái sử dụng nhiều lầnc
      colors: {
        coffee: {
          50: "#E8D6D8",
          200: "#C89F94",
          400: "#A25F48",
          600: "#744838",
        },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": "url('./img/slider-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
