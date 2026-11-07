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
        primary: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        patina: {
          DEFAULT: "var(--color-patina)",
          surface: "var(--color-patina-surface)",
          foreground: "var(--color-patina-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          subtle: "var(--color-border-subtle)",
        },
        input: "var(--color-input)",
        ring: "var(--color-ring)",
      },
      fontFamily: {
        sans: ['"Inter Tight"', '"Inter"', ...defaultTheme.fontFamily.sans],
        serif: ['"Playfair Display"', '"Cormorant Garamond"', "Georgia", ...defaultTheme.fontFamily.serif],
        mono: ['"JetBrains Mono"', '"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.1rem' }],
        sm: ['0.875rem', { lineHeight: '1.35rem' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lg: ['1.125rem', { lineHeight: '1.75' }],
        xl: ['1.25rem', { lineHeight: '1.35' }],
        '2xl': ['1.5rem', { lineHeight: '1.25' }],
        '3xl': ['2rem', { lineHeight: '1.15' }],
        '4xl': ['2.5rem', { lineHeight: '1.1' }],
        '5xl': ['3.5rem', { lineHeight: '1.08' }],
        '6xl': ['4.5rem', { lineHeight: '1.04' }],
        '7xl': ['6rem', { lineHeight: '1' }],
        '8xl': ['7.5rem', { lineHeight: '0.98' }],
        '9xl': ['9rem', { lineHeight: '0.96' }],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '-0.005em',
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.2em',
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '4px',
        lg: '6px',
        xl: '8px',
        '2xl': '10px',
        '3xl': '12px',
        full: '9999px',
        none: '0px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
