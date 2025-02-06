import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const descriptionStyleText = style({
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.9rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",

  whiteSpace: "pre-wrap",

  userSelect: "none",
});
