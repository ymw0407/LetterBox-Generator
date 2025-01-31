import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const descriptionStyleText = style({
  width: "100%",

  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.75rem",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",

  whiteSpace: "pre-wrap",
});
