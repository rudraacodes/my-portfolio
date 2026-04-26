/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',  // ← this is the only change
  theme: {
    extend: {
      // CSS variables for theme colors — consumed by components
      colors: {
        page: {
          light: '#faf9f6',   // warm off-white — feels like paper
          dark:  '#1a1a2e',   // deep navy — easier on eyes than pure black
        },
        ink: {
          light: '#1a1a2e',
          dark:  '#e8e6e0',
        }
      }
    }
  },
  plugins: [],
}