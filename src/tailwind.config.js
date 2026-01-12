/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
      },
      fontFamily: {
        sans: ['"Inter Tight"', '"Inter"', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', "Georgia", ...defaultTheme.fontFamily.serif],
        mono: ['"JetBrains Mono"', '"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.6' }],
        lg: ['1.125rem', { lineHeight: '1.75' }],
        xl: ['1.25rem', { lineHeight: '1.25' }],
        '2xl': ['1.5rem', { lineHeight: '1.2' }],
        '3xl': ['2rem', { lineHeight: '1.1' }],
        '4xl': ['2.5rem', { lineHeight: '1.1' }],
        '5xl': ['3.5rem', { lineHeight: '1.1' }],
        '6xl': ['4.5rem', { lineHeight: '1' }],
        '7xl': ['6rem', { lineHeight: '1' }],
        '8xl': ['8rem', { lineHeight: '1' }],
        '9xl': ['10rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        tighter: '-0.06em',
        tight: '-0.04em',
        normal: '-0.01em',
        wide: '0.05em',
        wider: '0.1em',
        widest: '0.2em',
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px', // Keep full for pill shapes if absolutely needed, but generally avoid
        none: '0px',
      },
      boxShadow: {
        none: 'none',
        // We can define semantic "shadows" using drop-shadow filter or similar if needed for the layered text effect,
        // but the spec says "shadow: none".
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
