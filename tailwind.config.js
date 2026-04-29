/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#2c4f73",
        brandGold: "#e2b23b",
        brandOrange: "#e58b2a",
        brandGrey: "#f5f5f5",
        ink: "#183045",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Nunito Sans"', "Verdana", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(44, 79, 115, 0.14)",
      },
      backgroundImage: {
        "brand-radial":
          "radial-gradient(circle at 10% 10%, rgba(226, 178, 59, 0.22), transparent 30%), radial-gradient(circle at 90% 0%, rgba(229, 139, 42, 0.16), transparent 24%)",
      },
    },
  },
  plugins: [],
};
