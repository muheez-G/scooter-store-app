/**  @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
  animation: {
    grow: 'grow 6s linear infinite'
  },
  keyframes: {
    grow: {
      '0%': { height: '0%' },
      '100%': { height: '100px' }
    }
  }
    },
  },
  plugins: [],
}

