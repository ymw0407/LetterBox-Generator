import { createThemeContract } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  color: {
    primary: {
      10: "", // darkness
      20: "",
      30: "",
      40: "",
      50: "",
      60: "",
      70: "",
      80: "",
      90: "",
      100: "", // lightness
    },
    neutral: {
      black: "",
      white: "",
      grey: {
        10: "", // darkness
        20: "",
        30: "",
        40: "",
        50: "",
        60: "",
        70: "",
        80: "",
        90: "",
        100: "", // lightness
      },
    },
  },
  font: {
    family: {
      inter: "",
      pretendard: "",
    },
  },
});
