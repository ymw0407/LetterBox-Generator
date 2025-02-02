import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const button = style({
  border: `solid 1px ${themeVars.color.primary[70]}`,
  borderRadius: "0.5rem",

  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: themeVars.color.neutral.white,
  color: themeVars.color.primary[40],

  ":hover": {
    background: `linear-gradient(to right, 
    ${themeVars.color.primary[30]} 0%, 
    ${themeVars.color.primary[60]} 100%)`,

    color: themeVars.color.neutral.white,
  },

  ":active": {
    filter: "brightness(90%)",
    color: themeVars.color.neutral.white,
  },
});

export const text = style({
  fontFamily: themeVars.font.family.pretendard,
  fontWeight: 700,

  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  marginLeft: "1rem",
  marginRight: "1rem",

  userSelect: "none",
});
