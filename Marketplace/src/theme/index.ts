import { extendTheme } from "native-base";

export const Tema = extendTheme({
  colors: {
    green: {
      700: "#00875F",
      500: "#00B37E",
    },
    blue: {
      200: "#364D9D",
      100: "#647AC7",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
      6: "#EDECEE",
      5: "#D9D8DA",
      4: "#9F9BA1",
      3: "#5F5B62",
      2: "#3E3A40",
      1: "#1A181B",
    },
    white: "#FFFFFF",
    red: {
      500: "#F75A68",
    },
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 17,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },
});
