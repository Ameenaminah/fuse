/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey1: " #F3F3F6",
        grey2: " #F9F9FB",
        grey3: " #EFF0F3",
        grey6: " #D8D9E0",
        grey7: " #CDCED7",
        grey10: " #80828D",
        grey11: " #62636C",
        grey12: " #1E1F24",
        pry1: " #FAFBFC",
        pry2: " #F3F9FF",
        pry4: " #D9EBFF",
        pry9: " #002994",
        pry11: " #2665F4",
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
        workSans: ["Work Sans", "sans-serif"],
        cinzel: ["Cinzel", "serif"],
        chivo: ["Chivo", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        "custom-1":
          "var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-100)",
        "custom-2":
          "var(--sds-size-depth-0) var(--sds-size-depth-025) var(--sds-size-depth-100) var(--sds-size-depth-0) var(--sds-color-black-200)",
      },
    },
  },
  plugins: [],
};
