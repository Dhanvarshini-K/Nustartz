module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        BrandPurple: "#6243E1",
        Gray: "#636A6E",
        ParaGrey: "#4D4255",
        DarkGrey: "#322D35",
        BrandBlueHeavy: "#283772",
        Grey: "#6b6b6b",
        GhostWhite: "#F5F9FF",
        Lavender: "#d2ccff",
        LightLavender: "#ECEBF4",
        LightPurple: "#8A6EFF",
        NickelGrey: "#727272",
        ChineseSilver: "#CDCDCD",
        CornFlowerBlue: "#dfd8ff80",
        BrandLightBlue: "#EDF5FF",
        OuterBlack: "#263238",
        MineShaft: "#282828",
        heroBackground: "#F8FAFF",
        fog: "#DFD8FF",
        inputBorder: "#B2B2B2",
        contactButton: "#187DF7",
        danger: "#EF4444",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(100deg, rgba(83, 230, 220, 0.2), rgba(129, 209, 234, 0.2), rgba(255, 166, 255, 0.2), rgba(125, 104, 255, 0.2))',
        'advisor-gradient': 'linear-gradient(100deg, #1A7FF7, #55AAE7)'
      },
      fontSize: {
        "2xs": "0.625rem" /* 10px */,
        xs: "0.75rem" /* 12px */,
        sm: "0.875rem" /* 14px */,
        md: "1rem" /* 16px */,
        lg: "1.125rem" /* 18px */,
        xl: "1.25rem" /* 20px */,
        "2xl": "1.375rem" /* 22px */,
        "3xl": "1.5rem" /* 24px */,
        "4xl": "2rem" /*32px */,
        "5xl": "2.5rem" /*40px*/,
        "6xl": "3rem" /*48px */,
        "7xl": "3.75rem" /* 60px */,
        "8xl": "4rem" /*64px */,
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(10px, -10px)" },
          "50%": { transform: "translate(0px, -20px)" },
          "75%": { transform: "translate(-10px, -10px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },     
    },
  },
  plugins: [],
};
