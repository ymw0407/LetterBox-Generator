import { createTheme, fontFace } from "@vanilla-extract/css";
import { themeVars } from "./themeContract.css";

const inter = fontFace({
  src: 'url(/LetterBox-Generator/fonts/InterVariable.woff2) format("truetype")',
});

const pretendard = fontFace({
  src: 'url(/LetterBox-Generator/fonts/PretendardGOVVariable.woff2) format("truetype")',
});

export const vishTheme = createTheme(themeVars, {
  color: {
    primary: {
      10: "#0D1126",
      20: "#1B224B",
      30: "#283371",
      40: "#354497",
      50: "#4255BD",
      60: "#6877CA",
      70: "#8D98D7",
      80: "#B4BBE4",
      90: "#D9DDF2",
      100: "#ECEEF8",
    },
    neutral: {
      black: "black",
      white: "white",
      grey: {
        10: "#101010",
        20: "#202020",
        30: "#2f2f2f",
        40: "#3f3f3f",
        50: "#4f4f4f",
        60: "#5f5f5f",
        70: "#6f6f6f",
        80: "#7e7e7e",
        90: "#8e8e8e",
        100: "9e9e9e",
      },
    },
  },
  font: {
    family: {
      inter: inter,
      pretendard: pretendard,
    },
  },
});
