/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f9fb',
          100: '#c2e3ea',
          200: '#91ceda',
          300: '#61b8c9',
          400: '#30a2b9',
          500: '#008ca8',
          600: '#00778f',
          700: '#006276',
          800: '#004d5c',
          900: '#003843',
        }
      },
      // skeleton animation
      animation: {
        shimmer: "shimmer 1.5s infinite linear",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
}

