/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
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
      // keyframes for animation
      keyframes: {
        // responsive menu
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      // animate-slideDown
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        fadeIn: "fadeIn 0.5s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": "url('./img/slider-bg.jpeg')",
      },
    },
  },
  plugins: [],
};
