/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "hover",
        "@media(hover:hover){ &:where(:any-link, :enabled, summary):hover }",
      );
    }),
  ],
};
