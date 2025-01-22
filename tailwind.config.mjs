/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"], // Replace the default font
        dosis: ["Dosis", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
