/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Untuk App Directory (Next.js 13+)
    "./pages/**/*.{js,ts,jsx,tsx}", // Jika masih pakai Pages Directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
