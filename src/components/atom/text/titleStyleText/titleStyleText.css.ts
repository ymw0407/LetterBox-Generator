import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const titleStyleText = style({
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "normal",

  userSelect: "none",
});
