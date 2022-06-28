/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte,js,ts}"],
  theme: {
    extend: {
      colors: {
        light_cyan: "hsl(var(--light-cyan))",
        neon_green: "hsl(var(--neon-green))",
        grayish_blue: "hsl(var(--grayish-blue))",
        dark_grayish_blue: "hsl(var(--dark-grayish-blue))",
        dark_blue: "hsl(var(--dark-blue))",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      fontSize: {
        base: "28px",
      },
      letterSpacing: {
        "extra-wide": "5px",
      },
      dropShadow: {
        neon: "0 0 15px hsl(150deg, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
