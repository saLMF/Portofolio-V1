module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 100s linear infinite",
        twinkle: "twinkle 4s ease-in-out infinite",
      },
      keyframes: {
        twinkle: {
          "0%, 100%": {opacity: 0.2},
          "50%": {opacity: 0.8},
        },
      },
      height: {
        100: "100px",
        200: "200px",
      },
      width: {
        100: "100px",
        200: "200px",
      },
    },
  },
  variants: {},
  plugins: [],
};
