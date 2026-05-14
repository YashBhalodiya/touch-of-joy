/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fefdfa",
        foreground: "#111827",
        primary: {
          DEFAULT: "#e29c8e",
          hover: "#d18b7d",
        },
        card: {
          peach: "#f7dfd6",
          pink: "#f3ccca",
          mint: "#cfe2d8",
        },
        muted: "#6b7280",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"DM Serif Display"', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        'folder': '2.5rem 2.5rem 2.5rem 0.5rem', 
      }
    },
  },
  plugins: [],
}
