/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'], // This gives you an additional class font-lexend
      },
      colors: {
        rbcgray: "#F3F4F5",
        rbcdarkgray: "#444444",
        rbcblue: "#2C68BD",
        rbcyellow: "#f9e04b",
        rbcdarkyellow: "#f5bc41",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // ... rest of your config
    },
  },
  plugins: [require("tailwindcss-animate")],
};
