import { themeVars } from "@styles/theme/themeContract.css";
import { style } from "@vanilla-extract/css";

export const progressBarContainer = style({
  width: "100%",
  height: "100%",
  background: `linear-gradient(to right, ${themeVars.color.primary[80]} 10%, ${themeVars.color.primary[60]} 50%, #ccc 0)`,
  backgroundSize: "200% 100%",

  transition: "all 1s ease-in-out",
});
