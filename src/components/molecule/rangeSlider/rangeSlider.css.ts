import { themeVars } from "@styles/theme/themeContract.css";
import { keyframes, style } from "@vanilla-extract/css";

export const rangeSlider = style({
  width: "100%",
  height: "0.5rem",

  marginLeft: "0.5rem",
  marginRight: "0.5rem",

  borderRadius: "4px",
  appearance: "none",
  outline: "none",

  cursor: "pointer",

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
  },
});

export const rangeSliderValueContainer = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const rangeSliderValue = style({
  width: "4ch",

  fontSize: "0.75rem",
  fontWeight: "700",
  lineHeight: "normal",
  textAlign: "right",

  float: "right",

  userSelect: "none",
});

export const rangeSliderContainer = style({
  display: "flex",
  alignItems: "center",
});

export const titleContainer = style({
  alignContent: "center",
  borderRadius: "4px",

  width: "3.75rem",
  height: "1.875rem",
  flexShrink: 0,

  backgroundColor: themeVars.color.primary[100],
  border: `solid 1px ${themeVars.color.primary[80]}`,

  fontFamily: themeVars.font.family.pretendard,
  textAlign: "center",
  fontSize: "0.75rem",
  fontWeight: "500",
  lineHeight: "normal",

  userSelect: "none",
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeInClass = style({
  animation: `${fadeIn} 1s ease-in-out forwards`,
});
