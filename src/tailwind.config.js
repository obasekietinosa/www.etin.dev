/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "var(--color-secondary)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          darker: "var(--color-primary-darker)",
        },
      },
      boxShadow: {
        bulge: "0px 4px 0px var(--tw-shadow-color)",
        "bulge-sm": "0px 2.5px 0px var(--tw-shadow-color)",
      },
      content: {
        counter: "counter(section) '.'",
      },
      fontFamily: {
        pixelify: ['"Pixelify Sans"', "sans-serif"],
        mono: ['"Space Mono"', "monospace"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
