/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary00: " #002994",
        primary20: "#001B63",
        primary50: " #00081E",
        primary55: " #CCD4EA",
        primary100: " #FFF1EA",
        textHeading: " #241D00",
        textHeading2: "  #541D02",
        textParagraph: " #49473C",
        textParagraphLight: " #9B9783",
        iconBg: "#FB5607",
        stroke: "#E5E3D5",
      },
      fontFamily: {
        Cinzel: "Cinzel",
        WorkSans: "Work Sans",
        Chivo: "Chivo",
      },
    },
  },
  plugins: [],
};
