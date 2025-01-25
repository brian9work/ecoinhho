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
      maxWidth:{
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
        1300: "1300px",
        1400: "1400px",
        1500: "1500px",
      }
    },
  },
  plugins: [],
};
