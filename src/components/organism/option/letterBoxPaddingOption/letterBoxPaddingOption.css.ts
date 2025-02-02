import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const valueComponent = style({
  width: "9ch",
  fontFamily: themeVars.font.family.pretendard,
  fontSize: "0.75rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
});
