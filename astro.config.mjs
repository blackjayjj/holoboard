// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    // This content array tells Tailwind to scan all your source files for utility classes.
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      // Custom colors are defined here
      colors: {
        'bg-primary': '#1B1D21',      // Main dark background
        'bg-secondary': '#232529',    // Card/sidebar/nav background
        'bg-tertiary': '#424549',    // Card/sidebar/nav background
        'border-subtle': '#818385',
        // --- Text Colors ---
        'text-primary': '#E0E0E0',    // Main white/light gray text
        'text-secondary': '#B0B0B0',  // Subdued/timestamp text

        // --- Accent/Highlight Colors ---
        'accent-logo': '#6B47C5',     // Purple logo/primary brand color
        'accent-active': '#48D9E8',   // Bright cyan for active icons/status
        'accent-nav-item-active': '#2D63DC'
      },
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});