/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "var(--color-navy)",
        gold: "var(--color-gold)",
        white: "var(--color-white)",
        "light-gray": "var(--color-light-gray)",
        teal: "var(--color-teal)",
      },
    },
  },
  plugins: [],
};

export default config;
