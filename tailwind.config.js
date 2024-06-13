/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EF9995",
        secondary: "#A4CBB4",
        accent: "#DB8850",
        neutral: "#2E282A",
        info: "#2563EB",
        success: "#1FA34A",
        warning: "#D97706",
        error: "#F25248",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "lemonade",
      {
        myCustomTheme: {
          primary: "#EF9995",
          secondary: "#A4CBB4",
          accent: "#DB8850",
          neutral: "#2E282A",
          "base-100": "#ffffff",
          info: "#2563EB",
          success: "#1FA34A",
          warning: "#D97706",
          error: "#F25248",
        },
      },
    ],
  },
};
