/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['"Figtree"', "sans-serif"],
        playfair: ['"Playfair Display"', "serif"],
        merriweather: ['"Merriweather"', "serif"],
        Karantina: ['"Karantina"', "serif"],
      },
      colors: {
        primary: {
          yellow: "#ff9500",
          light: "#F3F4F6",
          DEFAULT: "#3B82F6",
          dark: "#2563EB",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #3B82F6 10%, #34D399 60%, #F472B6 90%)',
      },
    },
  },
  plugins: [],
};
