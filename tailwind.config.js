/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001529",
        light: "#ffffffa6",
        success: "#93ff6a",
        danger: "#ff4d4f",
      },
    },
  },
  plugins: [],
};
