import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const h1StyleText = style({
  color: "inherit",

  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.75rem",
  fontStyle: "normal",
  lineHeight: "normal",

  userSelect: "none",

  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
