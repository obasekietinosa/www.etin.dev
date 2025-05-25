/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#373F51",
        },
        primary: {
          DEFAULT: "#FFF6EA",
          dark: "#BBB2A7",
          darker: "#7A7672",
        },
      },
      boxShadow: {
        bulge: "0px 4px 0px var(--tw-shadow-color)",
        "bulge-sm": "0px 2.5px 0px var(--tw-shadow-color)",
      },
      content: {
        counter: "counter(section) '.'",
      },
    },
  },
  plugins: [],
};
