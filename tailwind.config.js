/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "semi-transparent": "rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [],
};
