// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./index.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",     // 👈 Scan all files inside app/
    "./components/**/*.{js,jsx,ts,tsx}", // 👈 If you use shared components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};																																																																																																																																																																																																																																																																																																																																															
