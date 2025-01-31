import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const dottedLineRectangle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "100%",

  borderRadius: "0.625rem",
  border: "2px dashed",
  borderColor: themeVars.color.primary[60],
});
