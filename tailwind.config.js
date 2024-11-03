/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        header: "var(--header-color)",
        gender: "var(--gender-color)",
        profession: "var(--profession-color)",
      },
      gridTemplateRows: {
        "employee-details": "repeat(2, 50%)",
      },
    },
  },
  plugins: [],
};
