import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const rangeSlider = style({
  width: "100%",
  height: "0.5rem",
  borderRadius: "10px",
  // backgroundColor: themeVars.color.primary[30],
  appearance: "none",
  outline: "none",

  selectors: {
    'input[type="range"]&': {
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
    },
    'input[type="range"]&::-webkit-slider-thumb': {
      WebkitAppearance: "none",

      width: "0.7rem",
      height: "0.7rem",
      backgroundColor: themeVars.color.primary[50],
      borderRadius: "50%",
    },

    'input[type="range"]&::-moz-range-thumb': {
      width: "0.7rem",
      height: "0.7rem",
      backgroundColor: themeVars.color.primary[50],
      borderRadius: "50%",
    },
    'input[type="range"]&::-ms-fill-lower': {
      boxShadow: "1px 1px 1px #000000, 0px 0px 1px #0d0d0d",
    },
    // 'input[type="range"]&::-webkit-slider-runnable-track': {
    //   // width: "0.7rem",
    //   // height: "0.7rem",
    //   backgroundColor: themeVars.color.primary[90],
    //   // borderRadius: "50%",
    // },
  },
});
