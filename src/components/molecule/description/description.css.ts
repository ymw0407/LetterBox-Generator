import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const serviceNameText = style({
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.9rem",
  fontStyle: "normal",
  fontWeight: 900,
  lineHeight: "normal",
  color: themeVars.color.primary[50],

  whiteSpace: "pre-wrap",

  userSelect: "none",
  marginTop: "0.2rem",
  marginBottom: "0.2rem",
});

export const aText = style({
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.9rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  color: themeVars.color.primary[50],

  whiteSpace: "pre-wrap",

  userSelect: "none",

  ":hover": {
    filter: "brightness(-10%)",
  },

  ":active": {
    filter: "brightness(10%)",
  },
});

export const pText = style({
  marginTop: "0.2rem",
  marginBottom: "0.2rem",
});
