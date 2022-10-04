/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '280px',
      // => @media (min-width: 280px) { ... }

      'md': '500px',
      // => @media (min-width: 500px) { ... }

      'lg': '900px',
      // => @media (min-width: 900px) { ... }
      'xl': '1200px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}
